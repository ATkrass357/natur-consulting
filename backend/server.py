from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
import uuid
from datetime import datetime, timezone
import httpx


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Telegram config
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', '').strip()
TELEGRAM_CHAT_ID = os.environ.get('TELEGRAM_CHAT_ID', '').strip()

# Create the main app without a prefix
app = FastAPI(title="Ecosafe / ecoprotec GmbH API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# -------- Models --------
class EmployeeApplication(BaseModel):
    vorname: str = Field(min_length=1, max_length=120)
    nachname: str = Field(min_length=1, max_length=120)
    email: EmailStr
    telefon: str = Field(min_length=3, max_length=40)
    geburtsdatum: Optional[str] = None
    adresse: Optional[str] = None
    erfahrung: Optional[str] = None
    qualifikationen: Optional[str] = None
    motivation: Optional[str] = None
    datenschutz: bool = True


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=160)
    email: EmailStr
    telefon: Optional[str] = None
    unternehmen: Optional[str] = None
    betreff: str = Field(min_length=1, max_length=200)
    nachricht: str = Field(min_length=1, max_length=4000)
    datenschutz: bool = True


# -------- Helpers --------
def _escape_html(text: str) -> str:
    if text is None:
        return "-"
    return (
        str(text)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


async def send_telegram(message_html: str) -> dict:
    """Send a message to Telegram. If token/chat_id missing, returns skipped=True."""
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        logger.warning("Telegram not configured (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing). Skipping send.")
        return {"sent": False, "skipped": True, "reason": "telegram_not_configured"}

    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message_html,
        "parse_mode": "HTML",
        "disable_web_page_preview": True,
    }
    try:
        async with httpx.AsyncClient(timeout=15.0) as hc:
            r = await hc.post(url, json=payload)
            if r.status_code >= 400:
                logger.error(f"Telegram error {r.status_code}: {r.text}")
                return {"sent": False, "skipped": False, "error": r.text}
            return {"sent": True, "skipped": False}
    except Exception as e:
        logger.exception("Telegram send failed")
        return {"sent": False, "skipped": False, "error": str(e)}


# -------- Routes --------
@api_router.get("/")
async def root():
    return {"service": "ecoprotec GmbH API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {
        "status": "ok",
        "telegram_configured": bool(TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID),
    }


@api_router.post("/registrierung/angestellte")
async def employee_registration(payload: EmployeeApplication):
    doc_id = str(uuid.uuid4())
    created = datetime.now(timezone.utc).isoformat()

    doc = payload.model_dump()
    doc["id"] = doc_id
    doc["created_at"] = created
    doc["type"] = "employee_application"

    await db.employee_applications.insert_one(doc)

    msg = (
        "<b>🌿 Neue Mitarbeiter-Registrierung</b>\n"
        "— — — — — — — — — —\n"
        f"<b>Name:</b> {_escape_html(payload.vorname)} {_escape_html(payload.nachname)}\n"
        f"<b>E-Mail:</b> {_escape_html(payload.email)}\n"
        f"<b>Telefon:</b> {_escape_html(payload.telefon)}\n"
        f"<b>Geburtsdatum:</b> {_escape_html(payload.geburtsdatum)}\n"
        f"<b>Adresse:</b> {_escape_html(payload.adresse)}\n"
        "— — — — — — — — — —\n"
        f"<b>Erfahrung:</b>\n{_escape_html(payload.erfahrung)}\n\n"
        f"<b>Qualifikationen:</b>\n{_escape_html(payload.qualifikationen)}\n\n"
        f"<b>Motivation:</b>\n{_escape_html(payload.motivation)}\n\n"
        f"<i>ID: {doc_id} · {created}</i>"
    )

    tg = await send_telegram(msg)
    return {"ok": True, "id": doc_id, "telegram": tg}


@api_router.post("/kontakt")
async def contact(payload: ContactMessage):
    doc_id = str(uuid.uuid4())
    created = datetime.now(timezone.utc).isoformat()

    doc = payload.model_dump()
    doc["id"] = doc_id
    doc["created_at"] = created
    doc["type"] = "contact_message"

    await db.contact_messages.insert_one(doc)

    msg = (
        "<b>📬 Neue Kontaktanfrage</b>\n"
        f"<b>Betreff:</b> {_escape_html(payload.betreff)}\n"
        "— — — — — — — — — —\n"
        f"<b>Name:</b> {_escape_html(payload.name)}\n"
        f"<b>E-Mail:</b> {_escape_html(payload.email)}\n"
        f"<b>Telefon:</b> {_escape_html(payload.telefon)}\n"
        f"<b>Unternehmen:</b> {_escape_html(payload.unternehmen)}\n"
        "— — — — — — — — — —\n"
        f"<b>Nachricht:</b>\n{_escape_html(payload.nachricht)}\n\n"
        f"<i>ID: {doc_id} · {created}</i>"
    )

    tg = await send_telegram(msg)
    return {"ok": True, "id": doc_id, "telegram": tg}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

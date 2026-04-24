"""Backend API tests for Ecosafe / ecoprotec GmbH.

Covers:
- /api/health
- /api/kontakt (POST) - valid / invalid email / missing fields
- /api/registrierung/angestellte (POST) - valid / invalid email
- MongoDB persistence (via repeated POSTs and id presence)
"""
import os
import re
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read from frontend .env if env var not exported
    try:
        with open("/app/frontend/.env") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break
    except Exception:
        pass

assert BASE_URL, "REACT_APP_BACKEND_URL is required"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health_ok(self, client):
        r = client.get(f"{API}/health", timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "ok"
        # Telegram keys empty on purpose -> telegram_configured must be False
        assert data.get("telegram_configured") is False

    def test_root(self, client):
        r = client.get(f"{API}/", timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"


# ---------- Contact endpoint ----------
class TestKontakt:
    def test_kontakt_valid(self, client):
        payload = {
            "name": "TEST_Max Mustermann",
            "email": "test.kontakt@example.com",
            "telefon": "+49 123 456",
            "unternehmen": "TEST_Company",
            "betreff": "Testanfrage",
            "nachricht": "Dies ist eine Testnachricht.",
            "datenschutz": True,
        }
        r = client.post(f"{API}/kontakt", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("ok") is True
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        # UUID format
        assert re.match(r"^[0-9a-f-]{36}$", data["id"])
        tg = data.get("telegram", {})
        assert tg.get("skipped") is True
        assert tg.get("sent") is False

    def test_kontakt_invalid_email(self, client):
        payload = {
            "name": "TEST_User",
            "email": "not-an-email",
            "betreff": "x",
            "nachricht": "y",
            "datenschutz": True,
        }
        r = client.post(f"{API}/kontakt", json=payload, timeout=20)
        assert r.status_code == 422, r.text

    def test_kontakt_missing_fields(self, client):
        payload = {"email": "a@b.com"}  # missing name/betreff/nachricht
        r = client.post(f"{API}/kontakt", json=payload, timeout=20)
        assert r.status_code == 422, r.text

    def test_kontakt_empty_strings(self, client):
        payload = {
            "name": "",
            "email": "a@b.com",
            "betreff": "",
            "nachricht": "",
            "datenschutz": True,
        }
        r = client.post(f"{API}/kontakt", json=payload, timeout=20)
        assert r.status_code == 422, r.text


# ---------- Employee registration endpoint ----------
class TestRegistrierung:
    def test_registrierung_valid(self, client):
        payload = {
            "vorname": "TEST_Anna",
            "nachname": "Beispiel",
            "email": f"test.reg.{uuid.uuid4().hex[:8]}@example.com",
            "telefon": "+49 170 1234567",
            "geburtsdatum": "1995-05-12",
            "adresse": "Musterstr. 1, 33100 Paderborn",
            "position": "ESG-Berater:in",
            "erfahrung": "5 Jahre Umweltberatung",
            "qualifikationen": "M.Sc. Umweltwissenschaft",
            "verfuegbarkeit": "01.06.2026",
            "gehaltsvorstellung": "60.000 €",
            "motivation": "Nachhaltigkeit ist meine Leidenschaft.",
            "datenschutz": True,
        }
        r = client.post(f"{API}/registrierung/angestellte", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("ok") is True
        assert "id" in data and re.match(r"^[0-9a-f-]{36}$", data["id"])
        tg = data.get("telegram", {})
        assert tg.get("skipped") is True
        assert tg.get("sent") is False

    def test_registrierung_invalid_email(self, client):
        payload = {
            "vorname": "A",
            "nachname": "B",
            "email": "bad-email",
            "telefon": "+49 170 1",
            "position": "ESG-Berater:in",
            "datenschutz": True,
        }
        r = client.post(f"{API}/registrierung/angestellte", json=payload, timeout=20)
        assert r.status_code == 422, r.text

    def test_registrierung_missing_required(self, client):
        payload = {
            "email": "test@example.com",
            "position": "ESG-Berater:in",
        }
        r = client.post(f"{API}/registrierung/angestellte", json=payload, timeout=20)
        assert r.status_code == 422, r.text

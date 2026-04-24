# Ecosafe (ecoprotec GmbH) – Product Requirements Document

## Original Problem Statement
Deutsche Unternehmenswebsite für "Ecosafe" / ecoprotec GmbH (Umweltberatung). 8 Seiten, sehr naturfokussiert. Mitarbeiter-Registrierungsformular unter `/registrierung/angestellte`, dessen Daten an einen Telegram-Bot (Token & Chat-ID in `.env`) gesendet werden.

Firmendaten: ecoprotec GmbH · Pamplonastraße 19, 33106 Paderborn · HRB 3625 · Amtsgericht Paderborn · USt-IdNr. DE 812996130 · GF Markus Engemann.

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind + shadcn/ui + sonner. Google Fonts: Outfit, Work Sans, Cormorant Garamond (accent).
- **Backend**: FastAPI, httpx für Telegram Bot API, MongoDB (motor) zur Speicherung der Einreichungen.
- **Telegram Integration**: `backend/.env` enthält `TELEGRAM_BOT_TOKEN` und `TELEGRAM_CHAT_ID`. Wenn leer → Nachricht wird übersprungen (`telegram.skipped: true`), Daten werden trotzdem in MongoDB persistiert.

## Core Requirements (static)
- 8 Seiten: Startseite, Unternehmen, Leistungen, Karriere, Kontakt, Impressum, Datenschutz, `/registrierung/angestellte`.
- Sticky Navigation, Footer mit Impressum/Datenschutz.
- Sprache: Deutsch. Design: erdige Palette (#1B3B22 Waldgrün, #9C462C Terracotta, #F8F7F4 Creme), kein AI-Slop-Purple.
- Mitarbeiter-Registrierungsformular mit Persönliche Angaben / Position / Laufbahn / Motivation-Blöcken + Datenschutz-Checkbox.
- Kontaktformular – beide senden an Telegram.

## User Personas
- **Unternehmenskunde** sucht Umweltberatung, liest Leistungen & Kontakt.
- **Bewerber:in** möchte initiativ oder auf Stelle bewerben → füllt `/registrierung/angestellte` aus.
- **Geschäftsführer Markus Engemann** erhält alle Einreichungen sofort per Telegram.

## Implemented (Feb 2026)
- ✅ Alle 8 Routen implementiert und lokal getestet.
- ✅ Header, Footer, Layout mit sticky glass-Navigation.
- ✅ Startseite mit Hero, USPs, Leistungs-Bento, Zitat, KPIs, CTA + Marquee.
- ✅ Unternehmen mit Bio, CEO-Portrait, Timeline, Werte.
- ✅ Leistungen mit 6 Detailkarten + CTA-Sektion.
- ✅ Karriere mit 5 Stellenausschreibungen + Benefits (Position wird beim Klick auf Stelle ins Formular übernommen).
- ✅ Kontaktformular → Telegram + MongoDB.
- ✅ Mitarbeiter-Registrierung mit 3 Blöcken + Success-Screen.
- ✅ Impressum (HRB 3625, Markus Engemann, DE 812996130) + Datenschutz (DSGVO).
- ✅ Backend 9/9 pytest passed; Frontend E2E manuell verifiziert.

## Backlog / Next Action Items
- P0: Echte `TELEGRAM_BOT_TOKEN` und `TELEGRAM_CHAT_ID` in `backend/.env` eintragen (Bot via @BotFather, Chat-ID per `getUpdates`).
- P1: Dateiupload (Lebenslauf/Zeugnisse PDF) im Bewerbungsformular.
- P1: hCaptcha / Turnstile gegen Formular-Spam.
- P2: Mehrsprachigkeit (EN) für internationale Kundschaft.
- P2: Blog / News-Sektion mit Fallstudien.
- P2: Admin-Dashboard zur Sichtung der gespeicherten Einreichungen.
- P2: Rate-Limiting auf Form-Endpoints.

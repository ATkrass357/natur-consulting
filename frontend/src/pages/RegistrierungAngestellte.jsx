import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { api } from "../lib/api";

const HERO = "https://images.pexels.com/photos/33288548/pexels-photo-33288548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const init = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  geburtsdatum: "",
  adresse: "",
  erfahrung: "",
  qualifikationen: "",
  motivation: "",
  datenschutz: false,
};

export default function RegistrierungAngestellte() {
  const [form, setForm] = useState(init);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.datenschutz) {
      toast.error("Bitte akzeptieren Sie die Datenschutzerklärung.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/registrierung/angestellte", form);
      toast.success("Bewerbung erfolgreich übermittelt. Wir melden uns zeitnah!");
      setSuccess(true);
      setForm(init);
    } catch (err) {
      toast.error("Übermittlung fehlgeschlagen. Bitte später erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-32 text-center" data-testid="page-registrierung-success">
        <CheckCircle2 size={64} className="mx-auto text-[#1B3B22]" strokeWidth={1.2} />
        <h1 className="font-heading text-4xl md:text-6xl font-light mt-8 text-[#1A221C]">Vielen Dank für Ihre Bewerbung.</h1>
        <p className="mt-6 text-[#414C45] text-lg leading-relaxed">
          Wir haben Ihre Unterlagen erhalten und prüfen sie sorgfältig. In der Regel melden wir uns innerhalb von <strong>5 Werktagen</strong> zurück.
        </p>
        <button onClick={() => setSuccess(false)} data-testid="restart-form" className="inline-block mt-12 border border-[#1B3B22] text-[#1B3B22] hover:bg-[#1B3B22] hover:text-[#F8F7F4] px-8 py-4 text-sm font-medium tracking-wide transition-colors">
          Weitere Bewerbung abschicken
        </button>
      </section>
    );
  }

  return (
    <div data-testid="page-registrierung">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="Wald" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B3B22]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
          <div className="font-label text-xs text-[#EFECE5]">Registrierung · Angestellte</div>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-[1.04] mt-6 max-w-4xl text-[#F8F7F4]">
            Werden Sie Teil der <span className="font-accent text-[#E5B79A]">Ecosafe</span>-Familie.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#D8D4CC] leading-relaxed">
            Füllen Sie das Formular vollständig aus – wir prüfen jede Bewerbung persönlich. Alle Angaben werden vertraulich behandelt.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <form onSubmit={submit} data-testid="reg-form" className="bg-white border border-[#D8D4CC] p-8 md:p-14 space-y-10">
          <Block title="Persönliche Angaben" nr="01">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Vorname" required>
                <input data-testid="r-vorname" required value={form.vorname} onChange={set("vorname")} className="inp" />
              </Field>
              <Field label="Nachname" required>
                <input data-testid="r-nachname" required value={form.nachname} onChange={set("nachname")} className="inp" />
              </Field>
              <Field label="E-Mail" required>
                <input data-testid="r-email" type="email" required value={form.email} onChange={set("email")} className="inp" />
              </Field>
              <Field label="Telefon" required>
                <input data-testid="r-telefon" type="tel" required value={form.telefon} onChange={set("telefon")} className="inp" />
              </Field>
              <Field label="Geburtsdatum">
                <input data-testid="r-geburtsdatum" type="date" value={form.geburtsdatum} onChange={set("geburtsdatum")} className="inp" />
              </Field>
              <Field label="Adresse">
                <input data-testid="r-adresse" placeholder="Straße, PLZ, Ort" value={form.adresse} onChange={set("adresse")} className="inp" />
              </Field>
            </div>
          </Block>

          <Block title="Ihre Laufbahn" nr="02">
            <Field label="Berufserfahrung">
              <textarea data-testid="r-erfahrung" rows={5} value={form.erfahrung} onChange={set("erfahrung")} placeholder="Stationen, Jahre, Schwerpunkte…" className="inp" />
            </Field>
            <Field label="Qualifikationen & Zertifikate">
              <textarea data-testid="r-qualifikationen" rows={4} value={form.qualifikationen} onChange={set("qualifikationen")} placeholder="Studium, Zusatzausbildungen, Zertifikate…" className="inp" />
            </Field>
            <Field label="Motivation">
              <textarea data-testid="r-motivation" rows={6} value={form.motivation} onChange={set("motivation")} placeholder="Warum Ecosafe? Was möchten Sie bewegen?" className="inp" />
            </Field>
          </Block>

          <div className="pt-4 border-t border-[#D8D4CC]">
            <label className="flex items-start gap-3 text-sm text-[#414C45] cursor-pointer">
              <input data-testid="r-datenschutz" type="checkbox" checked={form.datenschutz} onChange={set("datenschutz")} className="mt-1 accent-[#9C462C] w-4 h-4" />
              <span>Ich habe die <a href="/datenschutz" className="underline decoration-[#9C462C] underline-offset-2">Datenschutzerklärung</a> gelesen und willige ausdrücklich in die Speicherung und Verarbeitung meiner Bewerbungsdaten zum Zwecke des Auswahlprozesses ein.</span>
            </label>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                data-testid="reg-submit"
                className="inline-flex items-center gap-2 bg-[#9C462C] hover:bg-[#7A3622] disabled:opacity-60 text-white px-10 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                {loading ? "Wird übermittelt…" : "Bewerbung absenden"}
              </button>
              <span className="text-xs text-[#757F78]">Ihre Daten werden verschlüsselt übertragen und vertraulich behandelt.</span>
            </div>
          </div>
        </form>
      </section>

      <style>{`
        .inp {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #D8D4CC;
          padding: 14px 16px;
          color: #1A221C;
          font-family: 'Work Sans', sans-serif;
          transition: border-color .15s, box-shadow .15s;
          border-radius: 0;
        }
        .inp:focus {
          outline: none;
          border-color: #9C462C;
          box-shadow: 0 0 0 3px rgba(156, 70, 44, 0.12);
        }
      `}</style>
    </div>
  );
}

const Block = ({ title, nr, children }) => (
  <section className="space-y-6">
    <div className="flex items-baseline gap-6 pb-2 border-b border-[#D8D4CC]">
      <span className="font-accent text-3xl text-[#9C462C]">{nr}</span>
      <h2 className="font-heading text-2xl font-medium text-[#1A221C]">{title}</h2>
    </div>
    {children}
  </section>
);

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="font-label text-[11px] text-[#1A221C] mb-2 block">{label}{required && <span className="text-[#9C462C]"> *</span>}</span>
    {children}
  </label>
);
  padding: 14px 16px;
          color: #1A221C;
          font-family: 'Work Sans', sans-serif;
          transition: border-color .15s, box-shadow .15s;
          border-radius: 0;
        }
        .inp:focus {
          outline: none;
          border-color: #9C462C;
          box-shadow: 0 0 0 3px rgba(156, 70, 44, 0.12);
        }
      `}</style>
    </div>
  );
}

const Block = ({ title, nr, children }) => (
  <section className="space-y-6">
    <div className="flex items-baseline gap-6 pb-2 border-b border-[#D8D4CC]">
      <span className="font-accent text-3xl text-[#9C462C]">{nr}</span>
      <h2 className="font-heading text-2xl font-medium text-[#1A221C]">{title}</h2>
    </div>
    {children}
  </section>
);

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="font-label text-[11px] text-[#1A221C] mb-2 block">{label}{required && <span className="text-[#9C462C]"> *</span>}</span>
    {children}
  </label>
);

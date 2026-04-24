import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { api } from "../lib/api";

const init = { name: "", email: "", telefon: "", unternehmen: "", betreff: "", nachricht: "", datenschutz: false };

export default function Kontakt() {
  const [form, setForm] = useState(init);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.datenschutz) { toast.error("Bitte akzeptieren Sie die Datenschutzerklärung."); return; }
    setLoading(true);
    try {
      await api.post("/kontakt", form);
      toast.success("Vielen Dank – wir melden uns zeitnah zurück.");
      setForm(init);
    } catch (err) {
      toast.error("Senden fehlgeschlagen. Bitte später erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="page-kontakt">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16">
        <div className="font-label text-xs text-[#4A6B53]">Kontakt</div>
        <h1 className="font-heading text-5xl md:text-7xl font-light leading-[1.04] mt-6 max-w-4xl">
          Gespräche, die etwas <span className="font-accent text-[#9C462C]">verändern.</span>
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-4 space-y-10">
          <div>
            <div className="font-label text-xs text-[#9C462C]">Adresse</div>
            <div className="mt-3 flex gap-3 items-start"><MapPin size={18} className="text-[#1B3B22] mt-0.5" /><span>ecoprotec GmbH<br/>Pamplonastraße 19<br/>33106 Paderborn</span></div>
          </div>
          <div>
            <div className="font-label text-xs text-[#9C462C]">Telefon</div>
            <div className="mt-3 flex gap-3 items-center"><Phone size={18} className="text-[#1B3B22]" /><span>+49 (0) 5251 – 000 000</span></div>
          </div>
          <div>
            <div className="font-label text-xs text-[#9C462C]">E-Mail</div>
            <div className="mt-3 flex gap-3 items-center"><Mail size={18} className="text-[#1B3B22]" /><span>info@ecoprotec.de</span></div>
          </div>
          <div>
            <div className="font-label text-xs text-[#9C462C]">Geschäftszeiten</div>
            <div className="mt-3 text-sm text-[#414C45]">Mo – Fr · 08:00 – 17:30 Uhr<br/>Termine auch nach Vereinbarung</div>
          </div>
        </aside>

        <form onSubmit={submit} data-testid="kontakt-form" className="md:col-span-8 bg-white border border-[#D8D4CC] p-8 md:p-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Name" required>
              <input data-testid="k-name" type="text" required value={form.name} onChange={set("name")} className="w-full bg-white border border-[#D8D4CC] p-4 focus:ring-2 focus:ring-[#9C462C]/20 focus:border-[#9C462C] outline-none" />
            </Field>
            <Field label="E-Mail" required>
              <input data-testid="k-email" type="email" required value={form.email} onChange={set("email")} className="w-full bg-white border border-[#D8D4CC] p-4 focus:ring-2 focus:ring-[#9C462C]/20 focus:border-[#9C462C] outline-none" />
            </Field>
            <Field label="Telefon">
              <input data-testid="k-telefon" type="tel" value={form.telefon} onChange={set("telefon")} className="w-full bg-white border border-[#D8D4CC] p-4 focus:ring-2 focus:ring-[#9C462C]/20 focus:border-[#9C462C] outline-none" />
            </Field>
            <Field label="Unternehmen">
              <input data-testid="k-unternehmen" type="text" value={form.unternehmen} onChange={set("unternehmen")} className="w-full bg-white border border-[#D8D4CC] p-4 focus:ring-2 focus:ring-[#9C462C]/20 focus:border-[#9C462C] outline-none" />
            </Field>
          </div>
          <Field label="Betreff" required>
            <input data-testid="k-betreff" type="text" required value={form.betreff} onChange={set("betreff")} className="w-full bg-white border border-[#D8D4CC] p-4 focus:ring-2 focus:ring-[#9C462C]/20 focus:border-[#9C462C] outline-none" />
          </Field>
          <Field label="Nachricht" required>
            <textarea data-testid="k-nachricht" required rows={6} value={form.nachricht} onChange={set("nachricht")} className="w-full bg-white border border-[#D8D4CC] p-4 focus:ring-2 focus:ring-[#9C462C]/20 focus:border-[#9C462C] outline-none" />
          </Field>

          <label className="flex items-start gap-3 text-sm text-[#414C45] cursor-pointer">
            <input data-testid="k-datenschutz" type="checkbox" checked={form.datenschutz} onChange={set("datenschutz")} className="mt-1 accent-[#9C462C] w-4 h-4" />
            <span>Ich habe die <a href="/datenschutz" className="underline decoration-[#9C462C] underline-offset-2">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu.</span>
          </label>

          <button
            type="submit"
            disabled={loading}
            data-testid="kontakt-submit"
            className="inline-flex items-center gap-2 bg-[#9C462C] hover:bg-[#7A3622] disabled:opacity-60 text-white px-10 py-4 text-sm font-medium tracking-wide transition-colors"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            {loading ? "Wird gesendet…" : "Nachricht senden"}
          </button>
        </form>
      </section>
    </div>
  );
}

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="font-label text-[11px] text-[#1A221C] mb-2 block">{label}{required && <span className="text-[#9C462C]"> *</span>}</span>
    {children}
  </label>
);

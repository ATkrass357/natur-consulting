import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf, ShieldCheck, LineChart, Recycle } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1767677505638-38c958c3e794?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybiUyMGJ1aWxkaW5nJTIwbmF0dXJlfGVufDB8fHx8MTc3NzA2MDI4OXww&ixlib=rb-4.1.0&q=85";
const LEISTUNGEN_IMG = "https://images.unsplash.com/photo-1763376779670-3cc15c28713b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxsdXNoJTIwZ3JlZW4lMjBmb3Jlc3QlMjBzdW5saWdodHxlbnwwfHx8fDE3NzcwNjAyODh8MA&ixlib=rb-4.1.0&q=85";

const USPS = [
  { icon: ShieldCheck, title: "Rechtssicher", text: "BImSchG, KrWG, WHG – wir navigieren Sie souverän durch jede Verordnung." },
  { icon: LineChart, title: "ESG-ready", text: "Berichte nach CSRD, GRI & EU-Taxonomie, die Investoren wirklich überzeugen." },
  { icon: Recycle, title: "Kreislaufdenken", text: "Von Abfallbilanz zu echter Wertschöpfung – Circular Economy als Strategie." },
  { icon: Leaf, title: "Ganzheitlich", text: "Ingenieurwissen trifft Praxiserfahrung – beratend vom Audit bis zur Umsetzung." },
];

const LEISTUNGEN = [
  { nr: "01", title: "Umwelt-Compliance", text: "Gutachten, Genehmigungsverfahren, Behördenkommunikation, BImSchG-Audits." },
  { nr: "02", title: "Nachhaltigkeitsstrategie", text: "CSRD, EU-Taxonomie, wesentlichkeitsanalyse und belastbare ESG-Berichte." },
  { nr: "03", title: "Energie & Klima", text: "CO₂-Bilanz, Klimaneutralitätspfad, Energieaudit DIN 16247 und ISO 50001." },
  { nr: "04", title: "Abfall & Kreislauf", text: "Abfallbilanz, Entsorgungskonzepte, Mehrwegsysteme, ZSVR-Registrierung." },
  { nr: "05", title: "Gefahrstoffe", text: "Gefahrstoffkataster, REACH/CLP, TRGS 510 und AwSV-Prüfungen vor Ort." },
  { nr: "06", title: "Altlasten & Boden", text: "Historische Erkundung, Phase-I/II, Sanierungsplanung und Monitoring." },
];

const KPIS = [
  { value: "280+", label: "Beratene Unternehmen" },
  { value: "98%", label: "Genehmigungsquote" },
  { value: "14", label: "Ingenieur:innen im Team" },
];

export default function Startseite() {
  return (
    <div data-testid="page-startseite">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Moderne nachhaltige Architektur zwischen Redwood-Bäumen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#F8F7F4]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F7F4]/20 to-[#F8F7F4]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-28 md:pb-40">
          <div className="font-label text-xs text-[#1B3B22] rise">Ecosafe · ecoprotec GmbH</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[88px] leading-[1.02] font-light text-[#1A221C] mt-6 max-w-5xl rise rise-1">
            Umwelt­beratung, die Unternehmen <span className="font-accent text-[#9C462C]">vorausdenkt.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#414C45] leading-relaxed rise rise-2">
            Wir verbinden ingenieurwissenschaftliche Präzision mit ökologischer Weitsicht – für rechtssichere Genehmigungen, glaubwürdige Nachhaltigkeitsberichte und echte Kreislaufstrategien.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4 rise rise-3">
            <Link to="/leistungen" data-testid="hero-cta-leistungen" className="group inline-flex items-center gap-2 bg-[#1B3B22] hover:bg-[#142C19] text-[#F8F7F4] px-8 py-4 text-sm font-medium tracking-wide transition-colors">
              Leistungen entdecken <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/kontakt" data-testid="hero-cta-kontakt" className="inline-flex items-center gap-2 border border-[#1B3B22] text-[#1B3B22] hover:bg-[#1B3B22] hover:text-[#F8F7F4] px-8 py-4 text-sm font-medium tracking-wide transition-colors">
              Beratung anfragen
            </Link>
          </div>
        </div>

        {/* Marquee brandmark */}
        <div className="relative overflow-hidden border-y border-[#1B3B22]/10 bg-[#EFECE5]">
          <div className="marquee-track flex whitespace-nowrap py-4 text-[#1B3B22]/60 font-label text-xs">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0">
                {["BImSchG · Audits", "ISO 14001", "ISO 50001", "CSRD · ESG", "Kreislaufwirtschaft", "AwSV", "REACH / CLP", "Altlasten"].map((t, i) => (
                  <span key={i} className="px-10 flex items-center gap-10">{t}<span>·</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-end">
          <div className="md:col-span-5">
            <div className="font-label text-xs text-[#4A6B53]">Unser Versprechen</div>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-[#1A221C] mt-4">Vier Prinzipien, die jedes Mandat tragen.</h2>
          </div>
          <p className="md:col-span-7 text-lg text-[#414C45] leading-relaxed">
            Wir arbeiten nicht mit Floskeln, sondern mit Gutachten, Messwerten und Taten. Für mittelständische Industrie, produzierendes Gewerbe und kommunale Träger in ganz Deutschland.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USPS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} data-testid={`usp-${i}`} className="bg-white border border-[#D8D4CC] p-8 hover:border-[#4A6B53] hover:-translate-y-1 transition-all">
              <Icon size={28} className="text-[#9C462C]" strokeWidth={1.4} />
              <h3 className="font-heading text-xl font-medium text-[#1A221C] mt-6">{title}</h3>
              <p className="mt-3 text-[#414C45] text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEISTUNGEN BENTO */}
      <section className="bg-[#EFECE5] py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
            <div className="md:col-span-7">
              <div className="font-label text-xs text-[#4A6B53]">Leistungen</div>
              <h2 className="font-heading text-4xl md:text-5xl font-medium mt-4 text-[#1A221C]">Sechs Disziplinen, <br/><span className="font-accent text-[#9C462C]">ein Kompass.</span></h2>
            </div>
            <div className="md:col-span-5 md:pl-12 border-l border-[#1B3B22]/15">
              <p className="text-[#414C45] text-base leading-relaxed">
                Unsere Beratung ist modular – kombinierbar, skalierbar und abgestimmt auf Ihre konkrete Verordnungslage.
              </p>
              <Link to="/leistungen" data-testid="leistungen-detail-link" className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#1B3B22] hover:text-[#9C462C] transition-colors">
                Alle Leistungen <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEISTUNGEN.map((l) => (
              <article key={l.nr} data-testid={`leistung-card-${l.nr}`} className="bg-white border border-[#D8D4CC] p-10 hover:border-[#4A6B53] hover:-translate-y-1 transition-all group">
                <div className="flex items-start justify-between">
                  <span className="font-label text-xs text-[#9C462C]">{l.nr}</span>
                  <ArrowUpRight size={18} className="text-[#1B3B22] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading text-2xl font-medium text-[#1A221C] mt-8">{l.title}</h3>
                <p className="mt-4 text-[#414C45] text-sm leading-relaxed">{l.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + Image */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <img src={LEISTUNGEN_IMG} alt="Moos und Farn" className="w-full h-[520px] object-cover" />
        </div>
        <div className="md:col-span-7 md:pl-12">
          <div className="font-label text-xs text-[#4A6B53]">Ein Wort von Markus Engemann</div>
          <blockquote className="font-accent text-3xl md:text-4xl text-[#1A221C] leading-snug mt-6">
            „Umweltberatung ist für uns keine Pflicht­übung – es ist Handwerk. Wir hinterlassen Unternehmen widerstands­fähiger, als wir sie vorgefunden haben."
          </blockquote>
          <div className="mt-8 font-label text-xs text-[#414C45]">— Markus Engemann, Geschäftsführer</div>
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-[#1B3B22] text-[#F8F7F4] py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {KPIS.map((k) => (
            <div key={k.label} data-testid={`kpi-${k.label}`}>
              <div className="font-heading text-5xl md:text-6xl font-light">{k.value}</div>
              <div className="font-label text-xs text-[#A9B1AA] mt-3">{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
        <div className="font-label text-xs text-[#4A6B53]">Nächster Schritt</div>
        <h2 className="font-heading text-4xl md:text-6xl font-light mt-4 text-[#1A221C]">
          Lassen Sie uns <span className="font-accent text-[#9C462C]">gemeinsam</span><br/> etwas Lebens­wertes bauen.
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link to="/kontakt" data-testid="cta-kontakt" className="bg-[#9C462C] hover:bg-[#7A3622] text-white px-10 py-5 text-sm font-medium tracking-wide transition-colors">Beratungstermin anfragen</Link>
          <Link to="/karriere" data-testid="cta-karriere" className="border border-[#1B3B22] text-[#1B3B22] hover:bg-[#1B3B22] hover:text-[#F8F7F4] px-10 py-5 text-sm font-medium tracking-wide transition-colors">Karriere bei Ecosafe</Link>
        </div>
      </section>
    </div>
  );
}

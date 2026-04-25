import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, MountainSnow, Sprout, Users } from "lucide-react";

const HERO = "https://images.pexels.com/photos/33288548/pexels-photo-33288548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const STELLEN = [
  { rolle: "Umweltgutachter:in (m/w/d)", ort: "Paderborn", typ: "Vollzeit", beschreibung: "BImSchG-Genehmigungsverfahren, Gutachten und Behördenkommunikation." },
  { rolle: "ESG-Berater:in (m/w/d)", ort: "Paderborn / hybrid", typ: "Vollzeit", beschreibung: "CSRD-Berichte, Wesentlichkeitsanalysen und EU-Taxonomie-Bewertungen." },
  { rolle: "Sachverständige:r Altlasten (m/w/d)", ort: "Paderborn", typ: "Voll-/Teilzeit", beschreibung: "Phase I/II, Sanierungsplanung und Monitoring bundesweit." },
  { rolle: "Werkstudent:in Umwelt (m/w/d)", ort: "Paderborn", typ: "20 h / Woche", beschreibung: "Unterstützung in Gutachten, Recherche und Datenaufbereitung." },
  { rolle: "Projektassistenz (m/w/d)", ort: "Paderborn", typ: "Vollzeit", beschreibung: "Koordination, Fristenmanagement, Dokumentation." },
];

const BENEFITS = [
  { icon: Sprout, t: "Inhaltlich sinnstiftend", d: "Jedes Projekt zahlt messbar auf Klima- und Umweltschutz ein." },
  { icon: Users, t: "Kollegial & flach", d: "14 Ingenieur:innen, direkte Wege, echte Mitentscheidung." },
  { icon: MountainSnow, t: "Weiterbildung", d: "Individuelles Entwicklungsbudget, interne Fachschule." },
  { icon: Heart, t: "Familienfreundlich", d: "Flexible Arbeitszeiten, hybrides Arbeiten, 30 Urlaubstage." },
];

export default function Karriere() {
  return (
    <div data-testid="page-karriere">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="Sonnenlicht im Nadelwald" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B3B22]/55" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-36 md:pb-44">
          <div className="font-label text-xs text-[#EFECE5]">Karriere</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[84px] font-light leading-[1.04] mt-6 max-w-4xl text-[#F8F7F4]">
            Arbeiten, wo <span className="font-accent text-[#E5B79A]">Sinn</span> und Substanz sich nicht ausschließen.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#D8D4CC] leading-relaxed">
            Werden Sie Teil eines Teams, das Umweltschutz als Ingenieurdisziplin versteht – nicht als Marketing-Label.
          </p>
          <Link to="/registrierung/angestellte" data-testid="karriere-hero-cta" className="inline-flex mt-12 bg-[#9C462C] hover:bg-[#7A3622] text-white px-10 py-5 text-sm font-medium tracking-wide transition-colors">
            Jetzt initiativ bewerben
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="font-label text-xs text-[#4A6B53]">Offene Stellen</div>
        <h2 className="font-heading text-4xl md:text-5xl font-medium mt-4 text-[#1A221C]">Fünf Türen, ein Ziel.</h2>
        <div className="mt-16 divide-y divide-[#1B3B22]/15 border-t border-[#1B3B22]/15">
          {STELLEN.map((s, i) => (
            <Link
              to="/registrierung/angestellte"
              state={{ position: s.rolle.replace(" (m/w/d)", "") }}
              key={s.rolle}
              data-testid={`stelle-${i}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 hover:bg-[#EFECE5]/60 transition-colors group cursor-pointer px-4 -mx-4"
            >
              <div className="md:col-span-5 font-heading text-2xl text-[#1A221C]">{s.rolle}</div>
              <div className="md:col-span-2 text-sm text-[#4A6B53] self-center">{s.ort}</div>
              <div className="md:col-span-2 text-sm text-[#4A6B53] self-center">{s.typ}</div>
              <div className="md:col-span-2 text-sm text-[#414C45] self-center">{s.beschreibung}</div>
              <div className="md:col-span-1 flex items-center justify-end">
                <ArrowUpRight size={22} className="text-[#9C462C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#EFECE5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="font-label text-xs text-[#4A6B53]">Benefits</div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mt-4 text-[#1A221C]">Warum Natur Consulting.</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(({ icon: Icon, t, d }, i) => (
              <div key={t} data-testid={`benefit-${i}`} className="bg-white border border-[#D8D4CC] p-10 hover:border-[#4A6B53] hover:-translate-y-1 transition-all">
                <Icon size={26} strokeWidth={1.4} className="text-[#9C462C]" />
                <h3 className="font-heading text-xl text-[#1A221C] mt-6">{t}</h3>
                <p className="mt-3 text-[#414C45] text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
        <div className="font-label text-xs text-[#4A6B53]">Initiativbewerbung</div>
        <h2 className="font-heading text-4xl md:text-6xl font-light mt-4 text-[#1A221C]">Keine Stelle passt? <span className="font-accent text-[#9C462C]">Sprechen Sie trotzdem mit uns.</span></h2>
        <Link to="/registrierung/angestellte" data-testid="karriere-bottom-cta" className="inline-block mt-10 bg-[#1B3B22] hover:bg-[#142C19] text-white px-10 py-5 text-sm font-medium tracking-wide transition-colors">
          Zur Mitarbeiter-Registrierung
        </Link>
      </section>
    </div>
  );
}

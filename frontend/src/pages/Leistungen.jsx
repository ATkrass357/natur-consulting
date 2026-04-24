import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const FOREST = "https://images.unsplash.com/photo-1763376779670-3cc15c28713b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxsdXNoJTIwZ3JlZW4lMjBmb3Jlc3QlMjBzdW5saWdodHxlbnwwfHx8fDE3NzcwNjAyODh8MA&ixlib=rb-4.1.0&q=85";

const LEISTUNGEN = [
  {
    nr: "01",
    titel: "Umwelt-Compliance & Genehmigungen",
    lead: "Rechtssicherheit in BImSchG, WHG, KrWG, StörfallV und AwSV.",
    bullets: ["Immissionsschutzrechtliche Genehmigungsverfahren", "Anzeige- und Änderungsverfahren", "Behördenkommunikation und Fristenmanagement", "Umwelt-Compliance-Audits vor Ort"],
  },
  {
    nr: "02",
    titel: "Nachhaltigkeitsstrategie & ESG",
    lead: "Berichte, die Investoren, Kund:innen und Aufsichtsräte gleichermaßen überzeugen.",
    bullets: ["CSRD/ESRS-Berichterstattung", "Wesentlichkeitsanalyse (doppelt)", "EU-Taxonomie-Bewertung", "GHG-Protocol Scope 1–3"],
  },
  {
    nr: "03",
    titel: "Energie- & Klimamanagement",
    lead: "Vom ersten Audit bis zur zertifizierten Klimaneutralität.",
    bullets: ["Energieaudit nach DIN EN 16247", "ISO 50001-Implementierung", "Corporate Carbon Footprint", "Dekarbonisierungsroadmap"],
  },
  {
    nr: "04",
    titel: "Abfall- & Kreislaufwirtschaft",
    lead: "Aus Entsorgungskosten echte Wertschöpfung machen.",
    bullets: ["Abfallbilanzen und Entsorgungskonzepte", "Nachweis- und Registerführung", "ZSVR-/LUCID-Registrierung", "Circular-Economy-Strategie"],
  },
  {
    nr: "05",
    titel: "Gefahrstoffe & Betriebssicherheit",
    lead: "Schutz für Mensch, Anlage und Umwelt.",
    bullets: ["Gefahrstoffkataster", "REACH/CLP-Konformität", "TRGS 510, AwSV-Prüfungen", "Explosionsschutzdokumente"],
  },
  {
    nr: "06",
    titel: "Altlasten, Boden & Grundwasser",
    lead: "Vom Erstverdacht zur nachhaltigen Sanierung.",
    bullets: ["Historische Erkundung (Phase I)", "Orientierende und Detailuntersuchung", "Sanierungsplanung und -überwachung", "Monitoring und Rückbau"],
  },
];

export default function Leistungen() {
  return (
    <div data-testid="page-leistungen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={FOREST} alt="Moos und Farn" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#F8F7F4]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F4]/0 via-[#F8F7F4]/30 to-[#F8F7F4]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-24">
          <div className="font-label text-xs text-[#1B3B22]">Leistungen</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[84px] font-light leading-[1.04] mt-6 max-w-5xl">
            Von der ersten <span className="font-accent text-[#9C462C]">Bestandsaufnahme</span> bis zur letzten Genehmigung.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#414C45] leading-relaxed">
            Sechs Disziplinen, die ineinandergreifen – als modulares Beratungssystem oder als Rund-um-Mandat.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid gap-6">
          {LEISTUNGEN.map((l, i) => (
            <article
              key={l.nr}
              data-testid={`leistung-full-${l.nr}`}
              className="bg-white border border-[#D8D4CC] p-10 md:p-14 hover:border-[#4A6B53] transition-all grid md:grid-cols-12 gap-8 md:gap-12"
            >
              <div className="md:col-span-1">
                <div className="font-accent text-4xl text-[#9C462C]">{l.nr}</div>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-[#1A221C]">{l.titel}</h2>
                <p className="mt-4 text-[#414C45] leading-relaxed">{l.lead}</p>
              </div>
              <div className="md:col-span-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-[#2C332D]">
                      <span className="mt-2 block h-[1px] w-5 bg-[#9C462C]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/kontakt" data-testid={`leistung-cta-${l.nr}`} className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#1B3B22] hover:text-[#9C462C] transition-colors">
                  Anfrage stellen <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1B3B22] text-[#F8F7F4] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="font-label text-xs text-[#A9B1AA]">Maßgeschneidert</div>
          <h2 className="font-heading text-4xl md:text-6xl font-light mt-4">Sie sehen Ihre Aufgabe nicht in der Liste?</h2>
          <p className="mt-6 text-[#A9B1AA] max-w-2xl mx-auto">
            Unsere Expertise reicht weiter als sechs Kacheln. Sprechen Sie uns an – viele Mandate beginnen mit einer ungewöhnlichen Frage.
          </p>
          <Link to="/kontakt" data-testid="leistungen-bottom-cta" className="inline-block mt-10 bg-[#9C462C] hover:bg-[#7A3622] text-white px-10 py-5 text-sm font-medium tracking-wide transition-colors">
            Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const OFFICE = "https://images.unsplash.com/photo-1772333388934-5de156928c0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxzdXN0YWluYWJsZSUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybiUyMGJ1aWxkaW5nJTIwbmF0dXJlfGVufDB8fHx8MTc3NzA2MDI4OXww&ixlib=rb-4.1.0&q=85";
const CEO = "https://images.pexels.com/photos/28002663/pexels-photo-28002663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const TIMELINE = [
  { y: "2003", t: "Gründung in Paderborn", d: "Markus Engemann gründet die ecoprotec GmbH als Ingenieurbüro für Umwelt- und Genehmigungsplanung." },
  { y: "2009", t: "Erweiterung Altlasten & Boden", d: "Aufbau des Fachbereichs historische Erkundung und Sanierungsplanung." },
  { y: "2015", t: "ISO 14001 / 50001 Zertifizierungen", d: "Eigene Managementsysteme als Beweis praktizierter Nachhaltigkeit." },
  { y: "2021", t: "CSRD & ESG-Beratung", d: "Aufbau der Sustainability-Reporting-Unit für Mittelstand und Industriekonzerne." },
  { y: "2024", t: "Über 280 Mandate", d: "Mehr als 280 Unternehmen bundesweit vertrauen auf unsere Beratung." },
];

const WERTE = [
  { t: "Wahrhaftigkeit", d: "Wir versprechen nur, was wir messen und belegen können." },
  { t: "Langfristigkeit", d: "Beratung, die in 20 Jahren noch trägt – nicht nur im nächsten Quartalsbericht." },
  { t: "Handwerk", d: "Ingenieurpräzision. Keine Schlagworte, sondern Gutachten." },
  { t: "Respekt", d: "Vor der Natur. Vor unseren Mandantinnen und Mandanten. Vor unseren Mitarbeitenden." },
];

export default function Unternehmen() {
  return (
    <div data-testid="page-unternehmen">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16">
        <div className="font-label text-xs text-[#4A6B53] rise">Unternehmen</div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-[84px] font-light leading-[1.04] mt-6 max-w-4xl rise rise-1">
          Ein Ingenieurbüro mit <span className="font-accent text-[#9C462C]">Wurzeln</span> in der ostwestfälischen Erde.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[#414C45] leading-relaxed rise rise-2">
          Seit 2003 beraten wir Unternehmen in allen Fragen des betrieblichen Umweltschutzes. Fachlich fundiert, menschlich verbindlich.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <img src={OFFICE} alt="Nachhaltige Architektur mit Pflanzen" className="w-full h-[380px] md:h-[560px] object-cover" />
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="font-label text-xs text-[#4A6B53]">Geschäftsführung</div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mt-4 text-[#1A221C]">Markus Engemann</h2>
          <p className="mt-6 text-[#414C45] text-base leading-relaxed">
            Diplom-Ingenieur für Umwelttechnik mit mehr als 25 Jahren Praxiserfahrung in Genehmigungsplanung, Altlastenbearbeitung und Nachhaltigkeits­beratung. Gründer und alleiniger Geschäftsführer der ecoprotec GmbH.
          </p>
          <p className="mt-4 text-[#414C45] text-base leading-relaxed italic font-accent">
            „Die Zukunft unserer Kinder ist keine Frage der Ideologie. Sie ist eine Frage der Ingenieurleistung."
          </p>
        </div>
        <div className="md:col-span-7">
          <img src={CEO} alt="Markus Engemann, Geschäftsführer" className="w-full h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#EFECE5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="font-label text-xs text-[#4A6B53]">Chronik</div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mt-4 text-[#1A221C]">Zwei Jahrzehnte Umweltberatung.</h2>
          <div className="mt-16 space-y-10">
            {TIMELINE.map((x, i) => (
              <div key={x.y} data-testid={`timeline-${x.y}`} className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-[#1B3B22]/15 pt-8">
                <div className="md:col-span-2 font-accent text-4xl text-[#9C462C]">{x.y}</div>
                <div className="md:col-span-4 font-heading text-2xl text-[#1A221C]">{x.t}</div>
                <div className="md:col-span-6 text-[#414C45] leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="font-label text-xs text-[#4A6B53]">Werte</div>
        <h2 className="font-heading text-4xl md:text-5xl font-medium mt-4 text-[#1A221C]">Vier Werte, eine Haltung.</h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {WERTE.map((w, i) => (
            <div key={w.t} data-testid={`wert-${i}`} className="bg-white border border-[#D8D4CC] p-12 hover:border-[#4A6B53] transition-all">
              <div className="font-label text-xs text-[#9C462C]">0{i + 1}</div>
              <h3 className="font-heading text-2xl text-[#1A221C] mt-6">{w.t}</h3>
              <p className="mt-4 text-[#414C45]">{w.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <Link to="/kontakt" data-testid="unternehmen-cta-kontakt" className="inline-flex bg-[#9C462C] hover:bg-[#7A3622] text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors">
            Lernen Sie uns persönlich kennen
          </Link>
        </div>
      </section>
    </div>
  );
}

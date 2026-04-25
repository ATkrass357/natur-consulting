import React from "react";

export default function Impressum() {
  return (
    <div data-testid="page-impressum" className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="font-label text-xs text-[#4A6B53]">Rechtliches</div>
      <h1 className="font-heading text-5xl md:text-6xl font-light mt-4 text-[#1A221C]">Impressum</h1>

      <div className="mt-16 space-y-10 text-[#414C45] leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">Angaben gemäß § 5 TMG</h2>
          <p className="mt-4">
            ecoprotec GmbH<br/>
            Pamplonastraße 19<br/>
            33106 Paderborn<br/>
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">Vertreten durch</h2>
          <p className="mt-4">Geschäftsführer: Markus Engemann</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">Kontakt</h2>
          <p className="mt-4">
            E-Mail: info@natur-consulting.de
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">Registereintrag</h2>
          <p className="mt-4">
            Handelsregister: HRB 3625<br/>
            Registergericht: Amtsgericht Paderborn
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="mt-4">
            Markus Engemann<br/>
            ecoprotec GmbH<br/>
            Pamplonastraße 19<br/>
            33106 Paderborn
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">Haftungsausschluss</h2>
          <p className="mt-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <p className="mt-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">Urheberrecht</h2>
          <p className="mt-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}

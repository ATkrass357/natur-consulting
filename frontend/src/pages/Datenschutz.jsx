import React from "react";

export default function Datenschutz() {
  return (
    <div data-testid="page-datenschutz" className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="font-label text-xs text-[#4A6B53]">Rechtliches</div>
      <h1 className="font-heading text-5xl md:text-6xl font-light mt-4 text-[#1A221C]">Datenschutz­erklärung</h1>

      <div className="mt-16 space-y-10 text-[#414C45] leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">1. Verantwortlicher</h2>
          <p className="mt-4">
            ecoprotec GmbH<br/>
            Pamplonastraße 19, 33106 Paderborn<br/>
            Vertreten durch den Geschäftsführer Markus Engemann<br/>
            E-Mail: info@ecoprotec.de
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">2. Allgemeines zur Datenverarbeitung</h2>
          <p className="mt-4">
            Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung der Nutzer.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">3. Rechtsgrundlage</h2>
          <p className="mt-4">
            Rechtsgrundlage der Verarbeitung ist bei Einwilligung Art. 6 Abs. 1 lit. a DSGVO, bei Vertragsanbahnung/Erfüllung Art. 6 Abs. 1 lit. b DSGVO, bei gesetzlicher Pflicht Art. 6 Abs. 1 lit. c DSGVO und bei berechtigtem Interesse Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">4. Kontakt- und Bewerbungsformulare</h2>
          <p className="mt-4">
            Bei der Nutzung unseres Kontakt- oder Bewerbungsformulars werden die im Formular eingegebenen Daten (u. a. Name, E-Mail, Telefon, Nachricht bzw. Lebenslaufangaben) zur Bearbeitung Ihrer Anfrage bzw. Bewerbung verarbeitet. Die Daten werden an ein verschlüsseltes Messaging-System des Verantwortlichen (Telegram) weitergeleitet, damit eine zeitnahe Bearbeitung durch verantwortliche Personen möglich ist.
          </p>
          <p className="mt-4">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung nicht mehr erforderlich sind – spätestens jedoch nach gesetzlich vorgeschriebenen Aufbewahrungsfristen.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">5. Ihre Rechte</h2>
          <p className="mt-4">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch und Widerruf erteilter Einwilligungen. Darüber hinaus haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">6. Speicherdauer</h2>
          <p className="mt-4">
            Wir speichern personenbezogene Daten nur so lange, wie dies für die Erreichung der jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">7. Server-Logfiles</h2>
          <p className="mt-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien (Browsertyp, Betriebssystem, Referrer URL, IP-Adresse, Uhrzeit). Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">8. SSL-/TLS-Verschlüsselung</h2>
          <p className="mt-4">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#1A221C]">9. Änderungen dieser Erklärung</h2>
          <p className="mt-4">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Für Ihren erneuten Besuch gilt dann die aktualisierte Datenschutzerklärung.
          </p>
        </section>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Impressum() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Impressum
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-3">
                <strong>Name:</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Lukas Börger
              </p>
              
              <p className="text-gray-600 mb-3">
                <strong>Anschrift:</strong>
              </p>
              <p className="text-gray-600 mb-1">
                Sperberweg 48
              </p>
              <p className="text-gray-600 mb-4">
                48291 Telgte
              </p>
              
              <p className="text-gray-600 mb-3">
                <strong>E-Mail:</strong>
              </p>
              <p className="text-gray-600">
                <a href="mailto:lukas0606@outlook.de" className="text-indigo-600 hover:underline">
                  lukas0606@outlook.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-gray-600">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. 
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Haftung für Links
            </h2>
            <p className="text-gray-600">
              Diese Website enthält gegebenenfalls Links zu externen Webseiten Dritter, auf deren Inhalte ich 
              keinen Einfluss habe. Deshalb kann ich für fremde Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Urheberrecht
            </h2>
            <p className="text-gray-600">
              Die durch mich erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. 
              Beiträge Dritter sind als solche gekennzeichnet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Hinweis
            </h2>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <p className="text-gray-700 mb-3">
                Dies ist ein <strong>privates, nicht-kommerzielles Projekt</strong>.
              </p>
              <p className="text-gray-700 mb-3">
                Es besteht <strong>keine Gewinnerzielungsabsicht</strong>.
              </p>
              <p className="text-gray-700">
                Sobald eine Monetarisierung (z. B. durch Werbung) erfolgt, wird das Impressum entsprechend aktualisiert.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              EU-Streitschlichtung
            </h2>
            <p className="text-gray-600 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-gray-600">
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-6">
          <Link 
            to={createPageUrl('Home')} 
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Zurück zur Startseite
          </Link>
          <Link 
            to={createPageUrl('Privacy')} 
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </main>
  );
}
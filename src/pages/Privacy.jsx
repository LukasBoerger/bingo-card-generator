import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        
        <p className="text-gray-600 mb-8">
          Last updated: November 13, 2025
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. General Information
            </h2>
            <p className="text-gray-600 mb-4">
              This website provides a <strong>fully client-side Bingo Card Generator</strong>.
              All processing happens exclusively in your web browser.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>No uploaded files, images, text content, or bingo card configurations are ever transmitted to a server.</strong>
              No personal data is collected, stored, or processed for the operation of the Bingo Generator.
            </p>
            <p className="text-gray-600">
              Your data remains entirely on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Server Logs
            </h2>
            <p className="text-gray-600 mb-4">
              Our hosting provider automatically processes minimal technical data (server log files) required to operate and secure the website. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Anonymized IP address</li>
              <li>Date and time of access</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
              <li>Requested file or page</li>
            </ul>
            <p className="text-gray-600 mb-4">
              These logs are processed solely by the hosting provider for security, error detection, and performance optimization.
            </p>
            <p className="text-gray-600">
              We do not combine this data with other sources or attempt to identify visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>This website does not use cookies</strong> for functionality, analytics, or advertising.
            </p>
            <p className="text-gray-600">
              If cookies become necessary in the future (e.g., for Google AdSense), this privacy policy will be updated 
              and appropriate consent mechanisms (e.g., cookie banner) will be implemented before activation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Local Storage
            </h2>
            <p className="text-gray-600 mb-4">
              The Bingo Card Generator may use your browser's <strong>localStorage</strong> to temporarily store your progress on your device.
              This data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>is stored only on your device</li>
              <li>is never sent to our servers or any third party</li>
              <li>can be deleted manually at any time through your browser settings</li>
            </ul>
            <p className="text-gray-600">
              If you disable localStorage in your browser, certain features may not work as intended.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Third-Party Services
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Google Fonts
            </h3>
            <p className="text-gray-600 mb-4">
              If Google Fonts are used, your browser may load font files from Google servers.
              This may include transmission of your IP address to Google.
            </p>
            <p className="text-gray-600 mb-6">
              Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://policies.google.com/privacy</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Google AdSense (Future)
            </h3>
            <p className="text-gray-600 mb-4">
              We may integrate Google AdSense for displaying advertisements in the future.
              If activated, Google AdSense may use cookies and similar technologies to serve personalized ads.
            </p>
            <p className="text-gray-600 mb-4">
              Before enabling AdSense:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>this privacy policy will be updated</li>
              <li>a cookie consent solution will be implemented</li>
            </ul>
            <p className="text-gray-600">
              Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Your Rights (GDPR)
            </h2>
            <p className="text-gray-600 mb-4">
              You have the following rights under the GDPR:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Since this website does not store personal data, these rights apply primarily to server log files 
              processed by our hosting provider.
            </p>
            <p className="text-gray-600">
              To exercise your rights, please use the contact details provided in the <Link to={createPageUrl('Impressum')} className="text-indigo-600 hover:underline">Imprint (Impressum)</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Contact
            </h2>
            <p className="text-gray-600">
              For questions or data protection requests, please refer to the contact information in the <Link to={createPageUrl('Impressum')} className="text-indigo-600 hover:underline">Imprint (Impressum)</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to update this privacy policy to reflect changes in legal requirements or technical adjustments.
            </p>
            <p className="text-gray-600">
              The "Last updated" date above indicates the most recent changes.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-6">
          <Link 
            to={createPageUrl('Home')} 
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Back to Home
          </Link>
          <Link 
            to={createPageUrl('Impressum')} 
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Impressum
          </Link>
        </div>
      </div>
    </main>
  );
}
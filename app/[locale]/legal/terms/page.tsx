import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const title: Record<Locale, string> = {
  en: 'Terms of Use',
  it: 'Termini di Utilizzo',
  de: 'Nutzungsbedingungen',
  fr: "Conditions d'Utilisation",
  es: 'Condiciones de Uso',
}

const lastUpdated = '2025-01-01'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: title[l] }
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">{title[l]}</h1>
      <p className="text-sm text-zinc-400 mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using convert·tables (converttables.com), you agree to be bound by these Terms of
            Use. If you do not agree with any part of these terms, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">2. Use of the Service</h2>
          <p>
            convert·tables provides free online unit conversion tools and mathematical reference tables for
            informational and educational purposes only. You may use the site for personal, non-commercial use.
          </p>
          <p className="mt-2">You agree not to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Scrape or systematically download content in ways that burden our servers</li>
            <li>Reproduce or redistribute our content without attribution</li>
            <li>Use the site for any unlawful purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">3. Accuracy of Information</h2>
          <p>
            We strive to provide accurate conversion factors and mathematical data. However, conversion results
            are provided for general reference only and may not be suitable for professional, medical, legal,
            or safety-critical applications. Always verify critical measurements with authoritative sources.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">4. Disclaimer of Warranties</h2>
          <p>
            The service is provided "as is" without warranty of any kind, express or implied. We do not
            warrant that the service will be error-free, uninterrupted, or that any information is accurate,
            complete, or current.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, convert·tables shall not be liable for any indirect,
            incidental, special, or consequential damages arising out of or in connection with your use of
            this service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">6. Intellectual Property</h2>
          <p>
            The site design, logo, and original content are the property of convert·tables. Mathematical
            formulas, conversion factors, and standard reference data are in the public domain.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">7. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Continued use of the site after changes
            constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">8. Contact</h2>
          <p>
            For questions about these Terms, contact us at: <strong>legal@converttables.com</strong>
          </p>
        </section>
      </div>
    </div>
  )
}

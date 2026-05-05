import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const title: Record<Locale, string> = {
  en: 'Privacy Policy',
  it: 'Informativa sulla Privacy',
  de: 'Datenschutzerklärung',
  fr: 'Politique de Confidentialité',
  es: 'Política de Privacidad',
}

const lastUpdated = '2025-01-01'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: title[l] }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">{title[l]}</h1>
      <p className="text-sm text-zinc-400 mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">1. Overview</h2>
          <p>
            convert·tables ("we", "us") operates the website converttables.com. This page informs you of our
            policies regarding the collection and use of personal data. We take your privacy seriously and collect
            as little data as possible.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">2. Data We Collect</h2>
          <p>
            convert·tables is a static, client-side tool. We do <strong>not</strong> require registration,
            login, or any form of personal data submission. We do not store any personally identifiable
            information on our servers.
          </p>
          <p className="mt-2">
            We may collect anonymous, aggregated usage statistics (e.g. page views, country of origin) through
            privacy-friendly analytics. This data does not identify individual users and is not shared with
            third parties for advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">3. Cookies</h2>
          <p>
            We use only essential technical cookies required for the site to function (e.g. language preference).
            We do not use tracking cookies or advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">4. Third-Party Services</h2>
          <p>
            Our website may use Google Fonts for typography and a CDN for static asset delivery. These services
            may log your IP address as part of their standard operation. We encourage you to review their
            respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">5. Your Rights (GDPR)</h2>
          <p>
            If you are located in the European Union, you have rights under the General Data Protection
            Regulation (GDPR), including the right to access, rectify, or erase any personal data we hold
            about you. Since we collect no personal data, there is typically nothing to access or erase.
          </p>
          <p className="mt-2">
            For any privacy-related questions, contact us at: <strong>privacy@converttables.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes are effective when posted on this page.
          </p>
        </section>
      </div>
    </div>
  )
}

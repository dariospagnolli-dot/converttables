import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const title: Record<Locale, string> = {
  en: 'Cookie Policy',
  it: 'Cookie Policy',
  de: 'Cookie-Richtlinie',
  fr: 'Politique de Cookies',
  es: 'Política de Cookies',
}

const lastUpdated = '2026-05-06'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: title[l] }
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">{title[l]}</h1>
      <p className="text-sm text-zinc-400 mb-10">Last updated: {lastUpdated}</p>

      <div className="space-y-8 text-zinc-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-3">1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They allow the
            site to remember your preferences and improve your experience across visits.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-3">2. Cookies We Use</h2>
          <p className="mb-4">We categorize cookies as follows:</p>

          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Essential</span>
                <span className="text-xs text-zinc-400">Always active — no consent required</span>
              </div>
              <table className="w-full text-sm mt-3">
                <thead>
                  <tr className="text-left text-zinc-500 border-b border-zinc-200">
                    <th className="pb-2 font-medium">Name</th>
                    <th className="pb-2 font-medium">Purpose</th>
                    <th className="pb-2 font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600">
                  <tr className="border-b border-zinc-100">
                    <td className="py-2 font-mono text-xs">ct_cookie_consent</td>
                    <td className="py-2">Stores your cookie preference (accept/reject)</td>
                    <td className="py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-xs">locale</td>
                    <td className="py-2">Remembers your language preference</td>
                    <td className="py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Advertising</span>
                <span className="text-xs text-zinc-400">Requires consent</span>
              </div>
              <table className="w-full text-sm mt-3">
                <thead>
                  <tr className="text-left text-zinc-500 border-b border-zinc-200">
                    <th className="pb-2 font-medium">Provider</th>
                    <th className="pb-2 font-medium">Purpose</th>
                    <th className="pb-2 font-medium">More info</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600">
                  <tr>
                    <td className="py-2">Google AdSense</td>
                    <td className="py-2">Personalized advertising based on your interests</td>
                    <td className="py-2">
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Google Privacy Policy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Technical</span>
                <span className="text-xs text-zinc-400">No personal data stored</span>
              </div>
              <table className="w-full text-sm mt-3">
                <thead>
                  <tr className="text-left text-zinc-500 border-b border-zinc-200">
                    <th className="pb-2 font-medium">Provider</th>
                    <th className="pb-2 font-medium">Purpose</th>
                    <th className="pb-2 font-medium">More info</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600">
                  <tr>
                    <td className="py-2">Google Fonts</td>
                    <td className="py-2">Font delivery via Google CDN (may log IP address)</td>
                    <td className="py-2">
                      <a
                        href="https://developers.google.com/fonts/faq/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Google Fonts FAQ
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-3">3. Your Choices</h2>
          <p className="mb-3">
            When you first visit convert·tables, a cookie banner allows you to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Accept all cookies</strong> — enables personalized advertising and analytics.</li>
            <li><strong>Essential only</strong> — only strictly necessary cookies are used; no advertising or analytics.</li>
          </ul>
          <p className="mt-3">
            You can change your preference at any time by clearing your browser's local storage for this site,
            which will cause the cookie banner to reappear on your next visit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-3">4. Managing Cookies in Your Browser</h2>
          <p className="mb-3">
            You can control cookies directly through your browser settings:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Edge</a></li>
          </ul>
          <p className="mt-3">
            Note: disabling essential cookies may affect the correct functioning of the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-3">5. Opting Out of Personalized Advertising</h2>
          <p>
            To opt out of personalized ads from Google, visit{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
              Google Ads Settings
            </a>{' '}
            or{' '}
            <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
              Your Online Choices (EU)
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-3">6. Contact</h2>
          <p>
            For questions about this Cookie Policy, contact us at:{' '}
            <strong>privacy@converttables.com</strong>
          </p>
        </section>

      </div>
    </div>
  )
}

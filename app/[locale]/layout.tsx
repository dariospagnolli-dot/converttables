import { DM_Sans } from 'next/font/google'
import { locales } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.converttables.com'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: {
      default: `convert·tables — ${t(l, 'siteDescription')}`,
      template: '%s | convert·tables',
    },
    description: t(l, 'siteDescription'),
    metadataBase: new URL(BASE_URL),
    icons: { icon: '/favicon.svg' },
    alternates: {
      languages: {
        ...Object.fromEntries(locales.map(loc => [loc, `/${loc}`])),
        'x-default': '/en',
      },
    },
    openGraph: {
      siteName: 'convert·tables',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@converttables',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale} className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header locale={locale as Locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} />
        <CookieBanner locale={locale as Locale} />
      </body>
    </html>
  )
}

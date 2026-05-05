import { Geist, Geist_Mono } from 'next/font/google'
import { locales } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://convertmath.com'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: {
      default: `ConvertMath — ${t(l, 'siteDescription')}`,
      template: '%s | ConvertMath',
    },
    description: t(l, 'siteDescription'),
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: Object.fromEntries(
        locales.map(loc => [loc, `/${loc}`])
      ),
    },
    openGraph: {
      siteName: 'ConvertMath',
      locale: locale,
      type: 'website',
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
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header locale={locale as Locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} />
      </body>
    </html>
  )
}

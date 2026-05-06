import { DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { locales } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'

const GTM_ID = 'GTM-KJDPWVJX'

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
        {/* Consent Mode v2 — must run before GTM */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag=gtag;
          try{
            var _c=localStorage.getItem('ct_cookie_consent');
            var _g=_c==='accepted'?'granted':'denied';
            gtag('consent','default',{analytics_storage:_g,ad_storage:_g,ad_user_data:_g,ad_personalization:_g});
          }catch(e){
            gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
          }
        `}} />
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header locale={locale as Locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} />
        <CookieBanner locale={locale as Locale} />
        {/* GTM loader */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </body>
    </html>
  )
}

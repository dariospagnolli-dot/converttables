import { locales } from '@/lib/i18n/config'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.converttables.com'

/**
 * Generates hreflang <link> tags for all locales.
 * The path should include the locale prefix (e.g., /en/tables/ascii)
 */
export function HreflangLinks({ path }: { path: string }) {
  // Remove locale prefix to get the locale-independent path
  const segments = path.split('/')
  const pathWithoutLocale = '/' + segments.slice(2).join('/')

  return (
    <>
      {locales.map(locale => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${BASE_URL}/${locale}${pathWithoutLocale}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${BASE_URL}/en${pathWithoutLocale}`}
      />
    </>
  )
}

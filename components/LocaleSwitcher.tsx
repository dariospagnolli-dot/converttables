'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { locales, type Locale } from '@/lib/i18n/config'

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  it: 'IT',
  de: 'DE',
  fr: 'FR',
  es: 'ES',
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname()

  function getLocalizedPath(newLocale: Locale) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-0.5 text-sm">
      {locales.map(locale => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`px-1.5 py-1 rounded transition-colors ${
            locale === currentLocale
              ? 'bg-primary text-primary-foreground font-medium'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  )
}

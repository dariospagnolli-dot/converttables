import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { LocaleSwitcher } from './LocaleSwitcher'
import { MobileMenu } from './MobileMenu'
import { SearchBar } from './SearchBar'

function BrandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="6"  y="6"  width="16" height="16" rx="3" fill="#a7f3d0"/>
      <rect x="34" y="6"  width="16" height="16" rx="3" fill="#a7f3d0"/>
      <rect x="6"  y="34" width="16" height="16" rx="3" fill="#a7f3d0"/>
      <rect x="34" y="34" width="16" height="16" rx="3" fill="#a7f3d0"/>
      <path d="M23 28h5" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M28 24l4 4-4 4" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const nav: Record<string, Record<Locale, string>> = {
  convert: { en: 'Convert', it: 'Converti', de: 'Umrechnen', fr: 'Convertir', es: 'Convertir' },
  tables:  { en: 'Tables',  it: 'Tabelle',  de: 'Tabellen',  fr: 'Tables',   es: 'Tablas'   },
  howMany: { en: 'How Many', it: 'Quanti?', de: 'Wie viele?', fr: 'Combien?', es: '¿Cuántos?' },
}

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="relative border-b border-zinc-100 bg-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <BrandIcon />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
            convert<span className="text-emerald-500">·</span>tables
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <Link
            href={`/${locale}/convert`}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {nav.convert[locale]}
          </Link>
          <Link
            href={`/${locale}/tables/multiplication`}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {nav.tables[locale]}
          </Link>
          <Link
            href={`/${locale}/convert/how-many/cm-in-inch`}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {nav.howMany[locale]}
          </Link>
        </nav>

        {/* Search (desktop) */}
        <div className="hidden sm:block">
          <SearchBar locale={locale} />
        </div>

        {/* Locale switcher + mobile menu */}
        <div className="flex items-center gap-1">
          <LocaleSwitcher currentLocale={locale} />
          <MobileMenu locale={locale} />
        </div>

      </div>
    </header>
  )
}

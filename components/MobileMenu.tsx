'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { SearchBar } from './SearchBar'

const nav: Record<string, Record<Locale, string>> = {
  convert: { en: 'Convert',  it: 'Converti',   de: 'Umrechnen', fr: 'Convertir', es: 'Convertir'  },
  cooking: { en: 'Cooking',  it: 'Cucina',      de: 'Küche',     fr: 'Cuisine',   es: 'Cocina'     },
  tables:  { en: 'Tables',   it: 'Tabelle',     de: 'Tabellen',  fr: 'Tables',    es: 'Tablas'     },
  about:   { en: 'About',    it: 'Chi siamo',   de: 'Über uns',  fr: 'À propos',  es: 'Acerca de'  },
}

export function MobileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-md z-50 px-4 py-3">
          <div className="mb-3">
            <SearchBar locale={locale} />
          </div>
          <nav className="flex flex-col text-sm font-medium">
            <Link href={`/${locale}/convert`} onClick={() => setOpen(false)} className="px-3 py-2.5 text-zinc-700 hover:bg-zinc-50 rounded-lg transition-colors">
              {nav.convert[locale]}
            </Link>
            <Link href={`/${locale}/cooking`} onClick={() => setOpen(false)} className="px-3 py-2.5 text-zinc-700 hover:bg-zinc-50 rounded-lg transition-colors">
              {nav.cooking[locale]}
            </Link>
            <Link href={`/${locale}/tables`} onClick={() => setOpen(false)} className="px-3 py-2.5 text-zinc-700 hover:bg-zinc-50 rounded-lg transition-colors">
              {nav.tables[locale]}
            </Link>
            <Link href={`/${locale}/about`} onClick={() => setOpen(false)} className="px-3 py-2.5 text-zinc-700 hover:bg-zinc-50 rounded-lg transition-colors">
              {nav.about[locale]}
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

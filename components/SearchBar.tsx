'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { INGREDIENTS } from '@/lib/data/ingredients'

interface SearchResult {
  label: string
  sublabel: string
  href: string
  group: 'ingredient' | 'converter' | 'table'
}

const CONVERTERS: Record<Locale, { label: string; sublabel: string; href: string }[]> = {
  en: [
    { label: 'Cups to Grams', sublabel: 'Cooking converter', href: '/en/convert/cups-to-grams' },
    { label: 'Grams to Cups', sublabel: 'Cooking converter', href: '/en/convert/grams-to-cups' },
    { label: 'Tablespoons to Grams', sublabel: 'Cooking converter', href: '/en/convert/tablespoons-to-grams' },
    { label: 'Teaspoons to Grams', sublabel: 'Cooking converter', href: '/en/convert/teaspoons-to-grams' },
    { label: 'Ounces to Grams', sublabel: 'Cooking converter', href: '/en/convert/oz-to-grams' },
    { label: 'Cups to Milliliters', sublabel: 'Liquid converter', href: '/en/convert/cups-to-ml' },
    { label: 'Cups to Liters', sublabel: 'Liquid converter', href: '/en/convert/cups-to-liters' },
    { label: 'Pints to Cups', sublabel: 'Liquid converter', href: '/en/convert/pints-to-cups' },
    { label: 'Quarts to Cups', sublabel: 'Liquid converter', href: '/en/convert/quarts-to-cups' },
    { label: 'Stick of Butter', sublabel: 'Cooking converter', href: '/en/convert/stick-of-butter' },
    { label: 'Oven Temperature', sublabel: 'Cooking converter', href: '/en/convert/oven-temperature' },
    { label: 'Fraction to Decimal', sublabel: 'Math converter', href: '/en/convert/fraction-to-decimal' },
  ],
  it: [
    { label: 'Cup in Grammi', sublabel: 'Convertitore cucina', href: '/it/convert/cups-to-grams' },
    { label: 'Grammi in Cup', sublabel: 'Convertitore cucina', href: '/it/convert/grams-to-cups' },
    { label: 'Cucchiai in Grammi', sublabel: 'Convertitore cucina', href: '/it/convert/tablespoons-to-grams' },
    { label: 'Cucchiaini in Grammi', sublabel: 'Convertitore cucina', href: '/it/convert/teaspoons-to-grams' },
    { label: 'Once in Grammi', sublabel: 'Convertitore cucina', href: '/it/convert/oz-to-grams' },
    { label: 'Cup in Millilitri', sublabel: 'Convertitore liquidi', href: '/it/convert/cups-to-ml' },
    { label: 'Cup in Litri', sublabel: 'Convertitore liquidi', href: '/it/convert/cups-to-liters' },
    { label: 'Pinte in Cup', sublabel: 'Convertitore liquidi', href: '/it/convert/pints-to-cups' },
    { label: 'Quart in Cup', sublabel: 'Convertitore liquidi', href: '/it/convert/quarts-to-cups' },
    { label: 'Stick di Burro', sublabel: 'Convertitore cucina', href: '/it/convert/stick-of-butter' },
    { label: 'Temperatura Forno', sublabel: 'Convertitore cucina', href: '/it/convert/oven-temperature' },
    { label: 'Frazione in Decimale', sublabel: 'Convertitore matematica', href: '/it/convert/fraction-to-decimal' },
  ],
  de: [
    { label: 'Cups in Gramm', sublabel: 'Küchen-Umrechner', href: '/de/convert/cups-to-grams' },
    { label: 'Gramm in Cups', sublabel: 'Küchen-Umrechner', href: '/de/convert/grams-to-cups' },
    { label: 'Esslöffel in Gramm', sublabel: 'Küchen-Umrechner', href: '/de/convert/tablespoons-to-grams' },
    { label: 'Teelöffel in Gramm', sublabel: 'Küchen-Umrechner', href: '/de/convert/teaspoons-to-grams' },
    { label: 'Unzen in Gramm', sublabel: 'Küchen-Umrechner', href: '/de/convert/oz-to-grams' },
    { label: 'Cups in Milliliter', sublabel: 'Flüssigkeits-Umrechner', href: '/de/convert/cups-to-ml' },
    { label: 'Cups in Liter', sublabel: 'Flüssigkeits-Umrechner', href: '/de/convert/cups-to-liters' },
    { label: 'Pints in Cups', sublabel: 'Flüssigkeits-Umrechner', href: '/de/convert/pints-to-cups' },
    { label: 'Quarts in Cups', sublabel: 'Flüssigkeits-Umrechner', href: '/de/convert/quarts-to-cups' },
    { label: 'Butter-Stick', sublabel: 'Küchen-Umrechner', href: '/de/convert/stick-of-butter' },
    { label: 'Ofentemperatur', sublabel: 'Küchen-Umrechner', href: '/de/convert/oven-temperature' },
    { label: 'Bruch in Dezimalzahl', sublabel: 'Mathe-Umrechner', href: '/de/convert/fraction-to-decimal' },
  ],
  fr: [
    { label: 'Tasses en Grammes', sublabel: 'Convertisseur cuisine', href: '/fr/convert/cups-to-grams' },
    { label: 'Grammes en Tasses', sublabel: 'Convertisseur cuisine', href: '/fr/convert/grams-to-cups' },
    { label: 'Cuillères à soupe en Grammes', sublabel: 'Convertisseur cuisine', href: '/fr/convert/tablespoons-to-grams' },
    { label: 'Cuillères à café en Grammes', sublabel: 'Convertisseur cuisine', href: '/fr/convert/teaspoons-to-grams' },
    { label: 'Onces en Grammes', sublabel: 'Convertisseur cuisine', href: '/fr/convert/oz-to-grams' },
    { label: 'Tasses en Millilitres', sublabel: 'Convertisseur liquides', href: '/fr/convert/cups-to-ml' },
    { label: 'Tasses en Litres', sublabel: 'Convertisseur liquides', href: '/fr/convert/cups-to-liters' },
    { label: 'Pintes en Tasses', sublabel: 'Convertisseur liquides', href: '/fr/convert/pints-to-cups' },
    { label: 'Quarts en Tasses', sublabel: 'Convertisseur liquides', href: '/fr/convert/quarts-to-cups' },
    { label: 'Stick de Beurre', sublabel: 'Convertisseur cuisine', href: '/fr/convert/stick-of-butter' },
    { label: 'Température Four', sublabel: 'Convertisseur cuisine', href: '/fr/convert/oven-temperature' },
    { label: 'Fraction en Décimal', sublabel: 'Convertisseur math', href: '/fr/convert/fraction-to-decimal' },
  ],
  es: [
    { label: 'Tazas a Gramos', sublabel: 'Conversor cocina', href: '/es/convert/cups-to-grams' },
    { label: 'Gramos a Tazas', sublabel: 'Conversor cocina', href: '/es/convert/grams-to-cups' },
    { label: 'Cucharadas a Gramos', sublabel: 'Conversor cocina', href: '/es/convert/tablespoons-to-grams' },
    { label: 'Cucharaditas a Gramos', sublabel: 'Conversor cocina', href: '/es/convert/teaspoons-to-grams' },
    { label: 'Onzas a Gramos', sublabel: 'Conversor cocina', href: '/es/convert/oz-to-grams' },
    { label: 'Tazas a Mililitros', sublabel: 'Conversor líquidos', href: '/es/convert/cups-to-ml' },
    { label: 'Tazas a Litros', sublabel: 'Conversor líquidos', href: '/es/convert/cups-to-liters' },
    { label: 'Pintas a Tazas', sublabel: 'Conversor líquidos', href: '/es/convert/pints-to-cups' },
    { label: 'Cuartos a Tazas', sublabel: 'Conversor líquidos', href: '/es/convert/quarts-to-cups' },
    { label: 'Stick de Mantequilla', sublabel: 'Conversor cocina', href: '/es/convert/stick-of-butter' },
    { label: 'Temperatura Horno', sublabel: 'Conversor cocina', href: '/es/convert/oven-temperature' },
    { label: 'Fracción a Decimal', sublabel: 'Conversor matemáticas', href: '/es/convert/fraction-to-decimal' },
  ],
}

const TABLES: Record<Locale, { label: string; sublabel: string; href: string }[]> = {
  en: [
    { label: 'Multiplication Table 1–12', sublabel: 'Math table', href: '/en/tables/multiplication' },
    { label: 'Roman Numerals', sublabel: 'Math table', href: '/en/tables/roman-numerals' },
    { label: 'Binary & Hexadecimal', sublabel: 'Math table', href: '/en/tables/binary-hex' },
  ],
  it: [
    { label: 'Tavola Pitagorica 1–12', sublabel: 'Tabella matematica', href: '/it/tables/multiplication' },
    { label: 'Numeri Romani', sublabel: 'Tabella matematica', href: '/it/tables/roman-numerals' },
    { label: 'Binario & Esadecimale', sublabel: 'Tabella matematica', href: '/it/tables/binary-hex' },
  ],
  de: [
    { label: 'Einmaleins 1–12', sublabel: 'Mathe-Tabelle', href: '/de/tables/multiplication' },
    { label: 'Römische Zahlen', sublabel: 'Mathe-Tabelle', href: '/de/tables/roman-numerals' },
    { label: 'Binär & Hexadezimal', sublabel: 'Mathe-Tabelle', href: '/de/tables/binary-hex' },
  ],
  fr: [
    { label: 'Table de Multiplication 1–12', sublabel: 'Table mathématique', href: '/fr/tables/multiplication' },
    { label: 'Chiffres Romains', sublabel: 'Table mathématique', href: '/fr/tables/roman-numerals' },
    { label: 'Binaire & Hexadécimal', sublabel: 'Table mathématique', href: '/fr/tables/binary-hex' },
  ],
  es: [
    { label: 'Tabla de Multiplicar 1–12', sublabel: 'Tabla matemática', href: '/es/tables/multiplication' },
    { label: 'Números Romanos', sublabel: 'Tabla matemática', href: '/es/tables/roman-numerals' },
    { label: 'Binario & Hexadecimal', sublabel: 'Tabla matemática', href: '/es/tables/binary-hex' },
  ],
}

const PLACEHOLDER: Record<Locale, string> = {
  en: 'Search conversions…',
  it: 'Cerca conversioni…',
  de: 'Umrechnungen suchen…',
  fr: 'Rechercher…',
  es: 'Buscar conversiones…',
}

const GROUP_LABELS: Record<string, Record<Locale, string>> = {
  ingredient: { en: 'Ingredients', it: 'Ingredienti', de: 'Zutaten', fr: 'Ingrédients', es: 'Ingredientes' },
  converter: { en: 'Converters', it: 'Convertitori', de: 'Umrechner', fr: 'Convertisseurs', es: 'Conversores' },
  table: { en: 'Tables', it: 'Tabelle', de: 'Tabellen', fr: 'Tables', es: 'Tablas' },
}

function highlight(text: string, query: string) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-emerald-100 text-emerald-800 rounded-sm">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export function SearchBar({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Build full index once
  const allResults = useMemo<SearchResult[]>(() => {
    const results: SearchResult[] = []

    // Ingredient results — link to cups-to-grams as primary page
    for (const ing of INGREDIENTS) {
      results.push({
        label: ing.names[locale],
        sublabel: 'cups to grams · tablespoons · ounces',
        href: `/${locale}/convert/cups-to-grams/${ing.slug}`,
        group: 'ingredient',
      })
    }

    // Converter pages
    for (const c of CONVERTERS[locale]) {
      results.push({ ...c, group: 'converter' })
    }

    // Tables
    for (const t of TABLES[locale]) {
      results.push({ ...t, group: 'table' })
    }

    return results
  }, [locale])

  const filtered = useMemo<SearchResult[]>(() => {
    const q = query.trim()
    if (q.length < 2) return []
    const lower = q.toLowerCase()
    const matches = allResults.filter(r =>
      r.label.toLowerCase().includes(lower) ||
      r.sublabel.toLowerCase().includes(lower)
    )
    // Max 8 results, prioritize label matches
    return matches
      .sort((a, b) => {
        const aLabel = a.label.toLowerCase().includes(lower) ? 0 : 1
        const bLabel = b.label.toLowerCase().includes(lower) ? 0 : 1
        return aLabel - bLabel
      })
      .slice(0, 8)
  }, [query, allResults])

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setActiveIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || filtered.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, -1))
    } else if (e.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
      inputRef.current?.blur()
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      window.location.href = filtered[activeIndex].href
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    setOpen(true)
    setActiveIndex(-1)
  }

  function handleFocus() {
    if (filtered.length > 0) setOpen(true)
  }

  // Group results for display
  const groups = useMemo(() => {
    const map: Record<string, SearchResult[]> = {}
    for (const r of filtered) {
      if (!map[r.group]) map[r.group] = []
      map[r.group].push(r)
    }
    return map
  }, [filtered])

  const showDropdown = open && filtered.length > 0
  let itemIndex = 0 // tracks absolute index across groups for keyboard nav

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400"
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDER[locale]}
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-1.5 pl-8 pr-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
        />
      </div>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
          <ul ref={listRef} role="listbox" className="max-h-80 overflow-y-auto py-1">
            {(Object.entries(groups) as [string, SearchResult[]][]).map(([group, items]) => (
              <li key={group}>
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                  {GROUP_LABELS[group][locale]}
                </div>
                <ul>
                  {items.map((item) => {
                    const currentIndex = itemIndex++
                    const isActive = activeIndex === currentIndex
                    return (
                      <li key={item.href} role="option" aria-selected={isActive}>
                        <Link
                          href={item.href}
                          onMouseEnter={() => setActiveIndex(currentIndex)}
                          onClick={() => { setOpen(false); setQuery('') }}
                          className={`flex items-center gap-3 px-3 py-2 transition-colors ${
                            isActive ? 'bg-emerald-50' : 'hover:bg-zinc-50'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-medium text-zinc-800">
                              {highlight(item.label, query.trim())}
                            </div>
                            <div className="truncate text-xs text-zinc-400">{item.sublabel}</div>
                          </div>
                          <svg
                            className="shrink-0 text-zinc-300"
                            width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

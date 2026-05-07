import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

const US_CUP_ML = 236.588
const US_CUP_L = US_CUP_ML / 1000

const title: Record<Locale, string> = {
  en: 'Cups to Liters — Conversion Chart',
  it: 'Tazze in Litri — Tabella di Conversione',
  de: 'Tassen in Liter — Umrechnungstabelle',
  fr: 'Tasses en Litres — Tableau de Conversion',
  es: 'Tazas a Litros — Tabla de Conversión',
}
const desc: Record<Locale, string> = {
  en: '1 US cup = 0.2366 liters. Quick cups to liters chart. 4 cups = ~1 liter. Essential for cooking and baking.',
  it: '1 tazza US = 0,2366 litri. Tabella conversione tazze-litri. 4 tazze ≈ 1 litro.',
  de: '1 US-Tasse = 0,2366 Liter. Tassen-Liter-Umrechnung. 4 Tassen ≈ 1 Liter.',
  fr: '1 tasse US = 0,2366 litre. Conversion tasses en litres. 4 tasses ≈ 1 litre.',
  es: '1 taza US = 0,2366 litros. Conversión tazas a litros. 4 tazas ≈ 1 litro.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: title[l], description: desc[l] }
}

const rows = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16]

function formatCupLabel(n: number, l: Locale): string {
  const fracs: Record<string, string> = { '0.25': '¼', '0.5': '½', '0.75': '¾', '1.5': '1½' }
  const base = fracs[String(n)] ?? String(n)
  const word: Record<Locale, string> = {
    en: n === 1 ? 'cup' : 'cups',
    it: n === 1 ? 'tazza' : 'tazze',
    de: n === 1 ? 'Tasse' : 'Tassen',
    fr: n === 1 ? 'tasse' : 'tasses',
    es: n === 1 ? 'taza' : 'tazas',
  }
  return `${base} ${word[l]}`
}

export default async function CupsToLitersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const heading: Record<Locale, string> = {
    en: 'Cups to Liters',
    it: 'Tazze in Litri',
    de: 'Tassen in Liter',
    fr: 'Tasses en Litres',
    es: 'Tazas a Litros',
  }
  const subheading: Record<Locale, string> = {
    en: '1 US cup = 0.2366 L · 4 cups ≈ 1 liter · 1 liter ≈ 4.23 cups',
    it: '1 tazza US = 0,2366 L · 4 tazze ≈ 1 litro · 1 litro ≈ 4,23 tazze',
    de: '1 US-Tasse = 0,2366 L · 4 Tassen ≈ 1 Liter · 1 Liter ≈ 4,23 Tassen',
    fr: '1 tasse US = 0,2366 L · 4 tasses ≈ 1 litre · 1 litre ≈ 4,23 tasses',
    es: '1 taza US = 0,2366 L · 4 tazas ≈ 1 litro · 1 litro ≈ 4,23 tazas',
  }
  const colCups: Record<Locale, string> = {
    en: 'Cups', it: 'Tazze', de: 'Tassen', fr: 'Tasses', es: 'Tazas',
  }
  const practicalNote: Record<Locale, string> = {
    en: '4.227 cups = 1 liter exactly. For a quick estimate: 4 cups ≈ 1 liter (within 5%). Great for scaling up soups, stocks, and drinks.',
    it: '4,227 tazze = 1 litro esatto. Come stima rapida: 4 tazze ≈ 1 litro (errore < 5%). Utile per scalare zuppe, brodi e bevande.',
    de: '4,227 Tassen = genau 1 Liter. Schnellschätzung: 4 Tassen ≈ 1 Liter (Fehler < 5%). Praktisch für Suppen, Brühen und Getränke.',
    fr: '4,227 tasses = 1 litre exact. Estimation rapide : 4 tasses ≈ 1 litre (erreur < 5%). Idéal pour adapter soupes, bouillons et boissons.',
    es: '4,227 tazas = 1 litro exacto. Estimación rápida: 4 tazas ≈ 1 litro (error < 5%). Ideal para escalar sopas, caldos y bebidas.',
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'cupsToLiters')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{heading[l]}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subheading[l]}</p>

      {/* Quick reference cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[1, 2, 4, 8].map(c => (
          <div key={c} className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">{c} {l === 'it' ? (c === 1 ? 'tazza' : 'tazze') : l === 'de' ? (c === 1 ? 'Tasse' : 'Tassen') : l === 'fr' ? (c === 1 ? 'tasse' : 'tasses') : l === 'es' ? (c === 1 ? 'taza' : 'tazas') : (c === 1 ? 'cup' : 'cups')}</div>
            <div className="text-2xl font-bold font-mono">{(Math.round(c * US_CUP_L * 1000) / 1000).toFixed(3)} L</div>
            <div className="text-xs text-muted-foreground mt-1">{Math.round(c * US_CUP_ML)}ml</div>
          </div>
        ))}
      </div>

      {/* Main conversion table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{heading[l]}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{colCups[l]} (US)</th>
                <th className="px-4 py-2 text-left font-medium">Liters (L)</th>
                <th className="px-4 py-2 text-left font-medium">ml</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(c => (
                <tr key={c} className={`border-t ${c === 4 ? 'bg-emerald-50/50' : ''}`}>
                  <td className="px-4 py-2 font-mono">{formatCupLabel(c, l)}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{(Math.round(c * US_CUP_L * 10000) / 10000).toFixed(4)}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{Math.round(c * US_CUP_ML)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">1 US cup = {US_CUP_ML}ml = {US_CUP_L.toFixed(6)}L</p>
      </section>

      {/* Practical tip */}
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4 mb-10 text-sm text-emerald-900">
        <strong>{l === 'it' ? 'Suggerimento pratico' : l === 'de' ? 'Praktischer Tipp' : l === 'fr' ? 'Conseil pratique' : l === 'es' ? 'Consejo práctico' : 'Practical tip'}</strong>
        <p className="mt-1">{practicalNote[l]}</p>
      </div>

      {/* Related */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/cups-to-ml`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToMl')}
          </Link>
          <Link href={`/${locale}/convert/pints-to-cups`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'pintsToCups')}
          </Link>
          <Link href={`/${locale}/convert/quarts-to-cups`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'quartsToCups')}
          </Link>
          <Link href={`/${locale}/convert/cups-to-grams`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToGrams')}
          </Link>
        </div>
      </section>
    </div>
  )
}

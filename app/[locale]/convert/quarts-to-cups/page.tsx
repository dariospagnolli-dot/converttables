import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

const QUART_TO_CUPS = 4
const QUART_TO_PINTS = 2
const QUART_TO_ML = 946.353

const title: Record<Locale, string> = {
  en: 'Quarts to Cups — Conversion Chart',
  it: 'Quarti in Tazze — Tabella di Conversione',
  de: 'Quarts in Tassen — Umrechnungstabelle',
  fr: 'Quarts en Tasses — Tableau de Conversion',
  es: 'Cuartos a Tazas — Tabla de Conversión',
}
const desc: Record<Locale, string> = {
  en: '1 quart = 4 cups = 2 pints = 946ml. Quick quarts to cups chart for cooking. US liquid quart reference.',
  it: '1 quarto = 4 tazze = 2 pinte = 946ml. Conversione quarti-tazze per cucina.',
  de: '1 Quart = 4 Tassen = 2 Pints = 946ml. Quarts in Tassen für die Küche.',
  fr: '1 quart = 4 tasses = 2 pintes = 946ml. Conversion quarts en tasses pour la cuisine.',
  es: '1 cuarto = 4 tazas = 2 pintas = 946ml. Conversión de cuartos a tazas para cocina.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: title[l], description: desc[l] }
}

const rows = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 8]

function formatQt(n: number) {
  const fracs: Record<string, string> = { '0.25': '¼', '0.5': '½', '0.75': '¾', '1.5': '1½' }
  return (fracs[String(n)] ?? String(n)) + ' qt'
}

export default async function QuartsToCupsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const heading: Record<Locale, string> = {
    en: 'Quarts to Cups',
    it: 'Quarti in Tazze',
    de: 'Quarts in Tassen',
    fr: 'Quarts en Tasses',
    es: 'Cuartos a Tazas',
  }
  const subheading: Record<Locale, string> = {
    en: '1 US quart = 4 cups = 2 pints = 32 fl oz = 946.35ml',
    it: '1 quarto US = 4 tazze = 2 pinte = 32 fl oz = 946,35ml',
    de: '1 US-Quart = 4 Tassen = 2 Pints = 32 fl oz = 946,35ml',
    fr: '1 quart US = 4 tasses = 2 pintes = 32 fl oz = 946,35ml',
    es: '1 cuarto US = 4 tazas = 2 pintas = 32 fl oz = 946,35ml',
  }
  const colQuarts: Record<Locale, string> = {
    en: 'Quarts (qt)', it: 'Quarti (qt)', de: 'Quarts (qt)', fr: 'Quarts (qt)', es: 'Cuartos (qt)',
  }
  const colCups: Record<Locale, string> = {
    en: 'Cups', it: 'Tazze', de: 'Tassen', fr: 'Tasses', es: 'Tazas',
  }
  const colPints: Record<Locale, string> = {
    en: 'Pints', it: 'Pinte', de: 'Pints', fr: 'Pintes', es: 'Pintas',
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'quartsToCups')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{heading[l]}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subheading[l]}</p>

      {/* Quick reference cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[1, 2, 3, 4].map(qt => (
          <div key={qt} className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">{qt} qt</div>
            <div className="text-2xl font-bold font-mono">{qt * QUART_TO_CUPS} {colCups[l].toLowerCase()}</div>
            <div className="text-xs text-muted-foreground mt-1">{Math.round(qt * QUART_TO_ML)}ml</div>
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
                <th className="px-4 py-2 text-left font-medium">{colQuarts[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{colCups[l]} (US)</th>
                <th className="px-4 py-2 text-left font-medium">{colPints[l]}</th>
                <th className="px-4 py-2 text-left font-medium">ml</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(qt => (
                <tr key={qt} className="border-t">
                  <td className="px-4 py-2 font-mono">{formatQt(qt)}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{qt * QUART_TO_CUPS}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{qt * QUART_TO_PINTS}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{Math.round(qt * QUART_TO_ML)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">1 qt = {QUART_TO_CUPS} cups = {QUART_TO_PINTS} pints = {QUART_TO_ML}ml</p>
      </section>

      {/* Related */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/pints-to-cups`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'pintsToCups')}
          </Link>
          <Link href={`/${locale}/convert/cups-to-ml`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToMl')}
          </Link>
          <Link href={`/${locale}/convert/cups-to-liters`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToLiters')}
          </Link>
          <Link href={`/${locale}/convert/cups-to-grams`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToGrams')}
          </Link>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

const US_CUP_ML = 236.588
const METRIC_CUP_ML = 250
const IMPERIAL_CUP_ML = 284.131

const title: Record<Locale, string> = {
  en: 'Cups to Milliliters (ml) — Conversion Chart',
  it: 'Tazze in Millilitri (ml) — Tabella di Conversione',
  de: 'Tassen in Milliliter (ml) — Umrechnungstabelle',
  fr: 'Tasses en Millilitres (ml) — Tableau de Conversion',
  es: 'Tazas a Mililitros (ml) — Tabla de Conversión',
}
const desc: Record<Locale, string> = {
  en: '1 US cup = 236.6ml. Quick cups to ml reference. Also metric cup (250ml) and imperial cup (284ml).',
  it: '1 tazza US = 236,6ml. Conversione tazze-ml. Anche tazza metrica (250ml) e imperiale (284ml).',
  de: '1 US-Tasse = 236,6ml. Tassen in Milliliter. Auch metrische Tasse (250ml) und imperiale Tasse (284ml).',
  fr: '1 tasse US = 236,6ml. Conversion tasses en ml. Aussi tasse métrique (250ml) et impériale (284ml).',
  es: '1 taza US = 236,6ml. Conversión de tazas a ml. También taza métrica (250ml) e imperial (284ml).',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: title[l], description: desc[l] }
}

const rows = [0.125, 0.25, 0.333, 0.5, 0.667, 0.75, 1, 1.5, 2, 2.5, 3, 4]

function formatCup(n: number, l: Locale): string {
  const map: Record<string, Record<Locale, string>> = {
    '0.125': { en: '⅛ cup', it: '⅛ tazza', de: '⅛ Tasse', fr: '⅛ tasse', es: '⅛ taza' },
    '0.25': { en: '¼ cup', it: '¼ tazza', de: '¼ Tasse', fr: '¼ tasse', es: '¼ taza' },
    '0.333': { en: '⅓ cup', it: '⅓ tazza', de: '⅓ Tasse', fr: '⅓ tasse', es: '⅓ taza' },
    '0.5': { en: '½ cup', it: '½ tazza', de: '½ Tasse', fr: '½ tasse', es: '½ taza' },
    '0.667': { en: '⅔ cup', it: '⅔ tazza', de: '⅔ Tasse', fr: '⅔ tasse', es: '⅔ taza' },
    '0.75': { en: '¾ cup', it: '¾ tazza', de: '¾ Tasse', fr: '¾ tasse', es: '¾ taza' },
  }
  return map[String(n)]?.[l] ?? `${n} ${l === 'it' ? 'tazze' : l === 'de' ? 'Tassen' : l === 'fr' ? 'tasses' : l === 'es' ? 'tazas' : 'cups'}`
}

export default async function CupsToMlPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const heading: Record<Locale, string> = {
    en: 'Cups to Milliliters',
    it: 'Tazze in Millilitri',
    de: 'Tassen in Milliliter',
    fr: 'Tasses en Millilitres',
    es: 'Tazas a Mililitros',
  }
  const subheading: Record<Locale, string> = {
    en: '1 US cup = 236.59ml · 1 metric cup = 250ml · 1 imperial cup = 284.13ml',
    it: '1 tazza US = 236,59ml · 1 tazza metrica = 250ml · 1 tazza imperiale = 284,13ml',
    de: '1 US-Tasse = 236,59ml · 1 metrische Tasse = 250ml · 1 imperiale Tasse = 284,13ml',
    fr: '1 tasse US = 236,59ml · 1 tasse métrique = 250ml · 1 tasse impériale = 284,13ml',
    es: '1 taza US = 236,59ml · 1 taza métrica = 250ml · 1 taza imperial = 284,13ml',
  }
  const colCups: Record<Locale, string> = {
    en: 'Cups', it: 'Tazze', de: 'Tassen', fr: 'Tasses', es: 'Tazas',
  }
  const colUs: Record<Locale, string> = {
    en: 'US Cup (ml)', it: 'Tazza US (ml)', de: 'US-Tasse (ml)', fr: 'Tasse US (ml)', es: 'Taza US (ml)',
  }
  const colMetric: Record<Locale, string> = {
    en: 'Metric (ml)', it: 'Metrica (ml)', de: 'Metrisch (ml)', fr: 'Métrique (ml)', es: 'Métrica (ml)',
  }
  const cupTypeNote: Record<Locale, string> = {
    en: 'Most American recipes use the US cup (236.6ml). Australian and Canadian recipes typically use the metric cup (250ml). UK recipes may use the imperial cup (284ml) in older cookbooks.',
    it: 'Le ricette americane usano la tazza US (236,6ml). Le ricette australiane e canadesi usano la tazza metrica (250ml). I libri di cucina britannici più vecchi usano la tazza imperiale (284ml).',
    de: 'Amerikanische Rezepte verwenden die US-Tasse (236,6ml). Australische und kanadische Rezepte verwenden die metrische Tasse (250ml). Ältere britische Kochbücher die imperiale Tasse (284ml).',
    fr: 'Les recettes américaines utilisent la tasse US (236,6ml). Les recettes australiennes et canadiennes utilisent la tasse métrique (250ml). Les vieux livres de cuisine britanniques utilisent la tasse impériale (284ml).',
    es: 'Las recetas americanas usan la taza US (236,6ml). Las recetas australianas y canadienses usan la taza métrica (250ml). Los libros de cocina británicos antiguos usan la taza imperial (284ml).',
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'cupsToMl')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{heading[l]}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subheading[l]}</p>

      {/* Quick reference cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[0.25, 0.5, 1, 2].map(c => (
          <div key={c} className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">{formatCup(c, l)}</div>
            <div className="text-xl font-bold font-mono">{Math.round(c * US_CUP_ML * 10) / 10}ml</div>
            <div className="text-xs text-muted-foreground mt-1">US</div>
          </div>
        ))}
      </div>

      {/* Main comparison table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{heading[l]}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{colCups[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{colUs[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{colMetric[l]}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(c => (
                <tr key={c} className="border-t">
                  <td className="px-4 py-2 font-mono">{formatCup(c, l)}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{Math.round(c * US_CUP_ML * 10) / 10}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{Math.round(c * METRIC_CUP_ML * 10) / 10}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">US: 1 cup = {US_CUP_ML}ml · Metric: 1 cup = {METRIC_CUP_ML}ml · Imperial: 1 cup = {IMPERIAL_CUP_ML}ml</p>
      </section>

      {/* Cup type note */}
      <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 mb-10 text-sm text-blue-900">
        <strong>{l === 'it' ? 'Quale tazza usare?' : l === 'de' ? 'Welche Tasse verwenden?' : l === 'fr' ? 'Quelle tasse utiliser ?' : l === 'es' ? '¿Qué taza usar?' : 'Which cup to use?'}</strong>
        <p className="mt-1">{cupTypeNote[l]}</p>
      </div>

      {/* Related */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/cups-to-liters`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToLiters')}
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

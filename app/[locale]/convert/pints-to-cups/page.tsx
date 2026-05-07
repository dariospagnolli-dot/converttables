import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

const PINT_TO_CUPS = 2
const PINT_TO_ML = 473.176

const title: Record<Locale, string> = {
  en: 'Pints to Cups — Conversion Chart',
  it: 'Pinte in Tazze — Tabella di Conversione',
  de: 'Pints in Tassen — Umrechnungstabelle',
  fr: 'Pintes en Tasses — Tableau de Conversion',
  es: 'Pintas a Tazas — Tabla de Conversión',
}
const desc: Record<Locale, string> = {
  en: '1 pint = 2 cups = 473ml. Quick pints to cups reference for cooking and baking. US liquid pint chart.',
  it: '1 pinta = 2 tazze = 473ml. Conversione pinte-tazze per cucina e pasticceria.',
  de: '1 Pint = 2 Tassen = 473ml. Pints in Tassen für Kochen und Backen.',
  fr: '1 pinte = 2 tasses = 473ml. Conversion pintes en tasses pour cuisine et pâtisserie.',
  es: '1 pinta = 2 tazas = 473ml. Conversión de pintas a tazas para cocina y repostería.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: title[l],
    description: desc[l],
  }
}

const rows = [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12]

function formatPint(n: number, l: Locale) {
  const fracs: Record<string, string> = { '0.25': '¼', '0.5': '½', '0.75': '¾', '1.5': '1½', '2.5': '2½' }
  const base = fracs[String(n)] ?? String(n)
  const label: Record<Locale, string> = {
    en: `${base} pt`, it: `${base} pt`, de: `${base} pt`, fr: `${base} pt`, es: `${base} pt`,
  }
  return label[l]
}

export default async function PintsToCupsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const heading: Record<Locale, string> = {
    en: 'Pints to Cups',
    it: 'Pinte in Tazze',
    de: 'Pints in Tassen',
    fr: 'Pintes en Tasses',
    es: 'Pintas a Tazas',
  }
  const subheading: Record<Locale, string> = {
    en: '1 US pint = 2 cups = 16 fl oz = 473.18ml',
    it: '1 pinta US = 2 tazze = 16 fl oz = 473,18ml',
    de: '1 US-Pint = 2 Tassen = 16 fl oz = 473,18ml',
    fr: '1 pinte US = 2 tasses = 16 fl oz = 473,18ml',
    es: '1 pinta US = 2 tazas = 16 fl oz = 473,18ml',
  }
  const note: Record<Locale, string> = {
    en: 'These values use the US liquid pint (473.18ml). The UK imperial pint = 568ml ≈ 2.4 US cups — always check your recipe\'s origin.',
    it: 'Valori basati sulla pinta liquida US (473,18ml). La pinta imperiale UK = 568ml ≈ 2,4 tazze US. Controlla l\'origine della ricetta.',
    de: 'US-Flüssigpint (473,18ml). Das britische imperiale Pint = 568ml ≈ 2,4 US-Tassen. Überprüfen Sie die Herkunft des Rezepts.',
    fr: 'Valeurs en pinte liquide US (473,18ml). La pinte impériale UK = 568ml ≈ 2,4 tasses US. Vérifiez l\'origine de la recette.',
    es: 'Valores en pinta líquida US (473,18ml). La pinta imperial UK = 568ml ≈ 2,4 tazas US. Comprueba el origen de la receta.',
  }
  const colPints: Record<Locale, string> = {
    en: 'Pints (pt)', it: 'Pinte (pt)', de: 'Pints (pt)', fr: 'Pintes (pt)', es: 'Pintas (pt)',
  }
  const colCups: Record<Locale, string> = {
    en: 'Cups', it: 'Tazze', de: 'Tassen', fr: 'Tasses', es: 'Tazas',
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'pintsToCups')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{heading[l]}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subheading[l]}</p>

      {/* Quick reference cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[1, 2, 3, 4].map(pt => (
          <div key={pt} className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">{pt} pt</div>
            <div className="text-2xl font-bold font-mono">{pt * PINT_TO_CUPS} {colCups[l].toLowerCase()}</div>
            <div className="text-xs text-muted-foreground mt-1">{Math.round(pt * PINT_TO_ML)}ml</div>
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
                <th className="px-4 py-2 text-left font-medium">{colPints[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{colCups[l]} (US)</th>
                <th className="px-4 py-2 text-left font-medium">ml</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(pt => (
                <tr key={pt} className="border-t">
                  <td className="px-4 py-2 font-mono">{formatPint(pt, l)}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{pt * PINT_TO_CUPS}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{Math.round(pt * PINT_TO_ML * 10) / 10}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">1 pt = {PINT_TO_CUPS} cups = {PINT_TO_ML}ml</p>
      </section>

      {/* UK vs US note */}
      <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-10 text-sm text-amber-900">
        <strong>⚠ US vs UK</strong>
        <p className="mt-1">{note[l]}</p>
      </div>

      {/* Related */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/quarts-to-cups`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'quartsToCups')}
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

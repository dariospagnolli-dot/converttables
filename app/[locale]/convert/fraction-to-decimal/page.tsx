import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  const desc: Record<Locale, string> = {
    en: 'Convert fractions to decimals and percentages. Quick reference chart for common fractions: 1/2, 1/3, 1/4, 3/4 and more.',
    it: 'Converti frazioni in decimali e percentuali. Tabella di riferimento rapida per le frazioni comuni.',
    de: 'Brüche in Dezimalzahlen und Prozent umrechnen. Schnellreferenz für häufige Brüche.',
    fr: 'Convertir des fractions en décimaux et pourcentages. Tableau de référence rapide.',
    es: 'Convierte fracciones a decimales y porcentajes. Tabla de referencia rápida para fracciones comunes.',
  }
  return {
    title: t(l, 'fractionToDecimal'),
    description: desc[l],
    alternates: {
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/fraction-to-decimal`])),
    },
  }
}

const FRACTIONS = [
  '1-2', '1-3', '2-3', '1-4', '3-4', '1-5', '2-5', '3-5', '4-5',
  '1-6', '5-6', '1-8', '3-8', '5-8', '7-8',
  '1-10', '3-10', '7-10', '9-10',
  '1-12', '5-12', '7-12', '11-12',
  '1-16', '3-16', '5-16', '7-16', '9-16', '11-16', '13-16', '15-16',
  '1-32', '1-64',
]

function parseFraction(slug: string) {
  const parts = slug.split('-')
  const num = parseInt(parts[0])
  const den = parseInt(parts[1])
  return { num, den }
}

function toDecimal(num: number, den: number) {
  return (num / den).toFixed(6).replace(/0+$/, '').replace(/\.$/, '')
}

function toPercent(num: number, den: number) {
  return ((num / den) * 100).toFixed(2).replace(/\.?0+$/, '')
}

export default async function FractionToDecimalHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const heading: Record<Locale, string> = {
    en: 'Fraction to Decimal Conversion Chart',
    it: 'Tabella di Conversione Frazioni in Decimali',
    de: 'Bruch-Dezimal-Umrechnungstabelle',
    fr: 'Tableau de Conversion Fraction en Décimal',
    es: 'Tabla de Conversión de Fracción a Decimal',
  }
  const subheading: Record<Locale, string> = {
    en: 'Divide the numerator by the denominator. Example: 3/4 = 3 ÷ 4 = 0.75',
    it: 'Dividi il numeratore per il denominatore. Esempio: 3/4 = 3 ÷ 4 = 0,75',
    de: 'Zähler durch Nenner dividieren. Beispiel: 3/4 = 3 ÷ 4 = 0,75',
    fr: 'Diviser le numérateur par le dénominateur. Exemple : 3/4 = 3 ÷ 4 = 0,75',
    es: 'Divide el numerador entre el denominador. Ejemplo: 3/4 = 3 ÷ 4 = 0,75',
  }
  const colFraction: Record<Locale, string> = {
    en: 'Fraction', it: 'Frazione', de: 'Bruch', fr: 'Fraction', es: 'Fracción',
  }
  const colDecimal: Record<Locale, string> = {
    en: 'Decimal', it: 'Decimale', de: 'Dezimal', fr: 'Décimal', es: 'Decimal',
  }
  const colPercent: Record<Locale, string> = {
    en: 'Percent', it: 'Percentuale', de: 'Prozent', fr: 'Pourcentage', es: 'Porcentaje',
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'fractionToDecimal')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{heading[l]}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subheading[l]}</p>

      {/* Quick reference cards for most common */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {['1-2', '1-3', '1-4', '3-4'].map(slug => {
          const { num, den } = parseFraction(slug)
          return (
            <Link
              key={slug}
              href={`/${locale}/convert/fraction-to-decimal/${slug}`}
              className="rounded-lg border p-4 text-center hover:bg-accent transition-colors"
            >
              <div className="text-2xl font-bold font-mono mb-1">{num}/{den}</div>
              <div className="text-lg font-mono text-emerald-700">{toDecimal(num, den)}</div>
              <div className="text-xs text-muted-foreground mt-1">{toPercent(num, den)}%</div>
            </Link>
          )
        })}
      </div>

      {/* Full conversion table */}
      <section className="mb-10">
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{colFraction[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{colDecimal[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{colPercent[l]}</th>
              </tr>
            </thead>
            <tbody>
              {FRACTIONS.map(slug => {
                const { num, den } = parseFraction(slug)
                return (
                  <tr key={slug} className="border-t hover:bg-muted/30">
                    <td className="px-4 py-2 font-mono font-semibold">
                      <Link href={`/${locale}/convert/fraction-to-decimal/${slug}`} className="hover:text-emerald-700 transition-colors">
                        {num}/{den}
                      </Link>
                    </td>
                    <td className="px-4 py-2 font-mono">{toDecimal(num, den)}</td>
                    <td className="px-4 py-2 font-mono text-muted-foreground">{toPercent(num, den)}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/tables/fractions`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {{ en: 'Fraction Table', it: 'Tabella Frazioni', de: 'Bruchtabelle', fr: 'Table des fractions', es: 'Tabla de fracciones' }[l]}
          </Link>
          <Link href={`/${locale}/tables/percentage-chart`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {{ en: 'Percentage Chart', it: 'Tabella Percentuali', de: 'Prozenttabelle', fr: 'Table des pourcentages', es: 'Tabla de porcentajes' }[l]}
          </Link>
        </div>
      </section>
    </div>
  )
}

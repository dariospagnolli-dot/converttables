import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'

// Common fractions that people search for
const FRACTIONS = [
  '1-2', '1-3', '2-3', '1-4', '3-4', '1-5', '2-5', '3-5', '4-5',
  '1-6', '5-6', '1-7', '2-7', '3-7', '4-7', '5-7', '6-7',
  '1-8', '3-8', '5-8', '7-8',
  '1-9', '2-9', '4-9', '5-9', '7-9', '8-9',
  '1-10', '3-10', '7-10', '9-10',
  '1-12', '5-12', '7-12', '11-12',
  '1-16', '3-16', '5-16', '7-16', '9-16', '11-16', '13-16', '15-16',
  '1-32', '1-64', '1-100', '1-1000',
]

function parseFraction(slug: string): { num: number; den: number } | null {
  const parts = slug.split('-')
  if (parts.length !== 2) return null
  const num = parseInt(parts[0])
  const den = parseInt(parts[1])
  if (isNaN(num) || isNaN(den) || den === 0 || num <= 0) return null
  return { num, den }
}

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    FRACTIONS.map(fraction => ({ locale, fraction }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; fraction: string }> }): Promise<Metadata> {
  const { locale, fraction } = await params
  const l = locale as Locale
  const f = parseFraction(fraction)
  if (!f) return {}
  const decimal = (f.num / f.den).toFixed(6).replace(/0+$/, '').replace(/\.$/, '')
  const percent = ((f.num / f.den) * 100).toFixed(4).replace(/0+$/, '').replace(/\.$/, '')

  const titles: Record<Locale, string> = {
    en: `${f.num}/${f.den} as a Decimal — ${decimal}`,
    it: `${f.num}/${f.den} come Decimale — ${decimal}`,
    de: `${f.num}/${f.den} als Dezimalzahl — ${decimal}`,
    fr: `${f.num}/${f.den} en décimal — ${decimal}`,
    es: `${f.num}/${f.den} como decimal — ${decimal}`,
  }
  const descriptions: Record<Locale, string> = {
    en: `${f.num}/${f.den} as a decimal is ${decimal}. As a percentage: ${percent}%. Step-by-step conversion.`,
    it: `${f.num}/${f.den} come decimale è ${decimal}. Come percentuale: ${percent}%. Conversione passo passo.`,
    de: `${f.num}/${f.den} als Dezimalzahl ist ${decimal}. Als Prozent: ${percent}%. Schritt-für-Schritt-Umrechnung.`,
    fr: `${f.num}/${f.den} en décimal vaut ${decimal}. En pourcentage : ${percent}%. Conversion étape par étape.`,
    es: `${f.num}/${f.den} como decimal es ${decimal}. Como porcentaje: ${percent}%. Conversión paso a paso.`,
  }

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `/${locale}/tables/fractions/${fraction}`,
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/tables/fractions/${fraction}`])),
    },
  }
}

export default async function FractionPage({ params }: { params: Promise<{ locale: string; fraction: string }> }) {
  const { locale, fraction } = await params
  const l = locale as Locale
  const f = parseFraction(fraction)
  if (!f) notFound()

  const decimal = f.num / f.den
  const decStr = decimal.toFixed(10).replace(/0+$/, '').replace(/\.$/, '')
  const percent = (decimal * 100).toFixed(6).replace(/0+$/, '').replace(/\.$/, '')

  // Multiples
  const multiples = [1, 2, 3, 4, 5, 10].map(m => ({
    fraction: `${f.num * m}/${f.den}`,
    decimal: ((f.num * m) / f.den).toFixed(6).replace(/0+$/, '').replace(/\.$/, ''),
  }))

  const labels = {
    en: { as_decimal: 'as a Decimal', as_percent: 'as a Percentage', formula: 'How to Convert', multiples: 'Multiples', back: 'Fraction Table' },
    it: { as_decimal: 'come Decimale', as_percent: 'come Percentuale', formula: 'Come Convertire', multiples: 'Multipli', back: 'Tabella Frazioni' },
    de: { as_decimal: 'als Dezimalzahl', as_percent: 'als Prozent', formula: 'Umrechnung', multiples: 'Vielfache', back: 'Bruchtabelle' },
    fr: { as_decimal: 'en décimal', as_percent: 'en pourcentage', formula: 'Comment convertir', multiples: 'Multiples', back: 'Table des fractions' },
    es: { as_decimal: 'como decimal', as_percent: 'como porcentaje', formula: 'Cómo convertir', multiples: 'Múltiplos', back: 'Tabla de fracciones' },
  }
  const lbl = labels[l]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{{ en: 'Home', it: 'Home', de: 'Startseite', fr: 'Accueil', es: 'Inicio' }[l]}</Link>
        {' / '}
        <Link href={`/${locale}/tables/fractions`} className="hover:text-foreground">{lbl.back}</Link>
        {' / '}
        <span className="text-foreground">{f.num}/{f.den}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{f.num}/{f.den} {lbl.as_decimal}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-lg border bg-card p-6 text-center">
          <div className="text-sm text-muted-foreground mb-1">{lbl.as_decimal}</div>
          <div className="text-4xl font-bold font-mono">{decStr}</div>
        </div>
        <div className="rounded-lg border bg-card p-6 text-center">
          <div className="text-sm text-muted-foreground mb-1">{lbl.as_percent}</div>
          <div className="text-4xl font-bold font-mono">{percent}%</div>
        </div>
      </div>

      {/* Formula */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{lbl.formula}</h2>
        <div className="rounded-lg border bg-muted/30 p-6 font-mono text-center text-lg">
          {f.num} ÷ {f.den} = {decStr}
        </div>
      </section>

      {/* Multiples */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{lbl.multiples}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Fraction', it: 'Frazione', de: 'Bruch', fr: 'Fraction', es: 'Fracción' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Decimal', it: 'Decimale', de: 'Dezimal', fr: 'Décimal', es: 'Decimal' }[l]}</th>
            </tr></thead>
            <tbody>
              {multiples.map(m => (
                <tr key={m.fraction} className="border-t">
                  <td className="px-4 py-2 font-mono font-semibold">{m.fraction}</td>
                  <td className="px-4 py-2 font-mono">{m.decimal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related fractions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{lbl.back}</h2>
        <div className="flex flex-wrap gap-2">
          {FRACTIONS.filter(fr => fr !== fraction).slice(0, 20).map(fr => {
            const p = parseFraction(fr)!
            return (
              <Link key={fr} href={`/${locale}/tables/fractions/${fr}`} className="rounded border px-3 py-1.5 font-mono text-sm hover:bg-accent transition-colors">
                {p.num}/{p.den}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { CONVERSION_PAIRS, getUnit, getPairBySlug, formatResult, getLinearCoefficients } from '@/lib/conversions/general'
import { GeneralCalculator } from '@/components/GeneralCalculator'

export async function generateStaticParams() {
  const params: { locale: string; slug: string; value: string }[] = []
  for (const locale of locales) {
    for (const pair of CONVERSION_PAIRS) {
      if (!pair.popularValues) continue
      for (const val of pair.popularValues) {
        params.push({ locale, slug: pair.slug, value: String(val) })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string; value: string }> }): Promise<Metadata> {
  const { locale, slug, value } = await params
  const l = locale as Locale
  const pair = getPairBySlug(slug)
  if (!pair) return {}
  const from = getUnit(pair.from)!
  const to = getUnit(pair.to)!
  const numVal = parseFloat(value)
  const result = formatResult(pair.convert(numVal))

  const title = `${value} ${from.symbol} ${t(l, 'to')} ${to.symbol} — ${result} ${to.symbol}`
  const desc = l === 'it'
    ? `${value} ${from.names[l]} equivalgono a ${result} ${to.names[l]}. Conversione e formula.`
    : `${value} ${from.names[l]} equals ${result} ${to.names[l]}. Conversion and formula.`

  return { title, description: desc }
}

export default async function SpecificValuePage({ params }: { params: Promise<{ locale: string; slug: string; value: string }> }) {
  const { locale, slug, value } = await params
  const l = locale as Locale
  const pair = getPairBySlug(slug)
  if (!pair) notFound()

  const from = getUnit(pair.from)!
  const to = getUnit(pair.to)!
  const numVal = parseFloat(value)
  if (isNaN(numVal)) notFound()

  const result = pair.convert(numVal)

  const nearbyValues = [
    numVal * 0.5,
    numVal * 0.75,
    numVal,
    numVal * 1.5,
    numVal * 2,
    numVal * 5,
    numVal * 10,
  ].filter(v => v !== numVal && v > 0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        {' / '}
        <Link href={`/${locale}/convert/${slug}`} className="hover:text-foreground">{from.names[l]} → {to.names[l]}</Link>
        {' / '}
        <span className="text-foreground">{value}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        {value} {from.names[l]} {t(l, 'to')} {to.names[l]}
      </h1>

      <div className="rounded-lg border bg-card p-6 mb-8 text-center">
        <div className="text-4xl font-bold font-mono mb-2">
          {value} {from.symbol} = {formatResult(result)} {to.symbol}
        </div>
        <p className="text-muted-foreground">
          1 {from.symbol} = {formatResult(pair.convert(1))} {to.symbol}
        </p>
      </div>

      <GeneralCalculator
        fromName={from.names[l]}
        toName={to.names[l]}
        fromSymbol={from.symbol}
        toSymbol={to.symbol}
        {...getLinearCoefficients(pair)}
        locale={l}
        defaultValue={numVal}
      />

      {/* Formula */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          {l === 'it' ? 'Formula' : 'Formula'}
        </h2>
        <div className="rounded-lg border bg-muted/30 p-4 font-mono text-sm">
          {value} {from.symbol} × {formatResult(pair.convert(1))} = {formatResult(result)} {to.symbol}
        </div>
      </section>

      {/* Nearby values */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Altre conversioni' : 'More conversions'}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{from.symbol}</th>
                <th className="px-4 py-2 text-left font-medium">{to.symbol}</th>
              </tr>
            </thead>
            <tbody>
              {nearbyValues.map(v => (
                <tr key={v} className="border-t">
                  <td className="px-4 py-2 font-mono">{v}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{formatResult(pair.convert(v))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Link href={`/${locale}/convert/${slug}`} className="text-primary hover:underline text-sm">
        &larr; {l === 'it' ? 'Tutte le conversioni' : 'All conversions'} {from.names[l]} → {to.names[l]}
      </Link>
    </div>
  )
}

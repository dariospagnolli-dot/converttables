import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import {
  CONVERSION_PAIRS, getUnit, getPairBySlug, getPairsByCategory,
  generateConversionTableForPair, formatResult, CATEGORY_NAMES, getLinearCoefficients
} from '@/lib/conversions/general'
import { GeneralCalculator } from '@/components/GeneralCalculator'

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    CONVERSION_PAIRS.map(pair => ({ locale, slug: pair.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const l = locale as Locale
  const pair = getPairBySlug(slug)
  if (!pair) return {}
  const from = getUnit(pair.from)!
  const to = getUnit(pair.to)!

  const title = `${from.names[l]} ${t(l, 'to')} ${to.names[l]} — ${t(l, 'convert')}`
  const desc = l === 'it'
    ? `Converti ${from.names[l]} in ${to.names[l]}. Calcolatrice e tabella di conversione ${from.symbol} → ${to.symbol}.`
    : `Convert ${from.names[l]} to ${to.names[l]}. Calculator and conversion table ${from.symbol} → ${to.symbol}.`

  return {
    title,
    description: desc,
    alternates: {
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/${slug}`])),
    },
  }
}

export default async function ConversionPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const l = locale as Locale
  const pair = getPairBySlug(slug)
  if (!pair) notFound()

  const from = getUnit(pair.from)!
  const to = getUnit(pair.to)!
  const table = generateConversionTableForPair(pair)
  const related = getPairsByCategory(pair.category).filter(p => p.slug !== slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to convert ${from.names.en} to ${to.names.en}`,
    step: [{
      '@type': 'HowToStep',
      text: `1 ${from.symbol} = ${formatResult(pair.convert(1))} ${to.symbol}`,
    }],
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        {' / '}
        <Link href={`/${locale}/convert`} className="hover:text-foreground">{t(l, 'conversions')}</Link>
        {' / '}
        <span className="text-foreground">{from.names[l]} → {to.names[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        {from.names[l]} {t(l, 'to')} {to.names[l]}
      </h1>
      <p className="text-lg text-muted-foreground mb-2">
        1 {from.symbol} = <strong className="text-foreground">{formatResult(pair.convert(1))} {to.symbol}</strong>
      </p>
      <p className="text-sm text-muted-foreground mb-8">
        1 {to.symbol} = {formatResult(1 / pair.convert(1))} {from.symbol}
      </p>

      <GeneralCalculator
        fromName={from.names[l]}
        toName={to.names[l]}
        fromSymbol={from.symbol}
        toSymbol={to.symbol}
        {...getLinearCoefficients(pair)}
        locale={l}
      />

      {/* Conversion Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'conversionTable')}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{from.names[l]} ({from.symbol})</th>
                <th className="px-4 py-2 text-left font-medium">{to.names[l]} ({to.symbol})</th>
              </tr>
            </thead>
            <tbody>
              {table.map(row => (
                <tr key={row.input} className="border-t">
                  <td className="px-4 py-2 font-mono">{row.input} {from.symbol}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{formatResult(row.output)} {to.symbol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Popular Values */}
      {pair.popularValues && pair.popularValues.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            {l === 'it' ? 'Conversioni Popolari' : 'Popular Conversions'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {pair.popularValues.map(val => (
              <Link
                key={val}
                href={`/${locale}/convert/${slug}/${val}`}
                className="rounded border px-3 py-2 text-sm hover:bg-accent transition-colors font-mono"
              >
                {val} {from.symbol} = {formatResult(pair.convert(val))} {to.symbol}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Conversions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          {t(l, 'relatedConversions')} — {CATEGORY_NAMES[pair.category][l]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {related.map(r => {
            const rf = getUnit(r.from)!
            const rt = getUnit(r.to)!
            return (
              <Link
                key={r.slug}
                href={`/${locale}/convert/${r.slug}`}
                className="rounded border px-3 py-2 text-sm hover:bg-accent transition-colors"
              >
                {rf.names[l]} → {rt.names[l]}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

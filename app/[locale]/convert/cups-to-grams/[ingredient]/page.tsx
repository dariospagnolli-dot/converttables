import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS, getIngredientBySlug } from '@/lib/data/ingredients'
import { cupsToGrams, generateConversionTable, tablespoonToGrams, teaspoonToGrams } from '@/lib/conversions/cooking'
import { ConversionCalculator } from '@/components/ConversionCalculator'

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    INGREDIENTS.map(ing => ({ locale, ingredient: ing.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; ingredient: string }> }): Promise<Metadata> {
  const { locale, ingredient: slug } = await params
  const l = locale as Locale
  const ing = getIngredientBySlug(slug)
  if (!ing) return {}

  const title = {
    en: `Cups to Grams ${ing.names[l]} — Conversion Chart`,
    it: `Tazze in Grammi ${ing.names[l]} — Tabella di Conversione`,
    de: `Tassen in Gramm ${ing.names[l]} — Umrechnungstabelle`,
    fr: `Tasses en Grammes ${ing.names[l]} — Tableau de Conversion`,
    es: `Tazas a Gramos ${ing.names[l]} — Tabla de Conversión`,
  }[l]!

  const desc = {
    en: `Convert cups to grams for ${ing.names[l]}. 1 cup = ${cupsToGrams(1, ing)}g. Complete chart with US and metric cups.`,
    it: `Converti tazze in grammi per ${ing.names[l]}. 1 tazza = ${cupsToGrams(1, ing)}g. Tabella completa con tazza US e metrica.`,
    de: `Tassen in Gramm umrechnen für ${ing.names[l]}. 1 Tasse = ${cupsToGrams(1, ing)}g. Vollständige Tabelle mit US- und metrischen Tassen.`,
    fr: `Convertir tasses en grammes pour ${ing.names[l]}. 1 tasse = ${cupsToGrams(1, ing)}g. Tableau complet avec tasses US et métriques.`,
    es: `Convierte tazas a gramos para ${ing.names[l]}. 1 taza = ${cupsToGrams(1, ing)}g. Tabla completa con tazas US y métricas.`,
  }[l]!

  return {
    title,
    description: desc,
    alternates: {
      languages: Object.fromEntries(
        locales.map(loc => [loc, `/${loc}/convert/cups-to-grams/${slug}`])
      ),
    },
  }
}

export default async function IngredientPage({ params }: { params: Promise<{ locale: string; ingredient: string }> }) {
  const { locale, ingredient: slug } = await params
  const l = locale as Locale
  const ing = getIngredientBySlug(slug)
  if (!ing) notFound()

  const table = generateConversionTable(ing)
  const metricTable = generateConversionTable(ing, 'metric')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to convert cups to grams for ${ing.names.en}`,
    step: [
      {
        '@type': 'HowToStep',
        text: `1 US cup of ${ing.names.en} = ${cupsToGrams(1, ing)}g`,
      },
      {
        '@type': 'HowToStep',
        text: `1 metric cup of ${ing.names.en} = ${cupsToGrams(1, ing, 'metric')}g`,
      },
    ],
    tool: { '@type': 'HowToTool', name: 'Kitchen scale' },
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/convert/cups-to-grams`} className="hover:text-foreground">{t(l, 'cupsToGrams')}</Link>
        {' / '}
        <span className="text-foreground">{ing.names[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        {t(l, 'conversionChart', { ingredient: ing.names[l] })}
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        {t(l, 'howManyGrams', { amount: '1', ingredient: ing.names[l] })}
        {' '}
        <strong className="text-foreground">{cupsToGrams(1, ing)}g</strong>
      </p>

      {/* Interactive Calculator */}
      <ConversionCalculator ingredient={ing} locale={l} />

      {/* US Cup Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {ing.names[l]} — US Cup (236ml)
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{t(l, 'cups')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'milliliters')}</th>
              </tr>
            </thead>
            <tbody>
              {table.map(row => (
                <tr key={row.cups} className="border-t">
                  <td className="px-4 py-2 font-mono">{row.cups === 0.333 ? '⅓' : row.cups === 0.667 ? '⅔' : row.cups}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{row.grams}g</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{row.ml} ml</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Metric Cup Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {ing.names[l]} — Metric Cup (250ml)
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{t(l, 'cups')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'milliliters')}</th>
              </tr>
            </thead>
            <tbody>
              {metricTable.map(row => (
                <tr key={row.cups} className="border-t">
                  <td className="px-4 py-2 font-mono">{row.cups === 0.333 ? '⅓' : row.cups === 0.667 ? '⅔' : row.cups}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{row.grams}g</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{row.ml} ml</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tablespoon / Teaspoon */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {t(l, 'tablespoons')} & {t(l, 'teaspoons')}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{t(l, 'amount')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(n => (
                <tr key={`tbsp-${n}`} className="border-t">
                  <td className="px-4 py-2">{n} {t(l, n === 1 ? 'tablespoon' : 'tablespoons')}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{tablespoonToGrams(n, ing)}g</td>
                </tr>
              ))}
              {[1, 2, 3, 4, 5].map(n => (
                <tr key={`tsp-${n}`} className="border-t">
                  <td className="px-4 py-2">{n} {t(l, n === 1 ? 'teaspoon' : 'teaspoons')}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{teaspoonToGrams(n, ing)}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Source */}
      <p className="text-xs text-muted-foreground mb-8">
        {t(l, 'source')} — {ing.names.en} density: {ing.density_g_per_ml} g/ml
      </p>

      {/* Other ingredients */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'otherIngredients')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {INGREDIENTS.filter(i => i.slug !== slug).map(other => (
            <Link
              key={other.slug}
              href={`/${locale}/convert/cups-to-grams/${other.slug}`}
              className="rounded border px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              {other.names[l]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

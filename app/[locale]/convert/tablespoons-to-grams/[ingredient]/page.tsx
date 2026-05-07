import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS, getIngredientBySlug } from '@/lib/data/ingredients'
import { tablespoonToGrams, teaspoonToGrams } from '@/lib/conversions/cooking'

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

  const val = tablespoonToGrams(1, ing)
  const title: Record<Locale, string> = {
    en: `1 Tablespoon ${ing.names.en} in Grams — ${val}g Chart`,
    it: `1 Cucchiaio di ${ing.names.it} in Grammi — Tabella ${val}g`,
    de: `1 Esslöffel ${ing.names.de} in Gramm — ${val}g Tabelle`,
    fr: `1 Cuillère à soupe de ${ing.names.fr} en grammes — ${val}g`,
    es: `1 Cucharada de ${ing.names.es} en gramos — ${val}g`,
  }
  const description: Record<Locale, string> = {
    en: `How many grams in a tablespoon of ${ing.names.en}? 1 tbsp = ${val}g. Complete tablespoons to grams chart.`,
    it: `Quanti grammi in un cucchiaio di ${ing.names.it}? 1 cucchiaio = ${val}g. Tabella completa cucchiai-grammi.`,
    de: `Wie viele Gramm in einem Esslöffel ${ing.names.de}? 1 EL = ${val}g. Vollständige Tabelle.`,
    fr: `Combien de grammes dans une cuillère à soupe de ${ing.names.fr} ? 1 c. à s. = ${val}g. Tableau complet.`,
    es: `¿Cuántos gramos hay en una cucharada de ${ing.names.es}? 1 cda = ${val}g. Tabla completa.`,
  }

  return {
    title: title[l],
    description: description[l],
    alternates: {
      languages: Object.fromEntries(
        locales.map(loc => [loc, `/${loc}/convert/tablespoons-to-grams/${slug}`])
      ),
    },
  }
}

export default async function TablespoonsIngredientPage({ params }: { params: Promise<{ locale: string; ingredient: string }> }) {
  const { locale, ingredient: slug } = await params
  const l = locale as Locale
  const ing = getIngredientBySlug(slug)
  if (!ing) notFound()

  const tbspAmounts = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16]
  const tspAmounts = [0.25, 0.5, 1, 1.5, 2, 3, 4, 5, 6]

  const formatTbsp = (n: number) => {
    if (n === 0.25) return '¼'
    if (n === 0.5) return '½'
    if (n === 0.75) return '¾'
    if (n === 1.5) return '1½'
    return String(n)
  }
  const formatTsp = (n: number) => {
    if (n === 0.25) return '¼'
    if (n === 0.5) return '½'
    if (n === 1.5) return '1½'
    return String(n)
  }

  const val1tbsp = tablespoonToGrams(1, ing)
  const val1tsp = teaspoonToGrams(1, ing)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How many grams in a tablespoon of ${ing.names.en}`,
    step: [{ '@type': 'HowToStep', text: `1 tablespoon of ${ing.names.en} = ${val1tbsp}g` }],
  }

  const labels: Record<Locale, { tbsp: string; tsp: string; grams: string; cupsLink: string; tspLink: string }> = {
    en: { tbsp: 'Tablespoons', tsp: 'Teaspoons', grams: 'Grams', cupsLink: 'Cups to Grams', tspLink: 'Teaspoons to Grams' },
    it: { tbsp: 'Cucchiai', tsp: 'Cucchiaini', grams: 'Grammi', cupsLink: 'Tazze in Grammi', tspLink: 'Cucchiaini in Grammi' },
    de: { tbsp: 'Esslöffel', tsp: 'Teelöffel', grams: 'Gramm', cupsLink: 'Tassen in Gramm', tspLink: 'Teelöffel in Gramm' },
    fr: { tbsp: 'Cuillères à soupe', tsp: 'Cuillères à café', grams: 'Grammes', cupsLink: 'Tasses en Grammes', tspLink: 'Cuillères à café en grammes' },
    es: { tbsp: 'Cucharadas', tsp: 'Cucharaditas', grams: 'Gramos', cupsLink: 'Tazas a Gramos', tspLink: 'Cucharaditas a Gramos' },
  }
  const lb = labels[l]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/convert/tablespoons-to-grams`} className="hover:text-foreground">{t(l, 'tablespoonsToGrams')}</Link>
        {' / '}
        <span className="text-foreground">{ing.names[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        {ing.names[l]} — {t(l, 'tablespoonsToGrams')}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        1 {t(l, 'tablespoon').toLowerCase()} {ing.names[l]} = <strong className="text-foreground">{val1tbsp}g</strong>
        {' · '}
        1 {t(l, 'teaspoon').toLowerCase()} = <strong className="text-foreground">{val1tsp}g</strong>
      </p>

      {/* Quick reference */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[1, 2, 3, 4].map(n => (
          <div key={n} className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">{n} tbsp</div>
            <div className="text-2xl font-bold font-mono">{tablespoonToGrams(n, ing)}g</div>
          </div>
        ))}
      </div>

      {/* Tablespoons table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{ing.names[l]} — {lb.tbsp}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{lb.tbsp}</th>
                <th className="px-4 py-2 text-left font-medium">{lb.grams}</th>
              </tr>
            </thead>
            <tbody>
              {tbspAmounts.map(n => (
                <tr key={n} className="border-t">
                  <td className="px-4 py-2 font-mono">{formatTbsp(n)} tbsp</td>
                  <td className="px-4 py-2 font-mono font-semibold">{Math.round(n * tablespoonToGrams(1, ing))}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">16 tbsp = 1 US cup</p>
      </section>

      {/* Teaspoons table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{ing.names[l]} — {lb.tsp}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{lb.tsp}</th>
                <th className="px-4 py-2 text-left font-medium">{lb.grams}</th>
              </tr>
            </thead>
            <tbody>
              {tspAmounts.map(n => (
                <tr key={n} className="border-t">
                  <td className="px-4 py-2 font-mono">{formatTsp(n)} tsp</td>
                  <td className="px-4 py-2 font-mono font-semibold">{Math.round(n * teaspoonToGrams(1, ing))}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">3 tsp = 1 tbsp · 1 tbsp = {val1tbsp}g</p>
      </section>

      {/* Cross-links */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/cups-to-grams/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {lb.cupsLink} — {ing.names[l]}
          </Link>
          <Link href={`/${locale}/convert/grams-to-cups/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'gramsToCups')} — {ing.names[l]}
          </Link>
          <Link href={`/${locale}/convert/teaspoons-to-grams/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {lb.tspLink} — {ing.names[l]}
          </Link>
        </div>
      </section>

      <p className="text-xs text-muted-foreground mb-8">
        {t(l, 'source')} — {ing.names.en} density: {ing.density_g_per_ml} g/ml · 1 tbsp = 14.787 ml
      </p>

      {/* Other ingredients */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'otherIngredients')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {INGREDIENTS.filter(i => i.slug !== slug).map(other => (
            <Link
              key={other.slug}
              href={`/${locale}/convert/tablespoons-to-grams/${other.slug}`}
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

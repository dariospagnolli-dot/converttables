import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS, getIngredientBySlug } from '@/lib/data/ingredients'
import { gramsToCups, cupsToGrams } from '@/lib/conversions/cooking'

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
    en: `Grams to Cups ${ing.names[l]} — Conversion Chart`,
    it: `Grammi in Tazze ${ing.names[l]} — Tabella di Conversione`,
    de: `Gramm in Tassen ${ing.names[l]} — Umrechnungstabelle`,
    fr: `Grammes en Tasses ${ing.names[l]} — Tableau de Conversion`,
    es: `Gramos a Tazas ${ing.names[l]} — Tabla de Conversión`,
  }[l]!

  const desc = {
    en: `Convert grams to cups for ${ing.names[l]}. 100g = ${gramsToCups(100, ing)} cups. Complete chart.`,
    it: `Converti grammi in tazze per ${ing.names[l]}. 100g = ${gramsToCups(100, ing)} tazze. Tabella completa.`,
    de: `Gramm in Tassen umrechnen für ${ing.names[l]}. 100g = ${gramsToCups(100, ing)} Tassen. Vollständige Tabelle.`,
    fr: `Convertir grammes en tasses pour ${ing.names[l]}. 100g = ${gramsToCups(100, ing)} tasses. Tableau complet.`,
    es: `Convierte gramos a tazas para ${ing.names[l]}. 100g = ${gramsToCups(100, ing)} tazas. Tabla completa.`,
  }[l]!

  return {
    title,
    description: desc,
    alternates: {
      languages: Object.fromEntries(
        locales.map(loc => [loc, `/${loc}/convert/grams-to-cups/${slug}`])
      ),
    },
  }
}

export default async function GramsToCupsIngredient({ params }: { params: Promise<{ locale: string; ingredient: string }> }) {
  const { locale, ingredient: slug } = await params
  const l = locale as Locale
  const ing = getIngredientBySlug(slug)
  if (!ing) notFound()

  const gramValues = [10, 25, 50, 75, 100, 125, 150, 200, 250, 300, 400, 500, 750, 1000]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to convert grams to cups for ${ing.names.en}`,
    step: [{
      '@type': 'HowToStep',
      text: `100g of ${ing.names.en} = ${gramsToCups(100, ing)} US cups`,
    }],
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/convert/grams-to-cups`} className="hover:text-foreground">{t(l, 'gramsToCups')}</Link>
        {' / '}
        <span className="text-foreground">{ing.names[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        {ing.names[l]} — {{ en: 'Grams to Cups', it: 'Grammi in Tazze', de: 'Gramm in Tassen', fr: 'Grammes en Tasses', es: 'Gramos a Tazas' }[l]}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        100g {ing.names[l]} = <strong className="text-foreground">{gramsToCups(100, ing)} {t(l, 'cups').toLowerCase()}</strong> (US)
      </p>

      {/* US Cup Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{ing.names[l]} — US Cup (236ml)</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'cups')} (US)</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'cups')} (Metric)</th>
              </tr>
            </thead>
            <tbody>
              {gramValues.map(g => (
                <tr key={g} className="border-t">
                  <td className="px-4 py-2 font-mono">{g}g</td>
                  <td className="px-4 py-2 font-mono font-semibold">{gramsToCups(g, ing, 'us')}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{gramsToCups(g, ing, 'metric')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick reference: 1 cup = Xg */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'quickReference')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">1 US Cup</div>
            <div className="text-2xl font-bold font-mono">{cupsToGrams(1, ing, 'us')}g</div>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">1 Metric Cup</div>
            <div className="text-2xl font-bold font-mono">{cupsToGrams(1, ing, 'metric')}g</div>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">1 Imperial Cup</div>
            <div className="text-2xl font-bold font-mono">{cupsToGrams(1, ing, 'imperial')}g</div>
          </div>
        </div>
      </section>

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
              href={`/${locale}/convert/grams-to-cups/${other.slug}`}
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

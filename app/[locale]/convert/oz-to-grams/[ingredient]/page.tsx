import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS, getIngredientBySlug } from '@/lib/data/ingredients'
import { ozToGrams, cupsToGrams, tablespoonToGrams } from '@/lib/conversions/cooking'

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

  const val2oz = ozToGrams(2)
  const val4oz = ozToGrams(4)
  const title: Record<Locale, string> = {
    en: `Ounces to Grams ${ing.names.en} — oz to g Chart`,
    it: `Once in Grammi ${ing.names.it} — Tabella oz-g`,
    de: `Unzen in Gramm ${ing.names.de} — Umrechnungstabelle`,
    fr: `Onces en Grammes ${ing.names.fr} — Tableau oz-g`,
    es: `Onzas a Gramos ${ing.names.es} — Tabla oz-g`,
  }
  const description: Record<Locale, string> = {
    en: `How many grams in 2 oz of ${ing.names.en}? 2 oz = ${val2oz}g, 4 oz = ${val4oz}g. Full ounces to grams chart.`,
    it: `Quanti grammi sono 2 once di ${ing.names.it}? 2 oz = ${val2oz}g, 4 oz = ${val4oz}g. Tabella once-grammi.`,
    de: `Wie viele Gramm sind 2 Unzen ${ing.names.de}? 2 oz = ${val2oz}g, 4 oz = ${val4oz}g. Vollständige Tabelle.`,
    fr: `Combien de grammes pour 2 oz de ${ing.names.fr} ? 2 oz = ${val2oz}g, 4 oz = ${val4oz}g. Tableau complet.`,
    es: `¿Cuántos gramos son 2 oz de ${ing.names.es}? 2 oz = ${val2oz}g, 4 oz = ${val4oz}g. Tabla completa.`,
  }

  return {
    title: title[l],
    description: description[l],
    alternates: {
      languages: Object.fromEntries(
        locales.map(loc => [loc, `/${loc}/convert/oz-to-grams/${slug}`])
      ),
    },
  }
}

export default async function OzToGramsIngredientPage({ params }: { params: Promise<{ locale: string; ingredient: string }> }) {
  const { locale, ingredient: slug } = await params
  const l = locale as Locale
  const ing = getIngredientBySlug(slug)
  if (!ing) notFound()

  const ozAmounts = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16]
  const formatOz = (n: number) => {
    if (n === 0.25) return '¼'
    if (n === 0.5) return '½'
    if (n === 0.75) return '¾'
    if (n === 1.5) return '1½'
    return String(n)
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to convert ounces to grams for ${ing.names.en}`,
    step: [
      { '@type': 'HowToStep', text: `1 oz of ${ing.names.en} = ${ozToGrams(1)}g` },
      { '@type': 'HowToStep', text: `4 oz of ${ing.names.en} = ${ozToGrams(4)}g` },
    ],
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/convert/oz-to-grams`} className="hover:text-foreground">{t(l, 'ouncesToGrams')}</Link>
        {' / '}
        <span className="text-foreground">{ing.names[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        {ing.names[l]} — {t(l, 'ouncesToGrams')}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        1 oz {ing.names[l]} = <strong className="text-foreground">{ozToGrams(1)}g</strong>
        {' · '}
        4 oz = <strong className="text-foreground">{ozToGrams(4)}g</strong>
        {' · '}
        16 oz (1 lb) = <strong className="text-foreground">{ozToGrams(16)}g</strong>
      </p>

      {/* Quick reference cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[1, 2, 4, 8].map(n => (
          <div key={n} className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">{n} oz</div>
            <div className="text-2xl font-bold font-mono">{ozToGrams(n)}g</div>
          </div>
        ))}
      </div>

      {/* Main conversion table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {ing.names[l]} — {{ en: 'oz to grams', it: 'oz in grammi', de: 'Unzen in Gramm', fr: 'oz en grammes', es: 'oz a gramos' }[l]}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{{ en: 'Ounces (oz)', it: 'Once (oz)', de: 'Unzen (oz)', fr: 'Onces (oz)', es: 'Onzas (oz)' }[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
              </tr>
            </thead>
            <tbody>
              {ozAmounts.map(n => (
                <tr key={n} className="border-t">
                  <td className="px-4 py-2 font-mono">{formatOz(n)} oz</td>
                  <td className="px-4 py-2 font-mono font-semibold">{ozToGrams(n)}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">1 oz = 28.35g · 16 oz = 1 lb = 453.6g</p>
      </section>

      {/* Context: cups equivalent */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Ounces vs Cups', it: 'Once vs Tazze', de: 'Unzen vs Tassen', fr: 'Onces vs Tasses', es: 'Onzas vs Tazas' }[l]}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">oz</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'cups')} (US)</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 4, 8].map(n => {
                const g = ozToGrams(n)
                const cups = Math.round((g / cupsToGrams(1, ing)) * 100) / 100
                return (
                  <tr key={n} className="border-t">
                    <td className="px-4 py-2 font-mono">{n} oz</td>
                    <td className="px-4 py-2 font-mono font-semibold">{g}g</td>
                    <td className="px-4 py-2 font-mono text-muted-foreground">{cups}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {{ en: 'Cup values based on', it: 'Valori tazza basati su', de: 'Tassenwerte basierend auf', fr: 'Valeurs tasse basées sur', es: 'Valores taza basados en' }[l]}{' '}
          {ing.names[l]} density: {ing.density_g_per_ml} g/ml
        </p>
      </section>

      {/* Cross-links */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/cups-to-grams/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToGrams')} — {ing.names[l]}
          </Link>
          <Link href={`/${locale}/convert/grams-to-cups/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'gramsToCups')} — {ing.names[l]}
          </Link>
          <Link href={`/${locale}/convert/tablespoons-to-grams/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'tablespoonsToGrams')} — {ing.names[l]}
          </Link>
        </div>
      </section>

      <p className="text-xs text-muted-foreground mb-8">{t(l, 'source')}</p>

      {/* Other ingredients */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'otherIngredients')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {INGREDIENTS.filter(i => i.slug !== slug).map(other => (
            <Link
              key={other.slug}
              href={`/${locale}/convert/oz-to-grams/${other.slug}`}
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

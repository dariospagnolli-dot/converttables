import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { cupsToGrams } from '@/lib/conversions/cooking'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'cupsToGrams'),
    description: {
      en: 'Convert cups to grams for any ingredient. Accurate conversion chart with US and metric cup sizes.',
      it: 'Converti tazze in grammi per ogni ingrediente. Tabella di conversione precisa con tazza US e metrica.',
      de: 'Tassen in Gramm umrechnen für jede Zutat. Genaue Umrechnungstabelle mit US- und metrischen Tassen.',
      fr: 'Convertir tasses en grammes pour tout ingrédient. Tableau de conversion précis avec tasses US et métriques.',
      es: 'Convierte tazas a gramos para cualquier ingrediente. Tabla de conversión precisa con tazas US y métricas.',
    }[l],
  }
}

export default async function CupsToGramsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const categories = [...new Set(INGREDIENTS.map(i => i.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{t(l, 'cupsToGrams')}</h1>
      <p className="text-muted-foreground mb-8">
        {t(l, 'selectIngredient')}
      </p>

      {categories.map(cat => {
        const items = INGREDIENTS.filter(i => i.category === cat)
        return (
          <section key={cat} className="mb-8">
            <h2 className="text-lg font-semibold mb-3 capitalize">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(ing => (
                <Link
                  key={ing.slug}
                  href={`/${locale}/convert/cups-to-grams/${ing.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <span className="font-medium">{ing.names[l]}</span>
                  <span className="text-sm text-muted-foreground font-mono">
                    1 cup = {cupsToGrams(1, ing)}g
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

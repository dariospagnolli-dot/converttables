import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { gramsToCups } from '@/lib/conversions/cooking'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'gramsToCups'),
    description: {
      en: 'Convert grams to cups for any ingredient. Accurate conversion chart.',
      it: 'Converti grammi in tazze per ogni ingrediente. Tabella di conversione precisa.',
      de: 'Gramm in Tassen umrechnen für jede Zutat. Genaue Umrechnungstabelle.',
      fr: 'Convertir grammes en tasses pour tout ingrédient. Tableau de conversion précis.',
      es: 'Convierte gramos a tazas para cualquier ingrediente. Tabla de conversión precisa.',
    }[l],
  }
}

export default async function GramsToCupsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const categories = [...new Set(INGREDIENTS.map(i => i.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{t(l, 'gramsToCups')}</h1>
      <p className="text-muted-foreground mb-8">{t(l, 'selectIngredient')}</p>

      {categories.map(cat => {
        const items = INGREDIENTS.filter(i => i.category === cat)
        return (
          <section key={cat} className="mb-8">
            <h2 className="text-lg font-semibold mb-3 capitalize">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(ing => (
                <Link
                  key={ing.slug}
                  href={`/${locale}/convert/grams-to-cups/${ing.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <span className="font-medium">{ing.names[l]}</span>
                  <span className="text-sm text-muted-foreground font-mono">
                    100g = {gramsToCups(100, ing)} cups
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

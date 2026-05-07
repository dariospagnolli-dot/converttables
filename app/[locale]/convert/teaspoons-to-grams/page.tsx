import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { teaspoonToGrams } from '@/lib/conversions/cooking'

const desc: Record<Locale, string> = {
  en: 'Convert teaspoons to grams for any ingredient. Essential chart for spices, baking powder, salt and more.',
  it: 'Converti cucchiaini in grammi per ogni ingrediente. Tabella essenziale per spezie, lievito, sale e altro.',
  de: 'Teelöffel in Gramm umrechnen für jede Zutat. Unverzichtbare Tabelle für Gewürze, Backpulver, Salz und mehr.',
  fr: 'Convertir des cuillères à café en grammes. Tableau essentiel pour épices, levure, sel et plus encore.',
  es: 'Convierte cucharaditas a gramos. Tabla esencial para especias, levadura, sal y más.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: t(l, 'teaspoonsToGrams'), description: desc[l] }
}

export default async function TeaspoonsToGramsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const categories = [...new Set(INGREDIENTS.map(i => i.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'teaspoonsToGrams')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{t(l, 'teaspoonsToGrams')}</h1>
      <p className="text-muted-foreground mb-8">{desc[l]}</p>

      {categories.map(cat => {
        const items = INGREDIENTS.filter(i => i.category === cat)
        return (
          <section key={cat} className="mb-8">
            <h2 className="text-lg font-semibold mb-3 capitalize">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(ing => (
                <Link
                  key={ing.slug}
                  href={`/${locale}/convert/teaspoons-to-grams/${ing.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <span className="font-medium">{ing.names[l]}</span>
                  <span className="text-sm text-muted-foreground font-mono">
                    1 tsp = {teaspoonToGrams(1, ing)}g
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

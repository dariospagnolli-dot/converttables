import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { ozToGrams } from '@/lib/conversions/cooking'

const desc: Record<Locale, string> = {
  en: 'Convert ounces to grams for any cooking ingredient. Quick reference chart: 1 oz = 28.35g.',
  it: 'Converti once in grammi per ogni ingrediente da cucina. Tabella rapida: 1 oncia = 28,35g.',
  de: 'Unzen in Gramm umrechnen für jede Küchenzutat. Schnellreferenz: 1 Unze = 28,35g.',
  fr: 'Convertir des onces en grammes pour tout ingrédient de cuisine. 1 oz = 28,35g.',
  es: 'Convierte onzas a gramos para cualquier ingrediente. Tabla rápida: 1 oz = 28,35g.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: t(l, 'ouncesToGrams'), description: desc[l] }
}

export default async function OzToGramsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const categories = [...new Set(INGREDIENTS.map(i => i.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'ouncesToGrams')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{t(l, 'ouncesToGrams')}</h1>
      <p className="text-muted-foreground mb-2">{desc[l]}</p>
      <p className="text-sm text-muted-foreground mb-8">
        1 oz = {ozToGrams(1)}g · 2 oz = {ozToGrams(2)}g · 4 oz = {ozToGrams(4)}g · 8 oz = {ozToGrams(8)}g · 16 oz = {ozToGrams(16)}g
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
                  href={`/${locale}/convert/oz-to-grams/${ing.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <span className="font-medium">{ing.names[l]}</span>
                  <span className="text-sm text-muted-foreground font-mono">4 oz = {ozToGrams(4)}g</span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

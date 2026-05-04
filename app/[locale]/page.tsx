import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          ConvertMath
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t(l, 'siteDescription')}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cooking Conversions */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{t(l, 'cookingConversions')}</h2>
          <ul className="space-y-2 text-sm">
            {INGREDIENTS.slice(0, 8).map(ing => (
              <li key={ing.slug}>
                <Link
                  href={`/${locale}/convert/cups-to-grams/${ing.slug}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(l, 'cupsToGrams')} — {ing.names[l]}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/${locale}/convert/cups-to-grams`}
                className="text-primary font-medium hover:underline"
              >
                {t(l, 'allIngredients')} &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Math Tables */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{t(l, 'mathTables')}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={`/${locale}/tables/multiplication`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(l, 'multiplicationTable')}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/tables/roman-numerals`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(l, 'romanNumerals')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Reference */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{t(l, 'quickReference')}</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>1 US cup</span>
              <span className="font-mono">236.59 ml</span>
            </div>
            <div className="flex justify-between">
              <span>1 metric cup</span>
              <span className="font-mono">250 ml</span>
            </div>
            <div className="flex justify-between">
              <span>1 tablespoon</span>
              <span className="font-mono">14.79 ml</span>
            </div>
            <div className="flex justify-between">
              <span>1 teaspoon</span>
              <span className="font-mono">4.93 ml</span>
            </div>
            <div className="flex justify-between">
              <span>1 inch</span>
              <span className="font-mono">2.54 cm</span>
            </div>
            <div className="flex justify-between">
              <span>1 pound</span>
              <span className="font-mono">453.59 g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

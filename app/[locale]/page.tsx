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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">ConvertMath</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t(l, 'siteDescription')}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cooking */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{t(l, 'cookingConversions')}</h2>
          <ul className="space-y-2 text-sm">
            {INGREDIENTS.slice(0, 8).map(ing => (
              <li key={ing.slug}>
                <Link href={`/${locale}/convert/cups-to-grams/${ing.slug}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t(l, 'cupsToGrams')} — {ing.names[l]}
                </Link>
              </li>
            ))}
            <li><Link href={`/${locale}/convert/cups-to-grams`} className="text-primary font-medium hover:underline">{t(l, 'allIngredients')} ({INGREDIENTS.length}) &rarr;</Link></li>
            <li><Link href={`/${locale}/convert/grams-to-cups`} className="text-primary font-medium hover:underline">{t(l, 'gramsToCups')} &rarr;</Link></li>
          </ul>
        </div>

        {/* Unit Conversions */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{t(l, 'generalConversions')}</h2>
          <ul className="space-y-2 text-sm">
            {[
              { slug: 'inches-to-cm', label: 'Inches → cm' },
              { slug: 'kg-to-pounds', label: 'kg → Pounds' },
              { slug: 'miles-to-km', label: 'Miles → km' },
              { slug: 'fahrenheit-to-celsius', label: '°F → °C' },
              { slug: 'gallons-to-liters', label: 'Gallons → Liters' },
              { slug: 'hp-to-kw', label: 'HP → kW' },
              { slug: 'bar-to-psi', label: 'Bar → PSI' },
              { slug: 'kmh-to-mph', label: 'km/h → mph' },
            ].map(item => (
              <li key={item.slug}>
                <Link href={`/${locale}/convert/${item.slug}`} className="text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
              </li>
            ))}
            <li><Link href={`/${locale}/convert`} className="text-primary font-medium hover:underline">{t(l, 'conversions')} &rarr;</Link></li>
          </ul>
        </div>

        {/* Math Tables */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{t(l, 'mathTables')}</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}/tables/multiplication`} className="text-muted-foreground hover:text-foreground">{t(l, 'multiplicationTable')}</Link></li>
            <li><Link href={`/${locale}/tables/roman-numerals`} className="text-muted-foreground hover:text-foreground">{t(l, 'romanNumerals')}</Link></li>
            <li><Link href={`/${locale}/tables/binary-hex`} className="text-muted-foreground hover:text-foreground">{t(l, 'binaryHex')}</Link></li>
            <li><Link href={`/${locale}/tables/squares-cubes`} className="text-muted-foreground hover:text-foreground">{l === 'it' ? 'Quadrati e Cubi' : 'Squares & Cubes'}</Link></li>
            <li><Link href={`/${locale}/tables/prime-numbers`} className="text-muted-foreground hover:text-foreground">{l === 'it' ? 'Numeri Primi' : 'Prime Numbers'}</Link></li>
            <li><Link href={`/${locale}/tables/powers-of-2`} className="text-muted-foreground hover:text-foreground">{l === 'it' ? 'Potenze di 2' : 'Powers of 2'}</Link></li>
            <li><Link href={`/${locale}/tables/logarithm`} className="text-muted-foreground hover:text-foreground">{l === 'it' ? 'Tabella Logaritmi' : 'Logarithm Table'}</Link></li>
          </ul>
        </div>

        {/* How Many */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Quanti/e...?' : 'How Many...?'}</h2>
          <ul className="space-y-2 text-sm">
            {[
              { slug: 'cm-in-inch', label: l === 'it' ? 'cm in un pollice?' : 'cm in an inch?' },
              { slug: 'grams-in-pound', label: l === 'it' ? 'grammi in una libbra?' : 'grams in a pound?' },
              { slug: 'cups-in-gallon', label: l === 'it' ? 'tazze in un gallone?' : 'cups in a gallon?' },
              { slug: 'feet-in-mile', label: l === 'it' ? 'piedi in un miglio?' : 'feet in a mile?' },
              { slug: 'mb-in-gb', label: l === 'it' ? 'MB in un GB?' : 'MB in a GB?' },
              { slug: 'ounces-in-pound', label: l === 'it' ? 'once in una libbra?' : 'ounces in a pound?' },
            ].map(item => (
              <li key={item.slug}>
                <Link href={`/${locale}/convert/how-many/${item.slug}`} className="text-muted-foreground hover:text-foreground">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Reference */}
        <div className="rounded-lg border bg-card p-6 md:col-span-2 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">{t(l, 'quickReference')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
            {[
              ['1 US cup', '236.59 ml'],
              ['1 metric cup', '250 ml'],
              ['1 tablespoon', '14.79 ml'],
              ['1 teaspoon', '4.93 ml'],
              ['1 inch', '2.54 cm'],
              ['1 foot', '30.48 cm'],
              ['1 mile', '1.609 km'],
              ['1 pound', '453.59 g'],
              ['1 ounce', '28.35 g'],
              ['1 gallon', '3.785 L'],
              ['1 fl oz', '29.57 ml'],
              ['°F to °C', '(°F − 32) × 5/9'],
            ].map(([from, to]) => (
              <div key={from} className="flex justify-between">
                <span>{from}</span>
                <span className="font-mono">{to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

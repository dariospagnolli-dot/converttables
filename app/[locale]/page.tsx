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
              { slug: 'inches-to-cm', label: { en: 'Inches → cm', it: 'Pollici → cm', de: 'Zoll → cm', fr: 'Pouces → cm', es: 'Pulgadas → cm' }[l]! },
              { slug: 'kg-to-pounds', label: { en: 'kg → Pounds', it: 'kg → Libbre', de: 'kg → Pfund', fr: 'kg → Livres', es: 'kg → Libras' }[l]! },
              { slug: 'miles-to-km', label: { en: 'Miles → km', it: 'Miglia → km', de: 'Meilen → km', fr: 'Miles → km', es: 'Millas → km' }[l]! },
              { slug: 'fahrenheit-to-celsius', label: '°F → °C' },
              { slug: 'gallons-to-liters', label: { en: 'Gallons → Liters', it: 'Galloni → Litri', de: 'Gallonen → Liter', fr: 'Gallons → Litres', es: 'Galones → Litros' }[l]! },
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
            <li><Link href={`/${locale}/tables/squares-cubes`} className="text-muted-foreground hover:text-foreground">{{ en: 'Squares & Cubes', it: 'Quadrati e Cubi', de: 'Quadrate & Kuben', fr: 'Carrés et Cubes', es: 'Cuadrados y Cubos' }[l]}</Link></li>
            <li><Link href={`/${locale}/tables/prime-numbers`} className="text-muted-foreground hover:text-foreground">{{ en: 'Prime Numbers', it: 'Numeri Primi', de: 'Primzahlen', fr: 'Nombres Premiers', es: 'Números Primos' }[l]}</Link></li>
            <li><Link href={`/${locale}/tables/powers-of-2`} className="text-muted-foreground hover:text-foreground">{{ en: 'Powers of 2', it: 'Potenze di 2', de: 'Zweierpotenzen', fr: 'Puissances de 2', es: 'Potencias de 2' }[l]}</Link></li>
            <li><Link href={`/${locale}/tables/logarithm`} className="text-muted-foreground hover:text-foreground">{{ en: 'Logarithm Table', it: 'Tabella Logaritmi', de: 'Logarithmentafel', fr: 'Table de Logarithmes', es: 'Tabla de Logaritmos' }[l]}</Link></li>
          </ul>
        </div>

        {/* How Many */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">{{ en: 'How Many...?', it: 'Quanti/e...?', de: 'Wie viele...?', fr: 'Combien de...?', es: '¿Cuántos...?' }[l]}</h2>
          <ul className="space-y-2 text-sm">
            {[
              { slug: 'cm-in-inch', label: { en: 'cm in an inch?', it: 'cm in un pollice?', de: 'cm in einem Zoll?', fr: 'cm dans un pouce ?', es: 'cm en una pulgada?' }[l]! },
              { slug: 'grams-in-pound', label: { en: 'grams in a pound?', it: 'grammi in una libbra?', de: 'Gramm in einem Pfund?', fr: 'grammes dans une livre ?', es: 'gramos en una libra?' }[l]! },
              { slug: 'cups-in-gallon', label: { en: 'cups in a gallon?', it: 'tazze in un gallone?', de: 'Tassen in einer Gallone?', fr: 'tasses dans un gallon ?', es: 'tazas en un galón?' }[l]! },
              { slug: 'feet-in-mile', label: { en: 'feet in a mile?', it: 'piedi in un miglio?', de: 'Fuß in einer Meile?', fr: 'pieds dans un mile ?', es: 'pies en una milla?' }[l]! },
              { slug: 'mb-in-gb', label: { en: 'MB in a GB?', it: 'MB in un GB?', de: 'MB in einem GB?', fr: 'Mo dans un Go ?', es: 'MB en un GB?' }[l]! },
              { slug: 'ounces-in-pound', label: { en: 'ounces in a pound?', it: 'once in una libbra?', de: 'Unzen in einem Pfund?', fr: 'onces dans une livre ?', es: 'onzas en una libra?' }[l]! },
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

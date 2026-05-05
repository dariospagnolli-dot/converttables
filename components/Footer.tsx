import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3">{t(locale, 'cookingConversions')}</h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href={`/${locale}/convert/cups-to-grams`} className="hover:text-foreground">{t(locale, 'cupsToGrams')}</Link></li>
              <li><Link href={`/${locale}/convert/grams-to-cups`} className="hover:text-foreground">{t(locale, 'gramsToCups')}</Link></li>
              <li><Link href={`/${locale}/convert/cups-to-grams/flour`} className="hover:text-foreground">{{ en: 'Flour', it: 'Farina', de: 'Mehl', fr: 'Farine', es: 'Harina' }[locale]}</Link></li>
              <li><Link href={`/${locale}/convert/cups-to-grams/sugar`} className="hover:text-foreground">{{ en: 'Sugar', it: 'Zucchero', de: 'Zucker', fr: 'Sucre', es: 'Azúcar' }[locale]}</Link></li>
              <li><Link href={`/${locale}/convert/cups-to-grams/butter`} className="hover:text-foreground">{{ en: 'Butter', it: 'Burro', de: 'Butter', fr: 'Beurre', es: 'Mantequilla' }[locale]}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t(locale, 'generalConversions')}</h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href={`/${locale}/convert`} className="hover:text-foreground">{t(locale, 'conversions')}</Link></li>
              <li><Link href={`/${locale}/convert/inches-to-cm`} className="hover:text-foreground">Inches → cm</Link></li>
              <li><Link href={`/${locale}/convert/kg-to-pounds`} className="hover:text-foreground">kg → Pounds</Link></li>
              <li><Link href={`/${locale}/convert/fahrenheit-to-celsius`} className="hover:text-foreground">°F → °C</Link></li>
              <li><Link href={`/${locale}/convert/miles-to-km`} className="hover:text-foreground">Miles → km</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t(locale, 'mathTables')}</h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href={`/${locale}/tables/multiplication`} className="hover:text-foreground">{t(locale, 'multiplicationTable')}</Link></li>
              <li><Link href={`/${locale}/tables/roman-numerals`} className="hover:text-foreground">{t(locale, 'romanNumerals')}</Link></li>
              <li><Link href={`/${locale}/tables/prime-numbers`} className="hover:text-foreground">{{ en: 'Prime Numbers', it: 'Numeri Primi', de: 'Primzahlen', fr: 'Nombres Premiers', es: 'Números Primos' }[locale]}</Link></li>
              <li><Link href={`/${locale}/tables/logarithm`} className="hover:text-foreground">{{ en: 'Logarithms', it: 'Logaritmi', de: 'Logarithmen', fr: 'Logarithmes', es: 'Logaritmos' }[locale]}</Link></li>
              <li><Link href={`/${locale}/tables/binary-hex`} className="hover:text-foreground">{t(locale, 'binaryHex')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">ConvertMath</h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-3">
              {t(locale, 'source')}
            </p>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href={`/${locale}/convert/how-many/cm-in-inch`} className="hover:text-foreground">{{ en: 'How Many...?', it: 'Quanti/e...?', de: 'Wie viele...?', fr: 'Combien de...?', es: '¿Cuántos...?' }[locale]}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ConvertMath
        </div>
      </div>
    </footer>
  )
}

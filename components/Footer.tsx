import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3">{t(locale, 'cookingConversions')}</h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href={`/${locale}/convert/cups-to-grams`} className="hover:text-foreground">{t(locale, 'cupsToGrams')}</Link></li>
              <li><Link href={`/${locale}/convert/cups-to-grams/flour`} className="hover:text-foreground">{t(locale, 'cupsToGrams')} — Flour</Link></li>
              <li><Link href={`/${locale}/convert/cups-to-grams/sugar`} className="hover:text-foreground">{t(locale, 'cupsToGrams')} — Sugar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t(locale, 'mathTables')}</h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href={`/${locale}/tables/multiplication`} className="hover:text-foreground">{t(locale, 'multiplicationTable')}</Link></li>
              <li><Link href={`/${locale}/tables/roman-numerals`} className="hover:text-foreground">{t(locale, 'romanNumerals')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">ConvertMath</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {t(locale, 'source')}
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ConvertMath
        </div>
      </div>
    </footer>
  )
}

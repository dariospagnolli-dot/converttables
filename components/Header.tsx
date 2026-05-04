import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { LocaleSwitcher } from './LocaleSwitcher'

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="text-xl font-bold tracking-tight">
          ConvertMath
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href={`/${locale}/convert`} className="text-muted-foreground hover:text-foreground transition-colors">
            {t(locale, 'conversions')}
          </Link>
          <Link href={`/${locale}/convert/cups-to-grams`} className="text-muted-foreground hover:text-foreground transition-colors">
            {t(locale, 'cookingConversions')}
          </Link>
          <Link href={`/${locale}/tables/multiplication`} className="text-muted-foreground hover:text-foreground transition-colors">
            {t(locale, 'mathTables')}
          </Link>
        </nav>
        <LocaleSwitcher currentLocale={locale} />
      </div>
    </header>
  )
}

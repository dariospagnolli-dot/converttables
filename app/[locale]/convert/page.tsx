import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import {
  getAllCategories, getPairsByCategory, getUnit, CATEGORY_NAMES, formatResult
} from '@/lib/conversions/general'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'conversions'),
    description: {
      en: 'Free online unit converter: length, weight, volume, temperature, energy, speed and more.',
      it: 'Convertitore di unità online gratuito: lunghezza, peso, volume, temperatura, energia, velocità e altro.',
      de: 'Kostenloser Online-Einheitenumrechner: Länge, Gewicht, Volumen, Temperatur, Energie, Geschwindigkeit und mehr.',
      fr: 'Convertisseur d\'unités en ligne gratuit : longueur, poids, volume, température, énergie, vitesse et plus.',
      es: 'Convertidor de unidades en línea gratuito: longitud, peso, volumen, temperatura, energía, velocidad y más.',
    }[l],
  }
}

export default async function ConvertIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{t(l, 'conversions')}</h1>
      <p className="text-muted-foreground mb-10">
        {{ en: 'Select a conversion category.', it: 'Seleziona una categoria di conversione.', de: 'Wählen Sie eine Umrechnungskategorie.', fr: 'Sélectionnez une catégorie de conversion.', es: 'Seleccione una categoría de conversión.' }[l]}
      </p>

      {categories.map(cat => {
        const pairs = getPairsByCategory(cat)
        return (
          <section key={cat} className="mb-10">
            <h2 className="text-xl font-semibold mb-4">{CATEGORY_NAMES[cat][l]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pairs.map(pair => {
                const from = getUnit(pair.from)!
                const to = getUnit(pair.to)!
                return (
                  <Link
                    key={pair.slug}
                    href={`/${locale}/convert/${pair.slug}`}
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                  >
                    <span className="font-medium text-sm">{from.names[l]} → {to.names[l]}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      1 {from.symbol} = {formatResult(pair.convert(1))} {to.symbol}
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* Cooking conversions link */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'cookingConversions')}</h2>
        <Link
          href={`/${locale}/convert/cups-to-grams`}
          className="inline-flex rounded-lg border p-3 hover:bg-accent transition-colors"
        >
          {t(l, 'cupsToGrams')} &rarr;
        </Link>
      </section>
    </div>
  )
}

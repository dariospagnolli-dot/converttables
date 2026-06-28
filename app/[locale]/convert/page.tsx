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
      <h1 className="text-3xl font-bold mb-4">{t(l, 'conversions')}</h1>

      <div className="space-y-4 text-zinc-600 leading-relaxed mb-10 max-w-3xl">
        <p>
          {{ en: 'Convert between metric and imperial units instantly — no sign-up, no ads, no approximations. Our unit converter covers the most common measurement categories used in science, engineering, everyday life, and international travel: length, weight, volume, temperature, area, speed, pressure, energy, and more.',
             it: 'Converti tra unità metriche e imperiali istantaneamente — senza registrazione, senza pubblicità, senza approssimazioni. Il nostro convertitore di unità copre le categorie di misura più utilizzate in scienze, ingegneria, vita quotidiana e viaggi internazionali: lunghezza, peso, volume, temperatura, area, velocità, pressione, energia e altro.',
             de: 'Rechnen Sie sofort zwischen metrischen und imperialen Einheiten um — ohne Anmeldung, ohne Werbung, ohne Näherungswerte. Unser Einheitenumrechner deckt die gängigsten Messkategorien ab, die in Wissenschaft, Technik, Alltag und auf Reisen verwendet werden: Länge, Gewicht, Volumen, Temperatur, Fläche, Geschwindigkeit, Druck, Energie und mehr.',
             fr: 'Convertissez instantanément entre unités métriques et impériales — sans inscription, sans publicité, sans approximations. Notre convertisseur d\'unités couvre les catégories de mesure les plus courantes en science, ingénierie, vie quotidienne et voyages internationaux : longueur, poids, volume, température, surface, vitesse, pression, énergie et plus.',
             es: 'Convierte entre unidades métricas e imperiales al instante — sin registro, sin anuncios, sin aproximaciones. Nuestro convertidor de unidades cubre las categorías de medida más comunes en ciencia, ingeniería, vida cotidiana y viajes internacionales: longitud, peso, volumen, temperatura, área, velocidad, presión, energía y más.',
          }[l]}
        </p>
        <p>
          {{ en: 'All conversion factors are based on internationally recognized standards: the International System of Units (SI) maintained by the BIPM, and the international yard and pound agreement of 1959 for US customary and imperial units. Select a category below to browse all available conversions.',
             it: 'Tutti i fattori di conversione si basano su standard internazionalmente riconosciuti: il Sistema Internazionale di Unità (SI) mantenuto dal BIPM e l\'accordo internazionale su iarda e libbra del 1959 per le unità USA e imperiali. Seleziona una categoria qui sotto per sfogliare tutte le conversioni disponibili.',
             de: 'Alle Umrechnungsfaktoren basieren auf international anerkannten Standards: dem Internationalen Einheitensystem (SI) des BIPM und dem internationalen Yard-und-Pfund-Abkommen von 1959 für US-amerikanische und imperiale Einheiten. Wählen Sie unten eine Kategorie, um alle verfügbaren Umrechnungen anzuzeigen.',
             fr: 'Tous les facteurs de conversion sont basés sur des normes internationalement reconnues : le Système international d\'unités (SI) du BIPM et l\'accord international sur le yard et la livre de 1959 pour les unités américaines et impériales. Sélectionnez une catégorie ci-dessous pour parcourir toutes les conversions disponibles.',
             es: 'Todos los factores de conversión se basan en estándares reconocidos internacionalmente: el Sistema Internacional de Unidades (SI) del BIPM y el acuerdo internacional sobre la yarda y la libra de 1959 para las unidades estadounidenses e imperiales. Selecciona una categoría abajo para ver todas las conversiones disponibles.',
          }[l]}
        </p>
      </div>

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

      {/* Cooking conversions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'cookingConversions')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { key: 'cupsToGrams',       slug: 'cups-to-grams' },
            { key: 'gramsToCups',       slug: 'grams-to-cups' },
            { key: 'tablespoonsToGrams',slug: 'tablespoons-to-grams' },
            { key: 'teaspoonsToGrams',  slug: 'teaspoons-to-grams' },
            { key: 'ouncesToGrams',     slug: 'oz-to-grams' },
            { key: 'cupsToMl',          slug: 'cups-to-ml' },
            { key: 'cupsToLiters',      slug: 'cups-to-liters' },
            { key: 'pintsToCups',       slug: 'pints-to-cups' },
            { key: 'quartsToCups',      slug: 'quarts-to-cups' },
            { key: 'stickOfButter',     slug: 'stick-of-butter' },
            { key: 'ovenTemperature',   slug: 'oven-temperature' },
            { key: 'fractionToDecimal', slug: 'fraction-to-decimal' },
          ].map(({ key, slug }) => (
            <Link
              key={slug}
              href={`/${locale}/convert/${slug}`}
              className="rounded-lg border p-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              {t(l, key as Parameters<typeof t>[1])}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

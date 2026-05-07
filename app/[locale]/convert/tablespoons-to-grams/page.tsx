import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { tablespoonToGrams } from '@/lib/conversions/cooking'

const desc: Record<Locale, string> = {
  en: 'Convert tablespoons to grams for any ingredient. Quick reference chart for cooking and baking.',
  it: 'Converti cucchiai in grammi per ogni ingrediente. Tabella di riferimento rapido per cucinare.',
  de: 'Esslöffel in Gramm umrechnen für jede Zutat. Schnellübersicht fürs Kochen und Backen.',
  fr: 'Convertir des cuillères à soupe en grammes pour tout ingrédient. Tableau de référence rapide.',
  es: 'Convierte cucharadas a gramos para cualquier ingrediente. Tabla de referencia rápida.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: t(l, 'tablespoonsToGrams'), description: desc[l] }
}

export default async function TablespoonsToGramsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const categories = [...new Set(INGREDIENTS.map(i => i.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'tablespoonsToGrams')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{t(l, 'tablespoonsToGrams')}</h1>
      <p className="text-muted-foreground mb-4">{desc[l]}</p>

      <div className="prose prose-sm max-w-none text-muted-foreground mb-8 space-y-3">
        <p>
          {{
            en: 'A US tablespoon holds exactly 14.787ml of volume. But the weight in grams varies by ingredient: 1 tablespoon of water weighs 15g, while 1 tablespoon of honey weighs around 21g, and 1 tablespoon of flour weighs only about 8g. This is why tablespoon-to-gram conversion always needs to specify the ingredient.',
            it: 'Un cucchiaio US contiene esattamente 14,787ml di volume. Ma il peso in grammi varia in base all\'ingrediente: 1 cucchiaio d\'acqua pesa 15g, 1 cucchiaio di miele circa 21g e 1 cucchiaio di farina solo circa 8g. Per questo la conversione cucchiai-grammi richiede sempre di specificare l\'ingrediente.',
            de: 'Ein US-Esslöffel fasst genau 14,787ml. Das Gewicht in Gramm variiert jedoch je nach Zutat: 1 Esslöffel Wasser wiegt 15g, 1 Esslöffel Honig etwa 21g und 1 Esslöffel Mehl nur rund 8g. Deshalb muss bei der Umrechnung von Esslöffeln in Gramm immer die Zutat angegeben werden.',
            fr: 'Une cuillère à soupe américaine contient exactement 14,787ml. Mais le poids en grammes varie selon l\'ingrédient : 1 cuillère à soupe d\'eau pèse 15g, 1 cuillère de miel environ 21g et 1 cuillère de farine seulement 8g. C\'est pourquoi la conversion cuillères-grammes doit toujours préciser l\'ingrédient.',
            es: 'Una cucharada estadounidense contiene exactamente 14,787ml de volumen. Pero el peso en gramos varía según el ingrediente: 1 cucharada de agua pesa 15g, 1 cucharada de miel unos 21g y 1 cucharada de harina solo 8g. Por eso la conversión cucharadas-gramos siempre debe especificar el ingrediente.',
          }[l]}
        </p>
        <p>
          {{
            en: 'Tablespoon measurements are most common for small quantities: spices, leavening agents, oils, and syrups. For these, the tablespoon is precise enough for everyday cooking — though for baking, a scale remains the gold standard.',
            it: 'Le misure in cucchiai sono più comuni per piccole quantità: spezie, agenti lievitanti, oli e sciroppi. Per questi ingredienti, il cucchiaio è sufficientemente preciso per la cucina quotidiana — anche se per la pasticceria la bilancia rimane lo strumento più affidabile.',
            de: 'Löffelmaße werden am häufigsten für kleine Mengen verwendet: Gewürze, Triebmittel, Öle und Sirupe. Für diese Zutaten ist der Esslöffel im Alltag präzise genug — beim Backen bleibt die Waage jedoch der Goldstandard.',
            fr: 'Les mesures en cuillères sont surtout utilisées pour les petites quantités : épices, levures, huiles et sirops. Pour ces ingrédients, la cuillère est suffisamment précise pour la cuisine quotidienne — même si pour la pâtisserie, la balance reste l\'outil de référence.',
            es: 'Las medidas en cucharadas son más comunes para pequeñas cantidades: especias, levaduras, aceites y jarabes. Para estos ingredientes, la cucharada es suficientemente precisa en la cocina diaria — aunque para repostería, una báscula sigue siendo lo más fiable.',
          }[l]}
        </p>
      </div>

      {categories.map(cat => {
        const items = INGREDIENTS.filter(i => i.category === cat)
        return (
          <section key={cat} className="mb-8">
            <h2 className="text-lg font-semibold mb-3 capitalize">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(ing => (
                <Link
                  key={ing.slug}
                  href={`/${locale}/convert/tablespoons-to-grams/${ing.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <span className="font-medium">{ing.names[l]}</span>
                  <span className="text-sm text-muted-foreground font-mono">
                    1 tbsp = {tablespoonToGrams(1, ing)}g
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

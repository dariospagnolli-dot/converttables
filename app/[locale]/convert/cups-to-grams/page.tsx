import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { cupsToGrams } from '@/lib/conversions/cooking'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'cupsToGrams'),
    description: {
      en: 'Convert cups to grams for any ingredient. Accurate conversion chart with US and metric cup sizes.',
      it: 'Converti tazze in grammi per ogni ingrediente. Tabella di conversione precisa con tazza US e metrica.',
      de: 'Tassen in Gramm umrechnen für jede Zutat. Genaue Umrechnungstabelle mit US- und metrischen Tassen.',
      fr: 'Convertir tasses en grammes pour tout ingrédient. Tableau de conversion précis avec tasses US et métriques.',
      es: 'Convierte tazas a gramos para cualquier ingrediente. Tabla de conversión precisa con tazas US y métricas.',
    }[l],
  }
}

export default async function CupsToGramsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const categories = [...new Set(INGREDIENTS.map(i => i.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{t(l, 'cupsToGrams')}</h1>

      <div className="prose prose-sm max-w-none text-muted-foreground mb-8 space-y-3">
        <p>
          {{
            en: 'Cups measure volume, grams measure weight — and that difference matters in the kitchen. A cup of all-purpose flour weighs about 125g, while a cup of granulated sugar weighs around 200g. The conversion depends entirely on how dense the ingredient is.',
            it: 'Le tazze misurano il volume, i grammi misurano il peso — e questa differenza conta in cucina. Una tazza di farina 00 pesa circa 125g, mentre una tazza di zucchero semolato pesa circa 200g. La conversione dipende interamente dalla densità dell\'ingrediente.',
            de: 'Tassen messen Volumen, Gramm messen Gewicht — und dieser Unterschied zählt in der Küche. Eine Tasse Weizenmehl wiegt etwa 125g, eine Tasse Kristallzucker hingegen rund 200g. Die Umrechnung hängt ganz von der Dichte der Zutat ab.',
            fr: 'Les tasses mesurent le volume, les grammes mesurent le poids — cette différence compte en cuisine. Une tasse de farine tout usage pèse environ 125g, tandis qu\'une tasse de sucre en poudre pèse environ 200g. La conversion dépend entièrement de la densité de l\'ingrédient.',
            es: 'Las tazas miden volumen, los gramos miden peso — y esa diferencia importa en la cocina. Una taza de harina todo uso pesa unos 125g, mientras que una taza de azúcar granulado pesa alrededor de 200g. La conversión depende completamente de la densidad del ingrediente.',
          }[l]}
        </p>
        <p>
          {{
            en: 'For baking especially, weighing ingredients with a kitchen scale gives far more consistent results than using cups. If you\'re following an American recipe without a scale, use the charts below — and remember that the way you fill the cup (sifted vs packed vs scooped) can shift the weight by up to 20%.',
            it: 'Per la pasticceria in particolare, pesare gli ingredienti con una bilancia da cucina garantisce risultati molto più precisi rispetto all\'uso delle tazze. Se segui una ricetta americana senza bilancia, usa le tabelle qui sotto — e ricorda che il modo in cui riempi la tazza (setacciata, compattata o raccolta con il cucchiaio) può influenzare il peso fino al 20%.',
            de: 'Gerade beim Backen liefert das Abwiegen der Zutaten mit einer Küchenwaage deutlich gleichmäßigere Ergebnisse als die Verwendung von Tassen. Wenn Sie einem amerikanischen Rezept ohne Waage folgen, nutzen Sie die Tabellen unten — und beachten Sie: Je nachdem wie Sie die Tasse füllen (gesiebt, gepackt oder geschöpft), kann das Gewicht um bis zu 20% schwanken.',
            fr: 'Pour la pâtisserie notamment, peser les ingrédients avec une balance de cuisine donne des résultats beaucoup plus réguliers qu\'avec des tasses. Si vous suivez une recette américaine sans balance, utilisez les tableaux ci-dessous — et gardez à l\'esprit que la façon de remplir la tasse (tamisée, tassée ou prélevée à la cuillère) peut faire varier le poids jusqu\'à 20%.',
            es: 'Para repostería especialmente, pesar los ingredientes con una báscula de cocina da resultados mucho más consistentes que usar tazas. Si sigues una receta americana sin báscula, usa las tablas de abajo — y recuerda que la forma de llenar la taza (tamizada, compactada o con cuchara) puede variar el peso hasta un 20%.',
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
                  href={`/${locale}/convert/cups-to-grams/${ing.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <span className="font-medium">{ing.names[l]}</span>
                  <span className="text-sm text-muted-foreground font-mono">
                    1 cup = {cupsToGrams(1, ing)}g
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

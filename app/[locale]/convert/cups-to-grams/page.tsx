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

      {/* How to Convert Cups to Grams */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          {{
            en: 'How to Convert Cups to Grams',
            it: 'Come convertire le tazze in grammi',
            de: 'Wie man Tassen in Gramm umrechnet',
            fr: 'Comment convertir les tasses en grammes',
            es: 'Cómo convertir tazas a gramos',
          }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'The formula is straightforward: multiply the cup volume by the ingredient\'s density. A standard US cup holds 236.59 ml, so the calculation is: grams = 236.59 ml × density (g/ml). For example, 1 cup of all-purpose flour has a density of approximately 0.529 g/ml, giving 236.59 × 0.529 ≈ 125 g. For water, with a density of 1 g/ml, 1 cup equals 236.59 g (rounded to 237 g in most charts).',
            it: 'La formula è semplice: moltiplica il volume della tazza per la densità dell\'ingrediente. Una tazza US standard contiene 236,59 ml, quindi il calcolo è: grammi = 236,59 ml × densità (g/ml). Ad esempio, 1 tazza di farina 00 ha una densità di circa 0,529 g/ml, risultando in 236,59 × 0,529 ≈ 125 g. Per l\'acqua, con densità di 1 g/ml, 1 tazza equivale a 236,59 g (arrotondato a 237 g nelle tabelle).',
            de: 'Die Formel ist einfach: Multipliziere das Tassenvolumen mit der Dichte der Zutat. Eine Standard-US-Tasse fasst 236,59 ml, also lautet die Rechnung: Gramm = 236,59 ml × Dichte (g/ml). Beispielsweise hat 1 Tasse Weizenmehl eine Dichte von etwa 0,529 g/ml, was 236,59 × 0,529 ≈ 125 g ergibt. Bei Wasser mit einer Dichte von 1 g/ml entspricht 1 Tasse 236,59 g (in den meisten Tabellen auf 237 g gerundet).',
            fr: 'La formule est simple : multiplier le volume de la tasse par la densité de l\'ingrédient. Une tasse US standard contient 236,59 ml, donc le calcul est : grammes = 236,59 ml × densité (g/ml). Par exemple, 1 tasse de farine tout usage a une densité d\'environ 0,529 g/ml, ce qui donne 236,59 × 0,529 ≈ 125 g. Pour l\'eau, avec une densité de 1 g/ml, 1 tasse équivaut à 236,59 g (arrondi à 237 g dans la plupart des tableaux).',
            es: 'La fórmula es sencilla: multiplica el volumen de la taza por la densidad del ingrediente. Una taza US estándar contiene 236,59 ml, por lo que el cálculo es: gramos = 236,59 ml × densidad (g/ml). Por ejemplo, 1 taza de harina todo uso tiene una densidad de aproximadamente 0,529 g/ml, dando 236,59 × 0,529 ≈ 125 g. Para el agua, con densidad de 1 g/ml, 1 taza equivale a 236,59 g (redondeado a 237 g en la mayoría de tablas).',
          }[l]}
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'There is no single universal formula that works across all ingredients because density varies enormously. Water has a density of 1 g/ml, honey is 1.42 g/ml, butter is 0.911 g/ml, and all-purpose flour is only 0.529 g/ml. This means 1 cup of honey (340 g) weighs nearly three times as much as 1 cup of flour (125 g). Always use ingredient-specific tables — like those on this page — rather than a single conversion factor.',
            it: 'Non esiste una formula universale valida per tutti gli ingredienti perché la densità varia enormemente. L\'acqua ha una densità di 1 g/ml, il miele è 1,42 g/ml, il burro è 0,911 g/ml e la farina 00 è solo 0,529 g/ml. Questo significa che 1 tazza di miele (340 g) pesa quasi tre volte di più di 1 tazza di farina (125 g). Usa sempre le tabelle specifiche per ingrediente — come quelle presenti in questa pagina — piuttosto che un unico fattore di conversione.',
            de: 'Es gibt keine universelle Formel, die für alle Zutaten gilt, da die Dichte enorm variiert. Wasser hat eine Dichte von 1 g/ml, Honig 1,42 g/ml, Butter 0,911 g/ml und Weizenmehl nur 0,529 g/ml. Das bedeutet, dass 1 Tasse Honig (340 g) fast dreimal so viel wiegt wie 1 Tasse Mehl (125 g). Verwende immer zutatspezifische Tabellen — wie die auf dieser Seite — statt eines einzigen Umrechnungsfaktors.',
            fr: 'Il n\'existe pas de formule universelle applicable à tous les ingrédients, car la densité varie considérablement. L\'eau a une densité de 1 g/ml, le miel de 1,42 g/ml, le beurre de 0,911 g/ml et la farine tout usage seulement 0,529 g/ml. Cela signifie qu\'1 tasse de miel (340 g) pèse presque trois fois plus qu\'1 tasse de farine (125 g). Utilisez toujours les tableaux spécifiques à chaque ingrédient — comme ceux sur cette page — plutôt qu\'un seul facteur de conversion.',
            es: 'No existe una fórmula universal que funcione para todos los ingredientes porque la densidad varía enormemente. El agua tiene una densidad de 1 g/ml, la miel es 1,42 g/ml, la mantequilla es 0,911 g/ml y la harina todo uso solo 0,529 g/ml. Esto significa que 1 taza de miel (340 g) pesa casi tres veces más que 1 taza de harina (125 g). Usa siempre las tablas específicas por ingrediente — como las de esta página — en lugar de un único factor de conversión.',
          }[l]}
        </p>
      </section>

      {/* US Cup vs Metric Cup vs Imperial Cup */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          {{
            en: 'US Cup vs Metric Cup vs Imperial Cup',
            it: 'Tazza US vs Tazza Metrica vs Tazza Imperiale',
            de: 'US-Tasse vs. Metrische Tasse vs. Imperiale Tasse',
            fr: 'Tasse US vs Tasse Métrique vs Tasse Impériale',
            es: 'Taza US vs Taza Métrica vs Taza Imperial',
          }[l]}
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-zinc-100">
                <th className="text-left px-4 py-2 font-semibold text-zinc-700 border border-zinc-200">
                  {{
                    en: 'Standard',
                    it: 'Standard',
                    de: 'Standard',
                    fr: 'Standard',
                    es: 'Estándar',
                  }[l]}
                </th>
                <th className="text-left px-4 py-2 font-semibold text-zinc-700 border border-zinc-200">
                  {{
                    en: 'Volume',
                    it: 'Volume',
                    de: 'Volumen',
                    fr: 'Volume',
                    es: 'Volumen',
                  }[l]}
                </th>
                <th className="text-left px-4 py-2 font-semibold text-zinc-700 border border-zinc-200">
                  {{
                    en: 'Used in',
                    it: 'Usata in',
                    de: 'Verwendet in',
                    fr: 'Utilisée en',
                    es: 'Usada en',
                  }[l]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-zinc-200 font-medium text-zinc-800">US Cup</td>
                <td className="px-4 py-2 border border-zinc-200 font-mono text-zinc-700">236.59 ml</td>
                <td className="px-4 py-2 border border-zinc-200 text-zinc-600">
                  {{
                    en: 'USA — standard in most English-language recipes',
                    it: 'USA — standard nella maggior parte delle ricette in inglese',
                    de: 'USA — Standard in den meisten englischsprachigen Rezepten',
                    fr: 'USA — standard dans la plupart des recettes en anglais',
                    es: 'EE.UU. — estándar en la mayoría de recetas en inglés',
                  }[l]}
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="px-4 py-2 border border-zinc-200 font-medium text-zinc-800">Metric Cup</td>
                <td className="px-4 py-2 border border-zinc-200 font-mono text-zinc-700">250 ml</td>
                <td className="px-4 py-2 border border-zinc-200 text-zinc-600">
                  {{
                    en: 'Australia, Canada, New Zealand',
                    it: 'Australia, Canada, Nuova Zelanda',
                    de: 'Australien, Kanada, Neuseeland',
                    fr: 'Australie, Canada, Nouvelle-Zélande',
                    es: 'Australia, Canadá, Nueva Zelanda',
                  }[l]}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-zinc-200 font-medium text-zinc-800">Imperial Cup</td>
                <td className="px-4 py-2 border border-zinc-200 font-mono text-zinc-700">284.13 ml</td>
                <td className="px-4 py-2 border border-zinc-200 text-zinc-600">
                  {{
                    en: 'Historic UK — rarely used today',
                    it: 'UK storico — raramente usata oggi',
                    de: 'Historisches UK — heute kaum noch verwendet',
                    fr: 'Royaume-Uni historique — rarement utilisée aujourd\'hui',
                    es: 'Reino Unido histórico — raramente usada hoy',
                  }[l]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'Knowing which cup standard a recipe uses matters more than most people realise. The difference between a US cup (236.59 ml) and an Imperial cup (284.13 ml) is nearly 50 ml — close to a quarter of a cup. When baking bread or cakes, that gap can throw off the ratio of flour to liquid and produce a noticeably different result. If the recipe comes from Australia or New Zealand, it likely uses the 250 ml metric cup. When in doubt, check the source of the recipe.',
            it: 'Sapere quale standard di tazza usa una ricetta è più importante di quanto si pensi. La differenza tra una tazza US (236,59 ml) e una tazza imperiale (284,13 ml) è quasi 50 ml — quasi un quarto di tazza. Quando si cuociono pane o torte, questa differenza può alterare il rapporto farina-liquido e produrre un risultato notevolmente diverso. Se la ricetta proviene dall\'Australia o dalla Nuova Zelanda, probabilmente usa la tazza metrica da 250 ml. In caso di dubbio, verifica la fonte della ricetta.',
            de: 'Es ist wichtiger als die meisten Menschen denken, zu wissen, welchen Tassenstandard ein Rezept verwendet. Der Unterschied zwischen einer US-Tasse (236,59 ml) und einer Imperial-Tasse (284,13 ml) beträgt fast 50 ml — fast ein Viertel einer Tasse. Beim Backen von Brot oder Kuchen kann diese Differenz das Verhältnis von Mehl zu Flüssigkeit verschieben und ein merklich anderes Ergebnis liefern. Kommt das Rezept aus Australien oder Neuseeland, verwendet es wahrscheinlich die metrische Tasse mit 250 ml. Im Zweifel: Quelle des Rezepts prüfen.',
            fr: 'Savoir quel standard de tasse utilise une recette est plus important qu\'on ne le croit. La différence entre une tasse US (236,59 ml) et une tasse impériale (284,13 ml) est de près de 50 ml — soit presque un quart de tasse. En pâtisserie, cet écart peut déséquilibrer le rapport farine/liquide et produire un résultat sensiblement différent. Si la recette vient d\'Australie ou de Nouvelle-Zélande, elle utilise probablement la tasse métrique de 250 ml. En cas de doute, vérifiez la source de la recette.',
            es: 'Saber qué estándar de taza usa una receta importa más de lo que la mayoría cree. La diferencia entre una taza US (236,59 ml) y una taza imperial (284,13 ml) es casi 50 ml — cercana a un cuarto de taza. Al hornear pan o bizcochos, esa diferencia puede alterar el ratio harina-líquido y producir un resultado notablemente distinto. Si la receta viene de Australia o Nueva Zelanda, probablemente usa la taza métrica de 250 ml. Ante la duda, comprueba la fuente de la receta.',
          }[l]}
        </p>
      </section>

      {/* Common Cups to Grams Conversions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          {{
            en: 'Common Cups to Grams Conversions',
            it: 'Conversioni Comuni da Tazze a Grammi',
            de: 'Häufige Tassen-zu-Gramm-Umrechnungen',
            fr: 'Conversions Courantes Tasses en Grammes',
            es: 'Conversiones Comunes de Tazas a Gramos',
          }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'The table below lists the most commonly searched cup-to-gram conversions for baking and cooking. All values are for 1 US cup (236.59 ml) and represent the typical weight for each ingredient measured at room temperature using the spoon-and-level method.',
            it: 'La tabella seguente riporta le conversioni tazze-grammi più cercate per la cottura e la pasticceria. Tutti i valori si riferiscono a 1 tazza US (236,59 ml) e rappresentano il peso tipico per ogni ingrediente misurato a temperatura ambiente con il metodo cucchiaio-e-livellamento.',
            de: 'Die folgende Tabelle listet die am häufigsten gesuchten Tassen-zu-Gramm-Umrechnungen für Backen und Kochen auf. Alle Werte gelten für 1 US-Tasse (236,59 ml) und entsprechen dem typischen Gewicht jeder Zutat, gemessen bei Raumtemperatur nach der Löffel-und-Abstreif-Methode.',
            fr: 'Le tableau ci-dessous liste les conversions tasses-grammes les plus recherchées pour la pâtisserie et la cuisine. Toutes les valeurs correspondent à 1 tasse US (236,59 ml) et représentent le poids typique de chaque ingrédient mesuré à température ambiante selon la méthode cuillère-et-niveau.',
            es: 'La tabla a continuación lista las conversiones tazas-gramos más buscadas para repostería y cocina. Todos los valores corresponden a 1 taza US (236,59 ml) y representan el peso típico de cada ingrediente medido a temperatura ambiente con el método cuchara-y-nivel.',
          }[l]}
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-zinc-100">
                <th className="text-left px-4 py-2 font-semibold text-zinc-700 border border-zinc-200">
                  {{
                    en: 'Ingredient',
                    it: 'Ingrediente',
                    de: 'Zutat',
                    fr: 'Ingrédient',
                    es: 'Ingrediente',
                  }[l]}
                </th>
                <th className="text-left px-4 py-2 font-semibold text-zinc-700 border border-zinc-200">
                  {{
                    en: '1 US Cup',
                    it: '1 Tazza US',
                    de: '1 US-Tasse',
                    fr: '1 Tasse US',
                    es: '1 Taza US',
                  }[l]}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { en: 'All-purpose flour', it: 'Farina 00', de: 'Weizenmehl', fr: 'Farine tout usage', es: 'Harina todo uso', g: 125 },
                { en: 'Granulated sugar', it: 'Zucchero semolato', de: 'Kristallzucker', fr: 'Sucre en poudre', es: 'Azúcar granulado', g: 200 },
                { en: 'Brown sugar (packed)', it: 'Zucchero di canna (compattato)', de: 'Brauner Zucker (gepresst)', fr: 'Cassonade (tassée)', es: 'Azúcar moreno (compactado)', g: 220 },
                { en: 'Butter', it: 'Burro', de: 'Butter', fr: 'Beurre', es: 'Mantequilla', g: 227 },
                { en: 'Honey', it: 'Miele', de: 'Honig', fr: 'Miel', es: 'Miel', g: 340 },
                { en: 'Milk', it: 'Latte', de: 'Milch', fr: 'Lait', es: 'Leche', g: 244 },
                { en: 'Water', it: 'Acqua', de: 'Wasser', fr: 'Eau', es: 'Agua', g: 237 },
                { en: 'Rice (uncooked)', it: 'Riso (crudo)', de: 'Reis (ungekocht)', fr: 'Riz (cru)', es: 'Arroz (crudo)', g: 185 },
                { en: 'Rolled oats', it: 'Fiocchi d\'avena', de: 'Haferflocken', fr: 'Flocons d\'avoine', es: 'Copos de avena', g: 90 },
                { en: 'Cocoa powder', it: 'Cacao in polvere', de: 'Kakaopulver', fr: 'Cacao en poudre', es: 'Cacao en polvo', g: 85 },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-zinc-50' : ''}>
                  <td className="px-4 py-2 border border-zinc-200 text-zinc-800">{row[l] as string}</td>
                  <td className="px-4 py-2 border border-zinc-200 font-mono text-zinc-700">{row.g} g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'Note: all values above are for a US cup (236.59 ml). If your recipe uses an Australian or Canadian metric cup (250 ml), multiply the gram values by 1.056 to get the correct weight.',
            it: 'Nota: tutti i valori sopra si riferiscono alla tazza US (236,59 ml). Se la tua ricetta usa una tazza metrica australiana o canadese (250 ml), moltiplica i valori in grammi per 1,056 per ottenere il peso corretto.',
            de: 'Hinweis: Alle obigen Werte gelten für eine US-Tasse (236,59 ml). Wenn das Rezept eine australische oder kanadische metrische Tasse (250 ml) verwendet, multipliziere die Grammwerte mit 1,056, um das korrekte Gewicht zu erhalten.',
            fr: 'Remarque : toutes les valeurs ci-dessus sont pour une tasse US (236,59 ml). Si votre recette utilise une tasse métrique australienne ou canadienne (250 ml), multipliez les valeurs en grammes par 1,056 pour obtenir le poids correct.',
            es: 'Nota: todos los valores anteriores son para una taza US (236,59 ml). Si tu receta usa una taza métrica australiana o canadiense (250 ml), multiplica los valores en gramos por 1,056 para obtener el peso correcto.',
          }[l]}
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          {{
            en: 'Frequently Asked Questions',
            it: 'Domande Frequenti',
            de: 'Häufig gestellte Fragen',
            fr: 'Questions Fréquemment Posées',
            es: 'Preguntas Frecuentes',
          }[l]}
        </h2>
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'How many grams is 1 cup of flour?',
                it: 'Quanti grammi sono 1 tazza di farina?',
                de: 'Wie viele Gramm hat 1 Tasse Mehl?',
                fr: 'Combien de grammes dans 1 tasse de farine ?',
                es: '¿Cuántos gramos son 1 taza de harina?',
              }[l]}
            </dt>
            <dd>
              <p className="text-zinc-600 leading-relaxed">
                {{
                  en: '1 US cup of all-purpose flour equals approximately 125 grams. This can vary slightly depending on how you measure — scooping directly from the bag can result in up to 150 g due to compaction, while spooning flour into the cup gives closer to 120 g. For baking precision, a kitchen scale is always recommended.',
                  it: '1 tazza US di farina 00 equivale a circa 125 grammi. Questo può variare leggermente a seconda di come si misura — raccogliere direttamente dal sacchetto può dare fino a 150 g per effetto della compattazione, mentre versare la farina nel cucchiaio nella tazza dà un risultato più vicino a 120 g. Per la pasticceria di precisione, si raccomanda sempre una bilancia da cucina.',
                  de: '1 US-Tasse Weizenmehl entspricht etwa 125 Gramm. Dies kann je nach Messmethode leicht variieren — direktes Schöpfen aus dem Beutel kann durch Verdichtung bis zu 150 g ergeben, während das Löffeln in die Tasse eher 120 g liefert. Für präzises Backen wird immer eine Küchenwaage empfohlen.',
                  fr: '1 tasse US de farine tout usage équivaut à environ 125 grammes. Cela peut varier légèrement selon la façon de mesurer — prélever directement dans le sac peut donner jusqu\'à 150 g en raison du tassement, tandis que verser la farine à la cuillère dans la tasse donne plutôt 120 g. Pour une pâtisserie de précision, une balance de cuisine est toujours recommandée.',
                  es: '1 taza US de harina todo uso equivale a aproximadamente 125 gramos. Esto puede variar ligeramente según cómo se mida — coger directamente de la bolsa puede resultar en hasta 150 g por compactación, mientras que verter la harina con cuchara en la taza da más cercano a 120 g. Para repostería de precisión, siempre se recomienda una báscula de cocina.',
                }[l]}
              </p>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'How many grams is 1 cup of sugar?',
                it: 'Quanti grammi sono 1 tazza di zucchero?',
                de: 'Wie viele Gramm hat 1 Tasse Zucker?',
                fr: 'Combien de grammes dans 1 tasse de sucre ?',
                es: '¿Cuántos gramos son 1 taza de azúcar?',
              }[l]}
            </dt>
            <dd>
              <p className="text-zinc-600 leading-relaxed">
                {{
                  en: '1 US cup of granulated white sugar equals 200 grams. Brown sugar packed into the cup weighs around 220 g, while powdered (icing) sugar is lighter at about 120 g per cup.',
                  it: '1 tazza US di zucchero bianco semolato equivale a 200 grammi. Lo zucchero di canna compattato nella tazza pesa circa 220 g, mentre lo zucchero a velo è più leggero: circa 120 g per tazza.',
                  de: '1 US-Tasse weißer Kristallzucker entspricht 200 Gramm. Brauner Zucker, in die Tasse gepresst, wiegt etwa 220 g, während Puderzucker leichter ist und etwa 120 g pro Tasse ergibt.',
                  fr: '1 tasse US de sucre blanc en poudre équivaut à 200 grammes. La cassonade tassée dans la tasse pèse environ 220 g, tandis que le sucre glace est plus léger, environ 120 g par tasse.',
                  es: '1 taza US de azúcar blanco granulado equivale a 200 gramos. El azúcar moreno compactado en la taza pesa alrededor de 220 g, mientras que el azúcar glass es más ligero, unos 120 g por taza.',
                }[l]}
              </p>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'Why are cups not accurate for baking?',
                it: 'Perché le tazze non sono precise per la pasticceria?',
                de: 'Warum sind Tassen beim Backen ungenau?',
                fr: 'Pourquoi les tasses ne sont-elles pas précises en pâtisserie ?',
                es: '¿Por qué las tazas no son precisas para repostería?',
              }[l]}
            </dt>
            <dd>
              <p className="text-zinc-600 leading-relaxed">
                {{
                  en: 'Cups measure volume, not weight. The weight of an ingredient inside a cup depends on its density, how it was filled (scooped, spooned, sifted), and even humidity. Professional bakers and pastry chefs worldwide use grams because weight measurements are consistent regardless of technique.',
                  it: 'Le tazze misurano il volume, non il peso. Il peso di un ingrediente nella tazza dipende dalla sua densità, da come è stata riempita (raccolta con il cucchiaio, setacciata, compattata) e persino dall\'umidità. I fornai e i pasticceri professionisti di tutto il mondo usano i grammi perché le misurazioni in peso sono costanti indipendentemente dalla tecnica.',
                  de: 'Tassen messen Volumen, nicht Gewicht. Das Gewicht einer Zutat in der Tasse hängt von ihrer Dichte ab, davon wie sie gefüllt wurde (geschöpft, gelöffelt, gesiebt) und sogar von der Luftfeuchtigkeit. Professionelle Bäcker und Konditoren weltweit verwenden Gramm, weil Gewichtsmessungen unabhängig von der Technik konsistent sind.',
                  fr: 'Les tasses mesurent le volume, pas le poids. Le poids d\'un ingrédient dans une tasse dépend de sa densité, de la façon dont elle a été remplie (prélevée, versée à la cuillère, tamisée) et même de l\'humidité. Les boulangers et pâtissiers professionnels du monde entier utilisent les grammes parce que les mesures en poids sont constantes quelle que soit la technique.',
                  es: 'Las tazas miden volumen, no peso. El peso de un ingrediente dentro de una taza depende de su densidad, de cómo se llenó (con cuchara, tamizado, compactado) e incluso de la humedad. Los panaderos y pasteleros profesionales de todo el mundo usan gramos porque las medidas en peso son consistentes independientemente de la técnica.',
                }[l]}
              </p>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'What is ½ cup in grams for butter?',
                it: 'Quanto è ½ tazza di burro in grammi?',
                de: 'Was sind ½ Tasse Butter in Gramm?',
                fr: 'Combien représente ½ tasse de beurre en grammes ?',
                es: '¿Cuánto es ½ taza de mantequilla en gramos?',
              }[l]}
            </dt>
            <dd>
              <p className="text-zinc-600 leading-relaxed">
                {{
                  en: '½ US cup of butter equals approximately 113 grams (equivalent to 1 stick of butter in the US measurement system). 1 full cup of butter is 227 grams.',
                  it: '½ tazza US di burro equivale a circa 113 grammi (equivalente a 1 panetto di burro nel sistema di misura americano). 1 tazza intera di burro corrisponde a 227 grammi.',
                  de: '½ US-Tasse Butter entspricht etwa 113 Gramm (entspricht 1 Stück Butter im US-Maßsystem). 1 volle Tasse Butter sind 227 Gramm.',
                  fr: '½ tasse US de beurre équivaut à environ 113 grammes (équivalent à 1 bâton de beurre dans le système de mesure américain). 1 tasse entière de beurre représente 227 grammes.',
                  es: '½ taza US de mantequilla equivale a aproximadamente 113 gramos (equivalente a 1 barra de mantequilla en el sistema de medida americano). 1 taza completa de mantequilla son 227 gramos.',
                }[l]}
              </p>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'How do I convert cups to grams without a calculator?',
                it: 'Come convertire tazze in grammi senza calcolatrice?',
                de: 'Wie rechne ich Tassen in Gramm ohne Taschenrechner um?',
                fr: 'Comment convertir les tasses en grammes sans calculatrice ?',
                es: '¿Cómo convertir tazas a gramos sin calculadora?',
              }[l]}
            </dt>
            <dd>
              <p className="text-zinc-600 leading-relaxed">
                {{
                  en: 'Use these quick reference values: for flour, multiply cups × 125; for sugar, multiply cups × 200; for water or milk, multiply cups × 237. These are approximations for US cups — for exact values, use the ingredient tables on this page.',
                  it: 'Usa questi valori di riferimento rapido: per la farina, moltiplica tazze × 125; per lo zucchero, moltiplica tazze × 200; per acqua o latte, moltiplica tazze × 237. Questi sono valori approssimativi per le tazze US — per valori precisi, usa le tabelle degli ingredienti in questa pagina.',
                  de: 'Verwende diese Schnellreferenzwerte: für Mehl multipliziere Tassen × 125; für Zucker multipliziere Tassen × 200; für Wasser oder Milch multipliziere Tassen × 237. Dies sind Näherungswerte für US-Tassen — für exakte Werte nutze die Zutatentabellen auf dieser Seite.',
                  fr: 'Utilisez ces valeurs de référence rapide : pour la farine, multipliez les tasses × 125 ; pour le sucre, multipliez les tasses × 200 ; pour l\'eau ou le lait, multipliez les tasses × 237. Ce sont des approximations pour les tasses US — pour des valeurs exactes, utilisez les tableaux d\'ingrédients sur cette page.',
                  es: 'Usa estos valores de referencia rápida: para harina, multiplica tazas × 125; para azúcar, multiplica tazas × 200; para agua o leche, multiplica tazas × 237. Estos son valores aproximados para tazas US — para valores exactos, usa las tablas de ingredientes en esta página.',
                }[l]}
              </p>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: {
      en: 'Cooking Conversions',
      it: 'Conversioni da Cucina',
      de: 'Küchenumrechnungen',
      fr: 'Conversions Culinaires',
      es: 'Conversiones de Cocina',
    }[l],
    description: {
      en: 'Free cooking measurement converter: cups to grams, tablespoons to grams, cooking unit converter, baking conversions chart, cup to ml, oven temperature converter.',
      it: 'Convertitore di misure da cucina: tazze in grammi, cucchiai in grammi, convertitore di unità da cucina, tabella conversioni pasticceria, temperatura forno.',
      de: 'Kostenloser Küchenmaß-Umrechner: Tassen in Gramm, Esslöffel in Gramm, Kücheneinheiten-Umrechner, Backumrechnungstabelle, Ofentemperatur-Konverter.',
      fr: 'Convertisseur de mesures culinaires gratuit : tasses en grammes, cuillères en grammes, convertisseur d\'unités de cuisine, tableau de conversions pâtisserie, température de four.',
      es: 'Convertidor de medidas de cocina gratuito: tazas a gramos, cucharadas a gramos, convertidor de unidades de cocina, tabla de conversiones de repostería, temperatura de horno.',
    }[l],
  }
}

const TOOLS: { key: string; slug: string }[] = [
  { key: 'cupsToGrams',        slug: 'cups-to-grams' },
  { key: 'gramsToCups',        slug: 'grams-to-cups' },
  { key: 'tablespoonsToGrams', slug: 'tablespoons-to-grams' },
  { key: 'teaspoonsToGrams',   slug: 'teaspoons-to-grams' },
  { key: 'ouncesToGrams',      slug: 'oz-to-grams' },
  { key: 'cupsToMl',           slug: 'cups-to-ml' },
  { key: 'cupsToLiters',       slug: 'cups-to-liters' },
  { key: 'pintsToCups',        slug: 'pints-to-cups' },
  { key: 'quartsToCups',       slug: 'quarts-to-cups' },
  { key: 'stickOfButter',      slug: 'stick-of-butter' },
  { key: 'ovenTemperature',    slug: 'oven-temperature' },
  { key: 'fractionToDecimal',  slug: 'fraction-to-decimal' },
]

const OVEN_TABLE = [
  { desc: { en: 'Very Low', it: 'Molto Basso', de: 'Sehr Niedrig', fr: 'Très Bas', es: 'Muy Bajo' }, c: 120, f: 250, gas: '½' },
  { desc: { en: 'Low',      it: 'Basso',       de: 'Niedrig',      fr: 'Bas',      es: 'Bajo'     }, c: 150, f: 300, gas: '2' },
  { desc: { en: 'Moderate', it: 'Moderato',    de: 'Moderat',      fr: 'Modéré',   es: 'Moderado' }, c: 180, f: 350, gas: '4' },
  { desc: { en: 'Hot',      it: 'Caldo',       de: 'Heiß',         fr: 'Chaud',    es: 'Caliente' }, c: 200, f: 400, gas: '6' },
  { desc: { en: 'Very Hot', it: 'Molto Caldo', de: 'Sehr Heiß',    fr: 'Très Chaud', es: 'Muy Caliente' }, c: 230, f: 450, gas: '8' },
]

export default async function CookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">

      {/* H1 */}
      <h1 className="text-3xl font-bold mb-4">
        {{
          en: 'Cooking Conversions',
          it: 'Conversioni da Cucina',
          de: 'Küchenumrechnungen',
          fr: 'Conversions Culinaires',
          es: 'Conversiones de Cocina',
        }[l]}
      </h1>

      {/* Intro paragraphs */}
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{
          en: 'American recipes rely on volume-based measurements — cups, tablespoons, teaspoons, and sticks of butter — while European and international cooking is grounded in weight. One US cup holds exactly 236.59 ml, one tablespoon 14.79 ml, and one teaspoon 4.93 ml. This volume-versus-weight divide is not merely a convention; it has real consequences in the kitchen, and especially in baking, where precise ratios between flour, fat, sugar, and liquid determine the final texture and structure of a dish.',
          it: 'Le ricette americane si basano su misure di volume — tazze, cucchiai, cucchiaini e panetti di burro — mentre la cucina europea e internazionale si fonda sul peso. Una tazza US contiene esattamente 236,59 ml, un cucchiaio 14,79 ml e un cucchiaino 4,93 ml. Questa differenza tra volume e peso non è solo una questione di convenzione: ha conseguenze concrete in cucina, e in particolare in pasticceria, dove i rapporti precisi tra farina, grassi, zucchero e liquidi determinano la struttura e la consistenza del risultato finale.',
          de: 'Amerikanische Rezepte basieren auf Volumenmaßen — Tassen, Esslöffel, Teelöffel und Butterstücke — während die europäische und internationale Küche auf Gewicht setzt. Eine US-Tasse fasst genau 236,59 ml, ein Esslöffel 14,79 ml und ein Teelöffel 4,93 ml. Dieser Unterschied zwischen Volumen und Gewicht ist nicht nur eine Frage der Konvention; er hat echte Auswirkungen in der Küche, besonders beim Backen, wo präzise Verhältnisse zwischen Mehl, Fett, Zucker und Flüssigkeit Textur und Struktur des Endprodukts bestimmen.',
          fr: 'Les recettes américaines reposent sur des mesures de volume — tasses, cuillères à soupe, cuillères à café et bâtons de beurre — tandis que la cuisine européenne et internationale se fonde sur le poids. Une tasse US contient exactement 236,59 ml, une cuillère à soupe 14,79 ml et une cuillère à café 4,93 ml. Cette différence entre volume et poids n\'est pas qu\'une question de convention ; elle a des conséquences réelles en cuisine, et particulièrement en pâtisserie, où des ratios précis entre farine, matière grasse, sucre et liquide déterminent la texture et la structure du résultat final.',
          es: 'Las recetas americanas se basan en medidas de volumen — tazas, cucharadas, cucharaditas y barras de mantequilla — mientras que la cocina europea e internacional se fundamenta en el peso. Una taza US contiene exactamente 236,59 ml, una cucharada 14,79 ml y una cucharadita 4,93 ml. Esta diferencia entre volumen y peso no es solo una cuestión de convención; tiene consecuencias reales en la cocina, y especialmente en repostería, donde los ratios precisos entre harina, grasa, azúcar y líquido determinan la textura y la estructura del resultado final.',
        }[l]}
      </p>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{
          en: 'When following an American recipe in Europe — or adapting a European one for a US audience — conversions are indispensable. The weight of an ingredient per cup varies dramatically with density: a cup of all-purpose flour weighs just 125 g, while a cup of honey weighs 340 g. This means no single multiplier can cover all ingredients. Our tools use certified density data sourced from the FAO/INFOODS Food Composition Database, ensuring that conversions reflect the actual weight of each specific ingredient rather than a rough average.',
          it: 'Quando si segue una ricetta americana in Europa — o si adatta una europea per un pubblico americano — le conversioni sono indispensabili. Il peso di un ingrediente per tazza varia enormemente in base alla densità: una tazza di farina 00 pesa solo 125 g, mentre una tazza di miele pesa 340 g. Questo significa che nessun moltiplicatore unico può coprire tutti gli ingredienti. I nostri strumenti utilizzano dati di densità certificati dal database FAO/INFOODS Food Composition, garantendo che le conversioni riflettano il peso reale di ogni specifico ingrediente e non una media approssimativa.',
          de: 'Wer ein amerikanisches Rezept in Europa nachkocht — oder ein europäisches für ein US-Publikum anpasst — kommt um Umrechnungen nicht herum. Das Gewicht einer Zutat pro Tasse variiert je nach Dichte erheblich: Eine Tasse Weizenmehl wiegt nur 125 g, eine Tasse Honig hingegen 340 g. Das bedeutet, dass kein einzelner Multiplikator alle Zutaten abdecken kann. Unsere Tools verwenden zertifizierte Dichteangaben aus der FAO/INFOODS Food Composition Database und stellen damit sicher, dass die Umrechnungen das tatsächliche Gewicht jeder einzelnen Zutat widerspiegeln — nicht nur einen groben Mittelwert.',
          fr: 'Lorsqu\'on suit une recette américaine en Europe — ou qu\'on adapte une recette européenne pour un public américain — les conversions sont indispensables. Le poids d\'un ingrédient par tasse varie considérablement selon la densité : une tasse de farine tout usage pèse seulement 125 g, tandis qu\'une tasse de miel pèse 340 g. Cela signifie qu\'aucun multiplicateur unique ne peut couvrir tous les ingrédients. Nos outils utilisent des données de densité certifiées issues de la base de données FAO/INFOODS Food Composition, garantissant que les conversions reflètent le poids réel de chaque ingrédient spécifique plutôt qu\'une moyenne approximative.',
          es: 'Cuando se sigue una receta americana en Europa — o se adapta una europea para una audiencia estadounidense — las conversiones son indispensables. El peso de un ingrediente por taza varía drásticamente con la densidad: una taza de harina todo uso pesa solo 125 g, mientras que una taza de miel pesa 340 g. Esto significa que ningún multiplicador único puede cubrir todos los ingredientes. Nuestras herramientas usan datos de densidad certificados de la base de datos FAO/INFOODS Food Composition, asegurando que las conversiones reflejen el peso real de cada ingrediente específico en lugar de un promedio aproximado.',
        }[l]}
      </p>

      {/* H2: Tools */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{
          en: 'Cooking Measurement Tools',
          it: 'Strumenti di Conversione',
          de: 'Küchenmaß-Werkzeuge',
          fr: 'Outils de Mesure Culinaire',
          es: 'Herramientas de Medición de Cocina',
        }[l]}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {TOOLS.map(({ key, slug }) => (
          <Link
            key={slug}
            href={`/${locale}/convert/${slug}`}
            className="rounded-lg border p-4 text-sm font-medium hover:bg-accent transition-colors block"
          >
            {t(l, key as Parameters<typeof t>[1])}
          </Link>
        ))}
      </div>

      {/* H2: Understanding Measurement Systems */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{
          en: 'Understanding Cooking Measurement Systems',
          it: 'Sistemi di Misura in Cucina',
          de: 'Küchenmaßsysteme verstehen',
          fr: 'Comprendre les Systèmes de Mesure Culinaire',
          es: 'Comprender los Sistemas de Medición de Cocina',
        }[l]}
      </h2>

      {/* H3: US Volume */}
      <h3 className="text-lg font-semibold text-zinc-800 mb-2">
        {{
          en: 'US Volume Measurements',
          it: 'Misure di Volume Americane',
          de: 'US-Volumenmaße',
          fr: 'Mesures de Volume Américaines',
          es: 'Medidas de Volumen Estadounidenses',
        }[l]}
      </h3>
      <p className="text-zinc-600 leading-relaxed mb-6">
        {{
          en: 'The US customary system organises kitchen volume in a clear hierarchy: 1 cup = 16 tablespoons = 48 teaspoons = 236.59 ml. Tablespoons and teaspoons are used for smaller quantities such as spices, leavening agents, and extracts, while cups handle larger volumes of flour, sugar, or liquids. This system is standard in the United States and is also common in older Canadian and some Australian recipe books, though both countries have partially shifted to the metric cup of 250 ml. Understanding the hierarchy helps when scaling recipes up or down without a calculator — halving a recipe means 8 tablespoons instead of 1 cup, and doubling means 32 tablespoons or simply 2 cups.',
          it: 'Il sistema americano organizza i volumi in cucina in una gerarchia chiara: 1 tazza = 16 cucchiai = 48 cucchiaini = 236,59 ml. I cucchiai e i cucchiaini si usano per quantità ridotte come spezie, agenti lievitanti ed estratti, mentre le tazze gestiscono volumi maggiori di farina, zucchero o liquidi. Questo sistema è standard negli Stati Uniti ed è comune anche nei libri di ricette canadesi più datati e in alcuni australiani, sebbene entrambi i paesi abbiano parzialmente adottato la tazza metrica da 250 ml. Comprendere la gerarchia aiuta a scalare le ricette senza calcolatrice: dimezzare una ricetta significa 8 cucchiai invece di 1 tazza, e raddoppiare significa 32 cucchiai o semplicemente 2 tazze.',
          de: 'Das US-amerikanische Küchensystem ordnet Volumenmaße in einer klaren Hierarchie: 1 Tasse = 16 Esslöffel = 48 Teelöffel = 236,59 ml. Esslöffel und Teelöffel werden für kleinere Mengen wie Gewürze, Triebmittel und Extrakte verwendet, während Tassen größere Mengen an Mehl, Zucker oder Flüssigkeiten abdecken. Dieses System ist in den USA Standard und kommt auch in älteren kanadischen und einigen australischen Rezeptbüchern vor, obwohl beide Länder teilweise auf die metrische Tasse mit 250 ml umgestellt haben. Die Hierarchie zu kennen hilft beim Skalieren von Rezepten ohne Taschenrechner: Eine Rezepthalbierung bedeutet 8 Esslöffel statt 1 Tasse, eine Verdopplung 32 Esslöffel oder einfach 2 Tassen.',
          fr: 'Le système américain organise les volumes de cuisine en une hiérarchie claire : 1 tasse = 16 cuillères à soupe = 48 cuillères à café = 236,59 ml. Les cuillères à soupe et à café s\'utilisent pour de petites quantités comme les épices, les agents levants et les extraits, tandis que les tasses gèrent de plus grands volumes de farine, sucre ou liquides. Ce système est standard aux États-Unis et courant dans les anciens livres de recettes canadiens et dans certains australiens, bien que les deux pays aient partiellement adopté la tasse métrique de 250 ml. Comprendre la hiérarchie aide à adapter les recettes sans calculatrice — diviser par deux signifie 8 cuillères à soupe au lieu d\'1 tasse, doubler signifie 32 cuillères à soupe ou simplement 2 tasses.',
          es: 'El sistema estadounidense organiza los volúmenes de cocina en una jerarquía clara: 1 taza = 16 cucharadas = 48 cucharaditas = 236,59 ml. Las cucharadas y cucharaditas se usan para cantidades pequeñas como especias, agentes leudantes y extractos, mientras que las tazas manejan mayores volúmenes de harina, azúcar o líquidos. Este sistema es estándar en Estados Unidos y también es común en libros de recetas canadienses más antiguos y algunos australianos, aunque ambos países han adoptado parcialmente la taza métrica de 250 ml. Entender la jerarquía ayuda a escalar recetas sin calculadora: reducir a la mitad significa 8 cucharadas en lugar de 1 taza, y duplicar significa 32 cucharadas o simplemente 2 tazas.',
        }[l]}
      </p>

      {/* H3: Weight-Based */}
      <h3 className="text-lg font-semibold text-zinc-800 mb-2">
        {{
          en: 'Weight-Based Measurements',
          it: 'Misure Basate sul Peso',
          de: 'Gewichtsbasierte Maße',
          fr: 'Mesures Basées sur le Poids',
          es: 'Medidas Basadas en el Peso',
        }[l]}
      </h3>
      <p className="text-zinc-600 leading-relaxed mb-6">
        {{
          en: 'Professional bakers and pastry chefs worldwide use grams because weight is invariant regardless of filling technique. When measuring flour by volume, compaction alone can shift the actual weight by up to 20%: scooping directly from the bag packs the flour and can yield 150 g per cup, while spooning it in lightly and levelling gives closer to 120 g. Grams eliminate this ambiguity entirely — 125 g of flour is always 125 g, whether sifted or unsifted, humid or dry. For recipes where hydration ratios matter (bread, sourdough, choux pastry), the difference between 120 g and 150 g of flour per cup is the difference between success and failure.',
          it: 'I fornai e pasticceri professionisti di tutto il mondo usano i grammi perché il peso è invariante rispetto alla tecnica di riempimento. Misurando la farina a volume, la sola compattazione può far variare il peso reale fino al 20%: raccogliere direttamente dal sacchetto comprime la farina e può dare 150 g per tazza, mentre versarla con il cucchiaio e livellare delicatamente dà un risultato più vicino a 120 g. I grammi eliminano completamente questa ambiguità — 125 g di farina sono sempre 125 g, setacciata o meno, umida o secca. Per le ricette in cui il rapporto di idratazione è fondamentale (pane, pasta madre, pasta choux), la differenza tra 120 g e 150 g di farina per tazza può essere quella tra riuscita e fallimento.',
          de: 'Professionelle Bäcker und Konditoren weltweit verwenden Gramm, weil Gewicht unabhängig von der Füllmethode invariant ist. Bei der Volumenmessung von Mehl kann allein die Verdichtung das tatsächliche Gewicht um bis zu 20% verschieben: Direkt aus dem Beutel schöpfen kann durch Kompression 150 g pro Tasse ergeben, während leichtes Einlöffeln und Abstreichen eher 120 g liefert. Gramm eliminieren diese Mehrdeutigkeit vollständig — 125 g Mehl sind immer 125 g, ob gesiebt oder ungesiebt, feucht oder trocken. Bei Rezepten, bei denen Hydrationsverhältnisse entscheidend sind (Brot, Sauerteig, Brandteig), kann der Unterschied zwischen 120 g und 150 g Mehl pro Tasse über Erfolg oder Misserfolg entscheiden.',
          fr: 'Les boulangers et pâtissiers professionnels du monde entier utilisent les grammes parce que le poids est invariant quelle que soit la technique de remplissage. Pour mesurer la farine en volume, le simple tassement peut faire varier le poids réel de 20% : prélever directement dans le sac peut donner 150 g par tasse par compression, tandis que verser à la cuillère et niveler légèrement donne plutôt 120 g. Les grammes éliminent entièrement cette ambiguïté — 125 g de farine sont toujours 125 g, tamisée ou non, humide ou sèche. Pour les recettes où les ratios d\'hydratation importent (pain, levain, pâte à choux), la différence entre 120 g et 150 g de farine par tasse peut faire la différence entre réussite et échec.',
          es: 'Los panaderos y pasteleros profesionales de todo el mundo usan gramos porque el peso es invariante independientemente de la técnica de llenado. Al medir harina por volumen, la compactación por sí sola puede variar el peso real hasta un 20%: coger directamente de la bolsa comprime la harina y puede dar 150 g por taza, mientras que verterla con cuchara y nivelar suavemente da más cercano a 120 g. Los gramos eliminan completamente esta ambigüedad — 125 g de harina siempre son 125 g, tamizada o no, húmeda o seca. Para recetas donde los ratios de hidratación importan (pan, masa madre, pasta choux), la diferencia entre 120 g y 150 g de harina por taza puede ser la diferencia entre el éxito y el fracaso.',
        }[l]}
      </p>

      {/* H2: Oven Temperature */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{
          en: 'Oven Temperature Conversions',
          it: 'Conversioni di Temperatura del Forno',
          de: 'Ofentemperatur-Umrechnungen',
          fr: 'Conversions de Température de Four',
          es: 'Conversiones de Temperatura de Horno',
        }[l]}
      </h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{
          en: 'Oven temperature is one of the most frequent sources of confusion when cooking across cuisines. American recipes express temperature in Fahrenheit (°F), European recipes in Celsius (°C), and older British recipes sometimes use Gas Mark — a numbered scale from ¼ to 9. Converting between them is straightforward with the formula °C = (°F − 32) × 5/9, but the table below covers the most common baking temperatures at a glance. A fan-assisted (convection) oven typically runs 20°C hotter than a conventional oven, so reduce the stated temperature accordingly.',
          it: 'La temperatura del forno è una delle fonti di confusione più frequenti quando si cuoce seguendo ricette di culture diverse. Le ricette americane esprimono la temperatura in Fahrenheit (°F), quelle europee in Celsius (°C), e le ricette britanniche più datate usano talvolta il Gas Mark — una scala numerata da ¼ a 9. La conversione tra questi sistemi è semplice con la formula °C = (°F − 32) × 5/9, ma la tabella seguente copre le temperature di cottura più comuni a colpo d\'occhio. Un forno ventilato è generalmente 20°C più caldo di un forno tradizionale: riduci la temperatura indicata di conseguenza.',
          de: 'Die Ofentemperatur ist eine der häufigsten Verwirrungsquellen beim Kochen nach Rezepten aus verschiedenen Kulturen. Amerikanische Rezepte geben die Temperatur in Fahrenheit (°F) an, europäische in Celsius (°C), und ältere britische Rezepte verwenden manchmal Gas Mark — eine nummerierte Skala von ¼ bis 9. Die Umrechnung zwischen ihnen ist mit der Formel °C = (°F − 32) × 5/9 unkompliziert, aber die folgende Tabelle zeigt die häufigsten Backtemperaturen auf einen Blick. Ein Umluft-(Konvektions-)Ofen läuft in der Regel 20°C heißer als ein herkömmlicher Ofen — reduziere die angegebene Temperatur entsprechend.',
          fr: 'La température du four est l\'une des sources de confusion les plus fréquentes lorsqu\'on cuisine en suivant des recettes de cultures différentes. Les recettes américaines expriment la température en Fahrenheit (°F), les recettes européennes en Celsius (°C), et les anciennes recettes britanniques utilisent parfois le Gas Mark — une échelle numérotée de ¼ à 9. La conversion entre ces systèmes est simple avec la formule °C = (°F − 32) × 5/9, mais le tableau ci-dessous couvre les températures de cuisson les plus courantes en un coup d\'œil. Un four à chaleur tournante (convection) est généralement 20°C plus chaud qu\'un four conventionnel — réduisez la température indiquée en conséquence.',
          es: 'La temperatura del horno es una de las fuentes de confusión más frecuentes al cocinar siguiendo recetas de diferentes culturas. Las recetas americanas expresan la temperatura en Fahrenheit (°F), las europeas en Celsius (°C), y las recetas británicas más antiguas a veces usan Gas Mark — una escala numerada del ¼ al 9. La conversión entre ellos es sencilla con la fórmula °C = (°F − 32) × 5/9, pero la tabla a continuación cubre las temperaturas de cocción más comunes de un vistazo. Un horno de convección (ventilado) suele ser 20°C más caliente que un horno convencional — reduce la temperatura indicada en consecuencia.',
        }[l]}
      </p>
      <div className="overflow-x-auto rounded-lg border mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-zinc-100">
              <th className="text-left px-4 py-2 font-semibold text-zinc-700 border-b border-zinc-200">
                {{
                  en: 'Description',
                  it: 'Descrizione',
                  de: 'Beschreibung',
                  fr: 'Description',
                  es: 'Descripción',
                }[l]}
              </th>
              <th className="text-left px-4 py-2 font-semibold text-zinc-700 border-b border-zinc-200">°C</th>
              <th className="text-left px-4 py-2 font-semibold text-zinc-700 border-b border-zinc-200">°F</th>
              <th className="text-left px-4 py-2 font-semibold text-zinc-700 border-b border-zinc-200">Gas Mark</th>
            </tr>
          </thead>
          <tbody>
            {OVEN_TABLE.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-zinc-50' : ''}>
                <td className="px-4 py-2 border-b border-zinc-100 text-zinc-800">{row.desc[l]}</td>
                <td className="px-4 py-2 border-b border-zinc-100 font-mono text-zinc-700">{row.c}°C</td>
                <td className="px-4 py-2 border-b border-zinc-100 font-mono text-zinc-700">{row.f}°F</td>
                <td className="px-4 py-2 border-b border-zinc-100 font-mono text-zinc-700">{row.gas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-zinc-600 leading-relaxed mb-4">
        <Link href={`/${locale}/convert/oven-temperature`} className="text-emerald-600 hover:underline font-medium">
          {{
            en: 'Use the full oven temperature converter →',
            it: 'Usa il convertitore completo di temperatura del forno →',
            de: 'Vollständigen Ofentemperatur-Umrechner verwenden →',
            fr: 'Utiliser le convertisseur complet de température de four →',
            es: 'Usar el convertidor completo de temperatura de horno →',
          }[l]}
        </Link>
      </p>

      {/* H2: FAQ */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{
          en: 'Frequently Asked Questions',
          it: 'Domande Frequenti',
          de: 'Häufig Gestellte Fragen',
          fr: 'Questions Fréquentes',
          es: 'Preguntas Frecuentes',
        }[l]}
      </h2>
      <dl>
        {/* Q1 */}
        <div className="mb-6">
          <dt className="font-bold text-zinc-800 mb-1">
            {{
              en: 'How many tablespoons in a cup?',
              it: 'Quanti cucchiai in una tazza?',
              de: 'Wie viele Esslöffel sind eine Tasse?',
              fr: 'Combien de cuillères à soupe dans une tasse ?',
              es: '¿Cuántas cucharadas hay en una taza?',
            }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed mb-6">
            {{
              en: '16 tablespoons = 1 US cup (236.59 ml). Each tablespoon equals 14.79 ml. In the metric system, 1 metric cup (250 ml) contains approximately 16.67 tablespoons, making the metric cup fractionally larger than the US standard. When converting American recipes, always use 16 tablespoons per cup rather than rounding to a metric equivalent.',
              it: '16 cucchiai = 1 tazza US (236,59 ml). Ogni cucchiaio equivale a 14,79 ml. Nel sistema metrico, 1 tazza metrica (250 ml) contiene circa 16,67 cucchiai, quindi la tazza metrica è leggermente più grande dello standard americano. Quando si convertono ricette americane, usa sempre 16 cucchiai per tazza piuttosto che arrotondare a un equivalente metrico.',
              de: '16 Esslöffel = 1 US-Tasse (236,59 ml). Jeder Esslöffel entspricht 14,79 ml. Im metrischen System enthält 1 metrische Tasse (250 ml) ungefähr 16,67 Esslöffel, was die metrische Tasse geringfügig größer als den US-Standard macht. Beim Umrechnen amerikanischer Rezepte immer 16 Esslöffel pro Tasse verwenden, statt auf ein metrisches Äquivalent zu runden.',
              fr: '16 cuillères à soupe = 1 tasse US (236,59 ml). Chaque cuillère à soupe équivaut à 14,79 ml. Dans le système métrique, 1 tasse métrique (250 ml) contient environ 16,67 cuillères à soupe, ce qui rend la tasse métrique légèrement plus grande que le standard américain. Lors de la conversion de recettes américaines, utilisez toujours 16 cuillères à soupe par tasse plutôt que d\'arrondir à un équivalent métrique.',
              es: '16 cucharadas = 1 taza US (236,59 ml). Cada cucharada equivale a 14,79 ml. En el sistema métrico, 1 taza métrica (250 ml) contiene aproximadamente 16,67 cucharadas, haciendo la taza métrica ligeramente más grande que el estándar estadounidense. Al convertir recetas americanas, usa siempre 16 cucharadas por taza en lugar de redondear a un equivalente métrico.',
            }[l]}
          </dd>
        </div>

        {/* Q2 */}
        <div className="mb-6">
          <dt className="font-bold text-zinc-800 mb-1">
            {{
              en: 'How many teaspoons in a tablespoon?',
              it: 'Quanti cucchiaini in un cucchiaio?',
              de: 'Wie viele Teelöffel sind ein Esslöffel?',
              fr: 'Combien de cuillères à café dans une cuillère à soupe ?',
              es: '¿Cuántas cucharaditas hay en una cucharada?',
            }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed mb-6">
            {{
              en: '1 tablespoon = 3 teaspoons. One teaspoon equals 4.93 ml. This 3:1 ratio is consistent across the US customary, metric, and Imperial systems, making teaspoon-to-tablespoon the simplest cooking conversion to remember. When a recipe calls for "a pinch" or "a dash", these are informal measures roughly equal to ⅛ teaspoon and ⅛–¼ teaspoon respectively.',
              it: '1 cucchiaio = 3 cucchiaini. Un cucchiaino equivale a 4,93 ml. Questo rapporto 3:1 è costante nei sistemi americano, metrico e imperiale, rendendo la conversione cucchiaini-cucchiai la più semplice da ricordare in cucina. Quando una ricetta chiede "un pizzico" o "un po\'", si tratta di misure informali pari circa a ⅛ di cucchiaino e ⅛–¼ di cucchiaino rispettivamente.',
              de: '1 Esslöffel = 3 Teelöffel. Ein Teelöffel entspricht 4,93 ml. Dieses 3:1-Verhältnis ist im US-amerikanischen, metrischen und Imperial-System gleich und macht die Teelöffel-zu-Esslöffel-Umrechnung zur einfachsten in der Küche. Wenn ein Rezept "eine Prise" oder "einen Schuss" verlangt, sind das informelle Maße von etwa ⅛ Teelöffel bzw. ⅛–¼ Teelöffel.',
              fr: '1 cuillère à soupe = 3 cuillères à café. Une cuillère à café équivaut à 4,93 ml. Ce ratio 3:1 est constant dans les systèmes américain, métrique et impérial, ce qui fait de la conversion cuillères à café/soupe la plus simple à retenir en cuisine. Quand une recette demande "une pincée" ou "un trait", ce sont des mesures informelles d\'environ ⅛ cuillère à café et ⅛–¼ cuillère à café respectivement.',
              es: '1 cucharada = 3 cucharaditas. Una cucharadita equivale a 4,93 ml. Esta proporción 3:1 es consistente en los sistemas estadounidense, métrico e imperial, haciendo de la conversión cucharaditas-cucharadas la más sencilla de recordar en cocina. Cuando una receta pide "una pizca" o "un chorrito", son medidas informales de aproximadamente ⅛ cucharadita y ⅛–¼ cucharadita respectivamente.',
            }[l]}
          </dd>
        </div>

        {/* Q3 */}
        <div className="mb-6">
          <dt className="font-bold text-zinc-800 mb-1">
            {{
              en: 'What is a stick of butter in grams?',
              it: 'Quanto pesa un panetto di burro americano in grammi?',
              de: 'Wie viel Gramm hat ein Stück Butter?',
              fr: 'Combien de grammes représente un bâton de beurre ?',
              es: '¿Cuántos gramos es una barra de mantequilla americana?',
            }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed mb-6">
            {{
              en: '1 US stick of butter = 113 grams = ½ cup = 8 tablespoons. American recipes often call for "1 stick" or "2 sticks" of butter, referencing the standard 113 g portions in which US butter is packaged (4 sticks per pound, 454 g). European butter is typically sold in 250 g blocks, which is equivalent to approximately 2.2 US sticks. If your recipe calls for 2 sticks, use 226 g — slightly less than a full 250 g European pack.',
              it: '1 panetto di burro americano = 113 grammi = ½ tazza = 8 cucchiai. Le ricette americane chiamano spesso "1 stick" o "2 sticks" di burro, riferendosi alle porzioni standard da 113 g in cui il burro americano è confezionato (4 panetti per libbra, 454 g). Il burro europeo è tipicamente venduto in panetti da 250 g, equivalente a circa 2,2 panetti americani. Se la ricetta chiede 2 stick, usa 226 g — leggermente meno di un intero panetto europeo da 250 g.',
              de: '1 US-Butterstück = 113 Gramm = ½ Tasse = 8 Esslöffel. Amerikanische Rezepte verlangen oft "1 stick" oder "2 sticks" Butter, bezugnehmend auf die Standard-113-g-Portionen, in denen US-Butter verpackt ist (4 Stücke pro Pfund, 454 g). Europäische Butter wird typischerweise in 250-g-Blöcken verkauft, was etwa 2,2 US-Stücken entspricht. Wenn das Rezept 2 Stücke verlangt, verwende 226 g — etwas weniger als ein ganzer europäischer 250-g-Block.',
              fr: '1 bâton de beurre américain = 113 grammes = ½ tasse = 8 cuillères à soupe. Les recettes américaines demandent souvent "1 stick" ou "2 sticks" de beurre, référençant les portions standard de 113 g dans lesquelles le beurre américain est emballé (4 bâtons par livre, 454 g). Le beurre européen est généralement vendu en blocs de 250 g, ce qui équivaut à environ 2,2 bâtons américains. Si la recette demande 2 bâtons, utilisez 226 g — légèrement moins qu\'un bloc européen entier de 250 g.',
              es: '1 barra de mantequilla americana = 113 gramos = ½ taza = 8 cucharadas. Las recetas americanas a menudo piden "1 stick" o "2 sticks" de mantequilla, refiriéndose a las porciones estándar de 113 g en las que se envasa la mantequilla americana (4 barras por libra, 454 g). La mantequilla europea se vende típicamente en bloques de 250 g, equivalente a aproximadamente 2,2 barras americanas. Si tu receta pide 2 barras, usa 226 g — ligeramente menos que un bloque europeo entero de 250 g.',
            }[l]}
          </dd>
        </div>

        {/* Q4 */}
        <div className="mb-6">
          <dt className="font-bold text-zinc-800 mb-1">
            {{
              en: 'How do I convert a US recipe to grams?',
              it: 'Come converto una ricetta americana in grammi?',
              de: 'Wie rechne ich ein US-Rezept in Gramm um?',
              fr: 'Comment convertir une recette américaine en grammes ?',
              es: '¿Cómo convierto una receta americana a gramos?',
            }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed mb-6">
            {{
              en: 'Use the ingredient-specific cups-to-grams converter for each item in the recipe, as density varies between ingredients. As quick mental shortcuts: flour × 125, granulated sugar × 200, butter × 227 per cup. For liquids, 1 cup ≈ 240 ml ≈ 240 g for water-based ingredients like milk or juice. Tablespoons and teaspoons can also be converted: 1 tbsp of a liquid ingredient ≈ 15 g, 1 tsp ≈ 5 g — though for dense or light ingredients these figures will differ.',
              it: 'Usa il convertitore tazze-grammi specifico per ingrediente per ogni voce della ricetta, poiché la densità varia tra gli ingredienti. Come scorciatoie mentali rapide: farina × 125, zucchero semolato × 200, burro × 227 per tazza. Per i liquidi, 1 tazza ≈ 240 ml ≈ 240 g per ingredienti a base acquosa come latte o succo. Anche cucchiai e cucchiaini possono essere convertiti: 1 cucchiaio di un ingrediente liquido ≈ 15 g, 1 cucchiaino ≈ 5 g — anche se per ingredienti densi o leggeri questi valori differiranno.',
              de: 'Verwende den zutatspezifischen Tassen-zu-Gramm-Umrechner für jeden Bestandteil des Rezepts, da die Dichte zwischen Zutaten variiert. Als schnelle Faustregeln: Mehl × 125, Kristallzucker × 200, Butter × 227 pro Tasse. Für Flüssigkeiten gilt: 1 Tasse ≈ 240 ml ≈ 240 g für wasserbasierte Zutaten wie Milch oder Saft. Auch Esslöffel und Teelöffel lassen sich umrechnen: 1 EL einer flüssigen Zutat ≈ 15 g, 1 TL ≈ 5 g — bei dichten oder leichten Zutaten weichen diese Werte jedoch ab.',
              fr: 'Utilisez le convertisseur tasses-grammes spécifique à chaque ingrédient pour chaque élément de la recette, car la densité varie selon les ingrédients. Comme raccourcis mentaux rapides : farine × 125, sucre en poudre × 200, beurre × 227 par tasse. Pour les liquides, 1 tasse ≈ 240 ml ≈ 240 g pour les ingrédients à base d\'eau comme le lait ou le jus. Les cuillères à soupe et à café peuvent aussi être converties : 1 c. à soupe d\'un ingrédient liquide ≈ 15 g, 1 c. à café ≈ 5 g — bien que pour les ingrédients denses ou légers ces chiffres diffèrent.',
              es: 'Usa el convertidor de tazas a gramos específico por ingrediente para cada elemento de la receta, ya que la densidad varía entre ingredientes. Como atajos mentales rápidos: harina × 125, azúcar granulado × 200, mantequilla × 227 por taza. Para líquidos, 1 taza ≈ 240 ml ≈ 240 g para ingredientes a base de agua como leche o zumo. Las cucharadas y cucharaditas también se pueden convertir: 1 cda de un ingrediente líquido ≈ 15 g, 1 cdta ≈ 5 g — aunque para ingredientes densos o ligeros estas cifras diferirán.',
            }[l]}
          </dd>
        </div>

        {/* Q5 */}
        <div className="mb-6">
          <dt className="font-bold text-zinc-800 mb-1">
            {{
              en: 'What is 350°F in Celsius?',
              it: 'Quanto è 350°F in Celsius?',
              de: 'Was sind 350°F in Celsius?',
              fr: 'Combien font 350°F en Celsius ?',
              es: '¿Cuánto es 350°F en Celsius?',
            }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed mb-6">
            {{
              en: '350°F = approximately 177°C, commonly rounded to 180°C in European recipes. This is the most common baking temperature for cakes, cookies, muffins, and quick breads. Use the formula °C = (°F − 32) × 5/9 for precise conversions. For a fan-assisted oven, reduce by 20°C — so 350°F becomes approximately 160°C fan. This temperature corresponds to Gas Mark 4 on the British scale.',
              it: '350°F = circa 177°C, comunemente arrotondato a 180°C nelle ricette europee. Questa è la temperatura di cottura più comune per torte, biscotti, muffin e pani veloci. Usa la formula °C = (°F − 32) × 5/9 per conversioni precise. Per un forno ventilato, riduci di 20°C — quindi 350°F diventa circa 160°C ventilato. Questa temperatura corrisponde a Gas Mark 4 nella scala britannica.',
              de: '350°F = ungefähr 177°C, in europäischen Rezepten oft auf 180°C gerundet. Dies ist die häufigste Backtemperatur für Kuchen, Kekse, Muffins und Schnellbrote. Für präzise Umrechnungen die Formel °C = (°F − 32) × 5/9 verwenden. Bei Umluft um 20°C reduzieren — also 350°F entspricht ca. 160°C Umluft. Diese Temperatur entspricht Gas Mark 4 auf der britischen Skala.',
              fr: '350°F = environ 177°C, couramment arrondi à 180°C dans les recettes européennes. C\'est la température de cuisson la plus courante pour les gâteaux, biscuits, muffins et pains rapides. Utilisez la formule °C = (°F − 32) × 5/9 pour des conversions précises. Pour un four à chaleur tournante, réduisez de 20°C — donc 350°F devient environ 160°C chaleur tournante. Cette température correspond au Gas Mark 4 de l\'échelle britannique.',
              es: '350°F = aproximadamente 177°C, comúnmente redondeado a 180°C en recetas europeas. Esta es la temperatura de horneado más común para bizcochos, galletas, muffins y panes rápidos. Usa la fórmula °C = (°F − 32) × 5/9 para conversiones precisas. Para un horno de convección, reduce 20°C — así 350°F se convierte en aproximadamente 160°C ventilado. Esta temperatura corresponde a Gas Mark 4 en la escala británica.',
            }[l]}
          </dd>
        </div>
      </dl>

    </div>
  )
}

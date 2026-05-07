import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS, getIngredientBySlug } from '@/lib/data/ingredients'
import { cupsToGrams, generateConversionTable, tablespoonToGrams, teaspoonToGrams } from '@/lib/conversions/cooking'
import { ConversionCalculator } from '@/components/ConversionCalculator'

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    INGREDIENTS.map(ing => ({ locale, ingredient: ing.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; ingredient: string }> }): Promise<Metadata> {
  const { locale, ingredient: slug } = await params
  const l = locale as Locale
  const ing = getIngredientBySlug(slug)
  if (!ing) return {}

  const title = {
    en: `Cups to Grams ${ing.names[l]} — Conversion Chart`,
    it: `Tazze in Grammi ${ing.names[l]} — Tabella di Conversione`,
    de: `Tassen in Gramm ${ing.names[l]} — Umrechnungstabelle`,
    fr: `Tasses en Grammes ${ing.names[l]} — Tableau de Conversion`,
    es: `Tazas a Gramos ${ing.names[l]} — Tabla de Conversión`,
  }[l]!

  const desc = {
    en: `Convert cups to grams for ${ing.names[l]}. 1 cup = ${cupsToGrams(1, ing)}g. Complete chart with US and metric cups.`,
    it: `Converti tazze in grammi per ${ing.names[l]}. 1 tazza = ${cupsToGrams(1, ing)}g. Tabella completa con tazza US e metrica.`,
    de: `Tassen in Gramm umrechnen für ${ing.names[l]}. 1 Tasse = ${cupsToGrams(1, ing)}g. Vollständige Tabelle mit US- und metrischen Tassen.`,
    fr: `Convertir tasses en grammes pour ${ing.names[l]}. 1 tasse = ${cupsToGrams(1, ing)}g. Tableau complet avec tasses US et métriques.`,
    es: `Convierte tazas a gramos para ${ing.names[l]}. 1 taza = ${cupsToGrams(1, ing)}g. Tabla completa con tazas US y métricas.`,
  }[l]!

  return {
    title,
    description: desc,
    alternates: {
      languages: Object.fromEntries(
        locales.map(loc => [loc, `/${loc}/convert/cups-to-grams/${slug}`])
      ),
    },
  }
}

export default async function IngredientPage({ params }: { params: Promise<{ locale: string; ingredient: string }> }) {
  const { locale, ingredient: slug } = await params
  const l = locale as Locale
  const ing = getIngredientBySlug(slug)
  if (!ing) notFound()

  const table = generateConversionTable(ing)
  const metricTable = generateConversionTable(ing, 'metric')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to convert cups to grams for ${ing.names.en}`,
    step: [
      {
        '@type': 'HowToStep',
        text: `1 US cup of ${ing.names.en} = ${cupsToGrams(1, ing)}g`,
      },
      {
        '@type': 'HowToStep',
        text: `1 metric cup of ${ing.names.en} = ${cupsToGrams(1, ing, 'metric')}g`,
      },
    ],
    tool: { '@type': 'HowToTool', name: 'Kitchen scale' },
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/convert/cups-to-grams`} className="hover:text-foreground">{t(l, 'cupsToGrams')}</Link>
        {' / '}
        <span className="text-foreground">{ing.names[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">
        {t(l, 'conversionChart', { ingredient: ing.names[l] })}
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        {t(l, 'howManyGrams', { amount: '1', ingredient: ing.names[l] })}
        {' '}
        <strong className="text-foreground">{cupsToGrams(1, ing)}g</strong>
      </p>

      {/* Interactive Calculator */}
      <ConversionCalculator ingredient={ing} locale={l} />

      {/* US Cup Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {ing.names[l]} — US Cup (236ml)
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{t(l, 'cups')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'milliliters')}</th>
              </tr>
            </thead>
            <tbody>
              {table.map(row => (
                <tr key={row.cups} className="border-t">
                  <td className="px-4 py-2 font-mono">{row.cups === 0.333 ? '⅓' : row.cups === 0.667 ? '⅔' : row.cups}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{row.grams}g</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{row.ml} ml</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Metric Cup Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {ing.names[l]} — Metric Cup (250ml)
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{t(l, 'cups')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'milliliters')}</th>
              </tr>
            </thead>
            <tbody>
              {metricTable.map(row => (
                <tr key={row.cups} className="border-t">
                  <td className="px-4 py-2 font-mono">{row.cups === 0.333 ? '⅓' : row.cups === 0.667 ? '⅔' : row.cups}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{row.grams}g</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{row.ml} ml</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tablespoon / Teaspoon */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {t(l, 'tablespoons')} & {t(l, 'teaspoons')}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{t(l, 'amount')}</th>
                <th className="px-4 py-2 text-left font-medium">{t(l, 'grams')}</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(n => (
                <tr key={`tbsp-${n}`} className="border-t">
                  <td className="px-4 py-2">{n} {t(l, n === 1 ? 'tablespoon' : 'tablespoons')}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{tablespoonToGrams(n, ing)}g</td>
                </tr>
              ))}
              {[1, 2, 3, 4, 5].map(n => (
                <tr key={`tsp-${n}`} className="border-t">
                  <td className="px-4 py-2">{n} {t(l, n === 1 ? 'teaspoon' : 'teaspoons')}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{teaspoonToGrams(n, ing)}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Source */}
      <p className="text-xs text-muted-foreground mb-8">
        {t(l, 'source')} — {ing.names.en} density: {ing.density_g_per_ml} g/ml
      </p>

      {/* Editorial note for key ingredients */}
      {ing.slug === 'flour' && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-8 text-sm text-amber-900">
          <strong>{{ en: 'Why flour weight varies', it: 'Perché il peso della farina varia', de: 'Warum das Mehlgewicht schwankt', fr: 'Pourquoi le poids de la farine varie', es: 'Por qué varía el peso de la harina' }[l]}</strong>
          <p className="mt-1">{{ en: 'A cup of flour can weigh anywhere from 120g to 160g depending on how it\'s measured. Sifted flour is light and airy (~120g/cup); flour scooped directly from the bag is compacted and can reach 155–160g. For consistent baking results, always weigh flour rather than measuring by volume.', it: 'Una tazza di farina può pesare tra 120g e 160g a seconda di come viene misurata. La farina setacciata è leggera (~120g/tazza); la farina raccolta direttamente dal sacchetto è compattata e può raggiungere 155–160g. Per risultati di pasticceria costanti, pesa sempre la farina invece di misurarla per volume.', de: 'Eine Tasse Mehl kann je nach Messmethode zwischen 120g und 160g wiegen. Gesiebtes Mehl ist locker und leicht (~120g/Tasse); direkt aus dem Sack geschöpftes Mehl ist komprimiert und kann 155–160g erreichen. Für gleichmäßige Backergebnisse sollten Sie Mehl immer wiegen statt es nach Volumen zu messen.', fr: 'Une tasse de farine peut peser entre 120g et 160g selon la méthode de mesure. La farine tamisée est légère (~120g/tasse) ; la farine prélevée directement dans le sac est compactée et peut atteindre 155–160g. Pour des résultats de pâtisserie constants, pesez toujours la farine plutôt que de la mesurer en volume.', es: 'Una taza de harina puede pesar entre 120g y 160g según cómo se mida. La harina tamizada es ligera (~120g/taza); la harina recogida directamente de la bolsa está compactada y puede alcanzar 155–160g. Para resultados de repostería consistentes, siempre pesa la harina en lugar de medirla por volumen.' }[l]}</p>
        </div>
      )}
      {ing.slug === 'sugar' && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-8 text-sm text-amber-900">
          <strong>{{ en: 'Granulated vs other sugars', it: 'Zucchero semolato vs altri zuccheri', de: 'Kristallzucker vs andere Zuckersorten', fr: 'Sucre granulé vs autres sucres', es: 'Azúcar granulado vs otros azúcares' }[l]}</strong>
          <p className="mt-1">{{ en: 'Granulated sugar is one of the most consistent cup-to-gram conversions: 1 US cup = ~200g. Brown sugar varies significantly because it\'s measured packed — pressing it firmly into the cup adds weight. Powdered sugar is much lighter at ~120g/cup. Always check which type of sugar a recipe calls for before converting.', it: 'Lo zucchero semolato è una delle conversioni tazza-grammi più costanti: 1 tazza US = ~200g. Lo zucchero di canna varia significativamente perché si misura compattato — premerlo saldamente nella tazza aumenta il peso. Lo zucchero a velo è molto più leggero, circa 120g/tazza. Controlla sempre quale tipo di zucchero richiede la ricetta prima di convertire.', de: 'Kristallzucker ist eine der konstantesten Tassen-Gramm-Umrechnungen: 1 US-Tasse = ~200g. Brauner Zucker variiert erheblich, da er gepackt gemessen wird — festes Eindrücken in die Tasse erhöht das Gewicht. Puderzucker ist mit ~120g/Tasse deutlich leichter. Prüfen Sie immer, welche Zuckersorte ein Rezept verlangt, bevor Sie umrechnen.', fr: 'Le sucre granulé est l\'une des conversions tasse-grammes les plus régulières : 1 tasse US = ~200g. La cassonade varie considérablement car elle est mesurée tassée — la presser fermement dans la tasse augmente le poids. Le sucre glace est bien plus léger à ~120g/tasse. Vérifiez toujours quel type de sucre demande une recette avant de convertir.', es: 'El azúcar granulado es una de las conversiones taza-gramos más consistentes: 1 taza US = ~200g. El azúcar moreno varía considerablemente porque se mide compactado — presionarlo firmemente en la taza aumenta el peso. El azúcar glas es mucho más ligero, ~120g/taza. Siempre comprueba qué tipo de azúcar pide una receta antes de convertir.' }[l]}</p>
        </div>
      )}
      {ing.slug === 'butter' && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-8 text-sm text-amber-900">
          <strong>{{ en: 'Measuring butter by cups', it: 'Misurare il burro con le tazze', de: 'Butter mit Tassen messen', fr: 'Mesurer le beurre en tasses', es: 'Medir la mantequilla en tazas' }[l]}</strong>
          <p className="mt-1">{{ en: '1 US cup of butter = 227g = 2 sticks (US). Butter is best measured by weight or by using the markings on the wrapper. When a recipe calls for "softened" butter, pack it firmly into the measuring cup. Cold butter in chunks will leave air gaps and give inaccurate volume measurements.', it: '1 tazza US di burro = 227g = 2 panetti (US). Il burro si misura meglio per peso o usando le tacche sulla confezione. Quando una ricetta richiede burro "morbido", pressalo saldamente nella tazza dosatrice. Il burro freddo a pezzi lascia spazi d\'aria e dà misure di volume imprecise.', de: '1 US-Tasse Butter = 227g = 2 Sticks (US). Butter misst man am besten nach Gewicht oder anhand der Markierungen auf der Verpackung. Wenn ein Rezept "weiche" Butter verlangt, drücken Sie diese fest in den Messbecher. Kalte Butterstücke hinterlassen Luftlöcher und ergeben ungenaue Volumenmessungen.', fr: '1 tasse US de beurre = 227g = 2 sticks (US). Le beurre se mesure mieux par poids ou en utilisant les repères sur l\'emballage. Quand une recette demande du beurre "ramolli", tassez-le bien dans la tasse à mesurer. Le beurre froid en morceaux laisse des espaces d\'air et donne des mesures de volume imprécises.', es: '1 taza US de mantequilla = 227g = 2 barras (US). La mantequilla se mide mejor por peso o usando las marcas del envoltorio. Cuando una receta pide mantequilla "ablandada", presiónala firmemente en la taza medidora. La mantequilla fría en trozos deja huecos de aire y da medidas de volumen imprecisas.' }[l]}</p>
        </div>
      )}
      {ing.slug === 'oats' && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-8 text-sm text-amber-900">
          <strong>{{ en: 'Rolled oats vs instant oats', it: 'Fiocchi d\'avena vs avena istantanea', de: 'Haferflocken vs Instant-Haferflocken', fr: 'Flocons d\'avoine vs flocons instantanés', es: 'Copos de avena vs avena instantánea' }[l]}</strong>
          <p className="mt-1">{{ en: 'Rolled oats (old-fashioned oats) weigh about 80–90g per cup. Instant oats are more finely cut and pack more densely, weighing up to 100g per cup. Steel-cut oats are heavier still at around 160–180g/cup. This chart uses rolled oats — adjust for your oat type.', it: 'I fiocchi d\'avena classici pesano circa 80–90g per tazza. L\'avena istantanea è tagliata più finemente e si compatta di più, pesando fino a 100g per tazza. L\'avena steel-cut è ancora più pesante, circa 160–180g/tazza. Questa tabella usa fiocchi d\'avena classici — adatta in base al tipo che usi.', de: 'Haferflocken (Großblatt) wiegen etwa 80–90g pro Tasse. Instant-Haferflocken sind feiner geschnitten und verdichten sich stärker, bis zu 100g pro Tasse. Stahlgeschnittene Haferflocken sind mit ca. 160–180g/Tasse noch schwerer. Diese Tabelle verwendet Haferflocken — passen Sie je nach Ihrem Haferflockentyp an.', fr: 'Les flocons d\'avoine classiques pèsent environ 80–90g par tasse. Les flocons instantanés sont coupés plus finement et se tassent plus, jusqu\'à 100g par tasse. L\'avoine en grains est encore plus lourde à environ 160–180g/tasse. Ce tableau utilise les flocons classiques — ajustez selon votre type d\'avoine.', es: 'Los copos de avena tradicionales pesan unos 80–90g por taza. La avena instantánea está cortada más finamente y se compacta más, hasta 100g por taza. La avena steel-cut es aún más pesada, unos 160–180g/taza. Esta tabla usa copos de avena tradicionales — ajusta según tu tipo de avena.' }[l]}</p>
        </div>
      )}
      {ing.slug === 'chocolate-chips' && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-8 text-sm text-amber-900">
          <strong>{{ en: 'Chocolate chip measurement tips', it: 'Consigli per misurare le gocce di cioccolato', de: 'Tipps zum Messen von Schokoladenstückchen', fr: 'Conseils pour mesurer les pépites de chocolat', es: 'Consejos para medir chips de chocolate' }[l]}</strong>
          <p className="mt-1">{{ en: 'Chocolate chips fill a cup inconsistently due to their irregular shape — they leave air gaps. Standard semi-sweet chips weigh around 170g per cup (6 oz). Mini chips pack more tightly at ~190g/cup; chopped chocolate can vary widely. For baking precision, always weigh chocolate rather than measuring by cup.', it: 'Le gocce di cioccolato riempiono una tazza in modo non uniforme a causa della loro forma irregolare — lasciano spazi d\'aria. Le gocce standard semi-dolci pesano circa 170g per tazza (6 oz). Le mini gocce si compattano di più, ~190g/tazza; il cioccolato tritato può variare notevolmente. Per precisione in pasticceria, pesa sempre il cioccolato invece di misurarlo per tazza.', de: 'Schokoladenstückchen füllen eine Tasse ungleichmäßig auf, da sie Luftlücken hinterlassen. Standard-Halbbittertropfen wiegen etwa 170g pro Tasse (6 oz). Mini-Chips packen sich dichter bei ~190g/Tasse; gehackte Schokolade kann stark variieren. Für präzises Backen wiegen Sie Schokolade immer ab.', fr: 'Les pépites de chocolat remplissent une tasse de façon irrégulière en raison de leur forme — elles laissent des espaces d\'air. Les pépites standard mi-sucrées pèsent environ 170g par tasse (6 oz). Les mini pépites se tassent plus à ~190g/tasse ; le chocolat haché peut varier considérablement. Pour une pâtisserie précise, pesez toujours le chocolat.', es: 'Los chips de chocolate llenan una taza de forma inconsistente debido a su forma irregular — dejan huecos de aire. Los chips estándar semidulces pesan unos 170g por taza (6 oz). Los mini chips se compactan más, ~190g/taza; el chocolate picado puede variar mucho. Para precisión en repostería, siempre pesa el chocolate.' }[l]}</p>
        </div>
      )}

      {/* Related conversions for this ingredient */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/grams-to-cups/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'gramsToCups')} — {ing.names[l]}
          </Link>
          <Link href={`/${locale}/convert/tablespoons-to-grams/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'tablespoonsToGrams')} — {ing.names[l]}
          </Link>
          <Link href={`/${locale}/convert/teaspoons-to-grams/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'teaspoonsToGrams')} — {ing.names[l]}
          </Link>
          <Link href={`/${locale}/convert/oz-to-grams/${slug}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'ouncesToGrams')} — {ing.names[l]}
          </Link>
        </div>
      </section>

      {/* Other ingredients */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'otherIngredients')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {INGREDIENTS.filter(i => i.slug !== slug).map(other => (
            <Link
              key={other.slug}
              href={`/${locale}/convert/cups-to-grams/${other.slug}`}
              className="rounded border px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              {other.names[l]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

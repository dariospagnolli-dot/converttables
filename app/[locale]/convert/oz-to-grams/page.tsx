import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { ozToGrams } from '@/lib/conversions/cooking'

const desc: Record<Locale, string> = {
  en: 'Convert ounces to grams for any cooking ingredient. Quick reference chart: 1 oz = 28.35g.',
  it: 'Converti once in grammi per ogni ingrediente da cucina. Tabella rapida: 1 oncia = 28,35g.',
  de: 'Unzen in Gramm umrechnen für jede Küchenzutat. Schnellreferenz: 1 Unze = 28,35g.',
  fr: 'Convertir des onces en grammes pour tout ingrédient de cuisine. 1 oz = 28,35g.',
  es: 'Convierte onzas a gramos para cualquier ingrediente. Tabla rápida: 1 oz = 28,35g.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: t(l, 'ouncesToGrams'), description: desc[l] }
}

export default async function OzToGramsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const categories = [...new Set(INGREDIENTS.map(i => i.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'ouncesToGrams')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{t(l, 'ouncesToGrams')}</h1>
      <p className="text-muted-foreground mb-4">{desc[l]}</p>

      <div className="prose prose-sm max-w-none text-muted-foreground mb-6 space-y-3">
        <p>
          {{
            en: 'One ounce equals exactly 28.3495 grams — a fixed conversion that never changes regardless of the ingredient. Unlike cups-to-grams (which depends on density), ounces already measure weight, so the math is always the same: multiply ounces by 28.35.',
            it: 'Un\'oncia equivale esattamente a 28,3495 grammi — una conversione fissa che non cambia mai indipendentemente dall\'ingrediente. A differenza delle tazze in grammi (che dipende dalla densità), le once misurano già il peso, quindi il calcolo è sempre lo stesso: moltiplica le once per 28,35.',
            de: 'Eine Unze entspricht genau 28,3495 Gramm — eine feste Umrechnung, die sich unabhängig von der Zutat nie ändert. Im Gegensatz zur Tassen-Gramm-Umrechnung (die von der Dichte abhängt) messen Unzen bereits Gewicht, sodass die Rechnung immer gleich ist: Unzen mal 28,35.',
            fr: 'Une once équivaut exactement à 28,3495 grammes — une conversion fixe qui ne change jamais quelle que soit l\'ingrédient. Contrairement à la conversion tasses-grammes (qui dépend de la densité), les onces mesurent déjà un poids, donc le calcul est toujours le même : multiplier les onces par 28,35.',
            es: 'Una onza equivale exactamente a 28,3495 gramos — una conversión fija que nunca cambia independientemente del ingrediente. A diferencia de la conversión tazas-gramos (que depende de la densidad), las onzas ya miden peso, por lo que el cálculo es siempre el mismo: multiplicar las onzas por 28,35.',
          }[l]}
        </p>
        <p>
          {{
            en: 'American recipes frequently use ounces (oz) for both weight and volume — be careful not to confuse weight ounces (oz) with fluid ounces (fl oz). The pages below deal with weight ounces only. For ingredient-specific charts showing how ounces compare to cups and grams, select an ingredient.',
            it: 'Le ricette americane usano spesso le once (oz) sia per il peso che per il volume — attenzione a non confondere le once di peso (oz) con le once fluide (fl oz). Le pagine qui sotto riguardano solo le once di peso. Per tabelle specifiche per ingrediente che mostrano come le once si confrontano con tazze e grammi, seleziona un ingrediente.',
            de: 'Amerikanische Rezepte verwenden häufig Unzen (oz) sowohl für Gewicht als auch für Volumen — Verwechslungsgefahr: Gewichtsunzen (oz) sind nicht dasselbe wie Flüssigkeitsunzen (fl oz). Die folgenden Seiten behandeln nur Gewichtsunzen. Für zutatenspezifische Tabellen, die zeigen wie Unzen im Vergleich zu Tassen und Gramm aussehen, wählen Sie eine Zutat.',
            fr: 'Les recettes américaines utilisent souvent les onces (oz) pour le poids et le volume — attention à ne pas confondre les onces de poids (oz) avec les onces liquides (fl oz). Les pages ci-dessous concernent uniquement les onces de poids. Pour des tableaux par ingrédient comparant onces, tasses et grammes, sélectionnez un ingrédient.',
            es: 'Las recetas americanas usan con frecuencia onzas (oz) tanto para peso como para volumen — cuidado con no confundir las onzas de peso (oz) con las onzas líquidas (fl oz). Las páginas de abajo tratan solo onzas de peso. Para tablas por ingrediente que muestran cómo se comparan las onzas con tazas y gramos, selecciona un ingrediente.',
          }[l]}
        </p>
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        1 oz = {ozToGrams(1)}g · 2 oz = {ozToGrams(2)}g · 4 oz = {ozToGrams(4)}g · 8 oz = {ozToGrams(8)}g · 16 oz = {ozToGrams(16)}g
      </p>

      {categories.map(cat => {
        const items = INGREDIENTS.filter(i => i.category === cat)
        return (
          <section key={cat} className="mb-8">
            <h2 className="text-lg font-semibold mb-3 capitalize">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(ing => (
                <Link
                  key={ing.slug}
                  href={`/${locale}/convert/oz-to-grams/${ing.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <span className="font-medium">{ing.names[l]}</span>
                  <span className="text-sm text-muted-foreground font-mono">4 oz = {ozToGrams(4)}g</span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

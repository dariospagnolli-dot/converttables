import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

const content: Record<Locale, {
  title: string; desc: string; h2grams: string; h2cups: string; h2tbsp: string
  sticks: string; grams: string; cups: string; tbsp: string; oz: string; ml: string
}> = {
  en: {
    title: '1 Stick of Butter in Grams, Cups & Tablespoons',
    desc: 'How much is a stick of butter? 1 US stick = 113g = ½ cup = 8 tablespoons. Complete conversion chart.',
    h2grams: 'Sticks of Butter to Grams', h2cups: 'Sticks of Butter to Cups', h2tbsp: 'Sticks of Butter to Tablespoons',
    sticks: 'Sticks', grams: 'Grams', cups: 'Cups', tbsp: 'Tablespoons', oz: 'Ounces', ml: 'ml',
  },
  it: {
    title: '1 Panetto di Burro in Grammi, Tazze e Cucchiai',
    desc: 'Quanto è un panetto di burro americano? 1 stick = 113g = ½ tazza = 8 cucchiai. Tabella completa.',
    h2grams: 'Panetti in Grammi', h2cups: 'Panetti in Tazze', h2tbsp: 'Panetti in Cucchiai',
    sticks: 'Panetti', grams: 'Grammi', cups: 'Tazze', tbsp: 'Cucchiai', oz: 'Once', ml: 'ml',
  },
  de: {
    title: '1 Butterstück in Gramm, Tassen & Esslöffel',
    desc: 'Wie viel ist ein Butterstück? 1 US-Stick = 113g = ½ Tasse = 8 Esslöffel. Vollständige Tabelle.',
    h2grams: 'Butterstücke in Gramm', h2cups: 'Butterstücke in Tassen', h2tbsp: 'Butterstücke in Esslöffel',
    sticks: 'Stücke', grams: 'Gramm', cups: 'Tassen', tbsp: 'Esslöffel', oz: 'Unzen', ml: 'ml',
  },
  fr: {
    title: '1 bâtonnet de beurre en grammes, tasses & cuillères',
    desc: 'Combien pèse un bâtonnet de beurre ? 1 stick US = 113g = ½ tasse = 8 c. à soupe. Tableau complet.',
    h2grams: 'Bâtonnets en grammes', h2cups: 'Bâtonnets en tasses', h2tbsp: 'Bâtonnets en cuillères à soupe',
    sticks: 'Bâtonnets', grams: 'Grammes', cups: 'Tasses', tbsp: 'Cuillères à soupe', oz: 'Onces', ml: 'ml',
  },
  es: {
    title: '1 barra de mantequilla en gramos, tazas y cucharadas',
    desc: '¿Cuánto es una barra de mantequilla? 1 stick = 113g = ½ taza = 8 cucharadas. Tabla completa.',
    h2grams: 'Barras en gramos', h2cups: 'Barras en tazas', h2tbsp: 'Barras en cucharadas',
    sticks: 'Barras', grams: 'Gramos', cups: 'Tazas', tbsp: 'Cucharadas', oz: 'Onzas', ml: 'ml',
  },
}

// 1 US stick = 113.398g = 0.5 cups = 8 tbsp = 4 fl oz = 118.294ml (liquid volume of butter)
// Butter density 0.911 g/ml → 113.398g / 0.911 = 124.5ml but stick is defined by weight, not volume.
// Standard: 1 stick = 1/2 cup (US) = 113g = 8 tbsp
const STICK_G = 113.4
const STICK_CUPS = 0.5
const STICK_TBSP = 8
const STICK_OZ = 4

const stickRows = [
  { label: '¼', n: 0.25 },
  { label: '⅓', n: 1 / 3 },
  { label: '½', n: 0.5 },
  { label: '¾', n: 0.75 },
  { label: '1', n: 1 },
  { label: '1½', n: 1.5 },
  { label: '2', n: 2 },
  { label: '3', n: 3 },
  { label: '4', n: 4 },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: content[l].title,
    description: content[l].desc,
    alternates: {
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/stick-of-butter`])),
    },
  }
}

function fmt(n: number, decimals = 1) {
  const r = Math.round(n * 10) / 10
  return r % 1 === 0 ? String(r) : r.toFixed(decimals)
}
function fmtCups(n: number) {
  const v = n * STICK_CUPS
  if (v === 0.25) return '¼'
  if (v === 0.333 || Math.abs(v - 1 / 3) < 0.001) return '⅓'
  if (v === 0.5) return '½'
  if (v === 0.75) return '¾'
  if (v === 1) return '1'
  if (v === 1.5) return '1½'
  return fmt(v)
}

export default async function StickOfButterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const c = content[l]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to convert sticks of butter',
    step: [
      { '@type': 'HowToStep', text: '1 stick of butter = 113g' },
      { '@type': 'HowToStep', text: '1 stick of butter = ½ cup' },
      { '@type': 'HowToStep', text: '1 stick of butter = 8 tablespoons' },
    ],
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'stickOfButter')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{c.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{c.desc}</p>

      {/* Quick reference cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="rounded-lg border p-4 text-center bg-emerald-50 border-emerald-200">
          <div className="text-sm text-emerald-700 mb-1">1 stick</div>
          <div className="text-3xl font-bold font-mono text-emerald-800">113g</div>
        </div>
        <div className="rounded-lg border p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">1 stick</div>
          <div className="text-3xl font-bold font-mono">½ cup</div>
        </div>
        <div className="rounded-lg border p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">1 stick</div>
          <div className="text-3xl font-bold font-mono">8 tbsp</div>
        </div>
        <div className="rounded-lg border p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">1 stick</div>
          <div className="text-3xl font-bold font-mono">4 oz</div>
        </div>
      </div>

      {/* Combined conversion table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{c.h2grams}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{c.sticks}</th>
                <th className="px-4 py-2 text-left font-medium">{c.grams}</th>
                <th className="px-4 py-2 text-left font-medium">{c.cups}</th>
                <th className="px-4 py-2 text-left font-medium">{c.tbsp}</th>
                <th className="px-4 py-2 text-left font-medium">{c.oz}</th>
              </tr>
            </thead>
            <tbody>
              {stickRows.map(({ label, n }) => (
                <tr key={label} className="border-t">
                  <td className="px-4 py-2 font-mono">{label}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{Math.round(n * STICK_G)}g</td>
                  <td className="px-4 py-2 font-mono">{fmtCups(n)}</td>
                  <td className="px-4 py-2 font-mono">{fmt(n * STICK_TBSP)}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{fmt(n * STICK_OZ)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Note */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-10 text-sm text-amber-800">
        <strong>Note:</strong> 1 US stick = 113.4g = ½ cup = 8 tbsp = 4 oz. European butter is sold in 250g blocks — 1 block ≈ 2.2 sticks.
      </div>

      {/* Related links */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/convert/cups-to-grams/butter`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'cupsToGrams')} — {{ en: 'Butter', it: 'Burro', de: 'Butter', fr: 'Beurre', es: 'Mantequilla' }[l]}
          </Link>
          <Link href={`/${locale}/convert/tablespoons-to-grams/butter`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'tablespoonsToGrams')} — {{ en: 'Butter', it: 'Burro', de: 'Butter', fr: 'Beurre', es: 'Mantequilla' }[l]}
          </Link>
          <Link href={`/${locale}/convert/grams-to-cups/butter`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'gramsToCups')} — {{ en: 'Butter', it: 'Burro', de: 'Butter', fr: 'Beurre', es: 'Mantequilla' }[l]}
          </Link>
        </div>
      </section>
    </div>
  )
}

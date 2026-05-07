import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

// Supported slugs: "1"-"12", "1-20", "1-100"
const SINGLE_NUMBERS = Array.from({ length: 12 }, (_, i) => i + 1)

export function generateStaticParams() {
  const singles = locales.flatMap(locale =>
    SINGLE_NUMBERS.map(n => ({ locale, n: String(n) }))
  )
  const extended = locales.flatMap(locale =>
    ['1-20', '1-100'].map(n => ({ locale, n }))
  )
  return [...singles, ...extended]
}

function parseN(slug: string): { type: 'single'; n: number } | { type: 'range'; max: number } | null {
  if (slug === '1-20') return { type: 'range', max: 20 }
  if (slug === '1-100') return { type: 'range', max: 100 }
  const n = parseInt(slug, 10)
  if (!isNaN(n) && n >= 1 && n <= 12) return { type: 'single', n }
  return null
}

const timesTableLabel: Record<Locale, (n: number | string) => string> = {
  en: n => `${n} Times Table`,
  it: n => `Tabellina del ${n}`,
  de: n => `${n}er Einmaleins`,
  fr: n => `Table de ${n}`,
  es: n => `Tabla del ${n}`,
}
const rangeLabel: Record<Locale, (max: number) => string> = {
  en: max => `Multiplication Table 1 to ${max}`,
  it: max => `Tavola Pitagorica da 1 a ${max}`,
  de: max => `Einmaleins 1 bis ${max}`,
  fr: max => `Table de multiplication de 1 à ${max}`,
  es: max => `Tabla de multiplicar del 1 al ${max}`,
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; n: string }> }): Promise<Metadata> {
  const { locale, n: slug } = await params
  const l = locale as Locale
  const parsed = parseN(slug)
  if (!parsed) return {}

  if (parsed.type === 'single') {
    const n = parsed.n
    const title = timesTableLabel[l](n)
    const desc: Record<Locale, string> = {
      en: `${n} times table up to ${n}×20. Printable ${n}× chart: ${n}×1=${n}, ${n}×2=${n * 2}, ${n}×5=${n * 5}, ${n}×10=${n * 10}.`,
      it: `Tabellina del ${n} fino a ${n}×20. ${n}×1=${n}, ${n}×2=${n * 2}, ${n}×5=${n * 5}, ${n}×10=${n * 10}.`,
      de: `${n}er Einmaleins bis ${n}×20. ${n}×1=${n}, ${n}×2=${n * 2}, ${n}×5=${n * 5}, ${n}×10=${n * 10}.`,
      fr: `Table de ${n} jusqu'à ${n}×20. ${n}×1=${n}, ${n}×2=${n * 2}, ${n}×5=${n * 5}, ${n}×10=${n * 10}.`,
      es: `Tabla del ${n} hasta ${n}×20. ${n}×1=${n}, ${n}×2=${n * 2}, ${n}×5=${n * 5}, ${n}×10=${n * 10}.`,
    }
    return {
      title,
      description: desc[l],
      alternates: { languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/tables/multiplication/${slug}`])) },
    }
  } else {
    const title = rangeLabel[l](parsed.max)
    return {
      title,
      description: { en: `Complete multiplication table 1 to ${parsed.max}. Printable chart.`, it: `Tavola pitagorica completa da 1 a ${parsed.max}. Stampabile.`, de: `Vollständiges Einmaleins 1 bis ${parsed.max}.`, fr: `Table de multiplication complète de 1 à ${parsed.max}.`, es: `Tabla de multiplicar completa del 1 al ${parsed.max}.` }[l],
      alternates: { languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/tables/multiplication/${slug}`])) },
    }
  }
}

export default async function MultiplicationNPage({ params }: { params: Promise<{ locale: string; n: string }> }) {
  const { locale, n: slug } = await params
  const l = locale as Locale
  const parsed = parseN(slug)
  if (!parsed) notFound()

  if (parsed.type === 'range') {
    const max = parsed.max
    const numbers = Array.from({ length: max }, (_, i) => i + 1)
    const title = rangeLabel[l](max)

    return (
      <div className="mx-auto max-w-5xl px-4 py-10">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
          {' / '}
          <Link href={`/${locale}/tables/multiplication`} className="hover:text-foreground">{t(l, 'multiplicationTable')}</Link>
          {' / '}
          <span className="text-foreground">1–{max}</span>
        </nav>

        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        {max === 20 ? (
          <div className="overflow-x-auto rounded-lg border mb-10">
            <table className="text-xs">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-2 py-1.5 font-bold border-r">×</th>
                  {numbers.map(n => <th key={n} className="px-2 py-1.5 font-bold text-center min-w-[28px]">{n}</th>)}
                </tr>
              </thead>
              <tbody>
                {numbers.map(row => (
                  <tr key={row} className="border-t">
                    <td className="px-2 py-1.5 font-bold text-center bg-muted/50 border-r">{row}</td>
                    {numbers.map(col => (
                      <td key={col} className="px-2 py-1.5 text-center font-mono">{row * col}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // 1-100: render as cards grouped by number
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {numbers.map(n => (
              <div key={n} className="rounded-lg border p-3">
                <div className="font-bold mb-1 text-sm">{n} ×</div>
                <div className="text-xs font-mono text-muted-foreground space-y-0.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(m => (
                    <div key={m}>{n}×{m}={n * m}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Link href={`/${locale}/tables/multiplication`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {t(l, 'multiplicationTable')}
          </Link>
          {max === 100 && (
            <Link href={`/${locale}/tables/multiplication/1-20`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
              {rangeLabel[l](20)}
            </Link>
          )}
        </div>
      </div>
    )
  }

  // Single number
  const n = parsed.n
  const upTo20 = Array.from({ length: 20 }, (_, i) => i + 1)
  const title = timesTableLabel[l](n)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: upTo20.map(m => ({ '@type': 'HowToStep', text: `${n} × ${m} = ${n * m}` })),
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/tables/multiplication`} className="hover:text-foreground">{t(l, 'multiplicationTable')}</Link>
        {' / '}
        <span className="text-foreground">{n}×</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {/* Quick reference: 1-10 */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        {Array.from({ length: 10 }, (_, i) => i + 1).map(m => (
          <div key={m} className="rounded-lg border p-3 text-center">
            <div className="text-xs text-muted-foreground">{n} × {m}</div>
            <div className="text-2xl font-bold font-mono text-emerald-700">{n * m}</div>
          </div>
        ))}
      </div>

      {/* Full table up to ×20 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: `${n} × 1 to ${n} × 20`, it: `${n} × 1 fino a ${n} × 20`, de: `${n} × 1 bis ${n} × 20`, fr: `${n} × 1 à ${n} × 20`, es: `${n} × 1 a ${n} × 20` }[l]}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">×</th>
                <th className="px-4 py-2 text-left font-medium">=</th>
              </tr>
            </thead>
            <tbody>
              {upTo20.map(m => (
                <tr key={m} className={`border-t ${m === 10 || m === 12 ? 'bg-emerald-50/50' : ''}`}>
                  <td className="px-4 py-2 font-mono">{n} × {m}</td>
                  <td className="px-4 py-2 font-mono font-bold text-lg">{n * m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation between numbers */}
      <div className="flex flex-wrap gap-2 mb-6">
        {n > 1 && (
          <Link href={`/${locale}/tables/multiplication/${n - 1}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            ← {timesTableLabel[l](n - 1)}
          </Link>
        )}
        {n < 12 && (
          <Link href={`/${locale}/tables/multiplication/${n + 1}`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
            {timesTableLabel[l](n + 1)} →
          </Link>
        )}
      </div>

      {/* All times tables */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'All Times Tables', it: 'Tutte le Tabelline', de: 'Alle Einmaleins', fr: 'Toutes les tables', es: 'Todas las tablas' }[l]}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {SINGLE_NUMBERS.map(num => (
            <Link
              key={num}
              href={`/${locale}/tables/multiplication/${num}`}
              className={`rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors ${num === n ? 'bg-emerald-50 border-emerald-300 font-bold' : ''}`}
            >
              {timesTableLabel[l](num)}
            </Link>
          ))}
          <Link href={`/${locale}/tables/multiplication/1-20`} className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors">
            1–20
          </Link>
          <Link href={`/${locale}/tables/multiplication/1-100`} className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors">
            1–100
          </Link>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { generateLog10Table } from '@/lib/tables/math'

const titles = { en: 'Logarithm Table (log₁₀ & ln)', it: 'Tabella Logaritmi (log₁₀ e ln)', de: 'Logarithmentafel (log₁₀ & ln)', fr: 'Table de logarithmes (log₁₀ & ln)', es: 'Tabla de logaritmos (log₁₀ y ln)' }
const descs = {
  en: 'Complete logarithm table: common logarithm (log base 10) and natural logarithm (ln) from 1 to 1000.',
  it: 'Tabella logaritmi completa: logaritmo comune (log base 10) e logaritmo naturale (ln) da 1 a 1000.',
  de: 'Vollständige Logarithmentafel: dekadischer Logarithmus (log Basis 10) und natürlicher Logarithmus (ln) von 1 bis 1000.',
  fr: 'Table de logarithmes complète : logarithme décimal (log base 10) et logarithme naturel (ln) de 1 à 1000.',
  es: 'Tabla de logaritmos completa: logaritmo común (log base 10) y logaritmo natural (ln) de 1 a 1000.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: titles[l], description: descs[l] }
}

export default async function LogarithmPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const ranges = [
    { from: 1, to: 10, step: 1, label: '1–10' },
    { from: 1, to: 10, step: 0.1, label: '1.0–10.0 (0.1)' },
    { from: 10, to: 100, step: 1, label: '10–100' },
    { from: 100, to: 1000, step: 10, label: '100–1000' },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{titles[l]}</h1>

      {/* Key values */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Valori chiave' : 'Key Values'}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: 'e', log10: '0.4343', ln: '1' },
            { n: '10', log10: '1', ln: '2.3026' },
            { n: '100', log10: '2', ln: '4.6052' },
            { n: '1000', log10: '3', ln: '6.9078' },
          ].map(item => (
            <div key={item.n} className="rounded-lg border p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">n = {item.n}</div>
              <div className="font-mono text-sm">log₁₀ = {item.log10}</div>
              <div className="font-mono text-sm">ln = {item.ln}</div>
            </div>
          ))}
        </div>
      </section>

      {ranges.map(range => {
        const data = generateLog10Table(range.from, range.to, range.step)
        return (
          <section key={range.label} className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              {l === 'it' ? 'Logaritmi' : 'Logarithms'} {range.label}
            </h2>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-2 text-left font-medium">n</th>
                    <th className="px-4 py-2 text-left font-medium">log₁₀(n)</th>
                    <th className="px-4 py-2 text-left font-medium">ln(n)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(row => (
                    <tr key={row.n} className="border-t">
                      <td className="px-4 py-2 font-mono font-semibold">{row.n}</td>
                      <td className="px-4 py-2 font-mono">{row.log10}</td>
                      <td className="px-4 py-2 font-mono">{row.ln}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )
      })}
    </div>
  )
}

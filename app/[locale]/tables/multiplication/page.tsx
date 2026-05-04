import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { generateMultiplicationTable } from '@/lib/tables/math'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'multiplicationTable'),
    description: l === 'it'
      ? 'Tavola pitagorica completa da 1 a 12. Tabella di moltiplicazione stampabile.'
      : 'Complete multiplication table from 1 to 12. Printable times table chart.',
  }
}

export default async function MultiplicationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const table = generateMultiplicationTable(12)
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t(l, 'multiplicationTable')}</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-3 py-2 font-bold text-center border-r">×</th>
              {numbers.map(n => (
                <th key={n} className="px-3 py-2 font-bold text-center min-w-[48px]">{n}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="px-3 py-2 font-bold text-center bg-muted/50 border-r">{i + 1}</td>
                {row.map((val, j) => (
                  <td key={j} className="px-3 py-2 text-center font-mono">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {numbers.map(n => (
          <div key={n} className="rounded-lg border p-4">
            <h2 className="font-semibold mb-2">{n} ×</h2>
            <div className="space-y-0.5 text-sm font-mono text-muted-foreground">
              {numbers.map(m => (
                <div key={m}>{n} × {m} = {n * m}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

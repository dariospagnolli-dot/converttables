import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { generateRomanNumeralTable } from '@/lib/tables/math'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'romanNumeralsTable'),
    description: l === 'it'
      ? 'Tabella completa dei numeri romani da 1 a 3999. Converti numeri arabi in numeri romani.'
      : 'Complete Roman numerals table from 1 to 3999. Convert Arabic numbers to Roman numerals.',
  }
}

export default async function RomanNumeralsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const ranges = [
    { from: 1, to: 100, label: '1–100' },
    { from: 101, to: 200, label: '101–200' },
    { from: 201, to: 300, label: '201–300' },
    { from: 301, to: 500, label: '301–500' },
    { from: 501, to: 1000, label: '501–1000' },
    { from: 1001, to: 2000, label: '1001–2000' },
    { from: 2001, to: 3999, label: '2001–3999' },
  ]

  const keyNumbers = [
    { arabic: 1, roman: 'I' },
    { arabic: 5, roman: 'V' },
    { arabic: 10, roman: 'X' },
    { arabic: 50, roman: 'L' },
    { arabic: 100, roman: 'C' },
    { arabic: 500, roman: 'D' },
    { arabic: 1000, roman: 'M' },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t(l, 'romanNumeralsTable')}</h1>

      {/* Key symbols */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'quickReference')}</h2>
        <div className="flex flex-wrap gap-3">
          {keyNumbers.map(({ arabic, roman }) => (
            <div key={arabic} className="rounded-lg border px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-bold font-mono">{roman}</div>
              <div className="text-sm text-muted-foreground">{arabic}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tables by range */}
      {ranges.map(range => {
        const data = generateRomanNumeralTable(range.from, range.to)
        return (
          <section key={range.label} className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              {t(l, 'romanNumerals')} {range.label}
            </h2>
            <div className="overflow-x-auto rounded-lg border">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-sm">
                {data.map(({ arabic, roman }) => (
                  <div key={arabic} className="flex justify-between px-3 py-1.5 border-b border-r">
                    <span className="text-muted-foreground">{arabic}</span>
                    <span className="font-mono font-semibold">{roman}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

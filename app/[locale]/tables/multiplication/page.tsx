import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { generateMultiplicationTable } from '@/lib/tables/math'

const SINGLE_NUMBERS = Array.from({ length: 12 }, (_, i) => i + 1)

const timesTableLabel: Record<Locale, (n: number) => string> = {
  en: n => `${n} Times Table`,
  it: n => `Tabellina del ${n}`,
  de: n => `${n}er Einmaleins`,
  fr: n => `Table de ${n}`,
  es: n => `Tabla del ${n}`,
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'multiplicationTable'),
    description: {
      en: 'Complete multiplication table from 1 to 12. Printable times table chart.',
      it: 'Tavola pitagorica completa da 1 a 12. Tabella di moltiplicazione stampabile.',
      de: 'Vollständiges Einmaleins von 1 bis 12. Druckbare Multiplikationstabelle.',
      fr: 'Table de multiplication complète de 1 à 12. Tableau imprimable.',
      es: 'Tabla de multiplicar completa del 1 al 12. Tabla imprimible.',
    }[l],
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
                <th key={n} className="px-1.5 sm:px-3 py-2 font-bold text-center min-w-[32px] sm:min-w-[48px]">{n}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="px-1.5 sm:px-3 py-2 font-bold text-center bg-muted/50 border-r">{i + 1}</td>
                {row.map((val, j) => (
                  <td key={j} className="px-1.5 sm:px-3 py-2 text-center font-mono">{val}</td>
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

      {/* Links to individual times tables */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Individual Times Tables', it: 'Tabelline Singole', de: 'Einzelne Einmaleins-Tabellen', fr: 'Tables individuelles', es: 'Tablas individuales' }[l]}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {SINGLE_NUMBERS.map(n => (
            <Link
              key={n}
              href={`/${locale}/tables/multiplication/${n}`}
              className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors"
            >
              {timesTableLabel[l](n)}
            </Link>
          ))}
          <Link href={`/${locale}/tables/multiplication/1-20`} className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors">
            {{ en: 'Table 1–20', it: 'Tavola 1–20', de: 'Einmaleins 1–20', fr: 'Table 1–20', es: 'Tabla 1–20' }[l]}
          </Link>
          <Link href={`/${locale}/tables/multiplication/1-100`} className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors">
            {{ en: 'Table 1–100', it: 'Tavola 1–100', de: 'Einmaleins 1–100', fr: 'Table 1–100', es: 'Tabla 1–100' }[l]}
          </Link>
        </div>
      </section>
    </div>
  )
}

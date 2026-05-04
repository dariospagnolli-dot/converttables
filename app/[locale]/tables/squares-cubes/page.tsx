import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { generateSquaresCubesTable } from '@/lib/tables/math'

const titles = { en: 'Squares & Cubes Table', it: 'Tabella Quadrati e Cubi' }
const descs = {
  en: 'Complete table of squares (n²) and cubes (n³) from 1 to 100.',
  it: 'Tabella completa di quadrati (n²) e cubi (n³) da 1 a 100.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: titles[l], description: descs[l] }
}

export default async function SquaresCubesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const data = generateSquaresCubesTable(1, 100)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{titles[l]}</h1>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">n</th>
              <th className="px-4 py-2 text-left font-medium">n²</th>
              <th className="px-4 py-2 text-left font-medium">n³</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.n} className="border-t">
                <td className="px-4 py-2 font-mono font-semibold">{row.n}</td>
                <td className="px-4 py-2 font-mono">{row.square.toLocaleString()}</td>
                <td className="px-4 py-2 font-mono">{row.cube.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

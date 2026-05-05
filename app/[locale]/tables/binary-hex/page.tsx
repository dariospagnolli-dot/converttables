import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { generateNumberSystemTable } from '@/lib/tables/math'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'binaryHex'),
    description: {
      en: 'Decimal, binary and hexadecimal conversion table from 0 to 255.',
      it: 'Tabella di conversione decimale, binario ed esadecimale da 0 a 255.',
      de: 'Dezimal-, Binär- und Hexadezimal-Umrechnungstabelle von 0 bis 255.',
      fr: 'Table de conversion décimal, binaire et hexadécimal de 0 à 255.',
      es: 'Tabla de conversión decimal, binario y hexadecimal de 0 a 255.',
    }[l],
  }
}

export default async function BinaryHexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const ranges = [
    { from: 0, to: 15, label: '0–15' },
    { from: 16, to: 63, label: '16–63' },
    { from: 64, to: 127, label: '64–127' },
    { from: 128, to: 255, label: '128–255' },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t(l, 'binaryHex')}</h1>

      {ranges.map(range => {
        const data = generateNumberSystemTable(range.from, range.to)
        return (
          <section key={range.label} className="mb-10">
            <h2 className="text-xl font-semibold mb-4">{range.label}</h2>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-2 text-left font-medium">{t(l, 'decimal')}</th>
                    <th className="px-4 py-2 text-left font-medium">{t(l, 'binary')}</th>
                    <th className="px-4 py-2 text-left font-medium">{t(l, 'hexadecimal')}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(row => (
                    <tr key={row.decimal} className="border-t">
                      <td className="px-4 py-2 font-mono">{row.decimal}</td>
                      <td className="px-4 py-2 font-mono">{row.binary}</td>
                      <td className="px-4 py-2 font-mono font-semibold">{row.hex}</td>
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

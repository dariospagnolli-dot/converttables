import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Shoe Size Conversion Chart — US, EU, UK', it: 'Tabella Conversione Taglie Scarpe — US, EU, UK' }
const descs = {
  en: 'Shoe size conversion chart: US, EU, UK sizes for men, women, and children. Find your shoe size in any system.',
  it: 'Tabella conversione taglie scarpe: taglie US, EU, UK per uomo, donna e bambini.',
}

const MEN_SIZES = [
  { us: 6, eu: 39, uk: 5.5, cm: 24.0 },
  { us: 6.5, eu: 39.5, uk: 6, cm: 24.5 },
  { us: 7, eu: 40, uk: 6.5, cm: 25.0 },
  { us: 7.5, eu: 40.5, uk: 7, cm: 25.5 },
  { us: 8, eu: 41, uk: 7.5, cm: 26.0 },
  { us: 8.5, eu: 42, uk: 8, cm: 26.5 },
  { us: 9, eu: 42.5, uk: 8.5, cm: 27.0 },
  { us: 9.5, eu: 43, uk: 9, cm: 27.5 },
  { us: 10, eu: 44, uk: 9.5, cm: 28.0 },
  { us: 10.5, eu: 44.5, uk: 10, cm: 28.5 },
  { us: 11, eu: 45, uk: 10.5, cm: 29.0 },
  { us: 11.5, eu: 45.5, uk: 11, cm: 29.5 },
  { us: 12, eu: 46, uk: 11.5, cm: 30.0 },
  { us: 13, eu: 47, uk: 12.5, cm: 31.0 },
  { us: 14, eu: 48, uk: 13.5, cm: 32.0 },
]

const WOMEN_SIZES = [
  { us: 5, eu: 35.5, uk: 2.5, cm: 22.0 },
  { us: 5.5, eu: 36, uk: 3, cm: 22.5 },
  { us: 6, eu: 36.5, uk: 3.5, cm: 23.0 },
  { us: 6.5, eu: 37, uk: 4, cm: 23.5 },
  { us: 7, eu: 37.5, uk: 4.5, cm: 24.0 },
  { us: 7.5, eu: 38, uk: 5, cm: 24.5 },
  { us: 8, eu: 38.5, uk: 5.5, cm: 25.0 },
  { us: 8.5, eu: 39, uk: 6, cm: 25.5 },
  { us: 9, eu: 40, uk: 6.5, cm: 26.0 },
  { us: 9.5, eu: 40.5, uk: 7, cm: 26.5 },
  { us: 10, eu: 41, uk: 7.5, cm: 27.0 },
  { us: 10.5, eu: 42, uk: 8, cm: 27.5 },
  { us: 11, eu: 42.5, uk: 8.5, cm: 28.0 },
  { us: 12, eu: 43, uk: 9.5, cm: 29.0 },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function ShoeSizesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  function renderTable(data: typeof MEN_SIZES) {
    return (
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">US</th>
              <th className="px-4 py-2 text-left font-medium">EU</th>
              <th className="px-4 py-2 text-left font-medium">UK</th>
              <th className="px-4 py-2 text-left font-medium">cm</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2 font-mono">{row.us}</td>
                <td className="px-4 py-2 font-mono font-semibold">{row.eu}</td>
                <td className="px-4 py-2 font-mono">{row.uk}</td>
                <td className="px-4 py-2 font-mono text-muted-foreground">{row.cm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Uomo' : 'Men\'s Shoe Sizes'}</h2>
        {renderTable(MEN_SIZES)}
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Donna' : 'Women\'s Shoe Sizes'}</h2>
        {renderTable(WOMEN_SIZES)}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Come misurare il piede' : 'How to Measure Your Foot'}
        </h2>
        <div className="rounded-lg border p-6 text-sm space-y-2">
          <p>1. {l === 'it' ? 'Appoggia il piede su un foglio di carta' : 'Stand on a piece of paper'}</p>
          <p>2. {l === 'it' ? 'Segna la punta del dito più lungo e il tallone' : 'Mark the tip of your longest toe and your heel'}</p>
          <p>3. {l === 'it' ? 'Misura la distanza in cm' : 'Measure the distance in cm'}</p>
          <p>4. {l === 'it' ? 'Usa la tabella sopra per trovare la taglia' : 'Use the table above to find your size'}</p>
        </div>
      </section>
    </div>
  )
}

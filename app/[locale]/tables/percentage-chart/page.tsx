import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Percentage Chart — What is X% of Y?', it: 'Tabella Percentuali — Quanto è X% di Y?', de: 'Prozenttabelle — Was ist X% von Y?', fr: 'Tableau des pourcentages — Combien fait X% de Y ?', es: 'Tabla de Porcentajes — ¿Cuánto es X% de Y?' }
const descs = {
  en: 'Precalculated percentage chart: find what is X% of common values (100, 200, 500, 1000). Complete reference table.',
  it: 'Tabella percentuali precalcolata: trova quanto è X% di valori comuni (100, 200, 500, 1000). Tabella di riferimento completa.',
  de: 'Vorberechnete Prozenttabelle: finde X% von gängigen Werten (100, 200, 500, 1000). Vollständige Referenztabelle.',
  fr: 'Tableau de pourcentages précalculé : trouvez X% de valeurs courantes (100, 200, 500, 1000). Tableau de référence complet.',
  es: 'Tabla de porcentajes precalculada: encuentra cuánto es X% de valores comunes (100, 200, 500, 1000). Tabla de referencia completa.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function PercentageChartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const percentages = [1, 2, 2.5, 3, 4, 5, 6, 7, 7.5, 8, 9, 10, 12.5, 15, 20, 25, 30, 33.33, 40, 50, 60, 66.67, 70, 75, 80, 90, 100]
  const bases = [50, 100, 150, 200, 250, 300, 400, 500, 750, 1000]

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-4">
        {l === 'it' ? 'Formula: X% di Y = (X × Y) / 100' : 'Formula: X% of Y = (X × Y) / 100'}
      </p>
      <div className="rounded-lg border bg-muted/30 p-4 mb-8 text-sm font-mono">
        {l === 'it' ? 'Esempio' : 'Example'}: 15% {l === 'it' ? 'di' : 'of'} 200 = (15 × 200) / 100 = 30
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-3 py-2 text-left font-medium sticky left-0 bg-muted/50 border-r">%</th>
              {bases.map(b => (
                <th key={b} className="px-3 py-2 text-center font-medium min-w-[70px]">
                  {l === 'it' ? 'di' : 'of'} {b}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {percentages.map(p => (
              <tr key={p} className="border-t">
                <td className="px-3 py-1.5 font-mono font-semibold sticky left-0 bg-background border-r">{p}%</td>
                {bases.map(b => {
                  const result = (p * b) / 100
                  return (
                    <td key={b} className="px-3 py-1.5 font-mono text-center">
                      {Number.isInteger(result) ? result : result.toFixed(2)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Percentage ↔ Fraction quick reference */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Percentuali e frazioni' : 'Percentages & Fractions'}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            { p: '10%', f: '1/10' }, { p: '12.5%', f: '1/8' }, { p: '20%', f: '1/5' }, { p: '25%', f: '1/4' },
            { p: '33.33%', f: '1/3' }, { p: '37.5%', f: '3/8' }, { p: '40%', f: '2/5' }, { p: '50%', f: '1/2' },
            { p: '60%', f: '3/5' }, { p: '62.5%', f: '5/8' }, { p: '66.67%', f: '2/3' }, { p: '75%', f: '3/4' },
            { p: '80%', f: '4/5' }, { p: '87.5%', f: '7/8' }, { p: '90%', f: '9/10' }, { p: '100%', f: '1' },
          ].map(item => (
            <div key={item.p} className="rounded border px-3 py-2 text-center font-mono text-sm">
              <div className="font-semibold">{item.p}</div>
              <div className="text-muted-foreground">= {item.f}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

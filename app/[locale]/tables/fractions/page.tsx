import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Fraction to Decimal to Percent — Conversion Table', it: 'Frazioni Decimali Percentuali — Tabella di Conversione', de: 'Bruch zu Dezimal zu Prozent — Umrechnungstabelle', fr: 'Fraction en décimal en pourcentage — Table de conversion', es: 'Fracción a Decimal a Porcentaje — Tabla de conversión' }
const descs = {
  en: 'Complete conversion table: fractions to decimals to percentages. All common fractions from 1/2 to 1/64.',
  it: 'Tabella di conversione completa: frazioni in decimali in percentuali. Tutte le frazioni comuni da 1/2 a 1/64.',
  de: 'Vollständige Umrechnungstabelle: Brüche in Dezimalzahlen in Prozent. Alle gängigen Brüche von 1/2 bis 1/64.',
  fr: 'Table de conversion complète : fractions en décimales en pourcentages. Toutes les fractions courantes de 1/2 à 1/64.',
  es: 'Tabla de conversión completa: fracciones a decimales a porcentajes. Todas las fracciones comunes de 1/2 a 1/64.',
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

function generateFractions() {
  const denominators = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 20, 25, 32, 50, 64, 100]
  const fractions: { num: number; den: number; decimal: string; percent: string; simplified: string }[] = []
  const seen = new Set<string>()

  for (const den of denominators) {
    for (let num = 1; num < den; num++) {
      const g = gcd(num, den)
      const sn = num / g
      const sd = den / g
      const key = `${sn}/${sd}`
      if (seen.has(key)) continue
      seen.add(key)
      const decimal = (num / den)
      fractions.push({
        num: sn,
        den: sd,
        decimal: decimal.toFixed(6).replace(/0+$/, '').replace(/\.$/, ''),
        percent: (decimal * 100).toFixed(4).replace(/0+$/, '').replace(/\.$/, '') + '%',
        simplified: `${sn}/${sd}`,
      })
    }
  }
  return fractions.sort((a, b) => (a.num / a.den) - (b.num / b.den))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function FractionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const fractions = generateFractions()

  const commonDenominators = [2, 3, 4, 5, 8, 10, 16, 32]

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      {/* Quick reference by denominator */}
      {commonDenominators.map(den => {
        const items = fractions.filter(f => f.den === den)
        if (items.length === 0) return null
        return (
          <section key={den} className="mb-8">
            <h2 className="text-lg font-semibold mb-3">
              {l === 'it' ? `Frazioni con denominatore ${den}` : `Fractions with denominator ${den}`}
            </h2>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Frazione' : 'Fraction'}</th>
                    <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Decimale' : 'Decimal'}</th>
                    <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Percentuale' : 'Percent'}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(f => (
                    <tr key={f.simplified} className="border-t">
                      <td className="px-4 py-2 font-mono font-semibold text-lg">{f.simplified}</td>
                      <td className="px-4 py-2 font-mono">{f.decimal}</td>
                      <td className="px-4 py-2 font-mono">{f.percent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )
      })}

      {/* Complete table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Tabella completa (tutte le frazioni)' : 'Complete Table (all fractions)'}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Frazione' : 'Fraction'}</th>
                <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Decimale' : 'Decimal'}</th>
                <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Percentuale' : 'Percent'}</th>
              </tr>
            </thead>
            <tbody>
              {fractions.map(f => (
                <tr key={f.simplified} className="border-t">
                  <td className="px-4 py-2 font-mono font-semibold">{f.simplified}</td>
                  <td className="px-4 py-2 font-mono">{f.decimal}</td>
                  <td className="px-4 py-2 font-mono">{f.percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

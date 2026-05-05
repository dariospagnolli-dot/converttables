import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Exponent Rules — Laws of Exponents Reference', it: 'Regole degli Esponenti — Proprietà delle Potenze', de: 'Potenzgesetze — Übersicht der Potenzregeln', fr: 'Règles des exposants — Lois des puissances', es: 'Reglas de los Exponentes — Leyes de las Potencias' }
const descs = {
  en: 'Complete exponent rules reference: product rule, quotient rule, power rule, negative exponents, zero exponent, with examples.',
  it: 'Riferimento completo regole degli esponenti: prodotto, quoziente, potenza di potenza, esponenti negativi, esponente zero, con esempi.',
  de: 'Vollständige Übersicht der Potenzgesetze: Produktregel, Quotientenregel, Potenzregel, negative Exponenten, Exponent Null, mit Beispielen.',
  fr: 'Référence complète des règles des exposants : produit, quotient, puissance, exposants négatifs, exposant zéro, avec exemples.',
  es: 'Referencia completa de reglas de exponentes: producto, cociente, potencia, exponentes negativos, exponente cero, con ejemplos.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function ExponentRulesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const rules = [
    { rule: 'aⁿ × aᵐ = aⁿ⁺ᵐ', name: l === 'it' ? 'Prodotto di potenze' : 'Product Rule', example: '2³ × 2⁴ = 2⁷ = 128', desc: l === 'it' ? 'Stessa base: somma gli esponenti' : 'Same base: add exponents' },
    { rule: 'aⁿ ÷ aᵐ = aⁿ⁻ᵐ', name: l === 'it' ? 'Quoziente di potenze' : 'Quotient Rule', example: '3⁵ ÷ 3² = 3³ = 27', desc: l === 'it' ? 'Stessa base: sottrai gli esponenti' : 'Same base: subtract exponents' },
    { rule: '(aⁿ)ᵐ = aⁿˣᵐ', name: l === 'it' ? 'Potenza di potenza' : 'Power of a Power', example: '(2³)² = 2⁶ = 64', desc: l === 'it' ? 'Moltiplica gli esponenti' : 'Multiply exponents' },
    { rule: '(ab)ⁿ = aⁿ × bⁿ', name: l === 'it' ? 'Potenza di un prodotto' : 'Power of a Product', example: '(2×3)² = 2²×3² = 36', desc: l === 'it' ? 'Distribuisci l\'esponente' : 'Distribute exponent' },
    { rule: '(a/b)ⁿ = aⁿ/bⁿ', name: l === 'it' ? 'Potenza di un quoziente' : 'Power of a Quotient', example: '(4/2)³ = 4³/2³ = 8', desc: l === 'it' ? 'Distribuisci l\'esponente' : 'Distribute exponent' },
    { rule: 'a⁰ = 1', name: l === 'it' ? 'Esponente zero' : 'Zero Exponent', example: '5⁰ = 1, 100⁰ = 1', desc: l === 'it' ? 'Qualsiasi base (≠0) elevata a 0 = 1' : 'Any base (≠0) raised to 0 = 1' },
    { rule: 'a⁻ⁿ = 1/aⁿ', name: l === 'it' ? 'Esponente negativo' : 'Negative Exponent', example: '2⁻³ = 1/2³ = 1/8', desc: l === 'it' ? 'Reciproco della base' : 'Reciprocal of base' },
    { rule: 'a^(1/n) = ⁿ√a', name: l === 'it' ? 'Esponente frazionario' : 'Fractional Exponent', example: '8^(1/3) = ³√8 = 2', desc: l === 'it' ? 'Esponente frazionario = radice' : 'Fractional exponent = root' },
    { rule: 'a^(m/n) = ⁿ√(aᵐ)', name: l === 'it' ? 'Esponente fraz. generale' : 'General Fractional Exp.', example: '4^(3/2) = √(4³) = 8', desc: l === 'it' ? 'Radice della potenza' : 'Root of the power' },
    { rule: 'a¹ = a', name: l === 'it' ? 'Esponente uno' : 'Exponent One', example: '7¹ = 7', desc: l === 'it' ? 'Qualsiasi numero elevato a 1 = se stesso' : 'Any number to the power of 1 = itself' },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{titles[l]}</h1>

      <div className="space-y-4 mb-10">
        {rules.map(r => (
          <div key={r.rule} className="rounded-lg border p-5">
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <span className="text-xl font-mono font-bold">{r.rule}</span>
              <span className="text-sm font-medium text-primary">{r.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{r.desc}</p>
            <div className="text-sm font-mono bg-muted/30 rounded px-3 py-1.5 inline-block">
              {l === 'it' ? 'Esempio' : 'Example'}: {r.example}
            </div>
          </div>
        ))}
      </div>

      {/* Powers table */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Tabella potenze comuni' : 'Common Powers Table'}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50">
              <th className="px-3 py-2 text-left font-medium">n</th>
              <th className="px-3 py-2 text-left font-medium">n²</th>
              <th className="px-3 py-2 text-left font-medium">n³</th>
              <th className="px-3 py-2 text-left font-medium">n⁴</th>
              <th className="px-3 py-2 text-left font-medium">n⁵</th>
              <th className="px-3 py-2 text-left font-medium">n¹⁰</th>
            </tr></thead>
            <tbody>
              {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <tr key={n} className="border-t">
                  <td className="px-3 py-1.5 font-mono font-semibold">{n}</td>
                  <td className="px-3 py-1.5 font-mono">{n ** 2}</td>
                  <td className="px-3 py-1.5 font-mono">{n ** 3}</td>
                  <td className="px-3 py-1.5 font-mono">{(n ** 4).toLocaleString()}</td>
                  <td className="px-3 py-1.5 font-mono">{(n ** 5).toLocaleString()}</td>
                  <td className="px-3 py-1.5 font-mono">{(n ** 10).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

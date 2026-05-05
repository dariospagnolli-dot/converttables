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
    { rule: 'aⁿ × aᵐ = aⁿ⁺ᵐ', name: { en: 'Product Rule', it: 'Prodotto di potenze', de: 'Produktregel', fr: 'Règle du produit', es: 'Regla del producto' }[l], example: '2³ × 2⁴ = 2⁷ = 128', desc: { en: 'Same base: add exponents', it: 'Stessa base: somma gli esponenti', de: 'Gleiche Basis: Exponenten addieren', fr: 'Même base : additionner les exposants', es: 'Misma base: sumar exponentes' }[l] },
    { rule: 'aⁿ ÷ aᵐ = aⁿ⁻ᵐ', name: { en: 'Quotient Rule', it: 'Quoziente di potenze', de: 'Quotientenregel', fr: 'Règle du quotient', es: 'Regla del cociente' }[l], example: '3⁵ ÷ 3² = 3³ = 27', desc: { en: 'Same base: subtract exponents', it: 'Stessa base: sottrai gli esponenti', de: 'Gleiche Basis: Exponenten subtrahieren', fr: 'Même base : soustraire les exposants', es: 'Misma base: restar exponentes' }[l] },
    { rule: '(aⁿ)ᵐ = aⁿˣᵐ', name: { en: 'Power of a Power', it: 'Potenza di potenza', de: 'Potenzregel', fr: 'Règle de puissance', es: 'Regla de la potencia' }[l], example: '(2³)² = 2⁶ = 64', desc: { en: 'Multiply exponents', it: 'Moltiplica gli esponenti', de: 'Exponenten multiplizieren', fr: 'Multiplier les exposants', es: 'Multiplicar exponentes' }[l] },
    { rule: '(ab)ⁿ = aⁿ × bⁿ', name: { en: 'Power of a Product', it: 'Potenza di un prodotto', de: 'Potenz eines Produkts', fr: 'Puissance d\'un produit', es: 'Potencia de un producto' }[l], example: '(2×3)² = 2²×3² = 36', desc: { en: 'Distribute exponent', it: 'Distribuisci l\'esponente', de: 'Exponent verteilen', fr: 'Distribuer l\'exposant', es: 'Distribuir exponente' }[l] },
    { rule: '(a/b)ⁿ = aⁿ/bⁿ', name: { en: 'Power of a Quotient', it: 'Potenza di un quoziente', de: 'Potenz eines Quotienten', fr: 'Puissance d\'un quotient', es: 'Potencia de un cociente' }[l], example: '(4/2)³ = 4³/2³ = 8', desc: { en: 'Distribute exponent', it: 'Distribuisci l\'esponente', de: 'Exponent verteilen', fr: 'Distribuer l\'exposant', es: 'Distribuir exponente' }[l] },
    { rule: 'a⁰ = 1', name: { en: 'Zero Exponent', it: 'Esponente zero', de: 'Nullexponent', fr: 'Exposant zéro', es: 'Exponente cero' }[l], example: '5⁰ = 1, 100⁰ = 1', desc: { en: 'Any base (≠0) raised to 0 = 1', it: 'Qualsiasi base (≠0) elevata a 0 = 1', de: 'Jede Basis (≠0) hoch 0 = 1', fr: 'Toute base (≠0) élevée à 0 = 1', es: 'Cualquier base (≠0) elevada a 0 = 1' }[l] },
    { rule: 'a⁻ⁿ = 1/aⁿ', name: { en: 'Negative Exponent', it: 'Esponente negativo', de: 'Negativer Exponent', fr: 'Exposant négatif', es: 'Exponente negativo' }[l], example: '2⁻³ = 1/2³ = 1/8', desc: { en: 'Reciprocal of base', it: 'Reciproco della base', de: 'Kehrwert der Basis', fr: 'Inverse de la base', es: 'Recíproco de la base' }[l] },
    { rule: 'a^(1/n) = ⁿ√a', name: { en: 'Fractional Exponent', it: 'Esponente frazionario', de: 'Gebrochener Exponent', fr: 'Exposant fractionnaire', es: 'Exponente fraccionario' }[l], example: '8^(1/3) = ³√8 = 2', desc: { en: 'Fractional exponent = root', it: 'Esponente frazionario = radice', de: 'Gebrochener Exponent = Wurzel', fr: 'Exposant fractionnaire = racine', es: 'Exponente fraccionario = raíz' }[l] },
    { rule: 'a^(m/n) = ⁿ√(aᵐ)', name: { en: 'General Fractional Exp.', it: 'Esponente fraz. generale', de: 'Allgemeiner gebrochener Exp.', fr: 'Exposant fract. général', es: 'Exponente fracc. general' }[l], example: '4^(3/2) = √(4³) = 8', desc: { en: 'Root of the power', it: 'Radice della potenza', de: 'Wurzel der Potenz', fr: 'Racine de la puissance', es: 'Raíz de la potencia' }[l] },
    { rule: 'a¹ = a', name: { en: 'Exponent One', it: 'Esponente uno', de: 'Exponent Eins', fr: 'Exposant un', es: 'Exponente uno' }[l], example: '7¹ = 7', desc: { en: 'Any number to the power of 1 = itself', it: 'Qualsiasi numero elevato a 1 = se stesso', de: 'Jede Zahl hoch 1 = sich selbst', fr: 'Tout nombre à la puissance 1 = lui-même', es: 'Cualquier número elevado a 1 = sí mismo' }[l] },
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
              {{ en: 'Example', it: 'Esempio', de: 'Beispiel', fr: 'Exemple', es: 'Ejemplo' }[l]}: {r.example}
            </div>
          </div>
        ))}
      </div>

      {/* Powers table */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{{ en: 'Common Powers Table', it: 'Tabella potenze comuni', de: 'Tabelle gängiger Potenzen', fr: 'Tableau des puissances courantes', es: 'Tabla de potencias comunes' }[l]}</h2>
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

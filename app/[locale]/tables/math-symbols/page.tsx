import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { MATH_SYMBOLS } from '@/lib/data/symbols'

const titles = { en: 'Math Symbols — Complete Reference List', it: 'Simboli Matematici — Lista Completa di Riferimento', de: 'Mathematische Symbole — Vollständige Referenzliste', fr: 'Symboles mathématiques — Liste de référence complète', es: 'Símbolos Matemáticos — Lista de referencia completa' }
const descs = {
  en: 'Complete list of mathematical symbols with names, meanings, and examples. Copy and paste any symbol.',
  it: 'Lista completa dei simboli matematici con nomi, significati ed esempi. Copia e incolla qualsiasi simbolo.',
  de: 'Vollständige Liste mathematischer Symbole mit Namen, Bedeutungen und Beispielen. Jedes Symbol kopieren und einfügen.',
  fr: 'Liste complète des symboles mathématiques avec noms, significations et exemples. Copiez et collez n\'importe quel symbole.',
  es: 'Lista completa de símbolos matemáticos con nombres, significados y ejemplos. Copia y pega cualquier símbolo.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function MathSymbolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const categories = [
    { label: l === 'it' ? 'Aritmetica' : 'Arithmetic', symbols: MATH_SYMBOLS.slice(0, 12) },
    { label: l === 'it' ? 'Algebra e Analisi' : 'Algebra & Calculus', symbols: MATH_SYMBOLS.slice(12, 28) },
    { label: l === 'it' ? 'Insiemistica e Logica' : 'Set Theory & Logic', symbols: MATH_SYMBOLS.slice(28, 40) },
    { label: l === 'it' ? 'Geometria' : 'Geometry', symbols: MATH_SYMBOLS.slice(40) },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      {/* Quick copy grid */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Copia rapida' : 'Quick Copy'}</h2>
        <div className="flex flex-wrap gap-2">
          {MATH_SYMBOLS.map(s => (
            <span key={s.name} className="rounded border px-3 py-2 text-xl font-mono cursor-pointer hover:bg-accent transition-colors" title={s.name}>
              {s.symbol}
            </span>
          ))}
        </div>
      </section>

      {categories.map(cat => (
        <section key={cat.label} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{cat.label}</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Simbolo' : 'Symbol'}</th>
                  <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Nome' : 'Name'}</th>
                  <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Significato' : 'Meaning'}</th>
                  <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Esempio' : 'Example'}</th>
                  <th className="px-4 py-2 text-left font-medium">HTML</th>
                </tr>
              </thead>
              <tbody>
                {cat.symbols.map(s => (
                  <tr key={s.name} className="border-t">
                    <td className="px-4 py-2 text-2xl font-mono">{s.symbol}</td>
                    <td className="px-4 py-2 font-medium">{s.name}</td>
                    <td className="px-4 py-2 text-muted-foreground">{s.meaning[l]}</td>
                    <td className="px-4 py-2 font-mono text-muted-foreground">{s.example || ''}</td>
                    <td className="px-4 py-2 font-mono text-xs text-muted-foreground">{s.htmlCode || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  )
}

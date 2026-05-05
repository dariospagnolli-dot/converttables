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
    { label: { en: 'Arithmetic', it: 'Aritmetica', de: 'Arithmetik', fr: 'Arithmétique', es: 'Aritmética' }[l], symbols: MATH_SYMBOLS.slice(0, 12) },
    { label: { en: 'Algebra & Calculus', it: 'Algebra e Analisi', de: 'Algebra & Analysis', fr: 'Algèbre et Analyse', es: 'Álgebra y Cálculo' }[l], symbols: MATH_SYMBOLS.slice(12, 28) },
    { label: { en: 'Set Theory & Logic', it: 'Insiemistica e Logica', de: 'Mengenlehre & Logik', fr: 'Théorie des ensembles et Logique', es: 'Teoría de conjuntos y Lógica' }[l], symbols: MATH_SYMBOLS.slice(28, 40) },
    { label: { en: 'Geometry', it: 'Geometria', de: 'Geometrie', fr: 'Géométrie', es: 'Geometría' }[l], symbols: MATH_SYMBOLS.slice(40) },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      {/* Quick copy grid */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{{ en: 'Quick Copy', it: 'Copia rapida', de: 'Schnellkopie', fr: 'Copie rapide', es: 'Copia rápida' }[l]}</h2>
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
                  <th className="px-4 py-2 text-left font-medium">{{ en: 'Symbol', it: 'Simbolo', de: 'Symbol', fr: 'Symbole', es: 'Símbolo' }[l]}</th>
                  <th className="px-4 py-2 text-left font-medium">{{ en: 'Name', it: 'Nome', de: 'Name', fr: 'Nom', es: 'Nombre' }[l]}</th>
                  <th className="px-4 py-2 text-left font-medium">{{ en: 'Meaning', it: 'Significato', de: 'Bedeutung', fr: 'Signification', es: 'Significado' }[l]}</th>
                  <th className="px-4 py-2 text-left font-medium">{{ en: 'Example', it: 'Esempio', de: 'Beispiel', fr: 'Exemple', es: 'Ejemplo' }[l]}</th>
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

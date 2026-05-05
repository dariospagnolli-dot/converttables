import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Addition Table — 1 to 20', it: 'Tabella di Addizione — da 1 a 20', de: 'Additionstabelle — 1 bis 20', fr: 'Table d\'Addition — de 1 à 20', es: 'Tabla de Suma — del 1 al 20' }
const descs = {
  en: 'Complete addition table from 1 to 20. Printable math chart for kids and students.',
  it: 'Tabella di addizione completa da 1 a 20. Tabella matematica stampabile per bambini e studenti.',
  de: 'Vollständige Additionstabelle von 1 bis 20. Druckbare Mathematiktabelle für Kinder und Schüler.',
  fr: 'Table d\'addition complète de 1 à 20. Tableau mathématique imprimable pour enfants et étudiants.',
  es: 'Tabla de suma completa del 1 al 20. Tabla matemática imprimible para niños y estudiantes.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function AdditionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{titles[l]}</h1>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-3 py-2 font-bold text-center border-r">+</th>
              {numbers.map(n => <th key={n} className="px-3 py-2 font-bold text-center min-w-[40px]">{n}</th>)}
            </tr>
          </thead>
          <tbody>
            {numbers.map(i => (
              <tr key={i} className="border-t">
                <td className="px-3 py-2 font-bold text-center bg-muted/50 border-r">{i}</td>
                {numbers.map(j => <td key={j} className="px-3 py-2 text-center font-mono">{i + j}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

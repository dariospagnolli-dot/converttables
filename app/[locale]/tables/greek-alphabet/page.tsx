import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { GREEK_ALPHABET } from '@/lib/data/symbols'

const titles = { en: 'Greek Alphabet — Letters, Symbols & Pronunciation', it: 'Alfabeto Greco — Lettere, Simboli e Pronuncia' }
const descs = {
  en: 'Complete Greek alphabet with uppercase, lowercase, name, pronunciation, HTML codes and common uses in math and science.',
  it: 'Alfabeto greco completo con maiuscola, minuscola, nome, pronuncia, codici HTML e usi comuni in matematica e scienza.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function GreekAlphabetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      {/* Quick copy */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Copia rapida' : 'Quick Copy'}</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm text-muted-foreground mr-2">{l === 'it' ? 'Maiuscole:' : 'Uppercase:'}</span>
          {GREEK_ALPHABET.map(g => (
            <span key={g.upper} className="rounded border px-2 py-1 text-lg font-mono cursor-pointer hover:bg-accent" title={g.name}>{g.upper}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground mr-2">{l === 'it' ? 'Minuscole:' : 'Lowercase:'}</span>
          {GREEK_ALPHABET.map(g => (
            <span key={g.lower} className="rounded border px-2 py-1 text-lg font-mono cursor-pointer hover:bg-accent" title={g.name}>{g.lower}</span>
          ))}
        </div>
      </section>

      {/* Full table */}
      <section className="mb-10">
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-3 py-2 text-left font-medium">{l === 'it' ? 'Maiusc.' : 'Upper'}</th>
                <th className="px-3 py-2 text-left font-medium">{l === 'it' ? 'Minusc.' : 'Lower'}</th>
                <th className="px-3 py-2 text-left font-medium">{l === 'it' ? 'Nome' : 'Name'}</th>
                <th className="px-3 py-2 text-left font-medium">{l === 'it' ? 'Pronuncia' : 'Pronunciation'}</th>
                <th className="px-3 py-2 text-left font-medium">HTML</th>
                <th className="px-3 py-2 text-left font-medium">{l === 'it' ? 'Uso comune' : 'Common Use'}</th>
              </tr>
            </thead>
            <tbody>
              {GREEK_ALPHABET.map(g => (
                <tr key={g.name} className="border-t">
                  <td className="px-3 py-2 text-2xl font-mono">{g.upper}</td>
                  <td className="px-3 py-2 text-2xl font-mono">{g.lower}</td>
                  <td className="px-3 py-2 font-medium">{l === 'it' ? g.nameIt : g.name}</td>
                  <td className="px-3 py-2 text-muted-foreground">{g.pronunciation}</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{g.htmlLower}</td>
                  <td className="px-3 py-2 text-muted-foreground text-xs">{g.commonUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

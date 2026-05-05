import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { GREEK_ALPHABET } from '@/lib/data/symbols'

const titles = { en: 'Greek Alphabet — Letters, Symbols & Pronunciation', it: 'Alfabeto Greco — Lettere, Simboli e Pronuncia', de: 'Griechisches Alphabet — Buchstaben, Symbole & Aussprache', fr: 'Alphabet grec — Lettres, symboles et prononciation', es: 'Alfabeto Griego — Letras, símbolos y pronunciación' }
const descs = {
  en: 'Complete Greek alphabet with uppercase, lowercase, name, pronunciation, HTML codes and common uses in math and science.',
  it: 'Alfabeto greco completo con maiuscola, minuscola, nome, pronuncia, codici HTML e usi comuni in matematica e scienza.',
  de: 'Vollständiges griechisches Alphabet mit Groß- und Kleinbuchstaben, Name, Aussprache, HTML-Codes und häufige Verwendung in Mathematik und Wissenschaft.',
  fr: 'Alphabet grec complet avec majuscules, minuscules, nom, prononciation, codes HTML et utilisations courantes en mathématiques et sciences.',
  es: 'Alfabeto griego completo con mayúsculas, minúsculas, nombre, pronunciación, códigos HTML y usos comunes en matemáticas y ciencias.',
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
        <h2 className="text-xl font-semibold mb-4">{{ en: 'Quick Copy', it: 'Copia rapida', de: 'Schnellkopie', fr: 'Copie rapide', es: 'Copia rápida' }[l]}</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm text-muted-foreground mr-2">{{ en: 'Uppercase:', it: 'Maiuscole:', de: 'Großbuchstaben:', fr: 'Majuscules :', es: 'Mayúsculas:' }[l]}</span>
          {GREEK_ALPHABET.map(g => (
            <span key={g.upper} className="rounded border px-2 py-1 text-lg font-mono cursor-pointer hover:bg-accent" title={g.name}>{g.upper}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground mr-2">{{ en: 'Lowercase:', it: 'Minuscole:', de: 'Kleinbuchstaben:', fr: 'Minuscules :', es: 'Minúsculas:' }[l]}</span>
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
                <th className="px-3 py-2 text-left font-medium">{{ en: 'Upper', it: 'Maiusc.', de: 'Groß', fr: 'Maj.', es: 'Mayús.' }[l]}</th>
                <th className="px-3 py-2 text-left font-medium">{{ en: 'Lower', it: 'Minusc.', de: 'Klein', fr: 'Min.', es: 'Minús.' }[l]}</th>
                <th className="px-3 py-2 text-left font-medium">{{ en: 'Name', it: 'Nome', de: 'Name', fr: 'Nom', es: 'Nombre' }[l]}</th>
                <th className="px-3 py-2 text-left font-medium">{{ en: 'Pronunciation', it: 'Pronuncia', de: 'Aussprache', fr: 'Prononciation', es: 'Pronunciación' }[l]}</th>
                <th className="px-3 py-2 text-left font-medium">HTML</th>
                <th className="px-3 py-2 text-left font-medium">{{ en: 'Common Use', it: 'Uso comune', de: 'Übliche Verwendung', fr: 'Usage courant', es: 'Uso común' }[l]}</th>
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

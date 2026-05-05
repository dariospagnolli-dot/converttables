import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { generateAsciiTable, generateExtendedAsciiTable } from '@/lib/data/ascii'

const titles = { en: 'ASCII Table — Character Codes Chart', it: 'Tabella ASCII — Codici Caratteri', de: 'ASCII-Tabelle — Zeichencode-Übersicht', fr: 'Table ASCII — Codes de caractères', es: 'Tabla ASCII — Códigos de caracteres' }
const descs = {
  en: 'Complete ASCII table with decimal, hexadecimal, octal codes and characters. Standard ASCII (0-127) and extended ASCII (128-255).',
  it: 'Tabella ASCII completa con codici decimale, esadecimale, ottale e caratteri. ASCII standard (0-127) ed esteso (128-255).',
  de: 'Vollständige ASCII-Tabelle mit Dezimal-, Hexadezimal-, Oktalcodes und Zeichen. Standard-ASCII (0-127) und erweitertes ASCII (128-255).',
  fr: 'Table ASCII complète avec codes décimal, hexadécimal, octal et caractères. ASCII standard (0-127) et ASCII étendu (128-255).',
  es: 'Tabla ASCII completa con códigos decimal, hexadecimal, octal y caracteres. ASCII estándar (0-127) y ASCII extendido (128-255).',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function AsciiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const table = generateAsciiTable()
  const extended = generateExtendedAsciiTable()

  const printable = table.filter(e => e.dec >= 32 && e.dec < 127)
  const control = table.filter(e => e.dec < 32 || e.dec === 127)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      {/* Printable characters */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Caratteri stampabili ASCII (32-126)' : 'Printable ASCII Characters (32-126)'}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-3 py-2 text-left font-medium">DEC</th>
                <th className="px-3 py-2 text-left font-medium">HEX</th>
                <th className="px-3 py-2 text-left font-medium">OCT</th>
                <th className="px-3 py-2 text-left font-medium">CHAR</th>
                <th className="px-3 py-2 text-left font-medium">{l === 'it' ? 'Descrizione' : 'Description'}</th>
              </tr>
            </thead>
            <tbody>
              {printable.map(e => (
                <tr key={e.dec} className="border-t">
                  <td className="px-3 py-1.5 font-mono">{e.dec}</td>
                  <td className="px-3 py-1.5 font-mono">{e.hex}</td>
                  <td className="px-3 py-1.5 font-mono">{e.oct}</td>
                  <td className="px-3 py-1.5 font-mono text-lg font-bold">{e.char}</td>
                  <td className="px-3 py-1.5 text-muted-foreground">{e.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Control characters */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Caratteri di controllo ASCII (0-31, 127)' : 'ASCII Control Characters (0-31, 127)'}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-3 py-2 text-left font-medium">DEC</th>
                <th className="px-3 py-2 text-left font-medium">HEX</th>
                <th className="px-3 py-2 text-left font-medium">OCT</th>
                <th className="px-3 py-2 text-left font-medium">{l === 'it' ? 'Descrizione' : 'Description'}</th>
              </tr>
            </thead>
            <tbody>
              {control.map(e => (
                <tr key={e.dec} className="border-t">
                  <td className="px-3 py-1.5 font-mono">{e.dec}</td>
                  <td className="px-3 py-1.5 font-mono">{e.hex}</td>
                  <td className="px-3 py-1.5 font-mono">{e.oct}</td>
                  <td className="px-3 py-1.5 text-muted-foreground">{e.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Extended ASCII */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'ASCII Esteso (128-255)' : 'Extended ASCII (128-255)'}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <div className="grid grid-cols-4 sm:grid-cols-8 text-sm">
            {extended.map(e => (
              <div key={e.dec} className="flex flex-col items-center border-b border-r p-2">
                <span className="text-lg font-mono">{e.char}</span>
                <span className="text-xs text-muted-foreground">{e.dec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

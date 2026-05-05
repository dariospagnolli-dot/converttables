import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { generateAsciiTable } from '@/lib/data/ascii'

// Generate pages for all printable characters + key control chars
const ASCII_CODES = Array.from({ length: 128 }, (_, i) => i)

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    ASCII_CODES.map(code => ({ locale, code: String(code) }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; code: string }> }): Promise<Metadata> {
  const { locale, code } = await params
  const l = locale as Locale
  const num = parseInt(code)
  if (isNaN(num) || num < 0 || num > 127) return {}

  const table = generateAsciiTable()
  const entry = table[num]
  const charDisplay = entry.char || entry.description

  const titles: Record<Locale, string> = {
    en: `ASCII Code ${num} — ${charDisplay}`,
    it: `Codice ASCII ${num} — ${charDisplay}`,
    de: `ASCII-Code ${num} — ${charDisplay}`,
    fr: `Code ASCII ${num} — ${charDisplay}`,
    es: `Código ASCII ${num} — ${charDisplay}`,
  }
  const descriptions: Record<Locale, string> = {
    en: `ASCII code ${num}: character "${charDisplay}", hexadecimal ${entry.hex}, octal ${entry.oct}. Complete ASCII reference.`,
    it: `Codice ASCII ${num}: carattere "${charDisplay}", esadecimale ${entry.hex}, ottale ${entry.oct}. Riferimento ASCII completo.`,
    de: `ASCII-Code ${num}: Zeichen "${charDisplay}", hexadezimal ${entry.hex}, oktal ${entry.oct}. Vollständige ASCII-Referenz.`,
    fr: `Code ASCII ${num} : caractère « ${charDisplay} », hexadécimal ${entry.hex}, octal ${entry.oct}. Référence ASCII complète.`,
    es: `Código ASCII ${num}: carácter "${charDisplay}", hexadecimal ${entry.hex}, octal ${entry.oct}. Referencia ASCII completa.`,
  }

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `/${locale}/tables/ascii/${code}`,
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/tables/ascii/${code}`])),
    },
  }
}

export default async function AsciiCodePage({ params }: { params: Promise<{ locale: string; code: string }> }) {
  const { locale, code } = await params
  const l = locale as Locale
  const num = parseInt(code)
  if (isNaN(num) || num < 0 || num > 127) notFound()

  const table = generateAsciiTable()
  const entry = table[num]

  const nearby = Array.from({ length: 10 }, (_, i) => num - 5 + i).filter(n => n >= 0 && n <= 127 && n !== num)

  const labels = {
    en: { title: `ASCII Code ${num}`, char: 'Character', desc: 'Description', nearby: 'Nearby Codes', back: 'Full ASCII Table' },
    it: { title: `Codice ASCII ${num}`, char: 'Carattere', desc: 'Descrizione', nearby: 'Codici Vicini', back: 'Tabella ASCII Completa' },
    de: { title: `ASCII-Code ${num}`, char: 'Zeichen', desc: 'Beschreibung', nearby: 'Benachbarte Codes', back: 'Vollständige ASCII-Tabelle' },
    fr: { title: `Code ASCII ${num}`, char: 'Caractère', desc: 'Description', nearby: 'Codes Proches', back: 'Table ASCII Complète' },
    es: { title: `Código ASCII ${num}`, char: 'Carácter', desc: 'Descripción', nearby: 'Códigos Cercanos', back: 'Tabla ASCII Completa' },
  }
  const lbl = labels[l]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{{ en: 'Home', it: 'Home', de: 'Startseite', fr: 'Accueil', es: 'Inicio' }[l]}</Link>
        {' / '}
        <Link href={`/${locale}/tables/ascii`} className="hover:text-foreground">{lbl.back}</Link>
        {' / '}
        <span className="text-foreground">{num}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{lbl.title}</h1>

      <div className="rounded-lg border bg-card p-8 mb-10 text-center">
        {entry.char && <div className="text-7xl font-mono mb-4">{entry.char}</div>}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div><span className="text-muted-foreground">DEC:</span> <span className="font-mono font-bold">{entry.dec}</span></div>
          <div><span className="text-muted-foreground">HEX:</span> <span className="font-mono font-bold">0x{entry.hex}</span></div>
          <div><span className="text-muted-foreground">OCT:</span> <span className="font-mono font-bold">{entry.oct}</span></div>
          <div><span className="text-muted-foreground">BIN:</span> <span className="font-mono font-bold">{num.toString(2).padStart(7, '0')}</span></div>
        </div>
        <p className="text-muted-foreground mt-4">{entry.description}</p>
      </div>

      {/* Nearby codes */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{lbl.nearby}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">DEC</th>
              <th className="px-4 py-2 text-left font-medium">HEX</th>
              <th className="px-4 py-2 text-left font-medium">{lbl.char}</th>
              <th className="px-4 py-2 text-left font-medium">{lbl.desc}</th>
            </tr></thead>
            <tbody>
              {nearby.map(n => {
                const e = table[n]
                return (
                  <tr key={n} className="border-t">
                    <td className="px-4 py-2 font-mono">
                      <Link href={`/${locale}/tables/ascii/${n}`} className="hover:text-primary">{n}</Link>
                    </td>
                    <td className="px-4 py-2 font-mono">0x{e.hex}</td>
                    <td className="px-4 py-2 font-mono text-lg">{e.char || '—'}</td>
                    <td className="px-4 py-2 text-muted-foreground">{e.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <Link href={`/${locale}/tables/ascii`} className="text-primary hover:underline text-sm">
        &larr; {lbl.back}
      </Link>
    </div>
  )
}

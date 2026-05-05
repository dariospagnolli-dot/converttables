import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { toRomanNumeral } from '@/lib/tables/math'

// Generate pages for 1-100 + popular numbers
const NUMBERS = [
  ...Array.from({ length: 100 }, (_, i) => i + 1),
  150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000,
  1500, 1776, 1900, 1999, 2000, 2024, 2025, 2026, 3000, 3999,
]

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    NUMBERS.map(n => ({ locale, number: String(n) }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; number: string }> }): Promise<Metadata> {
  const { locale, number } = await params
  const l = locale as Locale
  const num = parseInt(number)
  if (isNaN(num) || num < 1 || num > 3999) return {}
  const roman = toRomanNumeral(num)

  const titles: Record<Locale, string> = {
    en: `${num} in Roman Numerals — ${roman}`,
    it: `${num} in Numeri Romani — ${roman}`,
    de: `${num} in römischen Zahlen — ${roman}`,
    fr: `${num} en chiffres romains — ${roman}`,
    es: `${num} en números romanos — ${roman}`,
  }
  const descriptions: Record<Locale, string> = {
    en: `${num} in Roman numerals is ${roman}. Learn how to write ${num} as a Roman numeral.`,
    it: `${num} in numeri romani è ${roman}. Scopri come scrivere ${num} in numeri romani.`,
    de: `${num} in römischen Zahlen ist ${roman}. Erfahren Sie, wie man ${num} als römische Zahl schreibt.`,
    fr: `${num} en chiffres romains est ${roman}. Apprenez à écrire ${num} en chiffres romains.`,
    es: `${num} en números romanos es ${roman}. Aprende a escribir ${num} en números romanos.`,
  }

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `/${locale}/tables/roman-numerals/${number}`,
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/tables/roman-numerals/${number}`])),
    },
  }
}

export default async function RomanNumeralPage({ params }: { params: Promise<{ locale: string; number: string }> }) {
  const { locale, number } = await params
  const l = locale as Locale
  const num = parseInt(number)
  if (isNaN(num) || num < 1 || num > 3999) notFound()
  const roman = toRomanNumeral(num)

  // Nearby numbers
  const nearby = Array.from({ length: 10 }, (_, i) => num - 5 + i).filter(n => n >= 1 && n <= 3999 && n !== num)

  const labels = {
    en: { title: `${num} in Roman Numerals`, answer: `${num} = ${roman}`, nearby: 'Nearby Numbers', backToTable: 'Full Roman Numerals Table' },
    it: { title: `${num} in Numeri Romani`, answer: `${num} = ${roman}`, nearby: 'Numeri Vicini', backToTable: 'Tabella Numeri Romani Completa' },
    de: { title: `${num} in Römischen Zahlen`, answer: `${num} = ${roman}`, nearby: 'Benachbarte Zahlen', backToTable: 'Vollständige Römische Zahlentabelle' },
    fr: { title: `${num} en Chiffres Romains`, answer: `${num} = ${roman}`, nearby: 'Nombres Proches', backToTable: 'Table Complète des Chiffres Romains' },
    es: { title: `${num} en Números Romanos`, answer: `${num} = ${roman}`, nearby: 'Números Cercanos', backToTable: 'Tabla Completa de Números Romanos' },
  }
  const lbl = labels[l]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        {' / '}
        <Link href={`/${locale}/tables/roman-numerals`} className="hover:text-foreground">{lbl.backToTable}</Link>
        {' / '}
        <span className="text-foreground">{num}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{lbl.title}</h1>

      <div className="rounded-lg border bg-card p-8 mb-10 text-center">
        <div className="text-6xl font-bold font-mono mb-3">{roman}</div>
        <p className="text-xl text-muted-foreground">{lbl.answer}</p>
      </div>

      {/* Nearby */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{lbl.nearby}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">#</th>
              <th className="px-4 py-2 text-left font-medium">Roman</th>
            </tr></thead>
            <tbody>
              {nearby.map(n => (
                <tr key={n} className="border-t">
                  <td className="px-4 py-2 font-mono">
                    <Link href={`/${locale}/tables/roman-numerals/${n}`} className="hover:text-primary">{n}</Link>
                  </td>
                  <td className="px-4 py-2 font-mono font-semibold">{toRomanNumeral(n)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Link href={`/${locale}/tables/roman-numerals`} className="text-primary hover:underline text-sm">
        &larr; {lbl.backToTable}
      </Link>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

const ROWS = [
  { gas: '¼', c: 110, fan: 90 },
  { gas: '½', c: 130, fan: 110 },
  { gas: '1', c: 140, fan: 120 },
  { gas: '2', c: 150, fan: 130 },
  { gas: '3', c: 160, fan: 140 },
  { gas: '4', c: 180, fan: 160 },
  { gas: '5', c: 190, fan: 170 },
  { gas: '6', c: 200, fan: 180 },
  { gas: '7', c: 220, fan: 200 },
  { gas: '8', c: 230, fan: 210 },
  { gas: '9', c: 240, fan: 220 },
  { gas: '10', c: 260, fan: 240 },
]

const labels: Record<Locale, { title: string; desc: string; gas: string; c: string; fan: string }> = {
  en: { title: 'Gas Mark to Celsius Conversion Chart', desc: 'Convert gas mark oven settings to Celsius (°C) for conventional and fan ovens. Gas 4 = 180°C, Gas 6 = 200°C.', gas: 'Gas Mark', c: '°C (Conventional)', fan: '°C (Fan)' },
  it: { title: 'Conversione Gas a Gradi Celsius', desc: 'Converti le impostazioni gas del forno in Celsius (°C) per forno tradizionale e ventilato. Gas 4 = 180°C.', gas: 'Gas', c: '°C (Tradizionale)', fan: '°C (Ventilato)' },
  de: { title: 'Gasstufe zu Celsius Umrechnungstabelle', desc: 'Gasstufen in Celsius umrechnen für Ober-/Unterhitze und Umluft. Gasstufe 4 = 180°C.', gas: 'Gasstufe', c: '°C (Ober-/Unterhitze)', fan: '°C (Umluft)' },
  fr: { title: 'Conversion Thermostat en Degrés Celsius', desc: 'Tableau de conversion thermostat gaz en Celsius pour four statique et chaleur tournante. Th. 4 = 180°C.', gas: 'Thermostat', c: '°C (Chaleur statique)', fan: '°C (Chaleur tournante)' },
  es: { title: 'Conversión de Gas a Grados Celsius', desc: 'Convierte los números de gas del horno a Celsius (°C) para horno convencional y ventilado. Gas 4 = 180°C.', gas: 'Gas', c: '°C (Convencional)', fan: '°C (Ventilador)' },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: labels[l].title,
    description: labels[l].desc,
    alternates: { languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/oven-temperature/gas-mark-to-celsius`])) },
  }
}

export default async function GasMarkToCelsiusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const lb = labels[l]

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/convert/oven-temperature`} className="hover:text-foreground">{t(l, 'ovenTemperature')}</Link>
        {' / '}
        <span className="text-foreground">{lb.gas} → °C</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{lb.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{lb.desc}</p>

      {/* Quick lookup for most searched values */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
        {ROWS.filter(r => ['4', '5', '6', '7'].includes(r.gas)).map(row => (
          <div key={row.gas} className="rounded-lg border p-3 text-center">
            <div className="text-sm text-muted-foreground mb-1">Gas {row.gas}</div>
            <div className="text-2xl font-bold font-mono">{row.c}°C</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">{lb.gas}</th>
              <th className="px-4 py-2 text-left font-medium">{lb.c}</th>
              <th className="px-4 py-2 text-left font-medium">{lb.fan}</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(row => (
              <tr key={row.gas} className="border-t">
                <td className="px-4 py-2 font-bold font-mono text-emerald-700">{row.gas}</td>
                <td className="px-4 py-2 font-mono font-semibold">{row.c}°C</td>
                <td className="px-4 py-2 font-mono text-muted-foreground">{row.fan}°C</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href={`/${locale}/convert/oven-temperature/gas-mark-to-fahrenheit`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          {labels[l].gas} → °F
        </Link>
        <Link href={`/${locale}/convert/oven-temperature/fan-to-conventional`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          {{ en: 'Fan → Conventional', it: 'Ventilato → Tradizionale', de: 'Umluft → Ober-/Unterhitze', fr: 'Chaleur tournante → Statique', es: 'Ventilador → Convencional' }[l]}
        </Link>
        <Link href={`/${locale}/convert/oven-temperature`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          {{ en: 'Full Table', it: 'Tabella Completa', de: 'Vollständige Tabelle', fr: 'Tableau Complet', es: 'Tabla Completa' }[l]}
        </Link>
      </div>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

const ROWS = [
  { gas: '¼', f: 225 }, { gas: '½', f: 250 }, { gas: '1', f: 275 }, { gas: '2', f: 300 },
  { gas: '3', f: 325 }, { gas: '4', f: 350 }, { gas: '5', f: 375 }, { gas: '6', f: 400 },
  { gas: '7', f: 425 }, { gas: '8', f: 450 }, { gas: '9', f: 475 }, { gas: '10', f: 500 },
]

const labels: Record<Locale, { title: string; desc: string }> = {
  en: { title: 'Gas Mark to Fahrenheit Conversion Chart', desc: 'Convert gas mark oven settings to Fahrenheit (°F). Gas 4 = 350°F, Gas 6 = 400°F, Gas 7 = 425°F.' },
  it: { title: 'Conversione Gas a Gradi Fahrenheit', desc: 'Converti le impostazioni gas del forno in Fahrenheit (°F). Gas 4 = 350°F, Gas 6 = 400°F.' },
  de: { title: 'Gasstufe zu Fahrenheit Umrechnungstabelle', desc: 'Gasstufen in Fahrenheit umrechnen. Gasstufe 4 = 350°F, Gasstufe 6 = 400°F.' },
  fr: { title: 'Conversion Thermostat en Fahrenheit', desc: 'Convertir le thermostat gaz en Fahrenheit (°F). Th. 4 = 350°F, Th. 6 = 400°F.' },
  es: { title: 'Conversión de Gas a Fahrenheit', desc: 'Convierte el número de gas del horno a Fahrenheit (°F). Gas 4 = 350°F, Gas 6 = 400°F.' },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: labels[l].title,
    description: labels[l].desc,
    alternates: { languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/oven-temperature/gas-mark-to-fahrenheit`])) },
  }
}

export default async function GasMarkToFahrenheitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <Link href={`/${locale}/convert/oven-temperature`} className="hover:text-foreground">{t(l, 'ovenTemperature')}</Link>
        {' / '}
        <span className="text-foreground">Gas → °F</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{labels[l].title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{labels[l].desc}</p>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
        {ROWS.filter(r => ['4', '5', '6', '7'].includes(r.gas)).map(row => (
          <div key={row.gas} className="rounded-lg border p-3 text-center">
            <div className="text-sm text-muted-foreground mb-1">Gas {row.gas}</div>
            <div className="text-2xl font-bold font-mono">{row.f}°F</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">
                {{ en: 'Gas Mark', it: 'Gas', de: 'Gasstufe', fr: 'Thermostat', es: 'Gas' }[l]}
              </th>
              <th className="px-4 py-2 text-left font-medium">°F</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(row => (
              <tr key={row.gas} className="border-t">
                <td className="px-4 py-2 font-bold font-mono text-emerald-700">{row.gas}</td>
                <td className="px-4 py-2 font-mono font-semibold">{row.f}°F</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href={`/${locale}/convert/oven-temperature/gas-mark-to-celsius`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          Gas → °C
        </Link>
        <Link href={`/${locale}/convert/oven-temperature`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          {{ en: 'Full Table', it: 'Tabella Completa', de: 'Vollständige Tabelle', fr: 'Tableau Complet', es: 'Tabla Completa' }[l]}
        </Link>
      </div>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

// Gas Mark / °C Conventional / °C Fan / °F / Description
const OVEN_TABLE = [
  { gas: '¼',  c: 110, fan: 90,  f: 225, en: 'Very cool',       it: 'Molto basso',    de: 'Sehr niedrig', fr: 'Très doux',       es: 'Muy suave' },
  { gas: '½',  c: 130, fan: 110, f: 250, en: 'Very cool',       it: 'Molto basso',    de: 'Sehr niedrig', fr: 'Très doux',       es: 'Muy suave' },
  { gas: '1',  c: 140, fan: 120, f: 275, en: 'Cool / Slow',     it: 'Basso',          de: 'Niedrig',      fr: 'Doux',            es: 'Suave' },
  { gas: '2',  c: 150, fan: 130, f: 300, en: 'Cool',            it: 'Basso',          de: 'Niedrig',      fr: 'Doux',            es: 'Suave' },
  { gas: '3',  c: 160, fan: 140, f: 325, en: 'Warm',            it: 'Tiepido',        de: 'Warm',         fr: 'Tiède',           es: 'Templado' },
  { gas: '4',  c: 180, fan: 160, f: 350, en: 'Moderate',        it: 'Moderato',       de: 'Mittelheiß',   fr: 'Modéré',          es: 'Moderado' },
  { gas: '5',  c: 190, fan: 170, f: 375, en: 'Moderately hot',  it: 'Medio-caldo',    de: 'Mittelheiß+',  fr: 'Assez chaud',     es: 'Moderadamente caliente' },
  { gas: '6',  c: 200, fan: 180, f: 400, en: 'Moderately hot',  it: 'Caldo',          de: 'Heiß',         fr: 'Chaud',           es: 'Caliente' },
  { gas: '7',  c: 220, fan: 200, f: 425, en: 'Hot',             it: 'Molto caldo',    de: 'Sehr heiß',    fr: 'Très chaud',      es: 'Muy caliente' },
  { gas: '8',  c: 230, fan: 210, f: 450, en: 'Very hot',        it: 'Caldissimo',     de: 'Sehr heiß',    fr: 'Très chaud',      es: 'Muy caliente' },
  { gas: '9',  c: 240, fan: 220, f: 475, en: 'Very hot',        it: 'Caldissimo',     de: 'Extrem heiß',  fr: 'Brûlant',         es: 'Extremadamente caliente' },
  { gas: '10', c: 260, fan: 240, f: 500, en: 'Extremely hot',   it: 'Estremamente caldo', de: 'Extrem heiß', fr: 'Très brûlant', es: 'Extremadamente caliente' },
]

const labels: Record<Locale, {
  title: string; desc: string; gasCol: string; cCol: string; fanCol: string; fCol: string; descCol: string
  subGasC: string; subGasF: string; subFan: string
}> = {
  en: {
    title: 'Oven Temperature Conversion — Gas Mark, °C, °F, Fan',
    desc: 'Complete oven temperature chart: Gas Mark to Celsius, Fahrenheit, and fan oven temperatures. Essential for baking conversions.',
    gasCol: 'Gas Mark', cCol: '°C (Conventional)', fanCol: '°C (Fan)', fCol: '°F', descCol: 'Description',
    subGasC: 'Gas Mark to Celsius', subGasF: 'Gas Mark to Fahrenheit', subFan: 'Fan to Conventional',
  },
  it: {
    title: 'Conversione Temperatura Forno — Gas, °C, °F, Ventilato',
    desc: 'Tabella completa temperature forno: Gas a Celsius, Fahrenheit e forno ventilato. Indispensabile per la cottura.',
    gasCol: 'Gas', cCol: '°C (Tradizionale)', fanCol: '°C (Ventilato)', fCol: '°F', descCol: 'Calore',
    subGasC: 'Gas a Celsius', subGasF: 'Gas a Fahrenheit', subFan: 'Ventilato a Tradizionale',
  },
  de: {
    title: 'Backofentemperatur — Gasstufe, °C, °F, Umluft',
    desc: 'Vollständige Backofentabelle: Gasstufe zu Celsius, Fahrenheit und Umluft. Unverzichtbar beim Backen.',
    gasCol: 'Gasstufe', cCol: '°C (Ober-/Unterhitze)', fanCol: '°C (Umluft)', fCol: '°F', descCol: 'Beschreibung',
    subGasC: 'Gasstufe zu Celsius', subGasF: 'Gasstufe zu Fahrenheit', subFan: 'Umluft zu Ober-/Unterhitze',
  },
  fr: {
    title: 'Conversion Température Four — Thermostat, °C, °F',
    desc: 'Tableau complet de température de four : thermostat gaz en Celsius, Fahrenheit et chaleur tournante.',
    gasCol: 'Thermostat', cCol: '°C (Chaleur statique)', fanCol: '°C (Chaleur tournante)', fCol: '°F', descCol: 'Intensité',
    subGasC: 'Thermostat en °C', subGasF: 'Thermostat en °F', subFan: 'Chaleur tournante en statique',
  },
  es: {
    title: 'Conversión Temperatura Horno — Gas, °C, °F, Ventilador',
    desc: 'Tabla completa de temperatura de horno: número de gas a Celsius, Fahrenheit y horno con ventilador.',
    gasCol: 'Gas', cCol: '°C (Convencional)', fanCol: '°C (Ventilador)', fCol: '°F', descCol: 'Intensidad',
    subGasC: 'Gas a Celsius', subGasF: 'Gas a Fahrenheit', subFan: 'Ventilador a Convencional',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: labels[l].title,
    description: labels[l].desc,
    alternates: {
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/oven-temperature`])),
    },
  }
}

export default async function OvenTemperaturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const lb = labels[l]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Table',
    name: lb.title,
    description: lb.desc,
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{t(l, 'home')}</Link>
        {' / '}
        <span className="text-foreground">{t(l, 'ovenTemperature')}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{lb.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{lb.desc}</p>

      {/* Main table */}
      <section className="mb-10">
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{lb.gasCol}</th>
                <th className="px-4 py-2 text-left font-medium">{lb.cCol}</th>
                <th className="px-4 py-2 text-left font-medium">{lb.fanCol}</th>
                <th className="px-4 py-2 text-left font-medium">{lb.fCol}</th>
                <th className="px-4 py-2 text-left font-medium hidden sm:table-cell">{lb.descCol}</th>
              </tr>
            </thead>
            <tbody>
              {OVEN_TABLE.map(row => (
                <tr key={row.gas} className="border-t">
                  <td className="px-4 py-2 font-bold font-mono text-emerald-700">{row.gas}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{row.c}°C</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{row.fan}°C</td>
                  <td className="px-4 py-2 font-mono">{row.f}°F</td>
                  <td className="px-4 py-2 text-muted-foreground hidden sm:table-cell">{row[l]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Most searched quick values */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Most Searched', it: 'Più Cercati', de: 'Am häufigsten gesucht', fr: 'Les plus recherchés', es: 'Más buscados' }[l]}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            { q: '350°F', c: 180, gas: '4' },
            { q: '375°F', c: 190, gas: '5' },
            { q: '400°F', c: 200, gas: '6' },
            { q: '425°F', c: 220, gas: '7' },
            { q: '325°F', c: 160, gas: '3' },
            { q: '300°F', c: 150, gas: '2' },
          ].map(({ q, c, gas }) => (
            <div key={q} className="rounded-lg border p-3">
              <div className="font-bold text-zinc-900">{q}</div>
              <div className="text-muted-foreground">{c}°C · Gas {gas}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-pages */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'relatedConversions')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href={`/${locale}/convert/oven-temperature/gas-mark-to-celsius`} className="rounded-lg border p-4 hover:bg-accent transition-colors">
            <div className="font-semibold mb-1">{lb.subGasC}</div>
            <div className="text-sm text-muted-foreground">Gas 6 = 200°C</div>
          </Link>
          <Link href={`/${locale}/convert/oven-temperature/gas-mark-to-fahrenheit`} className="rounded-lg border p-4 hover:bg-accent transition-colors">
            <div className="font-semibold mb-1">{lb.subGasF}</div>
            <div className="text-sm text-muted-foreground">Gas 6 = 400°F</div>
          </Link>
          <Link href={`/${locale}/convert/oven-temperature/fan-to-conventional`} className="rounded-lg border p-4 hover:bg-accent transition-colors">
            <div className="font-semibold mb-1">{lb.subFan}</div>
            <div className="text-sm text-muted-foreground">180°C fan = 200°C</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

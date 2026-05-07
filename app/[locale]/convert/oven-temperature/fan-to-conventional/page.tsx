import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

// Fan oven runs ~20°C lower than conventional; F = C - 20 (approx)
const ROWS = [
  { fan: 90,  conv: 110, f: 225, gas: '¼' },
  { fan: 110, conv: 130, f: 250, gas: '½' },
  { fan: 120, conv: 140, f: 275, gas: '1' },
  { fan: 130, conv: 150, f: 300, gas: '2' },
  { fan: 140, conv: 160, f: 325, gas: '3' },
  { fan: 160, conv: 180, f: 350, gas: '4' },
  { fan: 170, conv: 190, f: 375, gas: '5' },
  { fan: 180, conv: 200, f: 400, gas: '6' },
  { fan: 200, conv: 220, f: 425, gas: '7' },
  { fan: 210, conv: 230, f: 450, gas: '8' },
  { fan: 220, conv: 240, f: 475, gas: '9' },
  { fan: 240, conv: 260, f: 500, gas: '10' },
]

const labels: Record<Locale, { title: string; desc: string; fan: string; conv: string }> = {
  en: { title: 'Fan Oven to Conventional Oven Temperature Conversion', desc: 'Fan oven temperatures run about 20°C (35°F) lower than conventional. 180°C fan = 200°C conventional = 400°F.', fan: '°C (Fan)', conv: '°C (Conventional)' },
  it: { title: 'Conversione Forno Ventilato a Forno Tradizionale', desc: 'Il forno ventilato cuoce ~20°C in meno rispetto a quello tradizionale. 180°C ventilato = 200°C tradizionale.', fan: '°C (Ventilato)', conv: '°C (Tradizionale)' },
  de: { title: 'Umluft zu Ober-/Unterhitze Umrechnungstabelle', desc: 'Umluft ist ca. 20°C niedriger als Ober-/Unterhitze. 180°C Umluft = 200°C Ober-/Unterhitze.', fan: '°C (Umluft)', conv: '°C (Ober-/Unterhitze)' },
  fr: { title: 'Conversion Chaleur Tournante en Chaleur Statique', desc: 'La chaleur tournante est environ 20°C plus basse que la chaleur statique. 180°C tournante = 200°C statique.', fan: '°C (Chaleur tournante)', conv: '°C (Chaleur statique)' },
  es: { title: 'Conversión Horno Ventilado a Horno Convencional', desc: 'El horno ventilado funciona ~20°C menos que el convencional. 180°C ventilador = 200°C convencional.', fan: '°C (Ventilador)', conv: '°C (Convencional)' },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: labels[l].title,
    description: labels[l].desc,
    alternates: { languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/oven-temperature/fan-to-conventional`])) },
  }
}

export default async function FanToConventionalPage({ params }: { params: Promise<{ locale: string }> }) {
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
        <span className="text-foreground">{{ en: 'Fan → Conventional', it: 'Ventilato → Tradizionale', de: 'Umluft → Ober-/Unterhitze', fr: 'Tournante → Statique', es: 'Ventilador → Convencional' }[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{lb.title}</h1>
      <p className="text-lg text-muted-foreground mb-6">{lb.desc}</p>

      <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-800 mb-8">
        <strong>{{ en: 'Rule of thumb:', it: 'Regola pratica:', de: 'Faustregel:', fr: 'Règle pratique :', es: 'Regla general:' }[l]}</strong>
        {' '}
        {{ en: 'Subtract 20°C (or 35°F) from the conventional temperature to get the fan oven temperature.', it: 'Sottrai 20°C dalla temperatura tradizionale per ottenere quella del forno ventilato.', de: 'Ziehe 20°C von der Ober-/Unterhitze-Temperatur ab, um die Umluft-Temperatur zu erhalten.', fr: 'Soustrayez 20°C de la température statique pour obtenir la température en chaleur tournante.', es: 'Resta 20°C (o 35°F) a la temperatura convencional para obtener la temperatura del ventilador.' }[l]}
      </div>

      <div className="overflow-x-auto rounded-lg border mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">{lb.fan}</th>
              <th className="px-4 py-2 text-left font-medium">{lb.conv}</th>
              <th className="px-4 py-2 text-left font-medium">°F</th>
              <th className="px-4 py-2 text-left font-medium">Gas</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(row => (
              <tr key={row.fan} className="border-t">
                <td className="px-4 py-2 font-mono font-semibold">{row.fan}°C</td>
                <td className="px-4 py-2 font-mono">{row.conv}°C</td>
                <td className="px-4 py-2 font-mono text-muted-foreground">{row.f}°F</td>
                <td className="px-4 py-2 font-mono text-muted-foreground">{row.gas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href={`/${locale}/convert/oven-temperature/gas-mark-to-celsius`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          Gas → °C
        </Link>
        <Link href={`/${locale}/convert/oven-temperature/gas-mark-to-fahrenheit`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          Gas → °F
        </Link>
        <Link href={`/${locale}/convert/oven-temperature`} className="rounded-lg border px-4 py-2 text-sm hover:bg-accent transition-colors">
          {{ en: 'Full Table', it: 'Tabella Completa', de: 'Vollständige Tabelle', fr: 'Tableau Complet', es: 'Tabla Completa' }[l]}
        </Link>
      </div>
    </div>
  )
}

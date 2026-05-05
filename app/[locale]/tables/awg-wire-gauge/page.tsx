import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { AWG_TABLE } from '@/lib/data/electrical'

const titles = { en: 'AWG Wire Gauge Chart — Size, Diameter & Ampacity', it: 'Tabella AWG Calibro Cavi — Dimensioni, Diametro e Portata', de: 'AWG-Drahtquerschnittstabelle — Größe, Durchmesser & Strombelastbarkeit', fr: 'Tableau AWG — Calibre, diamètre et capacité de courant', es: 'Tabla AWG — Calibre, diámetro y capacidad de corriente' }
const descs = {
  en: 'American Wire Gauge (AWG) chart with wire diameter (mm/inches), cross-section area, resistance, and maximum amperage.',
  it: 'Tabella American Wire Gauge (AWG) con diametro filo (mm/pollici), sezione, resistenza e amperaggio massimo.',
  de: 'American Wire Gauge (AWG) Tabelle mit Drahtdurchmesser (mm/Zoll), Querschnittsfläche, Widerstand und maximaler Stromstärke.',
  fr: 'Tableau American Wire Gauge (AWG) avec diamètre du fil (mm/pouces), section, résistance et intensité maximale.',
  es: 'Tabla American Wire Gauge (AWG) con diámetro del cable (mm/pulgadas), sección, resistencia y amperaje máximo.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function AwgPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-3 py-2 text-left font-medium">AWG</th>
              <th className="px-3 py-2 text-left font-medium">{{ en: 'Diameter', it: 'Diametro', de: 'Durchmesser', fr: 'Diamètre', es: 'Diámetro' }[l]} (mm)</th>
              <th className="px-3 py-2 text-left font-medium">{{ en: 'Diameter', it: 'Diametro', de: 'Durchmesser', fr: 'Diamètre', es: 'Diámetro' }[l]} (in)</th>
              <th className="px-3 py-2 text-left font-medium">{{ en: 'Area', it: 'Sezione', de: 'Querschnitt', fr: 'Section', es: 'Sección' }[l]} (mm²)</th>
              <th className="px-3 py-2 text-left font-medium">{{ en: 'Resistance', it: 'Resistenza', de: 'Widerstand', fr: 'Résistance', es: 'Resistencia' }[l]} (Ω/km)</th>
              <th className="px-3 py-2 text-left font-medium">Max A</th>
            </tr>
          </thead>
          <tbody>
            {AWG_TABLE.map(row => (
              <tr key={String(row.gauge)} className="border-t">
                <td className="px-3 py-2 font-mono font-semibold">{row.gauge}</td>
                <td className="px-3 py-2 font-mono">{row.diameterMm}</td>
                <td className="px-3 py-2 font-mono">{row.diameterIn}</td>
                <td className="px-3 py-2 font-mono">{row.areaMm2}</td>
                <td className="px-3 py-2 font-mono">{row.resistanceOhmPerKm}</td>
                <td className="px-3 py-2 font-mono font-semibold">{row.maxAmps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

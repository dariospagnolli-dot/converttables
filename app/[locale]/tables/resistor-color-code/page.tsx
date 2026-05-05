import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { RESISTOR_BANDS } from '@/lib/data/electrical'

const titles = { en: 'Resistor Color Code Chart', it: 'Tabella Codice Colori Resistori', de: 'Widerstandsfarbcode-Tabelle', fr: 'Tableau des codes couleurs des résistances', es: 'Tabla de código de colores de resistencias' }
const descs = {
  en: 'Resistor color code chart: 4-band and 5-band resistor color codes with digit values, multipliers, and tolerance.',
  it: 'Tabella codice colori resistori: codici a 4 e 5 bande con valori cifre, moltiplicatori e tolleranza.',
  de: 'Widerstandsfarbcode-Tabelle: 4-Band- und 5-Band-Farbcodes mit Ziffernwerten, Multiplikatoren und Toleranz.',
  fr: 'Tableau des codes couleurs des résistances : codes à 4 et 5 bandes avec valeurs, multiplicateurs et tolérance.',
  es: 'Tabla de código de colores de resistencias: códigos de 4 y 5 bandas con valores, multiplicadores y tolerancia.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function ResistorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      <section className="mb-10">
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{{ en: 'Color', it: 'Colore', de: 'Farbe', fr: 'Couleur', es: 'Color' }[l]}</th>
                <th className="px-4 py-2 text-left font-medium"></th>
                <th className="px-4 py-2 text-left font-medium">{{ en: 'Digit', it: 'Cifra', de: 'Ziffer', fr: 'Chiffre', es: 'Dígito' }[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{{ en: 'Multiplier', it: 'Moltiplicatore', de: 'Multiplikator', fr: 'Multiplicateur', es: 'Multiplicador' }[l]}</th>
                <th className="px-4 py-2 text-left font-medium">{{ en: 'Tolerance', it: 'Tolleranza', de: 'Toleranz', fr: 'Tolérance', es: 'Tolerancia' }[l]}</th>
              </tr>
            </thead>
            <tbody>
              {RESISTOR_BANDS.map(band => (
                <tr key={band.color} className="border-t">
                  <td className="px-4 py-2 font-medium">{band.color}</td>
                  <td className="px-4 py-2">
                    <div
                      className="w-8 h-5 rounded border"
                      style={{ backgroundColor: band.hex, borderColor: band.hex === '#FFFFFF' ? '#ccc' : band.hex }}
                    />
                  </td>
                  <td className="px-4 py-2 font-mono">{band.digit !== null ? band.digit : '—'}</td>
                  <td className="px-4 py-2 font-mono">{band.multiplierLabel}</td>
                  <td className="px-4 py-2 font-mono">{band.tolerance || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to read */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'How to Read a 4-Band Resistor', it: 'Come leggere un resistore a 4 bande', de: 'Wie man einen 4-Band-Widerstand liest', fr: 'Comment lire une résistance à 4 bandes', es: 'Cómo leer un resistor de 4 bandas' }[l]}
        </h2>
        <div className="rounded-lg border p-6 space-y-3 text-sm">
          <p><strong>{{ en: 'Band 1', it: 'Banda 1', de: 'Band 1', fr: 'Bande 1', es: 'Banda 1' }[l]}:</strong> {{ en: 'First digit', it: 'Prima cifra', de: 'Erste Ziffer', fr: 'Premier chiffre', es: 'Primer dígito' }[l]}</p>
          <p><strong>{{ en: 'Band 2', it: 'Banda 2', de: 'Band 2', fr: 'Bande 2', es: 'Banda 2' }[l]}:</strong> {{ en: 'Second digit', it: 'Seconda cifra', de: 'Zweite Ziffer', fr: 'Deuxième chiffre', es: 'Segundo dígito' }[l]}</p>
          <p><strong>{{ en: 'Band 3', it: 'Banda 3', de: 'Band 3', fr: 'Bande 3', es: 'Banda 3' }[l]}:</strong> {{ en: 'Multiplier', it: 'Moltiplicatore', de: 'Multiplikator', fr: 'Multiplicateur', es: 'Multiplicador' }[l]}</p>
          <p><strong>{{ en: 'Band 4', it: 'Banda 4', de: 'Band 4', fr: 'Bande 4', es: 'Banda 4' }[l]}:</strong> {{ en: 'Tolerance', it: 'Tolleranza', de: 'Toleranz', fr: 'Tolérance', es: 'Tolerancia' }[l]}</p>
          <div className="mt-4 p-4 bg-muted/50 rounded font-mono">
            {{ en: 'Example', it: 'Esempio', de: 'Beispiel', fr: 'Exemple', es: 'Ejemplo' }[l]}: Brown-Black-Red-Gold = 10 × 100 = 1000Ω (1kΩ) ±5%
          </div>
        </div>
      </section>

      {/* Common values */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Common Standard Values (E12 Series)', it: 'Valori standard comuni (serie E12)', de: 'Gängige Standardwerte (E12-Reihe)', fr: 'Valeurs standard courantes (série E12)', es: 'Valores estándar comunes (serie E12)' }[l]}
        </h2>
        <div className="flex flex-wrap gap-2">
          {[10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 120, 150, 180, 220, 270, 330, 390, 470, 560, 680, 820, 1000, 1200, 1500, 1800, 2200, 2700, 3300, 3900, 4700, 5600, 6800, 8200, 10000].map(v => (
            <span key={v} className="rounded border px-2 py-1 font-mono text-sm">
              {v >= 1000000 ? `${v / 1000000}MΩ` : v >= 1000 ? `${v / 1000}kΩ` : `${v}Ω`}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { HTML_NAMED_COLORS } from '@/lib/data/electrical'

const titles = { en: 'HTML Color Codes — Named Colors Reference', it: 'Codici Colori HTML — Riferimento Colori con Nome', de: 'HTML-Farbcodes — Referenz benannter Farben', fr: 'Codes couleurs HTML — Référence des couleurs nommées', es: 'Códigos de colores HTML — Referencia de colores con nombre' }
const descs = {
  en: 'Complete list of 140 HTML named colors with hex codes, RGB values and color preview.',
  it: 'Lista completa dei 140 colori HTML con nome, codici esadecimali, valori RGB e anteprima.',
  de: 'Vollständige Liste der 140 benannten HTML-Farben mit Hex-Codes, RGB-Werten und Farbvorschau.',
  fr: 'Liste complète des 140 couleurs HTML nommées avec codes hex, valeurs RGB et aperçu.',
  es: 'Lista completa de los 140 colores HTML con nombre, códigos hexadecimales, valores RGB y vista previa.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function HtmlColorsPage({ params }: { params: Promise<{ locale: string }> }) {
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
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Preview', it: 'Anteprima', de: 'Vorschau', fr: 'Aperçu', es: 'Vista previa' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Name', it: 'Nome', de: 'Name', fr: 'Nom', es: 'Nombre' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">HEX</th>
              <th className="px-4 py-2 text-left font-medium">RGB</th>
            </tr>
          </thead>
          <tbody>
            {HTML_NAMED_COLORS.map(c => (
              <tr key={c.name} className="border-t">
                <td className="px-4 py-2">
                  <div className="w-10 h-6 rounded border" style={{ backgroundColor: c.hex }} />
                </td>
                <td className="px-4 py-2 font-medium">{c.name}</td>
                <td className="px-4 py-2 font-mono">{c.hex}</td>
                <td className="px-4 py-2 font-mono text-muted-foreground">{c.rgb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

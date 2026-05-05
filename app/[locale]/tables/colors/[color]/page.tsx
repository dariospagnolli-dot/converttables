import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { COLOR_PAGES } from '@/lib/data/colors'

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    COLOR_PAGES.map(c => ({ locale, color: c.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; color: string }> }): Promise<Metadata> {
  const { locale, color: slug } = await params
  const l = locale as Locale
  const color = COLOR_PAGES.find(c => c.slug === slug)
  if (!color) return {}
  return {
    title: {
      en: `${color.name[l]} Color — HEX Code, RGB, Shades`,
      it: `Colore ${color.name[l]} — Codice HEX, RGB, Sfumature`,
      de: `Farbe ${color.name[l]} — HEX-Code, RGB, Schattierungen`,
      fr: `Couleur ${color.name[l]} — Code HEX, RGB, Nuances`,
      es: `Color ${color.name[l]} — Código HEX, RGB, Tonos`,
    }[l],
    description: {
      en: `${color.name[l]} color: hex code ${color.hex}, RGB(${color.rgb.join(', ')}). Complete shades chart.`,
      it: `${color.name[l]}: codice esadecimale ${color.hex}, RGB(${color.rgb.join(', ')}). Tabella completa delle sfumature.`,
      de: `Farbe ${color.name[l]}: Hex-Code ${color.hex}, RGB(${color.rgb.join(', ')}). Vollständige Schattierungstabelle.`,
      fr: `Couleur ${color.name[l]} : code hexadécimal ${color.hex}, RGB(${color.rgb.join(', ')}). Tableau complet des nuances.`,
      es: `Color ${color.name[l]}: código hexadecimal ${color.hex}, RGB(${color.rgb.join(', ')}). Tabla completa de tonos.`,
    }[l],
  }
}

export default async function ColorPage({ params }: { params: Promise<{ locale: string; color: string }> }) {
  const { locale, color: slug } = await params
  const l = locale as Locale
  const color = COLOR_PAGES.find(c => c.slug === slug)
  if (!color) notFound()

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{{ en: 'Home', it: 'Home', de: 'Startseite', fr: 'Accueil', es: 'Inicio' }[l]}</Link>
        {' / '}
        <Link href={`/${locale}/tables/html-colors`} className="hover:text-foreground">{{ en: 'Colors', it: 'Colori', de: 'Farben', fr: 'Couleurs', es: 'Colores' }[l]}</Link>
        {' / '}
        <span className="text-foreground">{color.name[l]}</span>
      </nav>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-lg border-2" style={{ backgroundColor: color.hex }} />
        <div>
          <h1 className="text-3xl font-bold">{{ en: `${color.name[l]} Color`, it: `Colore ${color.name[l]}`, de: `Farbe ${color.name[l]}`, fr: `Couleur ${color.name[l]}`, es: `Color ${color.name[l]}` }[l]}</h1>
          <p className="text-muted-foreground font-mono">{color.hex} · RGB({color.rgb.join(', ')})</p>
        </div>
      </div>

      {/* Color info */}
      <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">HEX</div>
            <div className="text-xl font-mono font-bold">{color.hex}</div>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">RGB</div>
            <div className="text-xl font-mono font-bold">{color.rgb.join(', ')}</div>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <div className="text-sm text-muted-foreground mb-1">HSL</div>
            <div className="text-xl font-mono font-bold">
              {(() => {
                const [r, g, b] = color.rgb.map(v => v / 255)
                const max = Math.max(r, g, b), min = Math.min(r, g, b)
                const li = (max + min) / 2
                if (max === min) return `0°, 0%, ${Math.round(li * 100)}%`
                const d = max - min
                const s = li > 0.5 ? d / (2 - max - min) : d / (max + min)
                let h = 0
                if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
                else if (max === g) h = ((b - r) / d + 2) / 6
                else h = ((r - g) / d + 4) / 6
                return `${Math.round(h * 360)}°, ${Math.round(s * 100)}%, ${Math.round(li * 100)}%`
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Shades */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{{ en: `Shades of ${color.name[l]}`, it: `Sfumature di ${color.name[l]}`, de: `Schattierungen von ${color.name[l]}`, fr: `Nuances de ${color.name[l]}`, es: `Tonos de ${color.name[l]}` }[l]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {color.shades.map(shade => (
            <div key={shade.hex} className="flex items-center gap-3 rounded-lg border p-3">
              <div className="w-12 h-12 rounded border flex-shrink-0" style={{ backgroundColor: shade.hex }} />
              <div>
                <div className="font-medium text-sm">{shade.name}</div>
                <div className="font-mono text-xs text-muted-foreground">{shade.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{{ en: 'Other Colors', it: 'Altri colori', de: 'Andere Farben', fr: 'Autres couleurs', es: 'Otros colores' }[l]}</h2>
        <div className="flex flex-wrap gap-2">
          {COLOR_PAGES.filter(c => c.slug !== slug).map(c => (
            <Link
              key={c.slug}
              href={`/${locale}/tables/colors/${c.slug}`}
              className="flex items-center gap-2 rounded border px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: c.hex }} />
              {c.name[l]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

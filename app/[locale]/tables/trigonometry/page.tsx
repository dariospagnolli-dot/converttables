import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Trigonometry Table — Sin, Cos, Tan Values (0°-360°)', it: 'Tabella Trigonometrica — Sin, Cos, Tan (0°-360°)', de: 'Trigonometrietabelle — Sin, Cos, Tan (0°–360°)', fr: 'Table de trigonométrie — Sin, Cos, Tan (0°-360°)', es: 'Tabla de Trigonometría — Sen, Cos, Tan (0°-360°)' }
const descs = {
  en: 'Complete trigonometry table with sine, cosine, and tangent values for every degree from 0° to 360°.',
  it: 'Tabella trigonometrica completa con valori di seno, coseno e tangente per ogni grado da 0° a 360°.',
  de: 'Vollständige Trigonometrietabelle mit Sinus-, Kosinus- und Tangenswerten für jeden Grad von 0° bis 360°.',
  fr: 'Table trigonométrique complète avec les valeurs du sinus, cosinus et tangente pour chaque degré de 0° à 360°.',
  es: 'Tabla trigonométrica completa con valores de seno, coseno y tangente para cada grado de 0° a 360°.',
}

function toRad(deg: number) { return deg * Math.PI / 180 }
function fmt(val: number) {
  if (Math.abs(val) > 1e10) return '∞'
  return val.toFixed(6).replace(/0+$/, '').replace(/\.$/, '')
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function TrigonometryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const keyAngles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360]
  const allAngles = Array.from({ length: 361 }, (_, i) => i)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">{descs[l]}</p>

      {/* Key angles */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Angoli notevoli' : 'Key Angles'}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Gradi' : 'Degrees'} (°)</th>
                <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Radianti' : 'Radians'}</th>
                <th className="px-4 py-2 text-left font-medium">sin</th>
                <th className="px-4 py-2 text-left font-medium">cos</th>
                <th className="px-4 py-2 text-left font-medium">tan</th>
              </tr>
            </thead>
            <tbody>
              {keyAngles.map(deg => {
                const rad = toRad(deg)
                const tanVal = Math.tan(rad)
                return (
                  <tr key={deg} className="border-t">
                    <td className="px-4 py-2 font-mono font-semibold">{deg}°</td>
                    <td className="px-4 py-2 font-mono text-muted-foreground">{fmt(rad)}</td>
                    <td className="px-4 py-2 font-mono">{fmt(Math.sin(rad))}</td>
                    <td className="px-4 py-2 font-mono">{fmt(Math.cos(rad))}</td>
                    <td className="px-4 py-2 font-mono">{Math.abs(tanVal) > 1e10 ? '—' : fmt(tanVal)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full table 0-360 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {l === 'it' ? 'Tabella completa 0°–360°' : 'Complete Table 0°–360°'}
        </h2>
        <div className="overflow-x-auto rounded-lg border max-h-[600px] overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0">
              <tr className="bg-muted">
                <th className="px-3 py-2 text-left font-medium">°</th>
                <th className="px-3 py-2 text-left font-medium">sin</th>
                <th className="px-3 py-2 text-left font-medium">cos</th>
                <th className="px-3 py-2 text-left font-medium">tan</th>
              </tr>
            </thead>
            <tbody>
              {allAngles.map(deg => {
                const rad = toRad(deg)
                const tanVal = Math.tan(rad)
                return (
                  <tr key={deg} className="border-t">
                    <td className="px-3 py-1 font-mono font-semibold">{deg}</td>
                    <td className="px-3 py-1 font-mono">{fmt(Math.sin(rad))}</td>
                    <td className="px-3 py-1 font-mono">{fmt(Math.cos(rad))}</td>
                    <td className="px-3 py-1 font-mono">{Math.abs(tanVal) > 1e10 ? '—' : fmt(tanVal)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

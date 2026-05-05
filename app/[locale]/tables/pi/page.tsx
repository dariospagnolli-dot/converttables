import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Pi (π) — Value to 1000 Decimal Places', it: 'Pi Greco (π) — Valore con 1000 Decimali', de: 'Pi (π) — Wert auf 1000 Dezimalstellen', fr: 'Pi (π) — Valeur à 1000 décimales', es: 'Pi (π) — Valor con 1000 decimales' }
const descs = {
  en: 'Pi (π) value to 1,000 decimal places. Key formulas, properties and history of pi.',
  it: 'Pi greco (π) con 1.000 decimali. Formule chiave, proprietà e storia del pi greco.',
  de: 'Pi (π) mit 1.000 Dezimalstellen. Wichtige Formeln, Eigenschaften und Geschichte von Pi.',
  fr: 'Pi (π) avec 1 000 décimales. Formules clés, propriétés et histoire de pi.',
  es: 'Pi (π) con 1.000 decimales. Fórmulas clave, propiedades e historia de pi.',
}

// Pi to 1000 decimal places
const PI_1000 = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function PiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{titles[l]}</h1>

      <div className="rounded-lg border bg-card p-6 mb-10 text-center">
        <div className="text-6xl font-bold mb-2">π</div>
        <div className="text-2xl font-mono">≈ 3.14159265358979...</div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Proprietà' : 'Properties'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <div className="text-sm text-muted-foreground mb-1">{l === 'it' ? 'Tipo' : 'Type'}</div>
            <div className="font-semibold">{l === 'it' ? 'Numero irrazionale e trascendente' : 'Irrational and transcendental number'}</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-sm text-muted-foreground mb-1">{l === 'it' ? 'Definizione' : 'Definition'}</div>
            <div className="font-semibold">{l === 'it' ? 'Rapporto circonferenza/diametro' : 'Ratio of circumference to diameter'}</div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Formule chiave' : 'Key Formulas'}</h2>
        <div className="space-y-3 font-mono text-sm">
          <div className="rounded border p-3">{l === 'it' ? 'Circonferenza' : 'Circumference'}: C = 2πr</div>
          <div className="rounded border p-3">{l === 'it' ? 'Area cerchio' : 'Area of circle'}: A = πr²</div>
          <div className="rounded border p-3">{l === 'it' ? 'Volume sfera' : 'Volume of sphere'}: V = (4/3)πr³</div>
          <div className="rounded border p-3">{l === 'it' ? 'Identità di Eulero' : "Euler's identity"}: e^(iπ) + 1 = 0</div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">π {l === 'it' ? 'con 1000 decimali' : 'to 1000 decimal places'}</h2>
        <div className="rounded-lg border bg-muted/30 p-6 font-mono text-sm leading-relaxed break-all">
          {PI_1000}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">{l === 'it' ? 'Approssimazioni comuni' : 'Common Approximations'}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Frazione' : 'Fraction'}</th>
              <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Valore' : 'Value'}</th>
              <th className="px-4 py-2 text-left font-medium">{l === 'it' ? 'Errore' : 'Error'}</th>
            </tr></thead>
            <tbody>
              {[
                { frac: '22/7', val: '3.142857...', err: '0.04%' },
                { frac: '333/106', val: '3.141509...', err: '0.0026%' },
                { frac: '355/113', val: '3.1415929...', err: '0.0000085%' },
              ].map(a => (
                <tr key={a.frac} className="border-t">
                  <td className="px-4 py-2 font-mono font-semibold">{a.frac}</td>
                  <td className="px-4 py-2 font-mono">{a.val}</td>
                  <td className="px-4 py-2 font-mono text-muted-foreground">{a.err}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

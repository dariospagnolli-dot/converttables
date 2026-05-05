import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { generatePowersOf2 } from '@/lib/tables/math'

const titles = { en: 'Powers of 2 Table', it: 'Tabella Potenze di 2', de: 'Zweierpotenzen-Tabelle', fr: 'Table des puissances de 2', es: 'Tabla de potencias de 2' }
const descs = {
  en: 'Complete table of powers of 2 from 2⁰ to 2⁴⁰. Essential reference for computing and data storage.',
  it: 'Tabella completa delle potenze di 2 da 2⁰ a 2⁴⁰. Riferimento essenziale per informatica.',
  de: 'Vollständige Tabelle der Zweierpotenzen von 2⁰ bis 2⁴⁰. Unverzichtbare Referenz für Informatik und Datenspeicherung.',
  fr: 'Table complète des puissances de 2 de 2⁰ à 2⁴⁰. Référence essentielle pour l\'informatique et le stockage de données.',
  es: 'Tabla completa de potencias de 2 de 2⁰ a 2⁴⁰. Referencia esencial para informática y almacenamiento de datos.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: titles[l], description: descs[l] }
}

export default async function PowersOf2Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const data = generatePowersOf2(40)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{titles[l]}</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Exponent', it: 'Esponente', de: 'Exponent', fr: 'Exposant', es: 'Exponente' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Power', it: 'Potenza', de: 'Potenz', fr: 'Puissance', es: 'Potencia' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Value', it: 'Valore', de: 'Wert', fr: 'Valeur', es: 'Valor' }[l]}</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.exponent} className="border-t">
                <td className="px-4 py-2 font-mono">{row.exponent}</td>
                <td className="px-4 py-2 font-mono">2<sup>{row.exponent}</sup></td>
                <td className="px-4 py-2 font-mono font-semibold">{row.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Common data sizes */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Common Data Sizes', it: 'Dimensioni dati comuni', de: 'Gängige Datengrößen', fr: 'Tailles de données courantes', es: 'Tamaños de datos comunes' }[l]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { exp: 10, name: '1 KB (Kilobyte)', val: '1,024 bytes' },
            { exp: 20, name: '1 MB (Megabyte)', val: '1,048,576 bytes' },
            { exp: 30, name: '1 GB (Gigabyte)', val: '1,073,741,824 bytes' },
            { exp: 40, name: '1 TB (Terabyte)', val: '1,099,511,627,776 bytes' },
          ].map(item => (
            <div key={item.exp} className="rounded-lg border p-4">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-muted-foreground font-mono">2<sup>{item.exp}</sup> = {item.val}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

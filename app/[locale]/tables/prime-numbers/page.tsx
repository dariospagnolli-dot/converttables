import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { getPrimesUpTo } from '@/lib/tables/math'

const titles = { en: 'Prime Numbers Table', it: 'Tabella Numeri Primi', de: 'Primzahlentabelle', fr: 'Table des nombres premiers', es: 'Tabla de números primos' }
const descs = {
  en: 'Complete list of prime numbers from 2 to 1000. Find all primes at a glance.',
  it: 'Lista completa dei numeri primi da 2 a 1000. Trova tutti i numeri primi.',
  de: 'Vollständige Liste der Primzahlen von 2 bis 1000. Alle Primzahlen auf einen Blick.',
  fr: 'Liste complète des nombres premiers de 2 à 1000. Trouvez tous les nombres premiers d\'un coup d\'œil.',
  es: 'Lista completa de números primos del 2 al 1000. Encuentra todos los números primos de un vistazo.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: titles[l], description: descs[l] }
}

export default async function PrimeNumbersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const primes = getPrimesUpTo(1000)

  const ranges = [
    { label: '1–100', primes: primes.filter(p => p <= 100) },
    { label: '101–200', primes: primes.filter(p => p > 100 && p <= 200) },
    { label: '201–300', primes: primes.filter(p => p > 200 && p <= 300) },
    { label: '301–500', primes: primes.filter(p => p > 300 && p <= 500) },
    { label: '501–1000', primes: primes.filter(p => p > 500 && p <= 1000) },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-8">
        {{ en: `There are ${primes.length} prime numbers up to 1000.`, it: `Ci sono ${primes.length} numeri primi fino a 1000.`, de: `Es gibt ${primes.length} Primzahlen bis 1000.`, fr: `Il y a ${primes.length} nombres premiers jusqu'à 1000.`, es: `Hay ${primes.length} números primos hasta 1000.` }[l]}
      </p>

      {ranges.map(range => (
        <section key={range.label} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            {{ en: 'Prime numbers', it: 'Numeri primi', de: 'Primzahlen', fr: 'Nombres premiers', es: 'Números primos' }[l]} {range.label} ({range.primes.length})
          </h2>
          <div className="flex flex-wrap gap-2">
            {range.primes.map(p => (
              <span key={p} className="rounded border px-3 py-1.5 font-mono text-sm">
                {p}
              </span>
            ))}
          </div>
        </section>
      ))}

      {/* First 50 primes table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'First 50 Prime Numbers', it: 'I primi 50 numeri primi', de: 'Die ersten 50 Primzahlen', fr: 'Les 50 premiers nombres premiers', es: 'Los primeros 50 números primos' }[l]}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">#</th>
                <th className="px-4 py-2 text-left font-medium">{{ en: 'Prime', it: 'Numero primo', de: 'Primzahl', fr: 'Nombre premier', es: 'Número primo' }[l]}</th>
              </tr>
            </thead>
            <tbody>
              {primes.slice(0, 50).map((p, i) => (
                <tr key={p} className="border-t">
                  <td className="px-4 py-2 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-2 font-mono font-semibold">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

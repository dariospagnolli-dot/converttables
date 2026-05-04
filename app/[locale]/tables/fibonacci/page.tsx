import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'Fibonacci Sequence — First 100 Numbers', it: 'Sequenza di Fibonacci — Primi 100 Numeri' }
const descs = {
  en: 'Complete Fibonacci sequence: first 100 Fibonacci numbers with index. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).',
  it: 'Sequenza di Fibonacci completa: primi 100 numeri con indice. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).',
}

function generateFibonacci(n: number): string[] {
  const fibs: bigint[] = [0n, 1n]
  for (let i = 2; i < n; i++) fibs.push(fibs[i - 1] + fibs[i - 2])
  return fibs.map(f => f.toString())
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function FibonacciPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const fibs = generateFibonacci(100)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-4">F(n) = F(n−1) + F(n−2), F(0) = 0, F(1) = 1</p>

      <div className="rounded-lg border bg-muted/30 p-4 mb-8 text-sm font-mono">
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181 ...
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">n</th>
              <th className="px-4 py-2 text-left font-medium">F(n)</th>
            </tr>
          </thead>
          <tbody>
            {fibs.map((f, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2 font-mono text-muted-foreground">{i}</td>
                <td className="px-4 py-2 font-mono font-semibold break-all">{f}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, type Locale } from '@/lib/i18n/config'
import { HOW_MANY_ENTRIES } from '@/lib/data/how-many'

export async function generateStaticParams() {
  return locales.flatMap(locale =>
    HOW_MANY_ENTRIES.map(entry => ({ locale, slug: entry.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const l = locale as Locale
  const entry = HOW_MANY_ENTRIES.find(e => e.slug === slug)
  if (!entry) return {}
  return {
    title: entry.titles[l],
    description: entry.descriptions[l],
    alternates: {
      languages: Object.fromEntries(locales.map(loc => [loc, `/${loc}/convert/how-many/${slug}`])),
    },
  }
}

export default async function HowManyPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const l = locale as Locale
  const entry = HOW_MANY_ENTRIES.find(e => e.slug === slug)
  if (!entry) notFound()

  const multiples = [1, 2, 3, 4, 5, 10, 15, 20, 25, 50, 100]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: entry.titles.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `There are ${entry.answer} ${entry.unit1} in one ${entry.unit2}.`,
      },
    }],
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href={`/${locale}`} className="hover:text-foreground">{{ en: 'Home', it: 'Home', de: 'Startseite', fr: 'Accueil', es: 'Inicio' }[l]}</Link>
        {' / '}
        <Link href={`/${locale}/convert`} className="hover:text-foreground">
          {{ en: 'Conversions', it: 'Conversioni', de: 'Umrechnungen', fr: 'Conversions', es: 'Conversiones' }[l]}
        </Link>
        {' / '}
        <span className="text-foreground">{entry.titles[l]}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{entry.titles[l]}</h1>

      <div className="rounded-lg border bg-card p-8 mb-10 text-center">
        <div className="text-5xl font-bold font-mono mb-3">{entry.answer}</div>
        <p className="text-lg text-muted-foreground">
          {{ en: `There are ${entry.answer} ${entry.unit1} in 1 ${entry.unit2}`, it: `Ci sono ${entry.answer} ${entry.unit1} in 1 ${entry.unit2}`, de: `Es gibt ${entry.answer} ${entry.unit1} in 1 ${entry.unit2}`, fr: `Il y a ${entry.answer} ${entry.unit1} dans 1 ${entry.unit2}`, es: `Hay ${entry.answer} ${entry.unit1} en 1 ${entry.unit2}` }[l]}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Reference Table', it: 'Tabella di Riferimento', de: 'Referenztabelle', fr: 'Tableau de Référence', es: 'Tabla de Referencia' }[l]}
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left font-medium capitalize">{entry.unit2}s</th>
                <th className="px-4 py-2 text-left font-medium capitalize">{entry.unit1}</th>
              </tr>
            </thead>
            <tbody>
              {multiples.map(n => (
                <tr key={n} className="border-t">
                  <td className="px-4 py-2 font-mono">{n}</td>
                  <td className="px-4 py-2 font-mono font-semibold">
                    {Number.isInteger(entry.answer * n) ? entry.answer * n : (entry.answer * n).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related how-many */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Related Questions', it: 'Domande correlate', de: 'Verwandte Fragen', fr: 'Questions connexes', es: 'Preguntas relacionadas' }[l]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {HOW_MANY_ENTRIES.filter(e => e.slug !== slug).slice(0, 12).map(e => (
            <Link
              key={e.slug}
              href={`/${locale}/convert/how-many/${e.slug}`}
              className="rounded border px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              {e.titles[l]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

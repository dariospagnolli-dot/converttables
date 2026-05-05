import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { INGREDIENTS } from '@/lib/data/ingredients'

const hero: Record<string, Record<Locale, string>> = {
  title:    { en: 'Unit Converter &',         it: 'Convertitore di Unità &',     de: 'Einheitenrechner &',            fr: 'Convertisseur d\'unités &',     es: 'Conversor de Unidades &'      },
  subtitle: { en: 'Math Reference Tables',    it: 'Tabelle di Riferimento',      de: 'Mathematik-Referenztabellen',   fr: 'Tables de Référence Maths',     es: 'Tablas de Referencia'         },
  desc:     { en: 'Instant conversions, formulas, and reference tables for everyday calculations.', it: 'Conversioni istantanee, formule e tabelle di riferimento per ogni calcolo.', de: 'Sofortige Umrechnungen, Formeln und Referenztabellen für alltägliche Berechnungen.', fr: 'Conversions instantanées, formules et tables de référence pour vos calculs.', es: 'Conversiones instantáneas, fórmulas y tablas de referencia para tus cálculos.' },
  cta:      { en: 'Start converting',         it: 'Inizia a convertire',         de: 'Jetzt umrechnen',               fr: 'Commencer à convertir',         es: 'Empezar a convertir'          },
  badge:    { en: '✦ 5 languages · 5000+ pages', it: '✦ 5 lingue · 5000+ pagine', de: '✦ 5 Sprachen · 5000+ Seiten', fr: '✦ 5 langues · 5000+ pages',   es: '✦ 5 idiomas · 5000+ páginas' },
}

const cards: { key: string; href: (l: string) => string; label: Record<Locale, string>; desc: Record<Locale, string>; icon: React.ReactNode }[] = [
  {
    key: 'convert',
    href: l => `/${l}/convert`,
    label: { en: 'Conversions', it: 'Conversioni', de: 'Umrechnungen', fr: 'Conversions', es: 'Conversiones' },
    desc:  { en: 'Length, weight, temperature, volume…', it: 'Lunghezza, peso, temperatura, volume…', de: 'Länge, Gewicht, Temperatur, Volumen…', fr: 'Longueur, poids, température, volume…', es: 'Longitud, peso, temperatura, volumen…' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 12h16" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 7l5 5-5 5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'tables',
    href: l => `/${l}/tables/multiplication`,
    label: { en: 'Math Tables', it: 'Tabelle Matematiche', de: 'Mathematiktabellen', fr: 'Tables Mathématiques', es: 'Tablas Matemáticas' },
    desc:  { en: 'ASCII, trigonometry, powers, primes…', it: 'ASCII, trigonometria, potenze, primi…', de: 'ASCII, Trigonometrie, Potenzen, Primzahlen…', fr: 'ASCII, trigonométrie, puissances, premiers…', es: 'ASCII, trigonometría, potencias, primos…' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="7" rx="1.5" fill="#10b981" fillOpacity=".35"/>
        <rect x="13" y="3" width="8" height="7" rx="1.5" fill="#10b981" fillOpacity=".35"/>
        <rect x="3" y="14" width="8" height="7" rx="1.5" fill="#10b981" fillOpacity=".35"/>
        <rect x="13" y="14" width="8" height="7" rx="1.5" fill="#10b981" fillOpacity=".35"/>
      </svg>
    ),
  },
  {
    key: 'howmany',
    href: l => `/${l}/convert/how-many/cm-in-inch`,
    label: { en: 'How Many?', it: 'Quanti/e?', de: 'Wie viele?', fr: 'Combien ?', es: '¿Cuántos?' },
    desc:  { en: 'Cups to grams, inches to cm…', it: 'Tazze in grammi, pollici in cm…', de: 'Tassen in Gramm, Zoll in cm…', fr: 'Tasses en grammes, pouces en cm…', es: 'Tazas a gramos, pulgadas a cm…' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#059669" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#059669" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="text-center px-4 pt-16 pb-20"
        style={{ background: 'linear-gradient(160deg, #ecfdf5 0%, white 58%)' }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-7">
          {hero.badge[l]}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-1">
          {hero.title[l]}
        </h1>
        <div className="text-4xl sm:text-5xl font-bold tracking-tight text-emerald-600 leading-tight mb-6">
          {hero.subtitle[l]}
        </div>

        {/* Description */}
        <p className="text-zinc-500 text-lg max-w-md mx-auto mb-9">
          {hero.desc[l]}
        </p>

        {/* CTA */}
        <Link
          href={`/${locale}/convert`}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base"
        >
          {hero.cta[l]}
        </Link>

        {/* Feature cards */}
        <div className="mx-auto max-w-3xl mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {cards.map(card => (
            <Link
              key={card.key}
              href={card.href(locale)}
              className="group bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all"
            >
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                {card.icon}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{card.label[l]}</h3>
              <p className="text-sm text-zinc-400">{card.desc[l]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Content sections ──────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Cooking */}
          <div className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">{t(l, 'cookingConversions')}</h2>
            <ul className="space-y-2 text-sm">
              {INGREDIENTS.slice(0, 8).map(ing => (
                <li key={ing.slug}>
                  <Link href={`/${locale}/convert/cups-to-grams/${ing.slug}`} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                    {t(l, 'cupsToGrams')} — {ing.names[l]}
                  </Link>
                </li>
              ))}
              <li><Link href={`/${locale}/convert/cups-to-grams`} className="text-emerald-600 font-medium hover:underline">{t(l, 'allIngredients')} ({INGREDIENTS.length}) →</Link></li>
              <li><Link href={`/${locale}/convert/grams-to-cups`} className="text-emerald-600 font-medium hover:underline">{t(l, 'gramsToCups')} →</Link></li>
            </ul>
          </div>

          {/* Unit Conversions */}
          <div className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">{t(l, 'generalConversions')}</h2>
            <ul className="space-y-2 text-sm">
              {[
                { slug: 'inches-to-cm',          label: { en: 'Inches → cm',     it: 'Pollici → cm',  de: 'Zoll → cm',       fr: 'Pouces → cm',   es: 'Pulgadas → cm'  }[l]! },
                { slug: 'kg-to-pounds',           label: { en: 'kg → Pounds',     it: 'kg → Libbre',   de: 'kg → Pfund',      fr: 'kg → Livres',   es: 'kg → Libras'    }[l]! },
                { slug: 'miles-to-km',            label: { en: 'Miles → km',      it: 'Miglia → km',   de: 'Meilen → km',     fr: 'Miles → km',    es: 'Millas → km'    }[l]! },
                { slug: 'fahrenheit-to-celsius',  label: '°F → °C' },
                { slug: 'gallons-to-liters',      label: { en: 'Gallons → Liters', it: 'Galloni → Litri', de: 'Gallonen → Liter', fr: 'Gallons → Litres', es: 'Galones → Litros' }[l]! },
                { slug: 'hp-to-kw',              label: 'HP → kW' },
                { slug: 'bar-to-psi',            label: 'Bar → PSI' },
                { slug: 'kmh-to-mph',            label: 'km/h → mph' },
              ].map(item => (
                <li key={item.slug}>
                  <Link href={`/${locale}/convert/${item.slug}`} className="text-zinc-500 hover:text-zinc-900 transition-colors">{item.label}</Link>
                </li>
              ))}
              <li><Link href={`/${locale}/convert`} className="text-emerald-600 font-medium hover:underline">{t(l, 'conversions')} →</Link></li>
            </ul>
          </div>

          {/* Math Tables */}
          <div className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">{t(l, 'mathTables')}</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/tables/multiplication`}  className="text-zinc-500 hover:text-zinc-900">{t(l, 'multiplicationTable')}</Link></li>
              <li><Link href={`/${locale}/tables/roman-numerals`}  className="text-zinc-500 hover:text-zinc-900">{t(l, 'romanNumerals')}</Link></li>
              <li><Link href={`/${locale}/tables/binary-hex`}      className="text-zinc-500 hover:text-zinc-900">{t(l, 'binaryHex')}</Link></li>
              <li><Link href={`/${locale}/tables/squares-cubes`}   className="text-zinc-500 hover:text-zinc-900">{{ en: 'Squares & Cubes', it: 'Quadrati e Cubi', de: 'Quadrate & Kuben', fr: 'Carrés et Cubes', es: 'Cuadrados y Cubos' }[l]}</Link></li>
              <li><Link href={`/${locale}/tables/prime-numbers`}   className="text-zinc-500 hover:text-zinc-900">{{ en: 'Prime Numbers', it: 'Numeri Primi', de: 'Primzahlen', fr: 'Nombres Premiers', es: 'Números Primos' }[l]}</Link></li>
              <li><Link href={`/${locale}/tables/powers-of-2`}     className="text-zinc-500 hover:text-zinc-900">{{ en: 'Powers of 2', it: 'Potenze di 2', de: 'Zweierpotenzen', fr: 'Puissances de 2', es: 'Potencias de 2' }[l]}</Link></li>
              <li><Link href={`/${locale}/tables/logarithm`}       className="text-zinc-500 hover:text-zinc-900">{{ en: 'Logarithm Table', it: 'Tabella Logaritmi', de: 'Logarithmentafel', fr: 'Table de Logarithmes', es: 'Tabla de Logaritmos' }[l]}</Link></li>
            </ul>
          </div>

          {/* How Many */}
          <div className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">{{ en: 'How Many…?', it: 'Quanti/e…?', de: 'Wie viele…?', fr: 'Combien de… ?', es: '¿Cuántos…?' }[l]}</h2>
            <ul className="space-y-2 text-sm">
              {[
                { slug: 'cm-in-inch',      label: { en: 'cm in an inch?',     it: 'cm in un pollice?',     de: 'cm in einem Zoll?',       fr: 'cm dans un pouce ?',      es: 'cm en una pulgada?'    }[l]! },
                { slug: 'grams-in-pound',  label: { en: 'grams in a pound?',  it: 'grammi in una libbra?', de: 'Gramm in einem Pfund?',   fr: 'grammes dans une livre ?', es: 'gramos en una libra?'  }[l]! },
                { slug: 'cups-in-gallon',  label: { en: 'cups in a gallon?',  it: 'tazze in un gallone?',  de: 'Tassen in einer Gallone?', fr: 'tasses dans un gallon ?', es: 'tazas en un galón?'    }[l]! },
                { slug: 'feet-in-mile',    label: { en: 'feet in a mile?',    it: 'piedi in un miglio?',   de: 'Fuß in einer Meile?',     fr: 'pieds dans un mile ?',    es: 'pies en una milla?'    }[l]! },
                { slug: 'mb-in-gb',        label: { en: 'MB in a GB?',        it: 'MB in un GB?',          de: 'MB in einem GB?',         fr: 'Mo dans un Go ?',         es: 'MB en un GB?'          }[l]! },
                { slug: 'ounces-in-pound', label: { en: 'ounces in a pound?', it: 'once in una libbra?',   de: 'Unzen in einem Pfund?',   fr: 'onces dans une livre ?',  es: 'onzas en una libra?'   }[l]! },
              ].map(item => (
                <li key={item.slug}>
                  <Link href={`/${locale}/convert/how-many/${item.slug}`} className="text-zinc-500 hover:text-zinc-900">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Reference */}
          <div className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">{t(l, 'quickReference')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-zinc-500">
              {[
                ['1 US cup', '236.59 ml'],
                ['1 metric cup', '250 ml'],
                ['1 tablespoon', '14.79 ml'],
                ['1 teaspoon', '4.93 ml'],
                ['1 inch', '2.54 cm'],
                ['1 foot', '30.48 cm'],
                ['1 mile', '1.609 km'],
                ['1 pound', '453.59 g'],
                ['1 ounce', '28.35 g'],
                ['1 gallon', '3.785 L'],
                ['1 fl oz', '29.57 ml'],
                ['°F to °C', '(°F − 32) × 5/9'],
              ].map(([from, to]) => (
                <div key={from} className="flex justify-between">
                  <span>{from}</span>
                  <span className="font-mono text-zinc-400">{to}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

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

      {/* ── Editorial intro ─────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-4 py-10 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          {{ en: 'Your All-in-One Unit Converter and Math Reference', it: 'Il tuo convertitore di unità e riferimento matematico tutto-in-uno', de: 'Ihr All-in-One-Einheitenrechner und Mathematik-Nachschlagewerk', fr: 'Votre convertisseur d\'unités et référence mathématique tout-en-un', es: 'Tu convertidor de unidades y referencia matemática todo en uno' }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{ en: 'convert·tables brings together unit conversions, cooking measurement charts, and math reference tables in one fast, ad-free tool. Whether you\'re scaling a baking recipe and need to know how many grams are in a cup of flour, converting miles to kilometers for a road trip, or looking up the 8 times table for a school assignment — you\'ll find the answer here instantly. Every conversion is calculated from standardized values, not estimates.', it: 'convert·tables riunisce conversioni di unità, tabelle di misure da cucina e tabelle matematiche di riferimento in un unico strumento veloce e senza pubblicità. Che tu stia adattando una ricetta di pasticceria e abbia bisogno di sapere quanti grammi sono in una tazza di farina, che tu stia convertendo miglia in chilometri per un viaggio, o che tu stia cercando la tabellina dell\'8 per un compito scolastico — troverai la risposta qui istantaneamente. Ogni conversione è calcolata da valori standardizzati, non da stime.', de: 'convert·tables vereint Einheitenumrechnungen, Küchenmessumrechnungen und mathematische Referenztabellen in einem schnellen, werbefreien Werkzeug. Ob Sie ein Backrezept anpassen und wissen möchten, wie viele Gramm eine Tasse Mehl hat, Meilen in Kilometer umrechnen oder die 8er-Multiplikationstabelle für die Schule nachschlagen — hier finden Sie die Antwort sofort. Jede Umrechnung basiert auf standardisierten Werten, nicht auf Schätzungen.', fr: 'convert·tables regroupe les conversions d\'unités, les tableaux de mesures culinaires et les tables de référence mathématiques dans un seul outil rapide et sans publicité. Que vous adaptiez une recette de pâtisserie et ayez besoin de savoir combien de grammes contient une tasse de farine, que vous convertissiez des miles en kilomètres pour un voyage ou que vous cherchiez la table de 8 pour un devoir scolaire — vous trouverez la réponse ici instantanément. Chaque conversion est calculée à partir de valeurs normalisées, et non d\'estimations.', es: 'convert·tables reúne conversiones de unidades, tablas de medidas culinarias y tablas de referencia matemáticas en una sola herramienta rápida y sin publicidad. Ya sea que estés adaptando una receta de repostería y necesites saber cuántos gramos hay en una taza de harina, convirtiendo millas a kilómetros para un viaje, o buscando la tabla del 8 para una tarea escolar — encontrarás la respuesta aquí al instante. Cada conversión se calcula a partir de valores estandarizados, no de estimaciones.' }[l]}
        </p>
        <p className="text-zinc-600 leading-relaxed">
          {{ en: 'Our cooking conversion tools cover over 60 ingredients with precise density-based calculations, including cups to grams, tablespoons to grams, ounces to grams, and oven temperature charts from Celsius to Fahrenheit and gas marks. The math tables section includes multiplication tables from 1 to 100, Roman numeral charts up to 3999, binary and hexadecimal tables, prime numbers, powers of two, logarithm tables, trigonometry values, and much more. All tools are available in English, Italian, German, French, and Spanish — with localized content for each language.', it: 'I nostri strumenti di conversione per la cucina coprono oltre 60 ingredienti con calcoli precisi basati sulla densità, tra cui tazze in grammi, cucchiai in grammi, once in grammi e tabelle di temperatura del forno da Celsius a Fahrenheit e numeri di gas. La sezione delle tabelle matematiche comprende la tavola pitagorica da 1 a 100, la tabella dei numeri romani fino a 3999, tabelle binarie e esadecimali, numeri primi, potenze di due, tabelle dei logaritmi, valori trigonometrici e molto altro. Tutti gli strumenti sono disponibili in inglese, italiano, tedesco, francese e spagnolo — con contenuti localizzati per ogni lingua.', de: 'Unsere Küchenumrechnungstools decken über 60 Zutaten mit präzisen dichtebasierten Berechnungen ab, darunter Tassen in Gramm, Esslöffel in Gramm, Unzen in Gramm sowie Ofentemperaturtabellen von Celsius nach Fahrenheit und Gasmarken. Der Bereich der Mathematiktabellen umfasst das Einmaleins von 1 bis 100, eine Tabelle der römischen Zahlen bis 3999, Binär- und Hexadezimaltabellen, Primzahlen, Zweierpotenzen, Logarithmentafeln, Trigonometriewerte und vieles mehr. Alle Werkzeuge sind auf Englisch, Italienisch, Deutsch, Französisch und Spanisch verfügbar – mit lokalisierten Inhalten für jede Sprache.', fr: 'Nos outils de conversion culinaire couvrent plus de 60 ingrédients avec des calculs précis basés sur la densité, notamment les tasses en grammes, les cuillères à soupe en grammes, les onces en grammes et les tableaux de température de four de Celsius à Fahrenheit et en thermostat. La section des tables mathématiques comprend les tables de multiplication de 1 à 100, un tableau des chiffres romains jusqu\'à 3999, des tables binaires et hexadécimales, des nombres premiers, des puissances de deux, des tables de logarithmes, des valeurs trigonométriques et bien plus encore. Tous les outils sont disponibles en anglais, italien, allemand, français et espagnol — avec un contenu localisé pour chaque langue.', es: 'Nuestras herramientas de conversión culinaria cubren más de 60 ingredientes con cálculos precisos basados en la densidad, incluyendo tazas a gramos, cucharadas a gramos, onzas a gramos y tablas de temperatura del horno de Celsius a Fahrenheit y marcas de gas. La sección de tablas matemáticas incluye tablas de multiplicar del 1 al 100, una tabla de números romanos hasta el 3999, tablas binarias y hexadecimales, números primos, potencias de dos, tablas de logaritmos, valores trigonométricos y mucho más. Todas las herramientas están disponibles en inglés, italiano, alemán, francés y español — con contenido localizado para cada idioma.' }[l]}
        </p>
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

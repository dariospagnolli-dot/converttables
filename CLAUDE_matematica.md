# Progetto: Convertitore e Tabelle Matematiche Internazionale

## Obiettivo
Sito web internazionale con conversioni di misura (cucina, edilizia, elettronica) e tabelle matematiche (numeri romani, tavola pitagorica, logaritmi). Obiettivo: traffico organico internazionale + monetizzazione AdSense. Linguaggio primario: inglese. Lingue aggiuntive in ordine: italiano, tedesco, francese, spagnolo.

Concorrenti di riferimento: rapidtables.com (14M visite/mese), thecalculatorsite.com, inchcalculator.com.

---

## Stack tecnologico

- **Framework**: Next.js 15 (App Router) — stesso stack di finanzedicoppia.it
- **Hosting**: Cloudflare Pages — collegamento diretto a repo GitHub, automatic deployments
- **Build command**: `next build` — identico a finanzedicoppia.it, nessun adapter custom
- **Database**: ❌ Nessuno — calcolo puro lato server, zero dipendenze esterne
- **Styling**: Tailwind CSS + shadcn/ui — stesso setup di finanzedicoppia.it
- **Language**: TypeScript
- **i18n**: Next.js App Router con `[locale]` segment

### Perché nessun database
Tutte le conversioni sono calcoli matematici puri o tabelle statiche. Non c'è nulla da aggiornare, salvare o cachare in un DB. La densità degli ingredienti è un array TypeScript. I numeri romani sono un algoritmo. Zero costi operativi per sempre.

### Deploy
- Push su branch `main` → Cloudflare Pages builda automaticamente
- Build time stimato MVP (EN+IT, ~2.500 pagine): 4-5 minuti ✅
- Aggiungere lingue gradualmente per tenere il build time sotto i 20 minuti

---

## Architettura i18n

### Struttura URL
```
/en/convert/cups-to-grams/flour           → inglese
/it/converti/tazze-grammi/farina          → italiano
/de/umrechnen/tassen-gramm/mehl           → tedesco
/fr/convertir/tasses-grammes/farine       → francese
/es/convertir/tazas-gramos/harina         → spagnolo
```

### Routing Next.js App Router
```
app/
  [locale]/
    page.tsx                               → home per lingua
    convert/
      [category]/
        [from]-to-[to]/
          page.tsx                         → es. cups-to-grams
          [ingredient]/
            page.tsx                       → es. cups-to-grams/flour
    tables/
      [table]/
        page.tsx                           → es. multiplication, roman-numerals
    calculator/
      [tool]/
        page.tsx                           → es. concrete-mix, ohm-watts
```

### Locales supportati
```typescript
// lib/i18n/config.ts
export const locales = ['en', 'it', 'de', 'fr', 'es'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

// Ordine di lancio:
// Fase 1 (MVP): en + it
// Fase 2 (mese 3): + de
// Fase 3 (mese 6): + fr
// Fase 4 (mese 12): + es
```

---

## Dati e calcoli

### Densità ingredienti (cucina)
```typescript
// lib/data/ingredients.ts
// Nessuna API — dati statici basati su FAO Density Database v2.0

export interface Ingredient {
  id: string
  slug: string                    // usato nell'URL
  density_g_per_ml: number        // densità in g/ml
  names: Record<Locale, string>   // nome tradotto per lingua
  category: 'flour' | 'sugar' | 'liquid' | 'fat' | 'other'
}

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'all-purpose-flour',
    slug: 'flour',
    density_g_per_ml: 0.529,
    names: {
      en: 'All-Purpose Flour',
      it: 'Farina 00',
      de: 'Weizenmehl',
      fr: 'Farine tout usage',
      es: 'Harina todo uso'
    },
    category: 'flour'
  },
  {
    id: 'granulated-sugar',
    slug: 'sugar',
    density_g_per_ml: 0.845,
    names: { en: 'Granulated Sugar', it: 'Zucchero semolato', de: 'Zucker', fr: 'Sucre', es: 'Azúcar' },
    category: 'sugar'
  },
  {
    id: 'butter',
    slug: 'butter',
    density_g_per_ml: 0.911,
    names: { en: 'Butter', it: 'Burro', de: 'Butter', fr: 'Beurre', es: 'Mantequilla' },
    category: 'fat'
  },
  {
    id: 'milk',
    slug: 'milk',
    density_g_per_ml: 1.030,
    names: { en: 'Milk', it: 'Latte', de: 'Milch', fr: 'Lait', es: 'Leche' },
    category: 'liquid'
  },
  {
    id: 'rice',
    slug: 'rice',
    density_g_per_ml: 0.817,
    names: { en: 'White Rice (uncooked)', it: 'Riso (crudo)', de: 'Reis', fr: 'Riz', es: 'Arroz' },
    category: 'other'
  },
  {
    id: 'cocoa-powder',
    slug: 'cocoa-powder',
    density_g_per_ml: 0.520,
    names: { en: 'Cocoa Powder', it: 'Cacao in polvere', de: 'Kakaopulver', fr: 'Cacao en poudre', es: 'Cacao en polvo' },
    category: 'other'
  },
  {
    id: 'olive-oil',
    slug: 'olive-oil',
    density_g_per_ml: 0.914,
    names: { en: 'Olive Oil', it: 'Olio d\'oliva', de: 'Olivenöl', fr: 'Huile d\'olive', es: 'Aceite de oliva' },
    category: 'liquid'
  },
  {
    id: 'honey',
    slug: 'honey',
    density_g_per_ml: 1.420,
    names: { en: 'Honey', it: 'Miele', de: 'Honig', fr: 'Miel', es: 'Miel' },
    category: 'other'
  },
  {
    id: 'salt',
    slug: 'salt',
    density_g_per_ml: 1.217,
    names: { en: 'Salt', it: 'Sale', de: 'Salz', fr: 'Sel', es: 'Sal' },
    category: 'other'
  },
  {
    id: 'water',
    slug: 'water',
    density_g_per_ml: 1.000,
    names: { en: 'Water', it: 'Acqua', de: 'Wasser', fr: 'Eau', es: 'Acqua' },
    category: 'liquid'
  }
  // aggiungere altri ingredienti nel tempo
]
```

### Formula di conversione
```typescript
// lib/conversions/cooking.ts

// Volumi standard tazze in ml
export const CUP_SIZES = {
  us: 236.588,      // US standard cup
  metric: 250,      // UK, AU, NZ, CA, ZA
  imperial: 284.131 // UK old imperial
}

export function cupsToGrams(
  cups: number,
  ingredient: Ingredient,
  cupSize: keyof typeof CUP_SIZES = 'us'
): number {
  const ml = cups * CUP_SIZES[cupSize]
  return Math.round(ml * ingredient.density_g_per_ml)
}

export function gramsToCups(
  grams: number,
  ingredient: Ingredient,
  cupSize: keyof typeof CUP_SIZES = 'us'
): number {
  const ml = grams / ingredient.density_g_per_ml
  return Math.round((ml / CUP_SIZES[cupSize]) * 1000) / 1000
}

export function cupsToMl(cups: number, cupSize: keyof typeof CUP_SIZES = 'us'): number {
  return Math.round(cups * CUP_SIZES[cupSize])
}

export function tablespoonToGrams(tbsp: number, ingredient: Ingredient): number {
  const ML_PER_TABLESPOON = 14.787
  return Math.round(tbsp * ML_PER_TABLESPOON * ingredient.density_g_per_ml)
}

export function teaspoonToGrams(tsp: number, ingredient: Ingredient): number {
  const ML_PER_TEASPOON = 4.929
  return Math.round(tsp * ML_PER_TEASPOON * ingredient.density_g_per_ml)
}
```

### Altre conversioni (senza ingrediente)
```typescript
// lib/conversions/general.ts

export const CONVERSIONS = {
  // Lunghezza
  inchToCm: (v: number) => v * 2.54,
  cmToInch: (v: number) => v / 2.54,
  footToMeter: (v: number) => v * 0.3048,
  mileToKm: (v: number) => v * 1.60934,
  yardToMeter: (v: number) => v * 0.9144,

  // Peso
  poundToKg: (v: number) => v * 0.453592,
  ounceToGram: (v: number) => v * 28.3495,

  // Volume
  gallonToLiter: (v: number) => v * 3.78541,
  flOzToMl: (v: number) => v * 29.5735,

  // Temperatura
  fahrenheitToCelsius: (v: number) => (v - 32) * 5/9,
  celsiusToFahrenheit: (v: number) => v * 9/5 + 32,

  // Edilizia
  sqftToSqm: (v: number) => v * 0.0929,
  sqmToSqft: (v: number) => v / 0.0929,
  acreToHectare: (v: number) => v * 0.404686,
}
```

### Tabelle matematiche
```typescript
// lib/tables/math.ts

export function generateMultiplicationTable(max: number = 12): number[][] {
  return Array.from({ length: max }, (_, i) =>
    Array.from({ length: max }, (_, j) => (i + 1) * (j + 1))
  )
}

export function toRomanNumeral(num: number): string {
  const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const symbols = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  let result = ''
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i]
      num -= values[i]
    }
  }
  return result
}

export function generateRomanNumeralTable(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => ({
    arabic: from + i,
    roman: toRomanNumeral(from + i)
  }))
}

export function toBinary(num: number): string {
  return num.toString(2)
}

export function toHex(num: number): string {
  return num.toString(16).toUpperCase()
}
```

---

## Struttura pagine con generateStaticParams

### Pagine generate al build (MVP — EN + IT)
```typescript
// app/[locale]/convert/cups-to-grams/[ingredient]/page.tsx

export async function generateStaticParams() {
  const locales = ['en', 'it']
  const ingredients = INGREDIENTS.map(i => i.slug)

  return locales.flatMap(locale =>
    ingredients.map(ingredient => ({ locale, ingredient }))
  )
}
// Risultato: 2 lingue × 10 ingredienti = 20 pagine
// Espandibile aggiungendo lingue e ingredienti
```

```typescript
// app/[locale]/tables/roman-numerals/page.tsx
// 1 pagina per lingua = 2 pagine MVP, 5 a regime

// app/[locale]/tables/multiplication/page.tsx
// Idem

// app/[locale]/convert/[category]/page.tsx — pagine index per categoria
// Lunghezza, peso, volume, temperatura, cucina, edilizia
```

### Stima pagine per fase
```
MVP (EN + IT):
  Conversioni cucina:     20 ingredienti × 3 tipi (cups, grams, ml) × 2 lingue = 120
  Conversioni generali:   20 categorie × 2 lingue = 40
  Tabelle matematiche:    10 tabelle × 2 lingue = 20
  Pagine index:           10 × 2 = 20
  Homepage:               2
  TOTALE MVP:             ~202 pagine → build 1 minuto ✅

Fase 2 (+DE +FR):
  ~404 pagine → build 2 minuti ✅

Fase 3 (+ES):
  ~505 pagine → build 3 minuti ✅

Scala futura (100+ ingredienti, 50+ conversioni):
  ~5.000-10.000 pagine → valutare VPS
```

---

## SEO e JSON-LD

### Metadata per ogni pagina
```typescript
// app/[locale]/convert/cups-to-grams/[ingredient]/page.tsx

export async function generateMetadata({ params }: Props) {
  const { locale, ingredient } = params
  const ing = INGREDIENTS.find(i => i.slug === ingredient)

  const titles = {
    en: `Cups to Grams ${ing?.names.en} — Exact Conversion Chart`,
    it: `Tazze in Grammi ${ing?.names.it} — Tabella di Conversione`,
    de: `Tassen in Gramm ${ing?.names.de} — Umrechnung`,
    fr: `Tasses en Grammes ${ing?.names.fr} — Tableau de Conversion`,
    es: `Tazas a Gramos ${ing?.names.es} — Tabla de Conversión`
  }

  return {
    title: titles[locale as Locale],
    description: '...',
    alternates: {
      canonical: `/${locale}/convert/cups-to-grams/${ingredient}`,
      languages: {
        'en': `/en/convert/cups-to-grams/${ingredient}`,
        'it': `/it/converti/tazze-grammi/${ingredient}`,
        // ...
      }
    }
  }
}
```

### JSON-LD
```typescript
// Usa schema HowTo per le conversioni — ottimo per rich results

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": `How to convert cups to grams for ${ingredient.names.en}`,
  "step": [
    {
      "@type": "HowToStep",
      "text": `1 cup of ${ingredient.names.en} = ${cupsToGrams(1, ingredient)}g`
    }
  ],
  "tool": {
    "@type": "HowToTool",
    "name": "Kitchen scale"
  }
}
```

---

## Struttura cartelle progetto

```
/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx                         ← home
│   │   ├── layout.tsx                       ← layout con hreflang
│   │   ├── convert/
│   │   │   ├── page.tsx                     ← index conversioni
│   │   │   ├── cups-to-grams/
│   │   │   │   ├── page.tsx                 ← index cups to grams
│   │   │   │   └── [ingredient]/
│   │   │   │       └── page.tsx             ← pagina singolo ingrediente
│   │   │   ├── grams-to-cups/
│   │   │   │   └── [ingredient]/
│   │   │   │       └── page.tsx
│   │   │   ├── [category]/                  ← lunghezza, peso, volume...
│   │   │   │   └── page.tsx
│   │   ├── tables/
│   │   │   ├── page.tsx                     ← index tabelle
│   │   │   ├── roman-numerals/
│   │   │   │   └── page.tsx
│   │   │   ├── multiplication/
│   │   │   │   └── page.tsx
│   │   │   └── [table]/
│   │   │       └── page.tsx
│   │   └── calculator/
│   │       └── [tool]/
│   │           └── page.tsx
│   └── sitemap.ts                           ← sitemap dinamica
├── lib/
│   ├── i18n/
│   │   ├── config.ts                        ← locales, defaultLocale
│   │   └── translations/
│   │       ├── en.ts
│   │       ├── it.ts
│   │       ├── de.ts
│   │       ├── fr.ts
│   │       └── es.ts
│   ├── data/
│   │   └── ingredients.ts                   ← array ingredienti con densità
│   ├── conversions/
│   │   ├── cooking.ts                       ← cups/grams/ml/tbsp/tsp
│   │   └── general.ts                       ← lunghezza/peso/volume/temp
│   └── tables/
│       └── math.ts                          ← numeri romani, pitagorica, binario
├── components/
│   ├── ConversionTable.tsx                  ← tabella con tutte le quantità
│   ├── ConversionCalculator.tsx             ← calcolatrice interattiva
│   ├── IngredientSelector.tsx               ← dropdown selezione ingrediente
│   └── LocaleSwitcher.tsx                   ← cambio lingua
└── middleware.ts                            ← redirect / → /en (o lingua browser)
```

---

## Traduzioni UI

```typescript
// lib/i18n/translations/en.ts
export const en = {
  convert: 'Convert',
  cups: 'Cups',
  grams: 'Grams',
  tablespoon: 'Tablespoon',
  teaspoon: 'Teaspoon',
  ingredient: 'Ingredient',
  result: 'Result',
  cupSize: 'Cup size',
  us_cup: 'US Cup (240ml)',
  metric_cup: 'Metric Cup (250ml)',
  howManyGrams: 'How many grams in {amount} cup of {ingredient}?',
  conversionTable: 'Conversion Table',
  relatedConversions: 'Related Conversions',
  // ... max 50-60 stringhe per tutta la UI
}

// lib/i18n/translations/it.ts
export const it = {
  convert: 'Converti',
  cups: 'Tazze',
  grams: 'Grammi',
  tablespoon: 'Cucchiaio',
  teaspoon: 'Cucchiaino',
  ingredient: 'Ingrediente',
  result: 'Risultato',
  cupSize: 'Misura tazza',
  us_cup: 'Tazza US (240ml)',
  metric_cup: 'Tazza metrica (250ml)',
  howManyGrams: 'Quanti grammi in {amount} tazza di {ingredient}?',
  conversionTable: 'Tabella di conversione',
  relatedConversions: 'Conversioni correlate',
}
```

---

## Middleware per routing locale

```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'it', 'de', 'fr', 'es']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Salta se già ha un locale
  const hasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (hasLocale) return

  // Rileva lingua dal browser
  const acceptLanguage = request.headers.get('accept-language') || ''
  const detectedLocale = locales.find(locale =>
    acceptLanguage.toLowerCase().includes(locale)
  ) || 'en'

  return NextResponse.redirect(
    new URL(`/${detectedLocale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|sitemap.xml|robots.txt).*)']
}
```

---

## Variabili d'ambiente

```bash
# .env.local
# Nessuna variabile obbligatoria per il funzionamento base
# Opzionali:
NEXT_PUBLIC_SITE_URL=https://tuodominio.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

---

## Ordine di sviluppo consigliato

### Fase 1 — Core (settimana 1)
1. Setup Next.js 15 + Tailwind + shadcn
2. Middleware i18n + traduzioni EN e IT
3. Array ingredienti con densità (almeno 20)
4. Funzioni di conversione `cooking.ts`
5. Pagina `/[locale]/convert/cups-to-grams/[ingredient]`
6. `generateStaticParams` per EN + IT × 20 ingredienti

### Fase 2 — Espansione (settimana 2)
7. Conversioni generali (`general.ts`) — lunghezza, peso, volume
8. Tabelle matematiche — numeri romani, pitagorica
9. Home page per lingua con link alle conversioni principali
10. Sitemap.xml dinamica
11. JSON-LD HowTo per rich results

### Fase 3 — Deploy e SEO (settimana 3)
12. Collegamento repo a Cloudflare Pages
13. Dominio custom
14. Verifica hreflang su tutte le pagine
15. Google Search Console

---

## Note importanti

- **Zero database** — qualsiasi tentazione di aggiungere un DB va resistita. I dati sono array TypeScript, i calcoli sono funzioni pure
- **Densità ingredienti** — fonte autorevole: FAO Density Database Version 2.0. Citarla nella pagina aumenta E-E-A-T
- **US cup vs metric cup** — mostrare sempre entrambe le conversioni. È il differenziatore principale
- **Ingrediente = URL** — ogni ingrediente ha il suo slug nell'URL. Non usare query params
- **Aggiungere lingue gradualmente** — non aggiungere tutte e 5 subito. Validare EN prima
- **Build su Cloudflare** — identico a finanzedicoppia.it. `next build`, nessun adapter custom, deploy automatico da GitHub
- **Nessun ISR necessario** — i dati non cambiano. `export const revalidate = false` ovunque

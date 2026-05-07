# Guida espansione — converttables.com

## Stato attuale (verificato dal sito)

### Già presente
- **Cooking conversions:** cups to grams per 59 ingredienti (farine, zuccheri, oli, latticini, riso, noci...)
- **Tabelle math:** moltiplicazione 1-12, numeri romani, binario/hex, quadrati/cubi, numeri primi, potenze di 2, logaritmi
- **Unit conversions:** lunghezza, peso, volume, temperatura, velocità, energia (decine di pagine)
- **How Many:** cm in inch, grams in pound, cups in gallon, feet in mile, MB in GB, ounces in pound
- **5 lingue** già attive
- **Tablespoon e teaspoon** già integrati in ogni pagina ingrediente (ottimo)

### Il problema da tenere a mente
Le unit conversions standard (inches→cm, kg→pounds, °F→°C, ecc.) hanno **widget Google calcolatore** nella SERP → CTR molto basso. Il traffico reale viene dalla cooking section e dalle math tables. Tutte le espansioni prioritarie puntano in quella direzione.

---

## PRIORITÀ ALTA — Widget Google assente, alto volume

### 1. Inverse cooking conversions — grams to cups per ingrediente

Le pagine `grams to cups` hanno lo stesso volume delle `cups to grams` ma probabilmente meno concorrenza diretta. Se non sono già generate per tutti i 59 ingredienti come pagine standalone indicizzabili, aggiungerle è la prima cosa da fare.

```
/en/convert/grams-to-cups/flour
/en/convert/grams-to-cups/sugar
/en/convert/grams-to-cups/butter
... per tutti i 59 ingredienti esistenti
```

Query target: `100 grams flour in cups`, `250 grams sugar to cups`, `grams to cups butter`
Stima volume: simile alle cups to grams (150-200k/mese aggregate)

---

### 2. Oven temperature conversions — nicchia enorme e ignorata

Le temperature del forno sono cercatissime da chi segue ricette anglosassoni in Europa o viceversa. Non si tratta di una semplice conversione °F→°C (quella ha widget) ma di tabelle specifiche per cottura che Google non copre con widget.

```
/en/convert/oven-temperature
/en/convert/oven-temperature/gas-mark-to-celsius
/en/convert/oven-temperature/gas-mark-to-fahrenheit
/en/convert/oven-temperature/fan-oven-to-conventional
```

Query target: `gas mark 6 celsius`, `350f in celsius oven`, `fan oven temperature conversion`, `gas mark to celsius table`
Stima volume: 50-100k/mese aggregate — quasi zero widget Google
Vantaggio: ogni combinazione (Gas Mark → Celsius, Gas Mark → °F, Fan → Conventional) è una pagina separata

---

### 3. Nuovi ingredienti — espansione da 59 a 150+

Con 59 ingredienti sei già solido ma ci sono categorie scoperte con volume SEO significativo e pochissima competizione per le varianti meno comuni.

**Ingredienti da aggiungere subito (alta ricerca):**
```
chocolate chips          → "1 cup chocolate chips in grams"
peanut butter            → "cups to grams peanut butter"
rolled oats / oatmeal    → "cups to grams oats"
cornstarch / cornflour   → "1 cup cornstarch in grams"
breadcrumbs              → "cups to grams breadcrumbs"
ground almonds           → "cups to grams ground almonds"
shredded coconut         → "cups to grams desiccated coconut"
tahini                   → "cups to grams tahini"
baking powder            → "1 tsp baking powder in grams"
salt (various types)     → "1 tsp salt in grams" (diversa densità per tipo)
```

**Ingredienti specialty (bassa competizione, audience dedicata):**
```
chickpea flour / besan   → mercato indiano/mediterraneo enorme
tapioca starch           → ricette asiatiche e senza glutine
almond meal              → dieta keto
psyllium husk            → gluten-free baking
nutritional yeast        → cucina vegana
```

Ogni nuovo ingrediente = 1 pagina cups→grams + 1 grams→cups + pagine in 5 lingue

---

### 4. Tablespoon e Teaspoon come pagine standalone

Attualmente tablespoon/teaspoon sono sezioni dentro la pagina cups→grams. Se non esistono come URL separati con propri meta title, vale la pena crearli — intercettano query diverse con alto volume proprio.

```
/en/convert/tablespoons-to-grams/flour
/en/convert/tablespoons-to-grams/sugar
/en/convert/tablespoons-to-grams/butter
/en/convert/teaspoons-to-grams/salt
/en/convert/teaspoons-to-grams/baking-powder
/en/convert/teaspoons-to-grams/sugar
```

Query target: `1 tablespoon flour in grams`, `teaspoon of salt in grams`, `tablespoon butter grams`
Stima volume: 20-50k/mese per le più cercate — zero widget

---

### 5. Stick of butter conversions

"Stick of butter" è un'unità usatissima nelle ricette americane incomprensibile per gli europei. È una delle query di cucina più cercate in assoluto nel mercato anglosassone.

```
/en/convert/stick-of-butter-to-grams
/en/convert/stick-of-butter-to-cups
/en/convert/stick-of-butter-to-tablespoons
```

Query target: `1 stick of butter in grams`, `2 sticks of butter in cups`, `stick of butter tablespoons`
Stima volume: 100k+/mese — zero widget Google
Concorrenza: media, ma i siti esistenti non hanno pagine dedicate ottimizzate

---

### 6. Liquid cooking conversions (contesto cucina)

Le conversioni liquidi generiche hanno widget (ml→cups). Ma nel contesto cucina specificato, Google non interviene:

```
/en/convert/fluid-oz-to-ml/cooking
/en/convert/pints-to-cups
/en/convert/pints-to-ml
/en/convert/quarts-to-cups
/en/convert/quarts-to-liters
/en/convert/cups-to-ml
/en/convert/cups-to-liters
```

Query target: `how many ml in a cup of water`, `1 pint in cups`, `2 quarts in cups`
Il differenziatore: contesto cottura con esempi pratici (non semplice calcolatrice)

---

## PRIORITÀ MEDIA — Math tables espandibili

### 7. Tabelle di moltiplicazione per singolo numero

La pagina moltiplicazione 1-12 esiste. Ma le query per singolo numero sono molto più cercate:

```
/en/tables/multiplication/7    → "7 times table"
/en/tables/multiplication/8    → "8 times table"
/en/tables/multiplication/9    → "9 times table"
/en/tables/multiplication/12   → "12 times table"
/en/tables/multiplication/13   → "13 times table"
/en/tables/multiplication/1-20 → "times tables 1 to 20"
/en/tables/multiplication/1-100 → "multiplication table 1 to 100"
```

Query target: "7 times table", "12 times table", "times table 1-20"
Stima volume: 20-80k/mese per le più cercate — Google mostra snippet parziale ma non la tabella interattiva completa

---

### 8. Fraction to decimal conversion

Non esiste ancora sul sito. Query molto cercate da studenti in tutto il mondo anglofono:

```
/en/convert/fraction-to-decimal
/en/tables/fraction-decimal       → tabella completa frazioni comuni
/en/convert/fraction-to-decimal/1-2
/en/convert/fraction-to-decimal/3-4
```

Query target: `1/3 as a decimal`, `3/4 as a decimal`, `fraction to decimal chart`
Stima volume: 50-200k/mese aggregate — no widget per le tabelle

---

### 9. Percentage calculator / tables

```
/en/tables/percentage
/en/convert/percentage/[number]    → es. "what is 15% of 200"
/en/convert/tip-calculator          → tool calcolo mancia (molto cercato)
```

Query target: `percentage table`, `what is 20% of [number]`, `tip calculator`
Nota: le query "what is X% of Y" hanno widget Google — ma le tabelle percentuali complete e il tip calculator no

---

### 10. Roman numerals per numero specifico

La pagina generale esiste. Le query per anno specifico sono enormi:

```
/en/tables/roman-numerals/2024   → "2024 in roman numerals" = MMXXIV
/en/tables/roman-numerals/2025
/en/tables/roman-numerals/1990
/en/tables/roman-numerals/years  → tabella anni 1900-2100
```

Query target: `2025 in roman numerals`, `1999 in roman numerals`, `roman numerals years chart`
Stima volume: 10-30k/mese per i più cercati — no widget

---

## PRIORITÀ BASSA — Espansioni aggiuntive

### 11. Cooking measurement comparison (US vs UK vs AU)

Pagine editoriali che spiegano le differenze tra i sistemi di misura per la cucina. Alta condivisione, buoni backlink naturali da food blog.

```
/en/guides/us-vs-uk-measurements
/en/guides/us-vs-metric-cups
/en/guides/american-recipes-for-europeans
```

---

### 12. Ounces to grams in cooking context

Conversione base ma nel contesto cucina specifico (non calcolatrice generica):

```
/en/convert/oz-to-grams/cooking
/en/convert/oz-to-grams/[ingredient]   → 4 oz flour in grams
```

---

### 13. Density data per ingrediente

Ogni scheda ingrediente ha già la fonte FAO. Aggiungere una sezione con la densità dell'ingrediente (g/ml) e confronto con altri ingredienti aumenta il tempo sulla pagina e il contenuto indicizzabile.

---

## Riepilogo priorità e impatto stimato

| Espansione | Nuove pagine (EN) | Widget risk | Stima traffico aggiuntivo |
|---|---|---|---|
| Grams to cups per 59 ing. | 59 | 🟢 Nessuno | 80-150k/mese |
| Oven temperature | 4 | 🟢 Nessuno | 30-60k/mese |
| +90 nuovi ingredienti | 90 | 🟢 Nessuno | 50-100k/mese |
| Tablespoon/tsp standalone | 120 | 🟢 Nessuno | 30-60k/mese |
| Stick of butter | 3 | 🟢 Nessuno | 50-80k/mese |
| Liquid cooking conversions | 8 | 🟡 Parziale | 20-40k/mese |
| Times tables per numero | 15 | 🟡 Parziale | 30-80k/mese |
| Fraction to decimal | 10 | 🟢 Nessuno | 30-60k/mese |
| Roman numerals per anno | 30 | 🟢 Nessuno | 15-30k/mese |

**Totale espansione priorità alta:** ~339 nuove pagine in EN
**Con 5 lingue:** ~1.700 nuove pagine
**Traffico aggiuntivo stimato a regime:** +300.000-600.000 visite/mese

---

## Note tecniche

- Tutte le espansioni sono **zero API** — calcolo puro o dati statici
- Il pattern è identico alle pagine esistenti — nessun nuovo template necessario per cooking conversions
- Per oven temperature servono dati statici (tabella Gas Mark vs °C vs °F) — nessuna API
- **Prima cosa da fare:** verificare se `grams to cups` è già presente come URL standalone per tutti i 59 ingredienti o solo come sezione della pagina cups to grams

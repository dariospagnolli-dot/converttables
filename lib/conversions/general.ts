import type { Locale } from '@/lib/i18n/config'

export interface UnitDefinition {
  id: string
  slug: string
  symbol: string
  names: Record<Locale, string>
  category: ConversionCategory
}

export type ConversionCategory = 'length' | 'weight' | 'volume' | 'temperature' | 'energy' | 'power' | 'area' | 'speed' | 'pressure' | 'data'

export interface ConversionPair {
  from: string // unit id
  to: string   // unit id
  slug: string  // URL slug: "inches-to-cm"
  convert: (v: number) => number
  category: ConversionCategory
  // Popular specific values to generate dedicated pages (e.g. "100-kg-to-pounds")
  popularValues?: number[]
}

// ============================================================
// UNITS
// ============================================================

export const UNITS: UnitDefinition[] = [
  // LENGTH
  { id: 'mm', slug: 'millimeters', symbol: 'mm', names: { en: 'Millimeters', it: 'Millimetri', de: 'Millimeter', fr: 'Millimètres', es: 'Milímetros' }, category: 'length' },
  { id: 'cm', slug: 'centimeters', symbol: 'cm', names: { en: 'Centimeters', it: 'Centimetri', de: 'Zentimeter', fr: 'Centimètres', es: 'Centímetros' }, category: 'length' },
  { id: 'm', slug: 'meters', symbol: 'm', names: { en: 'Meters', it: 'Metri', de: 'Meter', fr: 'Mètres', es: 'Metros' }, category: 'length' },
  { id: 'km', slug: 'kilometers', symbol: 'km', names: { en: 'Kilometers', it: 'Chilometri', de: 'Kilometer', fr: 'Kilomètres', es: 'Kilómetros' }, category: 'length' },
  { id: 'in', slug: 'inches', symbol: 'in', names: { en: 'Inches', it: 'Pollici', de: 'Zoll', fr: 'Pouces', es: 'Pulgadas' }, category: 'length' },
  { id: 'ft', slug: 'feet', symbol: 'ft', names: { en: 'Feet', it: 'Piedi', de: 'Fuß', fr: 'Pieds', es: 'Pies' }, category: 'length' },
  { id: 'yd', slug: 'yards', symbol: 'yd', names: { en: 'Yards', it: 'Iarde', de: 'Yards', fr: 'Yards', es: 'Yardas' }, category: 'length' },
  { id: 'mi', slug: 'miles', symbol: 'mi', names: { en: 'Miles', it: 'Miglia', de: 'Meilen', fr: 'Miles', es: 'Millas' }, category: 'length' },

  // WEIGHT
  { id: 'mg', slug: 'milligrams', symbol: 'mg', names: { en: 'Milligrams', it: 'Milligrammi', de: 'Milligramm', fr: 'Milligrammes', es: 'Miligramos' }, category: 'weight' },
  { id: 'g', slug: 'grams', symbol: 'g', names: { en: 'Grams', it: 'Grammi', de: 'Gramm', fr: 'Grammes', es: 'Gramos' }, category: 'weight' },
  { id: 'kg', slug: 'kilograms', symbol: 'kg', names: { en: 'Kilograms', it: 'Chilogrammi', de: 'Kilogramm', fr: 'Kilogrammes', es: 'Kilogramos' }, category: 'weight' },
  { id: 'ton', slug: 'metric-tons', symbol: 't', names: { en: 'Metric Tons', it: 'Tonnellate', de: 'Metrische Tonnen', fr: 'Tonnes métriques', es: 'Toneladas métricas' }, category: 'weight' },
  { id: 'oz', slug: 'ounces', symbol: 'oz', names: { en: 'Ounces', it: 'Once', de: 'Unzen', fr: 'Onces', es: 'Onzas' }, category: 'weight' },
  { id: 'lb', slug: 'pounds', symbol: 'lb', names: { en: 'Pounds', it: 'Libbre', de: 'Pfund', fr: 'Livres', es: 'Libras' }, category: 'weight' },
  { id: 'st', slug: 'stones', symbol: 'st', names: { en: 'Stones', it: 'Stones', de: 'Stones', fr: 'Stones', es: 'Stones' }, category: 'weight' },

  // VOLUME
  { id: 'ml', slug: 'milliliters', symbol: 'ml', names: { en: 'Milliliters', it: 'Millilitri', de: 'Milliliter', fr: 'Millilitres', es: 'Mililitros' }, category: 'volume' },
  { id: 'l', slug: 'liters', symbol: 'L', names: { en: 'Liters', it: 'Litri', de: 'Liter', fr: 'Litres', es: 'Litros' }, category: 'volume' },
  { id: 'gal', slug: 'gallons', symbol: 'gal', names: { en: 'Gallons (US)', it: 'Galloni (US)', de: 'Gallonen (US)', fr: 'Gallons (US)', es: 'Galones (US)' }, category: 'volume' },
  { id: 'qt', slug: 'quarts', symbol: 'qt', names: { en: 'Quarts', it: 'Quarti', de: 'Quarts', fr: 'Quarts', es: 'Cuartos' }, category: 'volume' },
  { id: 'pt', slug: 'pints', symbol: 'pt', names: { en: 'Pints', it: 'Pinte', de: 'Pints', fr: 'Pintes', es: 'Pintas' }, category: 'volume' },
  { id: 'floz', slug: 'fluid-ounces', symbol: 'fl oz', names: { en: 'Fluid Ounces', it: 'Once liquide', de: 'Flüssigunzen', fr: 'Onces liquides', es: 'Onzas líquidas' }, category: 'volume' },

  // TEMPERATURE
  { id: 'c', slug: 'celsius', symbol: '°C', names: { en: 'Celsius', it: 'Celsius', de: 'Celsius', fr: 'Celsius', es: 'Celsius' }, category: 'temperature' },
  { id: 'f', slug: 'fahrenheit', symbol: '°F', names: { en: 'Fahrenheit', it: 'Fahrenheit', de: 'Fahrenheit', fr: 'Fahrenheit', es: 'Fahrenheit' }, category: 'temperature' },
  { id: 'k', slug: 'kelvin', symbol: 'K', names: { en: 'Kelvin', it: 'Kelvin', de: 'Kelvin', fr: 'Kelvin', es: 'Kelvin' }, category: 'temperature' },

  // ENERGY
  { id: 'j', slug: 'joules', symbol: 'J', names: { en: 'Joules', it: 'Joule', de: 'Joule', fr: 'Joules', es: 'Julios' }, category: 'energy' },
  { id: 'kj', slug: 'kilojoules', symbol: 'kJ', names: { en: 'Kilojoules', it: 'Kilojoule', de: 'Kilojoule', fr: 'Kilojoules', es: 'Kilojulios' }, category: 'energy' },
  { id: 'cal', slug: 'calories', symbol: 'cal', names: { en: 'Calories', it: 'Calorie', de: 'Kalorien', fr: 'Calories', es: 'Calorías' }, category: 'energy' },
  { id: 'kcal', slug: 'kilocalories', symbol: 'kcal', names: { en: 'Kilocalories', it: 'Kilocalorie', de: 'Kilokalorien', fr: 'Kilocalories', es: 'Kilocalorías' }, category: 'energy' },
  { id: 'kwh', slug: 'kilowatt-hours', symbol: 'kWh', names: { en: 'Kilowatt-hours', it: 'Kilowattora', de: 'Kilowattstunden', fr: 'Kilowattheures', es: 'Kilovatios-hora' }, category: 'energy' },
  { id: 'btu', slug: 'btu', symbol: 'BTU', names: { en: 'BTU', it: 'BTU', de: 'BTU', fr: 'BTU', es: 'BTU' }, category: 'energy' },

  // POWER
  { id: 'w', slug: 'watts', symbol: 'W', names: { en: 'Watts', it: 'Watt', de: 'Watt', fr: 'Watts', es: 'Vatios' }, category: 'power' },
  { id: 'kw', slug: 'kilowatts', symbol: 'kW', names: { en: 'Kilowatts', it: 'Kilowatt', de: 'Kilowatt', fr: 'Kilowatts', es: 'Kilovatios' }, category: 'power' },
  { id: 'hp', slug: 'horsepower', symbol: 'hp', names: { en: 'Horsepower', it: 'Cavalli vapore', de: 'Pferdestärke', fr: 'Chevaux-vapeur', es: 'Caballos de fuerza' }, category: 'power' },
  { id: 'btuh', slug: 'btu-per-hour', symbol: 'BTU/h', names: { en: 'BTU/hour', it: 'BTU/ora', de: 'BTU/Stunde', fr: 'BTU/heure', es: 'BTU/hora' }, category: 'power' },

  // AREA
  { id: 'sqm', slug: 'square-meters', symbol: 'm²', names: { en: 'Square Meters', it: 'Metri quadrati', de: 'Quadratmeter', fr: 'Mètres carrés', es: 'Metros cuadrados' }, category: 'area' },
  { id: 'sqft', slug: 'square-feet', symbol: 'ft²', names: { en: 'Square Feet', it: 'Piedi quadrati', de: 'Quadratfuß', fr: 'Pieds carrés', es: 'Pies cuadrados' }, category: 'area' },
  { id: 'sqkm', slug: 'square-kilometers', symbol: 'km²', names: { en: 'Square Kilometers', it: 'Chilometri quadrati', de: 'Quadratkilometer', fr: 'Kilomètres carrés', es: 'Kilómetros cuadrados' }, category: 'area' },
  { id: 'sqmi', slug: 'square-miles', symbol: 'mi²', names: { en: 'Square Miles', it: 'Miglia quadrate', de: 'Quadratmeilen', fr: 'Miles carrés', es: 'Millas cuadradas' }, category: 'area' },
  { id: 'ha', slug: 'hectares', symbol: 'ha', names: { en: 'Hectares', it: 'Ettari', de: 'Hektar', fr: 'Hectares', es: 'Hectáreas' }, category: 'area' },
  { id: 'ac', slug: 'acres', symbol: 'ac', names: { en: 'Acres', it: 'Acri', de: 'Acres', fr: 'Acres', es: 'Acres' }, category: 'area' },

  // SPEED
  { id: 'kmh', slug: 'km-per-hour', symbol: 'km/h', names: { en: 'km/h', it: 'km/h', de: 'km/h', fr: 'km/h', es: 'km/h' }, category: 'speed' },
  { id: 'mph', slug: 'miles-per-hour', symbol: 'mph', names: { en: 'mph', it: 'mph', de: 'mph', fr: 'mph', es: 'mph' }, category: 'speed' },
  { id: 'ms', slug: 'meters-per-second', symbol: 'm/s', names: { en: 'm/s', it: 'm/s', de: 'm/s', fr: 'm/s', es: 'm/s' }, category: 'speed' },
  { id: 'kn', slug: 'knots', symbol: 'kn', names: { en: 'Knots', it: 'Nodi', de: 'Knoten', fr: 'Nœuds', es: 'Nudos' }, category: 'speed' },

  // PRESSURE
  { id: 'pa', slug: 'pascals', symbol: 'Pa', names: { en: 'Pascals', it: 'Pascal', de: 'Pascal', fr: 'Pascals', es: 'Pascales' }, category: 'pressure' },
  { id: 'bar', slug: 'bar', symbol: 'bar', names: { en: 'Bar', it: 'Bar', de: 'Bar', fr: 'Bar', es: 'Bar' }, category: 'pressure' },
  { id: 'psi', slug: 'psi', symbol: 'psi', names: { en: 'PSI', it: 'PSI', de: 'PSI', fr: 'PSI', es: 'PSI' }, category: 'pressure' },
  { id: 'atm', slug: 'atmospheres', symbol: 'atm', names: { en: 'Atmospheres', it: 'Atmosfere', de: 'Atmosphären', fr: 'Atmosphères', es: 'Atmósferas' }, category: 'pressure' },

  // DATA
  { id: 'b', slug: 'bytes', symbol: 'B', names: { en: 'Bytes', it: 'Byte', de: 'Bytes', fr: 'Octets', es: 'Bytes' }, category: 'data' },
  { id: 'kb', slug: 'kilobytes', symbol: 'KB', names: { en: 'Kilobytes', it: 'Kilobyte', de: 'Kilobytes', fr: 'Kilo-octets', es: 'Kilobytes' }, category: 'data' },
  { id: 'mb', slug: 'megabytes', symbol: 'MB', names: { en: 'Megabytes', it: 'Megabyte', de: 'Megabytes', fr: 'Mégaoctets', es: 'Megabytes' }, category: 'data' },
  { id: 'gb', slug: 'gigabytes', symbol: 'GB', names: { en: 'Gigabytes', it: 'Gigabyte', de: 'Gigabytes', fr: 'Gigaoctets', es: 'Gigabytes' }, category: 'data' },
  { id: 'tb', slug: 'terabytes', symbol: 'TB', names: { en: 'Terabytes', it: 'Terabyte', de: 'Terabytes', fr: 'Téraoctets', es: 'Terabytes' }, category: 'data' },
]

// ============================================================
// CONVERSION PAIRS — every pair = a page
// ============================================================

export const CONVERSION_PAIRS: ConversionPair[] = [
  // LENGTH — all major pairs
  { from: 'in', to: 'cm', slug: 'inches-to-cm', convert: v => v * 2.54, category: 'length', popularValues: [1, 2, 3, 4, 5, 6, 8, 10, 12, 18, 24, 36, 48] },
  { from: 'cm', to: 'in', slug: 'cm-to-inches', convert: v => v / 2.54, category: 'length', popularValues: [1, 2, 5, 10, 15, 20, 25, 30, 50, 100] },
  { from: 'ft', to: 'm', slug: 'feet-to-meters', convert: v => v * 0.3048, category: 'length', popularValues: [1, 2, 3, 4, 5, 6, 8, 10, 20, 50, 100] },
  { from: 'm', to: 'ft', slug: 'meters-to-feet', convert: v => v / 0.3048, category: 'length', popularValues: [1, 2, 3, 5, 10, 20, 50, 100] },
  { from: 'mi', to: 'km', slug: 'miles-to-km', convert: v => v * 1.60934, category: 'length', popularValues: [1, 2, 3, 5, 10, 20, 26.2, 50, 100] },
  { from: 'km', to: 'mi', slug: 'km-to-miles', convert: v => v / 1.60934, category: 'length', popularValues: [1, 2, 5, 10, 20, 42, 50, 100] },
  { from: 'yd', to: 'm', slug: 'yards-to-meters', convert: v => v * 0.9144, category: 'length', popularValues: [1, 5, 10, 50, 100] },
  { from: 'm', to: 'yd', slug: 'meters-to-yards', convert: v => v / 0.9144, category: 'length', popularValues: [1, 5, 10, 50, 100] },
  { from: 'mm', to: 'in', slug: 'mm-to-inches', convert: v => v / 25.4, category: 'length', popularValues: [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 50] },
  { from: 'in', to: 'mm', slug: 'inches-to-mm', convert: v => v * 25.4, category: 'length', popularValues: [1, 2, 3, 4, 5, 6, 8, 10, 12] },
  { from: 'cm', to: 'mm', slug: 'cm-to-mm', convert: v => v * 10, category: 'length', popularValues: [1, 2, 5, 10, 20, 50] },
  { from: 'mm', to: 'cm', slug: 'mm-to-cm', convert: v => v / 10, category: 'length', popularValues: [1, 5, 10, 15, 20, 25, 50, 100] },
  { from: 'cm', to: 'm', slug: 'cm-to-meters', convert: v => v / 100, category: 'length', popularValues: [1, 10, 50, 100, 150, 170, 180, 200] },
  { from: 'm', to: 'cm', slug: 'meters-to-cm', convert: v => v * 100, category: 'length', popularValues: [1, 1.5, 1.7, 1.8, 2, 5, 10] },
  { from: 'km', to: 'm', slug: 'km-to-meters', convert: v => v * 1000, category: 'length', popularValues: [1, 2, 5, 10, 42.195, 100] },
  { from: 'm', to: 'km', slug: 'meters-to-km', convert: v => v / 1000, category: 'length', popularValues: [100, 200, 400, 500, 800, 1000, 1500, 5000, 10000] },
  { from: 'ft', to: 'in', slug: 'feet-to-inches', convert: v => v * 12, category: 'length', popularValues: [1, 2, 3, 4, 5, 6, 8, 10] },
  { from: 'in', to: 'ft', slug: 'inches-to-feet', convert: v => v / 12, category: 'length', popularValues: [12, 24, 36, 48, 60, 72] },
  { from: 'ft', to: 'cm', slug: 'feet-to-cm', convert: v => v * 30.48, category: 'length', popularValues: [1, 2, 3, 4, 5, 5.5, 5.7, 5.9, 6, 6.2] },
  { from: 'cm', to: 'ft', slug: 'cm-to-feet', convert: v => v / 30.48, category: 'length', popularValues: [150, 155, 160, 165, 170, 175, 180, 185, 190, 200] },
  { from: 'ft', to: 'mm', slug: 'feet-to-mm', convert: v => v * 304.8, category: 'length', popularValues: [1, 2, 3, 5, 10] },
  { from: 'mi', to: 'ft', slug: 'miles-to-feet', convert: v => v * 5280, category: 'length' },
  { from: 'ft', to: 'mi', slug: 'feet-to-miles', convert: v => v / 5280, category: 'length' },
  { from: 'mi', to: 'yd', slug: 'miles-to-yards', convert: v => v * 1760, category: 'length' },
  { from: 'in', to: 'yd', slug: 'inches-to-yards', convert: v => v / 36, category: 'length' },
  { from: 'yd', to: 'ft', slug: 'yards-to-feet', convert: v => v * 3, category: 'length' },
  { from: 'ft', to: 'yd', slug: 'feet-to-yards', convert: v => v / 3, category: 'length' },
  { from: 'cm', to: 'km', slug: 'cm-to-km', convert: v => v / 100000, category: 'length' },

  // WEIGHT — all major pairs
  { from: 'kg', to: 'lb', slug: 'kg-to-pounds', convert: v => v * 2.20462, category: 'weight', popularValues: [1, 2, 3, 5, 10, 20, 50, 60, 70, 80, 90, 100] },
  { from: 'lb', to: 'kg', slug: 'pounds-to-kg', convert: v => v * 0.453592, category: 'weight', popularValues: [1, 2, 5, 10, 20, 50, 100, 120, 150, 180, 200] },
  { from: 'oz', to: 'g', slug: 'ounces-to-grams', convert: v => v * 28.3495, category: 'weight', popularValues: [1, 2, 3, 4, 6, 8, 12, 16] },
  { from: 'g', to: 'oz', slug: 'grams-to-ounces', convert: v => v / 28.3495, category: 'weight', popularValues: [1, 5, 10, 25, 50, 100, 200, 250, 500] },
  { from: 'kg', to: 'g', slug: 'kg-to-grams', convert: v => v * 1000, category: 'weight', popularValues: [0.5, 1, 2, 5, 10] },
  { from: 'g', to: 'kg', slug: 'grams-to-kg', convert: v => v / 1000, category: 'weight', popularValues: [100, 250, 500, 1000, 2000, 5000] },
  { from: 'kg', to: 'oz', slug: 'kg-to-ounces', convert: v => v * 35.274, category: 'weight', popularValues: [1, 2, 5, 10] },
  { from: 'oz', to: 'kg', slug: 'ounces-to-kg', convert: v => v / 35.274, category: 'weight', popularValues: [1, 8, 16, 32] },
  { from: 'lb', to: 'oz', slug: 'pounds-to-ounces', convert: v => v * 16, category: 'weight', popularValues: [0.5, 1, 2, 3, 5, 10] },
  { from: 'oz', to: 'lb', slug: 'ounces-to-pounds', convert: v => v / 16, category: 'weight', popularValues: [1, 4, 8, 12, 16, 32] },
  { from: 'lb', to: 'g', slug: 'pounds-to-grams', convert: v => v * 453.592, category: 'weight', popularValues: [0.5, 1, 2, 5, 10] },
  { from: 'g', to: 'lb', slug: 'grams-to-pounds', convert: v => v / 453.592, category: 'weight', popularValues: [100, 200, 250, 500, 1000] },
  { from: 'kg', to: 'ton', slug: 'kg-to-metric-tons', convert: v => v / 1000, category: 'weight' },
  { from: 'ton', to: 'kg', slug: 'metric-tons-to-kg', convert: v => v * 1000, category: 'weight' },
  { from: 'lb', to: 'ton', slug: 'pounds-to-metric-tons', convert: v => v * 0.000453592, category: 'weight' },
  { from: 'ton', to: 'lb', slug: 'metric-tons-to-pounds', convert: v => v * 2204.62, category: 'weight' },
  { from: 'lb', to: 'st', slug: 'pounds-to-stones', convert: v => v / 14, category: 'weight' },
  { from: 'st', to: 'lb', slug: 'stones-to-pounds', convert: v => v * 14, category: 'weight' },
  { from: 'st', to: 'kg', slug: 'stones-to-kg', convert: v => v * 6.35029, category: 'weight' },
  { from: 'kg', to: 'st', slug: 'kg-to-stones', convert: v => v / 6.35029, category: 'weight' },
  { from: 'mg', to: 'g', slug: 'mg-to-grams', convert: v => v / 1000, category: 'weight' },
  { from: 'g', to: 'mg', slug: 'grams-to-mg', convert: v => v * 1000, category: 'weight' },
  { from: 'mg', to: 'kg', slug: 'mg-to-kg', convert: v => v / 1000000, category: 'weight' },
  { from: 'kg', to: 'mg', slug: 'kg-to-mg', convert: v => v * 1000000, category: 'weight' },

  // VOLUME
  { from: 'gal', to: 'l', slug: 'gallons-to-liters', convert: v => v * 3.78541, category: 'volume', popularValues: [1, 2, 3, 5, 10, 20, 50, 100] },
  { from: 'l', to: 'gal', slug: 'liters-to-gallons', convert: v => v / 3.78541, category: 'volume', popularValues: [1, 2, 3, 5, 10, 20, 50, 100] },
  { from: 'floz', to: 'ml', slug: 'fluid-ounces-to-ml', convert: v => v * 29.5735, category: 'volume', popularValues: [1, 2, 4, 8, 12, 16, 32, 64] },
  { from: 'ml', to: 'floz', slug: 'ml-to-fluid-ounces', convert: v => v / 29.5735, category: 'volume' },
  { from: 'l', to: 'ml', slug: 'liters-to-ml', convert: v => v * 1000, category: 'volume' },
  { from: 'ml', to: 'l', slug: 'ml-to-liters', convert: v => v / 1000, category: 'volume' },
  { from: 'gal', to: 'qt', slug: 'gallons-to-quarts', convert: v => v * 4, category: 'volume' },
  { from: 'qt', to: 'gal', slug: 'quarts-to-gallons', convert: v => v / 4, category: 'volume' },
  { from: 'qt', to: 'l', slug: 'quarts-to-liters', convert: v => v * 0.946353, category: 'volume' },
  { from: 'l', to: 'qt', slug: 'liters-to-quarts', convert: v => v / 0.946353, category: 'volume' },
  { from: 'pt', to: 'l', slug: 'pints-to-liters', convert: v => v * 0.473176, category: 'volume' },
  { from: 'l', to: 'pt', slug: 'liters-to-pints', convert: v => v / 0.473176, category: 'volume' },
  { from: 'gal', to: 'ml', slug: 'gallons-to-ml', convert: v => v * 3785.41, category: 'volume' },
  { from: 'gal', to: 'pt', slug: 'gallons-to-pints', convert: v => v * 8, category: 'volume' },
  { from: 'pt', to: 'ml', slug: 'pints-to-ml', convert: v => v * 473.176, category: 'volume' },
  { from: 'floz', to: 'l', slug: 'fluid-ounces-to-liters', convert: v => v * 0.0295735, category: 'volume' },

  // TEMPERATURE
  { from: 'f', to: 'c', slug: 'fahrenheit-to-celsius', convert: v => (v - 32) * 5 / 9, category: 'temperature', popularValues: [0, 32, 70, 72, 75, 98.6, 100, 150, 200, 250, 300, 325, 350, 375, 400, 425, 450, 500] },
  { from: 'c', to: 'f', slug: 'celsius-to-fahrenheit', convert: v => v * 9 / 5 + 32, category: 'temperature', popularValues: [0, 10, 15, 20, 25, 30, 36.6, 37, 40, 50, 100, 150, 180, 200, 220, 250] },
  { from: 'c', to: 'k', slug: 'celsius-to-kelvin', convert: v => v + 273.15, category: 'temperature' },
  { from: 'k', to: 'c', slug: 'kelvin-to-celsius', convert: v => v - 273.15, category: 'temperature' },
  { from: 'f', to: 'k', slug: 'fahrenheit-to-kelvin', convert: v => (v - 32) * 5 / 9 + 273.15, category: 'temperature' },
  { from: 'k', to: 'f', slug: 'kelvin-to-fahrenheit', convert: v => (v - 273.15) * 9 / 5 + 32, category: 'temperature' },

  // ENERGY
  { from: 'j', to: 'cal', slug: 'joules-to-calories', convert: v => v / 4.184, category: 'energy' },
  { from: 'cal', to: 'j', slug: 'calories-to-joules', convert: v => v * 4.184, category: 'energy' },
  { from: 'kcal', to: 'cal', slug: 'kcal-to-calories', convert: v => v * 1000, category: 'energy' },
  { from: 'cal', to: 'kcal', slug: 'calories-to-kcal', convert: v => v / 1000, category: 'energy' },
  { from: 'j', to: 'kj', slug: 'joules-to-kj', convert: v => v / 1000, category: 'energy' },
  { from: 'kj', to: 'j', slug: 'kj-to-joules', convert: v => v * 1000, category: 'energy' },
  { from: 'kj', to: 'kcal', slug: 'kj-to-kcal', convert: v => v / 4.184, category: 'energy' },
  { from: 'kcal', to: 'kj', slug: 'kcal-to-kj', convert: v => v * 4.184, category: 'energy' },
  { from: 'kwh', to: 'j', slug: 'kwh-to-joules', convert: v => v * 3600000, category: 'energy' },
  { from: 'j', to: 'kwh', slug: 'joules-to-kwh', convert: v => v / 3600000, category: 'energy' },
  { from: 'kwh', to: 'btu', slug: 'kwh-to-btu', convert: v => v * 3412.14, category: 'energy' },
  { from: 'btu', to: 'kwh', slug: 'btu-to-kwh', convert: v => v / 3412.14, category: 'energy' },
  { from: 'btu', to: 'j', slug: 'btu-to-joules', convert: v => v * 1055.06, category: 'energy' },
  { from: 'j', to: 'btu', slug: 'joules-to-btu', convert: v => v / 1055.06, category: 'energy' },
  { from: 'btu', to: 'kj', slug: 'btu-to-kj', convert: v => v * 1.05506, category: 'energy' },
  { from: 'kj', to: 'btu', slug: 'kj-to-btu', convert: v => v / 1.05506, category: 'energy' },
  { from: 'kcal', to: 'j', slug: 'kcal-to-joules', convert: v => v * 4184, category: 'energy' },
  { from: 'j', to: 'kcal', slug: 'joules-to-kcal', convert: v => v / 4184, category: 'energy' },

  // POWER
  { from: 'w', to: 'kw', slug: 'watts-to-kw', convert: v => v / 1000, category: 'power' },
  { from: 'kw', to: 'w', slug: 'kw-to-watts', convert: v => v * 1000, category: 'power' },
  { from: 'hp', to: 'kw', slug: 'hp-to-kw', convert: v => v * 0.7457, category: 'power', popularValues: [1, 2, 5, 10, 50, 100, 150, 200, 300, 500] },
  { from: 'kw', to: 'hp', slug: 'kw-to-hp', convert: v => v / 0.7457, category: 'power', popularValues: [1, 2, 5, 10, 50, 75, 100, 150] },
  { from: 'hp', to: 'w', slug: 'hp-to-watts', convert: v => v * 745.7, category: 'power', popularValues: [0.5, 1, 2, 5, 10] },
  { from: 'w', to: 'hp', slug: 'watts-to-hp', convert: v => v / 745.7, category: 'power', popularValues: [100, 500, 746, 1000, 1500, 2000] },
  { from: 'btuh', to: 'w', slug: 'btu-per-hour-to-watts', convert: v => v * 0.29307, category: 'power' },
  { from: 'w', to: 'btuh', slug: 'watts-to-btu-per-hour', convert: v => v / 0.29307, category: 'power' },
  { from: 'btuh', to: 'kw', slug: 'btu-per-hour-to-kw', convert: v => v * 0.00029307, category: 'power' },
  { from: 'kw', to: 'btuh', slug: 'kw-to-btu-per-hour', convert: v => v / 0.00029307, category: 'power' },

  // AREA
  { from: 'sqft', to: 'sqm', slug: 'square-feet-to-square-meters', convert: v => v * 0.092903, category: 'area', popularValues: [1, 100, 200, 500, 1000, 1500, 2000, 2500, 3000, 5000] },
  { from: 'sqm', to: 'sqft', slug: 'square-meters-to-square-feet', convert: v => v / 0.092903, category: 'area', popularValues: [1, 10, 20, 50, 100, 200, 500] },
  { from: 'ac', to: 'ha', slug: 'acres-to-hectares', convert: v => v * 0.404686, category: 'area' },
  { from: 'ha', to: 'ac', slug: 'hectares-to-acres', convert: v => v / 0.404686, category: 'area' },
  { from: 'sqkm', to: 'sqmi', slug: 'square-km-to-square-miles', convert: v => v / 2.58999, category: 'area' },
  { from: 'sqmi', to: 'sqkm', slug: 'square-miles-to-square-km', convert: v => v * 2.58999, category: 'area' },
  { from: 'ac', to: 'sqft', slug: 'acres-to-square-feet', convert: v => v * 43560, category: 'area' },
  { from: 'sqft', to: 'ac', slug: 'square-feet-to-acres', convert: v => v / 43560, category: 'area' },
  { from: 'ha', to: 'sqm', slug: 'hectares-to-square-meters', convert: v => v * 10000, category: 'area' },
  { from: 'sqm', to: 'ha', slug: 'square-meters-to-hectares', convert: v => v / 10000, category: 'area' },
  { from: 'ac', to: 'sqm', slug: 'acres-to-square-meters', convert: v => v * 4046.86, category: 'area' },
  { from: 'sqm', to: 'ac', slug: 'square-meters-to-acres', convert: v => v / 4046.86, category: 'area' },

  // SPEED
  { from: 'kmh', to: 'mph', slug: 'kmh-to-mph', convert: v => v / 1.60934, category: 'speed', popularValues: [1, 10, 30, 50, 60, 80, 100, 120, 130, 200, 300] },
  { from: 'mph', to: 'kmh', slug: 'mph-to-kmh', convert: v => v * 1.60934, category: 'speed', popularValues: [1, 10, 30, 55, 60, 65, 70, 75, 80, 100, 200] },
  { from: 'ms', to: 'kmh', slug: 'ms-to-kmh', convert: v => v * 3.6, category: 'speed' },
  { from: 'kmh', to: 'ms', slug: 'kmh-to-ms', convert: v => v / 3.6, category: 'speed' },
  { from: 'mph', to: 'ms', slug: 'mph-to-ms', convert: v => v * 0.44704, category: 'speed' },
  { from: 'ms', to: 'mph', slug: 'ms-to-mph', convert: v => v / 0.44704, category: 'speed' },
  { from: 'kn', to: 'kmh', slug: 'knots-to-kmh', convert: v => v * 1.852, category: 'speed' },
  { from: 'kmh', to: 'kn', slug: 'kmh-to-knots', convert: v => v / 1.852, category: 'speed' },
  { from: 'kn', to: 'mph', slug: 'knots-to-mph', convert: v => v * 1.15078, category: 'speed' },
  { from: 'mph', to: 'kn', slug: 'mph-to-knots', convert: v => v / 1.15078, category: 'speed' },

  // PRESSURE
  { from: 'bar', to: 'psi', slug: 'bar-to-psi', convert: v => v * 14.5038, category: 'pressure', popularValues: [1, 2, 2.5, 3, 4, 5, 6, 8, 10] },
  { from: 'psi', to: 'bar', slug: 'psi-to-bar', convert: v => v / 14.5038, category: 'pressure', popularValues: [10, 14.7, 20, 30, 40, 50, 60, 80, 100] },
  { from: 'atm', to: 'pa', slug: 'atm-to-pascals', convert: v => v * 101325, category: 'pressure' },
  { from: 'pa', to: 'atm', slug: 'pascals-to-atm', convert: v => v / 101325, category: 'pressure' },
  { from: 'atm', to: 'bar', slug: 'atm-to-bar', convert: v => v * 1.01325, category: 'pressure' },
  { from: 'bar', to: 'atm', slug: 'bar-to-atm', convert: v => v / 1.01325, category: 'pressure' },
  { from: 'atm', to: 'psi', slug: 'atm-to-psi', convert: v => v * 14.696, category: 'pressure' },
  { from: 'psi', to: 'atm', slug: 'psi-to-atm', convert: v => v / 14.696, category: 'pressure' },
  { from: 'pa', to: 'bar', slug: 'pascals-to-bar', convert: v => v / 100000, category: 'pressure' },
  { from: 'bar', to: 'pa', slug: 'bar-to-pascals', convert: v => v * 100000, category: 'pressure' },

  // DATA
  { from: 'kb', to: 'mb', slug: 'kb-to-mb', convert: v => v / 1024, category: 'data' },
  { from: 'mb', to: 'kb', slug: 'mb-to-kb', convert: v => v * 1024, category: 'data' },
  { from: 'mb', to: 'gb', slug: 'mb-to-gb', convert: v => v / 1024, category: 'data' },
  { from: 'gb', to: 'mb', slug: 'gb-to-mb', convert: v => v * 1024, category: 'data' },
  { from: 'gb', to: 'tb', slug: 'gb-to-tb', convert: v => v / 1024, category: 'data' },
  { from: 'tb', to: 'gb', slug: 'tb-to-gb', convert: v => v * 1024, category: 'data' },
  { from: 'b', to: 'kb', slug: 'bytes-to-kb', convert: v => v / 1024, category: 'data' },
  { from: 'kb', to: 'b', slug: 'kb-to-bytes', convert: v => v * 1024, category: 'data' },
  { from: 'b', to: 'mb', slug: 'bytes-to-mb', convert: v => v / (1024 * 1024), category: 'data' },
  { from: 'mb', to: 'b', slug: 'mb-to-bytes', convert: v => v * 1024 * 1024, category: 'data' },
]

// ============================================================
// HELPERS
// ============================================================

export function getUnit(id: string) {
  return UNITS.find(u => u.id === id)
}

export function getPairBySlug(slug: string) {
  return CONVERSION_PAIRS.find(p => p.slug === slug)
}

export function getPairsByCategory(category: ConversionCategory) {
  return CONVERSION_PAIRS.filter(p => p.category === category)
}

export function getAllCategories(): ConversionCategory[] {
  return [...new Set(CONVERSION_PAIRS.map(p => p.category))]
}

// Extract linear coefficients from convert function: result = value * factor + offset
// Works for ALL conversions (including temperature)
export function getLinearCoefficients(pair: ConversionPair): { factor: number; offset: number } {
  const offset = pair.convert(0)
  const factor = pair.convert(1) - offset
  return { factor, offset }
}

export function formatResult(value: number): string {
  if (Math.abs(value) >= 1000) return value.toFixed(2)
  if (Math.abs(value) >= 1) return value.toFixed(4).replace(/\.?0+$/, '')
  return value.toPrecision(6).replace(/\.?0+$/, '')
}

export function generateConversionTableForPair(pair: ConversionPair) {
  const values = [0.01, 0.1, 0.5, 1, 2, 3, 5, 10, 20, 25, 50, 100, 500, 1000]
  return values.map(v => ({ input: v, output: pair.convert(v) }))
}

export const CATEGORY_NAMES: Record<ConversionCategory, Record<Locale, string>> = {
  length: { en: 'Length', it: 'Lunghezza', de: 'Länge', fr: 'Longueur', es: 'Longitud' },
  weight: { en: 'Weight & Mass', it: 'Peso e Massa', de: 'Gewicht & Masse', fr: 'Poids et Masse', es: 'Peso y Masa' },
  volume: { en: 'Volume', it: 'Volume', de: 'Volumen', fr: 'Volume', es: 'Volumen' },
  temperature: { en: 'Temperature', it: 'Temperatura', de: 'Temperatur', fr: 'Température', es: 'Temperatura' },
  energy: { en: 'Energy', it: 'Energia', de: 'Energie', fr: 'Énergie', es: 'Energía' },
  power: { en: 'Power', it: 'Potenza', de: 'Leistung', fr: 'Puissance', es: 'Potencia' },
  area: { en: 'Area', it: 'Superficie', de: 'Fläche', fr: 'Surface', es: 'Área' },
  speed: { en: 'Speed', it: 'Velocità', de: 'Geschwindigkeit', fr: 'Vitesse', es: 'Velocidad' },
  pressure: { en: 'Pressure', it: 'Pressione', de: 'Druck', fr: 'Pression', es: 'Presión' },
  data: { en: 'Data Storage', it: 'Archiviazione Dati', de: 'Datenspeicher', fr: 'Stockage de données', es: 'Almacenamiento de datos' },
}

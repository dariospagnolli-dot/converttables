export interface ConversionUnit {
  id: string
  from: string
  to: string
  convert: (v: number) => number
  reverse: (v: number) => number
  category: 'length' | 'weight' | 'volume' | 'temperature' | 'area'
}

export const CONVERSIONS: ConversionUnit[] = [
  // Length
  {
    id: 'inches-to-cm',
    from: 'inches', to: 'centimeters',
    convert: (v) => v * 2.54,
    reverse: (v) => v / 2.54,
    category: 'length'
  },
  {
    id: 'feet-to-meters',
    from: 'feet', to: 'meters',
    convert: (v) => v * 0.3048,
    reverse: (v) => v / 0.3048,
    category: 'length'
  },
  {
    id: 'miles-to-km',
    from: 'miles', to: 'kilometers',
    convert: (v) => v * 1.60934,
    reverse: (v) => v / 1.60934,
    category: 'length'
  },
  {
    id: 'yards-to-meters',
    from: 'yards', to: 'meters',
    convert: (v) => v * 0.9144,
    reverse: (v) => v / 0.9144,
    category: 'length'
  },
  {
    id: 'mm-to-inches',
    from: 'millimeters', to: 'inches',
    convert: (v) => v / 25.4,
    reverse: (v) => v * 25.4,
    category: 'length'
  },

  // Weight
  {
    id: 'pounds-to-kg',
    from: 'pounds', to: 'kilograms',
    convert: (v) => v * 0.453592,
    reverse: (v) => v / 0.453592,
    category: 'weight'
  },
  {
    id: 'ounces-to-grams',
    from: 'ounces', to: 'grams',
    convert: (v) => v * 28.3495,
    reverse: (v) => v / 28.3495,
    category: 'weight'
  },
  {
    id: 'kg-to-pounds',
    from: 'kilograms', to: 'pounds',
    convert: (v) => v * 2.20462,
    reverse: (v) => v / 2.20462,
    category: 'weight'
  },

  // Volume
  {
    id: 'gallons-to-liters',
    from: 'gallons', to: 'liters',
    convert: (v) => v * 3.78541,
    reverse: (v) => v / 3.78541,
    category: 'volume'
  },
  {
    id: 'fl-oz-to-ml',
    from: 'fluid ounces', to: 'milliliters',
    convert: (v) => v * 29.5735,
    reverse: (v) => v / 29.5735,
    category: 'volume'
  },
  {
    id: 'liters-to-gallons',
    from: 'liters', to: 'gallons',
    convert: (v) => v / 3.78541,
    reverse: (v) => v * 3.78541,
    category: 'volume'
  },

  // Temperature
  {
    id: 'fahrenheit-to-celsius',
    from: 'Fahrenheit', to: 'Celsius',
    convert: (v) => (v - 32) * 5 / 9,
    reverse: (v) => v * 9 / 5 + 32,
    category: 'temperature'
  },
  {
    id: 'celsius-to-fahrenheit',
    from: 'Celsius', to: 'Fahrenheit',
    convert: (v) => v * 9 / 5 + 32,
    reverse: (v) => (v - 32) * 5 / 9,
    category: 'temperature'
  },

  // Area
  {
    id: 'sqft-to-sqm',
    from: 'sq feet', to: 'sq meters',
    convert: (v) => v * 0.0929,
    reverse: (v) => v / 0.0929,
    category: 'area'
  },
  {
    id: 'acres-to-hectares',
    from: 'acres', to: 'hectares',
    convert: (v) => v * 0.404686,
    reverse: (v) => v / 0.404686,
    category: 'area'
  },
]

export function getConversionById(id: string) {
  return CONVERSIONS.find(c => c.id === id)
}

export function getConversionsByCategory(category: ConversionUnit['category']) {
  return CONVERSIONS.filter(c => c.category === category)
}

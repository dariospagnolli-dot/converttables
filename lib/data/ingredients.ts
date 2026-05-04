import type { Locale } from '@/lib/i18n/config'

export interface Ingredient {
  id: string
  slug: string
  density_g_per_ml: number
  names: Record<Locale, string>
  category: 'flour' | 'sugar' | 'liquid' | 'fat' | 'grain' | 'dairy' | 'spice' | 'other'
}

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'all-purpose-flour',
    slug: 'flour',
    density_g_per_ml: 0.529,
    names: { en: 'All-Purpose Flour', it: 'Farina 00' },
    category: 'flour'
  },
  {
    id: 'bread-flour',
    slug: 'bread-flour',
    density_g_per_ml: 0.550,
    names: { en: 'Bread Flour', it: 'Farina Manitoba' },
    category: 'flour'
  },
  {
    id: 'cake-flour',
    slug: 'cake-flour',
    density_g_per_ml: 0.488,
    names: { en: 'Cake Flour', it: 'Farina per dolci' },
    category: 'flour'
  },
  {
    id: 'whole-wheat-flour',
    slug: 'whole-wheat-flour',
    density_g_per_ml: 0.512,
    names: { en: 'Whole Wheat Flour', it: 'Farina integrale' },
    category: 'flour'
  },
  {
    id: 'almond-flour',
    slug: 'almond-flour',
    density_g_per_ml: 0.400,
    names: { en: 'Almond Flour', it: 'Farina di mandorle' },
    category: 'flour'
  },
  {
    id: 'granulated-sugar',
    slug: 'sugar',
    density_g_per_ml: 0.845,
    names: { en: 'Granulated Sugar', it: 'Zucchero semolato' },
    category: 'sugar'
  },
  {
    id: 'powdered-sugar',
    slug: 'powdered-sugar',
    density_g_per_ml: 0.560,
    names: { en: 'Powdered Sugar', it: 'Zucchero a velo' },
    category: 'sugar'
  },
  {
    id: 'brown-sugar',
    slug: 'brown-sugar',
    density_g_per_ml: 0.830,
    names: { en: 'Brown Sugar', it: 'Zucchero di canna' },
    category: 'sugar'
  },
  {
    id: 'butter',
    slug: 'butter',
    density_g_per_ml: 0.911,
    names: { en: 'Butter', it: 'Burro' },
    category: 'fat'
  },
  {
    id: 'olive-oil',
    slug: 'olive-oil',
    density_g_per_ml: 0.914,
    names: { en: 'Olive Oil', it: 'Olio d\'oliva' },
    category: 'liquid'
  },
  {
    id: 'vegetable-oil',
    slug: 'vegetable-oil',
    density_g_per_ml: 0.920,
    names: { en: 'Vegetable Oil', it: 'Olio di semi' },
    category: 'liquid'
  },
  {
    id: 'milk',
    slug: 'milk',
    density_g_per_ml: 1.030,
    names: { en: 'Milk', it: 'Latte' },
    category: 'liquid'
  },
  {
    id: 'heavy-cream',
    slug: 'heavy-cream',
    density_g_per_ml: 0.994,
    names: { en: 'Heavy Cream', it: 'Panna da montare' },
    category: 'dairy'
  },
  {
    id: 'water',
    slug: 'water',
    density_g_per_ml: 1.000,
    names: { en: 'Water', it: 'Acqua' },
    category: 'liquid'
  },
  {
    id: 'honey',
    slug: 'honey',
    density_g_per_ml: 1.420,
    names: { en: 'Honey', it: 'Miele' },
    category: 'other'
  },
  {
    id: 'rice',
    slug: 'rice',
    density_g_per_ml: 0.817,
    names: { en: 'White Rice (uncooked)', it: 'Riso bianco (crudo)' },
    category: 'grain'
  },
  {
    id: 'oats',
    slug: 'oats',
    density_g_per_ml: 0.340,
    names: { en: 'Rolled Oats', it: 'Fiocchi d\'avena' },
    category: 'grain'
  },
  {
    id: 'cocoa-powder',
    slug: 'cocoa-powder',
    density_g_per_ml: 0.520,
    names: { en: 'Cocoa Powder', it: 'Cacao in polvere' },
    category: 'other'
  },
  {
    id: 'salt',
    slug: 'salt',
    density_g_per_ml: 1.217,
    names: { en: 'Salt', it: 'Sale' },
    category: 'spice'
  },
  {
    id: 'baking-powder',
    slug: 'baking-powder',
    density_g_per_ml: 0.900,
    names: { en: 'Baking Powder', it: 'Lievito in polvere' },
    category: 'other'
  },
  {
    id: 'cornstarch',
    slug: 'cornstarch',
    density_g_per_ml: 0.540,
    names: { en: 'Cornstarch', it: 'Amido di mais' },
    category: 'other'
  },
  {
    id: 'maple-syrup',
    slug: 'maple-syrup',
    density_g_per_ml: 1.320,
    names: { en: 'Maple Syrup', it: 'Sciroppo d\'acero' },
    category: 'liquid'
  },
]

export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return INGREDIENTS.find(i => i.slug === slug)
}

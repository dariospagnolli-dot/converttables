import type { Locale } from '@/lib/i18n/config'

export interface Ingredient {
  id: string
  slug: string
  density_g_per_ml: number
  names: Record<Locale, string>
  category: 'flour' | 'sugar' | 'liquid' | 'fat' | 'grain' | 'dairy' | 'nut' | 'spice' | 'other'
}

export const INGREDIENTS: Ingredient[] = [
  // FLOURS
  { id: 'all-purpose-flour', slug: 'flour', density_g_per_ml: 0.529, names: { en: 'All-Purpose Flour', it: 'Farina 00' }, category: 'flour' },
  { id: 'bread-flour', slug: 'bread-flour', density_g_per_ml: 0.550, names: { en: 'Bread Flour', it: 'Farina Manitoba' }, category: 'flour' },
  { id: 'cake-flour', slug: 'cake-flour', density_g_per_ml: 0.488, names: { en: 'Cake Flour', it: 'Farina per dolci' }, category: 'flour' },
  { id: 'whole-wheat-flour', slug: 'whole-wheat-flour', density_g_per_ml: 0.512, names: { en: 'Whole Wheat Flour', it: 'Farina integrale' }, category: 'flour' },
  { id: 'almond-flour', slug: 'almond-flour', density_g_per_ml: 0.400, names: { en: 'Almond Flour', it: 'Farina di mandorle' }, category: 'flour' },
  { id: 'coconut-flour', slug: 'coconut-flour', density_g_per_ml: 0.500, names: { en: 'Coconut Flour', it: 'Farina di cocco' }, category: 'flour' },
  { id: 'rye-flour', slug: 'rye-flour', density_g_per_ml: 0.520, names: { en: 'Rye Flour', it: 'Farina di segale' }, category: 'flour' },
  { id: 'semolina', slug: 'semolina', density_g_per_ml: 0.601, names: { en: 'Semolina', it: 'Semola' }, category: 'flour' },
  { id: 'cornmeal', slug: 'cornmeal', density_g_per_ml: 0.640, names: { en: 'Cornmeal', it: 'Farina di mais' }, category: 'flour' },

  // SUGARS
  { id: 'granulated-sugar', slug: 'sugar', density_g_per_ml: 0.845, names: { en: 'Granulated Sugar', it: 'Zucchero semolato' }, category: 'sugar' },
  { id: 'powdered-sugar', slug: 'powdered-sugar', density_g_per_ml: 0.560, names: { en: 'Powdered Sugar', it: 'Zucchero a velo' }, category: 'sugar' },
  { id: 'brown-sugar', slug: 'brown-sugar', density_g_per_ml: 0.830, names: { en: 'Brown Sugar (packed)', it: 'Zucchero di canna (compatto)' }, category: 'sugar' },
  { id: 'caster-sugar', slug: 'caster-sugar', density_g_per_ml: 0.800, names: { en: 'Caster Sugar', it: 'Zucchero fino' }, category: 'sugar' },
  { id: 'demerara-sugar', slug: 'demerara-sugar', density_g_per_ml: 0.880, names: { en: 'Demerara Sugar', it: 'Zucchero Demerara' }, category: 'sugar' },

  // LIQUIDS
  { id: 'water', slug: 'water', density_g_per_ml: 1.000, names: { en: 'Water', it: 'Acqua' }, category: 'liquid' },
  { id: 'milk', slug: 'milk', density_g_per_ml: 1.030, names: { en: 'Milk', it: 'Latte' }, category: 'liquid' },
  { id: 'olive-oil', slug: 'olive-oil', density_g_per_ml: 0.914, names: { en: 'Olive Oil', it: 'Olio d\'oliva' }, category: 'liquid' },
  { id: 'vegetable-oil', slug: 'vegetable-oil', density_g_per_ml: 0.920, names: { en: 'Vegetable Oil', it: 'Olio di semi' }, category: 'liquid' },
  { id: 'coconut-oil', slug: 'coconut-oil', density_g_per_ml: 0.925, names: { en: 'Coconut Oil', it: 'Olio di cocco' }, category: 'liquid' },
  { id: 'honey', slug: 'honey', density_g_per_ml: 1.420, names: { en: 'Honey', it: 'Miele' }, category: 'liquid' },
  { id: 'maple-syrup', slug: 'maple-syrup', density_g_per_ml: 1.320, names: { en: 'Maple Syrup', it: 'Sciroppo d\'acero' }, category: 'liquid' },
  { id: 'corn-syrup', slug: 'corn-syrup', density_g_per_ml: 1.380, names: { en: 'Corn Syrup', it: 'Sciroppo di mais' }, category: 'liquid' },
  { id: 'condensed-milk', slug: 'condensed-milk', density_g_per_ml: 1.330, names: { en: 'Condensed Milk', it: 'Latte condensato' }, category: 'liquid' },

  // FATS & DAIRY
  { id: 'butter', slug: 'butter', density_g_per_ml: 0.911, names: { en: 'Butter', it: 'Burro' }, category: 'fat' },
  { id: 'margarine', slug: 'margarine', density_g_per_ml: 0.900, names: { en: 'Margarine', it: 'Margarina' }, category: 'fat' },
  { id: 'lard', slug: 'lard', density_g_per_ml: 0.920, names: { en: 'Lard', it: 'Strutto' }, category: 'fat' },
  { id: 'cream-cheese', slug: 'cream-cheese', density_g_per_ml: 0.960, names: { en: 'Cream Cheese', it: 'Formaggio cremoso' }, category: 'dairy' },
  { id: 'heavy-cream', slug: 'heavy-cream', density_g_per_ml: 0.994, names: { en: 'Heavy Cream', it: 'Panna da montare' }, category: 'dairy' },
  { id: 'sour-cream', slug: 'sour-cream', density_g_per_ml: 0.960, names: { en: 'Sour Cream', it: 'Panna acida' }, category: 'dairy' },
  { id: 'yogurt', slug: 'yogurt', density_g_per_ml: 1.030, names: { en: 'Yogurt', it: 'Yogurt' }, category: 'dairy' },
  { id: 'ricotta', slug: 'ricotta', density_g_per_ml: 1.020, names: { en: 'Ricotta', it: 'Ricotta' }, category: 'dairy' },
  { id: 'parmesan-grated', slug: 'parmesan', density_g_per_ml: 0.440, names: { en: 'Parmesan (grated)', it: 'Parmigiano (grattugiato)' }, category: 'dairy' },

  // GRAINS & SEEDS
  { id: 'rice', slug: 'rice', density_g_per_ml: 0.817, names: { en: 'White Rice (uncooked)', it: 'Riso bianco (crudo)' }, category: 'grain' },
  { id: 'brown-rice', slug: 'brown-rice', density_g_per_ml: 0.800, names: { en: 'Brown Rice (uncooked)', it: 'Riso integrale (crudo)' }, category: 'grain' },
  { id: 'oats', slug: 'oats', density_g_per_ml: 0.340, names: { en: 'Rolled Oats', it: 'Fiocchi d\'avena' }, category: 'grain' },
  { id: 'quinoa', slug: 'quinoa', density_g_per_ml: 0.720, names: { en: 'Quinoa', it: 'Quinoa' }, category: 'grain' },
  { id: 'couscous', slug: 'couscous', density_g_per_ml: 0.630, names: { en: 'Couscous', it: 'Cous cous' }, category: 'grain' },
  { id: 'breadcrumbs', slug: 'breadcrumbs', density_g_per_ml: 0.450, names: { en: 'Breadcrumbs', it: 'Pangrattato' }, category: 'grain' },
  { id: 'chia-seeds', slug: 'chia-seeds', density_g_per_ml: 0.720, names: { en: 'Chia Seeds', it: 'Semi di chia' }, category: 'grain' },
  { id: 'flaxseed', slug: 'flaxseed', density_g_per_ml: 0.530, names: { en: 'Flaxseed (ground)', it: 'Semi di lino (macinati)' }, category: 'grain' },

  // NUTS
  { id: 'peanut-butter', slug: 'peanut-butter', density_g_per_ml: 1.090, names: { en: 'Peanut Butter', it: 'Burro di arachidi' }, category: 'nut' },
  { id: 'walnuts-chopped', slug: 'walnuts', density_g_per_ml: 0.470, names: { en: 'Walnuts (chopped)', it: 'Noci (tritate)' }, category: 'nut' },
  { id: 'almonds-sliced', slug: 'almonds', density_g_per_ml: 0.370, names: { en: 'Almonds (sliced)', it: 'Mandorle (a fette)' }, category: 'nut' },
  { id: 'pecans-chopped', slug: 'pecans', density_g_per_ml: 0.450, names: { en: 'Pecans (chopped)', it: 'Noci pecan (tritate)' }, category: 'nut' },
  { id: 'hazelnuts', slug: 'hazelnuts', density_g_per_ml: 0.470, names: { en: 'Hazelnuts (whole)', it: 'Nocciole (intere)' }, category: 'nut' },
  { id: 'coconut-shredded', slug: 'coconut-shredded', density_g_per_ml: 0.340, names: { en: 'Coconut (shredded)', it: 'Cocco (grattugiato)' }, category: 'nut' },

  // SPICES & LEAVENING
  { id: 'salt', slug: 'salt', density_g_per_ml: 1.217, names: { en: 'Salt', it: 'Sale' }, category: 'spice' },
  { id: 'baking-powder', slug: 'baking-powder', density_g_per_ml: 0.900, names: { en: 'Baking Powder', it: 'Lievito in polvere' }, category: 'spice' },
  { id: 'baking-soda', slug: 'baking-soda', density_g_per_ml: 0.960, names: { en: 'Baking Soda', it: 'Bicarbonato' }, category: 'spice' },
  { id: 'cinnamon', slug: 'cinnamon', density_g_per_ml: 0.560, names: { en: 'Cinnamon (ground)', it: 'Cannella (in polvere)' }, category: 'spice' },
  { id: 'nutmeg', slug: 'nutmeg', density_g_per_ml: 0.530, names: { en: 'Nutmeg (ground)', it: 'Noce moscata (in polvere)' }, category: 'spice' },

  // OTHER
  { id: 'cocoa-powder', slug: 'cocoa-powder', density_g_per_ml: 0.520, names: { en: 'Cocoa Powder', it: 'Cacao in polvere' }, category: 'other' },
  { id: 'cornstarch', slug: 'cornstarch', density_g_per_ml: 0.540, names: { en: 'Cornstarch', it: 'Amido di mais' }, category: 'other' },
  { id: 'gelatin', slug: 'gelatin', density_g_per_ml: 0.680, names: { en: 'Gelatin (powder)', it: 'Gelatina (in polvere)' }, category: 'other' },
  { id: 'chocolate-chips', slug: 'chocolate-chips', density_g_per_ml: 0.680, names: { en: 'Chocolate Chips', it: 'Gocce di cioccolato' }, category: 'other' },
  { id: 'raisins', slug: 'raisins', density_g_per_ml: 0.670, names: { en: 'Raisins', it: 'Uvetta' }, category: 'other' },
  { id: 'dried-cranberries', slug: 'dried-cranberries', density_g_per_ml: 0.530, names: { en: 'Dried Cranberries', it: 'Mirtilli rossi essiccati' }, category: 'other' },
  { id: 'poppy-seeds', slug: 'poppy-seeds', density_g_per_ml: 0.610, names: { en: 'Poppy Seeds', it: 'Semi di papavero' }, category: 'other' },
  { id: 'protein-powder', slug: 'protein-powder', density_g_per_ml: 0.400, names: { en: 'Protein Powder (whey)', it: 'Proteine in polvere (whey)' }, category: 'other' },
]

export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return INGREDIENTS.find(i => i.slug === slug)
}

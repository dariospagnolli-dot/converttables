import type { Ingredient } from '@/lib/data/ingredients'

export const CUP_SIZES = {
  us: 236.588,
  metric: 250,
  imperial: 284.131,
} as const

export type CupSize = keyof typeof CUP_SIZES

export function cupsToGrams(cups: number, ingredient: Ingredient, cupSize: CupSize = 'us'): number {
  const ml = cups * CUP_SIZES[cupSize]
  return Math.round(ml * ingredient.density_g_per_ml)
}

export function gramsToCups(grams: number, ingredient: Ingredient, cupSize: CupSize = 'us'): number {
  const ml = grams / ingredient.density_g_per_ml
  return Math.round((ml / CUP_SIZES[cupSize]) * 1000) / 1000
}

export function cupsToMl(cups: number, cupSize: CupSize = 'us'): number {
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

// Generate a conversion table for common amounts
export function generateConversionTable(ingredient: Ingredient, cupSize: CupSize = 'us') {
  const cupAmounts = [0.25, 0.333, 0.5, 0.667, 0.75, 1, 1.5, 2, 3, 4]
  return cupAmounts.map(cups => ({
    cups,
    grams: cupsToGrams(cups, ingredient, cupSize),
    ml: cupsToMl(cups, cupSize),
  }))
}

import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { CONVERSION_PAIRS } from '@/lib/conversions/general'
import { HOW_MANY_ENTRIES } from '@/lib/data/how-many'
import { COLOR_PAGES } from '@/lib/data/colors'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://convertmath.com'

const TABLE_PAGES = [
  'multiplication', 'roman-numerals', 'binary-hex', 'squares-cubes',
  'prime-numbers', 'powers-of-2', 'logarithm', 'ascii', 'math-symbols',
  'greek-alphabet', 'fractions', 'trigonometry', 'html-colors',
  'resistor-color-code', 'awg-wire-gauge', 'shoe-sizes',
  'alt-codes', 'addition', 'fibonacci', 'pi', 'percentage-chart', 'exponent-rules',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    entries.push({ url: `${BASE_URL}/${locale}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 })
    entries.push({ url: `${BASE_URL}/${locale}/convert`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 })

    // Cups to grams
    entries.push({ url: `${BASE_URL}/${locale}/convert/cups-to-grams`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 })
    entries.push({ url: `${BASE_URL}/${locale}/convert/grams-to-cups`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 })
    for (const ing of INGREDIENTS) {
      entries.push({ url: `${BASE_URL}/${locale}/convert/cups-to-grams/${ing.slug}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 })
      entries.push({ url: `${BASE_URL}/${locale}/convert/grams-to-cups/${ing.slug}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 })
    }

    // General conversions
    for (const pair of CONVERSION_PAIRS) {
      entries.push({ url: `${BASE_URL}/${locale}/convert/${pair.slug}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 })
      if (pair.popularValues) {
        for (const val of pair.popularValues) {
          entries.push({ url: `${BASE_URL}/${locale}/convert/${pair.slug}/${val}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 })
        }
      }
    }

    // How many
    for (const entry of HOW_MANY_ENTRIES) {
      entries.push({ url: `${BASE_URL}/${locale}/convert/how-many/${entry.slug}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 })
    }

    // Color pages
    for (const color of COLOR_PAGES) {
      entries.push({ url: `${BASE_URL}/${locale}/tables/colors/${color.slug}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 })
    }

    // Tables
    for (const table of TABLE_PAGES) {
      entries.push({ url: `${BASE_URL}/${locale}/tables/${table}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 })
    }

    // Individual Roman numeral pages (1-100 + key numbers)
    const romanNumbers = [...Array.from({ length: 100 }, (_, i) => i + 1), 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 1776, 1900, 1999, 2000, 2024, 2025, 2026, 3000, 3999]
    for (const n of romanNumbers) {
      entries.push({ url: `${BASE_URL}/${locale}/tables/roman-numerals/${n}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 })
    }

    // Individual fraction pages
    const fractions = ['1-2','1-3','2-3','1-4','3-4','1-5','2-5','3-5','4-5','1-6','5-6','1-7','2-7','3-7','4-7','5-7','6-7','1-8','3-8','5-8','7-8','1-9','2-9','4-9','5-9','7-9','8-9','1-10','3-10','7-10','9-10','1-12','5-12','7-12','11-12','1-16','3-16','5-16','7-16','9-16','11-16','13-16','15-16','1-32','1-64','1-100','1-1000']
    for (const f of fractions) {
      entries.push({ url: `${BASE_URL}/${locale}/tables/fractions/${f}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 })
    }

    // Individual ASCII code pages (0-127)
    for (let i = 0; i < 128; i++) {
      entries.push({ url: `${BASE_URL}/${locale}/tables/ascii/${i}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 })
    }
  }

  return entries
}

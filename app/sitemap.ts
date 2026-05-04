import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { INGREDIENTS } from '@/lib/data/ingredients'
import { CONVERSION_PAIRS } from '@/lib/conversions/general'
import { HOW_MANY_ENTRIES } from '@/lib/data/how-many'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://convertmath.com'

const TABLE_PAGES = ['multiplication', 'roman-numerals', 'binary-hex', 'squares-cubes', 'prime-numbers', 'powers-of-2', 'logarithm']

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

    // Tables
    for (const table of TABLE_PAGES) {
      entries.push({ url: `${BASE_URL}/${locale}/tables/${table}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 })
    }
  }

  return entries
}

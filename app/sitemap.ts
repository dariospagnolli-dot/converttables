import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { INGREDIENTS } from '@/lib/data/ingredients'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://convertmath.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    // Homepage
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    })

    // Cups to grams index
    entries.push({
      url: `${BASE_URL}/${locale}/convert/cups-to-grams`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })

    // Each ingredient
    for (const ing of INGREDIENTS) {
      entries.push({
        url: `${BASE_URL}/${locale}/convert/cups-to-grams/${ing.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      })
    }

    // Tables
    entries.push({
      url: `${BASE_URL}/${locale}/tables/multiplication`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    })

    entries.push({
      url: `${BASE_URL}/${locale}/tables/roman-numerals`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    })
  }

  return entries
}

import { en } from './translations/en'
import { it } from './translations/it'
import type { Locale } from './config'

const translations = { en, it } as const

export type TranslationKey = keyof typeof en

export function t(locale: Locale, key: TranslationKey, params?: Record<string, string | number>): string {
  let text: string = translations[locale][key] || translations.en[key] || key
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(`{${k}}`, String(v))
    }
  }
  return text
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en
}

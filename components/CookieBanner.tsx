'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'

const STORAGE_KEY = 'ct_cookie_consent'

type Consent = 'accepted' | 'rejected'

const i18n: Record<Locale, {
  title: string
  text: string
  acceptAll: string
  rejectAll: string
  policy: string
}> = {
  en: {
    title: 'We use cookies',
    text: 'We use essential cookies to make the site work, and optional cookies (advertising, analytics) to improve your experience. You can accept or reject non-essential cookies.',
    acceptAll: 'Accept all',
    rejectAll: 'Essential only',
    policy: 'Cookie Policy',
  },
  it: {
    title: 'Utilizziamo i cookie',
    text: 'Utilizziamo cookie essenziali per il funzionamento del sito e cookie opzionali (pubblicità, analisi) per migliorare la tua esperienza. Puoi accettare o rifiutare i cookie non essenziali.',
    acceptAll: 'Accetta tutti',
    rejectAll: 'Solo essenziali',
    policy: 'Cookie Policy',
  },
  de: {
    title: 'Wir verwenden Cookies',
    text: 'Wir verwenden essentielle Cookies für den Betrieb der Website und optionale Cookies (Werbung, Analyse) zur Verbesserung Ihrer Erfahrung. Sie können nicht wesentliche Cookies akzeptieren oder ablehnen.',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Nur essenzielle',
    policy: 'Cookie-Richtlinie',
  },
  fr: {
    title: 'Nous utilisons des cookies',
    text: 'Nous utilisons des cookies essentiels au fonctionnement du site et des cookies optionnels (publicité, analyse) pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies non essentiels.',
    acceptAll: 'Tout accepter',
    rejectAll: 'Essentiels uniquement',
    policy: 'Politique de cookies',
  },
  es: {
    title: 'Usamos cookies',
    text: 'Usamos cookies esenciales para el funcionamiento del sitio y cookies opcionales (publicidad, análisis) para mejorar tu experiencia. Puedes aceptar o rechazar las cookies no esenciales.',
    acceptAll: 'Aceptar todas',
    rejectAll: 'Solo esenciales',
    policy: 'Política de cookies',
  },
}

export function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false)
  const t = i18n[locale]

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function handleConsent(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, consent)
    setVisible(false)
    if (consent === 'accepted') {
      // Dispatch event so AdSense/analytics can initialize
      window.dispatchEvent(new CustomEvent('ct:cookie-consent', { detail: consent }))
    }
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label={t.title}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 shadow-xl px-4 py-4 sm:py-5"
    >
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-zinc-600">
          <span className="font-semibold text-zinc-900 mr-1.5">{t.title}.</span>
          {t.text}{' '}
          <Link
            href={`/${locale}/legal/cookies`}
            className="text-emerald-600 hover:underline font-medium"
          >
            {t.policy}
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0">
          <button
            onClick={() => handleConsent('rejected')}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors"
          >
            {t.rejectAll}
          </button>
          <button
            onClick={() => handleConsent('accepted')}
            className="w-full sm:w-auto px-5 py-2 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-full transition-colors"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  )
}

/** Returns the stored consent value, or null if not yet set. */
export function getCookieConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  return (localStorage.getItem(STORAGE_KEY) as Consent | null)
}

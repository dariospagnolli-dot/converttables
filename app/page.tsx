'use client'

import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    const lang = (navigator.language || 'en').split('-')[0].toLowerCase()
    const supported = ['it', 'de', 'fr', 'es']
    const locale = supported.includes(lang) ? lang : 'en'
    window.location.replace('/' + locale)
  }, [])

  return null
}

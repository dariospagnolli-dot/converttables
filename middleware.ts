import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'it']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const hasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (hasLocale) return

  const acceptLanguage = request.headers.get('accept-language') || ''
  const detectedLocale = locales.find(locale =>
    acceptLanguage.toLowerCase().includes(locale)
  ) || 'en'

  return NextResponse.redirect(
    new URL(`/${detectedLocale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)']
}

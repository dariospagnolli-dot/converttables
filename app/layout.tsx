import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.converttables.com'

export const metadata: Metadata = {
  title: 'convert·tables — Unit Converter & Math Tables',
  description: 'Free online unit converter, cooking measurement charts, and math reference tables.',
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {/* AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258748506074457"
          crossOrigin="anonymous"
        />
      </head>
      {children}
    </>
  )
}

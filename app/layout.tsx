import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'convert·tables — Unit Converter & Math Tables',
  description: 'Free online unit converter, cooking measurement charts, and math reference tables.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

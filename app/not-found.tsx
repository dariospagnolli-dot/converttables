import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: '404 — Page Not Found | convert·tables',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-white text-zinc-900 font-sans px-4">
        <div className="text-center max-w-md">
          <div className="text-7xl font-bold text-emerald-500 mb-4">404</div>
          <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
          <p className="text-zinc-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Go to homepage
          </Link>
        </div>
      </body>
    </html>
  )
}

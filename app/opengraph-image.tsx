import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Emerald dot accent */}
        <div
          style={{
            width: 88,
            height: 88,
            background: '#10b981',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 40, height: 5, background: 'white', borderRadius: 3 }} />
            <div style={{ width: 28, height: 5, background: 'rgba(255,255,255,0.6)', borderRadius: 3 }} />
            <div style={{ width: 34, height: 5, background: 'rgba(255,255,255,0.4)', borderRadius: 3 }} />
          </div>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#18181b',
            letterSpacing: '-3px',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          convert·tables
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: '#71717a',
            textAlign: 'center',
            maxWidth: 680,
            display: 'flex',
          }}
        >
          Unit Converter &amp; Math Reference Tables
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: 40,
            background: '#ecfdf5',
            color: '#059669',
            fontSize: 22,
            fontWeight: 600,
            padding: '10px 28px',
            borderRadius: 999,
            display: 'flex',
          }}
        >
          5 languages · 5000+ pages
        </div>
      </div>
    )
  )
}

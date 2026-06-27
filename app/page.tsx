export default function RootPage() {
  return (
    <>
      {/* AdSense verification */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258748506074457"
        crossOrigin="anonymous"
      />
      {/* Language-aware redirect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var lang = (navigator.language || 'en').split('-')[0].toLowerCase();
            var supported = ['it', 'de', 'fr', 'es'];
            window.location.replace('/' + (supported.includes(lang) ? lang : 'en'));
          `,
        }}
      />
    </>
  )
}

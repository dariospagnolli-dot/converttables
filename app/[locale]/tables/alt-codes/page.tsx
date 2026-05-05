import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const titles = { en: 'ALT Codes — Complete List of Keyboard Symbols', it: 'Codici ALT — Lista Completa Simboli da Tastiera', de: 'ALT-Codes — Vollständige Liste der Tastatursymbole', fr: 'Codes ALT — Liste complète des symboles clavier', es: 'Códigos ALT — Lista completa de símbolos de teclado' }
const descs = {
  en: 'Complete ALT codes list: type special characters and symbols on Windows using ALT key + number pad.',
  it: 'Lista completa codici ALT: digita caratteri speciali e simboli su Windows con tasto ALT + tastierino numerico.',
  de: 'Vollständige ALT-Code-Liste: Sonderzeichen und Symbole unter Windows mit ALT-Taste + Ziffernblock eingeben.',
  fr: 'Liste complète des codes ALT : saisissez des caractères spéciaux et symboles sous Windows avec la touche ALT + pavé numérique.',
  es: 'Lista completa de códigos ALT: escribe caracteres especiales y símbolos en Windows usando la tecla ALT + teclado numérico.',
}

const ALT_CODES = [
  { code: 1, char: '☺', desc: 'White smiling face' }, { code: 2, char: '☻', desc: 'Black smiling face' },
  { code: 3, char: '♥', desc: 'Heart' }, { code: 4, char: '♦', desc: 'Diamond' },
  { code: 5, char: '♣', desc: 'Club' }, { code: 6, char: '♠', desc: 'Spade' },
  { code: 7, char: '•', desc: 'Bullet' }, { code: 8, char: '◘', desc: 'Inverse bullet' },
  { code: 9, char: '○', desc: 'Circle' }, { code: 10, char: '◙', desc: 'Inverse circle' },
  { code: 11, char: '♂', desc: 'Male sign' }, { code: 12, char: '♀', desc: 'Female sign' },
  { code: 13, char: '♪', desc: 'Music note' }, { code: 14, char: '♫', desc: 'Double music note' },
  { code: 15, char: '☼', desc: 'Sun' }, { code: 16, char: '►', desc: 'Right triangle' },
  { code: 17, char: '◄', desc: 'Left triangle' }, { code: 18, char: '↕', desc: 'Up-down arrow' },
  { code: 19, char: '‼', desc: 'Double exclamation' }, { code: 20, char: '¶', desc: 'Paragraph' },
  { code: 21, char: '§', desc: 'Section' }, { code: 24, char: '↑', desc: 'Up arrow' },
  { code: 25, char: '↓', desc: 'Down arrow' }, { code: 26, char: '→', desc: 'Right arrow' },
  { code: 27, char: '←', desc: 'Left arrow' }, { code: 28, char: '∟', desc: 'Right angle' },
  { code: 29, char: '↔', desc: 'Left-right arrow' }, { code: 30, char: '▲', desc: 'Up triangle' },
  { code: 31, char: '▼', desc: 'Down triangle' },
  // Special characters (ALT+0xxx)
  { code: '0128', char: '€', desc: 'Euro sign' }, { code: '0162', char: '¢', desc: 'Cent sign' },
  { code: '0163', char: '£', desc: 'Pound sign' }, { code: '0165', char: '¥', desc: 'Yen sign' },
  { code: '0169', char: '©', desc: 'Copyright' }, { code: '0174', char: '®', desc: 'Registered' },
  { code: '0153', char: '™', desc: 'Trademark' }, { code: '0176', char: '°', desc: 'Degree' },
  { code: '0177', char: '±', desc: 'Plus-minus' }, { code: '0178', char: '²', desc: 'Superscript 2' },
  { code: '0179', char: '³', desc: 'Superscript 3' }, { code: '0181', char: 'µ', desc: 'Micro sign' },
  { code: '0183', char: '·', desc: 'Middle dot' }, { code: '0185', char: '¹', desc: 'Superscript 1' },
  { code: '0188', char: '¼', desc: 'One quarter' }, { code: '0189', char: '½', desc: 'One half' },
  { code: '0190', char: '¾', desc: 'Three quarters' }, { code: '0191', char: '¿', desc: 'Inverted question' },
  { code: '0161', char: '¡', desc: 'Inverted exclamation' }, { code: '0215', char: '×', desc: 'Multiplication' },
  { code: '0247', char: '÷', desc: 'Division' }, { code: '0171', char: '«', desc: 'Left guillemet' },
  { code: '0187', char: '»', desc: 'Right guillemet' },
  // Accented letters
  { code: '0192', char: 'À', desc: 'A grave' }, { code: '0193', char: 'Á', desc: 'A acute' },
  { code: '0196', char: 'Ä', desc: 'A umlaut' }, { code: '0199', char: 'Ç', desc: 'C cedilla' },
  { code: '0200', char: 'È', desc: 'E grave' }, { code: '0201', char: 'É', desc: 'E acute' },
  { code: '0209', char: 'Ñ', desc: 'N tilde' }, { code: '0214', char: 'Ö', desc: 'O umlaut' },
  { code: '0220', char: 'Ü', desc: 'U umlaut' }, { code: '0223', char: 'ß', desc: 'Sharp S' },
  { code: '0224', char: 'à', desc: 'a grave' }, { code: '0225', char: 'á', desc: 'a acute' },
  { code: '0228', char: 'ä', desc: 'a umlaut' }, { code: '0231', char: 'ç', desc: 'c cedilla' },
  { code: '0232', char: 'è', desc: 'e grave' }, { code: '0233', char: 'é', desc: 'e acute' },
  { code: '0241', char: 'ñ', desc: 'n tilde' }, { code: '0246', char: 'ö', desc: 'o umlaut' },
  { code: '0252', char: 'ü', desc: 'u umlaut' },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: titles[locale as Locale], description: descs[locale as Locale] }
}

export default async function AltCodesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const symbols = ALT_CODES.filter(a => typeof a.code === 'number')
  const special = ALT_CODES.filter(a => typeof a.code === 'string')

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{titles[l]}</h1>
      <p className="text-muted-foreground mb-4">{descs[l]}</p>
      <div className="rounded-lg border bg-muted/30 p-4 mb-8 text-sm">
        <strong>{{ en: 'How to use', it: 'Come usare', de: 'Verwendung', fr: 'Comment utiliser', es: 'Cómo usar' }[l]}:</strong>{' '}
        {{ en: 'Hold ALT, type the code on the numeric keypad, release ALT.', it: 'Tieni premuto ALT, digita il codice sul tastierino numerico, rilascia ALT.', de: 'Halte ALT gedrückt, gib den Code auf dem Ziffernblock ein, lasse ALT los.', fr: 'Maintenez ALT, tapez le code sur le pavé numérique, relâchez ALT.', es: 'Mantén presionado ALT, escribe el código en el teclado numérico, suelta ALT.' }[l]}
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{{ en: 'Symbols (ALT + number)', it: 'Simboli (ALT + numero)', de: 'Symbole (ALT + Nummer)', fr: 'Symboles (ALT + numéro)', es: 'Símbolos (ALT + número)' }[l]}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Code', it: 'Codice', de: 'Code', fr: 'Code', es: 'Código' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Symbol', it: 'Simbolo', de: 'Symbol', fr: 'Symbole', es: 'Símbolo' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Description', it: 'Descrizione', de: 'Beschreibung', fr: 'Description', es: 'Descripción' }[l]}</th>
            </tr></thead>
            <tbody>
              {symbols.map(a => (
                <tr key={String(a.code)} className="border-t">
                  <td className="px-4 py-2 font-mono">ALT + {a.code}</td>
                  <td className="px-4 py-2 text-2xl">{a.char}</td>
                  <td className="px-4 py-2 text-muted-foreground">{a.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{{ en: 'Special Characters (ALT + 0xxx)', it: 'Caratteri speciali (ALT + 0xxx)', de: 'Sonderzeichen (ALT + 0xxx)', fr: 'Caractères spéciaux (ALT + 0xxx)', es: 'Caracteres especiales (ALT + 0xxx)' }[l]}</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50">
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Code', it: 'Codice', de: 'Code', fr: 'Code', es: 'Código' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Symbol', it: 'Simbolo', de: 'Symbol', fr: 'Symbole', es: 'Símbolo' }[l]}</th>
              <th className="px-4 py-2 text-left font-medium">{{ en: 'Description', it: 'Descrizione', de: 'Beschreibung', fr: 'Description', es: 'Descripción' }[l]}</th>
            </tr></thead>
            <tbody>
              {special.map(a => (
                <tr key={String(a.code)} className="border-t">
                  <td className="px-4 py-2 font-mono">ALT + {a.code}</td>
                  <td className="px-4 py-2 text-2xl">{a.char}</td>
                  <td className="px-4 py-2 text-muted-foreground">{a.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

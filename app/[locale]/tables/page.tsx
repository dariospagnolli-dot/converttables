import type { Metadata } from 'next'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'

const titles: Record<Locale, string> = {
  en: 'Math Reference Tables',
  it: 'Tabelle Matematiche di Riferimento',
  de: 'Mathematik-Referenztabellen',
  fr: 'Tables de Référence Mathématiques',
  es: 'Tablas de Referencia Matemáticas',
}

const descs: Record<Locale, string> = {
  en: 'Complete math reference tables online: multiplication table chart, ASCII table, Roman numerals chart, prime numbers list, trigonometry values, and more mathematical reference charts for students and professionals.',
  it: 'Tabelle matematiche di riferimento complete: tavola pitagorica, tabella ASCII, numeri romani, numeri primi, trigonometria e molto altro. Tabelle matematiche online per studenti e professionisti.',
  de: 'Vollständige Mathematik-Referenztabellen online: Einmaleins, ASCII-Tabelle, Römische Zahlen, Primzahlen, Trigonometrie und mehr mathematische Referenztabellen für Schüler und Fachleute.',
  fr: 'Tables de référence mathématiques complètes en ligne : table de multiplication, table ASCII, chiffres romains, nombres premiers, valeurs trigonométriques et plus de tableaux de référence mathématiques.',
  es: 'Tablas de referencia matemáticas completas en línea: tabla de multiplicar, tabla ASCII, números romanos, números primos, tabla trigonométrica y más tablas de referencia matemáticas para estudiantes y profesionales.',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return { title: titles[l], description: descs[l] }
}

export default async function TablesIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">

      {/* H1 */}
      <h1 className="text-3xl font-bold mb-4">{titles[l]}</h1>

      {/* Intro paragraphs */}
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{ en: 'A math reference table is an essential tool for students, engineers, programmers, and professionals alike. These tables collect pre-calculated values so you can find results instantly without performing repetitive calculations. They span a wide range of disciplines: arithmetic, number theory, computer science, electronics, geometry, and mathematical symbolism.', it: 'Una tabella matematica di riferimento è uno strumento essenziale per studenti, ingegneri, programmatori e professionisti. Raccolgono valori precalcolati che permettono di trovare risultati istantaneamente senza calcoli ripetuti. Coprono un\'ampia gamma di discipline: aritmetica, teoria dei numeri, informatica, elettronica, geometria e simbologia matematica.', de: 'Eine Mathematik-Referenztabelle ist ein unverzichtbares Werkzeug für Schüler, Ingenieure, Programmierer und Fachleute. Diese Tabellen sammeln vorberechnete Werte, damit Sie Ergebnisse sofort finden können, ohne wiederkehrende Berechnungen durchzuführen. Sie decken ein breites Spektrum an Disziplinen ab: Arithmetik, Zahlentheorie, Informatik, Elektronik, Geometrie und mathematische Symbolik.', fr: 'Un tableau de référence mathématique est un outil essentiel pour les étudiants, les ingénieurs, les programmeurs et les professionnels. Ces tables rassemblent des valeurs précalculées pour trouver des résultats instantanément sans effectuer de calculs répétitifs. Elles couvrent un large éventail de disciplines : arithmétique, théorie des nombres, informatique, électronique, géométrie et symbolisme mathématique.', es: 'Una tabla de referencia matemática es una herramienta esencial para estudiantes, ingenieros, programadores y profesionales. Estas tablas recopilan valores precalculados para que puedas encontrar resultados al instante sin realizar cálculos repetitivos. Abarcan una amplia gama de disciplinas: aritmética, teoría de números, informática, electrónica, geometría y simbología matemática.' }[l]}
      </p>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{ en: 'This collection includes over 20 tables organised by category. From multiplication tables to Roman numerals, from the ASCII table to HTML colours, from resistor colour codes to AWG wire gauges — every table is directly accessible and optimised for quick reference.', it: 'Questa raccolta include oltre 20 tabelle organizzate per categoria. Dalle tabelline di moltiplicazione ai numeri romani, dalla tabella ASCII ai colori HTML, dal codice colore dei resistori al calibro AWG dei fili elettrici. Ogni tabella è accessibile direttamente e ottimizzata per la consultazione rapida.', de: 'Diese Sammlung umfasst über 20 Tabellen, geordnet nach Kategorien. Von der Multiplikationstabelle bis zu den römischen Zahlen, von der ASCII-Tabelle bis zu HTML-Farben, vom Widerstandsfarbcode bis zur AWG-Drahtlehre — jede Tabelle ist direkt abrufbar und für schnelle Nachschlagevorgänge optimiert.', fr: 'Cette collection comprend plus de 20 tables organisées par catégorie. Des tables de multiplication aux chiffres romains, du tableau ASCII aux couleurs HTML, du code couleur des résistances aux calibres de fil AWG — chaque table est directement accessible et optimisée pour une consultation rapide.', es: 'Esta colección incluye más de 20 tablas organizadas por categoría. Desde las tablas de multiplicar hasta los números romanos, desde la tabla ASCII hasta los colores HTML, desde el código de colores de resistencias hasta el calibre de alambre AWG. Cada tabla es accesible directamente y está optimizada para consulta rápida.' }[l]}
      </p>

      {/* ── Arithmetic Tables ─────────────────────────────────── */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{ en: 'Arithmetic Tables', it: 'Tabelle Aritmetiche', de: 'Arithmetische Tabellen', fr: 'Tables Arithmétiques', es: 'Tablas Aritméticas' }[l]}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {[
          {
            href: `/${locale}/tables/multiplication`,
            label: { en: 'Multiplication Table', it: 'Tavola Pitagorica', de: 'Einmaleins', fr: 'Table de Multiplication', es: 'Tabla de Multiplicar' }[l],
            desc:  { en: '1×1 to 12×12 and beyond', it: 'Da 1×1 a 12×12 e oltre', de: 'Von 1×1 bis 12×12 und mehr', fr: 'De 1×1 à 12×12 et au-delà', es: 'De 1×1 a 12×12 y más' }[l],
          },
          {
            href: `/${locale}/tables/addition`,
            label: { en: 'Addition Table', it: 'Tabella delle Addizioni', de: 'Additionstabelle', fr: 'Table d\'Addition', es: 'Tabla de Adición' }[l],
            desc:  { en: 'Single-digit addition grid', it: 'Griglia di addizioni a una cifra', de: 'Additionsraster einstelliger Zahlen', fr: 'Grille d\'addition à un chiffre', es: 'Cuadrícula de suma de un dígito' }[l],
          },
          {
            href: `/${locale}/tables/squares-cubes`,
            label: { en: 'Squares & Cubes', it: 'Quadrati e Cubi', de: 'Quadrate & Kuben', fr: 'Carrés et Cubes', es: 'Cuadrados y Cubos' }[l],
            desc:  { en: 'n², n³ from 1 to 100', it: 'n², n³ da 1 a 100', de: 'n², n³ von 1 bis 100', fr: 'n², n³ de 1 à 100', es: 'n², n³ del 1 al 100' }[l],
          },
          {
            href: `/${locale}/tables/fractions`,
            label: { en: 'Fractions Table', it: 'Tabella delle Frazioni', de: 'Bruchtabelle', fr: 'Table des Fractions', es: 'Tabla de Fracciones' }[l],
            desc:  { en: 'Fraction to decimal conversions', it: 'Conversioni da frazione a decimale', de: 'Bruch-zu-Dezimal-Umrechnungen', fr: 'Conversions fraction vers décimal', es: 'Conversiones de fracción a decimal' }[l],
          },
          {
            href: `/${locale}/tables/percentage-chart`,
            label: { en: 'Percentage Chart', it: 'Tabella delle Percentuali', de: 'Prozenttabelle', fr: 'Tableau des Pourcentages', es: 'Tabla de Porcentajes' }[l],
            desc:  { en: 'Common percentage calculations', it: 'Calcoli percentuali comuni', de: 'Gängige Prozentberechnungen', fr: 'Calculs de pourcentage courants', es: 'Cálculos de porcentaje comunes' }[l],
          },
          {
            href: `/${locale}/tables/exponent-rules`,
            label: { en: 'Exponent Rules', it: 'Regole degli Esponenti', de: 'Potenzregeln', fr: 'Règles des Exposants', es: 'Reglas de los Exponentes' }[l],
            desc:  { en: 'Laws of exponents reference', it: 'Riferimento alle leggi degli esponenti', de: 'Nachschlagewerk zu den Potenzgesetzen', fr: 'Référence des lois des exposants', es: 'Referencia de las leyes de los exponentes' }[l],
          },
        ].map(item => (
          <Link key={item.href} href={item.href} className="rounded-lg border p-4 hover:bg-accent transition-colors block">
            <div className="font-semibold text-sm text-zinc-900">{item.label}</div>
            <div className="text-xs text-zinc-500 mt-1">{item.desc}</div>
          </Link>
        ))}
      </div>

      {/* ── Number Theory & Sequences ─────────────────────────── */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{ en: 'Number Theory & Sequences', it: 'Teoria dei Numeri e Sequenze', de: 'Zahlentheorie & Folgen', fr: 'Théorie des Nombres et Suites', es: 'Teoría de Números y Sucesiones' }[l]}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {[
          {
            href: `/${locale}/tables/prime-numbers`,
            label: { en: 'Prime Numbers', it: 'Numeri Primi', de: 'Primzahlen', fr: 'Nombres Premiers', es: 'Números Primos' }[l],
            desc:  { en: 'All primes up to 1000', it: 'Tutti i numeri primi fino a 1000', de: 'Alle Primzahlen bis 1000', fr: 'Tous les nombres premiers jusqu\'à 1000', es: 'Todos los primos hasta 1000' }[l],
          },
          {
            href: `/${locale}/tables/powers-of-2`,
            label: { en: 'Powers of 2', it: 'Potenze di 2', de: 'Zweierpotenzen', fr: 'Puissances de 2', es: 'Potencias de 2' }[l],
            desc:  { en: '2⁰ through 2⁶³ and beyond', it: 'Da 2⁰ a 2⁶³ e oltre', de: 'Von 2⁰ bis 2⁶³ und mehr', fr: 'De 2⁰ à 2⁶³ et au-delà', es: 'Desde 2⁰ hasta 2⁶³ y más' }[l],
          },
          {
            href: `/${locale}/tables/fibonacci`,
            label: { en: 'Fibonacci Sequence', it: 'Successione di Fibonacci', de: 'Fibonacci-Folge', fr: 'Suite de Fibonacci', es: 'Sucesión de Fibonacci' }[l],
            desc:  { en: 'First 100 Fibonacci numbers', it: 'I primi 100 numeri di Fibonacci', de: 'Die ersten 100 Fibonacci-Zahlen', fr: 'Les 100 premiers nombres de Fibonacci', es: 'Los primeros 100 números de Fibonacci' }[l],
          },
          {
            href: `/${locale}/tables/logarithm`,
            label: { en: 'Logarithm Table', it: 'Tabella dei Logaritmi', de: 'Logarithmentafel', fr: 'Table de Logarithmes', es: 'Tabla de Logaritmos' }[l],
            desc:  { en: 'log₁₀ and ln reference values', it: 'Valori di riferimento log₁₀ e ln', de: 'log₁₀- und ln-Referenzwerte', fr: 'Valeurs de référence log₁₀ et ln', es: 'Valores de referencia log₁₀ y ln' }[l],
          },
          {
            href: `/${locale}/tables/trigonometry`,
            label: { en: 'Trigonometry Table', it: 'Tabella Trigonometrica', de: 'Trigonometrietabelle', fr: 'Table de Trigonométrie', es: 'Tabla Trigonométrica' }[l],
            desc:  { en: 'sin, cos, tan for common angles', it: 'sin, cos, tan per gli angoli comuni', de: 'sin, cos, tan für häufige Winkel', fr: 'sin, cos, tan pour les angles courants', es: 'sin, cos, tan para ángulos comunes' }[l],
          },
          {
            href: `/${locale}/tables/roman-numerals`,
            label: { en: 'Roman Numerals', it: 'Numeri Romani', de: 'Römische Zahlen', fr: 'Chiffres Romains', es: 'Números Romanos' }[l],
            desc:  { en: 'I to MMMCMXCIX (1–3999)', it: 'Da I a MMMCMXCIX (1–3999)', de: 'I bis MMMCMXCIX (1–3999)', fr: 'De I à MMMCMXCIX (1–3999)', es: 'De I a MMMCMXCIX (1–3999)' }[l],
          },
        ].map(item => (
          <Link key={item.href} href={item.href} className="rounded-lg border p-4 hover:bg-accent transition-colors block">
            <div className="font-semibold text-sm text-zinc-900">{item.label}</div>
            <div className="text-xs text-zinc-500 mt-1">{item.desc}</div>
          </Link>
        ))}
      </div>

      {/* ── Computing & Programming ───────────────────────────── */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{ en: 'Computing & Programming', it: 'Informatica e Programmazione', de: 'Informatik & Programmierung', fr: 'Informatique et Programmation', es: 'Informática y Programación' }[l]}
      </h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{ en: 'Essential tables for developers and computer scientists. The binary and hexadecimal table covers base conversions; the ASCII table lists all 128 standard character codes; the HTML colours table is indispensable for web design; and the alt codes table provides keyboard shortcuts for special symbols and characters.', it: 'Tabelle indispensabili per sviluppatori e informatici. La tabella binario/esadecimale copre le conversioni di base numerica; la tabella ASCII elenca tutti i 128 codici carattere standard; la tabella dei colori HTML è indispensabile per il design web; la tabella degli alt codes fornisce le scorciatoie da tastiera per simboli e caratteri speciali.', de: 'Unverzichtbare Tabellen für Entwickler und Informatiker. Die Binär- und Hexadezimaltabelle deckt Zahlensystemumrechnungen ab; die ASCII-Tabelle listet alle 128 Standard-Zeichencodes auf; die HTML-Farbtabelle ist für das Webdesign unverzichtbar; die Alt-Codes-Tabelle bietet Tastaturkürzel für Sonderzeichen und Symbole.', fr: 'Tables indispensables pour les développeurs et les informaticiens. La table binaire et hexadécimale couvre les conversions de base ; la table ASCII liste les 128 codes de caractères standard ; la table des couleurs HTML est indispensable pour le design web ; la table des codes Alt fournit des raccourcis clavier pour les symboles et caractères spéciaux.', es: 'Tablas indispensables para desarrolladores e informáticos. La tabla binaria y hexadecimal cubre las conversiones de base numérica; la tabla ASCII lista los 128 códigos de caracteres estándar; la tabla de colores HTML es indispensable para el diseño web; la tabla de códigos Alt proporciona atajos de teclado para símbolos y caracteres especiales.' }[l]}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {[
          {
            href: `/${locale}/tables/binary-hex`,
            label: { en: 'Binary & Hexadecimal', it: 'Binario ed Esadecimale', de: 'Binär & Hexadezimal', fr: 'Binaire et Hexadécimal', es: 'Binario y Hexadecimal' }[l],
            desc:  { en: 'Dec, bin, hex, octal conversion', it: 'Conversione dec, bin, hex, ottale', de: 'Dez-, Bin-, Hex-, Oktal-Umrechnung', fr: 'Conversion déc., bin., hex., octal', es: 'Conversión dec, bin, hex, octal' }[l],
          },
          {
            href: `/${locale}/tables/ascii`,
            label: { en: 'ASCII Table', it: 'Tabella ASCII', de: 'ASCII-Tabelle', fr: 'Table ASCII', es: 'Tabla ASCII' }[l],
            desc:  { en: 'All 128 standard ASCII codes', it: 'Tutti i 128 codici ASCII standard', de: 'Alle 128 Standard-ASCII-Codes', fr: 'Les 128 codes ASCII standard', es: 'Los 128 códigos ASCII estándar' }[l],
          },
          {
            href: `/${locale}/tables/alt-codes`,
            label: { en: 'Alt Codes', it: 'Codici Alt', de: 'Alt-Codes', fr: 'Codes Alt', es: 'Códigos Alt' }[l],
            desc:  { en: 'Special characters via keyboard', it: 'Caratteri speciali da tastiera', de: 'Sonderzeichen per Tastatur', fr: 'Caractères spéciaux via clavier', es: 'Caracteres especiales por teclado' }[l],
          },
          {
            href: `/${locale}/tables/html-colors`,
            label: { en: 'HTML Colors', it: 'Colori HTML', de: 'HTML-Farben', fr: 'Couleurs HTML', es: 'Colores HTML' }[l],
            desc:  { en: 'Named colours with hex & RGB', it: 'Colori con nome, hex e RGB', de: 'Benannte Farben mit Hex & RGB', fr: 'Couleurs nommées avec hex & RVB', es: 'Colores con nombre, hex y RGB' }[l],
          },
          {
            href: `/${locale}/tables/colors`,
            label: { en: 'Color Table', it: 'Tabella Colori', de: 'Farbtabelle', fr: 'Tableau des Couleurs', es: 'Tabla de Colores' }[l],
            desc:  { en: 'Complete colour reference chart', it: 'Tabella di riferimento colori completa', de: 'Vollständige Farbreferenztabelle', fr: 'Tableau de référence des couleurs complet', es: 'Tabla de referencia de colores completa' }[l],
          },
        ].map(item => (
          <Link key={item.href} href={item.href} className="rounded-lg border p-4 hover:bg-accent transition-colors block">
            <div className="font-semibold text-sm text-zinc-900">{item.label}</div>
            <div className="text-xs text-zinc-500 mt-1">{item.desc}</div>
          </Link>
        ))}
      </div>

      {/* ── Engineering & Electronics ─────────────────────────── */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{ en: 'Engineering & Electronics', it: 'Ingegneria ed Elettronica', de: 'Technik & Elektronik', fr: 'Ingénierie et Électronique', es: 'Ingeniería y Electrónica' }[l]}
      </h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{ en: 'Reference tables for engineers, electricians, and technicians. The Greek alphabet is essential for mathematical and scientific notation; the math symbols table covers operators and set theory; the resistor colour code and AWG wire gauge tables are standard tools for electronics and electrical work.', it: 'Tabelle di riferimento per ingegneri, elettricisti e tecnici. L\'alfabeto greco è essenziale per la notazione matematica e scientifica; la tabella dei simboli matematici copre operatori e teoria degli insiemi; il codice colore dei resistori e la tabella AWG del calibro dei fili sono strumenti standard per l\'elettronica e il lavoro elettrico.', de: 'Referenztabellen für Ingenieure, Elektriker und Techniker. Das griechische Alphabet ist für mathematische und wissenschaftliche Notation unverzichtbar; die Tabelle der mathematischen Symbole deckt Operatoren und Mengenlehre ab; der Widerstandsfarbcode und die AWG-Drahtlehrentabelle sind Standardwerkzeuge für Elektronik und Elektroarbeiten.', fr: 'Tables de référence pour les ingénieurs, électriciens et techniciens. L\'alphabet grec est essentiel pour la notation mathématique et scientifique ; le tableau des symboles mathématiques couvre les opérateurs et la théorie des ensembles ; le code couleur des résistances et le tableau de calibre de fil AWG sont des outils standard pour l\'électronique et les travaux électriques.', es: 'Tablas de referencia para ingenieros, electricistas y técnicos. El alfabeto griego es esencial para la notación matemática y científica; la tabla de símbolos matemáticos cubre operadores y teoría de conjuntos; el código de colores de resistencias y la tabla de calibre de alambre AWG son herramientas estándar para electrónica y trabajos eléctricos.' }[l]}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {[
          {
            href: `/${locale}/tables/greek-alphabet`,
            label: { en: 'Greek Alphabet', it: 'Alfabeto Greco', de: 'Griechisches Alphabet', fr: 'Alphabet Grec', es: 'Alfabeto Griego' }[l],
            desc:  { en: 'α β γ — uppercase & lowercase', it: 'α β γ — maiuscolo e minuscolo', de: 'α β γ — Groß- und Kleinschreibung', fr: 'α β γ — majuscules et minuscules', es: 'α β γ — mayúsculas y minúsculas' }[l],
          },
          {
            href: `/${locale}/tables/math-symbols`,
            label: { en: 'Math Symbols', it: 'Simboli Matematici', de: 'Mathematische Symbole', fr: 'Symboles Mathématiques', es: 'Símbolos Matemáticos' }[l],
            desc:  { en: 'Operators, set theory, logic', it: 'Operatori, insiemistica, logica', de: 'Operatoren, Mengenlehre, Logik', fr: 'Opérateurs, théorie des ensembles, logique', es: 'Operadores, teoría de conjuntos, lógica' }[l],
          },
          {
            href: `/${locale}/tables/resistor-color-code`,
            label: { en: 'Resistor Color Code', it: 'Codice Colore Resistori', de: 'Widerstandsfarbcode', fr: 'Code Couleur des Résistances', es: 'Código de Colores de Resistencias' }[l],
            desc:  { en: '4-band and 5-band resistors', it: 'Resistori a 4 e 5 bande', de: '4-Band- und 5-Band-Widerstände', fr: 'Résistances à 4 et 5 bandes', es: 'Resistencias de 4 y 5 bandas' }[l],
          },
          {
            href: `/${locale}/tables/awg-wire-gauge`,
            label: { en: 'AWG Wire Gauge', it: 'Calibro AWG Fili', de: 'AWG-Drahtlehre', fr: 'Calibre de Fil AWG', es: 'Calibre de Alambre AWG' }[l],
            desc:  { en: 'Diameter, resistance, current', it: 'Diametro, resistenza, corrente', de: 'Durchmesser, Widerstand, Strom', fr: 'Diamètre, résistance, courant', es: 'Diámetro, resistencia, corriente' }[l],
          },
          {
            href: `/${locale}/tables/shoe-sizes`,
            label: { en: 'Shoe Size Conversion', it: 'Conversione Taglie Scarpe', de: 'Schuhgrößen-Umrechnung', fr: 'Conversion de Pointures', es: 'Conversión de Tallas de Zapatos' }[l],
            desc:  { en: 'US, EU, UK, CM sizes', it: 'Taglie US, EU, UK, CM', de: 'US-, EU-, UK-, CM-Größen', fr: 'Pointures US, EU, UK, CM', es: 'Tallas US, EU, UK, CM' }[l],
          },
          {
            href: `/${locale}/tables/pi`,
            label: { en: 'Pi Digits', it: 'Cifre di Pi Greco', de: 'Pi-Stellen', fr: 'Décimales de Pi', es: 'Dígitos de Pi' }[l],
            desc:  { en: 'π to 1000 decimal places', it: 'π fino a 1000 cifre decimali', de: 'π auf 1000 Dezimalstellen', fr: 'π jusqu\'à 1000 décimales', es: 'π hasta 1000 decimales' }[l],
          },
        ].map(item => (
          <Link key={item.href} href={item.href} className="rounded-lg border p-4 hover:bg-accent transition-colors block">
            <div className="font-semibold text-sm text-zinc-900">{item.label}</div>
            <div className="text-xs text-zinc-500 mt-1">{item.desc}</div>
          </Link>
        ))}
      </div>

      {/* ── How to Use ────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{ en: 'How to Use Math Reference Tables', it: 'Come usare le Tabelle Matematiche', de: 'So verwenden Sie Mathematik-Referenztabellen', fr: 'Comment utiliser les tables de référence mathématiques', es: 'Cómo usar las tablas de referencia matemáticas' }[l]}
      </h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{ en: 'Reference tables speed up your work by eliminating repetitive calculations. A programmer who knows the ASCII table can instantly identify the code for any character; an electrician who uses the resistor colour code table can read component values without measuring instruments. Having the right table at hand turns a multi-step calculation into a single lookup.', it: 'Le tabelle di riferimento accelerano il lavoro eliminando calcoli ripetitivi. Un programmatore che conosce la tabella ASCII può identificare rapidamente il codice di un carattere; un elettricista che usa il codice colore dei resistori può leggere i valori dei componenti senza strumenti di misura. Avere la tabella giusta a portata di mano trasforma un calcolo in più passaggi in una semplice consultazione.', de: 'Referenztabellen beschleunigen Ihre Arbeit, indem sie wiederkehrende Berechnungen eliminieren. Ein Programmierer, der die ASCII-Tabelle kennt, kann den Code eines Zeichens sofort ermitteln; ein Elektriker, der die Widerstandsfarbcodetabelle verwendet, kann Bauteilwerte ohne Messinstrumente ablesen. Die richtige Tabelle zur Hand zu haben, verwandelt eine mehrstufige Berechnung in eine einfache Nachschlagetätigkeit.', fr: 'Les tables de référence accélèrent votre travail en éliminant les calculs répétitifs. Un programmeur qui connaît la table ASCII peut identifier instantanément le code d\'un caractère ; un électricien qui utilise la table de code couleur des résistances peut lire les valeurs des composants sans instruments de mesure. Avoir la bonne table à portée de main transforme un calcul en plusieurs étapes en une simple consultation.', es: 'Las tablas de referencia aceleran tu trabajo eliminando cálculos repetitivos. Un programador que conoce la tabla ASCII puede identificar instantáneamente el código de cualquier carácter; un electricista que usa la tabla de código de colores de resistencias puede leer los valores de los componentes sin instrumentos de medición. Tener la tabla correcta a mano convierte un cálculo de varios pasos en una simple consulta.' }[l]}
      </p>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{ en: 'There is an important difference between a static reference table and a calculator: a table reveals patterns and relationships that a calculator never shows. Looking at the multiplication table exposes symmetries (the commutative property), perfect squares on the diagonal, and recurring patterns in the multiples of 9. These insights build mathematical intuition over time.', it: 'C\'è una differenza importante tra una tabella di riferimento statica e una calcolatrice: la tabella mostra pattern e relazioni che una calcolatrice non evidenzia. Guardare la tavola pitagorica rivela simmetrie (la proprietà commutativa), i quadrati perfetti sulla diagonale e i pattern ricorrenti nei multipli di 9. Queste intuizioni costruiscono l\'intuizione matematica nel tempo.', de: 'Es gibt einen wichtigen Unterschied zwischen einer statischen Referenztabelle und einem Taschenrechner: Eine Tabelle enthüllt Muster und Zusammenhänge, die ein Taschenrechner nie zeigt. Das Betrachten der Multiplikationstabelle offenbart Symmetrien (die kommutative Eigenschaft), vollkommene Quadrate auf der Diagonale und wiederkehrende Muster in den Vielfachen der 9. Diese Erkenntnisse fördern das mathematische Verständnis.', fr: 'Il existe une différence importante entre une table de référence statique et une calculatrice : une table révèle des schémas et des relations qu\'une calculatrice ne montre jamais. Observer la table de multiplication expose des symétries (la propriété commutative), des carrés parfaits sur la diagonale et des schémas récurrents dans les multiples de 9. Ces insights développent l\'intuition mathématique au fil du temps.', es: 'Existe una diferencia importante entre una tabla de referencia estática y una calculadora: una tabla revela patrones y relaciones que una calculadora nunca muestra. Mirar la tabla de multiplicar expone simetrías (la propiedad conmutativa), cuadrados perfectos en la diagonal y patrones recurrentes en los múltiplos de 9. Estos hallazgos desarrollan la intuición matemática con el tiempo.' }[l]}
      </p>
      <p className="text-zinc-600 leading-relaxed mb-4">
        {{ en: 'How to search efficiently: to find a specific value (such as the Roman numeral for 2026), use the link to the individual entry in the Roman numerals table. To explore patterns (such as all prime numbers up to 100), use the full table view. Each table on this site is designed for both targeted lookups and broad exploration.', it: 'Come cercare in modo efficiente: per trovare un valore specifico (ad esempio il numero romano di 2026), usa il link all\'elemento individuale nella tabella dei numeri romani. Per esplorare pattern (ad esempio tutti i numeri primi fino a 100), usa la vista completa della tabella. Ogni tabella di questo sito è progettata sia per ricerche mirate che per un\'esplorazione ampia.', de: 'Effizient suchen: Um einen bestimmten Wert zu finden (z. B. die römische Zahl für 2026), verwenden Sie den Link zum einzelnen Eintrag in der Tabelle der römischen Zahlen. Um Muster zu erkunden (z. B. alle Primzahlen bis 100), verwenden Sie die vollständige Tabellenansicht. Jede Tabelle auf dieser Website ist sowohl für gezielte Suchen als auch für umfassende Erkundungen konzipiert.', fr: 'Comment rechercher efficacement : pour trouver une valeur spécifique (comme le chiffre romain de 2026), utilisez le lien vers l\'entrée individuelle dans la table des chiffres romains. Pour explorer des schémas (comme tous les nombres premiers jusqu\'à 100), utilisez la vue complète de la table. Chaque table sur ce site est conçue à la fois pour des recherches ciblées et une exploration large.', es: 'Cómo buscar eficientemente: para encontrar un valor específico (como el número romano de 2026), usa el enlace a la entrada individual en la tabla de números romanos. Para explorar patrones (como todos los números primos hasta 100), usa la vista completa de la tabla. Cada tabla en este sitio está diseñada tanto para búsquedas específicas como para exploración amplia.' }[l]}
      </p>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-10">
        {{ en: 'Frequently Asked Questions', it: 'Domande Frequenti', de: 'Häufig gestellte Fragen', fr: 'Questions Fréquentes', es: 'Preguntas Frecuentes' }[l]}
      </h2>
      <dl className="space-y-6">

        <div>
          <dt className="font-bold text-zinc-900 mb-1">
            {{ en: 'What is the multiplication table up to?', it: 'Fino a quanto arriva la tavola pitagorica?', de: 'Wie weit geht das Einmaleins?', fr: 'Jusqu\'où va la table de multiplication?', es: '¿Hasta dónde llega la tabla de multiplicar?' }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed">
            {{ en: 'Our multiplication table covers 1×1 through 12×12 (the standard school range), with additional pages for 1–20 and 1–100. Individual times tables for each number from 1 to 12 are also available.', it: 'La nostra tavola pitagorica copre da 1×1 a 12×12 (il range standard scolastico), con pagine aggiuntive per 1–20 e 1–100. Sono disponibili anche le tabelline individuali per ogni numero da 1 a 12.', de: 'Unser Einmaleins deckt 1×1 bis 12×12 ab (der Standard-Schulbereich), mit zusätzlichen Seiten für 1–20 und 1–100. Einzelne Einmaleins-Tabellen für jede Zahl von 1 bis 12 sind ebenfalls verfügbar.', fr: 'Notre table de multiplication couvre de 1×1 à 12×12 (la plage scolaire standard), avec des pages supplémentaires pour 1–20 et 1–100. Des tables de multiplication individuelles pour chaque nombre de 1 à 12 sont également disponibles.', es: 'Nuestra tabla de multiplicar cubre desde 1×1 hasta 12×12 (el rango escolar estándar), con páginas adicionales para 1–20 y 1–100. También están disponibles las tablas individuales para cada número del 1 al 12.' }[l]}
          </dd>
        </div>

        <div>
          <dt className="font-bold text-zinc-900 mb-1">
            {{ en: 'How many ASCII codes are there?', it: 'Quanti codici ASCII esistono?', de: 'Wie viele ASCII-Codes gibt es?', fr: 'Combien de codes ASCII existe-t-il?', es: '¿Cuántos códigos ASCII existen?' }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed">
            {{ en: 'The standard ASCII table contains 128 characters (codes 0–127), including control characters, digits, uppercase and lowercase letters, and punctuation. Extended ASCII adds another 128 codes (128–255) for special characters and symbols.', it: 'La tabella ASCII standard contiene 128 caratteri (codici 0–127), inclusi caratteri di controllo, cifre, lettere maiuscole e minuscole e punteggiatura. L\'ASCII esteso aggiunge altri 128 codici (128–255) per caratteri e simboli speciali.', de: 'Die Standard-ASCII-Tabelle enthält 128 Zeichen (Codes 0–127), darunter Steuerzeichen, Ziffern, Groß- und Kleinbuchstaben und Satzzeichen. Erweitertes ASCII fügt weitere 128 Codes (128–255) für Sonderzeichen und Symbole hinzu.', fr: 'La table ASCII standard contient 128 caractères (codes 0–127), incluant les caractères de contrôle, les chiffres, les lettres majuscules et minuscules, et la ponctuation. L\'ASCII étendu ajoute 128 codes supplémentaires (128–255) pour les caractères et symboles spéciaux.', es: 'La tabla ASCII estándar contiene 128 caracteres (códigos 0–127), incluyendo caracteres de control, dígitos, letras mayúsculas y minúsculas, y puntuación. El ASCII extendido añade otros 128 códigos (128–255) para caracteres y símbolos especiales.' }[l]}
          </dd>
        </div>

        <div>
          <dt className="font-bold text-zinc-900 mb-1">
            {{ en: 'What is the largest prime number in the table?', it: 'Qual è il numero primo più grande nella tabella?', de: 'Was ist die größte Primzahl in der Tabelle?', fr: 'Quel est le plus grand nombre premier dans la table?', es: '¿Cuál es el número primo más grande en la tabla?' }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed">
            {{ en: 'Our prime numbers table lists all primes up to 1000. The largest prime below 1000 is 997. There are 168 prime numbers between 1 and 1000.', it: 'La nostra tabella dei numeri primi elenca tutti i primi fino a 1000. Il numero primo più grande sotto 1000 è 997. Ci sono 168 numeri primi tra 1 e 1000.', de: 'Unsere Primzahlentabelle listet alle Primzahlen bis 1000 auf. Die größte Primzahl unter 1000 ist 997. Es gibt 168 Primzahlen zwischen 1 und 1000.', fr: 'Notre table des nombres premiers liste tous les nombres premiers jusqu\'à 1000. Le plus grand nombre premier inférieur à 1000 est 997. Il y a 168 nombres premiers entre 1 et 1000.', es: 'Nuestra tabla de números primos lista todos los primos hasta 1000. El número primo más grande por debajo de 1000 es 997. Hay 168 números primos entre 1 y 1000.' }[l]}
          </dd>
        </div>

        <div>
          <dt className="font-bold text-zinc-900 mb-1">
            {{ en: 'How do I read a resistor color code?', it: 'Come si legge il codice colore di un resistore?', de: 'Wie lese ich einen Widerstandsfarbcode?', fr: 'Comment lire un code couleur de résistance?', es: '¿Cómo se lee un código de colores de resistencia?' }[l]}
          </dt>
          <dd className="text-zinc-600 leading-relaxed">
            {{ en: 'A standard 4-band resistor has: band 1 (first digit), band 2 (second digit), band 3 (multiplier), band 4 (tolerance). For example, Brown-Black-Red-Gold = 1-0 × 100 = 1000 Ω ±5%. Use our resistor color code table for a complete reference.', it: 'Un resistore standard a 4 bande ha: banda 1 (prima cifra), banda 2 (seconda cifra), banda 3 (moltiplicatore), banda 4 (tolleranza). Ad esempio, Marrone-Nero-Rosso-Oro = 1-0 × 100 = 1000 Ω ±5%. Usa la nostra tabella del codice colore dei resistori per un riferimento completo.', de: 'Ein Standard-4-Band-Widerstand hat: Band 1 (erste Stelle), Band 2 (zweite Stelle), Band 3 (Multiplikator), Band 4 (Toleranz). Zum Beispiel: Braun-Schwarz-Rot-Gold = 1-0 × 100 = 1000 Ω ±5%. Verwenden Sie unsere Widerstandsfarbcode-Tabelle als vollständige Referenz.', fr: 'Une résistance standard à 4 bandes a : bande 1 (premier chiffre), bande 2 (deuxième chiffre), bande 3 (multiplicateur), bande 4 (tolérance). Par exemple, Brun-Noir-Rouge-Or = 1-0 × 100 = 1000 Ω ±5%. Utilisez notre table de code couleur des résistances pour une référence complète.', es: 'Una resistencia estándar de 4 bandas tiene: banda 1 (primer dígito), banda 2 (segundo dígito), banda 3 (multiplicador), banda 4 (tolerancia). Por ejemplo, Marrón-Negro-Rojo-Dorado = 1-0 × 100 = 1000 Ω ±5%. Usa nuestra tabla de código de colores de resistencias para una referencia completa.' }[l]}
          </dd>
        </div>

      </dl>

    </div>
  )
}

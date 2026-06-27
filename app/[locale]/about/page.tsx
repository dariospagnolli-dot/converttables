import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

const title: Record<Locale, string> = {
  en: 'About convert·tables',
  it: 'Chi siamo',
  de: 'Über uns',
  fr: 'À propos',
  es: 'Acerca de',
}

const description: Record<Locale, string> = {
  en: 'Learn about convert·tables — a free, fast, and accurate online unit converter, cooking measurement tool, and math reference table resource for students, cooks, and professionals.',
  it: 'Scopri convert·tables — un convertitore di unità online gratuito, veloce e preciso, strumento per misure da cucina e tabelle di riferimento matematico per studenti, cuochi e professionisti.',
  de: 'Erfahren Sie mehr über convert·tables — einen kostenlosen, schnellen und genauen Online-Einheitenumrechner, Küchenmessumrechner und mathematische Referenztabellen für Schüler, Köche und Profis.',
  fr: 'Découvrez convert·tables — un convertisseur d\'unités en ligne gratuit, rapide et précis, outil de mesure culinaire et ressource de tables de référence mathématiques pour étudiants, cuisiniers et professionnels.',
  es: 'Conoce convert·tables — un conversor de unidades en línea gratuito, rápido y preciso, herramienta de medidas culinarias y tablas de referencia matemáticas para estudiantes, cocineros y profesionales.',
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: title[l],
    description: description[l],
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-6">{title[l]}</h1>

      {/* Intro */}
      <section className="mb-10">
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'convert·tables is a free, ad-light online resource built around one simple idea: conversions and math reference data should be fast, accurate, and distraction-free. Whether you need to convert centimeters to inches, figure out how many grams are in a cup of flour, or look up the multiplication table for 13, you can find the answer here in seconds — without pop-ups, cookie walls, or bloated interfaces.',
            it: 'convert·tables è una risorsa online gratuita e con pubblicità ridotta al minimo, costruita attorno a un\'idea semplice: le conversioni e i dati di riferimento matematico devono essere veloci, precisi e senza distrazioni. Che tu abbia bisogno di convertire centimetri in pollici, capire quanti grammi ci sono in una tazza di farina o consultare la tavola della moltiplicazione del 13, puoi trovare la risposta in pochi secondi — senza pop-up, cookie wall o interfacce appesantite.',
            de: 'convert·tables ist eine kostenlose, werbeärmere Online-Ressource, die auf einer einfachen Idee basiert: Umrechnungen und mathematische Referenzdaten sollen schnell, präzise und ablenkungsfrei sein. Ob Sie Zentimeter in Zoll umrechnen, herausfinden möchten, wie viele Gramm in einer Tasse Mehl stecken, oder das Einmaleins von 13 nachschlagen wollen — die Antwort finden Sie hier in Sekunden, ohne Pop-ups, Cookie-Sperren oder aufgeblähte Oberflächen.',
            fr: 'convert·tables est une ressource en ligne gratuite et peu chargée en publicités, construite autour d\'une idée simple : les conversions et les données de référence mathématiques doivent être rapides, précises et sans distraction. Que vous ayez besoin de convertir des centimètres en pouces, de savoir combien de grammes contient une tasse de farine, ou de consulter la table de multiplication de 13, vous trouverez la réponse ici en quelques secondes — sans pop-ups, murs de cookies ni interfaces surchargées.',
            es: 'convert·tables es un recurso en línea gratuito y con poca publicidad, construido alrededor de una idea sencilla: las conversiones y los datos de referencia matemáticos deben ser rápidos, precisos y sin distracciones. Ya sea que necesites convertir centímetros a pulgadas, averiguar cuántos gramos hay en una taza de harina, o consultar la tabla de multiplicar del 13, puedes encontrar la respuesta aquí en segundos — sin pop-ups, muros de cookies ni interfaces sobrecargadas.',
          }[l]}
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'Our mission is to make everyday calculations accessible to everyone — students doing homework, home cooks adapting recipes, teachers preparing lessons, engineers doing quick checks, and curious minds exploring numbers. We believe a good tool should get out of your way and let you focus on what matters.',
            it: 'La nostra missione è rendere i calcoli quotidiani accessibili a tutti — studenti che fanno i compiti, cuochi casalinghi che adattano ricette, insegnanti che preparano lezioni, ingegneri che fanno verifiche rapide e menti curiose che esplorano i numeri. Crediamo che uno strumento valido debba togliersi di mezzo e lasciarti concentrare su ciò che conta.',
            de: 'Unsere Mission ist es, alltägliche Berechnungen für jeden zugänglich zu machen — für Schüler bei den Hausaufgaben, Hobbyköche beim Anpassen von Rezepten, Lehrer bei der Unterrichtsvorbereitung, Ingenieure bei schnellen Überprüfungen und neugierige Köpfe, die Zahlen erkunden. Wir glauben, dass ein gutes Werkzeug nicht im Weg stehen, sondern Sie auf das Wesentliche fokussieren lassen sollte.',
            fr: 'Notre mission est de rendre les calculs quotidiens accessibles à tous — des étudiants qui font leurs devoirs, des cuisiniers amateurs qui adaptent des recettes, des enseignants qui préparent des cours, des ingénieurs qui effectuent des vérifications rapides, et des esprits curieux qui explorent les chiffres. Nous croyons qu\'un bon outil doit s\'effacer et vous laisser vous concentrer sur l\'essentiel.',
            es: 'Nuestra misión es hacer que los cálculos cotidianos sean accesibles para todos — estudiantes haciendo tareas, cocineros caseros adaptando recetas, profesores preparando lecciones, ingenieros haciendo comprobaciones rápidas y mentes curiosas explorando los números. Creemos que una buena herramienta debe apartarse y dejarte concentrarte en lo que importa.',
          }[l]}
        </p>
      </section>

      {/* What Is convert·tables */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-zinc-900 mb-3">
          {{
            en: 'What Is convert·tables?',
            it: 'Cos\'è convert·tables?',
            de: 'Was ist convert·tables?',
            fr: 'Qu\'est-ce que convert·tables?',
            es: '¿Qué es convert·tables?',
          }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'convert·tables is a free online platform that brings together unit conversions, cooking measurement tools, and mathematical reference tables in one clean, fast-loading website. On the conversion side, you can switch between metric and imperial units across dozens of categories — length, weight, volume, temperature, area, speed, and more. Every conversion uses standard international definitions, so the results are reliable whether you\'re doing schoolwork or professional calculations.',
            it: 'convert·tables è una piattaforma online gratuita che riunisce conversioni di unità, strumenti per le misure da cucina e tabelle di riferimento matematiche in un unico sito web pulito e a caricamento rapido. Sul fronte delle conversioni, puoi passare tra unità metriche e imperiali in dozzine di categorie — lunghezza, peso, volume, temperatura, area, velocità e molto altro. Ogni conversione utilizza definizioni internazionali standard, quindi i risultati sono affidabili sia per il lavoro scolastico che per i calcoli professionali.',
            de: 'convert·tables ist eine kostenlose Online-Plattform, die Einheitenumrechner, Küchenmessumrechner und mathematische Referenztabellen auf einer übersichtlichen, schnell ladenden Website vereint. Auf der Umrechnungsseite können Sie zwischen metrischen und imperialen Einheiten in Dutzenden von Kategorien wechseln — Länge, Gewicht, Volumen, Temperatur, Fläche, Geschwindigkeit und mehr. Jede Umrechnung verwendet internationale Standarddefinitionen, sodass die Ergebnisse zuverlässig sind, egal ob Sie für die Schule oder für professionelle Berechnungen arbeiten.',
            fr: 'convert·tables est une plateforme en ligne gratuite qui rassemble des convertisseurs d\'unités, des outils de mesure culinaire et des tables de référence mathématiques sur un seul site web épuré et à chargement rapide. Côté conversions, vous pouvez passer entre les unités métriques et impériales dans des dizaines de catégories — longueur, poids, volume, température, superficie, vitesse, et bien plus. Chaque conversion utilise des définitions internationales standard, ce qui rend les résultats fiables aussi bien pour les devoirs scolaires que pour les calculs professionnels.',
            es: 'convert·tables es una plataforma en línea gratuita que reúne conversores de unidades, herramientas de medidas culinarias y tablas de referencia matemáticas en un sitio web limpio y de carga rápida. En el lado de las conversiones, puedes cambiar entre unidades métricas e imperiales en docenas de categorías — longitud, peso, volumen, temperatura, área, velocidad y más. Cada conversión utiliza definiciones internacionales estándar, por lo que los resultados son confiables tanto para tareas escolares como para cálculos profesionales.',
          }[l]}
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'Beyond unit conversion, convert·tables is a go-to reference for the kitchen and the classroom. The cooking section lets you convert cups to grams for over 60 ingredients, handle tablespoons and teaspoons, decode oven temperatures across Celsius, Fahrenheit, and gas marks, and figure out exactly how much butter you need when a recipe calls for a "stick." The math tables section covers everything from multiplication grids and prime numbers to binary and hexadecimal charts, Roman numerals, logarithm tables, trigonometry values, and the Greek alphabet — all on a single site, all free.',
            it: 'Oltre alla conversione di unità, convert·tables è un riferimento ideale per la cucina e la classe. La sezione dedicata alla cucina ti permette di convertire tazze in grammi per oltre 60 ingredienti, gestire cucchiai e cucchiaini, decodificare le temperature del forno tra Celsius, Fahrenheit e gradi gas, e capire esattamente quanto burro ti serve quando una ricetta chiede uno "stick". La sezione delle tabelle matematiche copre tutto, dalle griglie di moltiplicazione e i numeri primi alle tabelle binarie ed esadecimali, i numeri romani, le tavole dei logaritmi, i valori trigonometrici e l\'alfabeto greco — tutto su un unico sito, tutto gratuito.',
            de: 'Über die Einheitenumrechnung hinaus ist convert·tables eine unverzichtbare Referenz für Küche und Unterricht. Im Kochbereich können Sie Tassen in Gramm für über 60 Zutaten umrechnen, Esslöffel und Teelöffel verarbeiten, Ofentemperaturen zwischen Celsius, Fahrenheit und Gasstufen entschlüsseln und genau herausfinden, wie viel Butter Sie benötigen, wenn ein Rezept einen "Stick" verlangt. Der Bereich für Mathematiktabellen deckt alles ab — von Multiplikationsrastern und Primzahlen bis hin zu Binär- und Hexadezimaltabellen, römischen Zahlen, Logarithmentafeln, Trigonometriewerten und dem griechischen Alphabet — alles auf einer Website, alles kostenlos.',
            fr: 'Au-delà de la conversion d\'unités, convert·tables est une référence incontournable pour la cuisine et la salle de classe. La section cuisine vous permet de convertir des tasses en grammes pour plus de 60 ingrédients, de gérer les cuillères à soupe et à café, de décoder les températures de cuisson entre Celsius, Fahrenheit et thermostat, et de déterminer exactement la quantité de beurre nécessaire quand une recette demande un "stick". La section des tables mathématiques couvre tout — des grilles de multiplication et des nombres premiers aux tableaux binaires et hexadécimaux, aux chiffres romains, aux tables de logarithmes, aux valeurs trigonométriques et à l\'alphabet grec — tout sur un seul site, tout gratuit.',
            es: 'Más allá de la conversión de unidades, convert·tables es una referencia imprescindible para la cocina y el aula. La sección de cocina te permite convertir tazas a gramos para más de 60 ingredientes, manejar cucharadas y cucharaditas, decodificar temperaturas de horno entre Celsius, Fahrenheit y marcas de gas, y averiguar exactamente cuánta mantequilla necesitas cuando una receta pide un "stick". La sección de tablas matemáticas cubre todo — desde cuadrículas de multiplicación y números primos hasta tablas binarias y hexadecimales, números romanos, tablas de logaritmos, valores trigonométricos y el alfabeto griego — todo en un solo sitio, todo gratis.',
          }[l]}
        </p>
      </section>

      {/* Our Tools */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-zinc-900 mb-3">
          {{
            en: 'Our Tools',
            it: 'I nostri strumenti',
            de: 'Unsere Werkzeuge',
            fr: 'Nos outils',
            es: 'Nuestras herramientas',
          }[l]}
        </h2>

        <div className="mb-6">
          <h3 className="text-base font-semibold text-zinc-800 mb-2">
            {{
              en: 'Unit Conversions',
              it: 'Conversioni di unità',
              de: 'Einheitenumrechnung',
              fr: 'Conversions d\'unités',
              es: 'Conversiones de unidades',
            }[l]}
          </h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            {{
              en: 'Our unit converter handles the full spectrum of everyday and scientific measurements. Length conversions cover millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles. Weight conversions span milligrams, grams, kilograms, metric tons, ounces, and pounds. For volume, you get milliliters, liters, US fluid ounces, US cups, pints, quarts, and gallons. Temperature conversions between Celsius, Fahrenheit, and Kelvin use exact formulas, not rounded approximations. Area conversions include square meters, square feet, acres, and hectares, while speed conversions cover km/h, mph, and m/s. Every converter includes worked examples and contextual notes so you understand not just the number, but what it means.',
              it: 'Il nostro convertitore di unità gestisce l\'intera gamma di misurazioni quotidiane e scientifiche. Le conversioni di lunghezza coprono millimetri, centimetri, metri, chilometri, pollici, piedi, iarde e miglia. Le conversioni di peso spaziano da milligrammi, grammi, chilogrammi, tonnellate metriche, once e libbre. Per il volume trovi millilitri, litri, once liquide US, tazze US, pinte, quarti di gallone e galloni. Le conversioni di temperatura tra Celsius, Fahrenheit e Kelvin usano formule esatte, non approssimazioni arrotondate. Le conversioni di area includono metri quadrati, piedi quadrati, acri ed ettari, mentre quelle di velocità coprono km/h, mph e m/s. Ogni convertitore include esempi pratici e note contestuali per capire non solo il numero, ma il suo significato.',
              de: 'Unser Einheitenumrechner deckt das gesamte Spektrum alltäglicher und wissenschaftlicher Messungen ab. Längenumrechnungen umfassen Millimeter, Zentimeter, Meter, Kilometer, Zoll, Fuß, Yards und Meilen. Gewichtsumrechnungen reichen von Milligramm, Gramm, Kilogramm, metrischen Tonnen bis zu Unzen und Pfund. Für das Volumen stehen Milliliter, Liter, US-Flüssigunzen, US-Tassen, Pints, Quarts und Gallonen zur Verfügung. Temperaturumrechnungen zwischen Celsius, Fahrenheit und Kelvin verwenden exakte Formeln, keine gerundeten Näherungen. Flächenumrechnungen umfassen Quadratmeter, Quadratfuß, Acres und Hektar, während Geschwindigkeitsumrechnungen km/h, mph und m/s abdecken. Jeder Umrechner enthält ausgearbeitete Beispiele und Kontexthinweise, damit Sie nicht nur die Zahl, sondern auch ihre Bedeutung verstehen.',
              fr: 'Notre convertisseur d\'unités couvre tout le spectre des mesures quotidiennes et scientifiques. Les conversions de longueur couvrent les millimètres, centimètres, mètres, kilomètres, pouces, pieds, yards et miles. Les conversions de poids vont des milligrammes, grammes, kilogrammes, tonnes métriques jusqu\'aux onces et livres. Pour le volume, vous disposez de millilitres, litres, onces liquides US, tasses US, pintes, quarts et gallons. Les conversions de température entre Celsius, Fahrenheit et Kelvin utilisent des formules exactes, pas des approximations arrondies. Les conversions de superficie incluent les mètres carrés, pieds carrés, acres et hectares, tandis que les conversions de vitesse couvrent km/h, mph et m/s. Chaque convertisseur comprend des exemples détaillés et des notes contextuelles pour que vous compreniez non seulement le chiffre, mais ce qu\'il signifie.',
              es: 'Nuestro conversor de unidades maneja todo el espectro de mediciones cotidianas y científicas. Las conversiones de longitud cubren milímetros, centímetros, metros, kilómetros, pulgadas, pies, yardas y millas. Las conversiones de peso abarcan miligramos, gramos, kilogramos, toneladas métricas, onzas y libras. Para el volumen, dispones de mililitros, litros, onzas líquidas US, tazas US, pintas, cuartos y galones. Las conversiones de temperatura entre Celsius, Fahrenheit y Kelvin usan fórmulas exactas, no aproximaciones redondeadas. Las conversiones de área incluyen metros cuadrados, pies cuadrados, acres y hectáreas, mientras que las de velocidad cubren km/h, mph y m/s. Cada conversor incluye ejemplos resueltos y notas contextuales para que entiendas no solo el número, sino lo que significa.',
            }[l]}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-semibold text-zinc-800 mb-2">
            {{
              en: 'Cooking Measurements',
              it: 'Misure da cucina',
              de: 'Küchenmaße',
              fr: 'Mesures culinaires',
              es: 'Medidas culinarias',
            }[l]}
          </h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            {{
              en: 'Cooking across different recipe traditions is one of the most common places where unit confusion strikes. American recipes use cups, tablespoons, teaspoons, and sticks of butter — none of which map neatly to the grams and milliliters used in European and international cooking. Our cups-to-grams converter covers more than 60 ingredients — from all-purpose flour and granulated sugar to almond flour, honey, olive oil, cocoa powder, and rice — with density values sourced from the FAO Food Density Database and verified against standard culinary references. Tablespoon-to-gram and teaspoon-to-gram converters follow the same ingredient-specific approach. The oven temperature converter translates between Celsius, Fahrenheit, gas marks, and fan oven settings, so you can follow any recipe regardless of where it was written.',
              it: 'Cucinare con ricette di tradizioni diverse è uno dei contesti più comuni in cui la confusione tra unità di misura colpisce. Le ricette americane usano tazze, cucchiai, cucchiaini e stick di burro — nessuno dei quali si converte facilmente nei grammi e millilitri usati nella cucina europea e internazionale. Il nostro convertitore da tazze a grammi copre più di 60 ingredienti — dalla farina 00 allo zucchero semolato, dalla farina di mandorle al miele, all\'olio d\'oliva, al cacao in polvere e al riso — con valori di densità tratti dal database FAO sulla densità degli alimenti e verificati rispetto ai riferimenti culinari standard. I convertitori da cucchiai a grammi e da cucchiaini a grammi seguono lo stesso approccio per ingrediente specifico. Il convertitore di temperature del forno traduce tra Celsius, Fahrenheit, gradi gas e impostazioni di ventilazione, così puoi seguire qualsiasi ricetta indipendentemente da dove sia stata scritta.',
              de: 'Kochen nach Rezepten verschiedener Traditionen ist einer der häufigsten Bereiche, in denen Einheitenverwirrung entsteht. Amerikanische Rezepte verwenden Tassen, Esslöffel, Teelöffel und Buttersticks — keine davon lässt sich einfach in die Gramm und Milliliter umrechnen, die in der europäischen und internationalen Küche verwendet werden. Unser Tassen-in-Gramm-Umrechner deckt mehr als 60 Zutaten ab — von Weizenmehl und Kristallzucker bis zu Mandelmehl, Honig, Olivenöl, Kakaopulver und Reis — mit Dichtewerten aus der FAO-Lebensmitteldichtedatenbank, die anhand kulinarischer Standardreferenzen überprüft wurden. Die Esslöffel-in-Gramm- und Teelöffel-in-Gramm-Umrechner folgen demselben zutatenspezifischen Ansatz. Der Ofentemperaturumrechner übersetzt zwischen Celsius, Fahrenheit, Gasstufen und Umlufteinstellungen, sodass Sie jedes Rezept befolgen können, unabhängig davon, wo es geschrieben wurde.',
              fr: 'Cuisiner à partir de recettes de différentes traditions est l\'un des contextes les plus courants où la confusion entre unités de mesure survient. Les recettes américaines utilisent des tasses, des cuillères à soupe, des cuillères à café et des "sticks" de beurre — aucun de ces éléments ne se convertit facilement en grammes et millilitres utilisés dans la cuisine européenne et internationale. Notre convertisseur tasses en grammes couvre plus de 60 ingrédients — de la farine tout usage au sucre en poudre, en passant par la farine d\'amandes, le miel, l\'huile d\'olive, la poudre de cacao et le riz — avec des valeurs de densité issues de la base de données FAO sur la densité des aliments et vérifiées par rapport aux références culinaires standard. Les convertisseurs cuillères à soupe en grammes et cuillères à café en grammes suivent la même approche par ingrédient spécifique. Le convertisseur de température de four traduit entre Celsius, Fahrenheit, thermostat et réglages de four à chaleur tournante, vous permettant de suivre n\'importe quelle recette quelle que soit son origine.',
              es: 'Cocinar siguiendo recetas de diferentes tradiciones es uno de los contextos más comunes donde surge la confusión entre unidades de medida. Las recetas americanas usan tazas, cucharadas, cucharaditas y sticks de mantequilla — ninguno de los cuales se convierte fácilmente a los gramos y mililitros usados en la cocina europea e internacional. Nuestro conversor de tazas a gramos cubre más de 60 ingredientes — desde harina todo uso y azúcar granulado hasta harina de almendras, miel, aceite de oliva, cacao en polvo y arroz — con valores de densidad obtenidos de la base de datos de densidad alimentaria de la FAO y verificados con referencias culinarias estándar. Los conversores de cucharadas a gramos y cucharaditas a gramos siguen el mismo enfoque específico por ingrediente. El conversor de temperatura de horno traduce entre Celsius, Fahrenheit, marcas de gas y configuraciones de horno con ventilador, para que puedas seguir cualquier receta sin importar dónde fue escrita.',
            }[l]}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-semibold text-zinc-800 mb-2">
            {{
              en: 'Math Reference Tables',
              it: 'Tabelle di riferimento matematico',
              de: 'Mathematische Referenztabellen',
              fr: 'Tables de référence mathématiques',
              es: 'Tablas de referencia matemáticas',
            }[l]}
          </h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            {{
              en: 'The math tables section is a comprehensive reference library for students, teachers, and anyone working with numbers. Multiplication tables go from 1×1 to 12×12 with individual drill pages for each number. The prime numbers table lists all primes up to 1,000 with primality notes. Binary and hexadecimal tables cover decimal-to-binary and decimal-to-hex conversions side by side. The Roman numerals chart explains the standard system and its subtractive notation rules, with conversion for numbers up to 3,999. Logarithm tables provide base-10 and natural log values for common numbers. Trigonometry tables list sine, cosine, and tangent values at standard angles in both degrees and radians. Additional reference tables include the ASCII character chart, HTML color codes, Fibonacci sequence, powers of 2, squares and cubes, the Greek alphabet with Unicode code points, exponent rules, percentage charts, math symbols, and AWG wire gauge specifications — making convert·tables a genuine one-stop reference for everyday technical and educational needs.',
              it: 'La sezione delle tabelle matematiche è una biblioteca di riferimento completa per studenti, insegnanti e chiunque lavori con i numeri. Le tavole della moltiplicazione vanno dall\'1×1 al 12×12 con pagine di esercizio individuali per ogni numero. La tabella dei numeri primi elenca tutti i primi fino a 1.000 con note sulla primalità. Le tabelle binarie ed esadecimali mostrano affiancate le conversioni da decimale a binario e da decimale a esadecimale. Il grafico dei numeri romani spiega il sistema standard e le regole di notazione sottrattiva, con conversione per numeri fino a 3.999. Le tavole dei logaritmi forniscono valori in base 10 e logaritmo naturale per i numeri più comuni. Le tabelle di trigonometria elencano seno, coseno e tangente agli angoli standard sia in gradi che in radianti. Ulteriori tabelle di riferimento includono la tabella dei caratteri ASCII, i codici colore HTML, la successione di Fibonacci, le potenze di 2, quadrati e cubi, l\'alfabeto greco con i codici Unicode, le regole degli esponenti, i grafici percentuali, i simboli matematici e le specifiche AWG per i cavi elettrici — rendendo convert·tables un autentico riferimento unico per le esigenze tecniche ed educative quotidiane.',
              de: 'Der Bereich für Mathematiktabellen ist eine umfassende Referenzbibliothek für Schüler, Lehrer und alle, die mit Zahlen arbeiten. Multiplikationstabellen reichen von 1×1 bis 12×12 mit einzelnen Übungsseiten für jede Zahl. Die Primzahltabelle listet alle Primzahlen bis 1.000 mit Primzahlhinweisen auf. Binär- und Hexadezimaltabellen zeigen Dezimal-zu-Binär- und Dezimal-zu-Hex-Umrechnungen nebeneinander. Das Diagramm der römischen Zahlen erklärt das Standardsystem und seine subtraktiven Notationsregeln, mit Umrechnungen für Zahlen bis 3.999. Logarithmentafeln liefern dekadische und natürliche Logarithmuswerte für gängige Zahlen. Trigonometrietabellen listen Sinus-, Kosinus- und Tangenswerte bei Standardwinkeln sowohl in Grad als auch in Radiant auf. Weitere Referenztabellen umfassen die ASCII-Zeichentabelle, HTML-Farbcodes, die Fibonacci-Folge, Potenzen von 2, Quadrate und Kubikzahlen, das griechische Alphabet mit Unicode-Codepunkten, Exponentenregeln, Prozentdiagramme, mathematische Symbole und AWG-Drahtlehrenspezifikationen — was convert·tables zu einer echten Anlaufstelle für alltägliche technische und Bildungsanforderungen macht.',
              fr: 'La section des tables mathématiques est une bibliothèque de référence complète pour les étudiants, les enseignants et toute personne travaillant avec des chiffres. Les tables de multiplication vont de 1×1 à 12×12 avec des pages d\'exercices individuelles pour chaque chiffre. La table des nombres premiers liste tous les premiers jusqu\'à 1 000 avec des notes sur la primalité. Les tables binaires et hexadécimales présentent côte à côte les conversions décimal-binaire et décimal-hexadécimal. Le tableau des chiffres romains explique le système standard et ses règles de notation soustractive, avec une conversion pour les nombres jusqu\'à 3 999. Les tables de logarithmes fournissent les valeurs log base 10 et logarithme naturel pour les nombres courants. Les tables trigonométriques listent les valeurs de sinus, cosinus et tangente aux angles standard en degrés et en radians. D\'autres tables de référence incluent le tableau des caractères ASCII, les codes couleur HTML, la suite de Fibonacci, les puissances de 2, les carrés et cubes, l\'alphabet grec avec les points de code Unicode, les règles des exposants, les tableaux de pourcentages, les symboles mathématiques et les spécifications de calibre de fil AWG — faisant de convert·tables une véritable référence unique pour les besoins techniques et éducatifs quotidiens.',
              es: 'La sección de tablas matemáticas es una biblioteca de referencia completa para estudiantes, profesores y cualquier persona que trabaje con números. Las tablas de multiplicar van del 1×1 al 12×12 con páginas de práctica individuales para cada número. La tabla de números primos lista todos los primos hasta 1.000 con notas sobre la primalidad. Las tablas binarias y hexadecimales muestran conversiones de decimal a binario y de decimal a hexadecimal en paralelo. El gráfico de números romanos explica el sistema estándar y sus reglas de notación sustractiva, con conversión para números hasta 3.999. Las tablas de logaritmos proporcionan valores de logaritmo en base 10 y logaritmo natural para números comunes. Las tablas de trigonometría listan valores de seno, coseno y tangente en ángulos estándar tanto en grados como en radianes. Las tablas de referencia adicionales incluyen la tabla de caracteres ASCII, códigos de colores HTML, sucesión de Fibonacci, potencias de 2, cuadrados y cubos, el alfabeto griego con puntos de código Unicode, reglas de exponentes, gráficos de porcentajes, símbolos matemáticos y especificaciones de calibre de cable AWG — convirtiendo a convert·tables en una auténtica referencia única para las necesidades técnicas y educativas cotidianas.',
            }[l]}
          </p>
        </div>
      </section>

      {/* Why We Built convert·tables */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-zinc-900 mb-3">
          {{
            en: 'Why We Built convert·tables',
            it: 'Perché abbiamo creato convert·tables',
            de: 'Warum wir convert·tables gebaut haben',
            fr: 'Pourquoi nous avons créé convert·tables',
            es: 'Por qué creamos convert·tables',
          }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'convert·tables started from a simple frustration: most online conversion tools are slow, cluttered, and designed more around ad revenue than user experience. You search for "cups to grams flour," you land on a page that takes four seconds to load, greets you with a cookie consent wall, serves three interstitial ads, and buries the actual answer below the fold. We\'ve all been there, and it\'s unnecessarily bad. We decided to build the tool we actually wanted to use — one that loads instantly, shows the answer prominently, and keeps the interface clean and scannable.',
            it: 'convert·tables è nato da una semplice frustrazione: la maggior parte degli strumenti di conversione online sono lenti, caotici e progettati più attorno ai ricavi pubblicitari che all\'esperienza dell\'utente. Cerchi "tazze in grammi farina", arrivi su una pagina che impiega quattro secondi a caricare, ti accoglie con un muro di consenso per i cookie, ti serve tre inserzioni interstitial e nasconde la risposta effettiva sotto la piega della pagina. Ci siamo passati tutti, ed è inutilmente pessimo. Abbiamo deciso di costruire lo strumento che volevamo davvero usare — uno che si carica istantaneamente, mostra la risposta in modo prominente e mantiene l\'interfaccia pulita e leggibile.',
            de: 'convert·tables entstand aus einer einfachen Frustration: Die meisten Online-Umrechnungstools sind langsam, überfüllt und mehr auf Werbeeinnahmen als auf Benutzererfahrung ausgerichtet. Man sucht nach "Tassen in Gramm Mehl", landet auf einer Seite, die vier Sekunden zum Laden braucht, wird von einer Cookie-Consent-Mauer begrüßt, bekommt drei Interstitial-Anzeigen serviert und die eigentliche Antwort ist unter der Falz versteckt. Wir alle kennen das, und es ist unnötig schlecht. Wir beschlossen, das Tool zu bauen, das wir tatsächlich verwenden wollten — eines, das sofort lädt, die Antwort prominent anzeigt und die Oberfläche sauber und übersichtlich hält.',
            fr: 'convert·tables est né d\'une frustration simple : la plupart des outils de conversion en ligne sont lents, encombrés et conçus davantage autour des revenus publicitaires que de l\'expérience utilisateur. Vous recherchez "tasses en grammes farine", vous atterrissez sur une page qui met quatre secondes à charger, vous accueille avec un mur de consentement aux cookies, vous sert trois publicités interstitielles et noie la vraie réponse sous la ligne de flottaison. Nous sommes tous passés par là, et c\'est inutilement mauvais. Nous avons décidé de construire l\'outil que nous voulions vraiment utiliser — un outil qui se charge instantanément, affiche la réponse de manière bien visible et maintient une interface propre et lisible.',
            es: 'convert·tables nació de una frustración simple: la mayoría de las herramientas de conversión en línea son lentas, desordenadas y diseñadas más en torno a los ingresos publicitarios que a la experiencia del usuario. Buscas "tazas a gramos harina", llegas a una página que tarda cuatro segundos en cargar, te recibe con un muro de consentimiento de cookies, te sirve tres anuncios intersticiales y entierra la respuesta real por debajo del pliegue. Todos hemos pasado por eso, y es innecesariamente malo. Decidimos construir la herramienta que realmente queríamos usar — una que carga instantáneamente, muestra la respuesta de forma destacada y mantiene la interfaz limpia y escaneable.',
          }[l]}
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'The values behind the project are straightforward: accuracy above all, simplicity in design, and genuine usefulness for the people who need these tools every day. We don\'t guess at conversion factors — we source them from international standards bodies and peer-reviewed references. We don\'t design for engagement metrics — we design for the person who has thirty seconds and needs a correct answer. And we don\'t see "free" as a reason to sacrifice quality: every page on convert·tables is built to be as useful on a slow mobile connection as it is on a desktop with a fiber link.',
            it: 'I valori alla base del progetto sono semplici: precisione prima di tutto, semplicità nel design e utilità genuina per le persone che hanno bisogno di questi strumenti ogni giorno. Non ipotizziamo i fattori di conversione — li deriviamo dagli enti internazionali di standardizzazione e da riferimenti peer-reviewed. Non progettiamo per le metriche di coinvolgimento — progettiamo per la persona che ha trenta secondi e ha bisogno di una risposta corretta. E non vediamo "gratuito" come una ragione per sacrificare la qualità: ogni pagina di convert·tables è costruita per essere altrettanto utile su una connessione mobile lenta quanto su un desktop con fibra ottica.',
            de: 'Die Werte hinter dem Projekt sind unkompliziert: Genauigkeit vor allem, Einfachheit im Design und echter Nutzen für Menschen, die diese Tools täglich benötigen. Wir raten keine Umrechnungsfaktoren — wir beziehen sie von internationalen Normungsgremien und begutachteten Referenzen. Wir gestalten nicht für Engagement-Metriken — wir gestalten für die Person, die dreißig Sekunden Zeit hat und eine korrekte Antwort braucht. Und wir sehen "kostenlos" nicht als Grund, auf Qualität zu verzichten: Jede Seite auf convert·tables ist so gestaltet, dass sie auf einer langsamen Mobilverbindung genauso nützlich ist wie auf einem Desktop mit Glasfaseranschluss.',
            fr: 'Les valeurs qui sous-tendent le projet sont simples : la précision avant tout, la simplicité dans la conception, et une utilité authentique pour les personnes qui ont besoin de ces outils au quotidien. Nous ne devinons pas les facteurs de conversion — nous les tirons des organismes internationaux de normalisation et des références évaluées par des pairs. Nous ne concevons pas pour les métriques d\'engagement — nous concevons pour la personne qui dispose de trente secondes et a besoin d\'une réponse correcte. Et nous ne voyons pas "gratuit" comme une raison de sacrifier la qualité : chaque page de convert·tables est conçue pour être aussi utile sur une connexion mobile lente que sur un bureau avec une connexion fibre.',
            es: 'Los valores detrás del proyecto son sencillos: precisión ante todo, simplicidad en el diseño y utilidad genuina para las personas que necesitan estas herramientas todos los días. No adivinamos los factores de conversión — los obtenemos de organismos internacionales de normalización y referencias revisadas por pares. No diseñamos para métricas de engagement — diseñamos para la persona que tiene treinta segundos y necesita una respuesta correcta. Y no vemos "gratis" como una razón para sacrificar la calidad: cada página de convert·tables está construida para ser tan útil en una conexión móvil lenta como en un escritorio con fibra óptica.',
          }[l]}
        </p>
      </section>

      {/* Our Commitment to Accuracy */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-zinc-900 mb-3">
          {{
            en: 'Our Commitment to Accuracy',
            it: 'Il nostro impegno per la precisione',
            de: 'Unser Engagement für Genauigkeit',
            fr: 'Notre engagement envers la précision',
            es: 'Nuestro compromiso con la precisión',
          }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'Every data point on convert·tables is sourced from authoritative references and reviewed for accuracy before publication. Unit conversion factors follow the International System of Units (SI) as maintained by the Bureau International des Poids et Mesures (BIPM), the global authority on measurement standards. Imperial and US customary units use the exact definitions ratified by the international yard and pound agreement of 1959. Ingredient densities for the cups-to-grams converter are drawn from the FAO/INFOODS Food Composition Databases and cross-referenced against established culinary sources, including the USDA National Nutrient Database. Roman numeral rules follow the classical Latin system as documented in historical and academic references. Trigonometric and logarithmic values are computed to full floating-point precision and displayed with appropriate significant figures. We review and update our data regularly to reflect changes in international standards, and we never use approximations where exact values are available. If you spot an error, we want to hear about it — getting the numbers right is the whole point.',
            it: 'Ogni dato su convert·tables proviene da riferimenti autorevoli e viene revisionato per accuratezza prima della pubblicazione. I fattori di conversione delle unità seguono il Sistema Internazionale di Unità (SI) come mantenuto dal Bureau International des Poids et Mesures (BIPM), l\'autorità mondiale sugli standard di misurazione. Le unità imperiali e consuetudinarie statunitensi utilizzano le definizioni esatte ratificate dall\'accordo internazionale sulla iarda e la libbra del 1959. Le densità degli ingredienti per il convertitore da tazze a grammi sono tratte dalle Banche dati sulla composizione degli alimenti FAO/INFOODS e incrociate con fonti culinarie consolidate, incluso il database nazionale dei nutrienti dell\'USDA. Le regole dei numeri romani seguono il sistema latino classico come documentato in riferimenti storici e accademici. I valori trigonometrici e logaritmici sono calcolati con piena precisione in virgola mobile e visualizzati con le cifre significative appropriate. Aggiornamento regolare dei nostri dati per riflettere le modifiche agli standard internazionali, e non utilizziamo mai approssimazioni quando sono disponibili valori esatti. Se noti un errore, vogliamo sapere — avere i numeri giusti è il senso di tutto.',
            de: 'Jeder Datenpunkt auf convert·tables stammt aus maßgeblichen Referenzen und wird vor der Veröffentlichung auf Genauigkeit überprüft. Einheitenumrechnungsfaktoren folgen dem Internationalen Einheitensystem (SI), wie es vom Bureau International des Poids et Mesures (BIPM), der globalen Behörde für Messnormen, gepflegt wird. Imperiale und US-amerikanische Maßeinheiten verwenden die genauen Definitionen, die durch das internationale Yard-und-Pfund-Abkommen von 1959 ratifiziert wurden. Die Zutatedichten für den Tassen-in-Gramm-Umrechner stammen aus den FAO/INFOODS-Lebensmittelzusammensetzungsdatenbanken und wurden mit etablierten kulinarischen Quellen, einschließlich der USDA National Nutrient Database, abgeglichen. Die Regeln der römischen Zahlen folgen dem klassischen lateinischen System, wie es in historischen und akademischen Referenzen dokumentiert ist. Trigonometrische und logarithmische Werte werden mit voller Gleitkommagenauigkeit berechnet und mit entsprechenden signifikanten Stellen angezeigt. Wir überprüfen und aktualisieren unsere Daten regelmäßig, um Änderungen in internationalen Standards widerzuspiegeln, und verwenden nie Näherungswerte, wenn exakte Werte verfügbar sind. Wenn Sie einen Fehler entdecken, möchten wir davon hören — die Zahlen richtig zu bekommen ist der ganze Sinn.',
            fr: 'Chaque point de données sur convert·tables est tiré de références faisant autorité et examiné pour son exactitude avant publication. Les facteurs de conversion des unités suivent le Système international d\'unités (SI) tel que maintenu par le Bureau International des Poids et Mesures (BIPM), l\'autorité mondiale en matière de normes de mesure. Les unités impériales et coutumières américaines utilisent les définitions exactes ratifiées par l\'accord international sur le yard et la livre de 1959. Les densités des ingrédients pour le convertisseur tasses en grammes sont tirées des bases de données de composition des aliments FAO/INFOODS et recoupées avec des sources culinaires établies, notamment la base de données nationale des nutriments de l\'USDA. Les règles des chiffres romains suivent le système latin classique tel que documenté dans des références historiques et académiques. Les valeurs trigonométriques et logarithmiques sont calculées avec une précision en virgule flottante complète et affichées avec le nombre approprié de chiffres significatifs. Nous examinons et mettons à jour nos données régulièrement pour refléter les changements dans les normes internationales, et nous n\'utilisons jamais d\'approximations lorsque des valeurs exactes sont disponibles. Si vous repérez une erreur, nous voulons en être informés — obtenir les bons chiffres est tout l\'enjeu.',
            es: 'Cada dato en convert·tables proviene de referencias autorizadas y se revisa para verificar su precisión antes de la publicación. Los factores de conversión de unidades siguen el Sistema Internacional de Unidades (SI) mantenido por el Bureau International des Poids et Mesures (BIPM), la autoridad mundial en normas de medición. Las unidades imperiales y consuetudinarias de EE. UU. utilizan las definiciones exactas ratificadas por el acuerdo internacional sobre la yarda y la libra de 1959. Las densidades de ingredientes para el conversor de tazas a gramos provienen de las Bases de Datos de Composición de Alimentos FAO/INFOODS y se contrastan con fuentes culinarias establecidas, incluyendo la Base de Datos Nacional de Nutrientes del USDA. Las reglas de los números romanos siguen el sistema latino clásico tal como está documentado en referencias históricas y académicas. Los valores trigonométricos y logarítmicos se calculan con precisión completa de coma flotante y se muestran con las cifras significativas apropiadas. Revisamos y actualizamos nuestros datos regularmente para reflejar los cambios en los estándares internacionales, y nunca usamos aproximaciones cuando hay valores exactos disponibles. Si encuentras un error, queremos saberlo — obtener los números correctos es el objetivo de todo.',
          }[l]}
        </p>
      </section>

      {/* Available in 5 Languages */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-zinc-900 mb-3">
          {{
            en: 'Available in 5 Languages',
            it: 'Disponibile in 5 lingue',
            de: 'In 5 Sprachen verfügbar',
            fr: 'Disponible en 5 langues',
            es: 'Disponible en 5 idiomas',
          }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'convert·tables is fully available in English, Italian, German, French, and Spanish. Each language version is a native localization — not a machine translation layered over an English template, but content written and reviewed to read naturally in each language. Unit names, measurement terms, and cultural conventions (such as which unit systems are most familiar to speakers of each language) are adapted for each locale. This matters because a German user looking for "Tassen in Gramm" has different expectations than an American user searching for "cups to grams" — both deserve an experience that feels built for them. Whether you\'re a student in Milan, a home cook in Paris, a teacher in Madrid, an engineer in Berlin, or a baker in London, convert·tables is designed to meet you where you are.',
            it: 'convert·tables è completamente disponibile in inglese, italiano, tedesco, francese e spagnolo. Ogni versione linguistica è una localizzazione nativa — non una traduzione automatica sovrapposta a un modello inglese, ma contenuti scritti e revisionati per risultare naturali in ogni lingua. I nomi delle unità, i termini di misura e le convenzioni culturali (come i sistemi di unità più familiari agli utenti di ogni lingua) sono adattati per ogni locale. Questo è importante perché un utente tedesco che cerca "Tassen in Gramm" ha aspettative diverse da un utente americano che cerca "cups to grams" — entrambi meritano un\'esperienza che sembra costruita per loro. Che tu sia uno studente a Milano, un cuoco casalingo a Parigi, un insegnante a Madrid, un ingegnere a Berlino o un fornaio a Londra, convert·tables è progettato per incontrarti dove sei.',
            de: 'convert·tables ist vollständig auf Englisch, Italienisch, Deutsch, Französisch und Spanisch verfügbar. Jede Sprachversion ist eine native Lokalisierung — keine maschinelle Übersetzung über einer englischen Vorlage, sondern Inhalte, die für jede Sprache geschrieben und überprüft wurden, um natürlich zu lesen. Einheitenbezeichnungen, Maßbegriffe und kulturelle Konventionen (wie die den Sprechern jeder Sprache vertrautesten Maßsysteme) sind für jedes Gebietsschema angepasst. Das ist wichtig, weil ein deutscher Nutzer, der nach "Tassen in Gramm" sucht, andere Erwartungen hat als ein amerikanischer Nutzer, der nach "cups to grams" sucht — beide verdienen eine Erfahrung, die sich für sie gebaut anfühlt. Ob Sie Student in Mailand, Hobbyköchin in Paris, Lehrerin in Madrid, Ingenieur in Berlin oder Bäcker in London sind — convert·tables ist darauf ausgelegt, Sie dort abzuholen, wo Sie sind.',
            fr: 'convert·tables est entièrement disponible en anglais, italien, allemand, français et espagnol. Chaque version linguistique est une localisation native — pas une traduction automatique superposée à un modèle anglais, mais du contenu rédigé et revu pour se lire naturellement dans chaque langue. Les noms d\'unités, les termes de mesure et les conventions culturelles (comme les systèmes d\'unités les plus familiers aux locuteurs de chaque langue) sont adaptés à chaque locale. C\'est important car un utilisateur allemand cherchant "Tassen in Gramm" a des attentes différentes d\'un utilisateur américain cherchant "cups to grams" — les deux méritent une expérience qui semble construite pour eux. Que vous soyez étudiant à Milan, cuisinier amateur à Paris, enseignant à Madrid, ingénieur à Berlin ou boulanger à Londres, convert·tables est conçu pour vous rejoindre là où vous êtes.',
            es: 'convert·tables está completamente disponible en inglés, italiano, alemán, francés y español. Cada versión de idioma es una localización nativa — no una traducción automática superpuesta a una plantilla en inglés, sino contenido escrito y revisado para leerse de forma natural en cada idioma. Los nombres de unidades, los términos de medida y las convenciones culturales (como los sistemas de unidades más familiares para los hablantes de cada idioma) se adaptan a cada configuración regional. Esto importa porque un usuario alemán buscando "Tassen in Gramm" tiene expectativas diferentes a las de un usuario estadounidense buscando "cups to grams" — ambos merecen una experiencia que se sienta construida para ellos. Ya seas un estudiante en Milán, un cocinero casero en París, un profesor en Madrid, un ingeniero en Berlín o un panadero en Londres, convert·tables está diseñado para encontrarte donde estés.',
          }[l]}
        </p>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-zinc-900 mb-3">
          {{
            en: 'Contact',
            it: 'Contatti',
            de: 'Kontakt',
            fr: 'Contact',
            es: 'Contacto',
          }[l]}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          {{
            en: 'Have a question, spotted an inaccuracy, or want to suggest a new conversion or table? We\'d love to hear from you. convert·tables is a small project built with care, and user feedback is genuinely how we improve. Whether you\'re reporting a wrong conversion factor, requesting support for a new ingredient in the cups-to-grams converter, suggesting a missing math reference table, or simply want to say the site helped you — reach out at ',
            it: 'Hai una domanda, hai trovato un\'imprecisione o vuoi suggerire una nuova conversione o tabella? Ci farebbe piacere sentirti. convert·tables è un piccolo progetto realizzato con cura, e il feedback degli utenti è davvero il modo in cui miglioriamo. Che tu stia segnalando un fattore di conversione errato, richiedendo il supporto per un nuovo ingrediente nel convertitore da tazze a grammi, suggerendo una tabella di riferimento matematico mancante, o semplicemente vuoi dire che il sito ti ha aiutato — scrivici a ',
            de: 'Haben Sie eine Frage, eine Ungenauigkeit entdeckt oder möchten Sie eine neue Umrechnung oder Tabelle vorschlagen? Wir würden gerne von Ihnen hören. convert·tables ist ein kleines Projekt, das mit Sorgfalt entwickelt wurde, und Nutzerfeedback ist tatsächlich der Weg, auf dem wir uns verbessern. Ob Sie einen falschen Umrechnungsfaktor melden, Unterstützung für eine neue Zutat im Tassen-in-Gramm-Umrechner anfragen, eine fehlende mathematische Referenztabelle vorschlagen oder einfach sagen möchten, dass die Website Ihnen geholfen hat — kontaktieren Sie uns unter ',
            fr: 'Vous avez une question, repéré une inexactitude ou souhaitez suggérer une nouvelle conversion ou table ? Nous serions ravis de vous entendre. convert·tables est un petit projet réalisé avec soin, et les retours des utilisateurs sont vraiment la façon dont nous nous améliorons. Que vous signaliez un facteur de conversion incorrect, demandiez la prise en charge d\'un nouvel ingrédient dans le convertisseur tasses en grammes, suggériez une table de référence mathématique manquante, ou souhaitiez simplement dire que le site vous a aidé — contactez-nous à ',
            es: '¿Tienes una pregunta, encontraste una imprecisión o quieres sugerir una nueva conversión o tabla? Nos encantaría saber de ti. convert·tables es un pequeño proyecto construido con cuidado, y los comentarios de los usuarios son genuinamente como mejoramos. Ya sea que estés reportando un factor de conversión incorrecto, solicitando soporte para un nuevo ingrediente en el conversor de tazas a gramos, sugiriendo una tabla de referencia matemática faltante, o simplemente quieres decir que el sitio te ayudó — escríbenos a ',
          }[l]}
          <a href="mailto:info@converttables.com" className="text-emerald-600 hover:underline font-medium">
            info@converttables.com
          </a>
          {'.'}
        </p>
      </section>
    </div>
  )
}

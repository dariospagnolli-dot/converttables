import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { generateRomanNumeralTable } from '@/lib/tables/math'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'romanNumeralsTable'),
    description: {
      en: 'Complete Roman numerals table from 1 to 3999. Convert Arabic numbers to Roman numerals.',
      it: 'Tabella completa dei numeri romani da 1 a 3999. Converti numeri arabi in numeri romani.',
      de: 'Vollständige Tabelle der römischen Zahlen von 1 bis 3999. Arabische Zahlen in römische Zahlen umwandeln.',
      fr: 'Table complète des chiffres romains de 1 à 3999. Convertir les chiffres arabes en chiffres romains.',
      es: 'Tabla completa de números romanos del 1 al 3999. Convierte números arábigos a números romanos.',
    }[l],
  }
}

export default async function RomanNumeralsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale

  const ranges = [
    { from: 1, to: 100, label: '1–100' },
    { from: 101, to: 200, label: '101–200' },
    { from: 201, to: 300, label: '201–300' },
    { from: 301, to: 500, label: '301–500' },
    { from: 501, to: 1000, label: '501–1000' },
    { from: 1001, to: 2000, label: '1001–2000' },
    { from: 2001, to: 3999, label: '2001–3999' },
  ]

  const keyNumbers = [
    { arabic: 1, roman: 'I' },
    { arabic: 5, roman: 'V' },
    { arabic: 10, roman: 'X' },
    { arabic: 50, roman: 'L' },
    { arabic: 100, roman: 'C' },
    { arabic: 500, roman: 'D' },
    { arabic: 1000, roman: 'M' },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t(l, 'romanNumeralsTable')}</h1>

      {/* Editorial intro */}
      <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          {{
            en: 'Roman numerals are a numeral system that uses combinations of letters from the Latin alphabet to represent numbers. Today you encounter them everywhere: on watch and clock faces, in film credits and copyright years (e.g. MMXXVI), at the Super Bowl and the Olympic Games, in chapter and volume numbering of books, on architectural inscriptions, and in the regnal names of monarchs and popes. Knowing how to read roman numerals is a practical skill used across formal, decorative, and historical contexts.',
            it: 'I numeri romani sono un sistema numerale che utilizza combinazioni di lettere dell\'alfabeto latino per rappresentare i numeri. Li incontri ovunque: sui quadranti di orologi e orologi da polso, nei titoli di coda dei film e negli anni di copyright (es. MMXXVI), al Super Bowl e ai Giochi Olimpici, nella numerazione di capitoli e volumi, nelle iscrizioni architettoniche, e nei nomi dei sovrani e dei papi. Saper leggere i numeri romani è un\'abilità pratica usata in contesti formali, decorativi e storici.',
            de: 'Römische Zahlen sind ein Zahlensystem, das Kombinationen von Buchstaben des lateinischen Alphabets verwendet, um Zahlen darzustellen. Sie begegnen uns überall: auf Ziffernblättern von Uhren, in Filmabspännen und Copyright-Jahresangaben (z. B. MMXXVI), beim Super Bowl und bei den Olympischen Spielen, bei der Kapitel- und Bandnummerierung von Büchern, auf Architekturinschriften und in den Herrschernamen von Monarchen und Päpsten. Römische Zahlen lesen zu können ist eine praktische Fähigkeit, die in formellen, dekorativen und historischen Zusammenhängen gefragt ist.',
            fr: 'Les chiffres romains sont un système de numération qui utilise des combinaisons de lettres de l\'alphabet latin pour représenter des nombres. On les rencontre partout : sur les cadrans de montres et d\'horloges, dans les génériques de films et les années de copyright (ex. MMXXVI), au Super Bowl et aux Jeux Olympiques, dans la numérotation des chapitres et des volumes, sur les inscriptions architecturales, et dans les noms de règne des monarques et des papes. Savoir lire les chiffres romains est une compétence pratique utilisée dans des contextes formels, décoratifs et historiques.',
            es: 'Los números romanos son un sistema de numeración que usa combinaciones de letras del alfabeto latino para representar números. Hoy los encuentras en todas partes: en las esferas de relojes de pared y de pulsera, en los créditos de películas y años de copyright (p. ej. MMXXVI), en el Super Bowl y los Juegos Olímpicos, en la numeración de capítulos y volúmenes de libros, en inscripciones arquitectónicas, y en los nombres de monarcas y papas. Saber leer los números romanos es una habilidad práctica usada en contextos formales, decorativos e históricos.',
          }[l]}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          {{
            en: 'The Roman numeral system was used throughout the Roman Empire for centuries, likely derived from Etruscan numerals that preceded Latin writing. After the fall of the Western Roman Empire, the system continued in use across medieval Europe for record-keeping, manuscripts, and monumental inscriptions. Arabic numerals gradually replaced Roman numerals for arithmetic from the 13th century onward, but Roman numerals remain firmly embedded in formal writing, art, and design to this day.',
            it: 'Il sistema dei numeri romani fu utilizzato per secoli nell\'Impero Romano, probabilmente derivato dai numerali etruschi che precedevano la scrittura latina. Dopo la caduta dell\'Impero Romano d\'Occidente, il sistema continuò ad essere usato nell\'Europa medievale per la contabilità, i manoscritti e le iscrizioni monumentali. I numeri arabi sostituirono gradualmente i numeri romani per l\'aritmetica a partire dal XIII secolo, ma i numeri romani rimangono saldamente radicati nella scrittura formale, nell\'arte e nel design fino ad oggi.',
            de: 'Das römische Zahlensystem wurde jahrhundertelang im gesamten Römischen Reich verwendet und leitet sich wahrscheinlich von etruskischen Zahlen ab, die der lateinischen Schrift vorausgingen. Nach dem Fall des Weströmischen Reiches blieb das System im mittelalterlichen Europa für die Buchführung, Manuskripte und monumentale Inschriften in Gebrauch. Arabische Ziffern verdrängten die römischen Zahlen ab dem 13. Jahrhundert allmählich in der Arithmetik, doch sind römische Zahlen bis heute fest in der formellen Schrift, Kunst und im Design verankert.',
            fr: 'Le système de numération romain a été utilisé pendant des siècles dans tout l\'Empire romain, probablement dérivé des chiffres étrusques qui précédaient l\'écriture latine. Après la chute de l\'Empire romain d\'Occident, le système a continué à être utilisé dans l\'Europe médiévale pour la comptabilité, les manuscrits et les inscriptions monumentales. Les chiffres arabes ont progressivement remplacé les chiffres romains pour l\'arithmétique à partir du XIIIe siècle, mais les chiffres romains restent fermement ancrés dans l\'écriture formelle, l\'art et le design jusqu\'à aujourd\'hui.',
            es: 'El sistema de numeración romano fue utilizado durante siglos en todo el Imperio Romano, probablemente derivado de los numerales etruscos que precedieron a la escritura latina. Tras la caída del Imperio Romano de Occidente, el sistema continuó en uso en la Europa medieval para la contabilidad, los manuscritos y las inscripciones monumentales. Los números arábigos reemplazaron gradualmente a los números romanos en la aritmética a partir del siglo XIII, pero los números romanos permanecen firmemente arraigados en la escritura formal, el arte y el diseño hasta hoy.',
          }[l]}
        </p>
      </section>

      {/* Key symbols */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t(l, 'quickReference')}</h2>
        <div className="flex flex-wrap gap-3">
          {keyNumbers.map(({ arabic, roman }) => (
            <div key={arabic} className="rounded-lg border px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-bold font-mono">{roman}</div>
              <div className="text-sm text-muted-foreground">{arabic}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The 7 symbols explained */}
      <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">
          {{
            en: 'The 7 Roman Numeral Symbols',
            it: 'I 7 Simboli dei Numeri Romani',
            de: 'Die 7 Symbole der römischen Zahlen',
            fr: 'Les 7 Symboles des Chiffres Romains',
            es: 'Los 7 Símbolos de los Números Romanos',
          }[l]}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          {{
            en: 'The entire Roman numeral system is built from just seven letters: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000). Every number from 1 to 3999 can be expressed as a combination of these seven symbols. The letters C, D, and M come from Latin words — C for "centum" (hundred), D for "dimidium" (half of a thousand), and M for "mille" (thousand). The origins of I, V, X, and L are debated, but they likely evolved from tally marks and earlier Etruscan signs.',
            it: 'L\'intero sistema dei numeri romani è costruito con soli sette lettere: I (1), V (5), X (10), L (50), C (100), D (500) e M (1000). Ogni numero da 1 a 3999 può essere espresso come una combinazione di questi sette simboli. Le lettere C, D e M provengono da parole latine — C per "centum" (cento), D per "dimidium" (metà di mille) e M per "mille" (mille). Le origini di I, V, X e L sono dibattute, ma probabilmente si sono evolute da tacche di conteggio e segni etruschi precedenti.',
            de: 'Das gesamte römische Zahlensystem besteht aus nur sieben Buchstaben: I (1), V (5), X (10), L (50), C (100), D (500) und M (1000). Jede Zahl von 1 bis 3999 lässt sich als Kombination dieser sieben Symbole ausdrücken. Die Buchstaben C, D und M stammen aus lateinischen Wörtern — C für „centum" (hundert), D für „dimidium" (halbtausend) und M für „mille" (tausend). Der Ursprung von I, V, X und L ist umstritten, aber sie entstanden wahrscheinlich aus Kerb-Strichzeichen und früheren etruskischen Zeichen.',
            fr: 'L\'ensemble du système de numération romain est construit à partir de seulement sept lettres : I (1), V (5), X (10), L (50), C (100), D (500) et M (1000). Chaque nombre de 1 à 3999 peut être exprimé comme une combinaison de ces sept symboles. Les lettres C, D et M viennent de mots latins — C pour « centum » (cent), D pour « dimidium » (demi-mille) et M pour « mille » (mille). Les origines de I, V, X et L sont débattues, mais ils ont probablement évolué à partir de marques de décompte et de signes étrusques antérieurs.',
            es: 'Todo el sistema de numeración romana está construido con solo siete letras: I (1), V (5), X (10), L (50), C (100), D (500) y M (1000). Cada número del 1 al 3999 puede expresarse como una combinación de estos siete símbolos. Las letras C, D y M provienen de palabras latinas — C de "centum" (cien), D de "dimidium" (medio millar) y M de "mille" (mil). Los orígenes de I, V, X y L son debatidos, pero probablemente evolucionaron a partir de marcas de conteo y signos etruscos anteriores.',
          }[l]}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          {{
            en: 'A popular mnemonic to remember the seven symbols in order is: "I Value eXtra Large Cows Drinking Milk" — one letter per word: I, V, X, L, C, D, M. Another common trick is to memorize the values in pairs: I and V (1 and 5), X and L (10 and 50), C and D (100 and 500), and M alone (1000).',
            it: 'Un popolare metodo mnemonico per ricordare i sette simboli in ordine è: "I Versi eXtra Lunghi Creano Difficoltà Mentali" — una lettera per parola: I, V, X, L, C, D, M. Un altro trucco comune è memorizzare i valori a coppie: I e V (1 e 5), X e L (10 e 50), C e D (100 e 500), e M da solo (1000).',
            de: 'Eine beliebte Eselsbrücke, um die sieben Symbole der Reihe nach zu merken, lautet: „Ich Vergesse Xylofone, Leider Can\'t Damit Musizieren" — ein Buchstabe pro Wort: I, V, X, L, C, D, M. Ein weiterer verbreiteter Trick ist das paarweise Merken der Werte: I und V (1 und 5), X und L (10 und 50), C und D (100 und 500) sowie M allein (1000).',
            fr: 'Un moyen mnémotechnique populaire pour retenir les sept symboles dans l\'ordre est : « I Veux eXtra Large Crêpes Délicieusement Moelleuses » — une lettre par mot : I, V, X, L, C, D, M. Une autre astuce courante consiste à mémoriser les valeurs par paires : I et V (1 et 5), X et L (10 et 50), C et D (100 et 500), et M seul (1000).',
            es: 'Un popular recurso mnemotécnico para recordar los siete símbolos en orden es: "I Valoro eXtra Largos Caminos Difíciles Montando" — una letra por palabra: I, V, X, L, C, D, M. Otro truco común es memorizar los valores en pares: I y V (1 y 5), X y L (10 y 50), C y D (100 y 500), y M sola (1000).',
          }[l]}
        </p>
      </section>

      {/* Tables by range */}
      {ranges.map(range => {
        const data = generateRomanNumeralTable(range.from, range.to)
        return (
          <section key={range.label} className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              {t(l, 'romanNumerals')} {range.label}
            </h2>
            <div className="overflow-x-auto rounded-lg border">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-sm">
                {data.map(({ arabic, roman }) => (
                  <div key={arabic} className="flex justify-between px-3 py-1.5 border-b border-r">
                    <span className="text-muted-foreground">{arabic}</span>
                    <span className="font-mono font-semibold">{roman}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Rules for writing Roman numerals */}
      <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">
          {{
            en: 'Rules for Writing Roman Numerals',
            it: 'Regole per Scrivere i Numeri Romani',
            de: 'Regeln zum Schreiben römischer Zahlen',
            fr: 'Règles d\'Écriture des Chiffres Romains',
            es: 'Reglas para Escribir Números Romanos',
          }[l]}
        </h2>

        {/* Rule 1: Additive */}
        <h3 className="text-lg font-semibold mb-2">
          {{
            en: '1. Additive Notation',
            it: '1. Notazione Additiva',
            de: '1. Additive Schreibweise',
            fr: '1. Notation Additive',
            es: '1. Notación Aditiva',
          }[l]}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          {{
            en: 'When symbols are written from left to right in descending order of value, you simply add them together. For example: VI = 5 + 1 = 6, VIII = 5 + 1 + 1 + 1 = 8, and XV = 10 + 5 = 15. This additive principle is the foundation of the system and covers the majority of numbers.',
            it: 'Quando i simboli sono scritti da sinistra a destra in ordine decrescente di valore, si sommano semplicemente. Ad esempio: VI = 5 + 1 = 6, VIII = 5 + 1 + 1 + 1 = 8, e XV = 10 + 5 = 15. Questo principio additivo è la base del sistema e copre la maggior parte dei numeri.',
            de: 'Wenn Symbole von links nach rechts in absteigender Wertfolge geschrieben werden, werden sie einfach addiert. Zum Beispiel: VI = 5 + 1 = 6, VIII = 5 + 1 + 1 + 1 = 8 und XV = 10 + 5 = 15. Dieses additive Prinzip ist das Fundament des Systems und deckt die Mehrzahl der Zahlen ab.',
            fr: 'Lorsque les symboles sont écrits de gauche à droite par ordre décroissant de valeur, on les additionne simplement. Par exemple : VI = 5 + 1 = 6, VIII = 5 + 1 + 1 + 1 = 8, et XV = 10 + 5 = 15. Ce principe additif est le fondement du système et couvre la majorité des nombres.',
            es: 'Cuando los símbolos se escriben de izquierda a derecha en orden decreciente de valor, simplemente se suman. Por ejemplo: VI = 5 + 1 = 6, VIII = 5 + 1 + 1 + 1 = 8, y XV = 10 + 5 = 15. Este principio aditivo es la base del sistema y cubre la mayoría de los números.',
          }[l]}
        </p>

        {/* Rule 2: Subtractive */}
        <h3 className="text-lg font-semibold mb-2">
          {{
            en: '2. Subtractive Notation',
            it: '2. Notazione Sottrattiva',
            de: '2. Subtraktive Schreibweise',
            fr: '2. Notation Soustractive',
            es: '2. Notación Sustractiva',
          }[l]}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          {{
            en: 'When a symbol of smaller value appears immediately before a symbol of larger value, the smaller is subtracted from the larger. Only six subtractive combinations are valid: IV (4), IX (9), XL (40), XC (90), CD (400), and CM (900). For example, IX = 10 − 1 = 9, and XL = 50 − 10 = 40. No other subtractive combinations are permitted by standard convention.',
            it: 'Quando un simbolo di valore minore appare immediatamente prima di un simbolo di valore maggiore, il minore viene sottratto dal maggiore. Solo sei combinazioni sottrattive sono valide: IV (4), IX (9), XL (40), XC (90), CD (400) e CM (900). Ad esempio, IX = 10 − 1 = 9, e XL = 50 − 10 = 40. Nessun\'altra combinazione sottrattiva è consentita dalla convenzione standard.',
            de: 'Steht ein Symbol mit kleinerem Wert unmittelbar vor einem Symbol mit größerem Wert, wird der kleinere vom größeren subtrahiert. Nur sechs subtraktive Kombinationen sind gültig: IV (4), IX (9), XL (40), XC (90), CD (400) und CM (900). Zum Beispiel: IX = 10 − 1 = 9 und XL = 50 − 10 = 40. Keine anderen subtraktiven Kombinationen sind nach der Standardkonvention erlaubt.',
            fr: 'Lorsqu\'un symbole de valeur inférieure apparaît immédiatement avant un symbole de valeur supérieure, le plus petit est soustrait du plus grand. Seules six combinaisons soustractives sont valides : IV (4), IX (9), XL (40), XC (90), CD (400) et CM (900). Par exemple, IX = 10 − 1 = 9, et XL = 50 − 10 = 40. Aucune autre combinaison soustractive n\'est autorisée par la convention standard.',
            es: 'Cuando un símbolo de menor valor aparece inmediatamente antes de un símbolo de mayor valor, el menor se resta del mayor. Solo seis combinaciones sustractivas son válidas: IV (4), IX (9), XL (40), XC (90), CD (400) y CM (900). Por ejemplo, IX = 10 − 1 = 9, y XL = 50 − 10 = 40. Ninguna otra combinación sustractiva está permitida por la convención estándar.',
          }[l]}
        </p>

        {/* Rule 3: Repetition */}
        <h3 className="text-lg font-semibold mb-2">
          {{
            en: '3. Repetition Rule',
            it: '3. Regola della Ripetizione',
            de: '3. Wiederholungsregel',
            fr: '3. Règle de Répétition',
            es: '3. Regla de Repetición',
          }[l]}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          {{
            en: 'The symbols I, X, C, and M can each be repeated up to three times consecutively (e.g. III = 3, XXX = 30, CCC = 300, MMM = 3000). The symbols V, L, and D can never be repeated — you write X instead of VV, C instead of LL, and M instead of DD. Exceeding three repetitions is not valid; use subtractive notation instead (e.g. write IV for 4, not IIII).',
            it: 'I simboli I, X, C e M possono essere ripetuti ciascuno fino a tre volte consecutive (es. III = 3, XXX = 30, CCC = 300, MMM = 3000). I simboli V, L e D non possono mai essere ripetuti — si scrive X invece di VV, C invece di LL e M invece di DD. Superare tre ripetizioni non è valido; usa invece la notazione sottrattiva (es. scrivi IV per 4, non IIII).',
            de: 'Die Symbole I, X, C und M können jeweils bis zu dreimal hintereinander wiederholt werden (z. B. III = 3, XXX = 30, CCC = 300, MMM = 3000). Die Symbole V, L und D dürfen nie wiederholt werden — man schreibt X statt VV, C statt LL und M statt DD. Mehr als drei Wiederholungen sind ungültig; verwende stattdessen die subtraktive Schreibweise (z. B. IV für 4, nicht IIII).',
            fr: 'Les symboles I, X, C et M peuvent chacun être répétés jusqu\'à trois fois consécutivement (ex. III = 3, XXX = 30, CCC = 300, MMM = 3000). Les symboles V, L et D ne peuvent jamais être répétés — on écrit X au lieu de VV, C au lieu de LL et M au lieu de DD. Dépasser trois répétitions n\'est pas valide ; utilisez plutôt la notation soustractive (ex. écrire IV pour 4, et non IIII).',
            es: 'Los símbolos I, X, C y M pueden repetirse cada uno hasta tres veces consecutivas (p. ej. III = 3, XXX = 30, CCC = 300, MMM = 3000). Los símbolos V, L y D nunca pueden repetirse — se escribe X en lugar de VV, C en lugar de LL y M en lugar de DD. Superar tres repeticiones no es válido; usa en su lugar la notación sustractiva (p. ej. escribe IV para 4, no IIII).',
          }[l]}
        </p>

        {/* Rule 4: Maximum value */}
        <h3 className="text-lg font-semibold mb-2">
          {{
            en: '4. Maximum Value: 3999',
            it: '4. Valore Massimo: 3999',
            de: '4. Maximalwert: 3999',
            fr: '4. Valeur Maximale : 3999',
            es: '4. Valor Máximo: 3999',
          }[l]}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-6">
          {{
            en: 'Because M can only be repeated three times (MMM = 3000) and the largest subtractive combination for thousands is CM (900), the maximum standard Roman numeral is 3999, written as MMMCMXCIX. Ancient Romans used various extension systems for larger numbers (such as a bar over a numeral to multiply by 1000), but these are outside the standard system used today.',
            it: 'Poiché M può essere ripetuta solo tre volte (MMM = 3000) e la più grande combinazione sottrattiva per le migliaia è CM (900), il numero romano standard massimo è 3999, scritto come MMMCMXCIX. Gli antichi Romani usavano vari sistemi di estensione per numeri più grandi (come una barra sopra un numero per moltiplicare per 1000), ma questi sono al di fuori del sistema standard usato oggi.',
            de: 'Da M nur dreimal wiederholt werden kann (MMM = 3000) und die größte subtraktive Kombination für Tausender CM (900) ist, ist der maximale Standard-Römer 3999, geschrieben als MMMCMXCIX. Die alten Römer verwendeten verschiedene Erweiterungssysteme für größere Zahlen (z. B. einen Strich über einer Zahl zur Multiplikation mit 1000), aber diese liegen außerhalb des heute verwendeten Standardsystems.',
            fr: 'Étant donné que M ne peut être répété que trois fois (MMM = 3000) et que la plus grande combinaison soustractive pour les milliers est CM (900), le chiffre romain standard maximum est 3999, écrit MMMCMXCIX. Les Romains de l\'Antiquité utilisaient divers systèmes d\'extension pour les grands nombres (comme une barre au-dessus d\'un chiffre pour multiplier par 1000), mais ceux-ci sortent du cadre du système standard utilisé aujourd\'hui.',
            es: 'Dado que M solo puede repetirse tres veces (MMM = 3000) y la combinación sustractiva más grande para los miles es CM (900), el número romano estándar máximo es 3999, escrito como MMMCMXCIX. Los romanos antiguos usaban varios sistemas de extensión para números más grandes (como una barra sobre un numeral para multiplicar por 1000), pero estos están fuera del sistema estándar utilizado hoy.',
          }[l]}
        </p>
      </section>

      {/* Common Roman numerals every day */}
      <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">
          {{
            en: 'Common Roman Numerals You See Every Day',
            it: 'Numeri Romani Comuni che Vedi Ogni Giorno',
            de: 'Häufige römische Zahlen im Alltag',
            fr: 'Chiffres Romains Courants que Vous Voyez Chaque Jour',
            es: 'Números Romanos Comunes que Ves Cada Día',
          }[l]}
        </h2>
        <ul className="space-y-3 text-base leading-relaxed text-muted-foreground list-none pl-0">
          <li>
            <strong>
              {{
                en: 'Film and book years:',
                it: 'Anni nei film e nei libri:',
                de: 'Jahresangaben in Filmen und Büchern:',
                fr: 'Années dans les films et les livres :',
                es: 'Años en películas y libros:',
              }[l]}
            </strong>{' '}
            {{
              en: 'Copyright years in film credits are often written in Roman numerals to make them harder to read at a glance — for example MMXXVI = 2026, MMXXIV = 2024. Book publication years and edition numbers follow the same convention.',
              it: 'Gli anni di copyright nei titoli di coda dei film sono spesso scritti in numeri romani per renderli più difficili da leggere a colpo d\'occhio — ad esempio MMXXVI = 2026, MMXXIV = 2024. Gli anni di pubblicazione dei libri e i numeri di edizione seguono la stessa convenzione.',
              de: 'Copyright-Jahresangaben in Filmabspännen werden oft in römischen Zahlen geschrieben, um sie auf den ersten Blick schwerer lesbar zu machen — zum Beispiel MMXXVI = 2026, MMXXIV = 2024. Erscheinungsjahre von Büchern und Auflagennummern folgen derselben Konvention.',
              fr: 'Les années de copyright dans les génériques de films sont souvent écrites en chiffres romains pour les rendre plus difficiles à lire au premier coup d\'œil — par exemple MMXXVI = 2026, MMXXIV = 2024. Les années de publication des livres et les numéros d\'édition suivent la même convention.',
              es: 'Los años de copyright en los créditos de películas se escriben a menudo en números romanos para hacerlos más difíciles de leer de un vistazo — por ejemplo MMXXVI = 2026, MMXXIV = 2024. Los años de publicación de libros y los números de edición siguen la misma convención.',
            }[l]}
          </li>
          <li>
            <strong>
              {{
                en: 'Super Bowl and Olympics:',
                it: 'Super Bowl e Olimpiadi:',
                de: 'Super Bowl und Olympische Spiele:',
                fr: 'Super Bowl et Jeux Olympiques :',
                es: 'Super Bowl y Juegos Olímpicos:',
              }[l]}
            </strong>{' '}
            {{
              en: 'The Super Bowl has used Roman numerals since Super Bowl V (1971). The 2025 game was Super Bowl LIX. The Olympic Games number their editions in Roman numerals — the Paris 2024 Summer Games were the Games of the XXXIII Olympiad.',
              it: 'Il Super Bowl usa i numeri romani dal Super Bowl V (1971). La partita del 2025 è stata il Super Bowl LIX. I Giochi Olimpici numerano le loro edizioni in numeri romani — i Giochi Estivi di Parigi 2024 sono stati i Giochi della XXXIII Olimpiade.',
              de: 'Der Super Bowl verwendet seit Super Bowl V (1971) römische Zahlen. Das Spiel 2025 war Super Bowl LIX. Die Olympischen Spiele nummerieren ihre Ausgaben in römischen Zahlen — die Pariser Sommerspiele 2024 waren die Spiele der XXXIII. Olympiade.',
              fr: 'Le Super Bowl utilise des chiffres romains depuis le Super Bowl V (1971). Le match 2025 était le Super Bowl LIX. Les Jeux Olympiques numérotent leurs éditions en chiffres romains — les Jeux d\'été de Paris 2024 étaient les Jeux de la XXXIIIe Olympiade.',
              es: 'El Super Bowl ha utilizado números romanos desde el Super Bowl V (1971). El partido de 2025 fue el Super Bowl LIX. Los Juegos Olímpicos numeran sus ediciones en números romanos — los Juegos de Verano de París 2024 fueron los Juegos de la XXXIII Olimpiada.',
            }[l]}
          </li>
          <li>
            <strong>
              {{
                en: 'Chapters and volumes:',
                it: 'Capitoli e volumi:',
                de: 'Kapitel und Bände:',
                fr: 'Chapitres et volumes :',
                es: 'Capítulos y volúmenes:',
              }[l]}
            </strong>{' '}
            {{
              en: 'Academic works, encyclopedias, and literary classics number their chapters, volumes, and parts in Roman numerals (e.g. Volume II, Chapter IV, Part III). Preface pages in books use lowercase Roman numerals (i, ii, iii, iv...).',
              it: 'Opere accademiche, enciclopedie e classici letterari numerano i loro capitoli, volumi e parti in numeri romani (es. Volume II, Capitolo IV, Parte III). Le pagine della prefazione nei libri usano numeri romani minuscoli (i, ii, iii, iv...).',
              de: 'Akademische Werke, Enzyklopädien und literarische Klassiker nummerieren ihre Kapitel, Bände und Teile mit römischen Zahlen (z. B. Band II, Kapitel IV, Teil III). Vorwortseiten in Büchern verwenden Kleinbuchstaben-Römerzahlen (i, ii, iii, iv...).',
              fr: 'Les œuvres académiques, les encyclopédies et les classiques littéraires numérotent leurs chapitres, volumes et parties en chiffres romains (ex. Volume II, Chapitre IV, Partie III). Les pages de préface des livres utilisent des chiffres romains minuscules (i, ii, iii, iv...).',
              es: 'Las obras académicas, las enciclopedias y los clásicos literarios numeran sus capítulos, volúmenes y partes en números romanos (p. ej. Volumen II, Capítulo IV, Parte III). Las páginas del prefacio en los libros usan números romanos en minúsculas (i, ii, iii, iv...).',
            }[l]}
          </li>
          <li>
            <strong>
              {{
                en: 'Analog clocks:',
                it: 'Orologi analogici:',
                de: 'Analoge Uhren:',
                fr: 'Horloges analogiques :',
                es: 'Relojes analógicos:',
              }[l]}
            </strong>{' '}
            {{
              en: 'Many clock faces display hours in Roman numerals. Interestingly, most clocks use IIII for 4 rather than the correct IV — this is a centuries-old tradition thought to improve visual balance on the dial, since IIII mirrors the VIII on the opposite side.',
              it: 'Molti quadranti di orologi mostrano le ore in numeri romani. È interessante notare che la maggior parte degli orologi usa IIII per 4 anziché il corretto IV — questa è una tradizione secolare che si ritiene migliori l\'equilibrio visivo del quadrante, poiché IIII rispecchia l\'VIII sul lato opposto.',
              de: 'Viele Zifferblätter zeigen die Stunden in römischen Zahlen an. Interessanterweise verwenden die meisten Uhren IIII für 4 statt des korrekten IV — dies ist eine jahrhundertealte Tradition, die das visuelle Gleichgewicht des Zifferblatts verbessern soll, da IIII die VIII auf der gegenüberliegenden Seite spiegelt.',
              fr: 'De nombreux cadrans affichent les heures en chiffres romains. Il est intéressant de noter que la plupart des horloges utilisent IIII pour 4 plutôt que le correct IV — c\'est une tradition vieille de plusieurs siècles censée améliorer l\'équilibre visuel du cadran, car IIII est le miroir du VIII sur le côté opposé.',
              es: 'Muchas esferas de relojes muestran las horas en números romanos. Curiosamente, la mayoría de los relojes usan IIII para el 4 en lugar del correcto IV — esta es una tradición de varios siglos que se cree mejora el equilibrio visual del cuadrante, ya que IIII refleja el VIII en el lado opuesto.',
            }[l]}
          </li>
          <li>
            <strong>
              {{
                en: 'Kings, popes, and historical names:',
                it: 'Re, papi e nomi storici:',
                de: 'Könige, Päpste und historische Namen:',
                fr: 'Rois, papes et noms historiques :',
                es: 'Reyes, papas y nombres históricos:',
              }[l]}
            </strong>{' '}
            {{
              en: 'Monarchs and popes who share a name are distinguished by ordinal Roman numerals: Henry VIII, Elizabeth II, Pope John Paul II, Pope Francis I. This convention is also used for ships (e.g. Queen Elizabeth II) and sporting events.',
              it: 'I monarchi e i papi che condividono un nome sono distinti da numeri romani ordinali: Enrico VIII, Elisabetta II, Papa Giovanni Paolo II, Papa Francesco I. Questa convenzione è usata anche per le navi (es. Queen Elizabeth II) e gli eventi sportivi.',
              de: 'Monarchen und Päpste, die einen Namen teilen, werden durch ordinale römische Zahlen unterschieden: Heinrich VIII., Elisabeth II., Papst Johannes Paul II., Papst Franziskus I. Diese Konvention wird auch für Schiffe (z. B. Queen Elizabeth II) und Sportveranstaltungen verwendet.',
              fr: 'Les monarques et les papes qui partagent un nom sont distingués par des chiffres romains ordinaux : Henri VIII, Élisabeth II, Pape Jean-Paul II, Pape François I. Cette convention est également utilisée pour les navires (ex. Queen Elizabeth II) et les événements sportifs.',
              es: 'Los monarcas y papas que comparten nombre se distinguen por números romanos ordinales: Enrique VIII, Isabel II, Papa Juan Pablo II, Papa Francisco I. Esta convención también se usa para barcos (p. ej. Queen Elizabeth II) y eventos deportivos.',
            }[l]}
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-6">
          {{
            en: 'Frequently Asked Questions',
            it: 'Domande Frequenti',
            de: 'Häufig gestellte Fragen',
            fr: 'Questions Fréquemment Posées',
            es: 'Preguntas Frecuentes',
          }[l]}
        </h2>

        <div className="space-y-6">
          {/* Q1 */}
          <div>
            <h3 className="text-base font-semibold mb-1">
              {{
                en: 'What is the Roman numeral for 2026?',
                it: 'Qual è il numero romano per il 2026?',
                de: 'Was ist die römische Zahl für 2026?',
                fr: 'Quel est le chiffre romain pour 2026 ?',
                es: '¿Cuál es el número romano para 2026?',
              }[l]}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {{
                en: '2026 in Roman numerals is MMXXVI. It breaks down as: MM = 2000, XX = 20, VI = 6. So MM (2000) + XX (20) + VI (6) = MMXXVI.',
                it: '2026 in numeri romani è MMXXVI. Si scompone come: MM = 2000, XX = 20, VI = 6. Quindi MM (2000) + XX (20) + VI (6) = MMXXVI.',
                de: '2026 in römischen Zahlen ist MMXXVI. Es setzt sich zusammen aus: MM = 2000, XX = 20, VI = 6. Also MM (2000) + XX (20) + VI (6) = MMXXVI.',
                fr: '2026 en chiffres romains est MMXXVI. Il se décompose ainsi : MM = 2000, XX = 20, VI = 6. Donc MM (2000) + XX (20) + VI (6) = MMXXVI.',
                es: '2026 en números romanos es MMXXVI. Se descompone como: MM = 2000, XX = 20, VI = 6. Entonces MM (2000) + XX (20) + VI (6) = MMXXVI.',
              }[l]}
            </p>
          </div>

          {/* Q2 */}
          <div>
            <h3 className="text-base font-semibold mb-1">
              {{
                en: 'What is the largest Roman numeral?',
                it: 'Qual è il numero romano più grande?',
                de: 'Was ist die größte römische Zahl?',
                fr: 'Quel est le plus grand chiffre romain ?',
                es: '¿Cuál es el número romano más grande?',
              }[l]}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {{
                en: 'The largest standard Roman numeral is 3999, written as MMMCMXCIX. This is the maximum because M can only be repeated three times (MMM = 3000), and the next step would require a fourth M. The remaining 999 is written as CMXCIX (CM = 900, XC = 90, IX = 9).',
                it: 'Il numero romano standard più grande è 3999, scritto come MMMCMXCIX. Questo è il massimo perché M può essere ripetuta solo tre volte (MMM = 3000), e il passo successivo richiederebbe una quarta M. I restanti 999 si scrivono come CMXCIX (CM = 900, XC = 90, IX = 9).',
                de: 'Die größte Standard-Römer-Zahl ist 3999, geschrieben als MMMCMXCIX. Dies ist das Maximum, weil M nur dreimal wiederholt werden kann (MMM = 3000) und der nächste Schritt ein viertes M erfordern würde. Die verbleibenden 999 werden als CMXCIX geschrieben (CM = 900, XC = 90, IX = 9).',
                fr: 'Le plus grand chiffre romain standard est 3999, écrit MMMCMXCIX. C\'est le maximum car M ne peut être répété que trois fois (MMM = 3000), et l\'étape suivante nécessiterait un quatrième M. Les 999 restants s\'écrivent CMXCIX (CM = 900, XC = 90, IX = 9).',
                es: 'El número romano estándar más grande es 3999, escrito como MMMCMXCIX. Este es el máximo porque M solo puede repetirse tres veces (MMM = 3000), y el siguiente paso requeriría una cuarta M. Los 999 restantes se escriben como CMXCIX (CM = 900, XC = 90, IX = 9).',
              }[l]}
            </p>
          </div>

          {/* Q3 */}
          <div>
            <h3 className="text-base font-semibold mb-1">
              {{
                en: 'Why do clocks use IIII instead of IV?',
                it: 'Perché gli orologi usano IIII invece di IV?',
                de: 'Warum verwenden Uhren IIII statt IV?',
                fr: 'Pourquoi les horloges utilisent-elles IIII au lieu de IV ?',
                es: '¿Por qué los relojes usan IIII en lugar de IV?',
              }[l]}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {{
                en: 'The use of IIII on clock faces is a historical convention, not a grammatical rule. Several explanations exist: IIII creates visual symmetry with VIII on the opposite side of the dial; it was supposedly preferred by King Charles V of France; and type-setters found IIII easier to cast in metal. Whatever the origin, the tradition has persisted for centuries and is considered correct in horology.',
                it: 'L\'uso di IIII sui quadranti degli orologi è una convenzione storica, non una regola grammaticale. Esistono diverse spiegazioni: IIII crea simmetria visiva con VIII sul lato opposto del quadrante; era presumibilmente preferito dal re Carlo V di Francia; e i tipografi trovavano IIII più facile da colare nel metallo. Qualunque sia l\'origine, la tradizione è persistita per secoli ed è considerata corretta in orologeria.',
                de: 'Die Verwendung von IIII auf Zifferblättern ist eine historische Konvention, keine grammatikalische Regel. Es gibt mehrere Erklärungen: IIII erzeugt visuelle Symmetrie mit VIII auf der gegenüberliegenden Seite des Zifferblatts; es wurde angeblich von König Karl V. von Frankreich bevorzugt; und Schriftsetzer fanden IIII leichter in Metall zu gießen. Was auch immer der Ursprung ist, die Tradition hat sich über Jahrhunderte gehalten und gilt in der Uhrmacherei als korrekt.',
                fr: 'L\'utilisation de IIII sur les cadrans d\'horloge est une convention historique, pas une règle grammaticale. Plusieurs explications existent : IIII crée une symétrie visuelle avec VIII sur le côté opposé du cadran ; il était supposément préféré par le roi Charles V de France ; et les typographes trouvaient IIII plus facile à couler dans le métal. Quelle qu\'en soit l\'origine, la tradition a persisté pendant des siècles et est considérée comme correcte en horlogerie.',
                es: 'El uso de IIII en las esferas de los relojes es una convención histórica, no una regla gramatical. Existen varias explicaciones: IIII crea simetría visual con VIII en el lado opuesto del cuadrante; supuestamente era preferido por el rey Carlos V de Francia; y los tipógrafos encontraban IIII más fácil de fundir en metal. Sea cual sea el origen, la tradición ha persistido durante siglos y se considera correcta en relojería.',
              }[l]}
            </p>
          </div>

          {/* Q4 */}
          <div>
            <h3 className="text-base font-semibold mb-1">
              {{
                en: 'How do you write 0 in Roman numerals?',
                it: 'Come si scrive 0 in numeri romani?',
                de: 'Wie schreibt man 0 in römischen Zahlen?',
                fr: 'Comment écrit-on 0 en chiffres romains ?',
                es: '¿Cómo se escribe 0 en números romanos?',
              }[l]}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {{
                en: 'There is no Roman numeral for zero. The concept of zero as a number did not exist in ancient Rome — the Roman numeral system was designed purely for counting and recording quantities, not for mathematical calculation. When Romans needed to express the concept of nothing, they used the Latin word "nulla" (meaning "none"). The absence of zero is one reason why Roman numerals were eventually replaced by the Hindu-Arabic numeral system for mathematics.',
                it: 'Non esiste un numero romano per lo zero. Il concetto di zero come numero non esisteva nell\'antica Roma — il sistema dei numeri romani era progettato esclusivamente per contare e registrare quantità, non per il calcolo matematico. Quando i Romani avevano bisogno di esprimere il concetto di niente, usavano la parola latina "nulla" (che significa "nessuno"). L\'assenza dello zero è uno dei motivi per cui i numeri romani furono alla fine sostituiti dal sistema numerico indo-arabico per la matematica.',
                de: 'Es gibt keine römische Zahl für null. Das Konzept der Null als Zahl existierte im alten Rom nicht — das römische Zahlensystem war rein für das Zählen und Aufzeichnen von Mengen konzipiert, nicht für mathematische Berechnungen. Wenn Römer das Konzept von nichts ausdrücken mussten, verwendeten sie das lateinische Wort „nulla" (was „keiner/keine/keines" bedeutet). Das Fehlen der Null ist einer der Gründe, warum römische Zahlen schließlich durch das Hindu-Arabische Zahlensystem für die Mathematik ersetzt wurden.',
                fr: 'Il n\'existe pas de chiffre romain pour zéro. Le concept de zéro en tant que nombre n\'existait pas dans la Rome antique — le système de numération romain était conçu uniquement pour compter et enregistrer des quantités, et non pour le calcul mathématique. Lorsque les Romains avaient besoin d\'exprimer le concept de rien, ils utilisaient le mot latin « nulla » (signifiant « aucun »). L\'absence de zéro est l\'une des raisons pour lesquelles les chiffres romains ont finalement été remplacés par le système de numération hindou-arabe pour les mathématiques.',
                es: 'No existe un número romano para el cero. El concepto de cero como número no existía en la antigua Roma — el sistema de numeración romano fue diseñado puramente para contar y registrar cantidades, no para el cálculo matemático. Cuando los romanos necesitaban expresar el concepto de nada, usaban la palabra latina "nulla" (que significa "ninguno"). La ausencia del cero es una de las razones por las que los números romanos fueron eventualmente reemplazados por el sistema de numeración hindú-arábigo para las matemáticas.',
              }[l]}
            </p>
          </div>

          {/* Q5 */}
          <div>
            <h3 className="text-base font-semibold mb-1">
              {{
                en: 'What Roman numeral is Super Bowl 2025?',
                it: 'Quale numero romano è il Super Bowl 2025?',
                de: 'Welche römische Zahl ist der Super Bowl 2025?',
                fr: 'Quel chiffre romain est le Super Bowl 2025 ?',
                es: '¿Qué número romano es el Super Bowl 2025?',
              }[l]}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {{
                en: 'Super Bowl 2025 is Super Bowl LIX. LIX = L (50) + IX (9) = 59. The game was the 59th Super Bowl, played on February 9, 2025. The NFL has used Roman numerals for Super Bowl numbering since the fifth game (Super Bowl V, 1971), making it one of the most recognizable uses of Roman numerals in contemporary popular culture.',
                it: 'Il Super Bowl 2025 è il Super Bowl LIX. LIX = L (50) + IX (9) = 59. La partita è stata il 59° Super Bowl, giocata il 9 febbraio 2025. La NFL usa i numeri romani per la numerazione del Super Bowl dal quinto gioco (Super Bowl V, 1971), rendendolo uno degli usi più riconoscibili dei numeri romani nella cultura popolare contemporanea.',
                de: 'Der Super Bowl 2025 ist Super Bowl LIX. LIX = L (50) + IX (9) = 59. Das Spiel war der 59. Super Bowl, gespielt am 9. Februar 2025. Die NFL verwendet seit dem fünften Spiel (Super Bowl V, 1971) römische Zahlen für die Super Bowl-Nummerierung, was es zu einer der bekanntesten Verwendungen römischer Zahlen in der zeitgenössischen Populärkultur macht.',
                fr: 'Le Super Bowl 2025 est le Super Bowl LIX. LIX = L (50) + IX (9) = 59. Le match était le 59e Super Bowl, joué le 9 février 2025. La NFL utilise des chiffres romains pour la numérotation du Super Bowl depuis le cinquième match (Super Bowl V, 1971), ce qui en fait l\'une des utilisations les plus reconnaissables des chiffres romains dans la culture populaire contemporaine.',
                es: 'El Super Bowl 2025 es el Super Bowl LIX. LIX = L (50) + IX (9) = 59. El partido fue el 59° Super Bowl, jugado el 9 de febrero de 2025. La NFL ha utilizado números romanos para la numeración del Super Bowl desde el quinto partido (Super Bowl V, 1971), convirtiéndolo en uno de los usos más reconocibles de los números romanos en la cultura popular contemporánea.',
              }[l]}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

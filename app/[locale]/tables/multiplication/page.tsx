import Link from 'next/link'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/i18n'
import { generateMultiplicationTable } from '@/lib/tables/math'

const SINGLE_NUMBERS = Array.from({ length: 12 }, (_, i) => i + 1)

const timesTableLabel: Record<Locale, (n: number) => string> = {
  en: n => `${n} Times Table`,
  it: n => `Tabellina del ${n}`,
  de: n => `${n}er Einmaleins`,
  fr: n => `Table de ${n}`,
  es: n => `Tabla del ${n}`,
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = locale as Locale
  return {
    title: t(l, 'multiplicationTable'),
    description: {
      en: 'Complete multiplication table from 1 to 12. Printable times table chart.',
      it: 'Tavola pitagorica completa da 1 a 12. Tabella di moltiplicazione stampabile.',
      de: 'Vollständiges Einmaleins von 1 bis 12. Druckbare Multiplikationstabelle.',
      fr: 'Table de multiplication complète de 1 à 12. Tableau imprimable.',
      es: 'Tabla de multiplicar completa del 1 al 12. Tabla imprimible.',
    }[l],
  }
}

export default async function MultiplicationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const table = generateMultiplicationTable(12)
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t(l, 'multiplicationTable')}</h1>

      {/* ── Intro editorial section ── */}
      <section className="mb-8 space-y-4 text-zinc-600 leading-relaxed">
        <p>
          {{
            en: 'The multiplication table — also called the times table or Pythagorean table — is a grid that displays the products of two numbers arranged in rows and columns. Each row represents a multiplier, each column a multiplicand, and the number at their intersection is the result of that multiplication. Reading the 12×12 chart is straightforward: locate the row of the first number and the column of the second number, then find their intersection. Whether you are helping a child with homework, checking mental arithmetic, or brushing up on your own math skills, a complete times table from 1 to 12 is one of the most useful reference tools in everyday life and at school.',
            it: 'La tavola pitagorica — chiamata anche tabella delle moltiplicazioni o semplicemente "tabelline" — è una griglia che mostra i prodotti tra due numeri disposti in righe e colonne. Ogni riga corrisponde a un fattore, ogni colonna all\'altro, e il numero all\'incrocio è il risultato della moltiplicazione. Leggere la tavola 12×12 è semplice: si individua la riga del primo numero e la colonna del secondo, e il loro incrocio dà il prodotto. La tavola pitagorica è uno strumento fondamentale per la scuola primaria e secondaria, ma resta utilissima nella vita di tutti i giorni: dal calcolo del costo di più articoli identici alla stima di superfici e aree.',
            de: 'Das Einmaleins — auch Multiplikationstabelle oder Pythagoräische Tafel genannt — ist eine Tabelle, die die Produkte zweier Zahlen in Zeilen und Spalten darstellt. Jede Zeile steht für einen Multiplikator, jede Spalte für einen Multiplikanden; die Zahl an ihrem Schnittpunkt ist das Ergebnis der Multiplikation. Das 12×12-Einmaleins lässt sich einfach ablesen: Man sucht die Zeile der ersten Zahl und die Spalte der zweiten Zahl und findet das Produkt an ihrem Schnittpunkt. Das vollständige Einmaleins von 1 bis 12 ist ein unverzichtbares Werkzeug in der Schule und im Alltag — vom schnellen Kopfrechnen im Supermarkt bis zur Geometrie im Mathematikunterricht.',
            fr: 'La table de multiplication — appelée aussi table de Pythagore ou tableau de multiplication — est une grille qui affiche les produits de deux nombres organisés en lignes et en colonnes. Chaque ligne représente un multiplicateur, chaque colonne un multiplicande, et le nombre à leur intersection est le résultat de la multiplication. Lire le tableau 12×12 est simple : repérez la ligne du premier nombre et la colonne du second, puis trouvez leur intersection. Qu\'il s\'agisse d\'aider un enfant à faire ses devoirs, de vérifier un calcul mental ou de réviser ses bases en mathématiques, une table de multiplication complète de 1 à 12 est l\'un des outils de référence les plus utiles au quotidien et à l\'école.',
            es: 'La tabla de multiplicar — también llamada tabla de Pitágoras o tabla de multiplicación — es una cuadrícula que muestra los productos de dos números organizados en filas y columnas. Cada fila representa un multiplicando y cada columna un multiplicador; el número en su intersección es el resultado de esa multiplicación. Leer la tabla 12×12 es sencillo: localiza la fila del primer número y la columna del segundo, y encuentra su cruce. Ya sea para ayudar a un niño con los deberes, comprobar cálculos mentales o repasar las matemáticas básicas, una tabla de multiplicar completa del 1 al 12 es una de las herramientas de referencia más útiles en la vida cotidiana y en la escuela.',
          }[l]}
        </p>
        <p>
          {{
            en: 'Memorizing the times tables is one of the most valuable investments a student can make in their mathematical education. Instant recall of multiplication facts frees up mental resources for more complex tasks: long division, fractions, algebra, and geometry all become significantly easier when you do not need to pause and calculate 6×7 from scratch. Research in cognitive science confirms that automating basic arithmetic facts allows the working memory to focus on higher-level reasoning. Beyond school, fast mental multiplication helps with everyday tasks like splitting a bill, estimating quantities, or converting units — making the multiplication chart from 1 to 12 a true life skill.',
            it: 'Memorizzare le tabelline è uno degli investimenti più importanti che uno studente possa fare nel proprio percorso matematico. Sapere a memoria i risultati delle moltiplicazioni libera risorse mentali per operazioni più complesse: la divisione, le frazioni, l\'algebra e la geometria diventano molto più semplici quando non occorre fermarsi a calcolare 6×7 da zero. Le ricerche in scienze cognitive confermano che automatizzare i fatti aritmetici di base consente alla memoria di lavoro di concentrarsi sul ragionamento di livello superiore. Al di là della scuola, il calcolo mentale rapido aiuta nella vita quotidiana: dividere un conto, stimare quantità, calcolare aree o convertire misure diventano operazioni immediate.',
            de: 'Das Auswendiglernen des Einmaleins ist eine der wertvollsten Investitionen, die Schülerinnen und Schüler in ihre mathematische Bildung tätigen können. Wer Multiplikationsergebnisse sofort abrufen kann, spart mentale Ressourcen für komplexere Aufgaben: Schriftliche Division, Brüche, Algebra und Geometrie fallen deutlich leichter, wenn man nicht jedes Mal 6×7 neu berechnen muss. Die Kognitionswissenschaft bestätigt, dass das Automatisieren grundlegender Rechenoperationen das Arbeitsgedächtnis für höheres Denken freisetzt. Im Alltag hilft schnelles Kopfrechnen beim Aufteilen von Rechnungen, beim Schätzen von Mengen und beim Umrechnen von Maßen — das Einmaleins von 1 bis 12 ist daher eine echte Lebensfertigkeit.',
            fr: 'Mémoriser les tables de multiplication est l\'un des investissements les plus précieux qu\'un élève puisse faire dans son parcours mathématique. Connaître instantanément les résultats libère des ressources mentales pour des tâches plus complexes : la division, les fractions, l\'algèbre et la géométrie deviennent nettement plus accessibles quand on n\'a pas besoin de s\'arrêter pour calculer 6×7 de zéro. Les recherches en sciences cognitives confirment que l\'automatisation des faits arithmétiques de base permet à la mémoire de travail de se concentrer sur le raisonnement de plus haut niveau. Au-delà de l\'école, la rapidité en calcul mental aide dans la vie courante : partager une addition, estimer des quantités, calculer des surfaces ou convertir des unités.',
            es: 'Memorizar las tablas de multiplicar es una de las inversiones más valiosas que un estudiante puede hacer en su educación matemática. Recordar al instante los resultados libera recursos mentales para tareas más complejas: la división, las fracciones, el álgebra y la geometría se vuelven significativamente más fáciles cuando no es necesario detenerse a calcular 6×7 desde cero. La investigación en ciencias cognitivas confirma que automatizar los hechos aritméticos básicos permite a la memoria de trabajo concentrarse en el razonamiento de nivel superior. Más allá de la escuela, el cálculo mental rápido ayuda en la vida cotidiana: dividir una cuenta, estimar cantidades, calcular áreas o convertir unidades se convierten en operaciones inmediatas.',
          }[l]}
        </p>
      </section>

      {/* ── 12×12 grid ── */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-3 py-2 font-bold text-center border-r">×</th>
              {numbers.map(n => (
                <th key={n} className="px-1.5 sm:px-3 py-2 font-bold text-center min-w-[32px] sm:min-w-[48px]">{n}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="px-1.5 sm:px-3 py-2 font-bold text-center bg-muted/50 border-r">{i + 1}</td>
                {row.map((val, j) => (
                  <td key={j} className="px-1.5 sm:px-3 py-2 text-center font-mono">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Individual number cards ── */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {numbers.map(n => (
          <div key={n} className="rounded-lg border p-4">
            <h2 className="font-semibold mb-2">{n} ×</h2>
            <div className="space-y-0.5 text-sm font-mono text-muted-foreground">
              {numbers.map(m => (
                <div key={m}>{n} × {m} = {n * m}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Tips for memorizing ── */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold">
          {{
            en: 'Tips for Memorizing the Times Tables',
            it: 'Trucchi per Memorizzare le Tabelline',
            de: 'Tipps zum Auswendiglernen des Einmaleins',
            fr: 'Astuces pour mémoriser les tables de multiplication',
            es: 'Trucos para memorizar las tablas de multiplicar',
          }[l]}
        </h2>

        <div className="space-y-4 text-zinc-600 leading-relaxed">
          {/* Tip 1: Commutative property */}
          <div>
            <h3 className="font-semibold text-zinc-800 mb-1">
              {{
                en: '1. The Commutative Property',
                it: '1. La Proprietà Commutativa',
                de: '1. Das Kommutativgesetz',
                fr: '1. La propriété commutative',
                es: '1. La propiedad conmutativa',
              }[l]}
            </h3>
            <p>
              {{
                en: 'Multiplication is commutative: 3×7 gives exactly the same result as 7×3. This single insight cuts the number of facts you need to memorize almost in half. Instead of learning all 144 entries of the 12×12 chart independently, you only need to master 78 unique products (the diagonal plus the upper triangle). Once you know 4×9 = 36, you automatically know 9×4 = 36 — no extra effort required.',
                it: 'La moltiplicazione è commutativa: 3×7 dà esattamente lo stesso risultato di 7×3. Questa sola osservazione dimezza quasi il numero di fatti da memorizzare. Invece di imparare tutti i 144 risultati della tavola 12×12 in modo indipendente, bastano 78 prodotti unici (la diagonale più il triangolo superiore). Una volta che sai che 4×9 = 36, sai automaticamente anche 9×4 = 36, senza alcuno sforzo aggiuntivo.',
                de: 'Die Multiplikation ist kommutativ: 3×7 ergibt dasselbe Ergebnis wie 7×3. Diese Erkenntnis allein halbiert die Anzahl der Fakten, die du auswendig lernen musst. Statt alle 144 Einträge der 12×12-Tabelle einzeln zu lernen, reichen 78 einzigartige Produkte (die Diagonale plus das obere Dreieck). Wenn du weißt, dass 4×9 = 36 ist, weißt du automatisch auch 9×4 = 36 — ohne zusätzlichen Aufwand.',
                fr: 'La multiplication est commutative : 3×7 donne exactement le même résultat que 7×3. Ce seul constat réduit de moitié le nombre de faits à mémoriser. Au lieu d\'apprendre les 144 entrées du tableau 12×12 de façon indépendante, il suffit de maîtriser 78 produits uniques (la diagonale et le triangle supérieur). Une fois que vous savez que 4×9 = 36, vous savez automatiquement que 9×4 = 36 — sans effort supplémentaire.',
                es: 'La multiplicación es conmutativa: 3×7 da exactamente el mismo resultado que 7×3. Esta sola observación reduce a casi la mitad el número de hechos que necesitas memorizar. En lugar de aprender los 144 resultados de la tabla 12×12 de forma independiente, solo necesitas dominar 78 productos únicos (la diagonal más el triángulo superior). Una vez que sabes que 4×9 = 36, automáticamente sabes que 9×4 = 36, sin esfuerzo adicional.',
              }[l]}
            </p>
          </div>

          {/* Tip 2: 9 times table */}
          <div>
            <h3 className="font-semibold text-zinc-800 mb-1">
              {{
                en: '2. Patterns in the 9 Times Table',
                it: '2. I Trucchi della Tabellina del 9',
                de: '2. Muster in der 9er-Reihe',
                fr: '2. Les astuces de la table de 9',
                es: '2. Los trucos de la tabla del 9',
              }[l]}
            </h3>
            <p>
              {{
                en: 'The 9 times table has two elegant patterns that make it easy to verify any result. First, as you go down the column, the tens digit increases by 1 (09, 18, 27, 36…) while the units digit decreases by 1. Second, the digits of every multiple of 9 always add up to 9: 9×4 = 36, and 3+6 = 9; 9×7 = 63, and 6+3 = 9. You can also use the "finger trick": hold up both hands, fold down the finger corresponding to the multiplier, and count the fingers to the left (tens) and to the right (units).',
                it: 'La tabellina del 9 ha due eleganti pattern che rendono facile verificare qualsiasi risultato. Il primo: scorrendo la colonna verso il basso, la cifra delle decine aumenta di 1 (09, 18, 27, 36…) mentre la cifra delle unità diminuisce di 1. Il secondo: la somma delle cifre di ogni multiplo di 9 è sempre 9: 9×4 = 36, e 3+6 = 9; 9×7 = 63, e 6+3 = 9. Puoi anche usare il "trucco delle dita": alza entrambe le mani, abbassa il dito corrispondente al moltiplicatore e conta i diti a sinistra (decine) e a destra (unità).',
                de: 'Die 9er-Reihe hat zwei elegante Muster, die die Überprüfung jedes Ergebnisses erleichtern. Erstens: Wenn man die Spalte nach unten geht, steigt die Zehnerziffer um 1 (09, 18, 27, 36…), während die Einerziffer um 1 sinkt. Zweitens: Die Quersumme jedes Vielfachen von 9 ergibt immer 9: 9×4 = 36, und 3+6 = 9; 9×7 = 63, und 6+3 = 9. Du kannst auch den "Fingertrick" verwenden: Hebe beide Hände, klappe den Finger des Multiplikators ein und zähle die Finger links (Zehner) und rechts (Einer).',
                fr: 'La table de 9 a deux modèles élégants qui facilitent la vérification de n\'importe quel résultat. Premièrement : en parcourant la colonne vers le bas, le chiffre des dizaines augmente de 1 (09, 18, 27, 36…) tandis que le chiffre des unités diminue de 1. Deuxièmement : la somme des chiffres de chaque multiple de 9 est toujours 9 : 9×4 = 36, et 3+6 = 9 ; 9×7 = 63, et 6+3 = 9. Vous pouvez aussi utiliser l\'astuce des doigts : tendez les deux mains, pliez le doigt correspondant au multiplicateur et comptez les doigts à gauche (dizaines) et à droite (unités).',
                es: 'La tabla del 9 tiene dos patrones elegantes que facilitan verificar cualquier resultado. Primero: al bajar por la columna, la cifra de las decenas aumenta en 1 (09, 18, 27, 36…) mientras que la cifra de las unidades disminuye en 1. Segundo: la suma de las cifras de cada múltiplo de 9 siempre da 9: 9×4 = 36, y 3+6 = 9; 9×7 = 63, y 6+3 = 9. También puedes usar el "truco de los dedos": levanta ambas manos, dobla el dedo correspondiente al multiplicador y cuenta los dedos a la izquierda (decenas) y a la derecha (unidades).',
              }[l]}
            </p>
          </div>

          {/* Tip 3: ×5 trick */}
          <div>
            <h3 className="font-semibold text-zinc-800 mb-1">
              {{
                en: '3. The ×5 Trick',
                it: '3. Il Trucco del ×5',
                de: '3. Der ×5-Trick',
                fr: '3. L\'astuce du ×5',
                es: '3. El truco del ×5',
              }[l]}
            </h3>
            <p>
              {{
                en: 'Multiples of 5 always end in 0 or 5, making them easy to spot and remember. There is also a shortcut for multiplying any even number by 5: divide the number by 2 and append a zero. For example, 5×8 — halve 8 to get 4, then add a zero: 40. For odd numbers, subtract 1, halve the result, and the units digit will be 5: 5×7 — subtract 1 to get 6, halve to get 3, units digit is 5 → 35. These shortcuts make the 5 times table one of the fastest to master.',
                it: 'I multipli di 5 terminano sempre in 0 o 5, il che li rende facilissimi da riconoscere e ricordare. Esiste anche una scorciatoia per moltiplicare qualsiasi numero pari per 5: dividi il numero per 2 e aggiungi uno zero. Ad esempio, 5×8 — dimezza 8 ottenendo 4, poi aggiungi uno zero: 40. Per i numeri dispari, sottrai 1, dimezza il risultato e la cifra delle unità sarà 5: 5×7 — sottrai 1 ottenendo 6, dimezza ottenendo 3, unità = 5 → 35. Questi trucchi rendono la tabellina del 5 una delle più semplici da padroneggiare.',
                de: 'Vielfache von 5 enden immer auf 0 oder 5, was sie leicht erkennbar und erinnerbar macht. Es gibt auch eine Abkürzung für die Multiplikation einer geraden Zahl mit 5: Halbiere die Zahl und hänge eine Null an. Zum Beispiel 5×8 — halbiere 8 zu 4, dann eine Null anhängen: 40. Bei ungeraden Zahlen subtrahiere 1, halbiere das Ergebnis, und die Einerstelle ist 5: 5×7 — subtrahiere 1 ergibt 6, halbiert ergibt 3, Einerstelle ist 5 → 35. Diese Abkürzungen machen die 5er-Reihe zu einer der schnellsten zu lernenden Reihen.',
                fr: 'Les multiples de 5 se terminent toujours par 0 ou 5, ce qui les rend faciles à repérer et à mémoriser. Il existe aussi un raccourci pour multiplier n\'importe quel nombre pair par 5 : divisez le nombre par 2 et ajoutez un zéro. Par exemple, 5×8 — divisez 8 par 2 pour obtenir 4, puis ajoutez un zéro : 40. Pour les nombres impairs, soustrayez 1, divisez par 2, et le chiffre des unités sera 5 : 5×7 — soustrayez 1 pour obtenir 6, divisez par 2 pour obtenir 3, chiffre des unités = 5 → 35. Ces raccourcis font de la table de 5 l\'une des plus rapides à maîtriser.',
                es: 'Los múltiplos de 5 siempre terminan en 0 o en 5, lo que los hace fáciles de identificar y recordar. También existe un atajo para multiplicar cualquier número par por 5: divide el número entre 2 y añade un cero. Por ejemplo, 5×8 — divide 8 entre 2 para obtener 4, luego añade un cero: 40. Para los números impares, resta 1, divide el resultado entre 2 y la cifra de las unidades será 5: 5×7 — resta 1 para obtener 6, divide entre 2 para obtener 3, unidades = 5 → 35. Estos atajos hacen que la tabla del 5 sea una de las más rápidas de dominar.',
              }[l]}
            </p>
          </div>

          {/* Tip 4: Doubling */}
          <div>
            <h3 className="font-semibold text-zinc-800 mb-1">
              {{
                en: '4. Doubling for ×2, ×4, and ×8',
                it: '4. Il Raddoppio per ×2, ×4 e ×8',
                de: '4. Verdoppeln für ×2, ×4 und ×8',
                fr: '4. Le doublement pour ×2, ×4 et ×8',
                es: '4. El doblado para ×2, ×4 y ×8',
              }[l]}
            </h3>
            <p>
              {{
                en: 'The ×2, ×4, and ×8 tables are linked by a simple doubling chain. Multiplying by 2 is just adding a number to itself. Multiplying by 4 is the double of the double: 4×7 = double(double(7)) = double(14) = 28. Multiplying by 8 is the double of the double of the double: 8×6 = double(double(double(6))) = double(double(12)) = double(24) = 48. If you are comfortable with ×2, mastering ×4 and ×8 is just a matter of applying the same operation twice or three times. This chain also extends to ×16 and beyond for more advanced mental arithmetic.',
                it: 'Le tabelline del ×2, ×4 e ×8 sono collegate da una semplice catena di raddoppi. Moltiplicare per 2 è semplicemente sommare un numero a se stesso. Moltiplicare per 4 è il doppio del doppio: 4×7 = doppio(doppio(7)) = doppio(14) = 28. Moltiplicare per 8 è il doppio del doppio del doppio: 8×6 = doppio(doppio(doppio(6))) = doppio(doppio(12)) = doppio(24) = 48. Se hai familiarità con il ×2, padroneggiare ×4 e ×8 è solo questione di applicare la stessa operazione due o tre volte. Questa catena si estende anche a ×16 e oltre per il calcolo mentale avanzato.',
                de: 'Die 2er-, 4er- und 8er-Reihe sind durch eine einfache Verdoppelungskette verbunden. Mit 2 zu multiplizieren bedeutet einfach, eine Zahl zu sich selbst zu addieren. Mit 4 zu multiplizieren ist das Doppelte des Doppelten: 4×7 = doppelt(doppelt(7)) = doppelt(14) = 28. Mit 8 zu multiplizieren ist das Doppelte des Doppelten des Doppelten: 8×6 = doppelt(doppelt(doppelt(6))) = doppelt(doppelt(12)) = doppelt(24) = 48. Wer mit ×2 vertraut ist, kann ×4 und ×8 einfach durch zweifaches bzw. dreifaches Verdoppeln berechnen. Diese Kette lässt sich auch auf ×16 und darüber hinaus für fortgeschrittenes Kopfrechnen anwenden.',
                fr: 'Les tables de ×2, ×4 et ×8 sont liées par une simple chaîne de doublement. Multiplier par 2, c\'est simplement additionner un nombre à lui-même. Multiplier par 4, c\'est le double du double : 4×7 = double(double(7)) = double(14) = 28. Multiplier par 8, c\'est le double du double du double : 8×6 = double(double(double(6))) = double(double(12)) = double(24) = 48. Si vous maîtrisez le ×2, apprendre ×4 et ×8 n\'est qu\'une question d\'appliquer la même opération deux ou trois fois. Cette chaîne s\'étend également à ×16 et au-delà pour le calcul mental avancé.',
                es: 'Las tablas del ×2, ×4 y ×8 están relacionadas por una simple cadena de doblado. Multiplicar por 2 es simplemente sumar un número a sí mismo. Multiplicar por 4 es el doble del doble: 4×7 = doble(doble(7)) = doble(14) = 28. Multiplicar por 8 es el doble del doble del doble: 8×6 = doble(doble(doble(6))) = doble(doble(12)) = doble(24) = 48. Si estás cómodo con el ×2, dominar ×4 y ×8 es solo cuestión de aplicar la misma operación dos o tres veces. Esta cadena también se extiende a ×16 y más allá para el cálculo mental avanzado.',
              }[l]}
            </p>
          </div>
        </div>
      </section>

      {/* ── Patterns in the multiplication table ── */}
      <section className="mt-12 space-y-4 text-zinc-600 leading-relaxed">
        <h2 className="text-2xl font-bold text-zinc-900">
          {{
            en: 'Patterns in the Multiplication Table',
            it: 'Pattern nella Tavola Pitagorica',
            de: 'Muster im Einmaleins',
            fr: 'Régularités dans la table de multiplication',
            es: 'Patrones en la tabla de multiplicar',
          }[l]}
        </h2>

        <p>
          {{
            en: 'The 12×12 multiplication chart is not just a list of facts — it is a visual map of mathematical structure. When you look closely, several elegant patterns emerge that deepen your understanding of arithmetic and number theory.',
            it: 'La tavola pitagorica 12×12 non è solo un elenco di risultati — è una mappa visiva della struttura matematica. Se la osservi attentamente, emergono diversi pattern eleganti che approfondiscono la comprensione dell\'aritmetica e della teoria dei numeri.',
            de: 'Die 12×12-Multiplikationstabelle ist nicht nur eine Liste von Fakten — sie ist eine visuelle Karte mathematischer Strukturen. Wenn man genau hinschaut, treten mehrere elegante Muster hervor, die das Verständnis von Arithmetik und Zahlentheorie vertiefen.',
            fr: 'Le tableau de multiplication 12×12 n\'est pas seulement une liste de faits — c\'est une carte visuelle de la structure mathématique. En y regardant de près, plusieurs motifs élégants apparaissent et approfondissent la compréhension de l\'arithmétique et de la théorie des nombres.',
            es: 'La tabla de multiplicar 12×12 no es solo una lista de resultados — es un mapa visual de la estructura matemática. Si la observas con atención, emergen varios patrones elegantes que profundizan la comprensión de la aritmética y la teoría de números.',
          }[l]}
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <span className="font-semibold text-zinc-800">
              {{
                en: 'Perfect squares along the main diagonal.',
                it: 'Quadrati perfetti sulla diagonale principale.',
                de: 'Perfekte Quadrate entlang der Hauptdiagonale.',
                fr: 'Carrés parfaits sur la diagonale principale.',
                es: 'Cuadrados perfectos en la diagonal principal.',
              }[l]}
            </span>
            {' '}
            {{
              en: 'The cells where a row and column share the same number — 1×1, 2×2, 3×3, all the way to 12×12 — produce the perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. These numbers appear along the diagonal that runs from the top-left to the bottom-right of the table and are the foundation of square roots, quadratic equations, and the Pythagorean theorem.',
              it: 'Le celle dove la riga e la colonna condividono lo stesso numero — 1×1, 2×2, 3×3, fino a 12×12 — producono i quadrati perfetti: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Questi numeri appaiono lungo la diagonale che va dall\'angolo in alto a sinistra a quello in basso a destra e sono alla base delle radici quadrate, delle equazioni quadratiche e del teorema di Pitagora.',
              de: 'Die Zellen, in denen Zeile und Spalte dieselbe Zahl teilen — 1×1, 2×2, 3×3, bis 12×12 — ergeben die vollkommenen Quadrate: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Diese Zahlen erscheinen entlang der Diagonale von oben links nach unten rechts und bilden die Grundlage für Quadratwurzeln, quadratische Gleichungen und den Satz des Pythagoras.',
              fr: 'Les cellules où la ligne et la colonne partagent le même numéro — 1×1, 2×2, 3×3, jusqu\'à 12×12 — produisent les carrés parfaits : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Ces nombres apparaissent le long de la diagonale qui va du coin supérieur gauche au coin inférieur droit et constituent la base des racines carrées, des équations du second degré et du théorème de Pythagore.',
              es: 'Las celdas donde la fila y la columna comparten el mismo número — 1×1, 2×2, 3×3, hasta 12×12 — producen los cuadrados perfectos: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Estos números aparecen a lo largo de la diagonal que va desde la esquina superior izquierda hasta la inferior derecha y son la base de las raíces cuadradas, las ecuaciones cuadráticas y el teorema de Pitágoras.',
            }[l]}
          </li>
          <li>
            <span className="font-semibold text-zinc-800">
              {{
                en: 'Symmetry across the diagonal.',
                it: 'Simmetria rispetto alla diagonale.',
                de: 'Symmetrie entlang der Diagonale.',
                fr: 'Symétrie par rapport à la diagonale.',
                es: 'Simetría respecto a la diagonal.',
              }[l]}
            </span>
            {' '}
            {{
              en: 'Because multiplication is commutative, the upper-right triangle of the table is a mirror image of the lower-left triangle, reflected across the main diagonal. Any number you find at row r, column c will also appear at row c, column r. This visual symmetry is a direct, tangible representation of the commutative property — a concept that extends into matrix algebra, where it does NOT always hold, making the contrast instructive.',
              it: 'Poiché la moltiplicazione è commutativa, il triangolo in alto a destra della tavola è l\'immagine speculare del triangolo in basso a sinistra, riflessa rispetto alla diagonale principale. Qualsiasi numero che trovi alla riga r, colonna c apparirà anche alla riga c, colonna r. Questa simmetria visiva è una rappresentazione diretta e tangibile della proprietà commutativa — un concetto che si estende all\'algebra matriciale, dove NON vale sempre, rendendo il confronto istruttivo.',
              de: 'Da die Multiplikation kommutativ ist, ist das obere rechte Dreieck der Tabelle ein Spiegelbild des unteren linken Dreiecks, gespiegelt an der Hauptdiagonale. Jede Zahl, die sich in Zeile r, Spalte c befindet, erscheint auch in Zeile c, Spalte r. Diese visuelle Symmetrie ist eine direkte, greifbare Darstellung des Kommutativgesetzes — ein Konzept, das sich in die Matrizenalgebra erstreckt, wo es NICHT immer gilt, was den Vergleich lehrreich macht.',
              fr: 'Comme la multiplication est commutative, le triangle supérieur droit du tableau est le miroir du triangle inférieur gauche, reflété par rapport à la diagonale principale. Tout nombre que vous trouvez à la ligne r, colonne c apparaîtra également à la ligne c, colonne r. Cette symétrie visuelle est une représentation directe et tangible de la propriété commutative — un concept qui s\'étend à l\'algèbre des matrices, où elle ne s\'applique PAS toujours, ce qui rend le contraste instructif.',
              es: 'Dado que la multiplicación es conmutativa, el triángulo superior derecho de la tabla es una imagen especular del triángulo inferior izquierdo, reflejada respecto a la diagonal principal. Cualquier número que encuentres en la fila r, columna c también aparecerá en la fila c, columna r. Esta simetría visual es una representación directa y tangible de la propiedad conmutativa — un concepto que se extiende al álgebra de matrices, donde NO siempre se cumple, lo que hace instructivo el contraste.',
            }[l]}
          </li>
          <li>
            <span className="font-semibold text-zinc-800">
              {{
                en: 'Multiples of 10 are easy to identify.',
                it: 'I multipli di 10 sono facili da identificare.',
                de: 'Vielfache von 10 sind leicht zu erkennen.',
                fr: 'Les multiples de 10 sont faciles à identifier.',
                es: 'Los múltiplos de 10 son fáciles de identificar.',
              }[l]}
            </span>
            {' '}
            {{
              en: 'The entire row and column for 10 consist of round numbers ending in zero (10, 20, 30, … 120). This makes the ×10 table trivially easy and provides useful anchors: if you know 10×7 = 70, you can derive 9×7 by subtracting 7 (63) or 11×7 by adding 7 (77). Using known easy products as stepping stones is a powerful strategy for tackling the harder facts in the times table.',
              it: 'L\'intera riga e colonna del 10 sono composte da numeri tondi che terminano in zero (10, 20, 30, … 120). Questo rende la tabellina del ×10 banalmente semplice e fornisce punti di ancoraggio utili: se sai che 10×7 = 70, puoi ricavare 9×7 sottraendo 7 (63) oppure 11×7 aggiungendo 7 (77). Usare prodotti facili come trampolino di lancio è una strategia potente per affrontare i risultati più difficili della tavola.',
              de: 'Die gesamte Zeile und Spalte für 10 besteht aus runden Zahlen, die auf Null enden (10, 20, 30, … 120). Dies macht die ×10-Reihe trivial einfach und liefert nützliche Ankerpunkte: Wenn du weißt, dass 10×7 = 70 ist, kannst du 9×7 durch Subtraktion von 7 ableiten (63) oder 11×7 durch Addition von 7 (77). Bekannte, einfache Produkte als Sprungbrett zu nutzen, ist eine kraftvolle Strategie für schwierigere Einmaleins-Fakten.',
              fr: 'La ligne et la colonne entières pour 10 sont composées de nombres ronds se terminant par zéro (10, 20, 30, … 120). Cela rend la table du ×10 extrêmement simple et fournit des points d\'ancrage utiles : si vous savez que 10×7 = 70, vous pouvez en déduire 9×7 en soustrayant 7 (63) ou 11×7 en ajoutant 7 (77). Utiliser des produits faciles connus comme tremplin est une stratégie puissante pour aborder les faits plus difficiles de la table.',
              es: 'La fila y la columna completas del 10 están formadas por números redondos que terminan en cero (10, 20, 30, … 120). Esto hace que la tabla del ×10 sea trivialmente fácil y proporciona anclas útiles: si sabes que 10×7 = 70, puedes derivar 9×7 restando 7 (63) o 11×7 sumando 7 (77). Usar productos fáciles conocidos como trampolín es una estrategia poderosa para abordar los hechos más difíciles de la tabla.',
            }[l]}
          </li>
        </ul>
      </section>

      {/* ── How to use this times table ── */}
      <section className="mt-12 space-y-4 text-zinc-600 leading-relaxed">
        <h2 className="text-2xl font-bold text-zinc-900">
          {{
            en: 'How to Use This Times Table',
            it: 'Come Usare Questa Tavola Pitagorica',
            de: 'So nutzen Sie dieses Einmaleins',
            fr: 'Comment utiliser ce tableau de multiplication',
            es: 'Cómo usar esta tabla de multiplicar',
          }[l]}
        </h2>

        <p>
          {{
            en: 'Finding a product in the 12×12 chart is straightforward. Say you want to calculate 7×8: locate row 7 (the row labelled "7" on the left) and column 8 (the column labelled "8" at the top), then follow them to their intersection — the number there, 56, is your product. The same works in reverse: if you start from column 7 and row 8, you arrive at the same cell, confirming the commutative property.',
            it: 'Trovare un prodotto nella tavola 12×12 è semplice. Supponiamo di voler calcolare 7×8: individua la riga 7 (quella etichettata "7" a sinistra) e la colonna 8 (etichettata "8" in cima), poi segui entrambe fino al loro incrocio — il numero lì, 56, è il prodotto. Lo stesso funziona al contrario: partendo dalla colonna 7 e dalla riga 8 si arriva alla stessa cella, confermando la proprietà commutativa.',
            de: 'Ein Produkt in der 12×12-Tabelle zu finden ist einfach. Wenn du beispielsweise 7×8 berechnen möchtest: Suche Zeile 7 (die mit "7" beschriftete Zeile links) und Spalte 8 (die mit "8" beschriftete Spalte oben), dann folge beiden bis zu ihrem Schnittpunkt — die Zahl dort, 56, ist dein Produkt. Das Gleiche funktioniert umgekehrt: Beginnst du bei Spalte 7 und Zeile 8, gelangst du zur selben Zelle, was das Kommutativgesetz bestätigt.',
            fr: 'Trouver un produit dans le tableau 12×12 est simple. Supposons que vous vouliez calculer 7×8 : repérez la ligne 7 (la ligne intitulée "7" sur la gauche) et la colonne 8 (la colonne intitulée "8" en haut), puis suivez-les jusqu\'à leur intersection — le nombre qui s\'y trouve, 56, est votre produit. L\'inverse fonctionne aussi : si vous partez de la colonne 7 et de la ligne 8, vous arrivez à la même cellule, confirmant la propriété commutative.',
            es: 'Encontrar un producto en la tabla 12×12 es sencillo. Supongamos que quieres calcular 7×8: localiza la fila 7 (la fila etiquetada "7" a la izquierda) y la columna 8 (la columna etiquetada "8" en la parte superior), luego sigue ambas hasta su intersección — el número allí, 56, es tu producto. Lo mismo funciona al revés: si comienzas desde la columna 7 y la fila 8, llegas a la misma celda, confirmando la propiedad conmutativa.',
          }[l]}
        </p>

        <p>
          {{
            en: 'The multiplication table is also invaluable for division. If you need to compute 56 ÷ 7, look along the row labelled 7 and find the number 56 — the column header above it (8) is the quotient. This reverse lookup works for any division where both the dividend and the divisor are within the range of the table, turning a potentially difficult operation into an instant look-up. For remainders, simply find the largest product in that row that does not exceed the dividend, and the difference is the remainder.',
            it: 'La tavola pitagorica è preziosa anche per le divisioni. Se devi calcolare 56 ÷ 7, scorri la riga etichettata 7 e trova il numero 56 — l\'intestazione di colonna sopra di esso (8) è il quoziente. Questa ricerca inversa funziona per qualsiasi divisione in cui sia il dividendo sia il divisore rientrano nell\'intervallo della tavola, trasformando un\'operazione potenzialmente difficile in una consultazione immediata. Per i resti, individua semplicemente il prodotto più grande in quella riga che non supera il dividendo: la differenza è il resto.',
            de: 'Die Multiplikationstabelle ist auch für Divisionen unschätzbar. Wenn du 56 ÷ 7 berechnen möchtest, suche in der Zeile mit der Bezeichnung 7 nach der Zahl 56 — die Spaltenüberschrift darüber (8) ist der Quotient. Diese umgekehrte Suche funktioniert für jede Division, bei der sowohl Dividend als auch Divisor im Bereich der Tabelle liegen, und verwandelt eine potenziell schwierige Operation in ein sofortiges Nachschlagen. Bei Divisionen mit Rest findet man das größte Produkt in der Zeile, das den Dividenden nicht überschreitet — die Differenz ist der Rest.',
            fr: 'Le tableau de multiplication est également précieux pour la division. Si vous devez calculer 56 ÷ 7, parcourez la ligne intitulée 7 et trouvez le nombre 56 — l\'en-tête de colonne au-dessus (8) est le quotient. Cette recherche inversée fonctionne pour toute division où le dividende et le diviseur se trouvent dans la plage du tableau, transformant une opération potentiellement difficile en une consultation instantanée. Pour les restes, trouvez simplement le plus grand produit de cette ligne qui ne dépasse pas le dividende — la différence est le reste.',
            es: 'La tabla de multiplicar también es invaluable para la división. Si necesitas calcular 56 ÷ 7, busca a lo largo de la fila etiquetada 7 y encuentra el número 56 — el encabezado de columna que aparece arriba (8) es el cociente. Esta búsqueda inversa funciona para cualquier división en la que tanto el dividendo como el divisor estén dentro del rango de la tabla, convirtiendo una operación potencialmente difícil en una consulta inmediata. Para los restos, simplemente encuentra el mayor producto en esa fila que no supere el dividendo — la diferencia es el resto.',
          }[l]}
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          {{
            en: 'Frequently Asked Questions',
            it: 'Domande Frequenti',
            de: 'Häufig gestellte Fragen',
            fr: 'Questions fréquentes',
            es: 'Preguntas frecuentes',
          }[l]}
        </h2>

        <div className="space-y-5">
          {/* FAQ 1 */}
          <div>
            <h3 className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'What is the multiplication table?',
                it: 'Cos\'è la tavola pitagorica?',
                de: 'Was ist das Einmaleins?',
                fr: 'Qu\'est-ce que la table de multiplication?',
                es: '¿Qué es la tabla de multiplicar?',
              }[l]}
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              {{
                en: 'A multiplication table (also called a times table or multiplication chart) is a mathematical grid that lists the products of pairs of numbers. The most common version covers the numbers 1 through 12, producing a 12×12 grid of 144 products. It is one of the foundational tools taught in primary school arithmetic worldwide, and a printable 12×12 times table chart remains a popular study aid for children and adults alike. More advanced versions extend to 1–20 or even 1–100 for higher-level work.',
                it: 'Una tavola pitagorica (chiamata anche tabella delle moltiplicazioni o griglia delle tabelline) è una griglia matematica che elenca i prodotti di coppie di numeri. La versione più comune copre i numeri da 1 a 12, producendo una griglia 12×12 di 144 prodotti. È uno degli strumenti fondamentali insegnati nelle scuole primarie di tutto il mondo, e una tavola pitagorica stampabile 12×12 rimane un popolare ausilio allo studio per bambini e adulti. Le versioni più avanzate si estendono fino a 1–20 o anche 1–100 per lavori di livello superiore.',
                de: 'Eine Multiplikationstabelle (auch Einmaleins oder Rechentafel genannt) ist ein mathematisches Raster, das die Produkte von Zahlenpaaren auflistet. Die gebräuchlichste Version umfasst die Zahlen 1 bis 12 und erzeugt ein 12×12-Raster mit 144 Produkten. Es ist eines der grundlegenden Werkzeuge, die weltweit in der Grundschulmathematik gelehrt werden, und eine druckbare 12×12-Einmaleins-Tabelle ist nach wie vor ein beliebtes Lernhilfsmittel für Kinder und Erwachsene. Fortgeschrittenere Versionen erstrecken sich bis 1–20 oder sogar 1–100 für höherstufige Arbeiten.',
                fr: 'Une table de multiplication (appelée aussi table de Pythagore ou tableau de multiplication) est une grille mathématique qui répertorie les produits de paires de nombres. La version la plus courante couvre les nombres de 1 à 12, produisant une grille 12×12 de 144 produits. C\'est l\'un des outils fondamentaux enseignés dans les écoles primaires du monde entier, et un tableau de multiplication 12×12 imprimable reste un aide-mémoire populaire pour les enfants et les adultes. Des versions plus avancées s\'étendent jusqu\'à 1–20 ou même 1–100 pour des travaux de niveau supérieur.',
                es: 'Una tabla de multiplicar (también llamada tabla de Pitágoras o cuadro de multiplicación) es una cuadrícula matemática que enumera los productos de pares de números. La versión más común cubre los números del 1 al 12, produciendo una cuadrícula 12×12 de 144 productos. Es una de las herramientas fundamentales que se enseñan en la aritmética de primaria en todo el mundo, y una tabla de multiplicar 12×12 imprimible sigue siendo un popular auxiliar de estudio para niños y adultos. Las versiones más avanzadas se extienden hasta 1–20 o incluso 1–100 para trabajos de nivel superior.',
              }[l]}
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h3 className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'How do I memorize the times tables?',
                it: 'Come si memorizzano le tabelline?',
                de: 'Wie lerne ich das Einmaleins auswendig?',
                fr: 'Comment mémoriser les tables de multiplication?',
                es: '¿Cómo memorizo las tablas de multiplicar?',
              }[l]}
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              {{
                en: 'The most effective approach combines pattern recognition with spaced repetition. Start with the easy tables (×1, ×2, ×5, ×10) to build confidence, then use the commutative property to halve the remaining workload. Apply the tricks described above — the 9s digit pattern, the doubling chain for ×4 and ×8, the zero-and-five rule for ×5. Practice daily in short sessions (5–10 minutes) using flashcards or a quiz app, gradually spacing out the intervals as you become more confident. Saying the facts aloud and writing them by hand both reinforce retention. Most children can master the 1–12 times table within a few weeks of consistent practice.',
                it: 'L\'approccio più efficace combina il riconoscimento dei pattern con la ripetizione spaziata. Inizia con le tabelline facili (×1, ×2, ×5, ×10) per costruire fiducia, poi usa la proprietà commutativa per dimezzare il carico di lavoro rimanente. Applica i trucchi descritti sopra — il pattern delle cifre del 9, la catena di raddoppi per ×4 e ×8, la regola dello zero-e-cinque per ×5. Pratica quotidianamente in sessioni brevi (5–10 minuti) usando flashcard o un\'app di quiz, spaziando gradualmente gli intervalli man mano che acquisisci sicurezza. Dire i risultati ad alta voce e scriverli a mano rinforza entrambi la ritenzione. La maggior parte dei bambini può padroneggiare le tabelline da 1 a 12 in poche settimane di pratica costante.',
                de: 'Der effektivste Ansatz kombiniert Mustererkennung mit verteiltem Lernen. Beginne mit den einfachen Reihen (×1, ×2, ×5, ×10), um Vertrauen aufzubauen, und nutze dann das Kommutativgesetz, um die verbleibende Arbeitslast zu halbieren. Wende die oben beschriebenen Tricks an — das Ziffernmuster der 9er-Reihe, die Verdoppelungskette für ×4 und ×8, die Null-und-Fünf-Regel für ×5. Übe täglich in kurzen Einheiten (5–10 Minuten) mit Karteikarten oder einer Quiz-App und steigere schrittweise die Abstände, wenn du sicherer wirst. Das laute Aussprechen und handschriftliche Aufschreiben der Fakten festigen beide die Merkfähigkeit. Die meisten Kinder können das Einmaleins von 1 bis 12 innerhalb weniger Wochen regelmäßigen Übens meistern.',
                fr: 'L\'approche la plus efficace combine la reconnaissance de modèles avec la répétition espacée. Commencez par les tables faciles (×1, ×2, ×5, ×10) pour gagner en confiance, puis utilisez la propriété commutative pour réduire de moitié la charge de travail restante. Appliquez les astuces décrites ci-dessus — le modèle de chiffres de la table de 9, la chaîne de doublement pour ×4 et ×8, la règle zéro-et-cinq pour ×5. Pratiquez quotidiennement en courtes sessions (5–10 minutes) avec des fiches ou une application de quiz, en espaçant progressivement les intervalles au fur et à mesure que vous gagnez en confiance. Réciter les faits à voix haute et les écrire à la main renforce tous les deux la mémorisation. La plupart des enfants peuvent maîtriser les tables de 1 à 12 en quelques semaines de pratique régulière.',
                es: 'El enfoque más efectivo combina el reconocimiento de patrones con la repetición espaciada. Comienza con las tablas fáciles (×1, ×2, ×5, ×10) para ganar confianza, luego usa la propiedad conmutativa para reducir a la mitad la carga de trabajo restante. Aplica los trucos descritos anteriormente — el patrón de cifras de la tabla del 9, la cadena de doblado para ×4 y ×8, la regla cero-y-cinco para ×5. Practica diariamente en sesiones cortas (5–10 minutos) usando tarjetas de memoria o una aplicación de preguntas, aumentando gradualmente los intervalos a medida que ganes confianza. Decir los hechos en voz alta y escribirlos a mano refuerzan ambos la retención. La mayoría de los niños pueden dominar las tablas del 1 al 12 en pocas semanas de práctica constante.',
              }[l]}
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h3 className="font-semibold text-zinc-800 mb-1">
              {{
                en: 'What is 12 times 12?',
                it: 'Quanto fa 12 per 12?',
                de: 'Was ist 12 mal 12?',
                fr: 'Combien font 12 fois 12?',
                es: '¿Cuánto es 12 por 12?',
              }[l]}
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              {{
                en: '12 × 12 = 144. This is the largest product in the standard 12×12 multiplication table, and 144 is also a perfect square (the square of 12). It appears in the bottom-right cell of the chart. The number 144 is particularly notable in mathematics: it is the twelfth Fibonacci number, and a gross (a unit of measure equal to a dozen dozens) is exactly 144. Knowing 12×12 = 144 is a useful benchmark — from it you can quickly derive nearby facts such as 11×12 = 132 (subtract 12) or 12×13 = 156 (add 12).',
                it: '12 × 12 = 144. Questo è il prodotto più grande della tavola pitagorica 12×12, e 144 è anche un quadrato perfetto (il quadrato di 12). Appare nella cella in basso a destra della tavola. Il numero 144 è particolarmente notevole in matematica: è il dodicesimo numero di Fibonacci, e una grossa (un\'unità di misura pari a una dozzina di dozzine) è esattamente 144. Sapere che 12×12 = 144 è un punto di riferimento utile: da lì si possono ricavare rapidamente fatti vicini come 11×12 = 132 (si sottrae 12) o 12×13 = 156 (si aggiunge 12).',
                de: '12 × 12 = 144. Dies ist das größte Produkt in der Standard-12×12-Multiplikationstabelle, und 144 ist auch eine vollkommene Quadratzahl (das Quadrat von 12). Es erscheint in der unteren rechten Zelle der Tabelle. Die Zahl 144 ist in der Mathematik besonders bemerkenswert: Sie ist die zwölfte Fibonacci-Zahl, und ein Gros (eine Maßeinheit für ein Dutzend Dutzend) ist genau 144. Das Wissen, dass 12×12 = 144, ist ein nützlicher Ankerpunkt — davon ausgehend kann man schnell benachbarte Fakten ableiten, wie 11×12 = 132 (minus 12) oder 12×13 = 156 (plus 12).',
                fr: '12 × 12 = 144. Il s\'agit du plus grand produit de la table de multiplication 12×12 standard, et 144 est aussi un carré parfait (le carré de 12). Il apparaît dans la cellule en bas à droite du tableau. Le nombre 144 est particulièrement remarquable en mathématiques : c\'est le douzième nombre de Fibonacci, et une grosse (une unité de mesure égale à une douzaine de douzaines) est exactement 144. Savoir que 12×12 = 144 est un repère utile — à partir de là, on peut rapidement dériver des faits proches comme 11×12 = 132 (soustraire 12) ou 12×13 = 156 (ajouter 12).',
                es: '12 × 12 = 144. Este es el mayor producto de la tabla de multiplicar 12×12 estándar, y 144 es también un cuadrado perfecto (el cuadrado de 12). Aparece en la celda inferior derecha de la tabla. El número 144 es particularmente notable en matemáticas: es el duodécimo número de Fibonacci, y una gruesa (una unidad de medida igual a una docena de docenas) es exactamente 144. Saber que 12×12 = 144 es un punto de referencia útil — a partir de ahí se pueden derivar rápidamente hechos cercanos como 11×12 = 132 (restar 12) o 12×13 = 156 (sumar 12).',
              }[l]}
            </p>
          </div>
        </div>
      </section>

      {/* ── Links to individual times tables ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">
          {{ en: 'Individual Times Tables', it: 'Tabelline Singole', de: 'Einzelne Einmaleins-Tabellen', fr: 'Tables individuelles', es: 'Tablas individuales' }[l]}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {SINGLE_NUMBERS.map(n => (
            <Link
              key={n}
              href={`/${locale}/tables/multiplication/${n}`}
              className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors"
            >
              {timesTableLabel[l](n)}
            </Link>
          ))}
          <Link href={`/${locale}/tables/multiplication/1-20`} className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors">
            {{ en: 'Table 1–20', it: 'Tavola 1–20', de: 'Einmaleins 1–20', fr: 'Table 1–20', es: 'Tabla 1–20' }[l]}
          </Link>
          <Link href={`/${locale}/tables/multiplication/1-100`} className="rounded border px-3 py-2 text-sm text-center hover:bg-accent transition-colors">
            {{ en: 'Table 1–100', it: 'Tavola 1–100', de: 'Einmaleins 1–100', fr: 'Table 1–100', es: 'Tabla 1–100' }[l]}
          </Link>
        </div>
      </section>
    </div>
  )
}

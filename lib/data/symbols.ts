import type { Locale } from '@/lib/i18n/config'

export interface SymbolEntry {
  symbol: string
  name: string
  meaning: Record<Locale, string>
  example?: string
  htmlCode?: string
}

export const MATH_SYMBOLS: SymbolEntry[] = [
  { symbol: '+', name: 'Plus', meaning: { en: 'Addition', it: 'Addizione' }, example: '3 + 5 = 8', htmlCode: '&plus;' },
  { symbol: '−', name: 'Minus', meaning: { en: 'Subtraction', it: 'Sottrazione' }, example: '8 − 3 = 5', htmlCode: '&minus;' },
  { symbol: '×', name: 'Times', meaning: { en: 'Multiplication', it: 'Moltiplicazione' }, example: '3 × 5 = 15', htmlCode: '&times;' },
  { symbol: '÷', name: 'Obelus', meaning: { en: 'Division', it: 'Divisione' }, example: '15 ÷ 3 = 5', htmlCode: '&divide;' },
  { symbol: '=', name: 'Equals', meaning: { en: 'Equal to', it: 'Uguale a' }, example: '3 + 2 = 5' },
  { symbol: '≠', name: 'Not equal', meaning: { en: 'Not equal to', it: 'Diverso da' }, example: '3 ≠ 5', htmlCode: '&ne;' },
  { symbol: '<', name: 'Less than', meaning: { en: 'Less than', it: 'Minore di' }, example: '3 < 5', htmlCode: '&lt;' },
  { symbol: '>', name: 'Greater than', meaning: { en: 'Greater than', it: 'Maggiore di' }, example: '5 > 3', htmlCode: '&gt;' },
  { symbol: '≤', name: 'Less or equal', meaning: { en: 'Less than or equal to', it: 'Minore o uguale a' }, example: 'x ≤ 5', htmlCode: '&le;' },
  { symbol: '≥', name: 'Greater or equal', meaning: { en: 'Greater than or equal to', it: 'Maggiore o uguale a' }, example: 'x ≥ 5', htmlCode: '&ge;' },
  { symbol: '±', name: 'Plus-minus', meaning: { en: 'Plus or minus', it: 'Più o meno' }, example: '5 ± 2', htmlCode: '&plusmn;' },
  { symbol: '∓', name: 'Minus-plus', meaning: { en: 'Minus or plus', it: 'Meno o più' }, example: '∓3' },
  { symbol: '√', name: 'Square root', meaning: { en: 'Square root', it: 'Radice quadrata' }, example: '√9 = 3', htmlCode: '&radic;' },
  { symbol: '∛', name: 'Cube root', meaning: { en: 'Cube root', it: 'Radice cubica' }, example: '∛27 = 3' },
  { symbol: '%', name: 'Percent', meaning: { en: 'Percentage', it: 'Percentuale' }, example: '50% = 0.5', htmlCode: '&percnt;' },
  { symbol: '‰', name: 'Per mille', meaning: { en: 'Per thousand', it: 'Per mille' }, example: '5‰ = 0.005', htmlCode: '&permil;' },
  { symbol: 'π', name: 'Pi', meaning: { en: 'Pi constant ≈ 3.14159', it: 'Pi greco ≈ 3,14159' }, example: 'C = 2πr', htmlCode: '&pi;' },
  { symbol: 'e', name: 'Euler\'s number', meaning: { en: 'Euler\'s number ≈ 2.71828', it: 'Numero di Eulero ≈ 2,71828' }, example: 'e ≈ 2.71828' },
  { symbol: '∞', name: 'Infinity', meaning: { en: 'Infinity', it: 'Infinito' }, example: 'lim x→∞', htmlCode: '&infin;' },
  { symbol: '∑', name: 'Sigma', meaning: { en: 'Summation', it: 'Sommatoria' }, example: '∑(1 to n)', htmlCode: '&sum;' },
  { symbol: '∏', name: 'Capital Pi', meaning: { en: 'Product', it: 'Produttoria' }, example: '∏(1 to n)', htmlCode: '&prod;' },
  { symbol: '∫', name: 'Integral', meaning: { en: 'Integral', it: 'Integrale' }, example: '∫f(x)dx', htmlCode: '&int;' },
  { symbol: '∂', name: 'Partial derivative', meaning: { en: 'Partial derivative', it: 'Derivata parziale' }, example: '∂f/∂x', htmlCode: '&part;' },
  { symbol: '∇', name: 'Nabla', meaning: { en: 'Gradient / Del', it: 'Gradiente / Nabla' }, example: '∇f', htmlCode: '&nabla;' },
  { symbol: 'Δ', name: 'Delta', meaning: { en: 'Change / Difference', it: 'Variazione / Differenza' }, example: 'Δx = x₁ − x₀', htmlCode: '&Delta;' },
  { symbol: '!', name: 'Factorial', meaning: { en: 'Factorial', it: 'Fattoriale' }, example: '5! = 120' },
  { symbol: '|x|', name: 'Absolute value', meaning: { en: 'Absolute value', it: 'Valore assoluto' }, example: '|−5| = 5' },
  { symbol: '⌊x⌋', name: 'Floor', meaning: { en: 'Floor function', it: 'Funzione pavimento' }, example: '⌊3.7⌋ = 3' },
  { symbol: '⌈x⌉', name: 'Ceiling', meaning: { en: 'Ceiling function', it: 'Funzione soffitto' }, example: '⌈3.2⌉ = 4' },
  { symbol: '∈', name: 'Element of', meaning: { en: 'Is element of', it: 'Appartiene a' }, example: 'x ∈ A', htmlCode: '&isin;' },
  { symbol: '∉', name: 'Not element of', meaning: { en: 'Is not element of', it: 'Non appartiene a' }, example: 'x ∉ A', htmlCode: '&notin;' },
  { symbol: '⊂', name: 'Subset', meaning: { en: 'Subset of', it: 'Sottoinsieme di' }, example: 'A ⊂ B', htmlCode: '&sub;' },
  { symbol: '⊃', name: 'Superset', meaning: { en: 'Superset of', it: 'Sovrainsieme di' }, example: 'B ⊃ A', htmlCode: '&sup;' },
  { symbol: '∪', name: 'Union', meaning: { en: 'Union', it: 'Unione' }, example: 'A ∪ B', htmlCode: '&cup;' },
  { symbol: '∩', name: 'Intersection', meaning: { en: 'Intersection', it: 'Intersezione' }, example: 'A ∩ B', htmlCode: '&cap;' },
  { symbol: '∅', name: 'Empty set', meaning: { en: 'Empty set', it: 'Insieme vuoto' }, example: 'A ∩ B = ∅', htmlCode: '&empty;' },
  { symbol: '∀', name: 'For all', meaning: { en: 'For all', it: 'Per ogni' }, example: '∀x ∈ ℝ', htmlCode: '&forall;' },
  { symbol: '∃', name: 'There exists', meaning: { en: 'There exists', it: 'Esiste' }, example: '∃x : x > 0', htmlCode: '&exist;' },
  { symbol: '∴', name: 'Therefore', meaning: { en: 'Therefore', it: 'Quindi' }, example: 'a = b ∴ b = a', htmlCode: '&there4;' },
  { symbol: '∵', name: 'Because', meaning: { en: 'Because', it: 'Perché' }, example: '∵ a = b' },
  { symbol: '≈', name: 'Approximately', meaning: { en: 'Approximately equal', it: 'Approssimativamente uguale' }, example: 'π ≈ 3.14', htmlCode: '&asymp;' },
  { symbol: '∝', name: 'Proportional', meaning: { en: 'Proportional to', it: 'Proporzionale a' }, example: 'y ∝ x', htmlCode: '&prop;' },
  { symbol: '⊥', name: 'Perpendicular', meaning: { en: 'Perpendicular / Orthogonal', it: 'Perpendicolare / Ortogonale' }, example: 'a ⊥ b', htmlCode: '&perp;' },
  { symbol: '∠', name: 'Angle', meaning: { en: 'Angle', it: 'Angolo' }, example: '∠ABC = 90°', htmlCode: '&ang;' },
  { symbol: '°', name: 'Degree', meaning: { en: 'Degree', it: 'Grado' }, example: '360°', htmlCode: '&deg;' },
  { symbol: '′', name: 'Prime / Minute', meaning: { en: 'Arc minute / Derivative', it: 'Primo d\'arco / Derivata' }, example: "f'(x)", htmlCode: '&prime;' },
  { symbol: '″', name: 'Double prime', meaning: { en: 'Arc second / Second derivative', it: 'Secondo d\'arco' }, example: "f''(x)", htmlCode: '&Prime;' },
]

export interface GreekLetter {
  upper: string
  lower: string
  name: string
  nameIt: string
  pronunciation: string
  commonUse: string
  htmlUpper: string
  htmlLower: string
}

export const GREEK_ALPHABET: GreekLetter[] = [
  { upper: 'Α', lower: 'α', name: 'Alpha', nameIt: 'Alfa', pronunciation: 'AL-fuh', commonUse: 'Angles, coefficients, significance level', htmlUpper: '&Alpha;', htmlLower: '&alpha;' },
  { upper: 'Β', lower: 'β', name: 'Beta', nameIt: 'Beta', pronunciation: 'BAY-tuh', commonUse: 'Angles, beta function, coefficients', htmlUpper: '&Beta;', htmlLower: '&beta;' },
  { upper: 'Γ', lower: 'γ', name: 'Gamma', nameIt: 'Gamma', pronunciation: 'GAM-uh', commonUse: 'Gamma function, Euler constant', htmlUpper: '&Gamma;', htmlLower: '&gamma;' },
  { upper: 'Δ', lower: 'δ', name: 'Delta', nameIt: 'Delta', pronunciation: 'DEL-tuh', commonUse: 'Change, difference, discriminant', htmlUpper: '&Delta;', htmlLower: '&delta;' },
  { upper: 'Ε', lower: 'ε', name: 'Epsilon', nameIt: 'Epsilon', pronunciation: 'EP-sil-on', commonUse: 'Small positive quantity, permittivity', htmlUpper: '&Epsilon;', htmlLower: '&epsilon;' },
  { upper: 'Ζ', lower: 'ζ', name: 'Zeta', nameIt: 'Zeta', pronunciation: 'ZAY-tuh', commonUse: 'Riemann zeta function, damping ratio', htmlUpper: '&Zeta;', htmlLower: '&zeta;' },
  { upper: 'Η', lower: 'η', name: 'Eta', nameIt: 'Eta', pronunciation: 'AY-tuh', commonUse: 'Efficiency, viscosity', htmlUpper: '&Eta;', htmlLower: '&eta;' },
  { upper: 'Θ', lower: 'θ', name: 'Theta', nameIt: 'Theta', pronunciation: 'THAY-tuh', commonUse: 'Angles, temperature', htmlUpper: '&Theta;', htmlLower: '&theta;' },
  { upper: 'Ι', lower: 'ι', name: 'Iota', nameIt: 'Iota', pronunciation: 'eye-OH-tuh', commonUse: 'Index, inclusion map', htmlUpper: '&Iota;', htmlLower: '&iota;' },
  { upper: 'Κ', lower: 'κ', name: 'Kappa', nameIt: 'Kappa', pronunciation: 'KAP-uh', commonUse: 'Curvature, condition number', htmlUpper: '&Kappa;', htmlLower: '&kappa;' },
  { upper: 'Λ', lower: 'λ', name: 'Lambda', nameIt: 'Lambda', pronunciation: 'LAM-duh', commonUse: 'Wavelength, eigenvalues, decay constant', htmlUpper: '&Lambda;', htmlLower: '&lambda;' },
  { upper: 'Μ', lower: 'μ', name: 'Mu', nameIt: 'Mi', pronunciation: 'MYOO', commonUse: 'Mean, micro prefix, friction coefficient', htmlUpper: '&Mu;', htmlLower: '&mu;' },
  { upper: 'Ν', lower: 'ν', name: 'Nu', nameIt: 'Ni', pronunciation: 'NOO', commonUse: 'Frequency, degrees of freedom', htmlUpper: '&Nu;', htmlLower: '&nu;' },
  { upper: 'Ξ', lower: 'ξ', name: 'Xi', nameIt: 'Xi', pronunciation: 'KSEE', commonUse: 'Random variable', htmlUpper: '&Xi;', htmlLower: '&xi;' },
  { upper: 'Ο', lower: 'ο', name: 'Omicron', nameIt: 'Omicron', pronunciation: 'OM-ih-kron', commonUse: 'Big-O notation (variant)', htmlUpper: '&Omicron;', htmlLower: '&omicron;' },
  { upper: 'Π', lower: 'π', name: 'Pi', nameIt: 'Pi', pronunciation: 'PIE', commonUse: 'Pi constant (3.14159...), product', htmlUpper: '&Pi;', htmlLower: '&pi;' },
  { upper: 'Ρ', lower: 'ρ', name: 'Rho', nameIt: 'Rho', pronunciation: 'ROH', commonUse: 'Density, correlation coefficient', htmlUpper: '&Rho;', htmlLower: '&rho;' },
  { upper: 'Σ', lower: 'σ', name: 'Sigma', nameIt: 'Sigma', pronunciation: 'SIG-muh', commonUse: 'Sum, standard deviation, stress', htmlUpper: '&Sigma;', htmlLower: '&sigma;' },
  { upper: 'Τ', lower: 'τ', name: 'Tau', nameIt: 'Tau', pronunciation: 'TAW', commonUse: 'Torque, time constant, shear stress', htmlUpper: '&Tau;', htmlLower: '&tau;' },
  { upper: 'Υ', lower: 'υ', name: 'Upsilon', nameIt: 'Upsilon', pronunciation: 'OOP-sil-on', commonUse: 'Frequency', htmlUpper: '&Upsilon;', htmlLower: '&upsilon;' },
  { upper: 'Φ', lower: 'φ', name: 'Phi', nameIt: 'Fi', pronunciation: 'FEE', commonUse: 'Golden ratio, magnetic flux, angle', htmlUpper: '&Phi;', htmlLower: '&phi;' },
  { upper: 'Χ', lower: 'χ', name: 'Chi', nameIt: 'Chi', pronunciation: 'KAI', commonUse: 'Chi-squared test, susceptibility', htmlUpper: '&Chi;', htmlLower: '&chi;' },
  { upper: 'Ψ', lower: 'ψ', name: 'Psi', nameIt: 'Psi', pronunciation: 'SIGH', commonUse: 'Wave function, angles', htmlUpper: '&Psi;', htmlLower: '&psi;' },
  { upper: 'Ω', lower: 'ω', name: 'Omega', nameIt: 'Omega', pronunciation: 'oh-MAY-guh', commonUse: 'Ohm, angular velocity, last element', htmlUpper: '&Omega;', htmlLower: '&omega;' },
]

export function generateMultiplicationTable(max: number = 12): number[][] {
  return Array.from({ length: max }, (_, i) =>
    Array.from({ length: max }, (_, j) => (i + 1) * (j + 1))
  )
}

export function toRomanNumeral(num: number): string {
  if (num < 1 || num > 3999) return ''
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let result = ''
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i]
      num -= values[i]
    }
  }
  return result
}

export function generateRomanNumeralTable(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => ({
    arabic: from + i,
    roman: toRomanNumeral(from + i),
  }))
}

export function toBinary(num: number): string {
  return num.toString(2)
}

export function toHex(num: number): string {
  return num.toString(16).toUpperCase()
}

export function generateNumberSystemTable(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => {
    const n = from + i
    return { decimal: n, binary: toBinary(n), hex: toHex(n) }
  })
}

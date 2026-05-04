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

// Squares and cubes
export function generateSquaresCubesTable(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => {
    const n = from + i
    return { n, square: n * n, cube: n * n * n }
  })
}

// Prime numbers using Sieve of Eratosthenes
export function getPrimesUpTo(max: number): number[] {
  const sieve = new Array(max + 1).fill(true)
  sieve[0] = sieve[1] = false
  for (let i = 2; i * i <= max; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= max; j += i) {
        sieve[j] = false
      }
    }
  }
  return sieve.reduce<number[]>((primes, isPrime, num) => {
    if (isPrime) primes.push(num)
    return primes
  }, [])
}

export function isPrime(n: number): boolean {
  if (n < 2) return false
  if (n < 4) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}

// Powers of 2
export function generatePowersOf2(maxExponent: number = 40) {
  return Array.from({ length: maxExponent + 1 }, (_, i) => ({
    exponent: i,
    value: Math.pow(2, i),
  }))
}

// Logarithm table (base 10)
export function generateLog10Table(from: number, to: number, step: number = 1) {
  const entries: { n: number; log10: string; ln: string }[] = []
  for (let n = from; n <= to; n += step) {
    entries.push({
      n,
      log10: Math.log10(n).toFixed(6),
      ln: Math.log(n).toFixed(6),
    })
  }
  return entries
}

// Factorial
export function factorial(n: number): bigint {
  if (n <= 1) return 1n
  let result = 1n
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i
  }
  return result
}

export function generateFactorialTable(max: number = 25) {
  return Array.from({ length: max + 1 }, (_, i) => ({
    n: i,
    factorial: factorial(i).toString(),
  }))
}

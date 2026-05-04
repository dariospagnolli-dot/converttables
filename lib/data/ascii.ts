export interface AsciiEntry {
  dec: number
  hex: string
  oct: string
  char: string
  description: string
}

const CONTROL_NAMES: Record<number, string> = {
  0: 'NUL (Null)', 1: 'SOH (Start of Heading)', 2: 'STX (Start of Text)', 3: 'ETX (End of Text)',
  4: 'EOT (End of Transmission)', 5: 'ENQ (Enquiry)', 6: 'ACK (Acknowledge)', 7: 'BEL (Bell)',
  8: 'BS (Backspace)', 9: 'HT (Horizontal Tab)', 10: 'LF (Line Feed)', 11: 'VT (Vertical Tab)',
  12: 'FF (Form Feed)', 13: 'CR (Carriage Return)', 14: 'SO (Shift Out)', 15: 'SI (Shift In)',
  16: 'DLE (Data Link Escape)', 17: 'DC1 (Device Control 1)', 18: 'DC2 (Device Control 2)',
  19: 'DC3 (Device Control 3)', 20: 'DC4 (Device Control 4)', 21: 'NAK (Negative Acknowledge)',
  22: 'SYN (Synchronous Idle)', 23: 'ETB (End of Transmission Block)', 24: 'CAN (Cancel)',
  25: 'EM (End of Medium)', 26: 'SUB (Substitute)', 27: 'ESC (Escape)',
  28: 'FS (File Separator)', 29: 'GS (Group Separator)', 30: 'RS (Record Separator)',
  31: 'US (Unit Separator)', 32: 'Space', 127: 'DEL (Delete)',
}

export function generateAsciiTable(): AsciiEntry[] {
  return Array.from({ length: 128 }, (_, i) => ({
    dec: i,
    hex: i.toString(16).toUpperCase().padStart(2, '0'),
    oct: i.toString(8).padStart(3, '0'),
    char: i < 32 || i === 127 ? '' : String.fromCharCode(i),
    description: CONTROL_NAMES[i] || String.fromCharCode(i),
  }))
}

export function generateExtendedAsciiTable(): AsciiEntry[] {
  return Array.from({ length: 128 }, (_, i) => {
    const code = i + 128
    return {
      dec: code,
      hex: code.toString(16).toUpperCase().padStart(2, '0'),
      oct: code.toString(8).padStart(3, '0'),
      char: String.fromCharCode(code),
      description: String.fromCharCode(code),
    }
  })
}

import type { Locale } from '@/lib/i18n/config'

export interface ColorPage {
  slug: string
  name: Record<Locale, string>
  hex: string
  rgb: [number, number, number]
  shades: { name: string; hex: string }[]
}

export const COLOR_PAGES: ColorPage[] = [
  {
    slug: 'red', name: { en: 'Red', it: 'Rosso', de: 'Rot', fr: 'Rouge', es: 'Rojo' }, hex: '#FF0000', rgb: [255, 0, 0],
    shades: [
      { name: 'Light Salmon', hex: '#FFA07A' }, { name: 'Salmon', hex: '#FA8072' }, { name: 'Dark Salmon', hex: '#E9967A' },
      { name: 'Light Coral', hex: '#F08080' }, { name: 'Indian Red', hex: '#CD5C5C' }, { name: 'Crimson', hex: '#DC143C' },
      { name: 'Fire Brick', hex: '#B22222' }, { name: 'Red', hex: '#FF0000' }, { name: 'Dark Red', hex: '#8B0000' },
    ],
  },
  {
    slug: 'blue', name: { en: 'Blue', it: 'Blu', de: 'Blau', fr: 'Bleu', es: 'Azul' }, hex: '#0000FF', rgb: [0, 0, 255],
    shades: [
      { name: 'Light Steel Blue', hex: '#B0C4DE' }, { name: 'Powder Blue', hex: '#B0E0E6' }, { name: 'Light Blue', hex: '#ADD8E6' },
      { name: 'Sky Blue', hex: '#87CEEB' }, { name: 'Cornflower Blue', hex: '#6495ED' }, { name: 'Dodger Blue', hex: '#1E90FF' },
      { name: 'Royal Blue', hex: '#4169E1' }, { name: 'Blue', hex: '#0000FF' }, { name: 'Medium Blue', hex: '#0000CD' },
      { name: 'Dark Blue', hex: '#00008B' }, { name: 'Navy', hex: '#000080' }, { name: 'Midnight Blue', hex: '#191970' },
    ],
  },
  {
    slug: 'green', name: { en: 'Green', it: 'Verde', de: 'Grün', fr: 'Vert', es: 'Verde' }, hex: '#008000', rgb: [0, 128, 0],
    shades: [
      { name: 'Honeydew', hex: '#F0FFF0' }, { name: 'Pale Green', hex: '#98FB98' }, { name: 'Light Green', hex: '#90EE90' },
      { name: 'Lime Green', hex: '#32CD32' }, { name: 'Lime', hex: '#00FF00' }, { name: 'Green', hex: '#008000' },
      { name: 'Forest Green', hex: '#228B22' }, { name: 'Sea Green', hex: '#2E8B57' }, { name: 'Dark Green', hex: '#006400' },
      { name: 'Olive', hex: '#808000' }, { name: 'Dark Olive Green', hex: '#556B2F' },
    ],
  },
  {
    slug: 'yellow', name: { en: 'Yellow', it: 'Giallo', de: 'Gelb', fr: 'Jaune', es: 'Amarillo' }, hex: '#FFFF00', rgb: [255, 255, 0],
    shades: [
      { name: 'Light Yellow', hex: '#FFFFE0' }, { name: 'Lemon Chiffon', hex: '#FFFACD' }, { name: 'Khaki', hex: '#F0E68C' },
      { name: 'Gold', hex: '#FFD700' }, { name: 'Yellow', hex: '#FFFF00' }, { name: 'Dark Khaki', hex: '#BDB76B' },
      { name: 'Goldenrod', hex: '#DAA520' }, { name: 'Dark Goldenrod', hex: '#B8860B' },
    ],
  },
  {
    slug: 'orange', name: { en: 'Orange', it: 'Arancione', de: 'Orange', fr: 'Orange', es: 'Naranja' }, hex: '#FFA500', rgb: [255, 165, 0],
    shades: [
      { name: 'Peach Puff', hex: '#FFDAB9' }, { name: 'Moccasin', hex: '#FFE4B5' }, { name: 'Papaya Whip', hex: '#FFEFD5' },
      { name: 'Light Salmon', hex: '#FFA07A' }, { name: 'Orange', hex: '#FFA500' }, { name: 'Dark Orange', hex: '#FF8C00' },
      { name: 'Coral', hex: '#FF7F50' }, { name: 'Tomato', hex: '#FF6347' }, { name: 'Orange Red', hex: '#FF4500' },
    ],
  },
  {
    slug: 'purple', name: { en: 'Purple', it: 'Viola', de: 'Lila', fr: 'Violet', es: 'Morado' }, hex: '#800080', rgb: [128, 0, 128],
    shades: [
      { name: 'Lavender', hex: '#E6E6FA' }, { name: 'Thistle', hex: '#D8BFD8' }, { name: 'Plum', hex: '#DDA0DD' },
      { name: 'Violet', hex: '#EE82EE' }, { name: 'Orchid', hex: '#DA70D6' }, { name: 'Medium Orchid', hex: '#BA55D3' },
      { name: 'Medium Purple', hex: '#9370DB' }, { name: 'Blue Violet', hex: '#8A2BE2' }, { name: 'Dark Violet', hex: '#9400D3' },
      { name: 'Dark Orchid', hex: '#9932CC' }, { name: 'Dark Magenta', hex: '#8B008B' }, { name: 'Purple', hex: '#800080' },
      { name: 'Indigo', hex: '#4B0082' },
    ],
  },
  {
    slug: 'pink', name: { en: 'Pink', it: 'Rosa', de: 'Rosa', fr: 'Rose', es: 'Rosa' }, hex: '#FFC0CB', rgb: [255, 192, 203],
    shades: [
      { name: 'Lavender Blush', hex: '#FFF0F5' }, { name: 'Misty Rose', hex: '#FFE4E1' }, { name: 'Pink', hex: '#FFC0CB' },
      { name: 'Light Pink', hex: '#FFB6C1' }, { name: 'Hot Pink', hex: '#FF69B4' }, { name: 'Deep Pink', hex: '#FF1493' },
      { name: 'Medium Violet Red', hex: '#C71585' }, { name: 'Pale Violet Red', hex: '#DB7093' },
    ],
  },
  {
    slug: 'brown', name: { en: 'Brown', it: 'Marrone', de: 'Braun', fr: 'Marron', es: 'Marrón' }, hex: '#A52A2A', rgb: [165, 42, 42],
    shades: [
      { name: 'Cornsilk', hex: '#FFF8DC' }, { name: 'Blanched Almond', hex: '#FFEBCD' }, { name: 'Bisque', hex: '#FFE4C4' },
      { name: 'Navajo White', hex: '#FFDEAD' }, { name: 'Wheat', hex: '#F5DEB3' }, { name: 'Burly Wood', hex: '#DEB887' },
      { name: 'Tan', hex: '#D2B48C' }, { name: 'Sandy Brown', hex: '#F4A460' }, { name: 'Chocolate', hex: '#D2691E' },
      { name: 'Peru', hex: '#CD853F' }, { name: 'Sienna', hex: '#A0522D' }, { name: 'Brown', hex: '#A52A2A' },
      { name: 'Saddle Brown', hex: '#8B4513' }, { name: 'Maroon', hex: '#800000' },
    ],
  },
  {
    slug: 'gray', name: { en: 'Gray', it: 'Grigio', de: 'Grau', fr: 'Gris', es: 'Gris' }, hex: '#808080', rgb: [128, 128, 128],
    shades: [
      { name: 'White', hex: '#FFFFFF' }, { name: 'White Smoke', hex: '#F5F5F5' }, { name: 'Gainsboro', hex: '#DCDCDC' },
      { name: 'Light Gray', hex: '#D3D3D3' }, { name: 'Silver', hex: '#C0C0C0' }, { name: 'Dark Gray', hex: '#A9A9A9' },
      { name: 'Gray', hex: '#808080' }, { name: 'Dim Gray', hex: '#696969' }, { name: 'Light Slate Gray', hex: '#778899' },
      { name: 'Slate Gray', hex: '#708090' }, { name: 'Dark Slate Gray', hex: '#2F4F4F' }, { name: 'Black', hex: '#000000' },
    ],
  },
  {
    slug: 'white', name: { en: 'White', it: 'Bianco', de: 'Weiß', fr: 'Blanc', es: 'Blanco' }, hex: '#FFFFFF', rgb: [255, 255, 255],
    shades: [
      { name: 'White', hex: '#FFFFFF' }, { name: 'Snow', hex: '#FFFAFA' }, { name: 'Honeydew', hex: '#F0FFF0' },
      { name: 'Mint Cream', hex: '#F5FFFA' }, { name: 'Azure', hex: '#F0FFFF' }, { name: 'Alice Blue', hex: '#F0F8FF' },
      { name: 'Ghost White', hex: '#F8F8FF' }, { name: 'White Smoke', hex: '#F5F5F5' }, { name: 'Seashell', hex: '#FFF5EE' },
      { name: 'Beige', hex: '#F5F5DC' }, { name: 'Old Lace', hex: '#FDF5E6' }, { name: 'Floral White', hex: '#FFFAF0' },
      { name: 'Ivory', hex: '#FFFFF0' }, { name: 'Antique White', hex: '#FAEBD7' }, { name: 'Linen', hex: '#FAF0E6' },
    ],
  },
  {
    slug: 'black', name: { en: 'Black', it: 'Nero', de: 'Schwarz', fr: 'Noir', es: 'Negro' }, hex: '#000000', rgb: [0, 0, 0],
    shades: [
      { name: 'Black', hex: '#000000' }, { name: 'Dark Slate Gray', hex: '#2F4F4F' }, { name: 'Dim Gray', hex: '#696969' },
      { name: '#111111', hex: '#111111' }, { name: '#1A1A1A', hex: '#1A1A1A' }, { name: '#222222', hex: '#222222' },
      { name: '#2C2C2C', hex: '#2C2C2C' }, { name: '#333333', hex: '#333333' }, { name: '#3D3D3D', hex: '#3D3D3D' },
    ],
  },
  {
    slug: 'cyan', name: { en: 'Cyan', it: 'Ciano', de: 'Cyan', fr: 'Cyan', es: 'Cian' }, hex: '#00FFFF', rgb: [0, 255, 255],
    shades: [
      { name: 'Light Cyan', hex: '#E0FFFF' }, { name: 'Pale Turquoise', hex: '#AFEEEE' }, { name: 'Aquamarine', hex: '#7FFFD4' },
      { name: 'Turquoise', hex: '#40E0D0' }, { name: 'Medium Turquoise', hex: '#48D1CC' }, { name: 'Dark Turquoise', hex: '#00CED1' },
      { name: 'Cyan', hex: '#00FFFF' }, { name: 'Dark Cyan', hex: '#008B8B' }, { name: 'Teal', hex: '#008080' },
    ],
  },
]

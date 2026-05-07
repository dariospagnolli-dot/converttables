import type { Locale } from '@/lib/i18n/config'

export interface Ingredient {
  id: string
  slug: string
  density_g_per_ml: number
  names: Record<Locale, string>
  category: 'flour' | 'sugar' | 'liquid' | 'fat' | 'grain' | 'dairy' | 'nut' | 'spice' | 'other'
}

export const INGREDIENTS: Ingredient[] = [
  // FLOURS
  { id: 'all-purpose-flour', slug: 'flour', density_g_per_ml: 0.529, names: { en: 'All-Purpose Flour', it: 'Farina 00', de: 'Weizenmehl Type 405', fr: 'Farine tout usage', es: 'Harina todo uso' }, category: 'flour' },
  { id: 'bread-flour', slug: 'bread-flour', density_g_per_ml: 0.550, names: { en: 'Bread Flour', it: 'Farina Manitoba', de: 'Brotmehl', fr: 'Farine à pain', es: 'Harina de fuerza' }, category: 'flour' },
  { id: 'cake-flour', slug: 'cake-flour', density_g_per_ml: 0.488, names: { en: 'Cake Flour', it: 'Farina per dolci', de: 'Kuchenmehl', fr: 'Farine à gâteau', es: 'Harina para repostería' }, category: 'flour' },
  { id: 'whole-wheat-flour', slug: 'whole-wheat-flour', density_g_per_ml: 0.512, names: { en: 'Whole Wheat Flour', it: 'Farina integrale', de: 'Vollkornmehl', fr: 'Farine complète', es: 'Harina integral' }, category: 'flour' },
  { id: 'almond-flour', slug: 'almond-flour', density_g_per_ml: 0.400, names: { en: 'Almond Flour', it: 'Farina di mandorle', de: 'Mandelmehl', fr: 'Farine d\'amande', es: 'Harina de almendra' }, category: 'flour' },
  { id: 'coconut-flour', slug: 'coconut-flour', density_g_per_ml: 0.500, names: { en: 'Coconut Flour', it: 'Farina di cocco', de: 'Kokosmehl', fr: 'Farine de coco', es: 'Harina de coco' }, category: 'flour' },
  { id: 'rye-flour', slug: 'rye-flour', density_g_per_ml: 0.520, names: { en: 'Rye Flour', it: 'Farina di segale', de: 'Roggenmehl', fr: 'Farine de seigle', es: 'Harina de centeno' }, category: 'flour' },
  { id: 'semolina', slug: 'semolina', density_g_per_ml: 0.601, names: { en: 'Semolina', it: 'Semola', de: 'Hartweizengrieß', fr: 'Semoule', es: 'Sémola' }, category: 'flour' },
  { id: 'cornmeal', slug: 'cornmeal', density_g_per_ml: 0.640, names: { en: 'Cornmeal', it: 'Farina di mais', de: 'Maismehl', fr: 'Farine de maïs', es: 'Harina de maíz' }, category: 'flour' },

  // SUGARS
  { id: 'granulated-sugar', slug: 'sugar', density_g_per_ml: 0.845, names: { en: 'Granulated Sugar', it: 'Zucchero semolato', de: 'Kristallzucker', fr: 'Sucre en poudre', es: 'Azúcar granulado' }, category: 'sugar' },
  { id: 'powdered-sugar', slug: 'powdered-sugar', density_g_per_ml: 0.560, names: { en: 'Powdered Sugar', it: 'Zucchero a velo', de: 'Puderzucker', fr: 'Sucre glace', es: 'Azúcar glas' }, category: 'sugar' },
  { id: 'brown-sugar', slug: 'brown-sugar', density_g_per_ml: 0.830, names: { en: 'Brown Sugar (packed)', it: 'Zucchero di canna (compatto)', de: 'Brauner Zucker (gepresst)', fr: 'Cassonade (tassée)', es: 'Azúcar moreno (compacto)' }, category: 'sugar' },
  { id: 'caster-sugar', slug: 'caster-sugar', density_g_per_ml: 0.800, names: { en: 'Caster Sugar', it: 'Zucchero fino', de: 'Feiner Zucker', fr: 'Sucre semoule', es: 'Azúcar extrafino' }, category: 'sugar' },
  { id: 'demerara-sugar', slug: 'demerara-sugar', density_g_per_ml: 0.880, names: { en: 'Demerara Sugar', it: 'Zucchero Demerara', de: 'Demerara-Zucker', fr: 'Sucre Demerara', es: 'Azúcar Demerara' }, category: 'sugar' },

  // LIQUIDS
  { id: 'water', slug: 'water', density_g_per_ml: 1.000, names: { en: 'Water', it: 'Acqua', de: 'Wasser', fr: 'Eau', es: 'Agua' }, category: 'liquid' },
  { id: 'milk', slug: 'milk', density_g_per_ml: 1.030, names: { en: 'Milk', it: 'Latte', de: 'Milch', fr: 'Lait', es: 'Leche' }, category: 'liquid' },
  { id: 'olive-oil', slug: 'olive-oil', density_g_per_ml: 0.914, names: { en: 'Olive Oil', it: 'Olio d\'oliva', de: 'Olivenöl', fr: 'Huile d\'olive', es: 'Aceite de oliva' }, category: 'liquid' },
  { id: 'vegetable-oil', slug: 'vegetable-oil', density_g_per_ml: 0.920, names: { en: 'Vegetable Oil', it: 'Olio di semi', de: 'Pflanzenöl', fr: 'Huile végétale', es: 'Aceite vegetal' }, category: 'liquid' },
  { id: 'coconut-oil', slug: 'coconut-oil', density_g_per_ml: 0.925, names: { en: 'Coconut Oil', it: 'Olio di cocco', de: 'Kokosöl', fr: 'Huile de coco', es: 'Aceite de coco' }, category: 'liquid' },
  { id: 'honey', slug: 'honey', density_g_per_ml: 1.420, names: { en: 'Honey', it: 'Miele', de: 'Honig', fr: 'Miel', es: 'Miel' }, category: 'liquid' },
  { id: 'maple-syrup', slug: 'maple-syrup', density_g_per_ml: 1.320, names: { en: 'Maple Syrup', it: 'Sciroppo d\'acero', de: 'Ahornsirup', fr: 'Sirop d\'érable', es: 'Sirope de arce' }, category: 'liquid' },
  { id: 'corn-syrup', slug: 'corn-syrup', density_g_per_ml: 1.380, names: { en: 'Corn Syrup', it: 'Sciroppo di mais', de: 'Maissirup', fr: 'Sirop de maïs', es: 'Sirope de maíz' }, category: 'liquid' },
  { id: 'condensed-milk', slug: 'condensed-milk', density_g_per_ml: 1.330, names: { en: 'Condensed Milk', it: 'Latte condensato', de: 'Kondensmilch', fr: 'Lait concentré', es: 'Leche condensada' }, category: 'liquid' },

  // FATS & DAIRY
  { id: 'butter', slug: 'butter', density_g_per_ml: 0.911, names: { en: 'Butter', it: 'Burro', de: 'Butter', fr: 'Beurre', es: 'Mantequilla' }, category: 'fat' },
  { id: 'margarine', slug: 'margarine', density_g_per_ml: 0.900, names: { en: 'Margarine', it: 'Margarina', de: 'Margarine', fr: 'Margarine', es: 'Margarina' }, category: 'fat' },
  { id: 'lard', slug: 'lard', density_g_per_ml: 0.920, names: { en: 'Lard', it: 'Strutto', de: 'Schmalz', fr: 'Saindoux', es: 'Manteca de cerdo' }, category: 'fat' },
  { id: 'cream-cheese', slug: 'cream-cheese', density_g_per_ml: 0.960, names: { en: 'Cream Cheese', it: 'Formaggio cremoso', de: 'Frischkäse', fr: 'Fromage à la crème', es: 'Queso crema' }, category: 'dairy' },
  { id: 'heavy-cream', slug: 'heavy-cream', density_g_per_ml: 0.994, names: { en: 'Heavy Cream', it: 'Panna da montare', de: 'Schlagsahne', fr: 'Crème épaisse', es: 'Nata para montar' }, category: 'dairy' },
  { id: 'sour-cream', slug: 'sour-cream', density_g_per_ml: 0.960, names: { en: 'Sour Cream', it: 'Panna acida', de: 'Saure Sahne', fr: 'Crème aigre', es: 'Crema agria' }, category: 'dairy' },
  { id: 'yogurt', slug: 'yogurt', density_g_per_ml: 1.030, names: { en: 'Yogurt', it: 'Yogurt', de: 'Joghurt', fr: 'Yaourt', es: 'Yogur' }, category: 'dairy' },
  { id: 'ricotta', slug: 'ricotta', density_g_per_ml: 1.020, names: { en: 'Ricotta', it: 'Ricotta', de: 'Ricotta', fr: 'Ricotta', es: 'Ricotta' }, category: 'dairy' },
  { id: 'parmesan-grated', slug: 'parmesan', density_g_per_ml: 0.440, names: { en: 'Parmesan (grated)', it: 'Parmigiano (grattugiato)', de: 'Parmesan (gerieben)', fr: 'Parmesan (râpé)', es: 'Parmesano (rallado)' }, category: 'dairy' },

  // GRAINS & SEEDS
  { id: 'rice', slug: 'rice', density_g_per_ml: 0.817, names: { en: 'White Rice (uncooked)', it: 'Riso bianco (crudo)', de: 'Weißer Reis (ungekocht)', fr: 'Riz blanc (cru)', es: 'Arroz blanco (crudo)' }, category: 'grain' },
  { id: 'brown-rice', slug: 'brown-rice', density_g_per_ml: 0.800, names: { en: 'Brown Rice (uncooked)', it: 'Riso integrale (crudo)', de: 'Vollkornreis (ungekocht)', fr: 'Riz complet (cru)', es: 'Arroz integral (crudo)' }, category: 'grain' },
  { id: 'oats', slug: 'oats', density_g_per_ml: 0.340, names: { en: 'Rolled Oats', it: 'Fiocchi d\'avena', de: 'Haferflocken', fr: 'Flocons d\'avoine', es: 'Copos de avena' }, category: 'grain' },
  { id: 'quinoa', slug: 'quinoa', density_g_per_ml: 0.720, names: { en: 'Quinoa', it: 'Quinoa', de: 'Quinoa', fr: 'Quinoa', es: 'Quinoa' }, category: 'grain' },
  { id: 'couscous', slug: 'couscous', density_g_per_ml: 0.630, names: { en: 'Couscous', it: 'Cous cous', de: 'Couscous', fr: 'Couscous', es: 'Cuscús' }, category: 'grain' },
  { id: 'breadcrumbs', slug: 'breadcrumbs', density_g_per_ml: 0.450, names: { en: 'Breadcrumbs', it: 'Pangrattato', de: 'Semmelbrösel', fr: 'Chapelure', es: 'Pan rallado' }, category: 'grain' },
  { id: 'chia-seeds', slug: 'chia-seeds', density_g_per_ml: 0.720, names: { en: 'Chia Seeds', it: 'Semi di chia', de: 'Chiasamen', fr: 'Graines de chia', es: 'Semillas de chía' }, category: 'grain' },
  { id: 'flaxseed', slug: 'flaxseed', density_g_per_ml: 0.530, names: { en: 'Flaxseed (ground)', it: 'Semi di lino (macinati)', de: 'Leinsamen (gemahlen)', fr: 'Graines de lin (moulues)', es: 'Linaza (molida)' }, category: 'grain' },

  // NUTS
  { id: 'peanut-butter', slug: 'peanut-butter', density_g_per_ml: 1.090, names: { en: 'Peanut Butter', it: 'Burro di arachidi', de: 'Erdnussbutter', fr: 'Beurre de cacahuète', es: 'Mantequilla de cacahuete' }, category: 'nut' },
  { id: 'walnuts-chopped', slug: 'walnuts', density_g_per_ml: 0.470, names: { en: 'Walnuts (chopped)', it: 'Noci (tritate)', de: 'Walnüsse (gehackt)', fr: 'Noix (hachées)', es: 'Nueces (picadas)' }, category: 'nut' },
  { id: 'almonds-sliced', slug: 'almonds', density_g_per_ml: 0.370, names: { en: 'Almonds (sliced)', it: 'Mandorle (a fette)', de: 'Mandeln (gehobelt)', fr: 'Amandes (effilées)', es: 'Almendras (laminadas)' }, category: 'nut' },
  { id: 'pecans-chopped', slug: 'pecans', density_g_per_ml: 0.450, names: { en: 'Pecans (chopped)', it: 'Noci pecan (tritate)', de: 'Pekannüsse (gehackt)', fr: 'Noix de pécan (hachées)', es: 'Nueces pecanas (picadas)' }, category: 'nut' },
  { id: 'hazelnuts', slug: 'hazelnuts', density_g_per_ml: 0.470, names: { en: 'Hazelnuts (whole)', it: 'Nocciole (intere)', de: 'Haselnüsse (ganz)', fr: 'Noisettes (entières)', es: 'Avellanas (enteras)' }, category: 'nut' },
  { id: 'coconut-shredded', slug: 'coconut-shredded', density_g_per_ml: 0.340, names: { en: 'Coconut (shredded)', it: 'Cocco (grattugiato)', de: 'Kokosraspeln', fr: 'Noix de coco (râpée)', es: 'Coco (rallado)' }, category: 'nut' },

  // SPICES & LEAVENING
  { id: 'salt', slug: 'salt', density_g_per_ml: 1.217, names: { en: 'Salt', it: 'Sale', de: 'Salz', fr: 'Sel', es: 'Sal' }, category: 'spice' },
  { id: 'baking-powder', slug: 'baking-powder', density_g_per_ml: 0.900, names: { en: 'Baking Powder', it: 'Lievito in polvere', de: 'Backpulver', fr: 'Levure chimique', es: 'Polvo de hornear' }, category: 'spice' },
  { id: 'baking-soda', slug: 'baking-soda', density_g_per_ml: 0.960, names: { en: 'Baking Soda', it: 'Bicarbonato', de: 'Natron', fr: 'Bicarbonate de soude', es: 'Bicarbonato de sodio' }, category: 'spice' },
  { id: 'cinnamon', slug: 'cinnamon', density_g_per_ml: 0.560, names: { en: 'Cinnamon (ground)', it: 'Cannella (in polvere)', de: 'Zimt (gemahlen)', fr: 'Cannelle (moulue)', es: 'Canela (molida)' }, category: 'spice' },
  { id: 'nutmeg', slug: 'nutmeg', density_g_per_ml: 0.530, names: { en: 'Nutmeg (ground)', it: 'Noce moscata (in polvere)', de: 'Muskatnuss (gemahlen)', fr: 'Muscade (moulue)', es: 'Nuez moscada (molida)' }, category: 'spice' },

  // SPECIALTY FLOURS
  { id: 'oat-flour', slug: 'oat-flour', density_g_per_ml: 0.430, names: { en: 'Oat Flour', it: 'Farina di avena', de: 'Hafermehl', fr: 'Farine d\'avoine', es: 'Harina de avena' }, category: 'flour' },
  { id: 'buckwheat-flour', slug: 'buckwheat-flour', density_g_per_ml: 0.520, names: { en: 'Buckwheat Flour', it: 'Farina di grano saraceno', de: 'Buchweizenmehl', fr: 'Farine de sarrasin', es: 'Harina de trigo sarraceno' }, category: 'flour' },
  { id: 'spelt-flour', slug: 'spelt-flour', density_g_per_ml: 0.510, names: { en: 'Spelt Flour', it: 'Farina di farro', de: 'Dinkelmehl', fr: 'Farine d\'épeautre', es: 'Harina de espelta' }, category: 'flour' },
  { id: 'teff-flour', slug: 'teff-flour', density_g_per_ml: 0.550, names: { en: 'Teff Flour', it: 'Farina di teff', de: 'Teffmehl', fr: 'Farine de teff', es: 'Harina de teff' }, category: 'flour' },
  { id: 'soy-flour', slug: 'soy-flour', density_g_per_ml: 0.470, names: { en: 'Soy Flour', it: 'Farina di soia', de: 'Sojamel', fr: 'Farine de soja', es: 'Harina de soja' }, category: 'flour' },
  { id: 'chickpea-flour', slug: 'chickpea-flour', density_g_per_ml: 0.480, names: { en: 'Chickpea Flour', it: 'Farina di ceci', de: 'Kichererbsenmehl', fr: 'Farine de pois chiches', es: 'Harina de garbanzos' }, category: 'flour' },

  // OTHER
  { id: 'cocoa-powder', slug: 'cocoa-powder', density_g_per_ml: 0.520, names: { en: 'Cocoa Powder', it: 'Cacao in polvere', de: 'Kakaopulver', fr: 'Cacao en poudre', es: 'Cacao en polvo' }, category: 'other' },
  { id: 'cornstarch', slug: 'cornstarch', density_g_per_ml: 0.540, names: { en: 'Cornstarch', it: 'Amido di mais', de: 'Speisestärke', fr: 'Fécule de maïs', es: 'Maicena' }, category: 'other' },
  { id: 'gelatin', slug: 'gelatin', density_g_per_ml: 0.680, names: { en: 'Gelatin (powder)', it: 'Gelatina (in polvere)', de: 'Gelatine (Pulver)', fr: 'Gélatine (en poudre)', es: 'Gelatina (en polvo)' }, category: 'other' },
  { id: 'chocolate-chips', slug: 'chocolate-chips', density_g_per_ml: 0.680, names: { en: 'Chocolate Chips', it: 'Gocce di cioccolato', de: 'Schokoladenstückchen', fr: 'Pépites de chocolat', es: 'Chips de chocolate' }, category: 'other' },
  { id: 'raisins', slug: 'raisins', density_g_per_ml: 0.670, names: { en: 'Raisins', it: 'Uvetta', de: 'Rosinen', fr: 'Raisins secs', es: 'Pasas' }, category: 'other' },
  { id: 'dried-cranberries', slug: 'dried-cranberries', density_g_per_ml: 0.530, names: { en: 'Dried Cranberries', it: 'Mirtilli rossi essiccati', de: 'Getrocknete Cranberries', fr: 'Canneberges séchées', es: 'Arándanos rojos secos' }, category: 'other' },
  { id: 'poppy-seeds', slug: 'poppy-seeds', density_g_per_ml: 0.610, names: { en: 'Poppy Seeds', it: 'Semi di papavero', de: 'Mohnsamen', fr: 'Graines de pavot', es: 'Semillas de amapola' }, category: 'other' },
  { id: 'protein-powder', slug: 'protein-powder', density_g_per_ml: 0.400, names: { en: 'Protein Powder (whey)', it: 'Proteine in polvere (whey)', de: 'Proteinpulver (Whey)', fr: 'Protéine en poudre (whey)', es: 'Proteína en polvo (whey)' }, category: 'other' },
  { id: 'tapioca-starch', slug: 'tapioca-starch', density_g_per_ml: 0.580, names: { en: 'Tapioca Starch', it: 'Amido di tapioca', de: 'Tapiokastärke', fr: 'Fécule de tapioca', es: 'Almidón de tapioca' }, category: 'other' },
  { id: 'arrowroot-starch', slug: 'arrowroot-starch', density_g_per_ml: 0.670, names: { en: 'Arrowroot Starch', it: 'Amido di maranta', de: 'Pfeilwurzstärke', fr: 'Fécule d\'arrow-root', es: 'Almidón de arrurruz' }, category: 'other' },
  { id: 'potato-starch', slug: 'potato-starch', density_g_per_ml: 0.630, names: { en: 'Potato Starch', it: 'Fecola di patate', de: 'Kartoffelstärke', fr: 'Fécule de pomme de terre', es: 'Fécula de patata' }, category: 'other' },
  { id: 'wheat-germ', slug: 'wheat-germ', density_g_per_ml: 0.380, names: { en: 'Wheat Germ', it: 'Germe di grano', de: 'Weizenkeime', fr: 'Germe de blé', es: 'Germen de trigo' }, category: 'other' },
  { id: 'nutritional-yeast', slug: 'nutritional-yeast', density_g_per_ml: 0.350, names: { en: 'Nutritional Yeast', it: 'Lievito alimentare', de: 'Nährhefe', fr: 'Levure nutritionnelle', es: 'Levadura nutricional' }, category: 'other' },
  { id: 'psyllium-husk', slug: 'psyllium-husk', density_g_per_ml: 0.220, names: { en: 'Psyllium Husk', it: 'Psillio', de: 'Flohsamenschalen', fr: 'Cosse de psyllium', es: 'Cáscara de psyllium' }, category: 'other' },
  { id: 'tahini', slug: 'tahini', density_g_per_ml: 1.060, names: { en: 'Tahini', it: 'Tahini', de: 'Tahini', fr: 'Tahini', es: 'Tahini' }, category: 'other' },
  { id: 'molasses', slug: 'molasses', density_g_per_ml: 1.400, names: { en: 'Molasses', it: 'Melassa', de: 'Melasse', fr: 'Mélasse', es: 'Melaza' }, category: 'liquid' },
  { id: 'golden-syrup', slug: 'golden-syrup', density_g_per_ml: 1.340, names: { en: 'Golden Syrup', it: 'Sciroppo dorato', de: 'Goldsirup', fr: 'Sirop doré', es: 'Sirope dorado' }, category: 'liquid' },
  { id: 'mascarpone', slug: 'mascarpone', density_g_per_ml: 0.980, names: { en: 'Mascarpone', it: 'Mascarpone', de: 'Mascarpone', fr: 'Mascarpone', es: 'Mascarpone' }, category: 'dairy' },
  { id: 'creme-fraiche', slug: 'creme-fraiche', density_g_per_ml: 0.960, names: { en: 'Crème Fraîche', it: 'Crème fraîche', de: 'Crème fraîche', fr: 'Crème fraîche', es: 'Crème fraîche' }, category: 'dairy' },
  { id: 'ground-almonds', slug: 'ground-almonds', density_g_per_ml: 0.420, names: { en: 'Ground Almonds', it: 'Mandorle in polvere', de: 'Gemahlene Mandeln', fr: 'Amandes en poudre', es: 'Almendras molidas' }, category: 'nut' },
  { id: 'hemp-seeds', slug: 'hemp-seeds', density_g_per_ml: 0.680, names: { en: 'Hemp Seeds', it: 'Semi di canapa', de: 'Hanfsamen', fr: 'Graines de chanvre', es: 'Semillas de cáñamo' }, category: 'grain' },
  { id: 'sunflower-seeds', slug: 'sunflower-seeds', density_g_per_ml: 0.550, names: { en: 'Sunflower Seeds', it: 'Semi di girasole', de: 'Sonnenblumenkerne', fr: 'Graines de tournesol', es: 'Semillas de girasol' }, category: 'grain' },
  { id: 'pumpkin-seeds', slug: 'pumpkin-seeds', density_g_per_ml: 0.630, names: { en: 'Pumpkin Seeds', it: 'Semi di zucca', de: 'Kürbiskerne', fr: 'Graines de citrouille', es: 'Semillas de calabaza' }, category: 'grain' },
  { id: 'sesame-seeds', slug: 'sesame-seeds', density_g_per_ml: 0.650, names: { en: 'Sesame Seeds', it: 'Semi di sesamo', de: 'Sesamsamen', fr: 'Graines de sésame', es: 'Semillas de sésamo' }, category: 'grain' },
  { id: 'millet', slug: 'millet', density_g_per_ml: 0.840, names: { en: 'Millet', it: 'Miglio', de: 'Hirse', fr: 'Millet', es: 'Mijo' }, category: 'grain' },
  { id: 'bulgur-wheat', slug: 'bulgur-wheat', density_g_per_ml: 0.750, names: { en: 'Bulgur Wheat', it: 'Bulgur', de: 'Bulgur', fr: 'Boulgour', es: 'Bulgur' }, category: 'grain' },
  { id: 'polenta', slug: 'polenta', density_g_per_ml: 0.700, names: { en: 'Polenta (dry)', it: 'Polenta (secca)', de: 'Polenta (trocken)', fr: 'Polenta (sèche)', es: 'Polenta (seca)' }, category: 'grain' },
  { id: 'cream-of-tartar', slug: 'cream-of-tartar', density_g_per_ml: 0.960, names: { en: 'Cream of Tartar', it: 'Cremor tartaro', de: 'Weinstein', fr: 'Crème de tartre', es: 'Crémor tártaro' }, category: 'spice' },
  { id: 'dried-blueberries', slug: 'dried-blueberries', density_g_per_ml: 0.530, names: { en: 'Dried Blueberries', it: 'Mirtilli essiccati', de: 'Getrocknete Blaubeeren', fr: 'Myrtilles séchées', es: 'Arándanos azules secos' }, category: 'other' },
  { id: 'dried-apricots', slug: 'dried-apricots', density_g_per_ml: 0.620, names: { en: 'Dried Apricots (chopped)', it: 'Albicocche essiccate (tritate)', de: 'Getrocknete Aprikosen (gehackt)', fr: 'Abricots secs (hachés)', es: 'Albaricoques secos (picados)' }, category: 'other' },
  { id: 'lentils', slug: 'lentils', density_g_per_ml: 0.840, names: { en: 'Lentils (dry)', it: 'Lenticchie (secche)', de: 'Linsen (trocken)', fr: 'Lentilles (sèches)', es: 'Lentejas (secas)' }, category: 'grain' },

  // NEW LIQUIDS
  { id: 'buttermilk', slug: 'buttermilk', density_g_per_ml: 1.033, names: { en: 'Buttermilk', it: 'Latticello', de: 'Buttermilch', fr: 'Babeurre', es: 'Suero de leche' }, category: 'liquid' },
  { id: 'almond-milk', slug: 'almond-milk', density_g_per_ml: 1.040, names: { en: 'Almond Milk', it: 'Latte di mandorla', de: 'Mandelmilch', fr: 'Lait d\'amande', es: 'Leche de almendra' }, category: 'liquid' },
  { id: 'oat-milk', slug: 'oat-milk', density_g_per_ml: 1.030, names: { en: 'Oat Milk', it: 'Latte di avena', de: 'Hafermilch', fr: 'Lait d\'avoine', es: 'Leche de avena' }, category: 'liquid' },
  { id: 'soy-milk', slug: 'soy-milk', density_g_per_ml: 1.030, names: { en: 'Soy Milk', it: 'Latte di soia', de: 'Sojamilch', fr: 'Lait de soja', es: 'Leche de soja' }, category: 'liquid' },
  { id: 'coconut-milk-canned', slug: 'coconut-milk', density_g_per_ml: 0.960, names: { en: 'Coconut Milk (canned)', it: 'Latte di cocco (in lattina)', de: 'Kokosmilch (Dose)', fr: 'Lait de coco (en boîte)', es: 'Leche de coco (enlatada)' }, category: 'liquid' },
  { id: 'agave-nectar', slug: 'agave-nectar', density_g_per_ml: 1.350, names: { en: 'Agave Nectar', it: 'Nettare di agave', de: 'Agavendicksaft', fr: 'Nectar d\'agave', es: 'Néctar de agave' }, category: 'liquid' },
  { id: 'apple-cider-vinegar', slug: 'apple-cider-vinegar', density_g_per_ml: 1.010, names: { en: 'Apple Cider Vinegar', it: 'Aceto di mele', de: 'Apfelessig', fr: 'Vinaigre de cidre', es: 'Vinagre de manzana' }, category: 'liquid' },
  { id: 'balsamic-vinegar', slug: 'balsamic-vinegar', density_g_per_ml: 1.100, names: { en: 'Balsamic Vinegar', it: 'Aceto balsamico', de: 'Balsamessig', fr: 'Vinaigre balsamique', es: 'Vinagre balsámico' }, category: 'liquid' },
  { id: 'soy-sauce', slug: 'soy-sauce', density_g_per_ml: 1.190, names: { en: 'Soy Sauce', it: 'Salsa di soia', de: 'Sojasoße', fr: 'Sauce soja', es: 'Salsa de soja' }, category: 'liquid' },
  { id: 'vanilla-extract', slug: 'vanilla-extract', density_g_per_ml: 1.040, names: { en: 'Vanilla Extract', it: 'Estratto di vaniglia', de: 'Vanilleextrakt', fr: 'Extrait de vanille', es: 'Extracto de vainilla' }, category: 'liquid' },

  // NEW FATS
  { id: 'ghee', slug: 'ghee', density_g_per_ml: 0.905, names: { en: 'Ghee', it: 'Ghee', de: 'Ghee', fr: 'Ghee clarifié', es: 'Ghee' }, category: 'fat' },
  { id: 'shortening', slug: 'shortening', density_g_per_ml: 0.880, names: { en: 'Vegetable Shortening', it: 'Strutto vegetale', de: 'Pflanzenfett', fr: 'Graisse végétale', es: 'Manteca vegetal' }, category: 'fat' },
  { id: 'avocado-oil', slug: 'avocado-oil', density_g_per_ml: 0.910, names: { en: 'Avocado Oil', it: 'Olio di avocado', de: 'Avocadoöl', fr: 'Huile d\'avocat', es: 'Aceite de aguacate' }, category: 'fat' },
  { id: 'sesame-oil', slug: 'sesame-oil', density_g_per_ml: 0.920, names: { en: 'Sesame Oil', it: 'Olio di sesamo', de: 'Sesamöl', fr: 'Huile de sésame', es: 'Aceite de sésamo' }, category: 'fat' },

  // NEW DAIRY
  { id: 'greek-yogurt', slug: 'greek-yogurt', density_g_per_ml: 1.050, names: { en: 'Greek Yogurt', it: 'Yogurt greco', de: 'Griechischer Joghurt', fr: 'Yaourt grec', es: 'Yogur griego' }, category: 'dairy' },
  { id: 'cottage-cheese', slug: 'cottage-cheese', density_g_per_ml: 0.960, names: { en: 'Cottage Cheese', it: 'Fiocchi di latte', de: 'Hüttenkäse', fr: 'Fromage cottage', es: 'Queso cottage' }, category: 'dairy' },
  { id: 'milk-powder', slug: 'milk-powder', density_g_per_ml: 0.550, names: { en: 'Milk Powder (dry)', it: 'Latte in polvere', de: 'Milchpulver', fr: 'Lait en poudre', es: 'Leche en polvo' }, category: 'dairy' },
  { id: 'whipped-cream', slug: 'whipped-cream', density_g_per_ml: 0.350, names: { en: 'Whipped Cream', it: 'Panna montata', de: 'Schlagsahne (geschlagen)', fr: 'Crème fouettée', es: 'Nata montada' }, category: 'dairy' },
  { id: 'kefir', slug: 'kefir', density_g_per_ml: 1.030, names: { en: 'Kefir', it: 'Kefir', de: 'Kefir', fr: 'Kéfir', es: 'Kéfir' }, category: 'dairy' },

  // NEW SUGARS & SWEETENERS
  { id: 'coconut-sugar', slug: 'coconut-sugar', density_g_per_ml: 0.780, names: { en: 'Coconut Sugar', it: 'Zucchero di cocco', de: 'Kokoszucker', fr: 'Sucre de coco', es: 'Azúcar de coco' }, category: 'sugar' },
  { id: 'turbinado-sugar', slug: 'turbinado-sugar', density_g_per_ml: 0.900, names: { en: 'Turbinado Sugar', it: 'Zucchero turbinado', de: 'Turbinado-Zucker', fr: 'Sucre turbinado', es: 'Azúcar turbinado' }, category: 'sugar' },
  { id: 'muscovado-sugar', slug: 'muscovado-sugar', density_g_per_ml: 0.850, names: { en: 'Muscovado Sugar', it: 'Zucchero muscovado', de: 'Muscovado-Zucker', fr: 'Sucre muscovado', es: 'Azúcar moscovado' }, category: 'sugar' },
  { id: 'xylitol', slug: 'xylitol', density_g_per_ml: 0.640, names: { en: 'Xylitol', it: 'Xilitolo', de: 'Xylit', fr: 'Xylitol', es: 'Xilitol' }, category: 'sugar' },
  { id: 'erythritol', slug: 'erythritol', density_g_per_ml: 0.480, names: { en: 'Erythritol', it: 'Eritritolo', de: 'Erythrit', fr: 'Érythritol', es: 'Eritritol' }, category: 'sugar' },

  // NEW FLOURS
  { id: 'rice-flour', slug: 'rice-flour', density_g_per_ml: 0.560, names: { en: 'Rice Flour', it: 'Farina di riso', de: 'Reismehl', fr: 'Farine de riz', es: 'Harina de arroz' }, category: 'flour' },
  { id: 'corn-flour', slug: 'corn-flour', density_g_per_ml: 0.520, names: { en: 'Corn Flour (fine)', it: 'Farina di mais fine', de: 'Maismehl (fein)', fr: 'Farine de maïs (fine)', es: 'Harina de maíz fina' }, category: 'flour' },
  { id: 'cassava-flour', slug: 'cassava-flour', density_g_per_ml: 0.520, names: { en: 'Cassava Flour', it: 'Farina di manioca', de: 'Maniokmehl', fr: 'Farine de manioc', es: 'Harina de yuca' }, category: 'flour' },
  { id: 'mung-bean-flour', slug: 'mung-bean-flour', density_g_per_ml: 0.500, names: { en: 'Mung Bean Flour', it: 'Farina di fagioli mung', de: 'Mungobohnenmehl', fr: 'Farine de haricots mungo', es: 'Harina de frijol mungo' }, category: 'flour' },
  { id: 'hazelnut-flour', slug: 'hazelnut-flour', density_g_per_ml: 0.420, names: { en: 'Hazelnut Flour', it: 'Farina di nocciole', de: 'Haselnussmehl', fr: 'Farine de noisette', es: 'Harina de avellana' }, category: 'flour' },

  // NEW GRAINS & LEGUMES
  { id: 'amaranth', slug: 'amaranth', density_g_per_ml: 0.820, names: { en: 'Amaranth (grain)', it: 'Amaranto (grano)', de: 'Amaranth (Korn)', fr: 'Amarante (grain)', es: 'Amaranto (grano)' }, category: 'grain' },
  { id: 'sorghum', slug: 'sorghum', density_g_per_ml: 0.850, names: { en: 'Sorghum', it: 'Sorgo', de: 'Sorghum', fr: 'Sorgho', es: 'Sorgo' }, category: 'grain' },
  { id: 'buckwheat-groats', slug: 'buckwheat-groats', density_g_per_ml: 0.700, names: { en: 'Buckwheat Groats', it: 'Grano saraceno (chicchi)', de: 'Buchweizengrütze', fr: 'Sarrasin décortiqué', es: 'Trigo sarraceno (granos)' }, category: 'grain' },
  { id: 'wild-rice', slug: 'wild-rice', density_g_per_ml: 0.700, names: { en: 'Wild Rice', it: 'Riso selvatico', de: 'Wildreis', fr: 'Riz sauvage', es: 'Arroz salvaje' }, category: 'grain' },
  { id: 'farro', slug: 'farro', density_g_per_ml: 0.780, names: { en: 'Farro', it: 'Farro', de: 'Farro', fr: 'Épeautre (grain)', es: 'Farro' }, category: 'grain' },
  { id: 'black-rice', slug: 'black-rice', density_g_per_ml: 0.820, names: { en: 'Black Rice', it: 'Riso nero', de: 'Schwarzer Reis', fr: 'Riz noir', es: 'Arroz negro' }, category: 'grain' },
  { id: 'rolled-barley', slug: 'rolled-barley', density_g_per_ml: 0.660, names: { en: 'Rolled Barley', it: 'Fiocchi d\'orzo', de: 'Gerstenflocken', fr: 'Orge roulée', es: 'Cebada en copos' }, category: 'grain' },
  { id: 'chickpeas-dried', slug: 'chickpeas', density_g_per_ml: 0.810, names: { en: 'Chickpeas (dry)', it: 'Ceci (secchi)', de: 'Kichererbsen (trocken)', fr: 'Pois chiches (secs)', es: 'Garbanzos (secos)' }, category: 'grain' },
  { id: 'black-beans-dried', slug: 'black-beans', density_g_per_ml: 0.830, names: { en: 'Black Beans (dry)', it: 'Fagioli neri (secchi)', de: 'Schwarze Bohnen (trocken)', fr: 'Haricots noirs (secs)', es: 'Frijoles negros (secos)' }, category: 'grain' },
  { id: 'split-peas', slug: 'split-peas', density_g_per_ml: 0.820, names: { en: 'Split Peas (dry)', it: 'Piselli spezzati (secchi)', de: 'Schälerbsen (trocken)', fr: 'Pois cassés (secs)', es: 'Guisantes partidos (secos)' }, category: 'grain' },
  { id: 'oat-bran', slug: 'oat-bran', density_g_per_ml: 0.300, names: { en: 'Oat Bran', it: 'Crusca d\'avena', de: 'Haferkleie', fr: 'Son d\'avoine', es: 'Salvado de avena' }, category: 'grain' },
  { id: 'wheat-bran', slug: 'wheat-bran', density_g_per_ml: 0.240, names: { en: 'Wheat Bran', it: 'Crusca di frumento', de: 'Weizenkleie', fr: 'Son de blé', es: 'Salvado de trigo' }, category: 'grain' },

  // NEW NUTS & NUT BUTTERS
  { id: 'cashews', slug: 'cashews', density_g_per_ml: 0.500, names: { en: 'Cashews (whole)', it: 'Anacardi (interi)', de: 'Cashews (ganz)', fr: 'Noix de cajou (entières)', es: 'Anacardos (enteros)' }, category: 'nut' },
  { id: 'pistachios', slug: 'pistachios', density_g_per_ml: 0.520, names: { en: 'Pistachios (shelled)', it: 'Pistacchi (sgusciati)', de: 'Pistazien (geschält)', fr: 'Pistaches (décortiquées)', es: 'Pistachos (sin cáscara)' }, category: 'nut' },
  { id: 'macadamia-nuts', slug: 'macadamia-nuts', density_g_per_ml: 0.530, names: { en: 'Macadamia Nuts', it: 'Noci di macadamia', de: 'Macadamia-Nüsse', fr: 'Noix de macadamia', es: 'Nueces de macadamia' }, category: 'nut' },
  { id: 'pine-nuts', slug: 'pine-nuts', density_g_per_ml: 0.580, names: { en: 'Pine Nuts', it: 'Pinoli', de: 'Pinienkerne', fr: 'Pignons de pin', es: 'Piñones' }, category: 'nut' },
  { id: 'peanuts-whole', slug: 'peanuts', density_g_per_ml: 0.580, names: { en: 'Peanuts (whole)', it: 'Arachidi (intere)', de: 'Erdnüsse (ganz)', fr: 'Cacahuètes (entières)', es: 'Cacahuetes (enteros)' }, category: 'nut' },
  { id: 'almond-butter', slug: 'almond-butter', density_g_per_ml: 1.060, names: { en: 'Almond Butter', it: 'Burro di mandorle', de: 'Mandelbutter', fr: 'Beurre d\'amande', es: 'Mantequilla de almendra' }, category: 'nut' },
  { id: 'cashew-butter', slug: 'cashew-butter', density_g_per_ml: 1.070, names: { en: 'Cashew Butter', it: 'Burro di anacardi', de: 'Cashewbutter', fr: 'Beurre de cajou', es: 'Mantequilla de anacardo' }, category: 'nut' },

  // NEW SPICES & LEAVENING
  { id: 'turmeric', slug: 'turmeric', density_g_per_ml: 0.640, names: { en: 'Turmeric (ground)', it: 'Curcuma (in polvere)', de: 'Kurkuma (gemahlen)', fr: 'Curcuma (moulu)', es: 'Cúrcuma (molida)' }, category: 'spice' },
  { id: 'paprika', slug: 'paprika', density_g_per_ml: 0.540, names: { en: 'Paprika', it: 'Paprica', de: 'Paprika', fr: 'Paprika', es: 'Pimentón' }, category: 'spice' },
  { id: 'cumin-ground', slug: 'cumin', density_g_per_ml: 0.520, names: { en: 'Cumin (ground)', it: 'Cumino (in polvere)', de: 'Kreuzkümmel (gemahlen)', fr: 'Cumin (moulu)', es: 'Comino (molido)' }, category: 'spice' },
  { id: 'garlic-powder', slug: 'garlic-powder', density_g_per_ml: 0.620, names: { en: 'Garlic Powder', it: 'Aglio in polvere', de: 'Knoblauchpulver', fr: 'Ail en poudre', es: 'Ajo en polvo' }, category: 'spice' },
  { id: 'ginger-powder', slug: 'ginger-powder', density_g_per_ml: 0.520, names: { en: 'Ginger (ground)', it: 'Zenzero (in polvere)', de: 'Ingwer (gemahlen)', fr: 'Gingembre (moulu)', es: 'Jengibre (molido)' }, category: 'spice' },
  { id: 'chili-powder', slug: 'chili-powder', density_g_per_ml: 0.530, names: { en: 'Chili Powder', it: 'Peperoncino in polvere', de: 'Chilipulver', fr: 'Piment en poudre', es: 'Chile en polvo' }, category: 'spice' },
  { id: 'black-pepper', slug: 'black-pepper', density_g_per_ml: 0.560, names: { en: 'Black Pepper (ground)', it: 'Pepe nero (macinato)', de: 'Schwarzer Pfeffer (gemahlen)', fr: 'Poivre noir (moulu)', es: 'Pimienta negra (molida)' }, category: 'spice' },
  { id: 'active-dry-yeast', slug: 'active-dry-yeast', density_g_per_ml: 0.720, names: { en: 'Active Dry Yeast', it: 'Lievito secco attivo', de: 'Trockenhefe (aktiv)', fr: 'Levure sèche active', es: 'Levadura seca activa' }, category: 'spice' },
  { id: 'instant-yeast', slug: 'instant-yeast', density_g_per_ml: 0.720, names: { en: 'Instant Yeast', it: 'Lievito istantaneo', de: 'Instanthefe', fr: 'Levure instantanée', es: 'Levadura instantánea' }, category: 'spice' },
  { id: 'onion-powder', slug: 'onion-powder', density_g_per_ml: 0.500, names: { en: 'Onion Powder', it: 'Cipolla in polvere', de: 'Zwiebelpulver', fr: 'Oignon en poudre', es: 'Cebolla en polvo' }, category: 'spice' },

  // NEW OTHER
  { id: 'matcha-powder', slug: 'matcha-powder', density_g_per_ml: 0.380, names: { en: 'Matcha Powder', it: 'Polvere di matcha', de: 'Matchapulver', fr: 'Poudre de matcha', es: 'Polvo de matcha' }, category: 'other' },
  { id: 'espresso-powder', slug: 'espresso-powder', density_g_per_ml: 0.400, names: { en: 'Espresso Powder', it: 'Polvere di espresso', de: 'Espressopulver', fr: 'Poudre d\'espresso', es: 'Polvo de espresso' }, category: 'other' },
  { id: 'carob-powder', slug: 'carob-powder', density_g_per_ml: 0.450, names: { en: 'Carob Powder', it: 'Polvere di carruba', de: 'Johannisbrotkernmehl', fr: 'Poudre de caroube', es: 'Harina de algarroba' }, category: 'other' },
  { id: 'white-chocolate-chips', slug: 'white-chocolate-chips', density_g_per_ml: 0.660, names: { en: 'White Chocolate Chips', it: 'Gocce di cioccolato bianco', de: 'Weiße Schokoladenstückchen', fr: 'Pépites de chocolat blanc', es: 'Chips de chocolate blanco' }, category: 'other' },
  { id: 'xanthan-gum', slug: 'xanthan-gum', density_g_per_ml: 0.640, names: { en: 'Xanthan Gum', it: 'Gomma xantana', de: 'Xanthan', fr: 'Gomme xanthane', es: 'Goma xantana' }, category: 'other' },
  { id: 'vital-wheat-gluten', slug: 'vital-wheat-gluten', density_g_per_ml: 0.480, names: { en: 'Vital Wheat Gluten', it: 'Glutine di frumento vitale', de: 'Weizenglutenmehl', fr: 'Gluten de blé vital', es: 'Gluten de trigo vital' }, category: 'other' },
  { id: 'flaxseed-whole', slug: 'flaxseed-whole', density_g_per_ml: 0.680, names: { en: 'Flaxseed (whole)', it: 'Semi di lino (interi)', de: 'Leinsamen (ganz)', fr: 'Graines de lin (entières)', es: 'Linaza (entera)' }, category: 'other' },
  { id: 'dried-dates', slug: 'dried-dates', density_g_per_ml: 0.720, names: { en: 'Dried Dates (chopped)', it: 'Datteri essiccati (tritati)', de: 'Getrocknete Datteln (gehackt)', fr: 'Dattes séchées (hachées)', es: 'Dátiles secos (picados)' }, category: 'other' },
  { id: 'dried-figs', slug: 'dried-figs', density_g_per_ml: 0.600, names: { en: 'Dried Figs (chopped)', it: 'Fichi essiccati (tritati)', de: 'Getrocknete Feigen (gehackt)', fr: 'Figues séchées (hachées)', es: 'Higos secos (picados)' }, category: 'other' },
  { id: 'dried-mango', slug: 'dried-mango', density_g_per_ml: 0.550, names: { en: 'Dried Mango (chopped)', it: 'Mango essiccato (tritato)', de: 'Getrocknete Mango (gehackt)', fr: 'Mangue séchée (hachée)', es: 'Mango seco (picado)' }, category: 'other' },
  { id: 'maca-powder', slug: 'maca-powder', density_g_per_ml: 0.440, names: { en: 'Maca Powder', it: 'Polvere di maca', de: 'Macapulver', fr: 'Poudre de maca', es: 'Polvo de maca' }, category: 'other' },
  { id: 'spirulina', slug: 'spirulina', density_g_per_ml: 0.420, names: { en: 'Spirulina Powder', it: 'Spirulina in polvere', de: 'Spirulinapulver', fr: 'Spiruline en poudre', es: 'Espirulina en polvo' }, category: 'other' },
]

export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return INGREDIENTS.find(i => i.slug === slug)
}

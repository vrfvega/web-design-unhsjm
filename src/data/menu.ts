import tunaNigiri from '../assets/menu/tuna-nigiri.jpg'
import salmonNigiri from '../assets/menu/salmon-nigiri.jpg'
import seafoodNigiri from '../assets/menu/seafood-nigiri.jpg'
import nigiriTemporada from '../assets/menu/nigiri-temporada.jpg'
import sashimi from '../assets/menu/sashimi.jpg'
import avocadoRoll from '../assets/menu/avocado-roll.jpg'
import chefsRoll from '../assets/menu/chefs-roll.jpg'
import crispyRoll from '../assets/menu/crispy-roll.jpg'
import salmonFlameRoll from '../assets/menu/salmon-flame-roll.jpg'
import classicRolls from '../assets/menu/classic-rolls.jpg'
import rollPlatter from '../assets/menu/roll-platter.jpg'
import chirashi from '../assets/menu/chirashi.jpg'
import tunaTartare from '../assets/menu/tuna-tartare.jpg'
import biteSizedSushi from '../assets/menu/bite-sized-sushi.jpg'
import sushiPlatter from '../assets/menu/sushi-platter.jpg'
import chocolateFondant from '../assets/menu/chocolate-fondant.jpg'
import matchaSoftServe from '../assets/menu/matcha-soft-serve.jpg'
import vanillaParfait from '../assets/menu/vanilla-parfait.jpg'
import meringueTart from '../assets/menu/meringue-tart.jpg'
import lemonMeringueTart from '../assets/menu/lemon-meringue-tart.jpg'
import soufflePancake from '../assets/menu/souffle-pancake.jpg'
import strawberryCroissant from '../assets/menu/strawberry-croissant.jpg'
import strawberryMousse from '../assets/menu/strawberry-mousse.jpg'
import milleFeuille from '../assets/menu/mille-feuille.jpg'
import berryMilleFeuille from '../assets/menu/berry-mille-feuille.jpg'
import sakuraMochi from '../assets/menu/sakura-mochi.jpg'
import matchaDango from '../assets/menu/matcha-dango.jpg'
import matchaJelly from '../assets/menu/matcha-jelly.jpg'
import matchaSet from '../assets/menu/matcha-set.jpg'
import teaService from '../assets/menu/tea-service.jpg'

export type MenuCategory =
  | 'Sushi'
  | 'Makis'
  | 'Platos'
  | 'Postres'
  | 'Dulces japoneses'
  | 'Té'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number // USD
  category: MenuCategory
  image: string
}

export const categories: MenuCategory[] = [
  'Sushi',
  'Makis',
  'Platos',
  'Postres',
  'Dulces japoneses',
  'Té',
]

export const menuItems: MenuItem[] = [
  // Sushi
  {
    id: 'tuna-nigiri',
    name: 'Nigiri de atún',
    description: 'Dos piezas de arroz prensado a mano con atún rojo magro.',
    price: 9,
    category: 'Sushi',
    image: tunaNigiri,
  },
  {
    id: 'salmon-nigiri',
    name: 'Nigiri de salmón',
    description: 'Dos piezas con salmón real, un toque de wasabi y soja.',
    price: 8,
    category: 'Sushi',
    image: salmonNigiri,
  },
  {
    id: 'seafood-nigiri',
    name: 'Nigiri del mar',
    description: 'Salmón, atún, camarón y huevas de salmón.',
    price: 16,
    category: 'Sushi',
    image: seafoodNigiri,
  },
  {
    id: 'nigiri-temporada',
    name: 'Nigiri de temporada',
    description: 'Selección de pescado blanco, atún y salmón servida en laca.',
    price: 17,
    category: 'Sushi',
    image: nigiriTemporada,
  },
  {
    id: 'sashimi',
    name: 'Sashimi de temporada',
    description: 'Cortes finos de pescado con cítricos y jengibre.',
    price: 19,
    category: 'Sushi',
    image: sashimi,
  },

  // Makis
  {
    id: 'avocado-roll',
    name: 'Maki de aguacate',
    description: 'Aguacate maduro, pepino y salmón envueltos en alga nori y sésamo.',
    price: 12,
    category: 'Makis',
    image: avocadoRoll,
  },
  {
    id: 'chefs-roll',
    name: 'Maki del chef',
    description: 'Tempura crujiente, salmón y tobiko con una salsa ligera.',
    price: 18,
    category: 'Makis',
    image: chefsRoll,
  },
  {
    id: 'crispy-roll',
    name: 'Maki crocante',
    description: 'Cubierto de hojuelas doradas y salsa cremosa.',
    price: 14,
    category: 'Makis',
    image: crispyRoll,
  },
  {
    id: 'salmon-flame-roll',
    name: 'Maki de salmón flameado',
    description: 'Salmón flameado con pepino y ajonjolí.',
    price: 13,
    category: 'Makis',
    image: salmonFlameRoll,
  },
  {
    id: 'classic-rolls',
    name: 'Makis clásicos',
    description: 'Surtido de makis de pepino, pescado y aguacate.',
    price: 15,
    category: 'Makis',
    image: classicRolls,
  },
  {
    id: 'roll-platter',
    name: 'Bandeja de makis',
    description: 'Surtido de makis variados, ideal para compartir.',
    price: 42,
    category: 'Makis',
    image: rollPlatter,
  },

  // Platos
  {
    id: 'chirashi',
    name: 'Chirashi',
    description: 'Pescado de temporada sobre arroz de sushi con huevas, encurtidos y verdura.',
    price: 26,
    category: 'Platos',
    image: chirashi,
  },
  {
    id: 'tuna-tartare',
    name: 'Tartar de atún',
    description: 'Atún picado con salsa de soja y cebollín sobre arroz.',
    price: 17,
    category: 'Platos',
    image: tunaTartare,
  },
  {
    id: 'bite-sized-sushi',
    name: 'Bocados de temporada',
    description: 'Piezas pequeñas de sushi con sésamo y vegetales frescos.',
    price: 14,
    category: 'Platos',
    image: biteSizedSushi,
  },
  {
    id: 'sushi-platter',
    name: 'Tabla mixta para dos',
    description: 'Nigiri, makis y salsa de soja para compartir.',
    price: 34,
    category: 'Platos',
    image: sushiPlatter,
  },

  // Postres
  {
    id: 'chocolate-fondant',
    name: 'Coulant de chocolate',
    description: 'Centro de chocolate negro caliente, fresas y sorbete de yuzu.',
    price: 12,
    category: 'Postres',
    image: chocolateFondant,
  },
  {
    id: 'matcha-soft-serve',
    name: 'Soft de matcha',
    description: 'Matcha ceremonial con alubias rojas dulces y mochi.',
    price: 10,
    category: 'Postres',
    image: matchaSoftServe,
  },
  {
    id: 'vanilla-parfait',
    name: 'Parfait de vainilla',
    description: 'Capas de crema de vainilla, caramelo y almendra tostada.',
    price: 13,
    category: 'Postres',
    image: vanillaParfait,
  },
  {
    id: 'meringue-tart',
    name: 'Tarta de merengue',
    description: 'Base crujiente con merengue flameado.',
    price: 9,
    category: 'Postres',
    image: meringueTart,
  },
  {
    id: 'lemon-meringue-tart',
    name: 'Tartaleta de merengue',
    description: 'Tartaleta individual con merengue dorado.',
    price: 7,
    category: 'Postres',
    image: lemonMeringueTart,
  },
  {
    id: 'souffle-pancake',
    name: 'Panqueque japonés',
    description: 'Panqueques esponjosos con plátano, fresas y crema.',
    price: 11,
    category: 'Postres',
    image: soufflePancake,
  },
  {
    id: 'strawberry-croissant',
    name: 'Croissant de fresa',
    description: 'Croissant relleno con fresas frescas y azúcar glas.',
    price: 11,
    category: 'Postres',
    image: strawberryCroissant,
  },
  {
    id: 'strawberry-mousse',
    name: 'Mousse de fresa',
    description: 'Mousse ligero con fruta fresca y kiwi.',
    price: 10,
    category: 'Postres',
    image: strawberryMousse,
  },
  {
    id: 'mille-feuille',
    name: 'Milhojas clásico',
    description: 'Capas de hojaldre crujiente con crema pastelera.',
    price: 10,
    category: 'Postres',
    image: milleFeuille,
  },
  {
    id: 'berry-mille-feuille',
    name: 'Milhojas de frutos rojos',
    description: 'Hojaldre crujiente con crema y frutos rojos.',
    price: 11,
    category: 'Postres',
    image: berryMilleFeuille,
  },

  // Dulces japoneses
  {
    id: 'sakura-mochi',
    name: 'Mochi de sakura',
    description: 'Mochi relleno, decorado con flor de cerezo.',
    price: 8,
    category: 'Dulces japoneses',
    image: sakuraMochi,
  },
  {
    id: 'matcha-dango',
    name: 'Dango de matcha',
    description: 'Bolitas de dango con salsa de té verde.',
    price: 7,
    category: 'Dulces japoneses',
    image: matchaDango,
  },
  {
    id: 'matcha-jelly',
    name: 'Gelatina de té verde',
    description: 'Gelatina de matcha con bolitas de mochi y crema.',
    price: 8,
    category: 'Dulces japoneses',
    image: matchaJelly,
  },

  // Té
  {
    id: 'matcha-set',
    name: 'Té matcha',
    description: 'Matcha batido en cuenco de cerámica con un dulce de temporada.',
    price: 9,
    category: 'Té',
    image: matchaSet,
  },
  {
    id: 'tea-service',
    name: 'Servicio de té para dos',
    description: 'Tetera, tazas y una selección de dulces.',
    price: 18,
    category: 'Té',
    image: teaService,
  },
]

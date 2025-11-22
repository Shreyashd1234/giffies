import { StaticImageData } from 'next/image';

// Image imports (actual files are in src/images)
import oysterPearl from '../images/oyster-pearl.jpg';
import nightLamp from '../images/night-lamp.png';
import heartNecklaceV1 from '../images/heart-necklace-v1.jpg';
import infinityNecklace from '../images/infinity-necklace.jpg';
import pearlNecklace from '../images/pearl-necklace.jpg';
import infinityBracelet from '../images/infinity-bracelet.jpg';
import chainNecklace from '../images/chain-necklace.jpg';
import heartNecklaceV2 from '../images/heart-necklace-v2.jpg';
import necklace1111 from '../images/1111-necklace.jpg';
import heartRing from '../images/heart-ring.png';
import heartBracelet from '../images/heart-bracelet.jpg';
import goldenKada from '../images/golden-kada.jpg';
import beads1 from '../images/beads1.jpg';
import beads2 from '../images/beads2.jpg';
import beads3 from '../images/beads3.jpg';
import beads4 from '../images/beads4.jpg';
import beads5 from '../images/beads5.jpg';
import beads6 from '../images/beads6.jpg';
import goldenBracelet2 from '../images/golden-bracelet.jpg';
import goldenPearlEarring from '../images/golden-pearl-earring.jpg';
import silverPearlEarrings from '../images/silver-pearl-earrings.jpg';

import polaroidSmall from '../images/small-polaroids.png';
import polaroidMedium from '../images/medium-polaroids.png';
import polaroidLarge from '../images/large-polaroids.png';
import spotifyFrame from '../images/spotify-frame.png';
import spotifyCards from '../images/spotify-cards.png';

export interface Product {
  id: string;
  name: string;
  basePrice?: number;
  scratchedPrice?: number;
  price: number;
  category: string;
  image: string | StaticImageData;
  alt?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  trending?: boolean;
  badge?: string;
  tags?: string[];
  packagingAllowed?: string[];
  jewelleryType?: 'necklace' | 'earrings' | 'bracelet' | 'ring' | 'other';
  trendingGroup?: string;
}

export const products: Product[] = [
  // 1. Pearl Oyster
  {
    id: '1',
    name: 'Pearl Oyster',
    basePrice: 420,
    scratchedPrice: 546,
    price: 420,
    category: 'experience',
    image: oysterPearl,
    alt: 'Pearl Oyster Experience',
    description: 'Open your own pearl oyster and discover a unique treasure inside. A memorable unboxing experience with natural freshwater pearls.',
    rating: 4.9,
    reviews: 234,
    trending: true,
    badge: 'Best Experience',
    tags: ['premium', 'oyster', 'experience', 'elegant'],
    packagingAllowed: ['thankyou', 'kraft'],
    trendingGroup: 'Best Experience'
  },

  // 2. Night Lamp
  {
    id: '2',
    name: 'Night Lamp',
    basePrice: 290,
    scratchedPrice: 377,
    price: 290,
    category: 'aesthetic',
    image: nightLamp,
    alt: 'Night Lamp',
    description: 'Soft, cozy night lamp that creates a warm ambient glow.',
    rating: 4.6,
    reviews: 98,
    tags: ['nightlamp', 'cozy', 'softlight'],
    packagingAllowed: ['thankyou', 'kraft']
  },

  // 3. Heart Necklace (Version 1)
  {
    id: '3',
    name: 'Heart Necklace (V1)',
    basePrice: 90,
    scratchedPrice: 117,
    price: 90,
    category: 'jewellery',
    image: heartNecklaceV1,
    jewelleryType: 'necklace',
    alt: 'Heart Necklace Version 1',
    description: 'Minimal heart necklace — romantic and understated.',
    rating: 4.7,
    reviews: 120,
    tags: ['romantic', 'heart', 'minimal'],
    packagingAllowed: ['thankyou', 'kraft', 'pink'],
    trendingGroup: 'Heart Collection'
  },

  // 4. Infinity Necklace
  {
    id: '4',
    name: 'Infinity Necklace',
    basePrice: 90,
    scratchedPrice: 117,
    price: 90,
    category: 'jewellery',
    image: infinityNecklace,
    jewelleryType: 'necklace',
    alt: 'Infinity Necklace',
    description: 'Elegant infinity necklace for a timeless look.',
    rating: 4.6,
    reviews: 88,
    tags: ['infinity', 'minimal', 'elegant'],
    packagingAllowed: ['thankyou', 'kraft', 'pink'],
    trendingGroup: 'Infinity & Minimal Collection'
  },

  // 5. Pearl Necklace
  {
    id: '5',
    name: 'Pearl Necklace',
    basePrice: 90,
    scratchedPrice: 117,
    price: 90,
    category: 'jewellery',
    image: pearlNecklace,
    jewelleryType: 'necklace',
    alt: 'Pearl Necklace',
    description: 'Aesthetic pearl necklace with minimal design.',
    rating: 4.5,
    reviews: 76,
    tags: ['pearl', 'aesthetic', 'minimal'],
    packagingAllowed: ['thankyou', 'kraft', 'pink']
  },

  // 6. Infinity Bracelet
  {
    id: '6',
    name: 'Infinity Bracelet',
    basePrice: 90,
    scratchedPrice: 117,
    price: 90,
    category: 'jewellery',
    image: infinityBracelet,
    jewelleryType: 'bracelet',
    alt: 'Infinity Bracelet',
    description: 'Delicate infinity bracelet for everyday wear.',
    rating: 4.4,
    reviews: 52,
    tags: ['infinity', 'bracelet', 'elegant'],
    packagingAllowed: ['thankyou', 'kraft', 'pink']
  },

  // 7. Chain Necklace
  {
    id: '7',
    name: 'Chain Necklace',
    basePrice: 110,
    scratchedPrice: 143,
    price: 110,
    category: 'jewellery',
    image: chainNecklace,
    jewelleryType: 'necklace',
    alt: 'Chain Necklace',
    description: 'Trendy chain necklace, great for streetwear looks.',
    rating: 4.3,
    reviews: 64,
    tags: ['chain', 'streetwear', 'trendy'],
    packagingAllowed: ['thankyou', 'kraft', 'pink']
  },

  // 8. Heart Necklace (Version 2)
  {
    id: '8',
    name: 'Heart Necklace (V2)',
    basePrice: 180,
    scratchedPrice: 234,
    price: 180,
    category: 'jewellery',
    image: heartNecklaceV2,
    jewelleryType: 'necklace',
    alt: 'Heart Necklace Version 2',
    description: 'Premium heart necklace with a richer finish.',
    rating: 4.8,
    reviews: 140,
    tags: ['heart', 'romantic', 'premium'],
    packagingAllowed: ['thankyou', 'kraft', 'pink'],
    trendingGroup: 'Heart Collection'
  },

  // 9. 11:11 Necklace
  {
    id: '9',
    name: '11:11 Necklace',
    basePrice: 240,
    scratchedPrice: 312,
    price: 240,
    category: 'jewellery',
    image: necklace1111,
    jewelleryType: 'necklace',
    alt: '11:11 Necklace',
    description: 'Make a wish — the viral 11:11 wish necklace.',
    rating: 5.0,
    reviews: 312,
    tags: ['1111', 'trendy', 'wish', 'viral'],
    packagingAllowed: ['thankyou', 'kraft', 'pink'],
    trending: true,
    trendingGroup: 'Most Trendy'
  },

  // 10. Heart Ring
  {
    id: '10',
    name: 'Heart Ring',
    basePrice: 120,
    scratchedPrice: 156,
    price: 120,
    category: 'jewellery',
    image: heartRing,
    jewelleryType: 'ring',
    alt: 'Heart Ring',
    description: 'Cute heart ring — the perfect tiny romantic token.',
    rating: 4.5,
    reviews: 80,
    tags: ['heart', 'ring', 'romantic'],
    packagingAllowed: ['thankyou', 'kraft', 'pink'],
    trendingGroup: 'Heart Collection'
  },

  // 11. Heart Bracelet (Premium Gold)
  {
    id: '11',
    name: 'Heart Bracelet',
    basePrice: 440,
    scratchedPrice: 572,
    price: 440,
    category: 'jewellery',
    image: heartBracelet,
    jewelleryType: 'bracelet',
    alt: 'Heart Bracelet Premium Gold',
    description: 'Premium gold heart bracelet.',
    rating: 4.9,
    reviews: 210,
    badge: 'Premium Gold',
    tags: ['gold', 'bracelet', 'premium', 'heart'],
    packagingAllowed: ['thankyou', 'kraft'],
    trendingGroup: 'Premium Gold'
  },

  // 12. Golden Kada
  {
    id: '12',
    name: 'Golden Kada',
    basePrice: 440,
    scratchedPrice: 572,
    price: 440,
    category: 'jewellery',
    image: goldenKada,
    jewelleryType: 'bracelet',
    alt: 'Golden Kada',
    description: 'Classic golden kada — premium finish.',
    rating: 4.8,
    reviews: 132,
    badge: 'Premium Gold',
    tags: ['gold', 'kada', 'premium'],
    packagingAllowed: ['thankyou', 'kraft'],
    trendingGroup: 'Premium Gold'
  },

  // 13. Golden Bead Bracelet (1)
  {
    id: '13',
    name: 'Bead Bracelet',
    basePrice: 60,
    scratchedPrice: 80,
    price: 60,
    category: 'jewellery',
    image: beads1,
    jewelleryType: 'bracelet',
    alt: 'Colorful Bead Bracelet',
    description: 'Affordable and colorful bead bracelet — great as a fun token or add-on gift.',
    rating: 4.2,
    reviews: 34,
    tags: ['beads', 'bracelet', 'affordable', 'trendy'],
    packagingAllowed: ['thankyou', 'kraft', 'pink'],
    trendingGroup: 'Most Trendy'
  },

  // 14. Golden Bracelet (2)
  {
    id: '14',
    name: 'Golden Bracelet (2)',
    basePrice: 440,
    scratchedPrice: 572,
    price: 440,
    category: 'jewellery',
    image: goldenBracelet2,
    jewelleryType: 'bracelet',
    alt: 'Golden Bracelet',
    description: 'Another premium golden bracelet option.',
    rating: 4.7,
    reviews: 110,
    badge: 'Premium Gold',
    tags: ['gold', 'bracelet', 'premium'],
    packagingAllowed: ['thankyou', 'kraft'],
    trendingGroup: 'Premium Gold'
  },

  // 15. Small Polaroid (3 pcs)
  {
    id: '15',
    name: 'Small Polaroid (3 pcs)',
    basePrice: 220,
    scratchedPrice: 286,
    price: 220,
    category: 'memories',
    image: polaroidSmall,
    alt: 'Small Polaroid Prints',
    description: 'Set of 3 custom polaroid-style prints.',
    rating: 4.8,
    reviews: 145,
    tags: ['polaroid', 'memories', 'print'],
    packagingAllowed: ['jiyo', 'thankyou', 'kraft'],
    trendingGroup: 'Trending Memories'
  },

  // 16. Medium Polaroid (10 pcs)
  {
    id: '16',
    name: 'Medium Polaroid (10 pcs)',
    basePrice: 120,
    scratchedPrice: 156,
    price: 120,
    category: 'memories',
    image: polaroidMedium,
    alt: 'Medium Polaroid Prints',
    description: 'Set of 10 polaroid-style prints.',
    rating: 4.7,
    reviews: 98,
    tags: ['polaroid', 'memories', '10pcs'],
    packagingAllowed: ['jiyo', 'thankyou', 'kraft'],
    trendingGroup: 'Trending Memories'
  },

  // 17. Large Polaroid (9 pcs)
  {
    id: '17',
    name: 'Large Polaroid (9 pcs)',
    basePrice: 120,
    scratchedPrice: 156,
    price: 120,
    category: 'memories',
    image: polaroidLarge,
    alt: 'Large Polaroid Prints',
    description: 'Set of 9 polaroid-style prints.',
    rating: 4.7,
    reviews: 102,
    tags: ['polaroid', 'memories', '9pcs'],
    packagingAllowed: ['jiyo', 'thankyou', 'kraft'],
    trendingGroup: 'Trending Memories'
  },

  // 18. Spotify Frame
  {
    id: '18',
    name: 'Spotify Frame',
    basePrice: 380,
    scratchedPrice: 494,
    price: 380,
    category: 'memories',
    image: spotifyFrame,
    alt: 'Spotify Frame',
    description: 'Premium acrylic Spotify frame with scannable code.',
    rating: 4.9,
    reviews: 134,
    tags: ['spotify', 'frame', 'personalized'],
    packagingAllowed: ['jiyo', 'thankyou', 'kraft'],
    trendingGroup: 'Trending Memories'
  },

  // 19. Spotify Card (9 pcs)
  {
    id: '19',
    name: 'Spotify Card (9 pcs)',
    basePrice: 175,
    scratchedPrice: 227,
    price: 175,
    category: 'memories',
    image: spotifyCards,
    alt: 'Spotify Card Set',
    description: 'Set of 9 Spotify-style music cards.',
    rating: 4.8,
    reviews: 90,
    tags: ['spotify', 'card', 'music', 'print'],
    packagingAllowed: ['jiyo', 'thankyou', 'kraft'],
    trendingGroup: 'Trending Memories'
  },
  // 20. Golden Pearl Earrings
  {
    id: '20',
    name: 'Golden Pearl Earrings',
    price: 320,
    category: 'jewellery',
    jewelleryType: 'earrings',
    image: goldenPearlEarring,
    alt: 'Golden Pearl Earrings',
    description: 'Elegant golden pearl earrings — perfect match with our pearl necklaces.',
    rating: 4.6,
    reviews: 54,
    tags: ['earrings', 'pearl', 'gold']
  },
  // 21. Silver Pearl Earrings
  {
    id: '21',
    name: 'Silver Pearl Earrings',
    price: 220,
    category: 'jewellery',
    jewelleryType: 'earrings',
    image: silverPearlEarrings,
    alt: 'Silver Pearl Earrings',
    description: 'Classic silver pearl earrings — subtle and elegant.',
    rating: 4.5,
    reviews: 42,
    tags: ['earrings', 'pearl', 'silver']
  }
  ,
  // 22. Bead Bracelet Variant 2
  {
    id: '22',
    name: 'Bead Bracelet (Variant 2)',
    price: 60,
    category: 'jewellery',
    jewelleryType: 'bracelet',
    image: beads2,
    alt: 'Bead Bracelet Variant 2',
    description: 'Colorful bead bracelet variant 2 — affordable and trendy.',
    rating: 4.1,
    reviews: 12,
    tags: ['beads', 'bracelet', 'affordable']
  },
  // 23. Bead Bracelet Variant 3
  {
    id: '23',
    name: 'Bead Bracelet (Variant 3)',
    price: 60,
    category: 'jewellery',
    jewelleryType: 'bracelet',
    image: beads3,
    alt: 'Bead Bracelet Variant 3',
    description: 'Colorful bead bracelet variant 3 — affordable and trendy.',
    rating: 4.0,
    reviews: 9,
    tags: ['beads', 'bracelet', 'affordable']
  },
  // 24. Bead Bracelet Variant 4
  {
    id: '24',
    name: 'Bead Bracelet (Variant 4)',
    price: 60,
    category: 'jewellery',
    jewelleryType: 'bracelet',
    image: beads4,
    alt: 'Bead Bracelet Variant 4',
    description: 'Colorful bead bracelet variant 4 — affordable and trendy.',
    rating: 4.2,
    reviews: 15,
    tags: ['beads', 'bracelet', 'affordable']
  },
  // 25. Bead Bracelet Variant 5
  {
    id: '25',
    name: 'Bead Bracelet (Variant 5)',
    price: 60,
    category: 'jewellery',
    jewelleryType: 'bracelet',
    image: beads5,
    alt: 'Bead Bracelet Variant 5',
    description: 'Colorful bead bracelet variant 5 — affordable and trendy.',
    rating: 4.3,
    reviews: 18,
    tags: ['beads', 'bracelet', 'affordable']
  },
  // 26. Bead Bracelet Variant 6
  {
    id: '26',
    name: 'Bead Bracelet (Variant 6)',
    price: 60,
    category: 'jewellery',
    jewelleryType: 'bracelet',
    image: beads6,
    alt: 'Bead Bracelet Variant 6',
    description: 'Colorful bead bracelet variant 6 — affordable and trendy.',
    rating: 4.0,
    reviews: 8,
    tags: ['beads', 'bracelet', 'affordable']
  }
  // catalog ends at item 19 per updated product list
];

export const categories = [
  'all',
  'jewellery',
  'memories',
  'experience',
  'personalized',
  'chocolates',
  'home',
  'accessories',
  'wellness',
  'aesthetic'
];
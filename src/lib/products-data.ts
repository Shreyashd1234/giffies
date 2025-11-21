export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  trending?: boolean;
  badge?: string;
}

export const products: Product[] = [
  // Best Experience
  { 
    id: '1', 
    name: 'Pearl Oyster Experience', 
    price: 699, 
    category: 'experience', 
    image: '/assets/images/product.jpg', 
    description: 'Open your own pearl oyster and discover a unique treasure inside. A memorable unboxing experience with natural freshwater pearls.', 
    rating: 4.9, 
    reviews: 234, 
    trending: true,
    badge: 'Best Experience'
  },

  // Premium Gold Collection (₹440 each)
  { 
    id: '2', 
    name: 'Gold Chain Bracelet', 
    price: 440, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Elegant gold-plated chain bracelet with delicate links. Perfect for everyday luxury.', 
    rating: 4.8, 
    reviews: 156,
    badge: 'Premium Gold'
  },
  { 
    id: '3', 
    name: 'Gold Heart Pendant', 
    price: 440, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Minimalist gold heart pendant on a dainty chain. A timeless symbol of love.', 
    rating: 4.9, 
    reviews: 189,
    badge: 'Premium Gold'
  },
  { 
    id: '4', 
    name: 'Gold Evil Eye Bracelet', 
    price: 440, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Protection and style combined. Gold-plated evil eye charm with adjustable chain.', 
    rating: 4.7, 
    reviews: 143,
    badge: 'Premium Gold'
  },
  { 
    id: '5', 
    name: 'Gold Star Earrings', 
    price: 440, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Delicate gold star stud earrings. Shine bright with everyday elegance.', 
    rating: 4.8, 
    reviews: 167,
    badge: 'Premium Gold'
  },
  { 
    id: '6', 
    name: 'Gold Infinity Ring', 
    price: 440, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Endless love captured in a gold infinity symbol ring.', 
    rating: 4.6, 
    reviews: 134,
    badge: 'Premium Gold'
  },
  { 
    id: '7', 
    name: 'Gold Moon Necklace', 
    price: 440, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Crescent moon pendant in lustrous gold plating. Celestial beauty.', 
    rating: 4.9, 
    reviews: 201,
    badge: 'Premium Gold'
  },

  // Most Trendy
  { 
    id: '8', 
    name: '11:11 Wish Necklace', 
    price: 599, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Make a wish at 11:11. This meaningful necklace carries your dreams and intentions.', 
    rating: 5.0, 
    reviews: 312, 
    trending: true,
    badge: 'Most Trendy'
  },

  // Trending Memories
  { 
    id: '9', 
    name: 'Polaroid Memory Card', 
    price: 249, 
    category: 'memories', 
    image: '/assets/images/product.jpg', 
    description: 'Custom polaroid-style photo card with your favorite memory. Personalized and printed on premium card stock.', 
    rating: 4.9, 
    reviews: 278, 
    trending: true,
    badge: 'Trending Memories'
  },
  { 
    id: '10', 
    name: 'Spotify Song Card', 
    price: 299, 
    category: 'memories', 
    image: '/assets/images/product.jpg', 
    description: 'Your special song immortalized. Custom Spotify-style card with song code and artwork.', 
    rating: 5.0, 
    reviews: 345, 
    trending: true,
    badge: 'Trending Memories'
  },
  { 
    id: '11', 
    name: 'Spotify Acrylic Frame', 
    price: 549, 
    category: 'memories', 
    image: '/assets/images/product.jpg', 
    description: 'Premium acrylic frame displaying your favorite song. Includes Spotify code that can be scanned.', 
    rating: 4.9, 
    reviews: 267, 
    trending: true,
    badge: 'Trending Memories'
  },
  { 
    id: '12', 
    name: 'Polaroid Photo Set (5 prints)', 
    price: 399, 
    category: 'memories', 
    image: '/assets/images/product.jpg', 
    description: 'Set of 5 custom polaroid-style prints. Capture multiple memories in one beautiful package.', 
    rating: 4.8, 
    reviews: 198,
    badge: 'Trending Memories'
  },

  // Additional Premium Items
  { 
    id: '13', 
    name: 'Personalized Name Necklace', 
    price: 799, 
    category: 'personalized', 
    image: '/assets/images/product.jpg', 
    description: 'Custom name necklace in elegant script. Made just for you or your loved one.', 
    rating: 4.9, 
    reviews: 223
  },
  { 
    id: '14', 
    name: 'Rose Gold Charm Bracelet', 
    price: 890, 
    category: 'jewelry', 
    image: '/assets/images/product.jpg', 
    description: 'Delicate rose gold bracelet with customizable charms. Tell your story.', 
    rating: 4.7, 
    reviews: 178
  },
  { 
    id: '15', 
    name: 'Luxury Chocolate Gift Box', 
    price: 799, 
    category: 'chocolates', 
    image: '/assets/images/product.jpg', 
    description: 'Artisan Belgian chocolates in premium packaging. Pure indulgence.', 
    rating: 4.8, 
    reviews: 156
  },
  { 
    id: '16', 
    name: 'Scented Candle Trio', 
    price: 1299, 
    category: 'home', 
    image: '/assets/images/product.jpg', 
    description: 'Three luxury soy candles in signature scents. Create ambiance.', 
    rating: 4.9, 
    reviews: 189
  },
  { 
    id: '17', 
    name: 'Leather Journal & Pen Set', 
    price: 649, 
    category: 'accessories', 
    image: '/assets/images/product.jpg', 
    description: 'Premium leather-bound journal with matching pen. For thoughts worth keeping.', 
    rating: 4.6, 
    reviews: 134
  },
  { 
    id: '18', 
    name: 'Crystal Photo Frame', 
    price: 549, 
    category: 'personalized', 
    image: '/assets/images/product.jpg', 
    description: 'Elegant crystal frame with engraving option. Display your precious moments.', 
    rating: 4.7, 
    reviews: 167
  },
  { 
    id: '19', 
    name: 'Monogram Keychain', 
    price: 299, 
    category: 'accessories', 
    image: '/assets/images/product.jpg', 
    description: 'Personalized leather keychain with gold monogram. Everyday luxury.', 
    rating: 4.5, 
    reviews: 98
  },
  { 
    id: '20', 
    name: 'Silk Scrunchie Set', 
    price: 399, 
    category: 'accessories', 
    image: '/assets/images/product.jpg', 
    description: 'Set of 3 pure silk scrunchies. Gentle on hair, beautiful to wear.', 
    rating: 4.8, 
    reviews: 145
  },
  { 
    id: '21', 
    name: 'Aromatherapy Gift Set', 
    price: 1499, 
    category: 'wellness', 
    image: '/assets/images/product.jpg', 
    description: 'Essential oils and ceramic diffuser set. Create your sanctuary.', 
    rating: 4.9, 
    reviews: 178
  },
  { 
    id: '22', 
    name: 'Gourmet Tea Collection', 
    price: 699, 
    category: 'chocolates', 
    image: '/assets/images/product.jpg', 
    description: 'Curated selection of premium loose-leaf teas. A journey of flavors.', 
    rating: 4.7, 
    reviews: 156
  },
  { 
    id: '23', 
    name: 'Mini Succulent Garden', 
    price: 549, 
    category: 'home', 
    image: '/assets/images/product.jpg', 
    description: 'Three adorable succulents in ceramic pots. Life and beauty.', 
    rating: 4.6, 
    reviews: 123
  },
  { 
    id: '24', 
    name: 'Wooden Keepsake Box', 
    price: 849, 
    category: 'personalized', 
    image: '/assets/images/product.jpg', 
    description: 'Handcrafted wooden box with personalized engraving. Store treasures.', 
    rating: 4.8, 
    reviews: 189
  },
  { 
    id: '25', 
    name: 'Premium Gift Wrapping Service', 
    price: 149, 
    category: 'accessories', 
    image: '/assets/images/product.jpg', 
    description: 'Elevate any gift with our signature luxury wrapping. First impressions matter.', 
    rating: 5.0, 
    reviews: 412
  },
];

export const categories = [
  'all',
  'jewelry',
  'memories',
  'experience',
  'personalized',
  'chocolates',
  'home',
  'accessories',
  'wellness'
];
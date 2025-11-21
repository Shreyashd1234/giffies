"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import { ProductCard } from '@/components/shop/product-card';
import { QuickViewModal } from '@/components/shop/quick-view-modal';
import { products, categories } from '@/lib/products-data';
import { Product } from '@/lib/products-data';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(
    product => selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation />
        
        {/* Hero Banner */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#E8DFF5] to-[#F7E7CE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-heading font-bold text-6xl mb-4">
                Our <span className="text-gold">Collection</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover premium gifts for every occasion
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters & Sort */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-heading font-semibold text-lg">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${
                      selectedCategory === category
                        ? 'bg-[#D4AF37] text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="md:w-64">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-heading font-semibold text-lg">Sort By</h3>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#D4AF37] outline-none font-medium"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {sortedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-600">
            Showing {sortedProducts.length} of {products.length} products
          </div>
        </div>

        <Footer />

        {/* Quick View Modal */}
        <QuickViewModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </PageTransition>
  );
}

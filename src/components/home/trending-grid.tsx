"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products-data';
import { Star, TrendingUp } from 'lucide-react';
import { MetallicButton } from '@/components/ui/metallic-button';

export function TrendingGrid() {
  const trendingProducts = products.filter(p => p.trending).slice(0, 6);

  return (
    <section className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#6B4E71] font-semibold text-lg">TRENDING NOW</span>
          </div>
          <h2 className="font-heading font-bold text-5xl mb-4">
            Most Loved <span className="text-gold">Gifts</span>
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked favorites that are making hearts smile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/product/${product.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Trending
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-2 text-[#2C2C2C]">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-[#D4AF37]">
                          ₹{product.price}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                          <span className="text-sm font-semibold">{product.rating}</span>
                          <span className="text-sm text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop">
            <MetallicButton size="lg">
              View All Products
            </MetallicButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

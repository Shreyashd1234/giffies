"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products-data';
import { Star, Eye, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView: () => void;
}

export function ProductCard({ product, index, onQuickView }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Quick Actions Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                onQuickView();
              }}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Custom Badge */}
          {(product.badge || product.trending) && (
            <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {product.badge || 'Trending'}
            </div>
          )}
        </div>

        <div className="p-5">
          <p className="text-sm text-[#6B4E71] font-medium uppercase mb-2">
            {product.category}
          </p>
          <h3 className="font-heading font-semibold text-lg mb-2 text-[#2C2C2C] line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
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
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
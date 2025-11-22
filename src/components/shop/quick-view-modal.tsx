"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/products-data';
import { MetallicButton } from '@/components/ui/metallic-button';
import { useCartStore } from '@/lib/cart-store';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const addItem = useCartStore((state) => state.addItem);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {/* Badge */}
                  {(product.badge || product.trending) && (
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge || 'Trending'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm text-[#6B4E71] font-medium uppercase mb-2">
                    {product.category}
                  </p>
                  <h2 className="font-heading font-bold text-3xl mb-4">
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating ?? 0)
                              ? 'fill-[#D4AF37] text-[#D4AF37]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>

                  {/* Price */}
                  <p className="text-4xl font-bold text-[#D4AF37] mb-6">
                    ₹{product.price}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <MetallicButton
                      onClick={handleAddToCart}
                      className="flex-1"
                      size="lg"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </MetallicButton>
                    <Link href={`/product/${product.id}`} className="flex-1">
                      <MetallicButton
                        variant="outline"
                        className="w-full"
                        size="lg"
                      >
                        View Details
                      </MetallicButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
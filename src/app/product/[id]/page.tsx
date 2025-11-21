"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import { MetallicButton } from '@/components/ui/metallic-button';
import { products } from '@/lib/products-data';
import { useCartStore } from '@/lib/cart-store';
import { Star, ShoppingCart, Heart, Share2, Package } from 'lucide-react';

const allPackagingOptions = [
  { id: 'jiyo', name: 'Jiyo Box', price: 15, image: '/assets/images/packaging.jpg', onlyFor: 'memories' },
  { id: 'thankyou', name: 'Thank-You Box', price: 25, image: '/assets/images/packaging.jpg', forAll: true },
  { id: 'kraft', name: 'Kraft Sheet', price: 35, image: '/assets/images/packaging.jpg', notWith: 'jiyo' },
  { id: 'pink', name: 'Blush Pink', price: 15, image: '/assets/images/packaging.jpg', onlyFor: 'non-gold-jewelry' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);
  const addItem = useCartStore((state) => state.addItem);
  
  const [quantity, setQuantity] = useState(1);
  
  // Determine available packaging based on product
  const availablePackaging = useMemo(() => {
    if (!product) return [];
    
    const isMemory = product.category === 'memories';
    const isGoldJewelry = product.badge === 'Premium Gold' || product.category === 'jewelry';
    const isNonGoldJewelry = product.category === 'jewelry' && product.badge !== 'Premium Gold';
    
    return allPackagingOptions.filter(option => {
      // Jiyo: ONLY for memories
      if (option.id === 'jiyo' && !isMemory) return false;
      
      // Pink: ONLY for non-gold jewelry
      if (option.id === 'pink' && !isNonGoldJewelry) return false;
      
      // Kraft: Available for all (will be disabled if Jiyo selected)
      // Thank-You: Available for all
      return true;
    });
  }, [product]);

  const [selectedPackaging, setSelectedPackaging] = useState(availablePackaging[0]);
  
  // Delivery fee
  const deliveryFee = 40;

  if (!product) {
    return <div>Product not found</div>;
  }

  const totalPrice = product.price + (selectedPackaging?.price || 0) + deliveryFee;

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedPackaging?.id || 'none'}`,
      name: product.name,
      price: totalPrice,
      quantity: quantity,
      image: product.image,
      packaging: selectedPackaging?.name || 'None',
    });
  };

  const handleBuyNow = () => {
    const message = `Hi! I'd like to order:%0A%0A${product.name}%0APackaging: ${selectedPackaging?.name || 'None'}%0AQuantity: ${quantity}%0A%0ATotal: ₹${totalPrice * quantity}`;
    const whatsappUrl = `https://wa.me/918431157922?text=${message}`;
    
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation />

        <div className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden bg-white shadow-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {/* Badge */}
                  {(product.badge || product.trending) && (
                    <div className="absolute top-6 right-6 bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {product.badge || 'Trending'}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Details Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <p className="text-sm text-[#6B4E71] font-medium uppercase mb-2">
                  {product.category}
                </p>
                <h1 className="font-heading font-bold text-5xl mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-[#D4AF37] text-[#D4AF37]'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-5xl font-bold text-[#D4AF37] mb-2">
                    ₹{totalPrice}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Product: ₹{product.price}</p>
                    {selectedPackaging && selectedPackaging.price > 0 && (
                      <p>Packaging: ₹{selectedPackaging.price}</p>
                    )}
                    <p>Delivery: ₹{deliveryFee}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Packaging Options */}
                {availablePackaging.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="w-5 h-5 text-[#D4AF37]" />
                      <h3 className="font-heading font-semibold text-xl">
                        Choose Packaging
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {availablePackaging.map((option) => {
                        // Disable Kraft if Jiyo is selected
                        const isDisabled = option.id === 'kraft' && selectedPackaging?.id === 'jiyo';
                        
                        return (
                          <motion.button
                            key={option.id}
                            whileHover={!isDisabled ? { scale: 1.05 } : {}}
                            whileTap={!isDisabled ? { scale: 0.95 } : {}}
                            onClick={() => !isDisabled && setSelectedPackaging(option)}
                            disabled={isDisabled}
                            className={`relative p-4 rounded-xl border-2 transition-all ${
                              isDisabled
                                ? 'opacity-50 cursor-not-allowed border-gray-200'
                                : selectedPackaging?.id === option.id
                                ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="relative h-24 mb-2 rounded-lg overflow-hidden">
                              <Image
                                src={option.image}
                                alt={option.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="font-semibold text-sm mb-1">{option.name}</p>
                            <p className="text-[#D4AF37] font-bold">
                              +₹{option.price}
                            </p>
                            {option.id === 'jiyo' && product.category === 'memories' && (
                              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                Recommended
                              </span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-xl mb-4">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-white border-2 border-gray-200 rounded-lg font-bold hover:border-[#D4AF37] transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 bg-white border-2 border-gray-200 rounded-lg font-bold hover:border-[#D4AF37] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-6">
                  <MetallicButton
                    onClick={handleAddToCart}
                    className="flex-1"
                    size="lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </MetallicButton>
                  <MetallicButton
                    onClick={handleBuyNow}
                    variant="purple"
                    className="flex-1"
                    size="lg"
                  >
                    Buy Now
                  </MetallicButton>
                </div>

                {/* Secondary Actions */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors">
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import { MetallicButton } from '@/components/ui/metallic-button';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 'luxury-jewelry',
    title: 'Luxury Jewelry Collection',
    description: 'Exquisite pieces that tell a story of elegance and sophistication',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200',
    color: 'from-[#D4AF37] to-[#B8941E]'
  },
  {
    id: 'artisan-chocolates',
    title: 'Artisan Chocolates & Sweets',
    description: 'Handcrafted delicacies that melt hearts and create sweet memories',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=1200',
    color: 'from-[#6B4E71] to-[#4A3352]'
  },
  {
    id: 'wellness-spa',
    title: 'Wellness & Spa Collection',
    description: 'Curated self-care essentials for moments of tranquility and rejuvenation',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200',
    color: 'from-[#B8A5C7] to-[#6B4E71]'
  },
  {
    id: 'premium-accessories',
    title: 'Premium Accessories',
    description: 'Sophisticated pieces that elevate everyday style with timeless charm',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200',
    color: 'from-[#E0BFB8] to-[#D4AF37]'
  }
];

export default function CollectionsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#E8DFF5] to-[#F7E7CE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-heading font-bold text-6xl mb-4">
                Trending <span className="text-gold">Collections</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our carefully curated collections designed for every special moment
              </p>
            </motion.div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-20`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
                        <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wide">
                          Collection {index + 1}
                        </span>
                      </div>
                      
                      <h2 className="font-heading font-bold text-5xl mb-6">
                        {collection.title}
                      </h2>
                      
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {collection.description}
                      </p>

                      <Link href="/shop">
                        <MetallicButton size="lg" variant="gold">
                          Explore Collection
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </MetallicButton>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#6B4E71] to-[#4A3352]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-5xl text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-[#E8DFF5] mb-8">
                Let our gift experts help you find the perfect present
              </p>
              <Link href="/shop">
                <MetallicButton size="lg">
                  Browse All Products
                </MetallicButton>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}

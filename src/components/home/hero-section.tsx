"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MetallicButton } from '@/components/ui/metallic-button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8DFF5] via-[#F7E7CE] to-[#F4E5C2]">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#B8A5C7]/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-bold text-6xl md:text-8xl mb-6">
            <span className="block text-[#2C2C2C]">Gifts That Feel</span>
            <span className="block text-gold shimmer">Personal.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#2C2C2C]/80 max-w-3xl mx-auto mb-12">
            Curated for every occasion. Crafted with love.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/shop">
              <MetallicButton size="lg" variant="gold">
                Shop Trending
              </MetallicButton>
            </Link>
            <Link href="/corporate">
              <MetallicButton size="lg" variant="outline">
                Corporate Solutions
              </MetallicButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
      </motion.div>
    </section>
  );
}
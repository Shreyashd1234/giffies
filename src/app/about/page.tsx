"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import { MetallicButton } from '@/components/ui/metallic-button';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'Crafted with Love',
    description: 'Every gift is carefully curated with passion and attention to detail'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We partner with the finest artisans to bring you exceptional products'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction and joy are at the heart of everything we do'
  },
  {
    icon: Sparkles,
    title: 'Memorable Experiences',
    description: 'We create moments that linger in hearts long after the gift is opened'
  }
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'GIFFIES was born from a passion for meaningful gifting' },
  { year: '2021', title: '10K+ Gifts', description: 'Delivered joy to over 10,000 happy customers' },
  { year: '2022', title: 'Corporate Launch', description: 'Expanded to corporate gifting solutions' },
  { year: '2024', title: '50K+ Smiles', description: 'Creating precious moments across India' }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-[#E8DFF5] to-[#F7E7CE] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="font-heading font-bold text-6xl mb-6">
                  Our <span className="text-gold">Story</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Giffies began as a simple idea: that a small, beautifully chosen object can hold an entire memory.
                  We curate premium yet affordable gifts — elegant jewellery, heartfelt memory prints, Spotify keepsakes — and wrap them with care so every unboxing feels like a ritual.
                  At Giffies, we don’t just sell products. We create moments people remember.
                </p>
                <Link href="/shop">
                  <MetallicButton size="lg">
                    Explore Our Gifts
                  </MetallicButton>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?w=1200"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-heading font-bold text-5xl mb-8">
                Our <span className="text-gold">Mission</span>
              </h2>
              <p className="text-2xl text-gray-700 leading-relaxed italic">
                "To transform the art of gifting into a luxurious experience that celebrates relationships, 
                creates lasting memories, and brings joy to every special occasion."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-[#FFF8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-bold text-5xl mb-4">
                Our <span className="text-gold">Values</span>
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones and Team sections removed per user request */}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#E8DFF5] to-[#F7E7CE]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-5xl mb-6">
                Join Our <span className="text-gold">Journey</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Become part of the GIFFIES family and experience gifting like never before
              </p>
              <Link href="/shop">
                <MetallicButton size="lg">
                  Start Shopping
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
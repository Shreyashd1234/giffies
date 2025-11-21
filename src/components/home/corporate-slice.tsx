"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MetallicButton } from '@/components/ui/metallic-button';
import { Building2, Users, Award, Sparkles } from 'lucide-react';

const features = [
  { icon: Building2, text: 'Bulk Orders' },
  { icon: Users, text: 'Dedicated Support' },
  { icon: Award, text: 'Premium Branding' },
  { icon: Sparkles, text: 'Custom Packaging' }
];

export function CorporateSlice() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#6B4E71] font-semibold text-lg mb-4 block">
              FOR BUSINESSES
            </span>
            <h2 className="font-heading font-bold text-5xl mb-6">
              Elevate Your <span className="text-gold">Corporate Gifting</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Strengthen relationships and celebrate milestones with our premium corporate gifting solutions. 
              From employee appreciation to client gifts, we make your brand unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-[#FFF8F0] rounded-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-[#2C2C2C]">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/corporate">
              <MetallicButton size="lg" variant="purple">
                Explore Corporate Solutions
              </MetallicButton>
            </Link>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513519245088-0e3ad4e6e40d?w=800"
                  alt="Corporate gift 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800"
                  alt="Corporate gift 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
                  alt="Corporate gift 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800"
                  alt="Corporate gift 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

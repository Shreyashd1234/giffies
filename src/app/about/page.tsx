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
                  Giffies began as a simple idea: that a thoughtfully chosen object can become the container for a moment. We curate small, beautifully crafted gifts — from memory-rich polaroids and Spotify keepsakes to elegant everyday jewellery — and wrap them with care so every unboxing feels like a ritual. Our pieces are designed to be given, remembered and kept. At Giffies, we don't sell products — we craft moments.
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

        {/* Milestones Timeline */}
        <section className="py-24 bg-gradient-to-br from-[#6B4E71] to-[#4A3352]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-bold text-5xl text-white mb-4">
                Our <span className="text-gold">Journey</span>
              </h2>
              <p className="text-xl text-[#E8DFF5]">
                Milestones that mark our growth and commitment
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4AF37]/30" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                      <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6">
                        <div className="text-4xl font-heading font-bold text-[#D4AF37] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-[#E8DFF5]">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:block w-6 h-6 bg-[#D4AF37] rounded-full border-4 border-[#6B4E71] relative z-10" />

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-bold text-5xl mb-4">
                Meet Our <span className="text-gold">Team</span>
              </h2>
              <p className="text-xl text-gray-600">
                Passionate individuals dedicated to making every gift special
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Priya Sharma', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
                { name: 'Rahul Verma', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
                { name: 'Ananya Reddy', role: 'Head of Customer Experience', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-heading font-bold text-2xl mb-1">{member.name}</h3>
                      <p className="text-[#D4AF37]">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
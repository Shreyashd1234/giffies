"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Gift, Camera } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Thought',
    description: 'Every gift begins with a thoughtful idea — a moment you want to celebrate',
    color: 'from-[#F4E5C2] to-[#D4AF37]'
  },
  {
    icon: Palette,
    title: 'Personalisation',
    description: 'Add your unique touch with custom messages and carefully chosen details',
    color: 'from-[#E8DFF5] to-[#B8A5C7]'
  },
  {
    icon: Gift,
    title: 'Unboxing',
    description: 'Experience the magic as premium packaging reveals something truly special',
    color: 'from-[#F7E7CE] to-[#E0BFB8]'
  },
  {
    icon: Camera,
    title: 'Memories',
    description: 'The gift becomes a cherished memory, kept and treasured forever',
    color: 'from-[#D4AF37] to-[#B8941E]'
  }
];

export function GiftingRitual() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-5xl mb-4">
            Signature <span className="text-gold">Gifting Ritual</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four moments that transform a gift into an unforgettable experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center font-heading font-bold text-white text-xl shadow-lg">
                  {index + 1}
                </div>

                <h3 className="font-heading font-bold text-2xl mb-3 text-[#2C2C2C]">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
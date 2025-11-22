"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '@giffies_acessories',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    text: 'Thanks @giffies_acessories for the gift! The brand truly understands people’s choices. Looking forward to ordering more amazing pieces.',
    rating: 5
  },
  {
    name: '@giffies.co',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    text: 'Thanks @giffies.co for the Spotify cards. I’m absolutely in love! Aesthetic, well-printed and each one feels like a little memory with its own soundtrack.',
    rating: 5
  },
  {
    name: '@giffies.co',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    text: 'Thanks @giffies.co for this personalized Spotify frame. The quality and detailing were perfect — made the moment even more special.',
    rating: 5
  },
  {
    name: '@giffies.co',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    text: 'Thanks @giffies.co for these wonderful polaroids. Quality is amazing, packaging is beautiful and delivery was super fast!',
    rating: 5
  },
  {
    name: '@giffies.co',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    text: 'Just received my order from @giffies.co and I’m OBSESSED! Beautiful pieces, premium packaging and amazing quality. Definitely ordering again.',
    rating: 5
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF8F0] to-[#F7E7CE] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-10 left-10 w-32 h-32 text-[#D4AF37]" />
        <Quote className="absolute bottom-10 right-10 w-32 h-32 text-[#D4AF37] rotate-180" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-5xl mb-4">
            What Our <span className="text-gold">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of happy customers who trust GIFFIES
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#D4AF37] flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <h4 className="font-heading font-bold text-xl text-[#2C2C2C]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#6B4E71] font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#D4AF37] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
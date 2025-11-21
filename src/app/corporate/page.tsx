"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import { MetallicButton } from '@/components/ui/metallic-button';
import { Building2, Users, Award, Sparkles, Check, Mail, Phone, User } from 'lucide-react';

const benefits = [
  { icon: Building2, title: 'Bulk Ordering', description: 'Seamless ordering process for large quantities with special pricing' },
  { icon: Users, title: 'Dedicated Account Manager', description: 'Personal assistance for all your corporate gifting needs' },
  { icon: Award, title: 'Premium Branding', description: 'Custom packaging with your company logo and branding' },
  { icon: Sparkles, title: 'Flexible Solutions', description: 'Tailored gift solutions for any budget and occasion' }
];

const useCases = [
  'Employee Appreciation & Recognition',
  'Client Gifts & Thank You Packages',
  'Holiday & Festival Gifting',
  'Milestone Celebrations',
  'New Hire Welcome Kits',
  'Conference & Event Gifts'
];

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Corporate Inquiry:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-[#6B4E71] to-[#4A3352] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="font-heading font-bold text-6xl text-white mb-6">
                  Elevate Your <span className="text-gold">Corporate Gifting</span>
                </h1>
                <p className="text-xl text-[#E8DFF5] mb-8 leading-relaxed">
                  Strengthen relationships, celebrate achievements, and create lasting impressions 
                  with our premium corporate gifting solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <MetallicButton size="lg">
                    Request a Quote
                  </MetallicButton>
                  <MetallicButton size="lg" variant="outline">
                    View Catalog
                  </MetallicButton>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200"
                  alt="Corporate gifting"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-bold text-5xl mb-4">
                Why Choose <span className="text-gold">GIFFIES</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We make corporate gifting effortless with our comprehensive solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#FFF8F0] rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-[#FFF8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-5xl mb-6">
                  Perfect For Every <span className="text-gold">Occasion</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  From employee recognition to client appreciation, we have the perfect gift solutions
                </p>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-medium text-[#2C2C2C]">{useCase}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1513519245088-0e3ad4e6e40d?w=800" alt="Gift 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800" alt="Gift 2" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800" alt="Gift 3" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800" alt="Gift 4" fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-5xl mb-4">
                Get In <span className="text-gold">Touch</span>
              </h2>
              <p className="text-xl text-gray-600">
                Let's discuss your corporate gifting needs
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-[#FFF8F0] to-[#F7E7CE] rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-2">
                    <User className="w-4 h-4 text-[#D4AF37]" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-2">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-2">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-2">
                    <Building2 className="w-4 h-4 text-[#D4AF37]" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-semibold text-[#2C2C2C] mb-2 block">
                  Tell us about your requirements
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF37] outline-none transition-colors resize-none"
                  placeholder="Number of gifts needed, occasion, budget, timeline..."
                />
              </div>

              <MetallicButton type="submit" size="lg" className="w-full">
                Send Inquiry
              </MetallicButton>
            </motion.form>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}

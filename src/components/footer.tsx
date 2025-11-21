"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#6B4E71] to-[#4A3352] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-gold mb-4">GIFFIES</h3>
            <p className="text-[#E8DFF5] mb-6">
              Crafting moments of joy with premium gifting experiences
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">Shop All</Link></li>
              <li><Link href="/collections" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">Collections</Link></li>
              <li><Link href="/corporate" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">Corporate Gifts</Link></li>
              <li><Link href="/about" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">Returns</a></li>
              <li><a href="#" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-[#E8DFF5] hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#E8DFF5]">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>8431157922</span>
              </li>
              <li className="flex items-start gap-2 text-[#E8DFF5]">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>giffiesstudio@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#E8DFF5] text-center md:text-left">
              © 2024 GIFFIES. All rights reserved.
            </p>
            <p className="text-[#E8DFF5] text-center md:text-right">
              Developed by <span className="text-[#D4AF37] font-semibold">Nextverse</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
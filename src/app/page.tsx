"use client";

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/home/hero-section';
import { GiftingRitual } from '@/components/home/gifting-ritual';
import { TrendingGrid } from '@/components/home/trending-grid';
import { GiftFinder } from '@/components/home/gift-finder';
import { CorporateSlice } from '@/components/home/corporate-slice';
import { TestimonialCarousel } from '@/components/home/testimonial-carousel';
import { PageTransition } from '@/components/page-transition';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Gifting Ritual Steps */}
        <GiftingRitual />
        
        {/* Trending Collections Grid */}
        <TrendingGrid />
        
        {/* Gift Finder */}
        <GiftFinder />
        
        {/* Corporate Slice */}
        <CorporateSlice />
        
        {/* Testimonials */}
        <TestimonialCarousel />
        
        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}
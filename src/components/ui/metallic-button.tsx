"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MetallicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'purple' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function MetallicButton({ 
  variant = 'gold', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: MetallicButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    gold: 'bg-gradient-to-r from-[#F4E5C2] via-[#D4AF37] to-[#B8941E] text-[#2C2C2C] hover:shadow-xl',
    purple: 'bg-gradient-to-r from-[#E8DFF5] via-[#B8A5C7] to-[#6B4E71] text-white hover:shadow-xl',
    outline: 'bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C2C2C]'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative font-heading font-semibold rounded-full overflow-hidden transition-all duration-300',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant !== 'outline' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
}

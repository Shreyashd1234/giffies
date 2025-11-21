"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { MetallicButton } from '@/components/ui/metallic-button';
import { Gift, User, Calendar, DollarSign } from 'lucide-react';

const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Corporate', 'Thank You', 'Get Well'];
const recipients = ['Him', 'Her', 'Parents', 'Friends', 'Colleagues', 'Kids'];
const budgets = ['Under ₹1000', '₹1000-₹2000', '₹2000-₹3000', 'Above ₹3000'];

export function GiftFinder() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    occasion: '',
    recipient: '',
    budget: ''
  });

  const handleSelection = (field: string, value: string) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleFind = () => {
    router.push('/shop');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#6B4E71] to-[#4A3352] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Gift className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="font-heading font-bold text-5xl mb-4 text-white">
            Find Your Perfect Gift
          </h2>
          <p className="text-xl text-[#E8DFF5]">
            Answer three quick questions and we'll help you find the ideal gift
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                    s <= step ? 'bg-[#D4AF37] text-white' : 'bg-white/20 text-white/50'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                className="h-full bg-[#D4AF37]"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Occasion */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    What's the occasion?
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {occasions.map((occasion) => (
                    <button
                      key={occasion}
                      onClick={() => handleSelection('occasion', occasion)}
                      className="p-4 bg-white/10 hover:bg-[#D4AF37] text-white rounded-xl transition-all duration-200 hover:scale-105 font-medium"
                    >
                      {occasion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Recipient */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    Who is it for?
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {recipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => handleSelection('recipient', recipient)}
                      className="p-4 bg-white/10 hover:bg-[#D4AF37] text-white rounded-xl transition-all duration-200 hover:scale-105 font-medium"
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    What's your budget?
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => handleSelection('budget', budget)}
                      className="p-4 bg-white/10 hover:bg-[#D4AF37] text-white rounded-xl transition-all duration-200 hover:scale-105 font-medium"
                    >
                      {budget}
                    </button>
                  ))}
                </div>

                {selections.budget && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <MetallicButton onClick={handleFind} size="lg">
                      Find My Perfect Gift
                    </MetallicButton>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {step > 1 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setStep(step - 1)}
                className="text-white/80 hover:text-white underline"
              >
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

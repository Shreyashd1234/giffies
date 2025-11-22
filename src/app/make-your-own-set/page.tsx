"use client";

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Check } from 'lucide-react';
import { products, Product } from '@/lib/products-data';
import { useCartStore } from '@/lib/cart-store';
import { PageTransition } from '@/components/page-transition';
import { MetallicButton } from '@/components/ui/metallic-button';
import { Navigation } from '@/components/navigation';

const CATEGORIES = ['necklace', 'earrings', 'bracelet', 'ring'];

function matchCategory(product: Product, cat: string) {
  const name = product.name.toLowerCase();
  const tags = (product.tags || []).map(t => t.toLowerCase());

  // helper to test whole-word presence in the name
  const hasWord = (w: string) => new RegExp(`\\b${w}\\b`, 'i').test(name);

  if (cat === 'necklace') return hasWord('necklace') || tags.includes('necklace') || tags.includes('1111');

  // For earrings, avoid matching 'ear' substring in words like 'pearl'.
  if (cat === 'earrings') {
    return hasWord('earring') || hasWord('earrings') || tags.includes('earring') || tags.includes('earings') || tags.includes('earrings');
  }

  if (cat === 'bracelet') return hasWord('bracelet') || tags.includes('bracelet') || tags.includes('beads');

  // For rings, ensure we're matching the word 'ring' but not 'earring' (handled above)
  if (cat === 'ring') return hasWord(' ring') || hasWord('ring') || tags.includes('ring');

  return false;
}

export default function MakeYourOwnSetPage() {
  const jewellery = products.filter(p => p.category === 'jewellery' || p.category === 'jewelry');
  const [filter, setFilter] = useState<string>('necklace');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const addItem = useCartStore((s) => s.addItem);

  const productsByCategory = useMemo(() => {
    const map: Record<string, Product[]> = {};
    CATEGORIES.forEach(cat => {
      map[cat] = jewellery.filter(p => (p.jewelleryType === cat) || matchCategory(p, cat));
    });
    return map;
  }, [jewellery]);

  const toggle = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const selectedProducts = useMemo(() => jewellery.filter(p => selectedIds.includes(p.id)), [selectedIds, jewellery]);
  const subtotal = selectedProducts.reduce((s, p) => s + (p.price || 0), 0);

  // Determine completeness: at least one selection per category
  const hasCategorySelected = (cat: string) => selectedProducts.some(p => matchCategory(p, cat));
  const isCompleteSet = CATEGORIES.every(cat => hasCategorySelected(cat));

  // Discount rules:
  // - If complete set (at least one from each category) => max discount 12%
  // - Else if 3 or more items selected => 10%
  // - Otherwise 0
  const computedDiscountPercent = isCompleteSet ? 12 : (selectedProducts.length >= 3 ? 10 : 0);

  // Manual discount control: allow user/checkout to pick any percent up to 12%
  const [autoApplyDiscount, setAutoApplyDiscount] = useState<boolean>(true);
  const [manualDiscountPercent, setManualDiscountPercent] = useState<number>(computedDiscountPercent);

  // actual percent used
  const discountPercent = autoApplyDiscount ? computedDiscountPercent : Math.min(12, Math.max(0, manualDiscountPercent));
  const discount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discount;

  const handleAddSetToCart = () => {
    if (!isCompleteSet) {
      alert('Please select at least one item from each category to create a complete set.');
      return;
    }
    const id = `set-${Date.now()}`;
    const name = `Custom Set (${selectedProducts.length} items)`;
    const image = selectedProducts[0]?.image || '/assets/images/product.jpg';

    addItem({ id, name, price: total, quantity: 1, image });
    // clear selection
    setSelectedIds([]);
    alert('Custom set added to cart with applied discount.');
  };

  const handleCheckoutWhatsApp = () => {
    if (!isCompleteSet) {
      alert('Please select at least one item from each category to create a complete set before checking out.');
      return;
    }

    const lines = selectedProducts.map(p => `- ${p.name} (₹${p.price})`);
    lines.push('');
    lines.push(`Subtotal: ₹${subtotal}`);
    lines.push(`Discount (${discountPercent}%): -₹${discount}`);
    lines.push(`Total: ₹${total}`);

    const message = `Hi! I'd like to place a Custom Set order:%0A%0A${lines.join('%0A')}`;
    const whatsappUrl = `https://wa.me/918431157922?text=${message}`;

    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage({ type: 'OPEN_EXTERNAL_URL', data: { url: whatsappUrl } }, '*');
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation />

        <div className="pt-28 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="font-heading font-bold text-4xl">Make Your Own Set</h1>
              <p className="text-gray-600 mt-2">Choose jewellery pieces to create a set — get 10% off when you select 3 or more items.</p>
            </div>

            <div className="space-y-10">
              <p className="text-center text-sm text-gray-600">Create a complete set by choosing at least one item from each category below. Complete sets get up to <strong>12% off</strong>.</p>

              {CATEGORIES.map((cat) => (
                <section key={cat} className="">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{cat.charAt(0).toUpperCase() + cat.slice(1)}s</h3>
                    <div className="text-sm text-gray-600">Selected: <strong>{selectedProducts.filter(p => matchCategory(p, cat)).length}</strong></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productsByCategory[cat].map((product) => (
                      <div key={product.id} className={`bg-white rounded-2xl overflow-hidden shadow p-4 flex flex-col hover:shadow-2xl transition`}> 
                        <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                          <p className="text-2xl font-bold text-[#D4AF37]">₹{product.price}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <button
                              type="button"
                              onClick={() => toggle(product.id)}
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-shadow border ${selectedIds.includes(product.id) ? 'bg-[#D4AF37] text-white shadow-md border-transparent' : 'bg-white text-[#2C2C2C] hover:shadow-sm'}`}
                            >
                              {selectedIds.includes(product.id) ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>Added</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-4 h-4" />
                                  <span>Add</span>
                                </>
                              )}
                            </button>
                          </div>
                          <Link href={`/product/${product.id}`} className="text-sm text-[#6B4E71] underline">View</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-2xl p-6 shadow">
              <div className="md:flex md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Selected items: <strong>{selectedProducts.length}</strong></p>
                  <p className="text-sm text-gray-600">Subtotal: ₹{subtotal}</p>

                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Discount</div>
                      <div className="text-sm font-semibold text-[#D4AF37]">{discountPercent}% (max 12%)</div>
                    </div>

                    {/* Auto/manual toggle */}
                    <div className="flex items-center gap-4 mb-3">
                      <label className="inline-flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={autoApplyDiscount} onChange={(e) => setAutoApplyDiscount(e.target.checked)} />
                        <span>Auto apply</span>
                      </label>
                      <div className="text-xs text-gray-500">(Auto uses the best rule: complete set → 12%, else 3+ items → 10%)</div>
                    </div>

                    {/* Preset buttons */}
                    <div className="flex items-center gap-2 mb-2">
                      {[0, 5, 8, 10, 12].map((p) => (
                        <button
                          key={p}
                          onClick={() => { setManualDiscountPercent(p); setAutoApplyDiscount(false); }}
                          className={`px-3 py-1 rounded-full border text-sm ${manualDiscountPercent === p && !autoApplyDiscount ? 'bg-[#D4AF37] text-white' : 'bg-white'}`}
                        >
                          {p}%
                        </button>
                      ))}
                    </div>

                    {/* Slider */}
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min={0}
                        max={12}
                        value={manualDiscountPercent}
                        onChange={(e) => { setManualDiscountPercent(Number(e.target.value)); setAutoApplyDiscount(false); }}
                        className="w-full"
                      />
                      <div className="w-12 text-right font-semibold">{manualDiscountPercent}%</div>
                    </div>

                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941E]"
                          style={{ width: `${(discountPercent / 12) * 100}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Discount amount: <strong>₹{discount}</strong></p>
                      <p className="text-xl font-bold mt-2">Total: ₹{total}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-3">
                  <button onClick={() => setSelectedIds([])} className="px-4 py-2 border rounded-md">Clear</button>
                  <MetallicButton onClick={handleAddSetToCart} disabled={!isCompleteSet} size="lg">
                    Add Set to Cart
                  </MetallicButton>
                  <MetallicButton onClick={handleCheckoutWhatsApp} variant="gold" size="lg">
                    Checkout via WhatsApp
                  </MetallicButton>
                </div>
              </div>
              {!isCompleteSet && (
                <p className="mt-3 text-sm text-red-600">To avail the set discount, please select at least one item from each category: {CATEGORIES.map(c => c.charAt(0).toUpperCase()+c.slice(1)).join(', ')}.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function TherapyCarousel({ slides }) {
  const len = Array.isArray(slides) ? slides.length : 0;
  const [index, setIndex] = useState(0);

  // Reset index if slides change or shrink
  useEffect(() => {
    if (index >= len) setIndex(0);
  }, [len, index]);

  // Autoplay interval; guard inside the effect
  useEffect(() => {
    if (len <= 1) return; // nothing to rotate
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, 6000);
    return () => clearInterval(id);
  }, [len]);

  // Early return is now AFTER hooks (allowed)
  if (len === 0) return null;

  const slide = slides[index];

  return (
    <div className="relative w-full max-w-3xl aspect-[4/3] mx-auto overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0.2, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.img}
            alt={slide.alt || 'Therapy image'}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {len > 1 && (
        <button
          onClick={() => setIndex((index + 1) % len)}
          className="absolute bottom-4 right-4 bg-white/70 hover:bg-white text-black text-sm rounded-full px-4 py-2 shadow"
        >
          Next
        </button>
      )}
    </div>
  );
}

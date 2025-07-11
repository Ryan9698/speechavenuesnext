'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function TherapyCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
            src={slides[index].img}
            alt={slides[index].alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setIndex((index + 1) % slides.length)}
        className="absolute bottom-4 right-4 bg-white/70 hover:bg-white text-black text-sm rounded-full px-4 py-2 shadow"
      >
        Next
      </button>
    </div>
  );
}

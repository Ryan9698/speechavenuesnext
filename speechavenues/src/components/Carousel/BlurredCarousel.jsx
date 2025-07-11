'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function BlurredCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-xl">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slides[index].img}
          alt={slides[index].alt}
          fill
          className="object-cover blur-xl scale-110 brightness-75"
          priority
        />
      </div>

      {/* Foreground Centered Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0.2, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex items-center justify-center w-full h-full"
        >
          <Image
            src={slides[index].img}
            alt={slides[index].alt}
            width={720}
            height={720}
            className="rounded-lg object-contain max-h-[90%] max-w-[90%] shadow-lg"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Optional Next Button */}
      <button
        onClick={() => setIndex((index + 1) % slides.length)}
        className="absolute bottom-4 right-4 z-20 bg-white/70 hover:bg-white text-black text-sm rounded-full px-4 py-2 shadow"
      >
        Next
      </button>
    </div>
  );
}

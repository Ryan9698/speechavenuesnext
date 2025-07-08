'use client';
import { motion, AnimatePresence } from 'framer-motion';

export const GalleryAnimation = ({ children, page }) => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        ease: [0.25, 1, 0.5, 1],
        duration: 0.6,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

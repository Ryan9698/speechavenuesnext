// components/wrappers/AnimatedWrapper.jsx
'use client';
import { motion } from 'framer-motion';

export default function AnimatedWrapper({ children, delay = 0.1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

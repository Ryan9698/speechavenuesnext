import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-lg max-w-xl w-full p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={onClose}
              >
                ✕
              </button>
            </div>

            {/* Content Section */}
            <div>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ModalClient({ triggerLabel, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500 hover:-translate-y-0.5 w-full sm:w-auto"
        onClick={() => setIsOpen(true)}
      >
        {triggerLabel}
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                className="modal-content bg-white rounded-md shadow-lg w-11/12 max-w-3xl p-6 overflow-y-auto max-h-[70vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
              >
                {/* Close Button */}
                <button
                  className="text-gray-600 hover:text-gray-900 float-right"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
                <div>{children}</div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

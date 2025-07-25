'use client';
import React, { useState } from 'react';
import { packets } from '@/data/PacketList';
import { FileText, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PacketList() {
  const [showAdults, setShowAdults] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  const toggleAdults = () => setShowAdults((prev) => !prev);
  const toggleChildren = () => setShowChildren((prev) => !prev);

  const sectionClasses =
    'border border-gray-200 rounded-lg shadow-sm bg-white p-4 mb-6';

  return (
    <div className="my-8 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
        Downloadable Intake Packets
      </h2>

      {/* Adults Section */}
      <div className={sectionClasses}>
        <button
          onClick={toggleAdults}
          className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        >
          <span className="flex items-center gap-2">
            <FileText className="text-indigo-600" /> Adult Intake Forms
          </span>
          {showAdults ? (
            <ChevronUp className="text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-500" />
          )}
        </button>

        <AnimatePresence>
          {showAdults && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-3"
            >
              {packets
                .filter((p) =>
                  Array.isArray(p.category)
                    ? p.category.includes('Adults')
                    : p.category === 'Adults'
                )
                .map((packet) => (
                  <div
                    key={packet.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-md border hover:shadow-md transition"
                  >
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        {packet.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {packet.description}
                      </p>
                    </div>
                    <a
                      href={packet.url}
                      download
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      <Download size={18} />
                      Download
                    </a>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Children Section */}
      <div className={sectionClasses}>
        <button
          onClick={toggleChildren}
          className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        >
          <span className="flex items-center gap-2">
            <FileText className="text-green-600" /> Child Intake Forms
          </span>
          {showChildren ? (
            <ChevronUp className="text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-500" />
          )}
        </button>

        <AnimatePresence>
          {showChildren && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-3"
            >
              {packets
                .filter((p) =>
                  Array.isArray(p.category)
                    ? p.category.includes('Children')
                    : p.category === 'Children'
                )
                .map((packet) => (
                  <div
                    key={packet.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-md border hover:shadow-md transition"
                  >
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        {packet.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {packet.description}
                      </p>
                    </div>
                    <a
                      href={packet.url}
                      download
                      className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 font-medium"
                    >
                      <Download size={18} />
                      Download
                    </a>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

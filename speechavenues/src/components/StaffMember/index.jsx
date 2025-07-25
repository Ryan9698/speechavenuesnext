'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StaffMember({ name, role, bio, imageUrl, alt }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate logic
  const truncatedBio = bio.length > 150 ? bio.slice(0, 150) + '...' : bio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center max-w-xs mx-auto"
    >
      {/* Profile Image */}
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md">
        <Image
          src={imageUrl}
          alt={alt}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name & Role */}
      <h3 className="mt-4 text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-indigo-600 font-medium">{role}</p>

      {/* Bio Section */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        className="mt-3 text-gray-600 text-sm leading-relaxed"
      >
        <p className={`${!isExpanded ? 'line-clamp-4' : ''}`}>
          {isExpanded ? bio : truncatedBio}
        </p>
      </motion.div>

      {/* Toggle Button */}
      {bio.length > 120 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-indigo-500 text-sm font-medium hover:underline"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </motion.div>
  );
}

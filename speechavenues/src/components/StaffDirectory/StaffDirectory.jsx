'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function StaffDirectory({ staff }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [expandedIds, setExpandedIds] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleInlineBio = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ESC key closes modal
  useEffect(() => {
    const closeOnEsc = (e) => e.key === 'Escape' && setSelectedMember(null);
    window.addEventListener('keydown', closeOnEsc);
    return () => window.removeEventListener('keydown', closeOnEsc);
  }, []);

  return (
    <>
      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        {staff.map((member) => {
          const isExpanded = expandedIds[member.id];

          return (
            <div
              key={member.id}
              role="button"
              tabIndex={0}
              onClick={() =>
                isMobile
                  ? toggleInlineBio(member.id)
                  : setSelectedMember(member)
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  isMobile
                    ? toggleInlineBio(member.id)
                    : setSelectedMember(member);
                }
              }}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center p-8 space-y-4"
            >
              {/* Profile Image */}
              <div className="w-36 h-36 relative">
                <Image
                  src={member.imageUrl}
                  alt={member.alt || member.name}
                  fill
                  className="rounded-full border-4 border-indigo-100 object-cover shadow-[0_4px_15px_rgba(99,102,241,0.15)]"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-indigo-600 font-medium">
                {member.role}
              </p>

              {/* Bio for Mobile */}
              {isMobile ? (
                isExpanded ? (
                  <>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleInlineBio(member.id);
                      }}
                      className="text-indigo-500 hover:text-indigo-700 font-medium text-sm"
                    >
                      Read Less
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {member.bio}
                    </p>
                    <p className="text-indigo-500 text-sm font-medium">
                      Tap to Read More
                    </p>
                  </>
                )
              ) : (
                <p className="text-gray-600 text-sm line-clamp-3">
                  {member.bio}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal for Desktop */}
      <AnimatePresence>
        {selectedMember && !isMobile && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-[90%] max-h-[90vh] overflow-y-auto relative text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-indigo-600"
                aria-label="Close modal"
              >
                <X size={28} strokeWidth={2} />
              </button>

              {/* Image */}
              <div className="w-36 h-36 mx-auto mb-4 relative">
                <Image
                  src={selectedMember.imageUrl}
                  alt={selectedMember.alt || selectedMember.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {selectedMember.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-4">
                {selectedMember.role}
              </p>

              {/* Full Bio */}
              <p className="text-gray-700 text-base leading-relaxed">
                {selectedMember.bio}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

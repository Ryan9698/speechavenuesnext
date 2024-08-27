'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StaffMember({ name, role, bio, imageUrl, alt }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleBio = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="mt-6 max-w-xs border-b-2 border-slate-200 rounded-xl shadow hover:shadow-2xl transition-shadow duration-600 bg-white mx-auto sm:mx-4 md:mx-auto">
      <div className="relative w-full h-[35vh]">
        <Image
          // Use object-fill to stretch the image to fit the container
          className="object-fill object-center border-2 rounded-t-xl"
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 600px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          priority
        />
      </div>
      <div className="px-3 py-1 bg-gray-300">
        <div className="font-sans text-2xl text-gray-800">{name}</div>
        <p className="text-gray-600 text-sm font-sans font-bold text-base">
          {role}
        </p>
      </div>
      <div className="px-4 py-1 mx-auto border-t">
        <p
          className={`text-gray-600 text-xs whitespace-pre-line overflow-hidden transition-max-height duration-500 ease-in-out ${
            isExpanded ? 'max-h-full' : 'max-h-36'
          }`}
        >
          {bio}
        </p>
        <div className="flex justify-center mt-1">
          <button
            onClick={toggleBio}
            className="text-gray-400 hover:text-blue-700 focus:outline-none font-sans text-xs text-end"
          >
            {isExpanded ? 'Read less..' : 'Read More..'}
          </button>
        </div>
      </div>
    </div>
  );
}

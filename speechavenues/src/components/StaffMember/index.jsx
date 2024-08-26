'use client';
import Image from 'next/image';
import { useScrollPosition } from '../../hooks/staffMemberHooks';

// Takes in props from the StaffList data in data folder
export default function StaffMember({
  name,
  role,
  bio,
  imageUrl,
  alt,
  width,
  height,
}) {
  const { isExpanded, expandBio } = useScrollPosition();

  // Staff "Card" Styling
  return (
    <div className="max-w-xs rounded shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white mx-auto sm:mx-4 md:mx-auto">
      {/* Image Container for Sizing Image */}
      <div className="relative w-100 h-[35vh]">
        {/* Image Properties for the container */}
        <Image
          className="object-cover object-center rounded-t-lg"
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 600px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          priority
          style={{ objectFit: 'fill' }}
        />
      </div>
      <div className="px-3 py-1 bg-gray-300">
        <div className="font-sans text-2xl text-gray-800 1">{name}</div>
        <p className=" text-gray-600 text-sm font-sans font-bold text-base">
          {role}
        </p>
      </div>
      <div className="px-4 py-1 mx-auto border-t">
        <p
          className={`text-gray-600 text-xs whitespace-pre-line ${
            isExpanded ? 'block' : 'line-clamp-6'
          }`}
        >
          {bio}
        </p>
        {/* Expand Button for Bio */}
        <div className="flex justify-center mt-1">
          <button
            onClick={expandBio}
            className="text-gray-800 hover:text-blue-700 focus:outline-none"
          >
            {isExpanded ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/staff', label: 'Our Staff' },
  {
    label: 'Services',
    sublinks: [
      { label: 'Speech Therapy', href: '/services/speechtherapy' },
      { label: 'Occupational Therapy', href: '/services/occupationaltherapy' },
      { label: 'Adult Therapy', href: '/services/adulttherapy' },
    ],
  },
  { href: '/forms', label: 'Forms' },
  { href: '/contact', label: 'Contact' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/school', label: 'School', isSchool: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const linkStyle = (href) =>
    pathname === href
      ? 'text-blue-400 font-semibold'
      : 'text-white hover:text-blue-300 transition';

  return (
    <>
      <nav className="font-quicksand fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black to-gray-800 text-white shadow-md h-16 flex items-center px-6">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/navlogo.webp"
              alt="Logo"
              width={140}
              height={140}
              className="relative top-4 h-36 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navLinks.map(({ href, label, sublinks, isSchool }) =>
              sublinks ? (
                <div
                  key={label}
                  className="relative group"
                  onMouseEnter={() => setHoveredDropdown(label)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <span className="text-xl text-white hover:text-blue-400 cursor-pointer flex items-center gap-1">
                    {label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        hoveredDropdown === label ? 'rotate-180' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  {/* AnimatePresence handles exit animation */}
                  <AnimatePresence>
                    {hoveredDropdown === label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-xl py-2 z-50"
                      >
                        {sublinks.map((sub) => (
                          <Link key={sub.href} href={sub.href}>
                            <span
                              className={`block px-4 py-2 whitespace-nowrap text-lg ${
                                pathname === sub.href
                                  ? 'text-blue-400'
                                  : 'text-white hover:text-blue-300'
                              }`}
                              onClick={() => setHoveredDropdown(null)}
                            >
                              {sub.label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={href} href={href}>
                  <span
                    className={`${linkStyle(href)} ${
                      isSchool ? 'font-schoolbell text-2xl' : 'text-xl'
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              )
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(true)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="h-16" /> {/* Spacer */}
      <MobileMenu isOpen={mobileOpen} setIsOpen={setMobileOpen} />
    </>
  );
}

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import MobileMenu from './MobileMenu';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const closeTimeoutId = useRef(null);
//   const [currentPath, setCurrentPath] = useState('');

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setCurrentPath(window.location.pathname);
//     }
//   }, []);

//   const handleMouseEnter = () => {
//     if (closeTimeoutId.current) {
//       clearTimeout(closeTimeoutId.current);
//     }
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     closeTimeoutId.current = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 500);
//   };

//   const handleDropdownLinkClick = (path) => {
//     setCurrentPath(path);
//     setIsDropdownOpen(false);
//   };

//   useEffect(() => {
//     return () => {
//       if (closeTimeoutId.current) {
//         clearTimeout(closeTimeoutId.current);
//       }
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Link styles on the Navbar based on state
//   const linkStyle = (path) =>
//     currentPath === path
//       ? 'text-blue-500 text-xl font-sans px-4 py-3'
//       : 'text-gray-300 text-xl font-sans px-4 py-3 hover:animate-pulse hover:text-blue-400 rounded transition duration-300';

//   // Separate variable made for school link to accommodate the font

//   const schoolLinkStyle = () =>
//     currentPath === '/school'
//       ? 'text-blue-500 font-schoolbell text-md px-4 py-3'
//       : 'text-gray-300 font-schoolbell text-md px-4 py-3 hover:animate-pulse hover:text-blue-400 rounded transition duration-300';

//   return (
//     <nav className="">
//       {/* Mobile Menu Import and Container */}
//       <div className="md:hidden z-50 fixed top-6 right-8">
//         <MobileMenu
//           isOpen={isOpen}
//           toggleMenu={toggleMenu}
//           currentPath={currentPath}
//         />
//       </div>
//       <div className="bg-gradient-to-r from-black to-gray-800 text-white shadow-md w-full z-30 top-0 left-0">
//         <div className="max-w-8xl mx-auto px-2 sm:px-6 md:px-8 flex justify-between h-20 items-center">
//           <div className="flex items-center">
//             <Link
//               href="/"
//               className="flex-shrink-0"
//               onClick={() => setCurrentPath('/')}
//             >
//               <Image
//                 src="/images/navlogo.webp"
//                 alt="Logo"
//                 width={160}
//                 height={160}
//                 className="h-40 w-40 z-30 "
//                 priority
//               />
//             </Link>
//           </div>
//           <div className="hidden md:flex items-center space-x-1">
//             <Link href="/staff">
//               <div
//                 className={linkStyle('/staff')}
//                 onClick={() => setCurrentPath('/staff')}
//               >
//                 Our Staff
//               </div>
//             </Link>

//             {/* Services Dropdown Menu */}
//             <div className="relative">
//               {/* Services Button and Styling */}
//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 className="text-gray-300 hover:animate-pulse hover:text-blue-400 rounded px-4 py-3 text-base text-xl font-sans transition duration-300 inline-flex items-center"
//               >
//                 Services
//                 <svg
//                   className="ml-2 -mr-1 h-5 w-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {isDropdownOpen && (
//                 <div
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-md bg-gradient-to-r from-black to-gray-800 ring-1 ring-black ring-opacity-5"
//                 >
//                   <div
//                     className="py-1 divide-y divide-gray-700"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="options-menu"
//                   >
//                     <Link href="/services/speechtherapy">
//                       <div
//                         className={linkStyle('/services/speechtherapy')}
//                         onClick={() =>
//                           handleDropdownLinkClick('/services/speechtherapy')
//                         }
//                       >
//                         Speech Therapy
//                       </div>
//                     </Link>
//                     <Link href="/services/occupationaltherapy">
//                       <div
//                         className={linkStyle('/services/occupationaltherapy')}
//                         onClick={() =>
//                           handleDropdownLinkClick(
//                             '/services/occupationaltherapy'
//                           )
//                         }
//                       >
//                         Occupational Therapy
//                       </div>
//                     </Link>
//                     <Link href="/services/adulttherapy">
//                       <div
//                         className={linkStyle('/services/adulttherapy')}
//                         onClick={() =>
//                           handleDropdownLinkClick('/services/adulttherapy')
//                         }
//                       >
//                         Adult Therapy
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <Link href="/forms">
//               <div
//                 className={linkStyle('/forms')}
//                 onClick={() => setCurrentPath('/forms')}
//               >
//                 Forms
//               </div>
//             </Link>
//             <Link href="/contact">
//               <div
//                 className={linkStyle('/contact')}
//                 onClick={() => setCurrentPath('/contact')}
//               >
//                 Contact
//               </div>
//             </Link>
//             <Link href="/gallery">
//               <div
//                 className={linkStyle('/gallery')}
//                 onClick={() => setCurrentPath('/gallery')}
//               >
//                 Gallery
//               </div>
//             </Link>
//             <Link href="/school">
//               <div
//                 className={`${schoolLinkStyle(
//                   '/school'
//                 )} font-serif text-2xl inline-flex items-center group`}
//                 onClick={() => setCurrentPath('/school')}
//               >
//                 School
//                 <Image
//                   src="/images/pencil1.png"
//                   alt="Pencil"
//                   width={40}
//                   height={40}
//                   className="ml-2 filter hue-rotate-120 animate-rock"
//                 />
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* <div className="h-24 md:h-24"></div> */}
//     </nav>
//   );
// };

// export default Navbar;

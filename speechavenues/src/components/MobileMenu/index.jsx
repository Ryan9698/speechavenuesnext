'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};

const linkVariants = {
  open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
  closed: { opacity: 0, height: 0, marginTop: '0px' },
};

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const hoverEffect = 'hover:animate-pulse hover:text-blue-400';

  const linkStyle = (path) =>
    currentPath === path
      ? 'text-blue-400 font-sans text-xl py-2'
      : `text-white font-sans text-xl py-2 ${hoverEffect}`;

  // Separate variable to prevent styling conflict
  const servicesLinkStyle = () =>
    currentPath === '/services'
      ? 'text-blue-400 font-sans text-lg py-2'
      : `text-white font-sans text-lg py-2 ${hoverEffect}`;

  const handleLinkClick = (path) => {
    setCurrentPath(path);
    toggleMenu();
  };

  return (
    <div>
      <div className="md:hidden z-50 fixed top-6 right-8">
        <button onClick={toggleMenu} className="text-white font-sans">
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <MotionDiv
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 h-full z-40 bg-gradient-to-r from-black to-gray-800 text-white w-64 p-5"
      >
        {isOpen && (
          // Global Styling for Positioning
          <nav className="flex flex-col space-y-4 text-center items-center justify-center mt-16">
            {/* Styling for Services Link and Content(Change State)*/}
            <div>
              <button
                onClick={toggleServices}
                className={`py-2 text-xl text-center font-sans flex justify-center items-center w-full ${hoverEffect}`}
              >
                Services
                <svg
                  className={`w-6 h-6 transform ${
                    isServicesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <MotionDiv
                  initial="closed"
                  animate={isServicesOpen ? 'open' : 'closed'}
                  variants={linkVariants}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col pl-4"
                >
                  <Link href="/services/speechtherapy">
                    <div
                      onClick={() => handleLinkClick('/services/speechtherapy')}
                      className={servicesLinkStyle('/services/speechtherapy')}
                    >
                      Speech Therapy
                    </div>
                  </Link>
                  <Link href="/services/occupationaltherapy">
                    <div
                      onClick={() =>
                        handleLinkClick('/services/occupationaltherapy')
                      }
                      className={servicesLinkStyle(
                        '/services/occupationaltherapy'
                      )}
                    >
                      Occupational Therapy
                    </div>
                  </Link>
                  <Link href="/services/adulttherapy">
                    <div
                      onClick={() => handleLinkClick('/services/adulttherapy')}
                      className={servicesLinkStyle('/services/adulttherapy')}
                    >
                      Adult Therapy
                    </div>
                  </Link>
                </MotionDiv>
              )}
            </div>
            <Link href="/staff">
              <div
                onClick={() => handleLinkClick('/staff')}
                className={linkStyle('/staff')}
              >
                Our Staff
              </div>
            </Link>
            <Link href="/forms">
              <div
                onClick={() => handleLinkClick('/forms')}
                className={linkStyle('/forms')}
              >
                Forms
              </div>
            </Link>
            <Link href="/gallery">
              <div
                onClick={() => handleLinkClick('/gallery')}
                className={linkStyle('/gallery')}
              >
                Gallery
              </div>
            </Link>
            <Link href="/contact">
              <div
                onClick={() => handleLinkClick('/contact')}
                className={linkStyle('/contact')}
              >
                Contact Us
              </div>
            </Link>
            <div className="flex-inline ml-6">
              <Link href="/school">
                <div
                  onClick={() => handleLinkClick('/school')}
                  className={`flex items-center py-2 text-2xl font-schoolbell ${hoverEffect} ${
                    currentPath === '/school' ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  School
                  <Image
                    src="/images/pencil1.png"
                    alt="Pencil image for menu"
                    width={25}
                    height={25}
                    className="ml-2 animate-rock"
                  />
                </div>
              </Link>
            </div>
          </nav>
        )}
      </MotionDiv>
    </div>
  );
};

export default MobileMenu;

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

// const menuVariants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "100%" },
// };

// const linkVariants = {
//   open: { opacity: 1, height: "auto", marginTop: "0.5rem" },
//   closed: { opacity: 0, height: 0, marginTop: "0px" },
// };

// const MobileMenu = ({ isOpen, toggleMenu }) => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setCurrentPath(window.location.pathname);
//     }
//   }, []);

//   const toggleServices = () => {
//     setIsServicesOpen(!isServicesOpen);
//   };

//   const hoverEffect = "hover:bg-gray-700 rounded-md";

//   const linkStyle = (path) =>
//     currentPath === path
//       ? "text-blue-400 font-semibold py-2"
//       : `text-white font-semibold py-2 ${hoverEffect}`;

//   return (
//     <div>
//       <div className="md:hidden z-50 fixed top-6 right-8">
//         <button onClick={toggleMenu} className="text-white">
//           {isOpen ? (
//             <XIcon className="h-6 w-6" />
//           ) : (
//             <MenuIcon className="h-6 w-6" />
//           )}
//         </button>
//       </div>
//       <motion.div
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//         variants={menuVariants}
//         transition={{ duration: 0.5 }}
//         className="fixed top-0 right-0 h-full z-40 bg-gradient-to-r from-black to-gray-800 text-white w-64 p-5"
//       >
//         {isOpen && (
//           <nav className="flex flex-col space-y-4 mt-8">
//             <div>
//               <button
//                 onClick={toggleServices}
//                 className={`py-2 text-lg flex justify-between items-center w-full ${hoverEffect}`}
//               >
//                 Services
//                 <svg
//                   className={`w-4 h-4 transform ${
//                     isServicesOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               {isServicesOpen && (
//                 <motion.div
//                   initial="closed"
//                   animate={isServicesOpen ? "open" : "closed"}
//                   variants={linkVariants}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-col pl-4"
//                 >
//                   <Link href="/services/speechtherapy">
//                     <div
//                       onClick={toggleMenu}
//                       className={linkStyle("/services/speechtherapy")}
//                     >
//                       Speech Therapy
//                     </div>
//                   </Link>
//                   <Link href="/services/occupationaltherapy">
//                     <div
//                       onClick={toggleMenu}
//                       className={linkStyle("/services/occupationaltherapy")}
//                     >
//                       Occupational Therapy
//                     </div>
//                   </Link>
//                 </motion.div>
//               )}
//             </div>
//             <Link href="/staff">
//               <div onClick={toggleMenu} className={linkStyle("/staff")}>
//                 Our Staff
//               </div>
//             </Link>
//             <Link href="/forms">
//               <div onClick={toggleMenu} className={linkStyle("/forms")}>
//                 Forms
//               </div>
//             </Link>
//             <Link href="/gallery">
//               <div onClick={toggleMenu} className={linkStyle("/gallery")}>
//                 Gallery
//               </div>
//             </Link>
//             <Link href="/contact">
//               <div onClick={toggleMenu} className={linkStyle("/contact")}>
//                 Contact Us
//               </div>
//             </Link>
//             <div className="flex-inline">
//               <Link href="/school">
//                 <div
//                   onClick={toggleMenu}
//                   className={`flex items-center py-2 text-lg ${hoverEffect} ${
//                     currentPath === "/school" ? "text-blue-400" : "text-white"
//                   }`}
//                 >
//                   School
//                   <Image
//                     src="/images/pencil1.png"
//                     alt="Pencil image for menu"
//                     width={40}
//                     height={40}
//                     className="ml-2"
//                   />
//                 </div>
//               </Link>
//             </div>
//           </nav>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default MobileMenu;

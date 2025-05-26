'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '../MobileMenu';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutId = useRef(null);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutId.current) {
      clearTimeout(closeTimeoutId.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };

  const handleDropdownLinkClick = (path) => {
    setCurrentPath(path);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutId.current) {
        clearTimeout(closeTimeoutId.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Link styles on the Navbar based on state
  const linkStyle = (path) =>
    currentPath === path
      ? 'text-blue-500 text-xl font-sans px-4 py-3'
      : 'text-gray-300 text-xl font-sans px-4 py-3 hover:animate-pulse hover:text-blue-400 rounded transition duration-300';

  // Separate variable made for school link to accommodate the font

  const schoolLinkStyle = () =>
    currentPath === '/school'
      ? 'text-blue-500 font-schoolbell text-md px-4 py-3'
      : 'text-gray-300 font-schoolbell text-md px-4 py-3 hover:animate-pulse hover:text-blue-400 rounded transition duration-300';

  return (
    <nav className="">
      {/* Mobile Menu Import and Container */}
      <div className="md:hidden z-50 fixed top-6 right-8">
        <MobileMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          currentPath={currentPath}
        />
      </div>
      <div className="bg-gradient-to-r from-black to-gray-800 text-white shadow-md w-full z-30 top-0 left-0">
        <div className="max-w-8xl mx-auto px-2 sm:px-6 md:px-8 flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0"
              onClick={() => setCurrentPath('/')}
            >
              <Image
                src="/images/navlogo.webp"
                alt="Logo"
                width={160}
                height={160}
                className="h-40 w-40 z-30 "
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/staff">
              <div
                className={linkStyle('/staff')}
                onClick={() => setCurrentPath('/staff')}
              >
                Our Staff
              </div>
            </Link>

            {/* Services Dropdown Menu */}
            <div className="relative">
              {/* Services Button and Styling */}
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-gray-300 hover:animate-pulse hover:text-blue-400 rounded px-4 py-3 text-base text-xl font-sans transition duration-300 inline-flex items-center"
              >
                Services
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-md bg-gradient-to-r from-black to-gray-800 ring-1 ring-black ring-opacity-5"
                >
                  <div
                    className="py-1 divide-y divide-gray-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link href="/services/speechtherapy">
                      <div
                        className={linkStyle('/services/speechtherapy')}
                        onClick={() =>
                          handleDropdownLinkClick('/services/speechtherapy')
                        }
                      >
                        Speech Therapy
                      </div>
                    </Link>
                    <Link href="/services/occupationaltherapy">
                      <div
                        className={linkStyle('/services/occupationaltherapy')}
                        onClick={() =>
                          handleDropdownLinkClick(
                            '/services/occupationaltherapy'
                          )
                        }
                      >
                        Occupational Therapy
                      </div>
                    </Link>
                    <Link href="/services/adulttherapy">
                      <div
                        className={linkStyle('/services/adulttherapy')}
                        onClick={() =>
                          handleDropdownLinkClick('/services/adulttherapy')
                        }
                      >
                        Adult Therapy
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/forms">
              <div
                className={linkStyle('/forms')}
                onClick={() => setCurrentPath('/forms')}
              >
                Forms
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={linkStyle('/contact')}
                onClick={() => setCurrentPath('/contact')}
              >
                Contact
              </div>
            </Link>
            <Link href="/gallery">
              <div
                className={linkStyle('/gallery')}
                onClick={() => setCurrentPath('/gallery')}
              >
                Gallery
              </div>
            </Link>
            <Link href="/school">
              <div
                className={`${schoolLinkStyle(
                  '/school'
                )} font-serif text-2xl inline-flex items-center group`}
                onClick={() => setCurrentPath('/school')}
              >
                School
                <Image
                  src="/images/pencil1.png"
                  alt="Pencil"
                  width={40}
                  height={40}
                  className="ml-2 filter hue-rotate-120 animate-rock"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="h-24 md:h-24"></div> */}
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutId = useRef(null);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
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

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const linkStyle = (path) =>
    currentPath === path
      ? "text-blue-400 font-semibold px-4 py-3"
      : "text-white font-semibold px-4 py-3 hover:text-blue-400";

  return (
    <nav>
      <div className="md:hidden z-50 fixed top-6 right-8">
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="bg-gradient-to-r from-black to-gray-800 text-white shadow-md fixed w-full z-30 top-0 left-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/bannerlogo.png"
                alt="Logo"
                className="h-40 w-40 relative top-6 ml-4 lg:right-40"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded px-4 py-3 text-base font-medium transition duration-300 inline-flex items-center"
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
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-md bg-gray-800 ring-1 ring-black ring-opacity-5"
                >
                  <div
                    className="py-1 divide-y divide-gray-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link href="/therapy/speechtherapy">
                      <div className="block px-4 py-2 text-white hover:bg-gray-700">
                        Speech Therapy
                      </div>
                    </Link>
                    <Link href="/therapy/occupationaltherapy">
                      <div className="block px-4 py-2 text-white hover:bg-gray-700">
                        Occupational Therapy
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/staff">
              <div className={linkStyle("/staff")}>Our Staff</div>
            </Link>
            <Link href="/forms">
              <div className={linkStyle("/forms")}>Forms</div>
            </Link>
            <Link href="/contact">
              <div className={linkStyle("/contact")}>Contact</div>
            </Link>
            <Link href="/gallery">
              <div className={linkStyle("/gallery")}>Gallery</div>
            </Link>
            <Link href="/school">
              <div
                className={`${linkStyle(
                  "/school"
                )} schoolFont text-xl inline-flex items-center`}
              >
                School
                <img
                  src="/images/pencil1.png"
                  alt="Logo"
                  className="h-10 w-10"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden z-50 fixed top-6 right-8">
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="h-24 md:h-24"></div>
    </nav>
  );
};

export default Navbar;

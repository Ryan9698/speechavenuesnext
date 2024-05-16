"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// Updated variants for smoother transitions
const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const linkVariants = {
  open: { opacity: 1, height: "auto", marginTop: "0.5rem" },
  closed: { opacity: 0, height: 0, marginTop: "0px" },
};

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const hoverEffect = "hover:bg-gray-700 rounded-md";

  return (
    <div>
      <div className="md:hidden z-50 fixed top-6 right-8">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 h-full z-40 bg-gray-900 text-white w-64 p-5"
      >
        <nav className="flex flex-col space-y-4 mt-8">
          <div>
            <button
              onClick={toggleServices}
              className={`py-2 text-lg flex justify-between items-center w-full ${hoverEffect}`}
            >
              Services
              <svg
                className={`w-4 h-4 transform ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
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
            <motion.div
              initial="closed"
              animate={isServicesOpen ? "open" : "closed"}
              variants={linkVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col pl-4"
            >
              <Link href="/therapy/speechtherapy">
                <div onClick={toggleMenu} className={`py-2 ${hoverEffect}`}>
                  Speech Therapy
                </div>
              </Link>
              <Link href="/therapy/occupationaltherapy">
                <div onClick={toggleMenu} className={`py-2 ${hoverEffect}`}>
                  Occupational Therapy
                </div>
              </Link>
              <Link href="/therapy/physicaltherapy">
                <div onClick={toggleMenu} className={`py-2 ${hoverEffect}`}>
                  Physical Therapy
                </div>
              </Link>
            </motion.div>
          </div>
          <Link href="/staff">
            <div onClick={toggleMenu} className={`py-2 text-lg ${hoverEffect}`}>
              Our Staff
            </div>
          </Link>
          <Link href="/forms">
            <div onClick={toggleMenu} className={`py-2 text-lg ${hoverEffect}`}>
              Forms
            </div>
          </Link>
          <Link href="/gallery">
            <div onClick={toggleMenu} className={`py-2 text-lg ${hoverEffect}`}>
              Gallery
            </div>
          </Link>
          <Link href="/contact">
            <div onClick={toggleMenu} className={`py-2 text-lg ${hoverEffect}`}>
              Contact Us
            </div>
          </Link>
          <div className="flex-inline">
            <Link href="/school">
              <div className={`flex items-center py-2 text-lg ${hoverEffect}`}>
                School
                <img
                  src="/images/pencil1.png"
                  alt="Logo"
                  className="h-10 w-10"
                />
              </div>
            </Link>
          </div>
        </nav>
      </motion.div>
    </div>
  );
};

export default MobileMenu;

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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

export default function MobileMenu({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full h-full z-50 bg-black/90 text-white p-6"
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <nav className="mt-20 flex flex-col space-y-4 font-quicksand">
            {navLinks.map(({ href, label, sublinks, isSchool }) =>
              sublinks ? (
                <div key={label}>
                  <button
                    onClick={() => toggleDropdown(label)}
                    className="w-full text-left text-white text-xl"
                  >
                    {label}
                  </button>
                  <AnimatePresence>
                    {openDropdown === label && (
                      <motion.div
                        key={`${label}-dropdown`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 space-y-2"
                      >
                        {sublinks.map((sub) => (
                          <Link key={sub.href} href={sub.href}>
                            <span
                              onClick={() => setIsOpen(false)}
                              className={`${
                                pathname === sub.href
                                  ? 'text-blue-400'
                                  : 'text-white'
                              } block`}
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
                    onClick={() => setIsOpen(false)}
                    className={`${
                      pathname === href ? 'text-blue-400' : 'text-white'
                    } text-xl ${isSchool ? 'font-schoolbell' : ''}`}
                  >
                    {label}
                  </span>
                </Link>
              )
            )}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

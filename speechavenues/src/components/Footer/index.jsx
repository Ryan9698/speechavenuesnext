import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react'; // Keep for contact info icons

const Footer = () => {
  const year = new Date().getFullYear();
  const address = '107 Longwood Ave, Rockledge, FL 32955';
  const encodedAddress = encodeURIComponent(address);

  return (
    <footer className="bg-gradient-to-r from-black to-gray-800 text-gray-300 pt-10 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo + Address + Contact */}
        <div className="space-y-4">
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-indigo-400" />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {address}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} className="text-indigo-400" />
            <a href="tel:+13213382419" className="hover:underline">
              (321) 338-2419
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} className="text-indigo-400" />
            <a
              href="mailto:admin@speechavenues.com"
              className="hover:underline"
            >
              admin@speechavenues.com
            </a>
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/speechtherapy"
                className="hover:text-indigo-400"
              >
                Speech Therapy
              </Link>
            </li>
            <li>
              <Link
                href="/services/occupationaltherapy"
                className="hover:text-indigo-400"
              >
                Occupational Therapy
              </Link>
            </li>
            <li>
              <Link
                href="/services/adulttherapy"
                className="hover:text-indigo-400"
              >
                Adult Therapy
              </Link>
            </li>
            <li>
              <Link href="/forms" className="hover:text-indigo-400">
                Intake Forms
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-indigo-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/school" className="hover:text-indigo-400">
                School
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/speechavenuestherapyco/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {year} Speech Avenues Therapy Co. All rights reserved. | Web
        Design by{' '}
        <a
          href="https://webpulsedesigns.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400"
        >
          Webpulse
        </a>
      </div>
    </footer>
  );
};

export default Footer;

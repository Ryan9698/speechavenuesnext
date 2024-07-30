import React from "react";
import Image from "next/image";

const Footer = () => {
  const address = "107 Longwood Ave, Rockledge, FL 32955";
  const encodedAddress = encodeURIComponent(address);
  const facebookUrl = "https://www.facebook.com/speechavenuestherapyco/";

  return (
    <footer className="bg-gradient-to-r from-black to-gray-800 text-white shadow-md">
      <div className="container mx-auto md:px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-3">
          {/* Address */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:underline flex-1"
          >
            {address}
          </a>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 flex-grow justify-center">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/PNG Icons/256/Facebook.png"
                alt="Facebook"
                width={36}
                height={36}
                className="hover:scale-150 transition-transform duration-200"
              />
            </a>
            <Image
              src="/PNG Icons/256/Instagram.png"
              alt="Instagram"
              width={36}
              height={36}
              className="hover:scale-150 transition-transform duration-200"
            />
            <Image
              src="/PNG Icons/256/Linkedin.png"
              alt="LinkedIn"
              width={36}
              height={36}
              className="hover:scale-150 transition-transform duration-200"
            />
            <Image
              src="/PNG Icons/256/TikTok.png"
              alt="TikTok"
              width={36}
              height={36}
              className="hover:scale-150 transition-transform duration-200"
            />
          </div>

          {/* Copyright and Website By */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Speech Avenues Therapy. All
              rights reserved.
            </div>
            <div className="text-gray-500 text-sm mt-1">
              Web Design by{" "}
              <a
                href="https://www.ryancaltabiano.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                Ryan Caltabiano
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

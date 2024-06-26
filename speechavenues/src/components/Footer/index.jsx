import React from "react";
import Image from "next/image";

const Footer = () => {
  const address = "107 Longwood Ave, Rockledge, FL 32955";
  const encodedAddress = encodeURIComponent(address);
  const facebookUrl = "https://www.facebook.com/speechavenuestherapyco/";

  return (
    <footer className="bg-gradient-to-r from-black to-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Address */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex-1"
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

          {/* Copyright */}
          <div className="text-gray-500 text-sm flex-1 text-right">
            &copy; {new Date().getFullYear()} Speech Avenues Therapy. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

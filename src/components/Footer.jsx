import React from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#D4AF37] w-full py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="/images/bolu_sign.png"
              alt="Boluwaji Apanisile Signature"
              className="h-[60px] w-auto object-contain filter drop-shadow-sm"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Email Section */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-gray-900 mb-3 tracking-wide">
                Contact
              </h4>
              <div className="space-y-2">
                {/* <a
                  href="mailto:info@boluwajiapanisile.com"
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:underline">
                    info@boluwajiapanisile.com
                  </span>
                </a> */}
                <a
                  href="mailto:enquiry.nakestudios@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:underline">
                    enquiry.nakestudios@gmail.com
                  </span>
                </a>
                <a
                  href="https://www.nakestudios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <img
                    src="/images/web.png"
                    alt="web-icon"
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="hover:underline">nakestudios</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <img
                    src="/images/web.png"
                    alt="web-icon"
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="hover:underline">boluwajiapanisile</span>
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-gray-900 mb-3 tracking-wide">
                Connect
              </h4>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/boluwaji-apanisile-69922527?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:underline">@boluwajiapanisile</span>
                </a>
                <a
                  href="https://www.instagram.com/nakeexperience?igsh=MTV2NWI4MW53MDc0cQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:underline">@boluwajiapanisile</span>
                </a>
                <a
                  href="https://www.instagram.com/nakestudios?igsh=ZzgwNjh0N3JyZzU3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hover:underline">@nakestudios</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 border-opacity-30 my-6"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-800 font-medium tracking-wide">
            © Boluwaji Apanisile. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-700">
            <span>Crafted with passion by</span>
            <span className="text-red-600 ">♥</span>
            <span>
              <a
                href="https://www.tiktok.com/@heart__1706?_t=ZM-8xkBClnuywQ&_r=1"
                target="_blank"
                className="underline"
              >
                afcreativehubs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

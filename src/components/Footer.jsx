import React from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#D4AF37] w-full py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src="/images/bolu_sign.png"
            alt="bolu"
            className="h-[60px] w-auto object-contain"
          />
        </div>

        <div className="space-y-2 text-sm text-gray-800">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@boluwajiapanisile.com</span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>enquiry.nakestudios@gmail.com</span>
          </p>
          <p className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @boluwajiapanisile
            </a>
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-800">
          <p className="flex items-center gap-2">
            <Instagram className="w-4 h-4" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @boluwajiapanisile
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Instagram className="w-4 h-4" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @nakestudios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

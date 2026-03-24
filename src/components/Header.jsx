import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-3 items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] z-50 bg-[#EAEFFF] fixed md:relative w-full">
      <div className="flex justify-between items-center px-4 md:px-20">
        <div>
          <a href="#">
            <img
              src="/images/bolu_sign.png"
              alt="logo"
              className="h-10 md:h-15"
            />
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <Link
            to="/about"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-sm md:text-base sm:text-[12px]"
          >
            About
          </Link>

          <Link
            to="/visualart"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-sm md:text-base sm:text-[12px]"
          >
            Visual Art
          </Link>
          <Link
            to="/lunaLedger"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-sm md:text-base sm:text-[12px]"
          >
            Luna Ledger
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

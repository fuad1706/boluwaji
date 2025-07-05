import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isActive]);

  return (
    <nav className="py-3 items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] z-50 bg-white">
      <div className="flex justify-between items-center px-6 md:px-20">
        <div>
          <Link to="/About">
            <img src="/images/bolu_sign.png" alt="logo" className="h-14" />
          </Link>
        </div>
        <div className="space-x-4 items-center hidden md:block">
          <Link
            to="/About"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/Visualart"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Visual Art
          </Link>
          <Link
            to="/Digitalart"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Digital Art
          </Link>
        </div>
        <AlignJustify
          className={`${isActive ? "hidden" : "block"} md:hidden`}
          onClick={() => setIsActive(true)}
        />
        {/* <span>X</span> */}
        <X
          className={`${isActive ? "block" : "hidden"} md:hidden`}
          onClick={() => setIsActive(false)}
        />
      </div>

      {isActive && (
        <div className="space-y-8 fixed w-full  flex flex-col items-center md:hidden bg-[#2C2C2C] h-screen justify-center  text-white text-xl font-semibold z-[9999]">
          <Link
            to="/About"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsActive(false)}
          >
            About
          </Link>
          <Link
            to="/Visualart"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsActive(false)}
          >
            Visual Art
          </Link>
          <Link
            to="/Lunaledger"
            className="relative no-underline after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsActive(false)}
          >
            Luna Ledger
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

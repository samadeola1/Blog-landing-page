import React, { useState } from "react";
import logo from "../assets/logo.svg";
import arrowLight from "../assets/icon-arrow-light.svg";
import arrowDark from "../assets/icon-arrow-dark.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <nav className="container mx-auto flex justify-between items-center py-8 px-4 md:px-[30px] relative z-10">
      {/* Left: Logo and Nav */}
      <div className="flex items-center gap-10">
        <img src={logo} alt="Logo" className="w-28 md:w-36" />
        <ul className="hidden md:flex gap-8">
          {["Product", "Company"].map((item) => (
            <li key={item} className="flex items-center gap-1 text-white font-medium cursor-pointer group">
              <span className="group-hover:underline">{item}</span>
              <img src={arrowLight} alt="arrow" className="w-3 h-3" />
            </li>
          ))}
          {/* Connect with dropdown */}
          <li className="relative flex items-center gap-1 text-white font-medium cursor-pointer group"
              onMouseEnter={() => setIsConnectOpen(true)}
              onMouseLeave={() => setIsConnectOpen(false)}
          >
            <span className="group-hover:underline">Connect</span>
            <img
              src={arrowLight}
              alt="arrow"
              className={`w-3 h-3 transition-transform ${isConnectOpen ? "rotate-180" : ""}`}
            />
            {/* Dropdown */}
            {isConnectOpen && (
              <ul className="absolute left-0 top-8 bg-white text-gray-800 rounded-lg shadow-lg py-2 px-4 min-w-[140px]">
                <li className="py-1 hover:underline cursor-pointer">Contact</li>
                <li className="py-1 hover:underline cursor-pointer">Newsletter</li>
                <li className="py-1 hover:underline cursor-pointer">LinkedIn</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Right: Auth Buttons */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-white font-medium hover:underline">Login</button>
        <button className="bg-white text-red-500 font-semibold px-7 py-2 rounded-full hover:bg-gray-100 transition">
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={isMenuOpen ? close : hamburger} alt="menu" className="w-7" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-6 z-50 md:hidden">
          <ul className="flex flex-col gap-4 w-full">
            {["Product", "Company"].map((item) => (
              <li key={item} className="flex items-center gap-1 text-gray-800 font-medium cursor-pointer group">
                <span className="group-hover:underline">{item}</span>
                <img src={arrowDark} alt="arrow" className="w-3 h-3" />
              </li>
            ))}
            {/* Connect with dropdown */}
            <li className="flex flex-col w-full">
              <button
                className="flex items-center gap-1 text-gray-800 font-medium cursor-pointer group w-full"
                onClick={() => setIsConnectOpen((prev) => !prev)}
              >
                <span className="group-hover:underline">Connect</span>
                <img
                  src={arrowDark}
                  alt="arrow"
                  className={`w-3 h-3 transition-transform ${isConnectOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isConnectOpen && (
                <ul className="bg-gray-100 rounded-lg mt-2 py-2 px-4">
                  <li className="py-1 hover:underline cursor-pointer">Contact</li>
                  <li className="py-1 hover:underline cursor-pointer">Newsletter</li>
                  <li className="py-1 hover:underline cursor-pointer">LinkedIn</li>
                </ul>
              )}
            </li>
          </ul>
          <hr className="w-full border-gray-200" />
          <button className="text-gray-700 font-medium w-full">Login</button>
          <button className="bg-gradient-to-r from-orange-300 to-red-500 text-white font-semibold px-7 py-2 rounded-full w-full">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
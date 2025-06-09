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
    <nav className="container mx-auto font-ubuntu flex justify-between items-center py-10 px-4 md:px-10 lg:px-30 relative z-10">
      {/* Left: Logo and Nav */}
      <div className="flex items-center gap-10">
        <img src={logo} alt="Logo" className="w-28 md:w-36" />
        <ul className="hidden md:flex gap-8">
          {["Product", "Company"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-1 text-white font-medium cursor-pointer group"
            >
              <span className="group-hover:underline">{item}</span>
              <img src={arrowLight} alt="arrow" className="w-2 h-2 mt-0.5" />
            </li>
          ))}
          {/* DaisyUI Dropdown for Connect */}
          <li className="relative flex items-center gap-1 text-white font-medium cursor-pointer group">
            <div className="dropdown dropdown-bottom">
              <button
                onClick={() => setIsConnectOpen((prev) => !prev)}
                className="flex items-center gap-1 focus:outline-none"
              >
                <span className="group-hover:underline ml-1">Connect</span>
                <img
                  src={arrowLight}
                  alt="arrow"
                  className={`w-2 h-2 mt-0.5 transition-transform ${
                    isConnectOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul
                className={`dropdown-content my-3 menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm text-gray-800 ${
                  isConnectOpen ? "" : "hidden"
                }`}
              >
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Newsletter</a>
                </li>
                <li>
                  <a>LinkedIn</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Right: Auth Buttons */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-white font-medium hover:underline">
          Login
        </button>
        <button className="bg-white text-red-500 font-semibold px-7 py-2 rounded-full hover:bg-[#FF7C85] hover:text-white transition">
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={isMenuOpen ? close : hamburger} alt="menu" className="w-7" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed font-overpass inset-0 bg-black/40 z-40 flex justify-center items-start pt-24 md:hidden">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-6 w-11/12 max-w-sm">
            <ul className="flex flex-col gap-4 w-full items-center">
              {["Product", "Company"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1 text-gray-800 font-medium cursor-pointer group"
                >
                  <span className="group-hover:underline">{item}</span>
                  <img src={arrowDark} alt="arrow" className="w-3 h-3" />
                </li>
              ))}
              {/* DaisyUI Dropdown for Connect (Mobile, centered) */}
              <li className="flex flex-col items-center w-full">
                <div className="dropdown dropdown-bottom w-full flex flex-col items-center">
                  <button
                    className="flex items-center gap-1 text-gray-800 font-medium cursor-pointer group w-full justify-center"
                    onClick={() => setIsConnectOpen((prev) => !prev)}
                  >
                    <span className="group-hover:underline ml-1">Connect</span>
                    <img
                      src={arrowDark}
                      alt="arrow"
                      className={`w-3 h-3 mt-0.5 mx-1 transition-transform ${
                        isConnectOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isConnectOpen && (
                    <ul className="dropdown-content menu bg-gray-100 rounded-box z-50 w-80 p-2 shadow-sm text-gray-800 mt-2 flex text-[18px] flex-col items-center">
                      <li>
                        <a>Contact</a>
                      </li>
                      <li>
                        <a>Newsletter</a>
                      </li>
                      <li>
                        <a>LinkedIn</a>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
            {/* Add margin-top if dropdown is open to push buttons down */}
            <div
              className={
                isConnectOpen
                  ? "mt-36 flex flex-col items-center w-full"
                  : "flex flex-col items-center w-full"
              }
            >
              <hr className="w-full border-gray-200" />
              <button className="text-gray-700 text-xl font-medium mt-4">Login</button>
              <button className="bg-gradient-to-r from-orange-300 to-red-500 text-white text-xl font-semibold px-7 py-2 rounded-full mt-2 mx-auto">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#25252D] py-10 px-4 md:px-10 lg:px-30 relative overflow-hidden z-10 rounded-tr-[100px] ">
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center md:justify-items-start text-center md:text-left font-ubuntu md:mt-0 mt-5">

        {/* Blogr Logo/Text */}
        <div className="flex justify-center md:justify-start lg:col-span-1 pb-4">
          <img src={logo} alt="Logo" className="w-28 md:w-36 h-13" />
        </div>

        {/* Product Column */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold mb-6">Product</h3>
          <ul className="space-y-4 ">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Overview</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Marketplace</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Integrations</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold mb-6">Company</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Team</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
          </ul>
        </div>

        {/* Connect Column */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold mb-6">Connect</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Newsletter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
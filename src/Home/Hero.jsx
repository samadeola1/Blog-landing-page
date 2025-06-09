import React from "react";
import Navbar from "../Layouts/Navbar";

const Hero = () => {
  return (
    <div
      className="relative inset-0 z-10  bg-gradient-to-r from-[#FF826D] to-[#FF515C] 
 overflow-hidden overflow-x-hidden rounded-bl-[100px]"
    >
      {/* Background image */}
      <div
        className="  
          absolute w-full inset-0 -z-10
          bg-[url('https://res.cloudinary.com/dd9nujmdt/image/upload/v1749493290/bg-pattern-intro-mobile_gcfpbd.svg')]
          md:bg-[url('https://res.cloudinary.com/dd9nujmdt/image/upload/v1749493271/bg-pattern-intro-desktop_k2nins.svg')]
          bg-no-repeat
           bg-[length:350%_230%]
          bg-[position:36%_38%]
          lg:bg-[length:230%_620%]
          lg:bg-[position:26%_50%]
          
        "
      ></div>

      <Navbar />

      <div className="container mx-auto text-center py-16 px-4 md:px-10 lg:px-20">
        <h1 className="text-4xl md:text-[50px] font-overpass font-bold text-white mb-6">
          A modern publishing platform
        </h1>
        <p className="text-lg md:text-xl font-ubuntu text-white/90 mb-8">
          Grow your audience and build your online brand
        </p>
        <div className="flex justify-center font-ubuntu gap-4 pb-10">
          <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-[#FF7C85] hover:text-white transition">
            Start for Free
          </button>
          <button className="text-white px-6 py-3 rounded-full font-semibold border border-white hover:bg-white hover:text-red-500 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

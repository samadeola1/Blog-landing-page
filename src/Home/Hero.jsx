import React from "react";
import Navbar from "../Layouts/Navbar";

const Hero = () => {
  return (
    <div

      {/* Background image */}
      <div
        className="
          absolute w-full  inset-0  -z-10
          bg-[url('src/assets/bg-pattern-intro-mobile.svg')]
          md:bg-[url('src/assets/bg-pattern-intro-desktop.svg')]
          bg-no-repeat
          bg-center
          bg-cover
        "
      />

      <Navbar />

      <div className="container mx-auto text-center py-20 px-4 md:px-10 lg:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          A modern publishing platform
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Grow your audience and build your online brand
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
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

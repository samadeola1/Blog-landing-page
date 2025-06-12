import React from "react";
import phones from "../assets/illustration-phones.svg";

const Section2 = () => {
  return (
    <div className="relative w-full pt-20 mt-10">
      {/* Purple Section with Clipped Pattern */}
      <div className="relative bg-gradient-to-b from-[#2D2E40] to-[#3F4164] rounded-bl-[100px] rounded-tr-[100px] w-full overflow-hidden">
        {/* Large Half Circle Pattern Background (clipped) */}
        <div
          className="
            absolute z-10
            left-1/2 -translate-x-[70%] -top-56
            md:left-[15%] md:top-1/2 md:-translate-x-[50%] md:-translate-y-80
            w-[700px] h-[700px] md:w-[1100px] md:h-[500px]
            bg-[url('src/assets/bg-pattern-circles.svg')]
            bg-no-repeat bg-center bg-contain
            pointer-events-none
          "
        ></div>
        <section className="container mx-auto px-6 md:px-10 lg:px-20 pt-40 md:pt-20 pb-20 relative z-20">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <div className="block md:hidden h-40"></div>
            <div className="w-full md:w-1/2 md:ml-auto">
              <h2 className="font-bold font-overpass text-3xl md:text-4xl text-white mb-6">
                State of the Art Infrastructure
              </h2>
              <p className="text-white/80 font-overpass text-base md:text-lg mb-8 max-w-2xl">
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Phones Illustration Overlay (NOT clipped) */}
      <div
        className="
          absolute z-30
          left-1/2 -translate-x-1/2 -top-80
          md:left-[22%] md:top-60 lg:top-46 md:-translate-x-1/2 md:-translate-y-1/2
          flex justify-center md:justify-start w-full md:w-auto
          pointer-events-none
        "
        style={{
          height: "800px",
        }}
      >
        <img
          src={phones}
          alt="phones"
          className="
            w-[800px] h-[900px] md:w-[420px] md:h-[800px] lg:w-[500px] lg:h-[900px]
            drop-shadow-2xl
            object-contain
          "
        />
      </div>
    </div>
  );
};

export default Section2;
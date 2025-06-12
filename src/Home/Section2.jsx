import React from "react";
import phones from "../assets/illustration-phones.svg";

const Section2 = () => {
  return (
    <div className="sec-two-con rounded-bl-[100px] rounded-tr-[100px] md:w-full">
      <div className="sec-two relative flex items-center gap-20 px-30 py-30">
        <img src={phones} alt="phones" className="absolute mt-10" />
        <div className="text-start lg:text-center relative ml-170">
          <h2 className="font-bold font-overpass text-[27px] mb-5 lg:text-4xl 2xl:text-4xl text-white">
            State of the Art Infrastructure
          </h2>
          <p className="font-overpass text-very-dark-grayish-blue text-[16px]">
            With reliability and speed in mind, worldwide data centers provide
            the
            <br />
            backbone for ultra-fast connectivity. This ensures your site will
            load
            <br />
            instantly, no matter here your readers are, keeping your site
            <br />
            competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;

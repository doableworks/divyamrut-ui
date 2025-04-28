"use client";

import React from "react";
import BackgroundImagesSlider from "@/components/home1/BackgrounImageSlider";
import { Calender, Flower } from "@/icon/icons";

const HeroBanner = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-t from-[#EAB64F] via-[#D79F34] to-[#D0861A]
       flex flex-col items-center justify-center"
    >
      <img
        src="/asset/home/Hero for Large.png"
        alt="hero"
        className="hidden lg:block w-full"
      />

      <img
        src="/asset/home/Hero for Medium.png"
        alt="hero"
        className="hidden md:block lg:hidden w-full"
      />

      <img
        src="/asset/home/Hero for mobile.png"
        alt="hero"
        className="block md:hidden w-full"
      />

      <div className="hidden md:block absolute p-7 mb-56 md:mb-0">
        <h1 className="font-playfair md:leading-[76px] font-medium text-[30px] md:text-[64px] text-center text-white">
          Unveil the newness in
          <br />
          your being to be...
          <br />
          <span className="italic">ever new</span>
        </h1>

        <div className="flex justify-center items-center mt-8">
          <button
            className="font-opensans border border-1 mx-auto text-white px-8 py-2 rounded border-white font-medium text-sm md:text-xl uppercase"
            type="button"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

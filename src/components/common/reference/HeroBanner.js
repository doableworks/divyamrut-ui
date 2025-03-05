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

      <div className="absolute p-7 mb-56 md:mb-0">
        <p className="font-prata md:leading-[76px] font-medium text-[30px] md:text-[64px] text-center text-white">
          Committed to <br className="md:hidden" /> Physical,
          <br /> Mental,
          <br className="md:hidden" /> Emotional,
          <br /> Financial
          <br className="md:hidden" /> & Spiritual
          <br />
          Well-being
        </p>

        <div className="flex justify-center items-center mt-5">
          <button
            className="border border-1 mx-auto text-white px-8 py-2 rounded-lg border-white font-medium text-sm md:text-xl"
            type="button"
          >
            Check More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

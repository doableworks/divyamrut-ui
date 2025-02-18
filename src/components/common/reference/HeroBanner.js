"use client";

import React from "react";
import BackgroundImagesSlider from "@/components/home1/BackgrounImageSlider";
import { Calender, Flower } from "@/icon/icons";

const HeroBanner = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-t from-[#EAB64F] via-[#D79F34] to-[#D0861A]
      h-[calc(100vh-65px)] [@media(min-width:1340.98px)]:h-[calc(100vh-172px)] flex flex-col items-center justify-start"
    >
      <img
        src="/asset/home/Hero for Large.png"
        alt="hero"
        className="hidden [@media(min-width:1340.98px)]:block w-full h-full absolute bottom-0"
      />

      <img
        src="/asset/home/Hero for mobile.png"
        alt="hero"
        className="block [@media(min-width:1340.98px)]:hidden absolute bottom-0 h-full w-full"
      />

      <div className="relative mt-20 lg:mt-8 p-7">
        <p className=" font-playfair lg:leading-[76px] font-medium text-[30px] lg:text-[64px] text-center text-white">
          Committed to
          <br /> Physical, Mental, Emotional,
          <br /> Financial & Spiritual
          <br />
          Well-being
        </p>

        <div className="flex justify-center items-center mt-5">
          <button
            className="font-sans border border-1 mx-auto text-white px-8 py-2 rounded-lg border-white font-semibold text-sm lg:text-xl"
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

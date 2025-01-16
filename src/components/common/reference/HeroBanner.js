"use client";

import React from "react";
import BackgroundImagesSlider from "@/components/home1/BackgrounImageSlider";
import { Calender, Flower } from "@/icon/icons";

const HeroBanner = () => {
  return (
    <div className="min-h-screen h-screen w-full rounded-br-[10rem] md:rounded-br-[12rem] overflow-hidden">
      <div className="lg:grid grid-cols-2 flex flex-col-reverse h-full">
        <div className="flex justify-center items-center lg:block relative bg-AA218C h-full pl-10 lg:pl-32 pr-5 md:pr-24">
          <div className="lg:absolute lg:top-[20%] text-left space-y-6 fade-up pr-10 "></div>
        </div>
        <div className="relative w-full h-full bg-white">
          
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

"use client";

import React from "react";
import BackgroundImagesSlider from "@/components/home1/BackgrounImageSlider";
import { Calender, Flower } from "@/icon/icons";

const HeroBanner = () => {
  return (
    <div className="min-h-screen h-screen w-full rounded-br-[10rem] md:rounded-br-[12rem] overflow-hidden bg-[url('/asset/home/home-herobanner.jpg')] bg-center bg-no-repeat bg-cover"></div>
  );
};

export default HeroBanner;

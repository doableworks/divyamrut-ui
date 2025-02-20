"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Puzzle, Globe, Coffee } from "@/icon/icons";
import { useGSAP } from "@gsap/react";
import { SearchOutlined } from "@ant-design/icons";
import WhyUsSection from "./WhyUsSection";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "Puzzle",
    title: "Our Vision",
    text: "Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.",
  },
  {
    icon: "Globe",
    title: "Our Mission",
    text: "Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.",
  },
  {
    icon: "Coffee",
    title: "Our Motto",
    text: "Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.",
  },
];

const OurValues = () => {
  return (
    <section id="OurValues" className="relative bg-text overflow-hidden">
      <div className="flex flex-col justify-center items-center w-screen bg-FFEEE2">
        <div class="absolute top-0 w-full bg-contain h-full opacity-5 bg-center bg-[url('/asset/home/banner-left.png')] bg-no-repeat max-w-2xl" />
        <div className="z-20 mx-auto w-[90%] xl:w-[85%] py-20 md:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10 ">
            <div className="left-section-ov w-full">
              <h6 className="section-title !text-left">Our Value</h6>
              <h2 className="!text-left highlight-heading">
                Teamwork makes the dream work.
              </h2>
              <p className="section-content !text-left">
                Auctor ac nibh ligula consectetur ut pellentesque montes
                parturient. Gravida letius fusce iaculis amet aliquet natoque
                erat. Arcu fusce praesent himenaeos fames placerat eu purus id
                libero congue malesuada.
              </p>
              <p className="section-content !text-left">
                Auctor ac nibh ligula consectetur ut pellentesque montes
                parturient. Gravida letius fusce iaculis amet aliquet natoque
                erat. Arcu fusce praesent himenaeos fames placerat eu purus id
                libero congue malesuada.
              </p>
            </div>
            <div className="bg-white flex-grow middle-section-ov relative w-full h-full bg-center md:bg-center  mr-5 md:mr-0 transition-all duration-1000 min-h-[350px] md:min-h-[530px]">
              <Image
                className="absolute bottom-[-2rem] md:bottom-[-4rem] left-[-1rem] md:left-[-2rem]"
                src={"/asset/home/leaf-icon.png"}
                alt="img"
                height={100}
                width={200}
              />
            </div>
          </div>
          <div className="right-section-ov w-full py-[3rem] md:py-[5.5rem] flex flex-col md:flex-row items-center gap-6 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex md:flex-col xl:flex-row items-start justify-between md:justify-start lg:justify-between w-full gap-2 xl:gap-8`}
              >
                <div
                  className={`mb-4 p-6 ${
                    index == 1
                      ? "bg-[--e-global-color-E0A43B]"
                      : "bg-[--e-global-color-AA218C]"
                  }`}
                >
                  {feature.icon == "Puzzle" ? (
                    <Puzzle fill="#FFFFFF" h={35} w={35} />
                  ) : feature.icon == "Globe" ? (
                    <Globe fill="#FFFFFF" h={35} w={35} />
                  ) : (
                    <Coffee fill="#FFFFFF" h={35} w={35} />
                  )}
                </div>
                <div>
                  <h3
                    className={`font-suranna text-[22px] md:text-[28px] font-[400] leading-[1.3em] text-secondary mb-2`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`font-jost text-[14px] md:text-[18px] font-[400] text-left text-primary`}
                  >
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

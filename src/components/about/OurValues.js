"use client";
import React from "react";
import Image from "next/image";
import  gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  Puzzle, Globe, Coffee } from "@/icon/icons";
import { useGSAP } from "@gsap/react";

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

  useGSAP(() => {
    gsap.fromTo(
      ".left-section-ov",
      { opacity: 0, x: -300 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#OurValues",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );

    gsap.fromTo(
        ".middle-section-ov",
        { opacity: 0, x: 300 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#OurValues",
            start: "top 80%",
            end: "bottom 20%",
            // scrub: true,
          },
        }
      );

    gsap.fromTo(
      ".right-section-ov",
      { opacity: 0, x: 300 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#OurValues",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="OurValues"
      className="relative bg-text overflow-hidden"
    >
    <div className="flex flex-col justify-center items-center w-screen bg-FFEEE2">
    <div class="absolute top-0 w-full bg-contain h-full opacity-5 bg-center bg-[url('/asset/home/banner-left.png')] bg-no-repeat" />
      <div className="z-20 mx-auto w-[90%] md:w-[85%] py-20 md:py-32">
        <div className="flex flex-col md:flex-row justify-between gap-x-24 gap-y-10 ">
          <div className="left-section-ov w-full md:w-[35%]">
            <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-left mb-5">
              Our Value
            </h6>
            <h2 className="font-suranna text-[24px] md:text-[50px] font-[400] leading-[1.3em] text-secondary text-left mb-6">
              Teamwork makes the dream work.
            </h2>
            <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-left">
              Auctor ac nibh ligula consectetur ut pellentesque montes
              parturient. Gravida letius fusce iaculis amet aliquet natoque
              erat. Arcu fusce praesent himenaeos fames placerat eu purus id
              libero congue malesuada.
            </p>
            <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center px-4 py-2 bg-q4ca25af  hover:bg-q638d055 transition mt-10">
              Learn more
            </div>
          </div>
          <div className="middle-section-ov relative w-full md:w-[30%] h-full bg-cover bg-center md:bg-center  mr-5 md:mr-0 transition-all duration-1000 min-h-[350px] md:min-h-[530px]"
            style={{
              backgroundImage: `url("/asset/home/multiethnic-women.jpg")`,
            }}
          >
            <Image className="absolute bottom-[-2rem] md:bottom-[-4rem] left-[-1rem] md:left-[-2rem]" src={"/asset/home/leaf-icon.png"} alt="img" height={100} width={200} /> 
          </div>
          <div className="right-section-ov w-full md:w-[35%] py-[0.5rem] md:py-[2.5rem] flex flex-col items-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`flex items-start justify-between w-full gap-8`}>
                <div
                  className={`mb-4 p-6 ${
                    index == 1 ? "bg-d49ac81" : "bg-c94d9ab"
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
      </div>
    </section>
  );
};

export default OurValues;

"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stone, Flower, Aroma } from "@/icon/icons";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "Aroma",
    title: "Natural Solutions",
    text: "Mollis vulputate penatibus leo pellentesque faucibus posuere consectetuer in gravida litora tincidunt",
  },
  {
    icon: "Flower",
    title: "Proven Benefits",
    text: "Mollis vulputate penatibus leo pellentesque faucibus posuere consectetuer in gravida litora tincidunt",
  },
  {
    icon: "Stone",
    title: "Accessible Care",
    text: "Mollis vulputate penatibus leo pellentesque faucibus posuere consectetuer in gravida litora tincidunt",
  },
];

const OurServices = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".bottom-cards-os",
      { opacity: 0, x: -300 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#OurServices",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".right-section-os",
      { opacity: 0, x: 300 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#OurServices",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="OurServices"
      className="w-full relative bg-text pb-[2rem] md:pb-[10rem] overflow-hidden"
    >
      <Image
        className="hidden md:block absolute z-10 bottom-0 right-0"
        height={300}
        width={300}
        src={"/asset/home/img2.png"}
        alt="img"
      />

      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-32">
        <div className="flex flex-col md:flex-row justify-between gap-x-24 gap-y-5 ">
          <div className="w-full md:w-[65%] py-[1.5rem] md:py-[5.5rem]">
            <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-left mb-5">
              Our Services
            </h6>
            <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-left mb-6">
              Extraordinary medicine for ordinary people.
            </h2>
            <div className="border-t-[0.5px] border-q4d462f5 my-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-left">
                Et orci volutpat penatibus facilisis lectus fermentum eu aptent
                torquent habitasse. Rutrum interdum volutpat a non taciti
                sollicitudin. Magnis rhoncus letius morbi
              </p>

              <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-left">
                nec elit nibh. Urna netus sit nec suspendisse pharetra morbi
                dictum pellentesque orci commodo lobortis. Hac ornare sagittis
                taciti cras risus purus.
              </p>
            </div>
          </div>
          <div className="right-section-os w-full md:w-[35%] h-full bg-cover bg-center md:bg-center  mr-5 md:mr-0 transition-all duration-1000 min-h-[250px] md:min-h-[630px]"
            style={{
              backgroundImage: `url("/asset/home/turmeric-powder-and-curcuma-root.jpg")`,
            }}
          ></div>
        </div>
        <div className="bottom-cards-os relative md:absolute bottom-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center  p-8 px-12 bg-black ${
                index == 1 ? "bg-q044b931" : "bg-text"
              } text-white hover:scale-105 transition-transform duration-300 shadow-lg w-[1/3] `}
            >
              <div className="mb-4">
                {feature.icon == "Aroma" ? (
                  <Aroma fill="#99C24A" h={35} w={35} />
                ) : feature.icon == "Flower" ? (
                  <Flower
                    fill={index == 1 ? "#FFFFFF" : "#99C24A"}
                    h={35}
                    w={35}
                  />
                ) : (
                  <Stone fill="#99C24A" background="#99C24A" h={35} w={35} />
                )}
              </div>
              <h3
                className={`font-suranna text-[22px] md:text-[28px] font-[400] leading-[1.3em] ${
                  index == 1 ? "text-text" : " text-secondary"
                } mb-4`}
              >
                {feature.title}
              </h3>
              <p
                className={`font-jost text-[14px] md:text-[18px] font-[400] text-center ${
                  index == 1 ? "text-text" : " text-primary"
                }`}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

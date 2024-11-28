"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RightArrow, Star, Checked, Flower } from "@/icon/icons";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Professional Therapist",
  "Organic Herbal",
  "Comprehensive Services",
  "24/7 Premium Support",
];

const WhoWeAre = () => {
  useEffect(() => {
    gsap.fromTo(
      ".left-section",
      { opacity: 0, x: -1000 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#AncientWisdomForModernLiving",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".right-section",
      { opacity: 0, x: 1000 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#AncientWisdomForModernLiving",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );
  }, []);

  return (
    <div id="AncientWisdomForModernLiving" className="w-full relative bg-text">
      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-32">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-x-24 gap-y-5 ">
          <div className="left-section py-[1.5rem] md:py-[5.5rem]">
            <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-left mb-5">
              Who we are
            </h6>
            <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-left mb-6">
              The combination of nature and science.
            </h2>
            <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-left">
              Laoreet consequat erat orci metus montes potenti porta ultrices
              sagittis. Duis libero maecenas sodales commodo hendrerit. Litora
              quisque molestie ultricies eros parturient pretium volutpat.
            </p>
            <div className="border-t-[0.5px] border-q4d462f5 my-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 bg-white rounded-full shadow-lg"
                >
                  <Checked
                    background={"#FFFFFF"}
                    fill={"#99C24A"}
                    h={30}
                    w={30}
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="right-section h-full bg-cover bg-center md:bg-center  mr-5 md:mr-0 transition-all duration-1000 min-h-[450px]"
            style={{
              backgroundImage: `url("/asset/home/ayurvedic-facial-massage.jpg")`,
            }}
          >
            <div
              className="absolute bottom-[-30px] right-[-30px] bg-white h-[250px] w-[200px] p-4 bg-custom-radial flex flex-col justify-evenly items-center text-center"
              id="card_id"
            >
              {/* Icon */}
              <div className="flex justify-center w-full mb-5">
                <Flower fill="#FFFFFF" w={30} h={30} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text">
                Tailored Ayurveda Solutions
              </h3>
              <div className="border-t-[0.5px] border-q4d462f5 my-5" />
              {/* Description */}
              <p className="mt-2 text-sm text-text">
                Eget lobortis convallis habitant aliquam cras nulla tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

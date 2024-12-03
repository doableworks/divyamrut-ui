"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RightArrow, Star } from "@/icon/icons";

gsap.registerPlugin(ScrollTrigger);

const AncientWisdomForModernLiving = () => {
    
  useGSAP(() => {
    gsap.fromTo(
        ".left-section-awf",
        { opacity: 0, x: -500 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          // stagger: 0.2,
          scrollTrigger: {
            trigger: "#AncientWisdomForModernLiving",
            start: "top 80%",
            end: "bottom 20%",
            // scrub: true,
          },
        }
      );


      gsap.fromTo(
        ".left-card-awf",
        { opacity: 0, x: 300 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          // stagger: 0.2,
          scrollTrigger: {
            trigger: "#AncientWisdomForModernLiving",
            start: "top 80%",
            end: "bottom 20%",
            // scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".right-section-awf",
        { opacity: 0, x: 300 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          // stagger: 0.2,
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
    <div
      id="AncientWisdomForModernLiving"
      className="w-full relative bg-[#F9F3EB]"
    >
      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-32">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-x-24 gap-y-5 ">
          <div className="left-section-awf h-full bg-cover bg-center transition-all duration-1000 min-h-[250px]"
            style={{
              backgroundImage: `url("/asset/home/yoga-coach-training-session-.jpg")`,
            }}
          >
            <div className="left-card-awf absolute top-[20px] left-[20px] flex flex-col items-center justify-center bg-text">
              <h5 className="font-jost text-text text-[16px] md:text-[18px] font-[500] leading-[1.5em] text-center bg-q044b931 py-2 px-8 w-full">
                {" "}
                Excellent{" "}
              </h5>
              <div className="flex gap-1 justify-center mt-4">
                <Star h={15} w={15} fill={"#f0ad4e"} />
                <Star h={15} w={15} fill={"#f0ad4e"} />
                <Star h={15} w={15} fill={"#f0ad4e"} />
                <Star h={15} w={15} fill={"#f0ad4e"} />
                <Star h={15} w={15} fill={"#ccd6df"} />
              </div>
              <h5 className="font-jost text-[24px] md:text-[50px] font-[600] leading-[1.3em] text-center text-q044b931 px-6 mb-2 w-full">
                {" "}
                4.7
              </h5>
              <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center gap-2 px-2 py-1 bg-q4ca25af transition mb-5 rounded-3xl">
                <h5 className="font-inter text-[13px] font-[400] leading-[1.5em] text-text">
                  Client Ratings
                </h5>
              </div>
            </div>
          </div>
          <div className="right-section-awf py-[1.5rem] md:py-[5.5rem]">
            <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-left mb-6">
              Ancient Wisdom for Modern Living.
            </h2>
            <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-left">
              Aliquam pellentesque quam aenean bibendum mollis per. Duis non
              rhoncus vulputate maximus enim ornare. Diam eu id rutrum lobortis
              netus neque integer venenatis letius libero a.
            </p>
            <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center gap-2 px-4 py-2 bg-q4ca25af  hover:bg-q638d055 transition mt-10">
              Discover more
              <RightArrow fill={"#FFFFFF"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AncientWisdomForModernLiving;

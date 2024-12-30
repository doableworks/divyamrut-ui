"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Calender, Comment } from "@/icon/icons";

const MainBanner2 = ({ heading, subHeading, date, comment, mainType }) => {
  useEffect(() => {

    gsap.fromTo(
      ".fade-up1",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          // trigger: "#WhatWeOffer",
          trigger: "#mainBanner2",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );


    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          // trigger: "#WhatWeOffer",
          trigger: "#mainBanner2",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".fade-down",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          // trigger: "#WhatWeOffer",
          trigger: "#mainBanner2",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="mainBanner2 relative bg-cover bg-center min-h-[250px] md:min-h-[500px] w-[100%] overflow-hidden"
      style={{
        backgroundImage: "url('/asset/home/natural-health-support.jpg')",
      }}
    >
      <div className="bg-[rgba(0,0,0,.4)] min-h-[250px] md:min-h-[500px] h-full w-full flex items-center justify-start text-white">
        <div className="relative mx-auto z-20 w-[90%] md:w-[85%] pb-12 pt-48 md:pb-32 md:pt-80">
          <h3 className="fade-up1 font-jost text-[14px] md:text-[14px] font-[500] text-a2c0d56 uppercase">{mainType}</h3>
          <h2 className="fade-up font-suranna text-[54px] md:text-[67px] font-[400] leading-[1.3em] leading-[1.3em] text-text text-start mb-4">
            {heading}
          </h2>
          <div className="border-t-[0.5px] border-accent my-4" />
          <div className="fade-down flex justify-start items-center gap-10">
            <div className="flex items-center justify-start">
              <Calender h={15} w={15} fill={"#99C24A"} />
              <p className="ml-2 font-jost text-[11px] md:text-[16px] font-[400] leading-[1.3em] text-text">
                {date}
              </p>
            </div>
            <div className="flex items-center justify-start">
              <Comment h={20} w={20} fill={"#99C24A"} />
              <p className="ml-2 font-jost text-[11px] md:text-[16px] font-[400] leading-[1.3em] text-text">
                {comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner2;

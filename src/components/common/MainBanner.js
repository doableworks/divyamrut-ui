"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";

const MainBanner = ({heading, subHeading}) => {
  useEffect(() => {
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
          trigger: "#WhatWeOffer",
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
          trigger: "#WhatWeOffer",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="relative bg-cover bg-center min-h-[250px] md:min-h-[500px] w-[100%] overflow-hidden"
      style={{
        backgroundImage: "url('/asset/home/yoga-coach-training-session-.jpg')",
      }}
    >
      <div className="bg-[rgba(0,0,0,.4)] min-h-[250px] md:min-h-[500px] h-full w-full flex items-center justify-center text-white">
        <div className="relative z-20 mx-auto w-[90%] md:w-[85%] pb-12 pt-48   md:pb-32 md:pt-80 ">
          <h2 className="fade-up font-suranna text-[27px] md:text-[50px] font-[400] leading-[1.3em] text-text text-center mb-4">
            {heading}
          </h2>
          <h3 className="fade-down font-suranna text-[18px] md:text-[28px] font-[400] leading-[1.3em] text-text text-center mb-6">
            {subHeading}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;

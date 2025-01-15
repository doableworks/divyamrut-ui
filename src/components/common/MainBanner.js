"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const MainBanner = ({ heading, subHeading }) => {
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
      className="relative bg-cover bg-center min-h-[250px] md:max-h-[500px] w-[100%] overflow-hidden"
      style={{
        backgroundImage: "url('/asset/home/natural-health-support.jpg')",
      }}
    >
      <div className="bg-[rgba(0,0,0,.4)] min-h-[250px] md:min-h-[500px] h-full w-full flex items-center justify-center text-white">
        <div className="relative z-20 mx-auto w-[90%] md:w-[85%] pb-12 pt-48   md:pb-40">
          <h2 className="fade-up highlight-heading !text-white !mb-0">{heading}</h2>
          <h3 className="fade-down highlight-heading !text-white !text-[1.5rem] !mt-0">
            {subHeading}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;

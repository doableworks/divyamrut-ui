"use client";
import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    name: "Consultations",
    location: "Jakarta",
    image:"/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    name: "Detoxification",
    location: "Bandung",
    image:"/asset/home/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    name: "SpaTreatments",
    location: "Bali",
    image: "/asset/home/spa-treatment.jpg",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    name: "BeautyCare",
    location: "Bandung",
    image:  "/asset/home/multiethnic-women.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    name: "Nutrition",
    location: "Bali",
    image: "/asset/home/ayurvedic-supplement.jpg",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    name: "Workshops",
    location: "Bandung",
    image: "/asset/home/yoga-coach-training-session-.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
];

const WhatWeOffer = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 200 },
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
      ".card-wwo",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
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
    <div id="WhatWeOffer" className="w-full relative bg-[#F9F3EB] overflow-hidden">
      <Image
        className="absolute z-10 top-0 left-0"
        height={200}
        width={200}
        src={"/asset/home/img1.png"}
        alt="img"
      />

      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] xl:w-full py-32">
        <div className="fade-up">
          <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-center">
            What We offer
          </h6>
          <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-center mb-6">
            The combination of nature and science.
          </h2>
        </div>
        <div className="card-wwo flex flex-wrap justify-center gap-8">
          {offers.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[white] shadow-lg px-6 max-w-sm w-full md:w-[33%] 
            py-10"
            >
              <div className="absolute top-0 right-0 rounded-bl-[4rem] overflow-hidden">
                <Image
                  // src={"/asset/home/spa-treatment.jpg"}
                  src={testimonial.image}
                  width={180}
                  height={200}
                  alt="img"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4 mb-20">
                <div className="text-start">
                  <strong className="font-suranna text-[28px] font-[400] leading-[1.4em] text-secondary">
                    {testimonial.name}
                  </strong>
                </div>
              </div>
              <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-center">
                {testimonial.feedback}
              </p>

              <div className="border-t-[0.5px] border-q4d462f5 mt-10" />
              <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center px-4 py-2 bg-q4ca25af  hover:bg-q638d055 transition mt-10">
                Learn more
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

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
    image:
      "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "Detoxification",
    location: "Bandung",
    image:
      "/asset/home/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "SpaTreatments",
    location: "Bali",
    image: "/asset/home/spa-treatment.jpg",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "BeautyCare",
    location: "Bandung",
    image: "/asset/home/multiethnic-women.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "Nutrition",
    location: "Bali",
    image: "/asset/home/ayurvedic-supplement.jpg",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "Workshops",
    location: "Bandung",
    image: "/asset/home/yoga-coach-training-session-.jpg",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
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
    <div id="WhatWeOffer" className="w-full relative bg-FFEEE2 overflow-hidden">
      <Image
        className="absolute z-10 top-0 left-0 w-[150px] md:w-[200px] [@media(max-width:299.98px)]:w-[118px]"
        height={200}
        width={200}
        src={"/asset/home/img1.png"}
        alt="img"
      />

      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] xl:w-full py-32">
        <div className="fade-up flex flex-col justify-center items-center">
          <h6 className="font-jost text-q3c3c3d text-[14px] font-[500] leading-[1.4em] uppercase text-center">
            What We offer
          </h6>
          <h2 className="max-w-xl text-center font-suranna font-[400] text-E0A43B mt-[1rem] mb-[1.5rem] text-[32px] leading-[36px] md:text-[3em] md:leading-[1.3em]">
            The combination of nature and science.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 m-auto">
          {offers.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[white] shadow-lg w-full"
            >
              <div className="flex gap-2 justify-between overflow-hidden">
                <strong className=" ml-6 mt-6 font-suranna text-[28px] font-[400] leading-[1.4em] text-E0A43B">
                  {testimonial.name}
                </strong>
                <Image
                  src={testimonial.image}
                  width={180}
                  height={150}
                  alt={testimonial.name}
                  className="rounded-bl-[4rem] max-w-[180px]"
                  objectFit="cover"
                />
              </div>
              <div className="py-4 px-6">
                <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-start">
                  {testimonial.feedback}
                </p>

                <div className="border-t-[0.5px] border-q4d462f5 mt-10" />
                <div className="site-button-primary">
                  Learn more
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

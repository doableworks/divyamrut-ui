"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DoubleComma, Star } from "@/icon/icons";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    name: "Sarah Johnson",
    location: "Jakarta",
    image: "/asset/testimonial/Sarah.jpg",
    rating: 4,
    feedback:
      "PranaVeda has transformed my life! The personalized Ayurvedic plan has helped me achieve a level of balance and wellness I never thought possible.",
  },
  {
    name: "Michael Brown",
    location: "Bandung",
    image: "/asset/testimonial/Michael.jpg",
    rating: 4,
    feedback:
      "I’ve tried many wellness programs, but PranaVeda stands out. The natural remedies and expert guidance have truly improved my overall health.",
  },
  {
    name: "Emily Davis",
    location: "Bali",
    image: "/asset/testimonial/Emily.jpg",
    rating: 5,
    feedback:
      "PranaVeda's Ayurvedic treatments have been a game-changer for me. The stress management techniques have made a huge difference in my daily life.",
  },
  {
    name: "Michael Brown",
    location: "Bandung",
    image: "/asset/testimonial/Michael.jpg",
    rating: 4,
    feedback:
      "I’ve tried many wellness programs, but PranaVeda stands out. The natural remedies and expert guidance have truly improved my overall health.",
  },
  {
    name: "Emily Davis",
    location: "Bali",
    image: "/asset/testimonial/Emily.jpg",
    rating: 5,
    feedback:
      "PranaVeda's Ayurvedic treatments have been a game-changer for me. The stress management techniques have made a huge difference in my daily life.",
  },
  {
    name: "Michael Brown",
    location: "Bandung",
    image: "/asset/testimonial/Michael.jpg",
    rating: 4,
    feedback:
      "I’ve tried many wellness programs, but PranaVeda stands out. The natural remedies and expert guidance have truly improved my overall health.",
  },
];

const WhatWeOffer = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div id="WhatWeOffer" className="w-full relative bg-[#F9F3EB]">
      <Image
        className="absolute z-10 top-0 left-0"
        height={200}
        width={200}
        src={"/asset/home/img1.png"}
        alt="img"
      />

      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-32">
        <div className="fade-up">
          <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-center">
            What We offer
          </h6>
          <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-center mb-6">
            The combination of nature and science.
          </h2>
        </div>
        <div className="flex flex-wrap justify-between gap-8">
          {offers.map((testimonial, index) => (
            <div
              key={index}
              className="relative testimonial-card bg-[white] shadow-lg p-6 rounded-lg max-w-sm
            py-10 pb-20"
            >
              <div className="absolute top-0 right-0 rounded-bl-[4rem] overflow-hidden">
                <Image
                  src={"/asset/home/spa-treatment.jpg"}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4 mb-32">
                <div className="text-start">
                  <strong className="font-suranna text-[21px] font-[400] leading-[1.4em] text-secondary">
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

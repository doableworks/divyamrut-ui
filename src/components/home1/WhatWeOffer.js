"use client";
import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NoImageAvailabe } from "@/contants/contants";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    name: "Transformational Health Coaching",
    feedback:
      "A safe space to open up and discuss all your health concerns in depth for us to help you discover the root cause based in your emotions.",
  },
  {
    name: "Varied Holistic Therapies",
    feedback:
      "A wide range of alternative and advanced therapies that bring depth to the healing process by uprooting the cause from its core and restoring the innate immune and health mechanism of an individual",
  },
  {
    name: "Concern Specific Health and Wellbeing packages",
    feedback:
      "A comprehensive approach to find an optimum health plan by curating a tailored made package by working one on one to discover what would work best for you.",
  },
  {
    name: "Wellness Products",
    feedback:
      " Shuddhi… an uplifting range of everyday essentials rooted in ancient Indian Culture to purify your mind body and environment.",
  },
  {
    name: "Yoga Therapy and Mindfulness Practices",
    feedback:
      "Incorporating the transformative path of Yoga and Meditation practices with knowledge of medical science to deliver health and well-being at atomic as well as causal levels.",
  },
  {
    name: "Sacred Support Group",
    feedback:
      "A community to support and inspire each other to achieve holistic well-being. Bi-monthly sessions by field experts to impart knowledge and formulas to hasten the healing process with fun and enthusiasm",
  },
  {
    name: "",
    feedback:
      "",
  },
  {
    name: "",
    feedback:
      "",
  },
  {
    name: "",
    feedback:
      "",
  },
];

const WhatWeOffer = () => {
  return (
    <div id="WhatWeOffer" className="bg-FFEEE2">
      <div className="my-16 md:px-9">
        <div className="flex flex-col justify-center items-center">
          <h6 className="section-title">What We offer</h6>
          <h2 className="!max-w-xl highlight-heading">
            The combination of nature and science.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 m-auto">
          {offers.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md rounded-md ">
              <div className="flex gap-4 justify-between overflow-hidden h-32">
                <p className="pl-7 section-title !capitalize !flex !justify-center !items-center !text-[--yellow]">
                  {testimonial.name}
                </p>
                <Image
                  src={NoImageAvailabe}
                  width={180}
                  height={150}
                  alt={testimonial?.name}
                  className="rounded-bl-[4rem] max-w-[180px] h-full"
                  objectFit="cover"
                />
              </div>

              <p className="section-content !p-8">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

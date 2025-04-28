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
    name: "Yoga Therapy and Meditations",
    feedback:
      "Incorporating the transformative path of Yoga and Meditation practices with knowledge of medical science to deliver health and well-being at atomic as well as causal levels.",
  },
  {
    name: "Sacred Support Group",
    feedback:
      "A community to support and inspire each other to achieve holistic well-being. Bi-monthly sessions by field experts to impart knowledge and formulas to hasten the healing process with fun and enthusiasm",
  },
  {
    name: "Corporate Experiences",
    feedback: "Tailored corporate retreats and experiences designed to foster collaboration, boost team morale, and inspire innovation in unique and enriching settings.",
  },
  {
    name: "⁠Luxury Wellness Holidays",
    feedback: "Indulge in transformative wellness escapes featuring world-class spas, holistic therapies, and tranquil environments for complete mind and body rejuvenation.",
  },
  {
    name: "Social Responsibility",
    feedback: "Committed to creating positive impact through sustainable practices, community engagement, and supporting initiatives that drive environmental and social change.",
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
              <div className="overflow-hidden h-32 grid grid-cols-12 gap-4">
                <p className="col-span-8 p-4 section-title !capitalize !flex !justify-center !items-center !text-[--yellow]">
                  {testimonial.name}
                </p>
                <Image
                  src={NoImageAvailabe}
                  width={180}
                  height={150}
                  alt={testimonial?.name}
                  className="rounded-bl-[4rem] w-full h-full col-span-4"
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

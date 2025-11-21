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
    image:
      "https://register.nityanava.com/media/uploads/public/images/25549b10-ebc1-49df-a92d-25870b876909.jpg",
  },
  {
    name: "Varied Holistic Therapies",
    feedback:
      "A wide range of alternative and advanced therapies that bring depth to the healing process by uprooting the cause from its core and restoring the innate immune and health mechanism of an individual",
    image:
      "https://register.nityanava.com/media/uploads/public/images/724120ed-4657-4e74-b1a2-bbfaa9a53e92.jpg",
  },
  {
    name: "Wellness Workshops",
    feedback:
      "Meticulously designed workshops that empower individuals and groups to explore the path of comprehensive and holistic well-being.Each experience is thoughtfully curated to help participants to cultivate optimum health, inner harmony, and lasting happiness.",
    image:
      "https://register.nityanava.com/media/uploads/public/images/0966e7c8-64a6-4495-bf2c-9a0a7dd334f2.jpg",
  },
  {
    name: "Wellness Products",
    feedback:
      "An uplifting range of everyday essentials rooted in ancient Indian Culture to purify your mind body and environment.",
    image:
      "https://register.nityanava.com/media/uploads/product/images/a61afd48-6d44-4d22-979a-ff4f76214f8e_JdEWw38.png",
  },
  {
    name: "Yoga Therapy and Meditations",
    feedback:
      "Incorporating the transformative path of Yoga and Meditation practices with knowledge of medical science to deliver health and well-being at atomic as well as causal levels.",
    image:
      "https://register.nityanava.com/media/uploads/public/images/183ea419-eeb1-4516-94a1-4c58e816e277.jpg",
  },
  {
    name: "Sacred Support Group",
    feedback:
      "A community to support and inspire each other to achieve holistic well-being. Bi-monthly sessions by field experts to impart knowledge and formulas to hasten the healing process with fun and enthusiasm",
    image:
      "https://register.nityanava.com/media/uploads/public/images/79bdc063-3000-4684-b708-ab53774009f5.jpg",
  },
  {
    name: "Corporate Experiences",
    feedback:
      "Uplifting experiences for teams and groups to create awareness and bring into experience the importance of holistic health in achieving work life balance for an overall healthy and happy life. We also design customised plans based on needs of your organisation.",
    image:
      "https://register.nityanava.com/media/uploads/public/images/f426f542-930e-4a49-8270-3ee60a8d9c55.jpg",
  },
  {
    name: "⁠Luxury Wellness Holidays",
    feedback:
      "Luxury in real essence is to enjoy life with a health body and happy mind. Invest in health by soaking in holistic therapies, yoga and meditation while enjoying luxurious stay at tranquil and serene environments for a complete rejuvenation of your mind body and soul.",
    image:
      "https://register.nityanava.com/media/uploads/public/images/148784db-ee8f-40e7-96a2-961ce66cb4c1.jpg",
  },
  {
    name: "Social Responsibility",
    feedback:
      "We pay forward with gratefulness for all that the nature has been providing to us. We donate a portion of our proceeds to forward projects for women empowerment, to enhance spiritual literacy in mankind and provide free coaching for mental well-being to socially & financially deprived communities in various parts of India.",
    image:
      "https://register.nityanava.com/media/uploads/public/images/1b5ba315-3856-4475-87c7-d2bd4859231b.jpg",
  },
];

const WhatWeOffer = () => {
  return (
    <div id="WhatWeOffer" className="bg-FFEEE2">
      <div className="my-16 md:px-9">
        <div className="flex flex-col justify-center items-center">
          <h6 className="highlight-heading !mb-0">What we offer:</h6>
          <h2 className="!max-w-xl highlight-heading !mt-0">
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
                <div
                  className="rounded-bl-[4rem] w-full h-full col-span-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      testimonial?.image || NoImageAvailabe
                    })`,
                  }}
                  role="img"
                  aria-label={testimonial?.name}
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

"use client";
import React from "react";
import Image from "next/image";
import { Star } from "@/icon/icons";
import { twMerge } from "tailwind-merge";
import { NoProfileImage } from "@/contants/contants";
import { Grid, Carousel } from "antd";

const initialTestimonial = [
  {
    name: "Radhika Sharma",
    description:
      "I had chronic back pain for years, but after a few Meru Therapy sessions, I feel lighter and more mobile than ever. The practitioners at Nityanava truly understand the body!",
    image: 'https://register.nityanava.com/media/uploads/public/images/0413903b-9cf8-4c88-b1f5-953436b21a74.jpg',
  },
  {
    name: "Amit Verma",
    description:
      "Marma Therapy at Nityanava was a deeply healing experience. I left every session feeling relaxed and rejuvenated. It helped me manage stress in a very natural way.",
    image: 'https://register.nityanava.com/media/uploads/public/images/9912822b-98d1-444a-8dc6-1b634626e2a5.jpg',
  },
  {
    name: "Sneha Pillai",
    description:
      "I was new to holistic healing but Meru Therapy really changed how I feel. My posture has improved, and I feel more aligned both physically and mentally.",
    image: 'https://register.nityanava.com/media/uploads/public/images/8a4a1b47-4491-4806-900d-5af258045799.jpg',
  },
];

const TestimonialSlider = ({ className = "", data = initialTestimonial }) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const infiniteData = Array.from({ length: 5 }, () => data).flat();

  return (
    <div
      id="testimonials"
      className={twMerge(
        "w-full relative overflow-hidden bg-FFEEE2",
        className
      )}
    >
      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-14 md:py-32">
        <div>
          <h6 className="section-title">Testimonial</h6>
          <h2 className="highlight-heading">Customer Feedback & Reviews</h2>
          <div className="flex gap-4 justify-center mb-10">
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#ccd6df"} />
          </div>
        </div>

        <Carousel
          autoplay
          dots={false}
          slidesToShow={
            screens.xl || screens.xxl || screens.lg ? 3 : screens.md ? 2 : 1
          }
        >
          {infiniteData.map((testimonial, index) => (
            <li className="flex p-4 overflow-hidden list-none" key={index}>
              <div className="relative min-h-full testimonial-card bg-[#F9F3EB] shadow-lg p-6 rounded-lg w-full py-12">
                <Image
                  src={testimonial?.image || NoProfileImage}
                  alt={index}
                  height={100}
                  width={100}
                  className="rounded-full h-24 w-24 mx-auto mb-3"
                />
                <p className="section-title !text-gray-600 !mb-4">
                  {testimonial?.name}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: testimonial?.description }}
                  className="section-content h-[120px] overflow-hidden"
                ></p>
              </div>
            </li>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSlider;

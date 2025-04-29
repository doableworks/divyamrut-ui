"use client";
import React from "react";
import Image from "next/image";
import { Star } from "@/icon/icons";
import { twMerge } from "tailwind-merge";
import { NoProfileImage } from "@/contants/contants";
import { Grid, Carousel } from "antd";

const initialTestimonial = [
  {
    name: "Shreya Agarwal",
    designation: "Teacher | Social Worker",
    description:
      "Once I had BCST with Nikita, I felt emotionally balanced, lighter, and embodied. I noticed the stress in my diaphragm and legs disappear, and it felt like I had my life again.",
    image: null,
  },
  {
    name: "Leela",
    designation: "Meditation Instructor | Social Worker",
    description:
      "With BCST, I could relax both my mind and my body. After the sessions I felt stronger and my energy went up and also my breast cyst got much smaller.",
    image: null,
  },
  {
    name: "Poonam A",
    designation: "Entrepreneur | Mother",
    description:
      "Nikita's BCST sessions assisted me in dealing with my sleep problems and worry. Just after three sessions, I could sleep naturally without medication and I felt very mentally stable.",
    image: null,
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
        <div className="flex flex-col justify-center items-center">
          <h6 className="section-title !mb">Testimonials</h6>
          <div className="border-b-2 w-12 border-[--yellow] mt-2 mb-4" />
          {/* <h2 className="highlight-heading">Customer Feedback & Reviews</h2> */}
          {/* <div className="flex gap-4 justify-center mb-10">
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#ccd6df"} />
          </div> */}
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

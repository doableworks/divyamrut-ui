"use client";
import React from "react";
import Image from "next/image";
import { Star } from "@/icon/icons";
import { twMerge } from "tailwind-merge";
import { NoProfileImage } from "@/contants/contants";
import { Carousel } from "antd";

const initialTestimonial = [
  {
    name: "Lorem Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: null,
  },
  {
    name: "Lorem Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: null,
  },
  {
    name: "Lorem Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: null,
  },
];

const TestimonialSlider = ({
  className = "",
  data = initialTestimonial,
  slidesToShow = 1,
}) => {
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

        <Carousel autoplay dots={false} slidesToShow={slidesToShow}>
          {data.map((testimonial, index) => (
            <li className="flex p-4 overflow-hidden list-none" key={index}>
              <div className="relative min-h-full testimonial-card bg-[#F9F3EB] shadow-lg p-6 rounded-lg w-full py-12">
                <Image
                  src={testimonial?.image || NoProfileImage}
                  height={100}
                  width={100}
                  className="rounded-full h-24 w-24 mx-auto mb-3"
                />
                <p className="section-title !text-gray-600 !mb-4">
                  {testimonial?.name}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: testimonial?.description }}
                  className="section-content h-[100px] overflow-hidden"
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

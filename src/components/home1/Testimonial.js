"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DoubleComma, Star } from "@/icon/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "",
    location: "",
    image: "",
    rating: 4,
    feedback: "",
  },
  {
    name: "",
    location: "",
    image: "",
    rating: 4,
    feedback: "",
  },
  {
    name: "",
    location: "",
    image: "",
    rating: 4,
    feedback: "",
  },
];

const TestimonialSlider = ({ className = "" }) => {
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
          trigger: "#testimonials",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className={twMerge(
        "w-full relative overflow-hidden bg-FFEEE2",
        className
      )}
    >
      {/* <Image
        className="absolute z-10 top-[40%] left-0"
        height={200}
        width={200}
        src={"/asset/home/img_4.png"}
        alt="img"
      />
      <Image
        className="absolute z-10 bottom-[10%] right-0"
        height={200}
        width={200}
        src={"/asset/home/img_5.png"}
        alt="img"
      /> */}

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

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <li className="flex p-4 overflow-hidden " key={index}>
              <div className="relative min-h-full testimonial-card bg-[#F9F3EB] shadow-lg p-6 rounded-lg w-full py-10 pb-20">
                {/* <div className="absolute top-0 right-0 bg-E0A43B p-6  rounded-bl-[10rem]">
                  <DoubleComma fill={"#FFFFFF"} h={30} w={30} />
                </div> */}
                <div className="flex flex-col justify-center items-center gap-4 mb-16">
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  /> */}
                  <div className="text-center">
                    <strong className="font-suranna text-[21px] font-[400] leading-[1.4em] text-E0A43B">
                      {testimonial.name}
                    </strong>
                    <p className="font-jost text-[16px] font-[400] leading-[1.4em] text-q3c3c3d text-center">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="section-content h-[100px] overflow-hidden">
                  {testimonial.feedback}
                </p>
              </div>
            </li>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;

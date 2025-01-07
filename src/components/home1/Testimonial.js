"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DoubleComma, Star } from "@/icon/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
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
];

const TestimonialSlider = () => {
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
      className="w-full relative overflow-hidden bg-FFEEE2"
    >
      <Image
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
      />

      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] xl:w-full py-32">
        <div className="fade-up">
          <h6 className="font-jost text-q3c3c3d text-[14px] font-[500] leading-[1.4em] uppercase text-center">
            Testimonial
          </h6>
          <h2 className="font-suranna  font-[400] text-E0A43B text-center mt-[1rem] mb-[1.5rem] text-[32px] leading-[36px] md:text-[3em] md:leading-[1.3em]">
            Customer Feedback & Reviews
          </h2>
          <div className="flex gap-4 justify-center mb-10">
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#f0ad4e"} />
            <Star h={25} w={25} fill={"#ccd6df"} />
          </div>
        </div>

        <Slider {...settings} >
          {testimonials.map((testimonial, index) => (
            <li className=" p-4" key={index}>
              <div className="relative testimonial-card bg-[#F9F3EB] shadow-lg p-6 rounded-lg w-full py-10 pb-20">
                <div className="absolute top-0 right-0 bg-E0A43B p-6  rounded-bl-[10rem]">
                  <DoubleComma fill={"#FFFFFF"} h={30} w={30} />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 mb-16">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center">
                    <strong className="font-suranna text-[21px] font-[400] leading-[1.4em] text-E0A43B">
                      {testimonial.name}
                    </strong>
                    <p className="font-jost text-[16px] font-[400] leading-[1.4em] text-q3c3c3d text-center">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-center">
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

"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import BackgroundImagesSlider from "@/components/home1/BackgrounImageSlider";
import { Calender } from "@/icon/icons";

const Banner = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
    gsap.fromTo(
      "#card_id",
      { opacity: 0, x: -200 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
      }
    );
  }, []);

  // useGSAP(()=>{
  //   gsap.from("#card_id",
  //    {
  //      x:-200,
  //      duration:1,
  //      delay:0.5
  //    }
  //   )
  // })

  return (
    <div className="min-h-screen h-screen w-full rounded-br-[10rem] md:rounded-br-[12rem] overflow-hidden">
      <div class="md:grid grid-cols-2 flex flex-col-reverse h-full">
        {/* left section */}
        <div className="relative bg-transparent bg-custom-radial h-full pl-10 md:pl-32 pr-5 md:pr-24">
          <div class="relative top-0 md:top-[18%] left-[-2.5rem] md:left-0  w-screen bg-contain h-full md:h-[65%]  opacity-15 bg-[url('/asset/home/banner-left.png')] bg-no-repeat" />
          <div className="absolute bottom-[20%] text-left space-y-6 fade-up pr-10">
            <h6 className="font-jost text-[12px] md:text-[14px] font-[500] text-c94d9ab uppercase">
              Welcome to PranaVeda
            </h6>
            <h1 className="font-suranna text-[32px] md:text-[89px] font-[400] leading-[1em] text-left text-[#FFFFFF]">
              Transform Your Health Naturally.
            </h1>
            <p className="max-w-3xl mx-auto font-jost text-[16px] md:text-[21px] font-[400] leading-[1.4em] text-left text-[#FFFFFF]">
              Experience Holistic Wellness with PranaVeda: Embrace the Power of
              Ayurveda for a Balanced Life. 
            </p>
            <div className="font-suranna text-[16px] md:text-[21px] font-[400] leading-[1.4em] text-left text-[#FFFFFF] inline-flex items-center gap-2 justify-center px-6 py-3 mt-4 bg-q4ca25af  hover:bg-q638d055 transition">
            <Calender fill={"#FFFFFF"} /> Book an Appointment
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <BackgroundImagesSlider />
          <div
            id="card_id"
            className="hidden md:block absolute bottom-0 bg-white h-[300px] w-[300px] p-4"
          >
            {/* Icon Box */}

            <div className="h-full flex flex-col justify-evenly items-center text-center border border-1 border-d49ac81 p-4">
              {/* Icon */}

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                Premium Treatments
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600">
                We offer Ayurvedic Treatments based on the Ashta Vaidya
                Tradition from Kerala, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

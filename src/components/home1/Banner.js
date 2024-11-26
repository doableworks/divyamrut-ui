// import React from 'react'
// import Image from 'next/image'

// const Banner = () => {
//   return (
//     <div>
//         <img src="banner-image.jpg" alt="Banner Image" style="width: 100%; height: auto;">

//     </div>
//   )
// }

// export default Banner

"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import BackgroundImagesSlider from "@/components/home1/BackgrounImageSlider";

const Banner = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
    gsap.fromTo("#card_id",
      { opacity: 0,  x:-200,},
      {
        x:0,
        opacity: 1,
        duration:1,
        delay:0.5,
        stagger: 0.2
      }
     )
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
    <div className="">
      <div class="md:grid grid-cols-2 flex flex-col-reverse">
        {/* left section */}
        <div className="relative bg-transparent bg-custom-radial min-h-screen pl-32 pr-24">
          <div class="relative top-[18%] bg-contain h-[65%]  opacity-15 bg-[url('/asset/home/banner-left.png')] bg-no-repeat" />
          <div className="absolute bottom-[20%] text-left space-y-6 fade-up pr-10">
            <h6 className="font-jost text-[14px] font-[500] text-c94d9ab uppercase">
              Welcome to PranaVeda
            </h6>
            <h1 className="font-suranna text-[89px] font-[400] leading-[1em] text-left text-[#FFFFFF]">
              Transform Your Health Naturally.
            </h1>
            <p className="max-w-3xl mx-auto font-jost text-[18px] font-[400] leading-[1.4em] text-left text-[#FFFFFF]">
              Experience Holistic Wellness with PranaVeda: Embrace the Power of
              Ayurveda for a Balanced Life.
            </p>
            <a
              href="#"
              className="font-suranna text-[21px] font-[400] leading-[1.4em] text-left text-[#FFFFFF] inline-flex items-center justify-center px-6 py-3 mt-4 bg-q4ca25af  hover:bg-q638d055 transition"
            >
              <i className="mr-2 icons icon-calendar"></i> Book an Appointment
            </a>
          </div>
        </div>
        <div className="relative">
          <BackgroundImagesSlider />
          <div
          id="card_id"
           className="absolute bottom-0 bg-white h-[300px] w-[300px] p-4">
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

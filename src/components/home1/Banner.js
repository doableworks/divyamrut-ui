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

const Banner = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="">
      <div class="md:grid grid-cols-2 flex flex-col-reverse">
        {/* left section */}
        <div className="relative bg-transparent bg-custom-radial pt-40 pb-10 pl-32 pr-24">
          <div class="bg-contain min-h-screen opacity-15 bg-cover bg-[url('/asset/home/banner-left.png')] bg-no-repeat" />
          {/* <div className="absolute top-[1%] bg-[red] text-left space-y-6 fade-up"> */}
            <h6 className="text-lg font-semibold">Welcome to PranaVeda</h6>
            <h1 className="text-4xl md:text-5xl font-bold">
              Transform Your Health Naturally.
            </h1>
            <p className="max-w-3xl mx-auto text-lg">
              Experience Holistic Wellness with PranaVeda: Embrace the Power of
              Ayurveda for a Balanced Life.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
            >
              <i className="mr-2 icons icon-calendar"></i> Book an Appointment
            </a>
          {/* </div> */}
        </div>
        <div className="bg-[red] ">Item 2</div>
      </div>
      {/* Main Content */}
      <div className="text-center space-y-6 fade-up">
        <h6 className="text-lg font-semibold">Welcome to PranaVeda</h6>
        <h1 className="text-4xl md:text-5xl font-bold">
          Transform Your Health Naturally.
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Experience Holistic Wellness with PranaVeda: Embrace the Power of
          Ayurveda for a Balanced Life.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
        >
          <i className="mr-2 icons icon-calendar"></i> Book an Appointment
        </a>
      </div>

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="h-full w-full animate-fade">
          <img
            src="http://shine.creativemox.com/pranaveda/wp-content/uploads/sites/10/2024/08/turmeric-with-ginger-and-lemon-tea.jpg"
            alt="Background 1"
            className="absolute inset-0 w-full h-full object-cover opacity-0"
          />
          <img
            src="http://shine.creativemox.com/pranaveda/wp-content/uploads/sites/10/2024/08/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg"
            alt="Background 2"
            className="absolute inset-0 w-full h-full object-cover opacity-0"
          />
          <img
            src="http://shine.creativemox.com/pranaveda/wp-content/uploads/sites/10/2024/08/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
            alt="Background 3"
            className="absolute inset-0 w-full h-full object-cover opacity-0"
          />
          <img
            src="http://shine.creativemox.com/pranaveda/wp-content/uploads/sites/10/2024/08/top-view-of-woman-using-singing-bowl-in-sound-healing-therapy-.jpg"
            alt="Background 4"
            className="absolute inset-0 w-full h-full object-cover opacity-0"
          />
        </div>
      </div>

      {/* Video Button */}
      <div className="absolute bottom-12 fade-up">
        <a
          href="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-800 p-4 hover:bg-gray-700 transition"
        >
          <i className="icon icon-play-button text-white text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Banner;

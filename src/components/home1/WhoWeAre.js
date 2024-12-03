"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Checked, Flower, HeadPhone } from "@/icon/icons";


gsap.registerPlugin(ScrollTrigger);

const features = [
  "Professional Therapist",
  "Organic Herbal",
  "Comprehensive Services",
  "24/7 Premium Support",
];

const WhoWeAre = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".left-section-wwa",
      {x: -300,
        opacity: 0},
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#whoWeAre",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );

    gsap.fromTo(
        ".right-section-wwa",
      {y: -300,
        opacity: 0},
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#whoWeAre",
          start: "top 80%",
          end: "bottom 20%",
          // scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#bottom-card-wwa",
    {y: 200,
      opacity: 0},
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#whoWeAre",
        start: "top 90%",
        end: "bottom 20%",
        // scrub: true,
      },
    }
  );

    gsap.fromTo(
      "#card_id-wwa",
    {y: 300, x:300,
      opacity: 0},
    {
      y: 0,
      x:0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#whoWeAre",
        start: "top 80%",
        end: "bottom 20%",
        // scrub: true,
      },
    }
  );
  },[]); 

  return (
    <div id="whoWeAre" className="w-full relative bg-text">
      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-20 md:py-32">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-x-24 gap-y-5 ">
          <div className="left-section-wwa py-[1rem] md:py-[5.5rem]">
            <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-left mb-5">
              Who we are
            </h6>
            <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-left mb-6">
              The combination of nature and science.
            </h2>
            <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-left">
              Laoreet consequat erat orci metus montes potenti porta ultrices
              sagittis. Duis libero maecenas sodales commodo hendrerit. Litora
              quisque molestie ultricies eros parturient pretium volutpat.
            </p>
            <div className="border-t-[0.5px] border-q4d462f5 my-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 bg-white rounded-full shadow-lg"
                >
                  <Checked
                    background={"#FFFFFF"}
                    fill={"#99C24A"}
                    h={30}
                    w={30}
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="right-section-wwa h-full bg-cover bg-center md:bg-center  mr-8 md:mr-0 transition-all duration-1000 min-h-[450px]"
            style={{
              backgroundImage: `url("/asset/home/ayurvedic-facial-massage.jpg")`,
            }}
          >
            <div className="absolute bottom-[-30px] right-[-10px] md:right-[-30px] bg-white h-[250px] w-[200px] p-4 bg-custom-radial flex flex-col justify-evenly items-center text-center"
              id="card_id-wwa"
            >
              {/* Icon */}
              <div className="flex justify-center w-full mb-5">
                <Flower fill="#FFFFFF" w={30} h={30} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text">
                Tailored Ayurveda Solutions
              </h3>
              <div className="border-t-[0.5px] border-q4d462f5 my-5" />
              {/* Description */}
              <p className="mt-2 text-sm text-text">
                Eget lobortis convallis habitant aliquam cras nulla tempor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t-[0.5px] border-q4d462f5 mb-[5rem] flex justify-center">
        <div id="bottom-card-wwa" className="relative z-20 top-[-36px] flex items-center flex-col md:flex-row justify-between items-center p-4 px-2 md:px-32 rounded-xl md:rounded-full border border-gray-300 shadow-md gap-8 bg-white ">
          {/* <div className="flex items-center space-x-3"> */}
            <HeadPhone fill="#99C24A" h={35} w={35} />
            <p className="w-[80%] font-suranna text-[16px] md:text-[21px] font-[400] leading-[1.4em] text-secondary text-center">
              Start Your Personal Health Plan with PranaVeda ! 
            </p>
          {/* </div> */}
          <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center px-2  py-1 bg-q4ca25af transition rounded-xl">
            <h5 className="font-inter text-[13px] font-[400] leading-[1.5em] text-text text-nowrap">
              Contact us
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

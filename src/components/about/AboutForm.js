"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Puzzle, Call, Message } from "@/icon/icons";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "Puzzle",
    heading: "Head Office",
    title: "Jln Cempaka Wangi No 22",
    text: "Jln Cempaka Wangi No. 22 Jakarta - Indonesia.",
  },
  {
    icon: "Message",
    heading: "Email Support",
    title: "support@yourdomain.tld",
    text: "hello@domain.tld.",
  },
  {
    icon: "Call",
    heading: "Let's Talk",
    title: "Phone : +6221.2002.2012",
    text: "Fax : +6221.2002.2013",
  },
];

const AboutForm = () => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".left-section",
  //     { opacity: 0, x: -1000 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1,
  //       delay: 0.5,
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: "#AboutForm",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         // scrub: true,
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     ".right-section",
  //     { opacity: 0, x: 1000 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1,
  //       delay: 0.5,
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: "#AboutForm",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         // scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div
      id="AboutForm"
      className="w-full relative bg-FFEEE2 overflow-hidden"
    >
      <div className="common_page_width">
        <div className="flex flex-col md:flex-row justify-between gap-x-24 gap-y-5 ">
          <div className="left-section w-full md:w-[35%]">  
            <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-left mb-5">
              Get in touch
            </h6>
            <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-left mb-6">
              We will be in touch shortly.
            </h2>

            <p className="font-jost text-primary text-[18px] font-[400] leading-[1.4em] text-a2c0d56 text-left mb-5">
              Leo aenean ut nec dictum venenatis suspendisse nunc ornare arcu.
            </p>
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start w-full gap-8`}
                >
                  <div className={`mb-4 p-6  bg-c94d9ab`}>
                    {feature.icon == "Puzzle" ? (
                      <Puzzle fill="#FFFFFF" h={35} w={35} />
                    ) : feature.icon == "Message" ? (
                      <Message fill="#FFFFFF" h={35} w={35} />
                    ) : (
                      <Call fill="#FFFFFF" h={35} w={35} />
                    )}
                  </div>
                  <div>
                    <h3
                      className={`font-jost text-[12px] md:text-[14px] font-[500] leading-[1.3em] text-secondary uppercase mb-2`}
                    >
                      {feature.heading}
                    </h3>
                    <p
                      className={`font-suranna text-[16px] md:text-[21px] font-[400] text-left leading-[1.4em] text-primary`}
                    >
                      {feature.title}
                    </p>
                    <p
                       className={`font-suranna text-[16px] md:text-[21px] font-[400] text-left leading-[1.4em] text-primary`}  
                    >
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-section w-full md:w-[65%] h-full">
            <div className="bg-white p-8 shadow-lg rounded-md max-w-3xl mx-auto">
              <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-left mb-6">
              Send us a message
            </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                      // style={{
                      //   fontFamily:"jost",
                      //   fontSize:"16px",
                      //   color: "#4A5C24",
                      //   backgroundColor:"#F9F3EB",
                      //   borderColor:"#F9F3EB",
                      // }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Company"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="w-full p-3  h-32 resize-none font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-q4ca25af text-white p-4 rounded flex items-center justify-center gap-2"
                >
                  <Message fill={"#FFFFFF"}  w={25} h={25} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;

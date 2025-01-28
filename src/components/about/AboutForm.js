"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Puzzle, Call, Message } from "@/icon/icons";
import {
  PhoneOutlined,
  MailOutlined,
  PushpinOutlined,
} from "@ant-design/icons";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <PhoneOutlined
        style={{ color: "white", fontSize: "28px", transform: "rotate(90deg)" }}
      />
    ),
    heading: "Phone",
    text: "+91-8169123024",
  },
  {
    icon: <MailOutlined style={{ color: "white", fontSize: "28px" }} />,
    heading: "E-mail",
    text: "contact@divyamrutnaturals.com",
  },
  {
    icon: <PushpinOutlined style={{ color: "white", fontSize: "28px" }} />,
    heading: "Address",
    text: "413, Sai Arcade, N.S. Road, Mulund West, Mumbai – 400080",
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
    <div id="AboutForm" className="w-full relative bg-FFEEE2 overflow-hidden">
      <div className="common_page_width">
        <div className="flex flex-col md:flex-row justify-between gap-x-24 gap-y-5 ">
          <div className="left-section w-full md:w-[35%]">
            <h6 className="highlight-heading !text-left">Contact us</h6>
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-start w-full gap-4 mb-4`}>
                  <div className="p-3 bg-[--yellow]">{feature.icon}</div>
                  <div>
                    <h3 className="section-title !text-left">
                      {feature.heading}
                    </h3>
                    <p className="section-content !text-left">
                      {feature.title}
                    </p>
                    <p className="section-content !text-left">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-section w-full md:w-[65%] h-full">
            <div className="bg-white p-8 shadow-lg rounded-md max-w-3xl mx-auto">
              <h2 className="highlight-heading !text-left ">
                Send us a message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="input-label">
                        Name<span className="input-label-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="input-label">
                        Phone<span className="input-label-required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Phone"
                        className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="input-label">
                      Email<span className="input-label-required">*</span>
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
                  <label htmlFor="message" className="input-label">
                    Message<span className="input-label-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="w-full p-3  h-32 resize-none font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="site-button-primary w-full flex gap-1 items-center"
                >
                  <Message fill={"#FFFFFF"} w={25} h={25} />
                  <span>Send Message</span>
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

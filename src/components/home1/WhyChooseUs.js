"use client"; // Use client-side rendering for GSAP animations
import { Coffee, Drawer, Help, Diamond } from "@/icon/icons";
import { useEffect } from "react";
import CountUpCom from "./CountUpCom";
import gsap from "gsap";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "Diamon",
      title: "Expert Guidance",
      text: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida.",
    },
    {
      icon: "Holistic",
      title: "Holistic Approach",
      text: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida.",
    },
    {
      icon: "Coffee",
      title: "Natural Solutions",
      text: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida.",
    },
    {
      icon: "Help",
      title: "Community Support",
      text: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida.",
    },
  ];

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section>
      <div
        className="bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/asset/home/powder-spices-and-herbs.jpg')",
        }}
      >
        <div className="bg-[rgba(0,0,0,.4)] w-full text-white">
          <div className="relative z-20 mx-auto flex flex-col items-center justify-center w-[90%] md:w-[85%] xl:w-full py-32">
            <div className="fade-up max-w-xl">
              <h6 className="font-jost text-text text-[14px] font-[500] leading-[1.4em] uppercase text-center">
                Why Choose Us
              </h6>
              <h2 className="font-suranna mt-[1rem] mb-[1.5rem] text-[32px] leading-[36px] md:text-[3em] md:leading-[1.3em] font-[400] text-text text-center">
                Medicine with the green perspective.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-black bg-opacity-60 text-white rounded-lg hover:scale-105 transition-transform duration-300 w-full"
                >
                  <div className="mb-4">
                    {feature.icon == "Diamond" ? (
                      <Diamond fill="#99C24A" h={35} w={35} />
                    ) : feature.icon == "Holistic" ? (
                      <Drawer fill="#99C24A" h={35} w={35} />
                    ) : feature.icon == "Coffee" ? (
                      <Coffee fill="#99C24A" h={35} w={35} />
                    ) : (
                      <Help fill="#99C24A" h={35} w={35} />
                    )}
                  </div>
                  <h3 className="font-suranna text-[20px] md:text-[21px] font-[400] leading-[1.4em] text-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-jost text-[11px] md:text-[16px] font-[400] text-center text-[#FFFFFF80]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[--yellow] p-4">
        <div className="grid [@media(max-width:319.98px)]:grid-cols-1 grid-cols-2 md:grid-cols-4 items-center gap-8 text-center  text-white">
          <div >
            <CountUpCom id="product" end={47} suffix="K+" />
            <p className="font-jost text-[13px] md:text-[13px] font-[500] text-q3c3c3d uppercase">
              Product Sold
            </p>
          </div>
          <div >
            <CountUpCom id="happy" end={8} suffix="K+" />
            <p className="font-jost text-[13px] md:text-[13px] font-[500] text-q3c3c3d uppercase">
              Happy Customer
            </p>
          </div>
          <div >
            <CountUpCom id="country" end={51} suffix="+" />
            <p className="font-jost text-[13px] md:text-[13px] font-[500] text-q3c3c3d uppercase">
              Country Support
            </p>
          </div>
          <div >
            <CountUpCom id="rating" end={4.8} suffix="" decimals={1} />
            <p className="font-jost text-[13px] md:text-[13px] font-[500] text-q3c3c3d uppercase">
              Customer Ratings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

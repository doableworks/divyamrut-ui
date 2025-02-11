import Image from "next/image";
import Banner from "@/components/home1/Banner";
import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import AncientWisdomForModernLiving from "@/components/home1/AncientWisdomForModernLiving";
import HolisticHealth from "@/components/home1/HolisticHealth";
import WhyChooseUs from "@/components/home1/WhyChooseUs";
import WhoWeAre from "@/components/home1/WhoWeAre";
import OurServices from "@/components/home1/OurServices";
import HeroBanner from "@/components/common/reference/HeroBanner";
import HomeAboutUs from "@/components/home1/HomeAboutUs";
import HomeEnquiry from "@/components/home1/HomeEnquiry";

export default function Home() {
  return (
    <main
      //  className="relative z-10 mt-[-12rem] bg-cover bg-[url('/asset/home/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg')] bg-no-repeat"
      className="bg-FFEEE2"
    >
      <HeroBanner />
      <HomeAboutUs />
      {/* <WhoWeAre /> */}
      {/* <HolisticHealth /> */}
      {/* <OurServices /> */}
      <WhatWeOffer />
      <WhyChooseUs />
      <Testimonial />
      <HomeEnquiry />
      {/* <AncientWisdomForModernLiving /> */}
    </main>
  );
}

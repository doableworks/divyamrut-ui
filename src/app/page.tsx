import Image from "next/image";
import Banner from "@/components/home1/Banner";
import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import AncientWisdomForModernLiving from "@/components/home1/AncientWisdomForModernLiving";
import HolisticHealth from "@/components/home1/HolisticHealth";
import WhyChooseUs from "@/components/home1/WhyChooseUs";

export default function Home() {
  return (
    <main
    //  className="relative z-10 mt-[-12rem] bg-cover bg-[url('/asset/home/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg')] bg-no-repeat"
    >
      <Banner />
      <HolisticHealth />
      <WhatWeOffer />
      <WhyChooseUs />
      <AncientWisdomForModernLiving />
      <Testimonial />
    </main>
  );
}

import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import WhyChooseUs from "@/components/home1/WhyChooseUs";
import HeroBanner from "@/components/common/reference/HeroBanner";
import HomeAboutUs from "@/components/home1/HomeAboutUs";
import HomeEnquiry from "@/components/home1/HomeEnquiry";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <HomeAboutUs />
      <WhatWeOffer />
      <WhyChooseUs />
      <Testimonial />
      <HomeEnquiry />
    </main>
  );
}

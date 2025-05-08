import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import HeroBanner from "@/components/common/reference/HeroBanner";
import HomeAboutUs from "@/components/home1/HomeAboutUs";
import HomeEnquiry from "@/components/home1/HomeEnquiry";
import PathPurposeGoal from "@/components/home1/PathPurposeGoal";
import HomeIllustration from "./HomeIllustration";
import DisplayBlocks from "./DisplayBlocks";

const apiUrl = process.env.NEXT_PUBLIC_API_URL


export default function HomeMainContainer() {
  return (
    <>
      <HeroBanner />
      <DisplayBlocks />
      <HomeAboutUs />
      <PathPurposeGoal />
      <WhatWeOffer />
      <HomeIllustration />
      <Testimonial />
      <HomeEnquiry />
    </>
  );
}

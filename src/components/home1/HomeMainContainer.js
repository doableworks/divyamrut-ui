"use client";

import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import HeroBanner from "@/components/common/reference/HeroBanner";
import HomeAboutUs from "@/components/home1/HomeAboutUs";
import HomeEnquiry from "@/components/home1/HomeEnquiry";
import PathPurposeGoal from "@/components/home1/PathPurposeGoal";
import { useRef } from "react";
import HomeIllustration from "./HomeIllustration";
import DisplayBlocks from "./DisplayBlocks";

export default function HomeMainContainer() {
  const enquiryRef = useRef(null);

  return (
    <>
      <HeroBanner />
      <DisplayBlocks />
      <HomeAboutUs scrollToRef={enquiryRef} />
      <PathPurposeGoal />
      <WhatWeOffer />
      <HomeIllustration />
      <Testimonial />
      <HomeEnquiry ref={enquiryRef} />
      {/* <WhyChooseUs /> */}
    </>
  );
}

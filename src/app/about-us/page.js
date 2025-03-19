import MainBanner from "@/components/common/MainBanner";
import OurValues from "@/components/about/OurValues";
import React from "react";
import WhyUsSection from "@/components/about/WhyUsSection";
import TestimonialSlider from "@/components/home1/Testimonial";
import PathPurposeGoal from "@/components/home1/PathPurposeGoal";
import AboutUsDetail from "@/components/about/AboutUsDetail";

const page = () => {
  const heading = "About us";

  return (
    <div>
      {/* <OurValues /> */}
      <AboutUsDetail />
      <PathPurposeGoal className="bg-transparent"/>
      <WhyUsSection />
    </div>
  );
};

export default page;

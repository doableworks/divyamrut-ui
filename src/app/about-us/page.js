import React from "react";
import WhyUsSection from "@/components/about/WhyUsSection";
import PathPurposeGoal from "@/components/home1/PathPurposeGoal";
import AboutUsDetail from "@/components/about/AboutUsDetail";
import FounderNote from "@/components/about/FounderNote";
import AboutFounder from "@/components/about/AboutFounder";
import HerPublications from "@/components/about/HerPublications";

const page = () => {
  return (
    <div>
      <AboutFounder />
      <HerPublications />
      <FounderNote />
      <AboutUsDetail />
      <PathPurposeGoal className="bg-transparent" />
      <WhyUsSection />
    </div>
  );
};

export default page;

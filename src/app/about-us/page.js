import React from "react";
import WhyUsSection from "@/components/about/WhyUsSection";
import PathPurposeGoal from "@/components/home1/PathPurposeGoal";
import AboutUsDetail from "@/components/about/AboutUsDetail";
import FounderMessage from "@/components/about/FounderMessage";

const page = () => {
  return (
    <div>
      <FounderMessage />
      <AboutUsDetail />
      <PathPurposeGoal className="bg-transparent" />
      <WhyUsSection />
    </div>
  );
};

export default page;

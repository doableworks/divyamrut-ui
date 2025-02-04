"use client";
import React from "react";

const LottieShowcase = ({ source, height = "150px", width = "150px" }) => {
  return (
    <iframe
      src={source}
      style={{ height: height, width: width, border: "none" }}
      title="Lottie Animation"
    ></iframe>
  );
};

export default LottieShowcase;

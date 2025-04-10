"use client";
import { blogsStaticCover } from "@/contants/contants";
import React from "react";
import { twMerge } from "tailwind-merge";

const MainBanner = ({
  heading,
  subHeading,
  image = blogsStaticCover,
  className = "",
}) => {
  return (
    <section
      className={twMerge(
        "relative bg-cover bg-center h-96 w-full overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] flex flex-col justify-center items-center">
        <h2 className="highlight-heading !leading-relaxed !capitalize !text-[--base] !max-w-4xl">
          {heading}
        </h2>
        <h3 className="section-title !text-[--base]">{subHeading}</h3>
      </div>
    </section>
  );
};

export default MainBanner;

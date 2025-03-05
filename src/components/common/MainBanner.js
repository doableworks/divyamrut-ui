"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

const MainBanner = ({
  heading,
  subHeading,
  image = "https://media.istockphoto.com/id/1315443779/photo/young-woman-talking-about-her-mental-health-problems.jpg?s=612x612&w=0&k=20&c=Bb2aaD_2egsY2pmO9ns8wlik6FvazMj6yBZnO6JWZls=",
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

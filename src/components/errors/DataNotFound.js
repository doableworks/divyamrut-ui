"use client";
import React from "react";
import LottieShowcase from "../payment/LottieShowcase";
import { twMerge } from "tailwind-merge";

const DataNotFound = ({
  title = "No Bookings Yet",
  description = "Discover our therapy sessions and experience the care you deserve.",
  className = "",
  children,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center w-full h-full text-center px-4 py-6",
        className
      )}
    >
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500 mt-2 max-w-md">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default DataNotFound;

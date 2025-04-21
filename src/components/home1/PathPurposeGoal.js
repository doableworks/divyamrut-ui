"use client";
import {
  ArrowTrendingUpIcon,
  FlagIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { twMerge } from "tailwind-merge";

const features = [
  {
    icon: ArrowTrendingUpIcon,
    title: "The Path",
    text: "Unveiling the infinite potentials of human consciousness to restore the innate healing mechanism bestowed over us by nature to accelerate healing and regeneration of your ever-new Divine Self.",
  },
  {
    icon: GlobeAltIcon,
    title: "The Purpose",
    text: "When the body is healthy and the mind is happy, learning and growing through life experiences becomes more joyful and wholesome to achieve the purpose of restoring health for a celebratory life.",
  },
  {
    icon: FlagIcon,
    title: "The Goal",
    text: "Optimum utilization of this precious human birth to explore and achieve the highest.",
  },
];

export default function PathPurposeGoal({ className }) {
  return (
    <div className={twMerge("flex justify-center w-full bg-white", className)}>
      <section className="px-6 md:px-16 py-24">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border-2 border-[--yellow] rounded-lg hover:scale-95 transition-transform duration-300 w-full"
            >
              <div className="mb-4">
                {React.createElement(feature.icon, {
                  className: "h-12 w-12 text-[--yellow]",
                })}
              </div>
              <h3 className="section-title !mb-4 !capitalize">
                {feature.title}
              </h3>
              <p className="section-content ">{feature.text}</p>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}

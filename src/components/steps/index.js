import React from "react";
import "./steps.css";
import { Steps } from "antd";
import { twMerge } from "tailwind-merge";

const intialSteps = [
  {
    title: "Finished",
    description: "This will define",
  },
  {
    title: "In Process",
  },
  {
    title: "Waiting",
    description: "here we are",
  },
];

const CustomSteps = ({
  current = 1,
  status = "process",
  direction = "horizontal",
  items = intialSteps,
  className,
}) => {
  return (
    <div className={twMerge("", className)}>
      <Steps
        current={current}
        status={status}
        direction={direction}
        items={items}
      />
    </div>
  );
};

export default CustomSteps;

import React, { useEffect, useRef } from "react";
import "./steps.css";
import { Steps } from "antd";
import { twMerge } from "tailwind-merge";

const intialSteps = [];

const CustomSteps = ({
  current = 1,
  status = "process",
  direction = "horizontal",
  items = intialSteps,
  className,
  onStepClick,
}) => {
  const transformedItems = items.map((step, index) => {
    if (index === current) {
      return {
        ...step,
        onClick: () => onStepClick(index),
      };
    } else {
      return {
        ...step,
        title: "",
        onClick: () => onStepClick(index),
      };
    }
  });

  return (
    <div
      className={twMerge(
        "w-full overflow-x-auto no-scrollbar cursor-pointer",
        className
      )}
    >
      <Steps
        current={current}
        status={status}
        direction={direction}
        items={transformedItems}
        onStepClick={onStepClick}
      />
    </div>
  );
};

export default CustomSteps;

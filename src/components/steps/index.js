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
  const stepsContainerRef = useRef(null);
  const activeStepRef = useRef(null);

  useEffect(() => {
    if (activeStepRef.current) {
      activeStepRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [current]);

  return (
    <div
      ref={stepsContainerRef}
      className={twMerge("w-full overflow-x-auto no-scrollbar cursor-pointer", className)}
    >
      <Steps
        current={current}
        status={status}
        direction={direction}
        items={items.map((step, index) => ({
          ...step,
          onClick: () => onStepClick(index),
          ref: index === current ? activeStepRef : null,
        }))}
        onStepClick={onStepClick} 
      />
    </div>
  );
};

export default CustomSteps;

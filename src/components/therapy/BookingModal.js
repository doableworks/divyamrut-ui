import React, { useState } from "react";
import { Button, Flex, Modal, Steps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import "./therapy.css";
import Image from "next/image";
import CustomSteps from "@/components/steps/index";

const stepsTherapyBooking = [
  {
    id: 0,
    label: "Select Staff",
    title: "Staff",
  },
  {
    id: 1,
    label: "Select Date & Time",
    title: "Date & Time",
  },
  {
    id: 2,
    label: "Fill Information",
    title: "Information",
  },
  {
    id: 3,
    label: "Confirm Details",
    title: "Confirmation",
  },
];

const smallDeviceItems = [
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
];

export default function BookingModal({}) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(stepsTherapyBooking[0]);

  const isBookingModal = useSelector((state) => state.therapy.isBookingModal);

  const handleBookingModal = (payload) => {
    dispatch(toggleBookingModal(payload));
  };

  const renderActiveStep = () => {
    switch (activeStep) {
      case "":
        return null;

      default:
        return <div className="h-56 lg:h-auto"></div>;
    }
  };

  return (
    <Modal
      centered
      open={isBookingModal}
      onCancel={() => handleBookingModal(false)}
      footer={null}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      <div className="max-h-[80vh] flex flex-col lg:flex-row w-full">
        <section className="bg-[--base] w-full lg:w-[35%] p-6">
          <Image
            src="/asset/divyamrut_transparent_logo.webp"
            alt="logo"
            height={100}
            width={100}
            className="site_logo m-auto mb-7"
          />
          <CustomSteps items={smallDeviceItems} className="block lg:hidden" />
          <CustomSteps
            items={stepsTherapyBooking}
            direction="vertical"
            className="hidden lg:inline min-h-32"
          />
        </section>
        <section className="bg-[#e1e1e18d] flex-grow flex flex-col">
          <div className=" border-b-2 p-3">
            <p className="section-title !text-[--voilet] !normal-case !text-left">
              {activeStep.label}
            </p>
          </div>
          <div className="flex-grow h-full">{renderActiveStep()}</div>
          <div className="bg-white w-full p-3 flex justify-between items-center">
            <button className="site-button-primary !mt-0 !min-w-24 !min-h-max">
              Cancel
            </button>
            <button className="site-button-secondary !mt-0 !min-w-24 !min-h-max">
              Next
            </button>
          </div>
        </section>
      </div>
    </Modal>
  );
}

import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import "./therapy.css";
import Image from "next/image";
import CustomSteps from "@/components/steps/index";
import StaffItem, { NoStaffAvailabe } from "./StaffItem";
import { message } from "antd";
import CustomCalendar from "@/components/calendar/CustomCalendar";

const allowedStatuses = ["wait", "process", "finish", "error"];

const stepsTherapyBooking = [
  {
    id: 0,
    label: "Select Staff",
    title: "Therapist",
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
    title: "Payment",
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
];

export default function BookingModal({ therapyStaff }) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [lastStepStatus, setLastStepStatus] = useState("process");

  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const isBookingModal = useSelector((state) => state.therapy.isBookingModal);

  const increaseActiveStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSetSelectedStaff = (clickedStaff) => {
    setSelectedStaff(clickedStaff);
    increaseActiveStep();
  };

  const decreaseActiveStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCancelBookingModal = () => {
    setActiveStep(0);
    setSelectedStaff(null);
    dispatch(toggleBookingModal(false));
  };

  const handleCheckValidation = () => {
    switch (activeStep) {
      case 0:
        if (selectedStaff) {
          return true;
        } else {
          messageApi.open({
            type: "error",
            content: "Please choose the staff to proceed.",
          });
          return false;
        }
      default:
        return false;
    }
  };

  const handleStepNext = () => {
    const isValidated = handleCheckValidation();

    if (isValidated) {
      if (activeStep === 0) {
        increaseActiveStep();
      }
    }
  };

  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return therapyStaff?.length > 0 ? (
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-3 p-5">
            {therapyStaff.map((each) => (
              <StaffItem
                detail={each}
                key={each.id}
                selectedStaff={selectedStaff}
                handleSetSelectedStaff={handleSetSelectedStaff}
              />
            ))}
          </ul>
        ) : (
          <NoStaffAvailabe />
        );
      case 1:
        return (
          <div className="h-full p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <p className="text-center section-title !mb-3">Date</p>
              <CustomCalendar />
            </div>
            <div>
              <p className="text-center section-title !mb-3">Time</p>
              <div className="bg-white rounded h-full pt-3">
                <p className="section-content !mb-3">Select Date</p>
                <hr />
              </div>
            </div>
          </div>
        );
      default:
        return <div>Hello World</div>;
    }
  };

  const activeStepDetail = stepsTherapyBooking.find(
    (each) => each.id === activeStep
  );

  return (
    <Modal
      centered
      open={isBookingModal}
      onCancel={handleCancelBookingModal}
      footer={null}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "70%",
        xl: "70%",
        xxl: "70%",
      }}
    >
      <div className="flex flex-col w-full overflow-hidden">
        <section className="bg-[--base] w-full p-6 flex-shrink-0">
          <CustomSteps
            status={lastStepStatus}
            current={activeStep}
            items={stepsTherapyBooking}
            className="hidden lg:block"
          />
          <CustomSteps
            status={lastStepStatus}
            current={activeStep}
            items={smallDeviceItems}
            className="block lg:hidden"
          />
        </section>
        <section className="bg-[#e1e1e18d] flex-grow flex flex-col">
          <div className="flex-grow h-72 md:h-96 overflow-y-auto overflow-x-hidden">
            {renderActiveStep(activeStep)}
          </div>

          <div className="w-full p-3 flex justify-end items-center border-t-2">
            <button
              onClick={handleStepNext}
              className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
            >
              Next
            </button>
          </div>
          {contextHolder}
        </section>
      </div>
    </Modal>
  );
}

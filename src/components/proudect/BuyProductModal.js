import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import { SetIsBuyModalOpen } from "@/redux/feature/productSlice";
import "../therapy/therapy.css";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import CustomSteps from "@/components/steps/index";
import { message } from "antd";
import CustomCalendar from "@/components/calendar/CustomCalendar";

const allowedStatuses = ["wait", "process", "finish", "error"];

const stepsTherapyBooking = [
  {
    id: 0,
    label: "delivery Address",
    title: "delivery Address",
  },
  {
    id: 1,
    label: "Order Details",
    title: "Order Details",
  },
  {
    id: 2,
    label: "Payment",
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

export default function BuyModal({ therapyStaff }) {
  const dispatch = useDispatch();
  const isBuyModalOpen = useSelector(state=> state.product.isBuyModalOpen)



  const [activeStep, setActiveStep] = useState(0);
  const [lastStepStatus, setLastStepStatus] = useState("process");


  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);


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
    dispatch(SetIsBuyModalOpen(false));
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
        return true ?(
          <div className="p-6 flex flex-col gap-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item
                label="First name"
                name="firstname"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="Enter first name" />
              </Form.Item>
              <Form.Item label="Last name" name="lastname" rules={[]}>
                <Input placeholder="Enter surname here" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item
                label="Apartment/suite/unit/etc"
                name="house"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="Apartment/suite/unit/etc" />
              </Form.Item>
              <Form.Item label="Street" name="street" rules={[]}>
                <Input placeholder="Enter street address" />
              </Form.Item>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item label="Town/City" name="city" rules={[]}>
                <Input placeholder="Enter Town/City" />
              </Form.Item>
              <Form.Item label="State" name="state" rules={[]}>
                <Input placeholder="Enter state" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item label="Country" name="country" rules={[]}>
                <Input placeholder="Enter country" />
              </Form.Item>
              <Form.Item label="Pin Code" name="pin_code" rules={[]}>
                <Input placeholder="Enter pin code" />
              </Form.Item>
            </div>         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email address is required." },
                ]}
              >
                <Input placeholder="Enter yout email" />
              </Form.Item>
              <Form.Item
                label="Number"
                name="number"
                rules={[
                  { required: true, message: "Contact number is required" },
                  {
                    pattern: /^\d{10}$/,
                    message: "Please enter a valid 10-digit mobile number",
                  },
                ]}
              >
                <Input placeholder="9979795588" />
              </Form.Item>
            </div>
          </div>
        ): (
          <div>No delivery address</div>
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
      open={isBuyModalOpen}
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

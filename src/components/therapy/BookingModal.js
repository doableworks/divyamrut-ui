import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import "./therapy.css";
import CustomSteps from "@/components/steps/index";
import StaffItem, { NoStaffAvailabe } from "./StaffItem";
import { message } from "antd";
import CustomCalendar from "@/components/calendar/CustomCalendar";
import dayjs from "dayjs";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { twMerge } from "tailwind-merge";
import { Button, Form, Input } from "antd";
import { formatDateToDDMMYYYY } from "@/utils/dates";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ProfileCardSkeleton from "@/components/loader/therapy-spinners/ProfileCardSkeleton";
import { usePathname } from "next/navigation";
import axios from "axios";
import CalendarSkeleton from "@/components/loader/therapy-spinners/CalendarSkeleton.js";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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

const initialTimeSlots = [
  {
    id: 0,
    time: "9:00 AM",
  },
  {
    id: 1,
    time: "11:00 AM",
  },
  {
    id: 2,
    time: "1:00 PM",
  },
  {
    id: 3,
    time: "3:00 PM",
  },
];

export default function BookingModal() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const currentPath = pathname.split("/");
  const [form] = Form.useForm();
  const [activeStep, setActiveStep] = useState(0);
  const [lastStepStatus, setLastStepStatus] = useState("process");

  const [therapyStaffList, setTherapyStaffList] = useState([]);
  const [calendarList, setCalendarList] = useState({
    message: "",
  });
  const [timeSlotsArray, setTimeSlotsArray] = useState(initialTimeSlots);

  const [isLoading, setIsLoading] = useState(true);

  const [messageApi, contextHolder] = message.useMessage();

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [filledUserDetails, setFilleduserDetails] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));

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
    setSelectedDate(null);
    setSelectedDate(null);
    setFilleduserDetails(null);
    setPhoneNumber("");

    setTherapyStaffList([]);
    setCalendarList({
      message: "",
    });
    setTimeSlotsArray([]);

    setLastStepStatus("process");
    setIsLoading(true);
    dispatch(toggleBookingModal(false));
  };

  const fetchCalendarDetails = async () => {
    setIsLoading(true);
    try {
      const month = currentMonth.month() + 1;
      const year = currentMonth.year();
      const url = `${apiUrl}/therapy/therapist/availability/${selectedStaff.uid}/`;

      const body = {
        year: year,
        month: month,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, body, {
        headers,
        next: { revalidate: 60 },
      });

      const data = response.data;
      setCalendarList(data);
    } catch (err) {
      console.log(err);
      setLastStepStatus("error");
      messageApi.open({
        type: "error",
        content: "Unable to get slots information, please try again!",
      });
    } finally {
      setIsLoading(false);
    }
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
      case 1:
        if (selectedDate && selectedTimeSlot) {
          return true;
        } else {
          if (!selectedDate) {
            messageApi.open({
              type: "error",
              content: "Please choose a valid date.",
            });
            return false;
          } else if (!selectedTimeSlot) {
            messageApi.open({
              type: "error",
              content: "Please choose a valid time slot.",
            });
            return false;
          }
        }
      case 2:
        return true;
      default:
        return false;
    }
  };

  const handleStepNext = async () => {
    const isValidated = handleCheckValidation();

    if (isValidated) {
      if (activeStep === 0) {
        increaseActiveStep();
      } else if (activeStep === 1) {
        increaseActiveStep();
      }
      if (activeStep === 2) {
        try {
          await form.validateFields();
          const userDetails = form.getFieldsValue();
          setFilleduserDetails({
            ...userDetails,
            phoneNumber: phoneNumber,
          });
          increaseActiveStep();
        } catch (error) {
          console.error("Validation failed:", error);
        }
      } else {
        console.log("Please define What to do ?");
      }
    }
  };

  const fetchMonthData = () => {
    fetchCalendarDetails();
  };

  const handleGoBackMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleGoForwardMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const handleChangeSelectedDate = (value, mode) => {
    setSelectedDate(value);
  };

  const handleChangeTimeSlot = (clicked) => {
    setSelectedTimeSlot(clicked);
    increaseActiveStep();
  };

  const handleClickonStep = (clickedIndex) => {
    if (clickedIndex < activeStep) {
      setLastStepStatus("process");
      setActiveStep(clickedIndex);
    }
  };

  const fetchTherapyStaffList = async () => {
    setIsLoading(true);
    try {
      const url = `${apiUrl}/therapy/therapy-profile/${currentPath[2]}/`;

      const response = await axios.get(url, {
        next: { revalidate: 60 },
      });

      const data = response.data;
      setTherapyStaffList(data);
    } catch (err) {
      console.log(err);
      setLastStepStatus("error");
      messageApi.open({
        type: "error",
        content: "Unable to get therapiest details, Please try again!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isBookingModal && activeStep === 0) {
      fetchTherapyStaffList();
    } else if (isBookingModal && activeStep === 1) {
      fetchCalendarDetails();
    }
  }, [isBookingModal, activeStep]);

  useEffect(() => {
    if (activeStep === 1 && isBookingModal) {
      fetchCalendarDetails();
    }
  }, [currentMonth]);

  const handlePaymentStep = () => {};

  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return isLoading ? (
          <div className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-10 py-5 md:py-5">
            {Array.from({ length: 2 }).map((_, index) => (
              <ProfileCardSkeleton key={index} />
            ))}
          </div>
        ) : therapyStaffList?.length > 0 ? (
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-10 py-5 md:py-5">
            {therapyStaffList.map((each, index) => (
              <StaffItem
                detail={each}
                key={index}
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
          <div className="h-full p-5 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-3">
            <div>
              <p className="text-center section-title !mb-3">Date</p>
              <div className="bg-white rounded pt-3 h-96">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <button
                    disabled={isLoading}
                    type="button"
                    onClick={handleGoBackMonth}
                  >
                    <CaretLeftOutlined />
                  </button>
                  <p className="section-content !m-0 min-w-40">
                    {currentMonth.format("MMMM YYYY")}
                  </p>
                  <button
                    disabled={isLoading}
                    type="button"
                    onClick={handleGoForwardMonth}
                  >
                    <CaretRightOutlined />
                  </button>
                </div>
                <hr />
                {isLoading ? (
                  <CalendarSkeleton />
                ) : (
                  <CustomCalendar
                    calendarList={calendarList}
                    selectedDate={selectedDate}
                    handleChangeSelectedDate={handleChangeSelectedDate}
                    fetchMonthData={fetchMonthData}
                    currentMonth={currentMonth}
                  />
                )}
              </div>
            </div>

            <div>
              <p className="text-center section-title !mb-3">Time</p>
              <div className="bg-white rounded pt-3 h-96 mb-5">
                <p className="section-content !mb-3">
                  {selectedDate ? "Select Time" : "Select Date"}
                </p>
                <hr />

                {selectedDate && timeSlotsArray?.length > 0 ? (
                  <ul className="grid grid-cols-3 gap-2 m-6">
                    {timeSlotsArray.map((each, index) => (
                      <button
                        key={index}
                        onClick={() => handleChangeTimeSlot(each)}
                        className={twMerge(
                          "p-2 bg-gray-200 rounded-md h-11",
                          selectedTimeSlot?.id === each?.id &&
                            "bg-green-600 text-white"
                        )}
                        type="button"
                      >
                        <p>{each.time}</p>
                      </button>
                    ))}
                  </ul>
                ) : (
                  selectedDate && <p>No Time Slots Found</p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-6 flex flex-col gap-6">
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
                name="phoneNumber"
                rules={[
                  { required: true, message: "Contact number is required" },
                  {
                    pattern: /^[0-9]{7,15}$/,
                    message: "Please enter a valid contact",
                  },
                ]}
              >
                <PhoneInput
                  country={"in"}
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber("+" + phone)}
                  inputStyle={{ width: "100%", height: "45px" }}
                  containerStyle={{ width: "100%" }}
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[{ required: true, message: "First name is required" }]}
              >
                <Input placeholder="Enter your first name here" />
              </Form.Item>
              <Form.Item label="Last name" name="lastname" rules={[]}>
                <Input placeholder="Enter your last name here" />
              </Form.Item>
            </div>
          </div>
        );
      case 3:
        return filledUserDetails &&
          selectedDate &&
          selectedStaff &&
          selectedTimeSlot ? (
          <section className="p-6 h-full flex flex-col">
            <p className="section-title !text-gray-500 !text-left !mb-3">
              Confirm Details
            </p>
            <hr className="mb-3 border" />

            <div className="overflow-y-auto px-3">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="h-full flex-grow bg-white p-4 rounded-md grid grid-cols-1 gap-2 mb-5">
                  <p className="section-title !text-gray-500 !text-left">
                    Your Details
                  </p>
                  <hr className="mb-3" />

                  <p className="section-content !text-left">
                    Name:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {filledUserDetails?.firstname}
                    </span>
                    {filledUserDetails?.lastname && (
                      <span className="section-content !text-left !text-[--neutral] font-bold">
                        {" "}
                        {filledUserDetails?.lastname}
                      </span>
                    )}
                  </p>

                  <p className="section-content !text-left">
                    Contact:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {filledUserDetails?.phoneNumber}
                    </span>
                  </p>

                  <p className="section-content !text-left">
                    Email:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {filledUserDetails?.email}
                    </span>
                  </p>
                </div>

                <div className="h-full flex-grow bg-white p-4 rounded-md grid grid-cols-1 gap-2">
                  <p className="section-title !text-gray-500 !text-left">
                    Allotment Details
                  </p>
                  <hr className="mb-3" />

                  <p className="section-content !text-left">
                    Date & Time:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {formatDateToDDMMYYYY(selectedDate)}
                    </span>{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {selectedTimeSlot?.time}
                    </span>
                  </p>

                  <p className="section-content !text-left">
                    Therapiest:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {selectedStaff?.name}
                    </span>
                  </p>

                  <p className="section-content !text-left">
                    Service:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      Meru Chikitsa
                    </span>
                  </p>
                </div>
              </div>

              <div className="rounded-md overflow-hidden bg-white border-gray-300 flex-grow my-6 flex flex-col justify-between">
                <div className="p-6 font-jost text-[16px]">
                  <div className="flex justify-between">
                    <p>Price:</p>
                    <p>3000.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p>GST:</p>
                    <p>540.00</p>
                  </div>
                </div>

                <div className="bg-green-200 py-3 px-6">
                  <div className="flex justify-between font-jost text-xl">
                    <p>Total:</p>
                    <p>3540.00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <p>Oops! Please fix steps</p>
        );
      default:
        return null;
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
            onStepClick={handleClickonStep}
            className="hidden lg:block"
          />
          <CustomSteps
            status={lastStepStatus}
            current={activeStep}
            items={smallDeviceItems}
            onClick={handleClickonStep}
            className="block lg:hidden"
          />
        </section>
        <section className="bg-[#e1e1e18d] flex-grow flex flex-col">
          <Form
            layout="vertical"
            form={form}
            initialValues={{ layout: "vertical" }}
            onFinish={handleStepNext}
          >
            <div className="flex-grow h-[65vh] overflow-y-auto overflow-x-hidden">
              <div className="lg:hidden">
                <p className="section-title !text-gray-500 !text-left !p-6">
                  {activeStepDetail.title}
                </p>
                <hr className="mb-4" />
              </div>
              {renderActiveStep(activeStep)}
            </div>

            <div className="w-full p-3 flex justify-end items-center border-t-2">
              {activeStep === 2 ? (
                <Form.Item>
                  <button
                    className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
                    type="primary"
                    htmlType="submit"
                  >
                    Next
                  </button>
                </Form.Item>
              ) : activeStep === 3 ? (
                <button
                  onClick={handlePaymentStep}
                  className="site-button-primary !mt-0 !min-w-24 !min-h-max"
                  type="button"
                >
                  Proceed to Payment
                </button>
              ) : (
                <button
                  onClick={handleStepNext}
                  className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
                  type="button"
                >
                  Next
                </button>
              )}
            </div>
          </Form>
          {contextHolder}
        </section>
      </div>
    </Modal>
  );
}

import React, { useEffect, useState } from "react";
import { Modal, Select, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "@/components/therapy/therapy.css";
import CustomSteps from "@/components/steps/index";
import StaffItem, { NoStaffAvailabe } from "../therapy/StaffItem";
import { message } from "antd";
import CustomCalendar from "@/components/calendar/CustomCalendar";
import dayjs from "dayjs";
import {
  CaretRightOutlined,
  CaretLeftOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { twMerge } from "tailwind-merge";
import { Form, Input } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ProfileCardSkeleton from "@/components/loader/therapy-spinners/ProfileCardSkeleton";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import CalendarSkeleton from "@/components/loader/therapy-spinners/CalendarSkeleton.js";
import { useSession } from "next-auth/react";
import BlockPageLoader from "@/components/loader/BlockPageLoader";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CustomButton from "../common/CustomButton";
import { toggleConsultationModal } from "@/redux/feature/consultationSlice";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const stepsTherapyBooking = [
  {
    id: 0,
    label: "Select Location",
    title: "Location",
  },
  {
    id: 1,
    label: "Select Staff",
    title: "Therapist",
  },
  {
    id: 2,
    label: "Fill Information",
    title: "Information",
  },
  {
    id: 3,
    label: "Select Date & Time",
    title: "Date & Time",
  },
  {
    id: 4,
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

export default function ConsultationBooking() {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
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
  const [orderDetails, setOrderDetails] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState({
    code: "IND",
    label: "India",
    value: "India",
  });
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [confirmationDetails, setConfirmationDetails] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));

  const isBookingModal = useSelector(
    (state) => state.consultation.isBookingModal
  );

  const [couponApply, setCouponApply] = useState({
    isOpen: false,
    couponCode: null,
    isSuccess: false,
    successMessage: "",
    loading: false,
    tempValue: "",
  });

  const [noOfTherapiesSelected, setNoOfTherapiesSelected] = useState(null);

  const increaseActiveStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSetSelectedStaff = (clickedStaff) => {
    setSelectedStaff(clickedStaff);
    if (noOfTherapiesSelected) {
      increaseActiveStep();
    }
  };

  const handleCancelBookingModal = () => {
    setActiveStep(0);

    setSelectedStaff(null);
    setSelectedDate(null);
    setSelectedDate(null);
    setFilleduserDetails(null);
    setConfirmationDetails(null);
    setOrderDetails(null);

    form.resetFields();
    setPhoneNumber("");

    setTherapyStaffList([]);
    setCalendarList({
      message: "",
    });
    setTimeSlotsArray([]);

    setLastStepStatus("process");
    setIsLoading(true);
    dispatch(toggleConsultationModal(false));
  };

  const logModalInfomation = async () => {
    setIsLoading(true);
    try {
      const url = `${apiUrl}/therapy/book-appointment/`;

      const body = {
        therapist_id: selectedStaff.uid,
        date: selectedTimeSlot.date,
        start_time: selectedTimeSlot.start_time_format,
        end_time: selectedTimeSlot.end_time_format,
        first_name: filledUserDetails.firstname,
        last_name: filledUserDetails.lastname,
        email: filledUserDetails.email,
        phone_no: filledUserDetails.phoneNumber,
        slug: currentPath[2],
        country: selectedCountry.value,
        state: selectedState.value,
        city: selectedCity.value,
        no_of_therapies: noOfTherapiesSelected,
      };

      if (couponApply.couponCode) {
        body["coupon_id"] = couponApply.couponCode;
      }

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, body, {
        headers,
        cache: "no-store",
      });

      const data = response.data;
      messageApi.open({
        type: "success",
        content: "Confirm your booking details and proceed to payment",
      });
      setConfirmationDetails(data);
    } catch (err) {
      console.log("Error while log user details", err);
      setLastStepStatus("error");
      messageApi.open({
        type: "error",
        content:
          "Getting error with slots confirmation, please try again later!",
      });
    } finally {
      setIsLoading(false);
    }
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
        cache: "no-store",
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
        return true;
      case 1:
        if (selectedStaff && noOfTherapiesSelected) {
          return true;
        } else if (!selectedStaff) {
          messageApi.open({
            type: "error",
            content: "Please choose the staff to proceed.",
          });
          return false;
        } else if (!noOfTherapiesSelected) {
          messageApi.open({
            type: "error",
            content: "Please select valid no. of therapies.",
          });
          return false;
        }
      case 2:
        return true;
      case 3:
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
      default:
        return false;
    }
  };

  const handleStepNext = async () => {
    const isValidated = handleCheckValidation();

    if (isValidated) {
      if (activeStep === 0) {
        try {
          await form.validateFields();
          const userLocation = form.getFieldsValue();
          console.log(userLocation);
          increaseActiveStep();
        } catch (error) {
          console.error("Validation failed:", error);
          messageApi.open({
            type: "error",
            content: "All fields are mandetory",
          });
        }
      } else if (activeStep === 1) {
        increaseActiveStep();
      } else if (activeStep === 3) {
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
          messageApi.open({
            type: "error",
            content: "All fields are mandetory",
          });
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

  const handleChangeSelectedDate = (value, timeSlots) => {
    setTimeSlotsArray(timeSlots);
    setSelectedTimeSlot(null);
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
      const url = `${apiUrl}/therapy/therapy-profile/`;

      const body = {
        slug: currentPath[2],
        country: selectedCountry.value,
        state: selectedState.value,
        city: selectedCity.value,
      };

      const response = await axios.post(url, body, {
        cache: "no-store",
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
    form.setFieldsValue({
      email: session?.user?.user?.email,
      firstname: session?.user?.user?.first_name,
      lastname: session?.user?.user?.last_name,
      phoneNumber: session?.user?.user?.phoneNumber,
    });
  }, [session, form]);

  useEffect(() => {
    if (session && session.user?.user?.phoneNumber) {
      setPhoneNumber(session.user?.user?.phoneNumber);
    }
  }, [session]);

  const fetchCountriesData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/countries/`);
      setCountryList(response.data);
    } catch (error) {
      notification.error({
        message: "Failed to Load Countries",
        description: "Could not fetch country data. Try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStatesData = async (countryCode) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/states/${countryCode}/`);
      const stateData = response.data.filter(
        (each) => each.code === "KA" || each.code === "MH"
      );
      setStateList(stateData);
    } catch (error) {
      notification.error({
        message: "Failed to Load States",
        description: "Could not fetch state data. Try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCitiesData = async (countryCode, stateCode) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/api/cities/${countryCode}/${stateCode}/`
      );
      console.log(response.data);
      const cityData = response.data.filter(
        (each) => each.code === "BLR" || each.code === "BOM"
      );
      setCityList(cityData);
    } catch (error) {
      notification.error({
        message: "Failed to Load Cities",
        description: "Could not fetch city data. Try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCountryChange = (value) => {
    form.setFieldsValue({ state: undefined, city: undefined });
    setStateList([]);
    setCityList([]);

    const selected = countryList.find((item) => item.value === value);
    setSelectedCountry(selected || null);

    if (selected) {
      fetchStatesData(selected.code);
    }
  };

  const handleStateChange = (value) => {
    form.setFieldsValue({ city: undefined });
    setCityList([]);

    const selected = stateList.find((item) => item.value === value);
    setSelectedState(selected || null);

    if (selectedCountry && selected) {
      fetchCitiesData(selectedCountry.code, selected.code);
    }
  };

  const handleCityChange = (value) => {
    const selected = cityList.find((item) => item.value === value);
    setSelectedCity(selected || null);
  };

  useEffect(() => {
    if (isBookingModal && activeStep === 0) {
      form.setFieldsValue({
        country: selectedCountry.value,
      });
      fetchStatesData(selectedCountry.code);
    } else if (isBookingModal && activeStep === 1) {
      form.setFieldsValue({
        therapiesNumber: 1,
      });
      setNoOfTherapiesSelected(1);
      fetchTherapyStaffList();
    } else if (isBookingModal && activeStep === 2) {
    } else if (isBookingModal && activeStep === 3) {
      fetchCalendarDetails();
    } else if (isBookingModal && activeStep === 4) {
      logModalInfomation();
    }
  }, [isBookingModal, activeStep, couponApply.couponCode]);

  useEffect(() => {
    if (activeStep === 3 && isBookingModal) {
      fetchCalendarDetails();
    }
  }, [currentMonth]);

  const loadRazorpayScript = async () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePaymentStep = async () => {
    setIsLoading(true);
    try {
      const url = `${apiUrl}/payment/create-order/`;

      const body = {
        amount: confirmationDetails.allotment_info.therapy_price,
        receipt: "Therapy",
        currency: "INR",
        notes: {
          user_email: session?.user?.user?.email || "",
          email: filledUserDetails.email,
          therapist_id: selectedStaff.uid,
          therapy_slug: currentPath[2],
          date: selectedTimeSlot.date,
          start_time: selectedTimeSlot.start_time_format,
          end_time: selectedTimeSlot.end_time_format,
          first_name: filledUserDetails.firstname,
          last_name: filledUserDetails.lastname,
          phone_no: filledUserDetails.phoneNumber,
          user_appointment_id: confirmationDetails.appointment_id,
          country: selectedCountry.value,
          state: selectedState.value,
          city: selectedCity.value,
          no_of_therapies: filledUserDetails.therapiesNumber,
        },
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, body, {
        headers,
        cache: "no-store",
      });
      setLastStepStatus("finish");
      const data = response.data;
      setOrderDetails(data);
    } catch (err) {
      console.log("Error while Create order", err);
      setLastStepStatus("error");
      messageApi.open({
        type: "error",
        content: "Unable to create order, Please try after sometime.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const proceedToOrderFnCall = async () => {
    setIsLoading(true);
    try {
      const isRazorpayLoaded = await loadRazorpayScript();
      if (!isRazorpayLoaded) {
        messageApi.open({
          type: "error",
          content: "Failed to load Razorpay. Please refresh and try again.",
        });
        setIsLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderDetails.amount_due,
        currency: orderDetails.currency,
        name: orderDetails.notes.first_name,
        description: `therapy Booking for Therapy id: ${orderDetails.notes.therapist_id}`,
        order_id: orderDetails.id,
        notes: orderDetails.notes,
        prefill: {
          name: orderDetails.notes.first_name,
          email: orderDetails.notes.email,
          contact: orderDetails.notes.phone_no,
        },
        modal: {
          escape: true,
          backdropclose: true,
        },
        handler: async (response) => {
          if (response && response.razorpay_payment_id) {
            setIsLoading(true);
            messageApi.open({
              type: "success",
              content: "Payment successful, Redirecting...",
            });
            dispatch(toggleConsultationModal(false));
            router.push(
              `/payment-status?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&signature=${response.razorpay_signature}&order_type=Therapy`
            );
          } else {
            console.log("Payment Failed or Cancelled:", response);
            messageApi.open({
              type: "info",
              content: "Payment was cancelled or failed.",
            });
          }
        },
        theme: orderDetails.theme,
      };

      setIsLoading(true);
      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on("payment.cancelled", function (response) {
        console.log("Payment Cancelled:", response);
        messageApi.open({
          type: "info",
          content: "Payment cancelled by user.",
        });
      });
    } catch (err) {
      console.error("Error during payment:", err);
      messageApi.open({
        type: "error",
        content: "Payment process error.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isBookingModal && activeStep === 4) {
      proceedToOrderFnCall();
    }
  }, [orderDetails]);

  const handleOpenCouponApply = () => {
    setCouponApply({
      ...couponApply,
      isOpen: true,
    });
  };

  const handleCloseCoupon = () => {
    setCouponApply({
      couponCode: null,
      isOpen: false,
      isSuccess: false,
      successMessage: "",
      loading: false,
    });
  };

  const handleChangeCouponCodeValue = (event) => {
    setCouponApply({
      ...couponApply,
      tempValue: event.target.value,
    });
  };

  const handleVerifyCouponCode = async () => {
    try {
      setCouponApply({
        ...couponApply,
        loading: true,
      });
      const url = `${apiUrl}/therapy/validate-coupon/?coupon_id=${couponApply.tempValue}`;
      const response = await axios.get(url);
      if (response.status >= 200 && response.status < 300) {
        setCouponApply({
          ...couponApply,
          couponCode: couponApply.tempValue,
          isSuccess: true,
          successMessage: `${response.data.discount} discount successfully applied with code "${couponApply.tempValue}".`,
          isOpen: false,
          loading: false,
        });

        messageApi.open({
          type: "success",
          content: `🎉 Yay! ${response.data.discount}% discount applied successfully.`,
        });
      } else {
        throw new Error(
          "Oops! That code didn’t work. Please enter a valid one."
        );
      }
    } catch (err) {
      console.log("Therapy Coupon Error:", err);
      setCouponApply({
        ...couponApply,
        loading: false,
      });
      messageApi.open({
        type: "error",
        content:
          err?.response?.data?.error ||
          "Oops! That code didn’t work. Please enter a valid one.",
      });
    }
  };

  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="p-4">
            <Spin spinning={isLoading}>
              <div className="space-y-6">
                <Form.Item
                  name="country"
                  label="Select Country"
                  rules={[
                    { required: true, message: "Please select a country" },
                  ]}
                >
                  <Select
                    style={{ height: "48px" }}
                    placeholder="Select a country"
                    onChange={handleCountryChange}
                    disabled={true}
                  >
                    {countryList.map((item) => (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="state"
                  label="Select State"
                  rules={[{ required: true, message: "Please select a state" }]}
                >
                  <Select
                    style={{ height: "48px" }}
                    placeholder="Select a state"
                    disabled={!selectedCountry}
                    onChange={handleStateChange}
                  >
                    {stateList.map((item) => (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="city"
                  label="Select City"
                  rules={[{ required: true, message: "Please select a city" }]}
                >
                  <Select
                    style={{ height: "48px" }}
                    placeholder="Select a city"
                    disabled={!selectedState}
                    onChange={handleCityChange}
                  >
                    {cityList.map((item) => (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Spin>
          </div>
        );
      case 1:
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
      case 3:
        return (
          <div className="h-full p-5 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-3">
            <div>
              <p className="text-center section-title !mb-3">Date</p>
              <div className="bg-white rounded pt-3 lg:h-96">
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
              <div className="bg-white rounded pt-3 lg:h-96 pb-4 mb-5">
                <p className="section-content !mb-3">
                  {selectedDate ? "Select Time" : "Select Date"}
                </p>
                <hr />

                {selectedDate && timeSlotsArray?.length > 0 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 m-6">
                    {timeSlotsArray.map((each, index) => (
                      <button
                        key={index}
                        onClick={() => handleChangeTimeSlot(each)}
                        className={twMerge(
                          "p-2 bg-gray-200 rounded-md h-11",
                          selectedTimeSlot?.start_time_format ===
                            each?.start_time_format && "bg-green-600 text-white"
                        )}
                        type="button"
                      >
                        <p>{each.start_time_format}</p>
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
                  {
                    type: "email",
                    message: "Please enter a valid email address.",
                  },
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
      case 4:
        return confirmationDetails ? (
          <section className="p-6 h-full flex flex-col ">
            <p className="section-title !text-gray-500 !text-left !mb-3">
              Confirm Details
            </p>
            <hr className="mb-3 border" />

            <div className="space-y-4 my-4">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="h-full flex-grow bg-white p-4 rounded-md grid grid-cols-1 gap-2">
                  <p className="section-title !text-gray-500 !text-left">
                    Your Details
                  </p>
                  <hr className="mb-3" />

                  <p className="section-content !text-left">
                    Name:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {confirmationDetails?.user_info?.first_name}
                    </span>
                    {filledUserDetails?.lastname && (
                      <span className="section-content !text-left !text-[--neutral] font-bold">
                        {" "}
                        {confirmationDetails?.user_info?.last_name}
                      </span>
                    )}
                  </p>

                  <p className="section-content !text-left">
                    Contact:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {confirmationDetails?.user_info?.phone_no}
                    </span>
                  </p>

                  <p className="section-content !text-left">
                    Email:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {confirmationDetails?.user_info?.email}
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
                      {confirmationDetails?.allotment_info?.therapy_date}
                    </span>{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {confirmationDetails?.allotment_info?.therapy_start_time}
                    </span>
                  </p>

                  <p className="section-content !text-left">
                    Therapiest:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {confirmationDetails?.allotment_info?.therapist_name}
                    </span>
                  </p>

                  <p className="section-content !text-left">
                    Service:{" "}
                    <span className="section-content !text-left !text-[--neutral] font-bold">
                      {confirmationDetails?.allotment_info?.therapy_name}
                    </span>
                  </p>
                </div>
              </div>

              {!couponApply.isOpen && !couponApply.isSuccess && (
                <div className="flex flex-col">
                  <button
                    onClick={handleOpenCouponApply}
                    className="text-[--voilet] self-end text-sm outline-none"
                    type="button"
                  >
                    Have a Discount Coupon?
                  </button>
                </div>
              )}

              {couponApply.isSuccess && !couponApply.isOpen && (
                <div className="flex flex-col">
                  <button
                    className="text-[--green] self-end text-sm outline-none"
                    type="button"
                  >
                    {couponApply.successMessage}
                  </button>
                </div>
              )}

              {couponApply.isOpen && (
                <div className="flex-grow bg-white p-4 rounded-md flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    className="grow outline-none border-b-2 p-2 text-lg uppercase placeholder:capitalize"
                    placeholder="Enter discount code"
                    value={couponApply.tempValue}
                    onChange={handleChangeCouponCodeValue}
                  />
                  <div className="flex gap-4">
                    <CustomButton
                      spinnerColor={"#aa218c"}
                      type="button"
                      className="site-button-secondary-outlined !mt-0 w-24 grow"
                      onClick={handleVerifyCouponCode}
                      disabled={couponApply.loading}
                      title="Check"
                      loading={couponApply.loading}
                    />
                    <button
                      type="button"
                      className="border px-3 border-neutral-400"
                      onClick={handleCloseCoupon}
                      disabled={couponApply.loading}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              )}

              <div className="rounded-md overflow-hidden bg-white border-gray-300 flex-grow flex flex-col justify-between">
                <div className="p-6 font-jost text-[18px]">
                  <div className="flex justify-between">
                    <p>Price:</p>
                    <p>
                      {confirmationDetails?.allotment_info?.therapy_price
                        ? parseFloat(
                            confirmationDetails?.allotment_info?.therapy_price
                          ).toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>GST:</p>
                    <p>
                      {confirmationDetails?.allotment_info?.gst_price
                        ? parseFloat(
                            confirmationDetails?.allotment_info?.gst_price
                          ).toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                </div>

                <div className="bg-green-200 py-3 px-6">
                  <div className="flex justify-between font-jost text-xl">
                    <p>Total:</p>
                    <p>
                      {confirmationDetails?.allotment_info?.therapy_price
                        ? parseFloat(
                            confirmationDetails?.allotment_info?.therapy_price
                          ).toFixed(2)
                        : "0.00"}
                      /-
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="h-full flex justify-center items-center p-6">
            <p className="section-title !text-gray-500">
              Unable to get Slot Details
            </p>
          </div>
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
            onStepClick={handleClickonStep}
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
            <div className="flex-grow h-[65vh] overflow-y-auto overflow-x-hidden site-scrollbar">
              {activeStep !== 4 && (
                <div className="lg:hidden">
                  <p className="section-title !text-gray-500 !text-left !p-6">
                    {activeStepDetail.title}
                  </p>
                  <hr className="mb-4" />
                </div>
              )}
              <section className="">{renderActiveStep(activeStep)}</section>
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
              ) : activeStep === 4 ? (
                <button
                  onClick={handlePaymentStep}
                  className="site-button-primary !mt-0 !min-w-24 !min-h-max"
                  type="button"
                >
                  Proceed to Payment
                </button>
              ) : activeStep === 1 ? (
                <div className="flex justify-between items-center gap-4 w-full">
                  <div className="flex flex-wrap gap-2 items-center">
                    <p className="text-sm text-[--voilet]">No.of Therapies</p>
                    <Form.Item
                      name="therapiesNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please select at least 1 therapy",
                        },
                      ]}
                    >
                      <Select
                        style={{ height: "42px", width: "70px" }}
                        placeholder="Select number of therapies"
                        onChange={(value) => {
                          setNoOfTherapiesSelected(value);
                        }}
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (num) => (
                            <Select.Option key={num} value={num}>
                              {num}
                            </Select.Option>
                          )
                        )}
                      </Select>
                    </Form.Item>
                  </div>

                  <button
                    onClick={handleStepNext}
                    className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
                    type="button"
                  >
                    Next
                  </button>
                </div>
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
      {isLoading && activeStep === 2 && <BlockPageLoader />}
    </Modal>
  );
}

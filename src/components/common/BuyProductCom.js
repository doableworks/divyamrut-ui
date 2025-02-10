"use client";
import React, { useState } from "react";
import CustomSteps from "@/components/steps/index";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, message } from "antd";
import axiosInstance from "@/lib/axios";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Payment from "@/components/common/PaymentCom";
import OrderSummary from "@/components/common/OrderSummary";
import AddDeliveryAddressCom from "@/components/common/AddDeliveryAddressCom";
import SelectDeliveryAddress from "@/components/common/SelectDeliveryAddress";

const stepsBuyProducts = [
  {
    id: 0,
    label: "delivery Address",
    title: "delivery Address",
  },
  {
    id: 1,
    label: "Order Summary",
    title: "Order Summary",
  },
];

const smallDeviceItems = [
  {
    title: "",
  },
  {
    title: "",
  },
];

const addresses = [
  {
    uid: 1,
    label: "Home",
    country: "United States",
    firstname: "John",
    lastname: "Doe",
    house: "Apt 404",
    street: "123 Elm Street",
    state: "California",
    city: "Los Angeles",
    pin_code: "90001",
    landmark: "Near Central Park",
    email: "john.doe@example.com",
    mobile_no: "9876543210",
  },
  {
    uid: 1,
    label: "office",
    country: "United States",
    firstname: "John",
    lastname: "Doe",
    house: "Apt 404",
    street: "123 Elm Street",
    state: "California",
    city: "Los Angeles",
    pin_code: "90001",
    landmark: "Near Central Park",
    email: "john.doe@example.com",
    mobile_no: "9876543210",
  },
  {
    uid: 3,
    label: "other",
    country: "United States",
    firstname: "John",
    lastname: "Doe",
    house: "Apt 404",
    street: "123 Elm Street",
    state: "California",
    city: "Los Angeles",
    pin_code: "90001",
    landmark: "Near Central Park",
    email: "john.doe@example.com",
    mobile_no: "9876543210",
  },
];

const BuyProductCom = ({ allAddressData }) => {
  const { items, buyLoader, hasBuy } = useSelector(
    (state) => state.buyProduct
  );
  const { data: session } = useSession();
  // console.log("session", session)
  // console.log("items, buyLoader, hasBuy", items, buyLoader, hasBuy)

  const [messageApi, contextHolder] = message.useMessage();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [orderList, setOrderList] = useState([
    {
      id: 1,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Pahadi Zipper Hoodie in Comfy Style - Black - X-Large",
      quantity: 1,
      price: 11.0,
    },
    {
      id: 2,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Artisan-Crafted Kullu Women's Shawl - Sheep Wool Beauty",
      quantity: 3,
      price: 4.0,
    },
    {
      id: 3,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Hand woven Wool Meditation Prayer Scarf Wrap Blanket",
      quantity: 1,
      price: 48.0,
    },
    {
      id: 4,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Pahadi Zipper Hoodie in Comfy Style - Black - X-Large",
      quantity: 1,
      price: 150.0,
    },
    {
      id: 5,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Artisan-Crafted Kullu Women's Shawl - Sheep Wool Beauty",
      quantity: 3,
      price: 50.0,
    },
    {
      id: 6,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Hand woven Wool Meditation Prayer Scarf Wrap Blanket",
      quantity: 1,
      price: 8.0,
    },
    {
      id: 7,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Pahadi Zipper Hoodie in Comfy Style - Black - X-Large",
      quantity: 1,
      price: 1.0,
    },
    {
      id: 8,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Artisan-Crafted Kullu Women's Shawl - Sheep Wool Beauty",
      quantity: 3,
      price: 2.0,
    },
    {
      id: 9,
      image: "/asset/home/ayurvedic-supplement.jpg",
      name: "Hand woven Wool Meditation Prayer Scarf Wrap Blanket",
      quantity: 1,
      price: 3.0,
    },
  ]);

  const [addOrEditAddre, setADDorEditAddre] = useState({ open: false, address: null });
  const [addressList, setAddressList] = useState(allAddressData);
  const [SelectedDeliveryAddre, setSelectedDeliveryAddre] = useState(null);
  const [lastStepStatus, setLastStepStatus] = useState("process");

  const handleAddNeworEditAddre = (open = false, address = null) => {
    setADDorEditAddre({ open: open, address: address }); // Enable editing mode
  };

  const onFillAddressFinish = async (values) => {
    console.log("onFillAddressFinish", values)
    setIsLoading(true)
    const data ={
      first_name: values.first_name,
      last_name:  values.last_name,
      company_name: "ABC Ltd",
      country: values.country,
      address: "123 Main Street",
      apartment: values.apartment,
      street: values.street,
      city: values.city,
      state: values.state,
      pin_code: values.pin_code,
      phone: values.phone,
      landmark: values.landmark,
      address_type: values.address_type,
      email: values.email,
      is_billing: true,
      is_shipping: false,
      order_notes: "Leave at the door."
    }

    // const data = {
    //   address: "123 Main Street",
    //   address_type: "dfgdg",
    //   apartment: "rert",
    //   city: "hhh",
    //   company_name: "ABC Ltd",
    //   country: "India",
    //   created_at: "2025-02-07T17:41:27.375766+05:30",
    //   email: "test@gmail.com",
    //   first_name: "vijay",
    //   id: 7,
    //   is_billing: true,
    //   is_shipping: false,
    //   landmark: "dfd",
    //   last_name: "test",
    //   order_notes: "Leave at the door.",
    //   phone: "0987654345",
    //   pin_code: "123123",
    //   state: "Mizoram",
    //   street: "101"
    // }

    try {
      const response = await axiosInstance.post("/product/shipping/address/", data, {
        session,
      });
      console.log(" cart response api", response);
      if (response.status === 200) {
        const data = response?.data?.data
        setAddressList([...addressList, data])
        setADDorEditAddre({ open: false, address: null });
      } else {
        message.error("Something went wrong, please try again later!");
      }
    } catch (error) {
      console.log("getCartDetails error", error);
      message.error("Something went wrong, please try again later!");
    } finally {
      setIsLoading(false)
    }
  };

  const onEditAddress = async (values) => {
    setIsLoading(true)
    const data ={
      first_name: values.first_name,
      last_name:  values.last_name,
      company_name: "ABC Ltd",
      country: values.country,
      address: "123 Main Street",
      apartment: values.apartment,
      street: values.street,
      city: values.city,
      state: values.state,
      pin_code: values.pin_code,
      phone: values.phone,
      landmark: values.landmark,
      address_type: values.address_type,
      email: values.email,
      is_billing: true,
      is_shipping: false,
      order_notes: "Leave at the door."
    }

    try {
      const response = await axiosInstance.put(`/product/shipping/address/${addOrEditAddre.address.uid}/`, data, {
        session,
      });
      if (response.status === 200) {
        const data = response?.data?.data
        const remainAddress = addressList.filter(item=> item.uid != addOrEditAddre.address.uid)
        setAddressList([...remainAddress, data])
        setADDorEditAddre({ open: false, address: null });
      } else {
        message.error("Something went wrong, please try again later!");
      }
    } catch (error) {
      console.log("getCartDetails error", error);
      message.error("Something went wrong, please try again later!");
    } finally {
      setIsLoading(true)
    }
  };

  const onDeleteAddress = async (uid) => {
    try {
      const response = await axiosInstance.delete(`/product/shipping/address/${uid}/`, {
        session,
      });
      console.log(response, "onDeleteAddress response api", response);
      if (response.status == 204) {
        console.log("addressList ddddd", addressList)
        const remainAddress = addressList.filter(item => item.uid != uid)
        console.log("resmabd ddddd", remainAddress)
        setAddressList([...remainAddress])
        setADDorEditAddre({ open: false, address: null });
        setSelectedDeliveryAddre(null)
      } else {
        message.error("Something went wrong, please try again later!");
      }
    } catch (error) {
      console.log("getCartDetails error", error);
      message.error("Something went wrong, please try again later!");
    } finally {
      // dispatch(setCartLoader(false));
    }
  };

  const onSelectAddress = (address) => {
    setSelectedDeliveryAddre(address)
  }

  const increaseActiveStep = () => {
    setActiveStep(activeStep + 1);
  };

  const increaseQuantity = (id) => {
    const existingItem = orderList.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
      setOrderList([...orderList, existingItem]);
    }
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity <= 1) {
      const remainItem = orderList.map((item) => item.id != id);
      setOrderList([remainItem]);
    } else {
      const existingItem = orderList.find((item) => item.id === id);

      existingItem.quantity -= 1;
      setOrderList([...orderList, existingItem]);
    }
  };

  const onCancel = ()=>{
    setADDorEditAddre({ open: false, address: null })
  }

  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return addOrEditAddre?.open ? (
          <AddDeliveryAddressCom
          isLoading={isLoading}
            userAddress={addOrEditAddre.address}
            userData={session?.user?.user}
            onFillAddressFinish={onFillAddressFinish}
            onEditAddress={onEditAddress}
            onCancel={onCancel}
          />
        ) : (
          <>
            <SelectDeliveryAddress
              addressList={addressList}
              SelectedDeliveryAddre={SelectedDeliveryAddre}
              handleAddNeworEditAddre={handleAddNeworEditAddre}
              onDeleteAddress={onDeleteAddress}
              onSelectAddress={onSelectAddress}
            />
          </>
        );
      case 1:
        return (
          <OrderSummary
            orderList={orderList}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        );

      default:
        return <div>Hello World</div>;
    }
  };

  const handleCheckValidation = () => {
    switch (activeStep) {
      case 0:
        if (SelectedDeliveryAddre) {
          return true;
        } else {
          messageApi.open({
            type: "error",
            content: "Please add or select delivery address.",
          });
          return false;
        }
      case 1:
        if (orderList?.length > 0 && SelectedDeliveryAddre) {
          return true;
        } else {
          messageApi.open({
            type: "error",
            content: "Please buy a product.",
          });
          return false;
        }
      default:
        return false;
    }
  };

  const handleRenderBtnText = () => {
    switch (activeStep) {
      case 0:
        if (!addOrEditAddre.open) {
          return (
            <button
              onClick={handleStepNext}
              className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
            >
              Next
            </button>
          );
        } else {
          return;
        }
      case 1:
        return (
          <button
            onClick={handleStepNext}
            className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
          >
            Pay Now
          </button>
        );

      case 2:
        return (
          <button
            // onClick={handleStepNext}
            className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
          >
            Pay Now
          </button>
        );

      default:
        return;
    }
  };

  const handleStepNext = async () => {
    const isValidated = await handleCheckValidation();

    if (isValidated) {
      increaseActiveStep();
    }
  };

  const handleClickonStep = (clickedIndex) => {
    if (clickedIndex < activeStep) {
      setActiveStep(clickedIndex);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden min-h-[70vh]">
      <section className="bg-[--base] w-full p-4 flex-shrink-0">
        <CustomSteps
          status={lastStepStatus}
          current={activeStep}
          onStepClick={handleClickonStep}
          items={stepsBuyProducts}
          className="hidden lg:block"
        />
        <CustomSteps
          status={lastStepStatus}
          current={activeStep}
          onStepClick={handleClickonStep}
          items={smallDeviceItems}
          className="block lg:hidden"
        />
      </section>
      <section className=" flex-grow flex flex-col">
        <div>{renderActiveStep(activeStep)}</div>

        <div className="w-full mt-4 flex justify-end items-center">
          {/* <button
            onClick={handleStepNext}
            className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
          > */}
          {handleRenderBtnText()}
          {/* </button> */}
        </div>
        {contextHolder}
      </section>
    </div>
  );
};

export default BuyProductCom;

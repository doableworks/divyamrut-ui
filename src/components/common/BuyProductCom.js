"use client";
import React, { useState } from "react";
import CustomSteps from "@/components/steps/index";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, message } from "antd";
import Image from "next/image";
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
    id: 1,
    label: "Home",
    address: {
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
  },
  {
    id: 2,
    label: "Office",
    address: {
      country: "Australia",
      firstname: "Liam",
      lastname: "Williams",
      house: "Villa 8",
      street: "654 Sunset Boulevard",
      state: "New South Wales",
      city: "Sydney",
      pin_code: "2000",
      landmark: "Near Opera House",
      email: "liam.williams@example.com.au",
      mobile_no: "0412345678",
    },
  },
  {
    id: 3,
    label: "Other",
    address: {
      country: "United Kingdom",
      firstname: "Emma",
      lastname: "Brown",
      house: "Flat 5A",
      street: "321 Baker Street",
      state: "London",
      city: "London",
      pin_code: "NW1 6XE",
      landmark: "Near Sherlock Museum",
      email: "emma.brown@example.co.uk",
      mobile_no: "07567891234",
    },
  },
];

const BuyProductCom = () => {
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

  const [addOrEditAddre, setADDorEditAddre] = useState({ open: false, data: null });
  const [addressList, setAddressList] = useState(addresses);
  const [SelectedDeliveryAddre, setSelectedDeliveryAddre] = useState(null);

  const [lastStepStatus, setLastStepStatus] = useState("process");

  const handleAddNeworEditAddre = ({ open, value }) => {
    setADDorEditAddre({ open: open, data: value }); // Enable editing mode
  };

  const onFillAddressFinish = (values) => {
    setSelectedDeliveryAddre(values); // Save address
    setADDorEditAddre({ open: false, data: null }); // Exit editing mode
  };

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

  const handleAddressDelete = (id) => {
    setAddressList(addressList.filter((addr) => addr.id !== id));
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

  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return addOrEditAddre?.open ? (
          <AddDeliveryAddressCom
            userAddress={userAddress}
            onEdit={onEdit}
            onFillAddressFinish={onFillAddressFinish}
          />
        ) : (
          <>
            <SelectDeliveryAddress
              addressList={addressList}
              handleAddressDelete={handleAddressDelete}
              onFillAddressFinish={onFillAddressFinish}
              handleAddNeworEditAddre={handleAddNeworEditAddre}
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
      // case 2:
      //   return <Payment />;
      default:
        return <div>Hello World</div>;
    }
  };

  const handleCheckValidation = () => {
    switch (activeStep) {
      case 0:
        if (SelectedDeliveryAddre || true) {
          return true;
        } else {
          messageApi.open({
            type: "error",
            content: "Please add or select delivery address.",
          });
          return false;
        }
      case 1:
        if (orderList?.length > 0) {
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

//  <div className="max-w-lg mx-auto">
// <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
// <div className="flex justify-end">
//   <button
//     className="text-blue-600 hover:underline text-sm"
//     // onClick={onEdit}
//   >
//     Change
//   </button>
// </div>
// <div className="mt-3 text-gray-700 space-y-1">
//   <p className="section-content !text-left">{`${userAddress?.firstname} ${userAddress?.lastname}`}</p>
//   <p className="section-content !text-left">{`${userAddress?.house}, ${userAddress?.street}`}</p>
//   <p className="section-content !text-left">{`${userAddress?.area}, ${userAddress?.sector}`}</p>
//   <p className="section-content !text-left">
//     {userAddress?.landmark}
//   </p>
//   <p className="section-content !text-left">{`${userAddress?.city}, ${userAddress?.state}`}</p>
//   <p className="section-content !text-left">{`${userAddress?.city} ${userAddress?.state},  ${userAddress?.pin_code}`}</p>
//   <p className="section-content !text-left">{`email : ${userAddress?.email}`}</p>
//   <p className="section-content !text-left">{`Phone number :  ${userAddress?.mobile_no}`}</p>
// </div>

// {/* <div className="space-y-2">
//         <p>
//           <strong>Name:</strong> {userAddress?.fullName}
//         </p>
//         <p>
//           <strong>Address:</strong> {userAddress?.addressLine1},{" "}
//           {userAddress?.addressLine2}
//         </p>
//         <p>
//           <strong>City:</strong> {userAddress?.city}
//         </p>
//         <p>
//           <strong>Postal Code:</strong> {userAddress?.postalCode}
//         </p>
//         <p>
//           <strong>Country:</strong> {userAddress?.country}
//         </p>
//       </div>  */}
// </div>

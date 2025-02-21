"use client";
import React, { useState, useEffect } from "react";
import CustomSteps from "@/components/steps/index";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import axiosInstance from "@/lib/axios";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Payment from "@/components/common/PaymentCom";
import OrderSummary from "@/components/common/OrderSummary";
import AddDeliveryAddressCom from "@/components/common/AddDeliveryAddressCom";
import SelectDeliveryAddress from "@/components/common/SelectDeliveryAddress";
import { setBuyProduct, increOrDecreQuantity } from "@/redux/feature/buyProductSlice";
import { useRouter } from "nextjs-toploader/app";
import useCartActions from "@/components/cartCom/useCartActions";
import BlockPageLoader from "@/components/loader/BlockPageLoader"
import { Cross, Delete, EmptyCart } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import axios from "axios";
import Divider from "./Divider";

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


const BuyProductCom = ({ allAddressData }) => {
  const { data: session } = useSession();
  const { items: orderList, buyLoader, hasBuy, source: BuyProductSoruce } = useSelector(
    (state) => state.buyProduct
  );
  const router = useRouter()
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [addOrEditAddre, setADDorEditAddre] = useState({ open: allAddressData.length> 0 ? false : true, address: null });
  const [addressList, setAddressList] = useState(allAddressData);
  const [SelectedDeliveryAddre, setSelectedDeliveryAddre] = useState(null);
  const [lastStepStatus, setLastStepStatus] = useState("process");
  const [orderDetails, setOrderDetails] = useState(null)
  const { onRemoveItem } = useCartActions();

  useEffect(() => {
    if (orderDetails && activeStep === 1) {
      proceedToOrderFnCall();
    }
  }, [orderDetails]);

  const handleAddNeworEditAddre = (open = false, address = null) => {
    setADDorEditAddre({ open: open, address: address }); 
  };

  const onFillAddressFinish = async (values) => {
    setIsLoading(true)
    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      company_name: "ABC Ltd",
      country: values.country,
      address: values.address,
      apartment: "",
      street: "",
      city: values.city,
      state: values.state,
      pin_code: values.pin_code,
      phone: values.phone,
      landmark: values.landmark || "",
      address_type: values.address_type || "Home",
      email: values.email,
      is_billing: false,
      is_shipping: false,
      order_notes: values.order_notes || ""
    }

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/product/shipping/address/", data);
      if (response.status === 200) {
        const data = response?.data?.data
        setAddressList([...addressList, data])
        setADDorEditAddre({ open: false, address: null });
        onSelectAddress(data)
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
    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      company_name: "",
      country: values.country,
      address: values.address,
      apartment: "",
      street: "",
      city: values.city,
      state: values.state,
      pin_code: values.pin_code,
      phone: values.phone,
      landmark: values.landmark,
      address_type: values.address_type,
      email: values.email,
      is_billing: true,
      is_shipping: false,
      order_notes: values.order_notes
    }

    try {
      const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + `/product/shipping/address/${addOrEditAddre.address.uid}/`, data);
      if (response.status === 200) {
        const data = response?.data?.data
        const remainAddress = addressList.filter(item => item.uid != addOrEditAddre.address.uid)
        setAddressList([...remainAddress, data])
        setADDorEditAddre({ open: false, address: null });
        onSelectAddress(data)
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

  const onDeleteAddress = async (uid,email) => {
    try {
      const data = {email: email}
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + `/product/shipping/address/delete/${uid}/`, data);
      if (response.status === 204) {
        const remainAddress = addressList.filter(item => item.uid != uid)
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

  const increaseQuantity = (uid) => {
    dispatch(increOrDecreQuantity({ uid: uid, action: "increase" }));
  };

  const decreaseQuantity = (uid) => {
    dispatch(increOrDecreQuantity({ uid: uid, action: "decrease" }));
  };

  const onCancel = () => {

    setADDorEditAddre({ open: false, address: null })
  }

  const handlePaymentStep = async () => {
    const nextStep = await handleCheckValidation()
    if (!nextStep) {
      return
    }

    setIsLoading(true);
    setOrderDetails(null)
    try {
      const pro_uid_list = orderList.map(item => {
        return {
          uid: item.product_detail.uid,
          quantity: item.quantity,
          price: item.product_detail.price
        }
      })

      const calculateTotal = () => {
        return orderList
          ?.reduce(
            (total, item) =>
              total + parseFloat(item?.product_detail?.price.replace(/,/g, "")) * Number(item.quantity),
            0
          )
          .toFixed(2);
      };

      const body = {
        "email": SelectedDeliveryAddre?.email,
        "total_amount": calculateTotal(),
        "currency": "INR",
        "shipping_address": SelectedDeliveryAddre.uid,
        "product_list": pro_uid_list
      }
      const response = await axiosInstance.post('/product/orders/', body, {
        next: { revalidate: 60 },
      });

      if (response.status == 201) {
        const data = response.data;
        handleCreateOrder(data)
      }
      else {
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log("Error while Create order", err);
      // setLastStepStatus("error");
      setTimeout(()=> messageApi.open({
        type: "error",
        content: err?.response?.data?.error || "Unable to create order, Please try after sometime.",
      }),300)
    } finally {
      // setIsLoading(false);
    }
  };


  const handleCreateOrder = async (data) => {
    setIsLoading(true);
    console.log(data.order_items.map(i => i.uid))

    const pro_uid_list = data.order_items.map(i => i.uid)

    try {
      const requestData = {
        amount: Number(data.total_price),
        receipt: "Product",
        currency: data.currency,
        notes: {
          user_email: session?.user?.user?.email || SelectedDeliveryAddre?.email,
          email: SelectedDeliveryAddre?.email,
          therapist_id: "",
          product_id: "",
          therapy_slug: "",
          user_appointment_id: "",
          order_uid: data.uid,
          order_items_uid: pro_uid_list
        }
      }
      const response = await axiosInstance.post('/payment/create-order/', requestData, {
        session,
        next: { revalidate: 60 },
      });
      if (response.status == 201) {
        const obj = response.data;
        setOrderDetails(obj);
      }
    } catch (err) {
      console.log("Error while Create order", err);
      // setLastStepStatus("error");
      setTimeout(()=> messageApi.open({
        type: "error",
        content: err?.response?.data?.error || "Unable to create order, Please try after sometime.",
      }),300)
    } finally {
      setIsLoading(false);
    }
  };

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


  const handleActionOnPaymentSuccessfully = (order_items_uid) => {
    console.log("handleActionOnPaymentSuccessfully uids", order_items_uid)
    try {
      dispatch(setBuyProduct({ items: [], source: "cart" }))
      if (BuyProductSoruce == 'cart') {
        dispatch(onRemoveItem(order_items_uid))
      }
    }
    catch (error) {
      console.log("handleActionOnPaymentSuccessfully error", error)
    }
  }


  const proceedToOrderFnCall = async () => {
    // console.log("orderDetails 5555", orderDetails)
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

      const order_product_uids = orderDetails.notes.order_items_uid      

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderDetails.amount_due,
        currency: orderDetails.currency,
        name: session?.user?.user?.first_name || SelectedDeliveryAddre?.first_name,
        description: `Buy Products`,
        order_id: orderDetails.id,
        notes: orderDetails.notes,
        prefill: {
          name: session?.user?.user?.first_name || SelectedDeliveryAddre?.first_name +  SelectedDeliveryAddre?.last_name ,
          email: session?.user?.user?.email || SelectedDeliveryAddre?.email,
          contact: SelectedDeliveryAddre?.phone || ""
        },
        modal: {
          escape: true,
          backdropclose: true,
        },
        handler: async (response) => {
          if (response && response.razorpay_payment_id) {
            console.log("Payment Success:", response);
            handleActionOnPaymentSuccessfully(order_product_uids)
            setOrderDetails(null)
            // if (BuyProductSoruce == 'cart') {
            //   dispatch(onRemoveItem(order_items_uid))
            // }
            // dispatch(setBuyProduct({ items: [], source: "cart" }))
            messageApi.open({
              type: "success",
              content: "Payment successful, Redirecting...",
            });
            router.push(
              `/payment-status?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&signature=${response.razorpay_signature}&order_type=Product`
            );
          } else {
            console.log("Payment Failed or Cancelled:", response);
            messageApi.open({
              type: "info",
              content: "Payment was cancelled or failed.",
            });
          }
        },
        theme: orderDetails?.theme,
      };
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
      console.error("Error during proudct payment:", err);
      messageApi.open({
        type: "error",
        content: "Payment process error.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        return orderList.length > 0 ? <OrderSummary
          orderList={orderList}
          deliveryAddress={SelectedDeliveryAddre}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        /> :
          <div className="pt-[10rem] flex flex-col jusitify-center items-center px-4">
            <EmptyCart h={150} w={150} fill={"#E0A43B"} />
            <p className="sub_heading mb-4">Oops! Your cart is empty!</p>
            <p className="section-content mb-4">
              Start adding products now.
            </p>
            <CustomButton
              htmlType="submit"
              className="site-button-primary !m-0  capitalize"
              title="Browse Products"
              loading={false}
              type="submit"
              onClick={() => router.push("/products")}
            />
          </div>

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
        return orderList.length > 0 && <button
          // onClick={handleStepNext}
          onClick={handlePaymentStep}
          className="site-button-secondary !mt-0 !min-w-24 !min-h-max"
        >
          Pay Now
        </button>
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

  if (isLoading) return <BlockPageLoader />;

  return (
    <div className="relative flex flex-col w-full overflow-hidden min-h-[70vh]">
      <section className="bg-[--base] w-full p-4 flex-shrink-0 my-4">
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
      <section className="flex-grow flex flex-col">
        <div>{renderActiveStep(activeStep)}</div>

        <div className="w-full mt-4 flex justify-end items-center">
          {handleRenderBtnText()}
        </div>
        {contextHolder}
      </section>
    </div>
  );
};

export default BuyProductCom;

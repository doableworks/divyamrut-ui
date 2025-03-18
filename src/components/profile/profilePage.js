"use client";
import React, { useState } from "react";
import {
  ChevronRightIcon,
  InformationCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowsUpDownIcon,
  FaceSmileIcon,
  ShoppingBagIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { NoImageAvailabe, NoProfileImage } from "@/contants/contants";
import { signOut, useSession } from "next-auth/react";
import { closeNav } from "@/redux/feature/mobileNavSlice";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
import { clearCart } from "@/redux/feature/cartSlice";
import ConsentForm from "./ConsentForm";
import { Button, Form, Input, Modal, Row, Col, message } from "antd";
import Divider from "../common/Divider";
import CustomButton from "../common/CustomButton";
import axiosInstance from "@/lib/axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const initialLeftbar = [
  {
    id: "Orders",
    label: "My Orders",
    mobileLabel: "Orders",
    icon: <ShoppingBagIcon className="size-5 text-[--yellow]" />,
    subItems: [
      {
        id: "All",
        label: "All",
        filter: true,
      },
      {
        id: "Confirmed",
        label: "Confirmed",
        filter: true,
      },
      {
        id: "shipped",
        label: "Shipped",
        filter: true,
      },
      {
        id: "delivered",
        label: "Delivered",
        filter: true,
      },
      {
        id: "cancelled",
        label: "Cancelled",
        filter: true,
      },
      {
        id: "refunded",
        label: "Refunded",
        filter: true,
      },
    ],
  },
  {
    id: "Therapy",
    label: "Therapy Bookings",
    mobileLabel: "Therapy",
    icon: <FaceSmileIcon className="size-5 text-[--yellow]" />,
    subItems: [
      {
        id: "All",
        label: "All",
        filter: true,
      },
      {
        id: "Scheduled_therapy",
        label: "Scheduled",
        filter: true,
      },
      {
        id: "Completed_therapy",
        label: "Completed",
        filter: true,
      },
      {
        id: "Started_therapy",
        label: "Started",
        filter: true,
      },
      {
        id: "Cancelled_therapy",
        label: "Cancelled",
        filter: true,
      },
      {
        id: "Missed_therapy",
        label: "Missed",
        filter: true,
      },
    ],
  },
  {
    id: "Profile",
    label: "Profile Settings",
    mobileLabel: "Profile",
    icon: <UserIcon className="size-5 text-[--yellow]" />,
    subItems: [],
  },
];

const allowedKeys = [
  "first_name",
  "last_name",
  "height",
  "weight",
  "age",
  "gender",
  "address",
  "medical_condition",
  "phone_no",
];

const UserProfileList = ({ userProfileData }) => {
  const [form, returnForm] = Form.useForm();
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const initialSelectedTab = tab
    ? initialLeftbar.find((each) => each.id.toLowerCase() === tab.toLowerCase())
    : initialLeftbar[2];
  const [activeTab, setActiveTab] = useState(initialSelectedTab);
  const [openConsentForm, setOpenConsentForm] = useState(false);
  const [consentFormData, setConsentFormData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [therapyBookedData, setTherapyBookedData] = useState(
    userProfileData.user_appointments
  );
  const [purchaseProductsData, setPurchaseProductData] = useState(
    userProfileData.orders
  );

  const [loading, setLoading] = useState(false);
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [returnData, setReturnData] = useState(null);

  const [userProfileDetails, setUserProfileDetails] = useState(
    userProfileData.profile
  );
  const [isEditProfile, setIsEditProfile] = useState({
    status: false,
    image: userProfileData.profile.image,
  });

  const showResponseMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const onLogOut = async () => {
    try {
      await signOut();
      dispatch(closeNav());
      dispatch(setOpenLoginModal(true));
      dispatch(clearCart());
    } catch (error) {
      console.log("onLogOut error", error);
    }
  };

  const handleOpenConsentForm = (data) => {
    setConsentFormData(data);
    setOpenConsentForm(true);
  };

  const handleCloseConsentForm = () => {
    setOpenConsentForm(false);
  };

  const setSuccessedConsentForm = (uniqueId) => {
    const newData = therapyBookedData.map((each) => {
      if (each.uid === uniqueId) {
        return { ...each, consent_form: true };
      } else {
        return each;
      }
    });

    setTherapyBookedData(newData);
  };

  const filteredTherapy = therapyBookedData.filter((each) => {
    if (selectedFilter === "All") return true;
    return (
      each.status.toLowerCase() ===
      selectedFilter.replace("_therapy", "").toLowerCase()
    );
  });

  const filteredProducts = purchaseProductsData
    .map((order) => {
      if (selectedFilter === "All") {
        return order;
      } else {
        const filteredOrderItems = order.order_items.filter(
          (item) => item.status.toLowerCase() === selectedFilter.toLowerCase()
        );
        if (filteredOrderItems.length > 0) {
          return { ...order, order_items: filteredOrderItems };
        } else {
          return null;
        }
      }
    })
    .filter(Boolean);

  const handleSubmit = async (values) => {
    setLoading(true);
    const formData = new FormData();

    // Append text fields
    Object.keys(values).forEach((key) => {
      if (
        values[key] !== null &&
        values[key] !== undefined &&
        values[key] !== ""
      ) {
        formData.append(key, values[key]);
      }
    });

    // Append first_name & last_name if missing
    formData.append(
      "first_name",
      values.first_name || userProfileData.first_name
    );
    formData.append("last_name", values.last_name || userProfileData.last_name);

    // Append image file if updated
    if (isEditProfile.file) {
      formData.append("image", isEditProfile.file);
    }

    try {
      const response = await axiosInstance.post(
        "/api/profile-update/",
        formData,
        { session }
      );

      const result = await response.data;

      if (response.status >= 200 && response.status < 300) {
        showResponseMessage("success", "Profile updated successfully!");
        setUserProfileDetails((prev) => ({
          ...prev,
          ...values,
          image: isEditProfile.file
            ? URL.createObjectURL(isEditProfile.file)
            : prev.image,
        }));
        setIsEditProfile({ status: false });
      } else {
        throw new Error();
      }
    } catch (error) {
      showResponseMessage(
        "error",
        "An error occurred while updating. Please try again!"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOpenReturnModal = (item) => {
    setReturnData(item);
    setIsReturnModalOpen(true);
  };

  const handleCancelReturnModal = () => {
    setReturnData(null);
    setIsReturnModalOpen(false);
  };

  const handleReturnSubmit = async (values) => {
    if (!returnData) {
      showResponseMessage("error", "Please select a valid item to return");
      return;
    }
    if (!values.reason?.trim()) {
      showResponseMessage("error", "Please provide a reason for return!");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/product/return-request/",
        {
          order_item_uid: returnData.uid,
          reason: values.reason,
        },
        {
          session,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        showResponseMessage("success", "Return request processed successfully");

        const updatedPurchaseProductsData = purchaseProductsData.map(
          (order) => ({
            ...order,
            order_items: order.order_items.map((item) =>
              item.uid === returnData.uid
                ? {
                    ...item,
                    return_request: {
                      uid: "9abde081-6553-4b47-9659-8c6039c4091b",
                      status: "pending",
                    },
                  }
                : item
            ),
          })
        );

        setPurchaseProductData(updatedPurchaseProductsData);
        handleCancelReturnModal();
      }
    } catch (err) {
      console.error("Return request Error", err);
      showResponseMessage(
        "error",
        err?.response?.data?.error || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };
  console.log(purchaseProductsData);
  const renderActiveTabContent = () => {
    switch (activeTab.id) {
      case "Therapy":
        return (
          <>
            {filteredTherapy.length > 0 ? (
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredTherapy.map((each, index) => (
                  <li
                    key={index}
                    className="border rounded p-3 px-4 flex flex-col gap-2"
                  >
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                      <p className="section-content !text-[14px] !text-left">
                        Date & Time: {each?.slot_details}
                      </p>
                    </div>
                    <p className="section-content !text-left !text-[15px]">
                      Therapiest Name:{" "}
                      <span className="!text-gray-900 !font-medium">
                        {each.therapist_name}
                      </span>
                    </p>
                    <p className="section-content !text-left !text-[15px]">
                      Therapy:{" "}
                      <span className="!text-gray-900 !font-medium">
                        {each?.therapy_name}
                      </span>
                    </p>
                    <div className="flex items-end justify-between">
                      <p className="section-content !text-left !text-[15px]">
                        Status: <span>{each.status}</span>
                      </p>
                      <div className="relative">
                        <button
                          className={twMerge(
                            "px-4 py-1 rounded-md text-sm bg-[--yellow] flex items-center gap-2 text-white",
                            each.consent_form &&
                              "bg-[--green] cursor-not-allowed"
                          )}
                          type="button"
                          onClick={() => handleOpenConsentForm(each)}
                          disabled={each.consent_form}
                        >
                          <span className="font-normal">
                            {each.consent_form ? "Filled" : "Consent"}
                          </span>
                          <span className="group">
                            <InformationCircleIcon className="h-4" />

                            <span className="w-[150%] absolute -left-5 -top-20 opacity-0 group-hover:opacity-100 bg-gray-600 text-white text-xs rounded-md py-1 px-2 transition-all">
                              {each.consent_form
                                ? "The consent form can be filled out once per therapy session."
                                : "The consent form is a mandatory step to start therapy. Click to begin filling it out!"}
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <p className="section-title !text-gray-400 min-h-12 my-16">
                  No Therapy Found
                </p>
              </div>
            )}
            {openConsentForm && (
              <ConsentForm
                isOpen={openConsentForm}
                handleCloseConsentForm={handleCloseConsentForm}
                consentFormData={consentFormData}
                setSuccessedConsentForm={setSuccessedConsentForm}
              />
            )}
          </>
        );
      case "Profile":
        return (
          <div>
            <div className="relative p-6 space-y-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    src={
                      isEditProfile.status
                        ? isEditProfile?.image ||
                          userProfileDetails?.image ||
                          NoProfileImage
                        : userProfileDetails?.image || NoProfileImage
                    }
                    alt="Profile"
                    className="w-full h-full rounded-full"
                  />

                  {isEditProfile.status && (
                    <>
                      <label
                        htmlFor="profilePictureChange"
                        className="cursor-pointer absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />{" "}
                        </svg>
                      </label>
                      <input
                        type="file"
                        accept="image/jpeg, image/png, image/webp"
                        id="profilePictureChange"
                        className="!hidden"
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </div>

                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800 capitalize">
                    {userProfileDetails?.first_name}{" "}
                    {userProfileData?.last_name}
                  </h2>
                  <div className="flex items-center flex-col w-full my-2">
                    <p className="text-gray-500">
                      Email:{" "}
                      <span className="font-semibold">
                        {userProfileData?.email}
                      </span>
                    </p>
                    <p className="text-gray-500">
                      username:{" "}
                      <span className="font-semibold">
                        @{userProfileData?.username}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-2">
                {!isEditProfile.status &&
                  Object.keys(userProfileDetails)
                    .filter((key) => allowedKeys.includes(key))
                    .map((key, index) => (
                      <li key={index}>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600 capitalize">
                            {key.replace(/_/g, " ")}
                          </span>

                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 capitalize">
                              {userProfileDetails[key] || "-"}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}

                {isEditProfile.status && (
                  <div className="overflow-y-auto overflow-x-hidden p-6">
                    <Row gutter={[16, 16]}>
                      {allowedKeys.map((field, index) => (
                        <Col xs={24} lg={12} key={index}>
                          <Form.Item
                            name={field}
                            label={field.replace(/_/g, " ").toUpperCase()}
                            rules={[
                              {
                                required: ["first_name", "last_name"].includes(
                                  field
                                ),
                                message: `Please enter your ${field
                                  .replace(/_/g, " ")
                                  .toLowerCase()}!`,
                              },
                            ]}
                          >
                            <Input
                              placeholder={`Enter ${field
                                .replace(/_/g, " ")
                                .toLowerCase()}`}
                            />
                          </Form.Item>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </ul>
            </div>
          </div>
        );
      case "Orders":
        return filteredProducts?.length > 0 ? (
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredProducts.map((order, orderIndex) =>
              order.order_items.map((item, itemIndex) => (
                <li
                  key={`${orderIndex}-${itemIndex}`}
                  className="border rounded p-3 px-4 flex flex-row items-center gap-2"
                >
                  <div className="w-28 h-28 flex-shrink-0">
                    <img
                      src={item.product_image}
                      alt={item.proudct_title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  <div>
                    <p className="section-content !text-left !text-[15px]">
                      Product:{" "}
                      <span className="!text-gray-900 !font-medium">
                        {item.product_title}
                      </span>
                    </p>
                    <p className="section-content !text-left !text-[15px]">
                      Price:{" "}
                      <span className="!text-gray-900 !font-medium">
                        Rs. {item.product_price}/-
                      </span>
                    </p>
                    <p className="section-content !text-left !text-[15px]">
                      Quantity:{" "}
                      <span className="!text-gray-900 !font-medium">
                        {item.quantity}
                      </span>
                    </p>
                    <p className="section-content !text-left !text-[15px]">
                      Status:{" "}
                      <span className="text-gray-900 font-medium capitalize">
                        {item.status}
                      </span>
                    </p>
                    {item.status === "delivered" &&
                      item.is_return &&
                      !item.return_request && (
                        <button
                          onClick={() => handleOpenReturnModal(item)}
                          className="bg-[--voilet] text-white mt-2 p-1 px-4 rounded text-xs font-poppins"
                          type="button"
                        >
                          Request for Return
                        </button>
                      )}
                    {item.return_request && (
                      <p className="text-xs mt-2 text-[--voilet] font-poppins">
                        {item.return_request.status.toLowerCase() === "pending"
                          ? "Your return request is being processed. Please wait approximately 2-3 working days for an update."
                          : item.return_request.status.toLowerCase() ===
                            "approved"
                          ? "Your return request has been approved by the admin. Please wait 5-7 working days for the refund to be initiated."
                          : item.return_request.status.toLowerCase() ===
                            "rejected"
                          ? "Your return request has been rejected by the admin as the product may not be eligible for an easy return. Please contact us for more details."
                          : item.return_request.status.toLowerCase() ===
                            "completed"
                          ? "Your refund for this return has been successfully initiated."
                          : ""}
                      </p>
                    )}
                  </div>
                </li>
              ))
            )}
            {isReturnModalOpen && returnData && (
              <Modal
                open={isReturnModalOpen}
                footer={null}
                onCancel={handleCancelReturnModal}
              >
                <div className="p-6 font-poppins">
                  <div className="flex gap-2 mb-4">
                    <div className="w-14 h-14">
                      <Image
                        className="w-full h-full object-cover"
                        src={returnData?.product_image}
                        height={56}
                        width={56}
                        alt="Product Image"
                      />
                    </div>
                    <div>
                      <p className="section-title !capitalize !text-left">
                        {returnData?.product_title}
                      </p>
                      <div className="text-gray-500 text-sm">
                        <p>Quantity: {returnData.quantity}</p>
                        <p>Refundable amount: {returnData.product_price}</p>
                      </div>
                    </div>
                    {console.log(returnData, "returnData")}
                  </div>
                  <Form
                    name="returnProductForm"
                    form={returnForm}
                    layout="vertical"
                    onFinish={handleReturnSubmit}
                  >
                    <Form.Item
                      label="Reason for Return"
                      name="reason"
                      rules={[
                        {
                          required: true,
                          message: "Please provide a reason for return!",
                        },
                      ]}
                    >
                      <Input.TextArea placeholder="Enter your reason..." />
                    </Form.Item>
                    <CustomButton
                      htmlType="submit"
                      className="site-button-primary !m-0 w-[-webkit-fill-available] !mt-2"
                      title="Submit"
                      loading={loading}
                      disabled={loading}
                      type="submit"
                    />

                    <p className="text-gray-500 text-sm mt-3 font-poppins">
                      After approving the return request, the pickup will take
                      approximately 5-7 days.
                    </p>
                  </Form>
                </div>
              </Modal>
            )}
          </ul>
        ) : (
          <div>
            <p className="section-title !text-gray-400 min-h-12 my-16">
              No Products Found
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSetActiveTab = (clickedItem) => {
    if (!clickedItem?.id) return;
    setActiveTab(clickedItem);
    router.replace(`?tab=${clickedItem.id}`, { scroll: false });
  };

  const getActiveTabData = () => {
    const activeInitialBar = initialLeftbar.find(
      (each) => each.id === activeTab.id
    );
    return activeInitialBar;
  };

  const handleChangedFilter = (id) => {
    setSelectedFilter(id);
  };

  const handleChangeActiveTab = (clickedData) => {
    handleSetActiveTab(clickedData);
    if (clickedData.subItems.length > 0) {
      setSelectedFilter(clickedData.subItems[0].id);
    }
  };

  const handleToggleEditProfile = (newStatus) => {
    const newObj = {
      ...isEditProfile,
      status: newStatus,
    };
    setIsEditProfile(newObj);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setIsEditProfile({
        ...isEditProfile,
        file: event.target.files[0],
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <div>
      <div className="common_page_width !pt-10 flex flex-col items-start lg:flex-row gap-4">
        <div className="w-full lg:!w-[35%] lg:sticky lg:top-5 flex flex-col gap-4">
          <div className="bg-white p-3 rounded flex gap-4 items-center shadow-md">
            <div className="relative w-16 h-16 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={
                  isEditProfile.status
                    ? isEditProfile?.image ||
                      userProfileDetails?.image ||
                      NoProfileImage
                    : userProfileDetails?.image || NoProfileImage
                }
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="flex-grow gap-4 flex justify-between items-start">
              <div>
                <p className="section-content !text-left !text-[15px]">
                  Hello,
                </p>
                <p className="section-title !text-left !capitalize">
                  {userProfileDetails?.first_name} {userProfileData?.last_name}
                </p>
              </div>
              <button
                type="button"
                onClick={onLogOut}
                className="site-button-primary !m-0 lg:hidden"
              >
                Logout
              </button>
            </div>
          </div>

          <ul className="flex gap-4 overflow-x-auto py-4 rounded lg:hidden">
            {getActiveTabData().subItems.map((each, index) => (
              <li
                onClick={() => handleChangedFilter(each.id)}
                className={twMerge(
                  "flex-shrink-0 bg-gray-200 px-5 py-2 rounded-full text-gray-500 text-md font-normal",
                  selectedFilter === each.id &&
                    "bg-[--yellow] text-white font-semibold"
                )}
                key={index}
              >
                {each.label}
              </li>
            ))}
          </ul>

          <div className="hidden min-h-[60vh] lg:flex bg-white p-5 rounded shadow-md flex-col justify-between">
            <ul className=" flex flex-col gap-4 items-center list-none">
              {initialLeftbar.map((each, index) => (
                <li key={index} className="w-full flex flex-col gap-4">
                  <button
                    onClick={() => handleChangeActiveTab(each)}
                    className="flex justify-between items-center w-full group"
                  >
                    <figure className="flex gap-4 items-center">
                      {each.icon}
                      <p className="section-title !text-[13px] !text-gray-600 !text-left group-hover:!text-[--voilet]">
                        {each.label}
                      </p>
                    </figure>
                    {each.subItems?.length > 0 && (
                      <span
                        className={twMerge(
                          "",
                          activeTab.id === each.id &&
                            "rotate-90 transition-all duration-300 ease-in-out"
                        )}
                      >
                        <ChevronRightIcon className="size-4" />
                      </span>
                    )}
                  </button>

                  {each.subItems.length > 0 && activeTab.id === each.id && (
                    <ul className="pl-8 gap-3 flex flex-col">
                      {each.subItems.map((subItem, index) => (
                        <button
                          type="button"
                          key={index}
                          className="flex items-center gap-2 group"
                        >
                          {subItem?.filter && (
                            <input
                              type="checkbox"
                              id={subItem.id}
                              className="w-3 h-3 outline-none"
                              name={each.label}
                              checked={selectedFilter === subItem.id}
                              onClick={() => handleChangedFilter(subItem.id)}
                            />
                          )}
                          <label
                            htmlFor={subItem.id}
                            className={twMerge(
                              "section-content !text-[13px] group-hover:!text-[--voilet] group-hover:!font-medium !cursor-pointer",
                              selectedFilter === subItem.id &&
                                "!text-[--yellow] !font-semibold"
                            )}
                          >
                            {subItem.label}
                          </label>
                        </button>
                      ))}
                    </ul>
                  )}

                  {initialLeftbar.length - 1 !== index && (
                    <hr className="w-full" />
                  )}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onLogOut}
              className="site-button-primary w-full"
            >
              Logout
            </button>
          </div>
        </div>
        <Form
          name="editprofileForm"
          wrapperCol={{ span: 24 }}
          onFinish={handleSubmit}
          autoComplete="off"
          className="w-full"
          form={form}
          layout="vertical"
          initialValues={userProfileDetails}
        >
          <div className="bg-white p-3 rounded shadow-md flex-grow w-full">
            <div className="flex items-center justify-between mb-3 p-3">
              <p className="highlight-heading !text-[1.5rem] !p-0 !m-0">
                {activeTab.label}
              </p>
              {activeTab.id === "Profile" &&
                (isEditProfile.status ? (
                  <div className="flex items-center gap-3">
                    <CustomButton
                      htmlType="submit"
                      className="site-button-primary !m-0"
                      title="Update"
                      loading={loading}
                      type="submit"
                    />
                    <button
                      onClick={() => handleToggleEditProfile(false)}
                      type="button"
                      className="site-button-secondary !m-0 "
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleToggleEditProfile(true)}
                    type="button"
                    className="site-button-primary !m-0 "
                  >
                    Edit
                  </button>
                ))}
            </div>
            <Divider className="mb-5" />
            <div className="pb-5 min-h-[calc(100vh-65px)] lg:min-h-[calc(100vh-192px)]">
              {renderActiveTabContent()}
            </div>
          </div>
        </Form>
      </div>
      <ul className="lg:hidden bg-white flex items-center justify-around p-4 fixed bottom-0 w-full shadow-md border-t-2 list-none">
        {initialLeftbar.map((each, index) => (
          <li key={index} className="flex flex-col gap-4">
            <button
              onClick={() => handleChangeActiveTab(each)}
              className="flex justify-between items-center w-full group"
            >
              <figure className="flex w-full gap-[5px] items-center">
                {each.icon}
                <p
                  className={twMerge(
                    "font-jost font-medium !text-[12px] !text-gray-600 !text-left group-hover:!text-[--voilet]",
                    activeTab.id === each.id && "!text-[--voilet]"
                  )}
                >
                  {each.mobileLabel}
                </p>
              </figure>
            </button>
          </li>
        ))}
      </ul>
      {contextHolder}
    </div>
  );
};

export default UserProfileList;

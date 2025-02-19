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
import { signOut } from "next-auth/react";
import { closeNav } from "@/redux/feature/mobileNavSlice";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
import { clearCart } from "@/redux/feature/cartSlice";
import ConsentForm from "./ConsentForm";

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
        id: "Inprogress_Orders",
        label: "On the way",
        filter: true,
      },
      {
        id: "Pending_Orders",
        label: "Pending",
        filter: true,
      },
      {
        id: "Completed_Order",
        label: "Completed",
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
    ],
  },
  {
    id: "Profile",
    label: "Profile Settings",
    mobileLabel: "Profile",
    icon: <UserIcon className="size-5 text-[--yellow]" />,
    subItems: [
      {
        id: "Profile_information",
        label: "Profile Infomartion",
      },
      {
        id: "profile_address",
        label: "Manage Address",
      },
    ],
  },
];

const UserProfileList = ({ userProfileData }) => {
  const [activeTab, setActiveTab] = useState(initialLeftbar[1]);
  const [openConsentForm, setOpenConsentForm] = useState(false);
  const [consentFormData, setConsentFormData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [therapyBookedData, setTherapyBookedData] = useState(
    userProfileData.user_appointments
  );

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
                    src={NoProfileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />{" "}
                    </svg>
                  </button>
                </div>

                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {userProfileData?.full_name}
                  </h2>
                  <p className="text-gray-500 flex items-center justify-center space-x-2">
                    @<span>{userProfileData?.username}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-right text-cyan-400 underline cursor-pointer">
                  Edit Details
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Username</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">
                      @{userProfileData?.username}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Email</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">
                      {userProfileData?.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Address</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">
                      {userProfileData?.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Mobile no.</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">
                      {userProfileData?.mobile}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Orders":
        return (
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {userProfileData.orders.map((order, orderIndex) =>
              order.order_items.map((item, itemIndex) => (
                <li
                  key={`${orderIndex}-${itemIndex}`}
                  className="border rounded p-3 px-4 flex flex-row gap-2"
                >
                  <div className="w-[30%]">
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
                        {item.proudct_name}
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
                      <span className="!text-gray-900 !font-medium">
                        {item.status}
                      </span>
                    </p>
                  </div>
                </li>
              ))
            )}
          </ul>
        );
      default:
        return null;
    }
  };

  const handleSetActiveTab = (clickedId) => {
    setActiveTab(clickedId);
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
    setSelectedFilter(clickedData.subItems[0].id);
  };

  return (
    <div>
      <div className="common_page_width !pt-10 flex flex-col items-start lg:flex-row gap-4">
        <div className="w-full lg:!w-[35%] lg:sticky lg:top-5 flex flex-col gap-4">
          <div className="bg-white p-3 rounded flex gap-4 items-center shadow-md">
            <div className="relative w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={NoProfileImage}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />{" "}
                </svg>
              </button>
            </div>
            <div className="flex-grow flex justify-between items-start">
              <div>
                <p className="section-content !text-left !text-[15px]">
                  Hello,
                </p>
                <p className="section-title !text-left !capitalize">
                  {userProfileData.full_name}
                </p>
              </div>
              <button
                className="site-button-primary !m-0 lg:hidden"
                type="button"
              >
                Edit
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
                    <span
                      className={twMerge(
                        "",
                        activeTab.id === each.id &&
                          "rotate-90 transition-all duration-300 ease-in-out"
                      )}
                    >
                      <ChevronRightIcon className="size-4" />
                    </span>
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
        <div className="bg-white p-3 rounded shadow-md flex-grow w-full">
          <p className="highlight-heading !text-[1.5rem] !text-left !border-b-2 !pb-3">
            {activeTab.label}
          </p>
          <div className="pb-5 min-h-[calc(100vh-65px)] lg:min-h-[calc(100vh-192px)]">
            {renderActiveTabContent()}
          </div>
        </div>
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
    </div>
  );
};

export default UserProfileList;

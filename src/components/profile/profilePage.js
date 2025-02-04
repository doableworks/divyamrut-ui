"use client";
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  ArrowsUpDownIcon,
  FaceSmileIcon,
  ShoppingBagIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { NoImageAvailabe } from "@/contants/contants";
const user = {
  username: "@jennywilson",
  firstName: "Jenny",
  lastName: "Wilson",
  email: "jenny@gmail.com ",
  mobile: "+1234567890",
  image: "/asset/home/ayurvedic-supplement.jpg",
  address: "New York, USA",
};

const initialLeftbar = [
  {
    id: "Orders",
    label: "My Orders",
    mobileLabel: "Orders",
    icon: <ShoppingBagIcon className="size-5 text-[--yellow]" />,
    subItems: [
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
        id: "Scheduled_therapy",
        label: "Scheduled",
        filter: true,
      },
      {
        id: "Completed_therapy",
        label: "Completed",
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

const UserProfileList = () => {
  const [activeTab, setActiveTab] = useState(initialLeftbar[1]);

  const renderActiveTabContent = () => {
    switch (activeTab.id) {
      case "Therapy":
        return (
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((each) => (
              <li className="border rounded p-3 px-4 flex flex-col gap-2">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                  <p className="section-content !text-[14px] !text-left">
                    Date: 02/02/2025
                  </p>
                  <p className="section-content !text-[14px] !text-left">
                    Time: 11:00 AM - 12:00 PM
                  </p>
                </div>
                <p className="section-content !text-left !text-[15px]">
                  Therapiest Name:{" "}
                  <span className="!text-gray-900 !font-medium">
                    Dr. Santosh
                  </span>
                </p>
                <p className="section-content !text-left !text-[15px]">
                  Therapy:{" "}
                  <span className="!text-gray-900 !font-medium">
                    Meru Chikitsa
                  </span>
                </p>
                <p className="section-content !text-left !text-[15px]">
                  Status: <span>Completed</span>
                </p>
              </li>
            ))}
          </ul>
        );
      case "Profile":
        return (
          <div>
            <div className="relative p-6 space-y-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    src={user.image}
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
                    {`${user.firstName} ${user.lastName}`}
                  </h2>
                  <p className="text-gray-500 flex items-center justify-center space-x-2">
                    <span>{user.username}</span>
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
                    <span className="text-gray-500">{user.username}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Email</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">{user.email}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Address</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">{user.address}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Mobile no.</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">{user.mobile}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Orders":
        return (
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((each) => (
              <li className="border rounded p-3 px-4 flex flex-row gap-2">
                <div className="w-[30%]">
                  <img
                    src={NoImageAvailabe}
                    alt="product"
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <p className="section-content !text-left !text-[15px]">
                    Product:{" "}
                    <span className="!text-gray-900 !font-medium">
                      Diya 2 Set of 14"
                    </span>
                  </p>
                  <p className="section-content !text-left !text-[15px]">
                    Price:{" "}
                    <span className="!text-gray-900 !font-medium">
                      Rs. 335.00/-
                    </span>
                  </p>
                  <p className="section-content !text-left !text-[15px]">
                    Status: <span>Completed</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  const handleSetActiveTab = (clickedId) => {
    setActiveTab(clickedId);
  };

  return (
    <div>
      <div className="common_page_width !pt-10 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[30%] flex flex-col gap-4 flex-shrink-0">
          <div className="bg-white p-3 rounded flex gap-4 items-center shadow-md">
            <div className="relative w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={user.image}
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
                <p className="section-title !text-left !normal-case">
                  Jenny Wilson
                </p>
              </div>
              <button className="site-button-primary !m-0 lg:hidden" type="button">Edit</button>
            </div>
          </div>

          <div className="hidden lg:flex bg-white p-5 rounded shadow-md  min-h-screen flex-col justify-between">
            <ul className=" flex flex-col gap-4 items-center list-none">
              {initialLeftbar.map((each, index) => (
                <li key={index} className="w-full flex flex-col gap-4">
                  <button
                    onClick={() => handleSetActiveTab(each)}
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
                      {each.subItems.map((subItem) => (
                        <button
                          type="button"
                          key={subItem.id}
                          className="flex items-center gap-2 group"
                        >
                          {subItem?.filter && (
                            <input
                              type="checkbox"
                              id={subItem.id}
                              className="w-3 h-3"
                            />
                          )}
                          <label
                            htmlFor={subItem.id}
                            className="section-content !text-[13px] group-hover:!text-[--voilet] group-hover:!font-medium !cursor-pointer"
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
            <button className="site-button-primary w-full">Logout</button>
          </div>
        </div>
        <div className="bg-white p-3 rounded shadow-md flex-grow">
          <p className="highlight-heading !text-[1.5rem] !text-left !border-b-2 !pb-3">
            {activeTab.label}
          </p>
          <div className="pb-5">{renderActiveTabContent()}</div>
        </div>
      </div>
      <ul className="lg:hidden bg-white flex items-center justify-around p-4 fixed bottom-0 w-full shadow-md border-t-2 list-none">
        {initialLeftbar.map((each, index) => (
          <li key={index} className="flex flex-col gap-4">
            <button
              onClick={() => handleSetActiveTab(each)}
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

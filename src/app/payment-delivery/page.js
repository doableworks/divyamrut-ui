import React from "react";
import BuyProductCom from "@/components/common/BuyProductCom";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";
import axiosInstance from "@/lib/axios";

const getUserAddress = async (session) => {
  try {
    const body = {
      email: session.user.user.email,
    };
    const res = await axiosInstance.post(
      "/product/shipping/address-get/",
      body,
      {
        session,
      }
    );
    if (!res.statusText) {
      throw new Error("Failed to fetch data");
    }
    const data = await res?.data?.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const page = async () => {
  const session = await getServerSession(authOptions);
  const allAddressData = session ? await getUserAddress(session) : [];

  return (
    <div className="common_page_width relative !pl-4 !pr-4 !pt-0">
      <BuyProductCom allAddressData={allAddressData} />
    </div>
  );
};

export default page;

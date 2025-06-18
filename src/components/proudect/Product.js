"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { Star } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import { NoImageAvailabe } from "@/contants/contants";
import useCartActions from "@/components/cartCom/useCartActions";
import "./product.css";

const Product = ({ item, productCategory, session }) => {
  const router = useRouter();
  const { onAddItem } = useCartActions();
  const [loading, setLoader] = useState(false);

  const handleAddItem = async (event) => {
    event.stopPropagation();
    try {
      setLoader(true);
      await onAddItem(item);
    } catch (error) {
      console.log("handleAddItem error", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col justify-between cursor-pointer rounded overflow-hidden pb-12 md:pb-0">
      <button
        type="button"
        onClick={() =>
          router.push(`/products/${productCategory}/${item?.slug}`)
        }
        className="text-left"
      >
        <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden bg-[--base] flex justify-center items-center">
          <img
            src={item?.image ? item?.image : NoImageAvailabe}
            className="w-full h-full object-contain"
            alt={item?.name}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-1 py-4 h-28 overflow-hidden">
          <h6 className="line-clamp-2 uppercase font-semibold text-sm text-[--neutral] font-poppins">
            {item?.name}
          </h6>
          {/* <p
            className="line-clamp-2 text-[12px] text-gray-500 font-light font-poppins"
          >Embroidery workwith colorful tassels made by craftsmen & women in Kutch region of.</p> */}
          {/* <p className="uppercase font-semibold text-lg text-[--neutral] font-poppins">
            ₹&nbsp;{item?.price}
          </p> */}
        </div>
      </button>
      {/* {parseInt(item.quantity) > 0 ? (
        <CustomButton
          htmlType="submit"
          className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
          title="Know More"
          loading={loading}
          type="submit"
          onClick={(event) => handleAddItem(event)}
        />
      ) : (
        <CustomButton
          className="site-button-primary !mt-4 w-[-webkit-fill-available] !bg-gray-400 cursor-not-allowed"
          title="Out of Stock"
        />
      )} */}
      <CustomButton
        htmlType="submit"
        className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
        title="Know More"
        onClick={() =>
          router.push(`/products/${productCategory}/${item?.slug}`)
        }
      />
    </div>
  );
};

export default Product;

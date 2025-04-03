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
    <div className="relative h-full flex flex-col justify-between cursor-pointer rounded overflow-hidden">
      <button
        type="button"
        onClick={() =>
          router.push(`/products/${productCategory}/${item?.slug}`)
        }
        className="text-left"
      >
        <div className="h-64 rounded-xl overflow-hidden bg-white flex justify-center items-center">
          <Image
            src={item?.image ? item?.image : NoImageAvailabe}
            width={100}
            height={100}
            className="w-full h-full object-contain"
            alt={item?.name}
          />
        </div>

        <div className="flex flex-col gap-1 py-4 h-44 overflow-hidden">
          <h6 className="line-clamp-2 uppercase font-semibold text-sm text-[--neutral] font-poppins">
            {item?.name}
          </h6>
          <p
            className="line-clamp-3 text-[12px] text-gray-500 font-extralight font-poppins"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
          <p className="line-clamp-2 uppercase font-semibold text-lg mt-4 text-[--neutral] font-poppins">
            {item?.currency == "USD" ? "$" : "₹"}&nbsp;{item?.price}
          </p>
        </div>
      </button>
      {parseInt(item.quantity) > 0 ? (
        <CustomButton
          htmlType="submit"
          className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
          title="ADD TO CART"
          loading={loading}
          type="submit"
          onClick={(event) => handleAddItem(event)}
        />
      ) : (
        <CustomButton
          className="site-button-primary !mt-4 w-[-webkit-fill-available] !bg-gray-400 cursor-not-allowed"
          title="Out of Stock"
        />
      )}
    </div>
  );
};

export default Product;

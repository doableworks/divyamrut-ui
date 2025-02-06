"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { useSelector, useDispatch } from "react-redux";
import { Star } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import { NoImageAvailabe } from "@/contants/contants";
import { addItem } from "@/redux/feature/cartSlice";
import useCartActions from "@/components/cartCom/useCartActions";
import "./product.css";
import { twMerge } from "tailwind-merge";

const RelatedProductOverview = ({
  item,
  productCategory,
  session,
  className,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { AddCartItem } = useCartActions();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddItem = async (event) => {
    event.stopPropagation();
    setIsLoading(true);
    try {
      let response;
      if (session) {
        response = await AddCartItem([item]);
      }
      console.log("handleAddItem response", response);
      if (session == null || (session && response)) {
        const itemData = session ? response?.data : tempItem;
        dispatch(addItem(itemData));
      }
    } catch (error) {
      console.log("error 555", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={twMerge("", className)}>
      <section className="bg-white w-full h-48 rounded-xl overflow-hidden mb-4">
        <Image
          src={item?.image ? item?.image : NoImageAvailabe}
          width={100}
          height={100}
          className="w-full h-full object-contain"
          alt={item?.name}
        />
      </section>

      <section className="h-60 flex flex-col justify-between">
        <button
          onClick={() =>
            router.push(`/products-list/${productCategory}/${item?.slug}`)
          }
        >
          <p className="text-lg font-bold text-left line-clamp-2">
            {item?.name}
          </p>
          <div className="flex gap-1 mt-4">
            <Star h={15} w={15} fill={"#f0ad4e"} />
            <Star h={15} w={15} fill={"#f0ad4e"} />
            <Star h={15} w={15} fill={"#f0ad4e"} />
            <Star h={15} w={15} fill={"#f0ad4e"} />
            <Star h={15} w={15} fill={"#ccd6df"} />
          </div>
        </button>

        <div>
          <p className="font-semibold text-xl text-gray-500 text-left mt-3 mb-3">
            {item?.currency == "Rs." ? "₹" : item?.currency}&nbsp;{item?.price}
          </p>
          <CustomButton
            htmlType="submit"
            className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
            title="ADD TO CART"
            type="submit"
            onClick={(event) => handleAddItem(event)}
            loading={isLoading}
          />
        </div>
      </section>
    </div>
  );
};

export default RelatedProductOverview;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { useSelector, useDispatch } from "react-redux";
import { Star } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import { NoImageAvailabe } from "@/contants/contants";
import { addCartItem } from "@/redux/feature/cartSlice";
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
  const { AddApiCartItem } = useCartActions();
  const [isLoading, setIsLoading] = useState(false);
  const { onAddItem } = useCartActions();

  const handleAddItem = async (event) => {
    event.stopPropagation();
    try {
      setIsLoading(true);
      onAddItem(item);
    } catch (error) {
      console.log("handleAddItem error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={twMerge("group", className)}>
      <button
        type="button"
        onClick={() =>
          router.push(`/products-list/${productCategory}/${item.slug}`)
        }
        className="bg-white w-full h-48 rounded-xl overflow-hidden mb-4"
      >
        <Image
          src={item?.image ? item?.image : NoImageAvailabe}
          width={100}
          height={100}
          className="w-full h-full object-contain"
          alt={item?.name}
        />
      </button>

      <section className="h-60 flex flex-col justify-between">
        <button
          type="button"
          onClick={() =>
            router.push(`/products-list/${productCategory}/${item.slug}`)
          }
        >
          <p className="text-lg font-bold text-left line-clamp-2 group-hover:text-[--yellow]">
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

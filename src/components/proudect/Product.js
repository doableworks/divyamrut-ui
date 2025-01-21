"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import BtnSection from "@/components/BtnCom/BtnSection";
import { useSelector, useDispatch } from "react-redux";
import { Star } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";

import {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
  handleCartSlider,
} from "@/redux/feature/cartSlice";
import AddToCartBtn from "../BtnCom/AddToCart";

const Product = ({ item, productCategory }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddItem = async (event) => {
    event.stopPropagation(); 
    try {
      await dispatch(addItem(item));
      dispatch(handleCartSlider(true));
      // await router.push("/cart");
    } catch (error) {
      console.log("error 555", error);
    }
  };

  return (
    <div
      className="relative flex flex-col justify-between cursor-pointer rounded overflow-hidden"
      onClick={() => router.push(`/products/${productCategory}/${item?.slug}`)}
    >
      {/* {item?.image && (
        <Image
          src={item?.image}
          width={200}
          height={200}
          className="w-full h-[200px]"
          alt="img"
        />
      )} */}

      <div className="w-full h-[300px] md:h-[350px] bg-text rounded-xl"></div>

      <div className="flex-grow flex flex-col px-6 pt-4">
        <h6 className="section_title14 !normal-case !text-[1.5rem] !text-left hover:!text-[--yellow]">
          {item?.title}
        </h6>
        <p className="text_text14 !text-left mt-1">{item.description}</p>
        <p className="text_text14 !text-left text-[black] mt-2">
          {item?.currency == "USD" ? "$" : "₹"}&nbsp;{item?.price}
        </p>
        <div className="flex gap-1 mt-4">
          <Star h={15} w={15} fill={"#f0ad4e"} />
          <Star h={15} w={15} fill={"#f0ad4e"} />
          <Star h={15} w={15} fill={"#f0ad4e"} />
          <Star h={15} w={15} fill={"#f0ad4e"} />
          <Star h={15} w={15} fill={"#ccd6df"} />
        </div>
      </div>
      <CustomButton
        htmlType="submit"
        className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
        title="ADD TO CART"
        loading={false}
        type="submit"
        onClick={(event)=>handleAddItem(event)}
      />
    </div>
  );
};

export default Product;

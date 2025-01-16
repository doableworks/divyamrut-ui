"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import BtnSection from "@/components/BtnCom/BtnSection";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
} from "@/redux/feature/cartSlice";
import AddToCartBtn from "../BtnCom/AddToCart";

const Product = ({ item, productCategory }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddItem = async () => {
    try {
      await dispatch(addItem(item));
      await router.push("/cart");
    } catch (error) {
      console.log("error 555", error);
    }
  };

  return (
    <div
      className="relative flex flex-col justify-between w-full cursor-pointer rounded overflow-hidden"
      onClick={() => router.push(`/products/${productCategory}/${item?.slug}`)}
    >
      {item?.image && (
        <Image
          src={item?.image}
          width={200}
          height={200}
          className="w-full h-[200px]"
          alt="img"
        />
      )}
      <div className="flex-grow flex flex-col px-6 py-4">
        <h6 className="section-title !normal-case !text-[1.5rem] !text-left hover:!text-[--yellow]">
          {item?.title}
        </h6>
        {/* <p className="section-title !normal-case !text-[1rem] !text-left !text-gray-400">
          {description}
        </p> */}
        <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-[black] mt-2">
          {item?.currency == "USD" && "$"}&nbsp;{item?.price}
        </p>
      </div>
      <div className="w-full text-center pb-4">
        {/* <AddToCartBtn cartFun={handleAddItem} /> */}
        <button className="site-button-primary w-full h-[60px]" onClick={handleAddItem}>ADD TO CART</button>

        {/* <BtnSection
            showAddToCartBtn={true}
            showBuyBtn={true}
            showBookBtn={false}
            cartFun={handleAddItem}
          /> */}
      </div>
    </div>
  );
};

export default Product;

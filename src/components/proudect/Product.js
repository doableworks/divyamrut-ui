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

const Product = ({
  title,
  image,
  description,
  slug,
  category,
  price,
  currency,
  products,
}) => {
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

  // console.log(
  //   "title",
  //   title,
  //   "image",
  //   image,
  //   "description",
  //   description,
  //   "slug",
  //   slug,
  //   "category",
  //   slug
  // );

  return (
    <div
      className="relative flex flex-col justify-between bg-[white] shadow-lg w-full cursor-pointer rounded overflow-hidden"
      onClick={() => router.push(`/products/${category}/${slug}`)}
    >
      {image && (
        <Image
          src={image}
          width={180}
          height={200}
          className="w-full h-[200px]"
          alt="img"
        />
      )}
      <div className="flex-grow flex flex-col px-6 py-4">
        <h6 className="section-title !normal-case !text-[1.5rem] !text-left hover:!text-[--yellow]">
          {title}
        </h6>
        {/* <p className="section-title !normal-case !text-[1rem] !text-left !text-gray-400">
          {description}
        </p> */}
        <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-[black] mt-2">
          {currency == "USD" && "$"}&nbsp;{price}
        </p>
      </div>
      <div className="w-full text-center">
          <AddToCartBtn />
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

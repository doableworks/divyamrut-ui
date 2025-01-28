"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import BtnSection from "@/components/BtnCom/BtnSection";
import { useSelector, useDispatch } from "react-redux";
import { Star } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import "./product.css";

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

  const handleAddItem =  (event) => {
    event.stopPropagation(); 
    try {
      dispatch(addItem(item));
      dispatch(handleCartSlider(true));
      // await router.push("/cart");
    } catch (error) {
      console.log("error 555", error);
    }
  };

  return (
    <div
      className="relative flex flex-col justify-between cursor-pointer rounded overflow-hidden"
      onClick={() => router.push(`/products-list/${productCategory}/${item?.slug}`)}
    >
      <div className="w-full h-[300px] md:h-[350px] rounded-xl">
      {item?.image && (
        <Image
          src={item?.image}
          width={200}
          height={200}
          className="w-full h-full cover"
          alt={item?.image}
        />
      )}
      </div>

      <div className="flex-grow flex flex-col px-6 pt-4">
        <h6 className="product_name text-heading !text-[24px] !leading-[30px] !normal-case !text-left hover:!text-[--yellow]" >
          {item?.name}  
        </h6>
        <p className="product_name text_text14 !text-left mt-1" 
        dangerouslySetInnerHTML={{ __html: item?.description }} />
        {/* <p className="text_text14 !text-left mt-1" >{item.description}</p> */}
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

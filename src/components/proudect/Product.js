"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { useSelector, useDispatch } from "react-redux";
import { Star } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import { NoImageAvailabe } from "@/contants/contants";
import { addItem } from "@/redux/feature/cartSlice";
import useCartActions from "@/components/cartCom/useCartActions";
import "./product.css";


const Product = ({ item, productCategory, session }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { AddCartItem } = useCartActions();

  let tempItem = {
    created: "",
    updated: "",
    is_select: false,
    quantity: 1,
    uid: "",
    product_detail: item,
  }


  const handleAddItem = async (event) => {
    event.stopPropagation();
    try {
      console.log("handleAddItem session", session);
      let response;
      if (session) {
        response = await await AddCartItem([item]);
      }
      console.log("handleAddItem response", response);
      if (session == null || (session && response)) {
        const itemData = session ? response?.data : tempItem
        dispatch(addItem(itemData));
      }
    } catch (error) {
      console.log("error 555", error);
    }
  };

  return (
    <div
      className="relative h-full flex flex-col justify-between cursor-pointer rounded overflow-hidden"
      onClick={() =>
        router.push(`/products-list/${productCategory}/${item?.slug}`)
      }
    >
      <div>
        <div className="w-full h-[300px] md:h-[350px] rounded-xl">
          <Image
            src={item?.image ? item?.image : NoImageAvailabe}
            width={200}
            height={200}
            className="w-full h-full cover"
            alt={item?.name}
          />
        </div>

        <div className="flex-grow flex flex-col px-6 pt-4">
          <h6 className="product_name text-heading !text-[24px] !leading-[30px] !normal-case !text-left hover:!text-[--yellow] h-[4rem]">
            {item?.name}
          </h6>
          <p
            className="product_name text_text14 !text-left mt-1 h-[2.5rem]"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
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
      </div>
      <CustomButton
        htmlType="submit"
        className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
        title="ADD TO CART"
        loading={false}
        type="submit"
        onClick={(event) => handleAddItem(event)}
      />
    </div>
  );
};

export default Product;

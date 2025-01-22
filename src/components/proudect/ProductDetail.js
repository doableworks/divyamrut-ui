"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import CustomButton from "@/components/common/CustomButton";
import ProductImage from "./ImageMagnify";
import ImageMedium from "./ImageMedium";
import { SetIsBuyModalOpen } from "@/redux/feature/productSlice";

import ReactImageMagnify from "react-image-magnify";
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
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "nextjs-toploader/app";

const ProductDetail = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedImage, SetSelectedImage] = useState(0);

  const imgArr = [
    "/asset/home/ayurvedic-supplement.jpg",
    "/asset/home/natural-health-support.jpg",
    "/asset/home/ayurvedic-supplement.jpg",
    "/asset/home/natural-health-support.jpg",
  ];

  const handleAddItem = async () => {
    try {
      await dispatch(addItem(item));
      dispatch(handleCartSlider(true));
      // await router.push("/cart");
    } catch (error) {
      console.log("error 555", error);
    }
  };

  const handleBuyBtn = () => {
    dispatch(SetIsBuyModalOpen(true));
  };

  return (
    <>
      <div className="relative flex flex-col md:flex-row gap-10 min-h-screen">
        {/* Product Images Section */}
        <div className="md:sticky self-start md:top-20 lg:w-1/2 flex flex-col items-center">
          {/* <div className="w-[100%] md:w-[100%] min-w-[300px] max-w-[700px] h-auto border border-gray-300 rounded-lg overflow-hidden"> */}
          <div className="hidden md:block">
            <ProductImage imgSrc={imgArr[selectedImage]} />
          </div>
          <div className="block md:hidden">
            <ImageMedium imgSrc={imgArr[selectedImage]} />
          </div>
          {/* </div> */}
          <div className="flex space-x-2 mt-8">
            {imgArr.map((path, index) => (
              <div
                key={index}
                onClick={() => SetSelectedImage(index)}
                className={`w-20 h-20 border border-gray-300 rounded-md overflow-hidden cursor-pointer ${
                  selectedImage == index && "border-2 border-slate-700"
                }`}
              >
                <Image
                  height={200}
                  width={200}
                  src={path}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mt-2">
              Ayurvedic Supplement
            </h1>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold text-gray-900">₹28</p>
            <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
          </div>
          <div className="flex flex-row gap-8">
            <CustomButton
              htmlType="submit"
              className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
              title="ADD TO CART"
              loading={false}
              type="submit"
              onClick={handleAddItem}
            />

            <CustomButton
              htmlType="submit"
              className="site-button-secondary !mt-4 w-[-webkit-fill-available] capitalize"
              title="Buy Now"
              loading={false}
              type="submit"
              onClick={handleBuyBtn}
            />
          </div>

          {/* Long Content to Scroll */}
          <div className="mt-8 space-y-8">
            {/* {[...Array()].map((_, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">Why shop from us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <span className="text-yellow-500 text-lg">🚀</span>
                  <div>
                    <p className="text-sm font-bold">Superfast Delivery</p>
                    <p className="text-sm text-gray-600">
                      Get your order delivered to your doorstep at the earliest.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-yellow-500 text-lg">💰</span>
                  <div>
                    <p className="text-sm font-bold">Best Prices & Offers</p>
                    <p className="text-sm text-gray-600">
                      Best price destination with offers directly from
                      manufacturers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-yellow-500 text-lg">🛒</span>
                  <div>
                    <p className="text-sm font-bold">Wide Assortment</p>
                    <p className="text-sm text-gray-600">
                      Choose from a wide range of products across categories.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

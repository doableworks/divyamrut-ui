"use client";
import React, { useState } from "react";
import Product from "@/components/proudect/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RightArrow } from "@/icon/icons";
import { useRouter } from "nextjs-toploader/app";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("antd").then((mod) => mod.Carousel), {
  ssr: false,
});
import { Grid } from "antd";
import { useSession } from "next-auth/react";
const { useBreakpoint } = Grid;

const ProductsScroller = ({ category }) => {
  const screens = useBreakpoint();
  const router = useRouter();
  const { data: session } = useSession();

  const handleMoveRoute = (cate) => {
    router.push(`/products/${cate.slug}`);
  };


  return (
    !category.is_soon && (
      <div className="my-8">
        <div
          className={"flex flex-row justify-between items-center gap-4 mb-4"}
        >
          <h2 className="highlight-heading !text-left !text-2xl">
            {category.name}
          </h2>
          <span
            className={"text-text flex flex-row gap-2 cursor-pointer"}
            onClick={() => handleMoveRoute(category)}
          >
            {" "}
            VIEW <RightArrow fill={"#64748b"} w={18} />{" "}
          </span>
        </div>
        {/* <Carousel
          autoplay
          autoplaySpeed={4000}
          dots={false}
          slidesToShow={
            screens.xl || screens.xxl ? 4 : screens.md || screens.lg ? 2 : 1
          }
          infinite={
            screens.xl || screens.xxl
              ? category?.products.length > 4
              : screens.md || screens.lg
              ? category?.products.length > 2
              : category?.products.length > 1
          }
          draggable={
            screens.xl || screens.xxl
              ? category?.products.length > 4
              : screens.md || screens.lg
              ? category?.products.length > 2
              : category?.products.length > 1
          }
          swipe={
            screens.xl || screens.xxl
              ? category?.products.length > 4
              : screens.md || screens.lg
              ? category?.products.length > 2
              : category?.products.length > 1
          }
          className="custom-carousel"
        > */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4">
          {category &&
            category?.products.map((product, index) => (
              <li key={index + category?.name} className={`p-2`}>
                <Product
                  key={index}
                  item={product}
                  productCategory={
                    category.hasSubCategory && false
                      ? category.subCategory
                      : category.slug
                  }
                  session={session}
                />
              </li>
            ))}
        </ul>
        {/* </Carousel> */}
      </div>
    )
  );
};

export default ProductsScroller;

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
    <>
      <div className="my-24">
        <div className={"flex flex-row justify-between items-center px-4"}>
          <h2 className="!text-left highlight-heading">{category.name}</h2>
          <span
            className={"text-text flex flex-row gap-2 cursor-pointer"}
            onClick={() => handleMoveRoute(category)}
          >
            {" "}
            VIEW ALL <RightArrow fill={"#64748b"} w={18} />{" "}
          </span>
        </div>
        <Carousel
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
        >
          {category &&
            category?.products.map((product, index) => (
              <div key={index + category?.name} className={`h-full pl-[20px] `}>
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
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProductsScroller;

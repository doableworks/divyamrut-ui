"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Carousel } from "antd";
const { useBreakpoint } = Grid;


export default function DisplayBlocks() {
  const screens = useBreakpoint();
  const menuItems = useSelector((state) => state.menuItems).all;

  const productItems = menuItems?.find((each) => each.label === "Products");

  const productCategories = productItems?.subMenu;
  return (
    <section className="py-8 px-14 md:px-24 lg:px-40">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        dots={false}
        slidesToShow={
          screens.xl || screens.xxl ? 5 : screens.md || screens.lg ? 4 : 2
        }
        infinite={
          screens.xl || screens.xxl
            ? productCategories?.length > 5
            : screens.md || screens.lg
            ? productCategories?.length > 4
            : productCategories?.length > 2
        }
        draggable={
          screens.xl || screens.xxl
            ? productCategories?.length > 5
            : screens.md || screens.lg
            ? productCategories?.length > 4
            : productCategories?.length > 2
        }
        swipe={
          screens.xl || screens.xxl
            ? productCategories?.length > 5
            : screens.md || screens.lg
            ? productCategories?.length > 4
            : productCategories?.length > 2
        }
        className="custom-carousel"
      >
        {productCategories?.map((block, index) => (
          <a
            key={index}
            href={`/products/${block?.slug}`}
            className="relative group p-3"
          >
            <div className="aspect-square w-full relative rounded-lg overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${block.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute w-full h-full bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white font-medium text-xl tracking-wide uppercase text-center">
                  {block?.short_name}
                </div>
              </div>

              <div className="absolute bottom-3 right-3 bg-white/80 rounded-full p-1 shadow-sm">
                <ChevronRightIcon className="text-[--yellow] h-5 w-5" />
              </div>
            </div>
          </a>
        ))}
      </Carousel>
    </section>
  );
}

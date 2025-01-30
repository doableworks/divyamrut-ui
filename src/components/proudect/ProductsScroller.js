"use client";
import React, { useState } from "react";
import Slider from "react-slick";
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
const { useBreakpoint } = Grid;

const ProductsScroller = ({ category }) => {
  const screens = useBreakpoint();
  const router = useRouter();
  // const [currentSlide, setCurrentSlide] = useState(0)

  var settings1 = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: true,
    // beforeChange: (oldIndex, newIndex) => setCurrentSlide(oldIndex),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1.05, // Increased for a better partial view
          slidesToScroll: 1,
          centerMode: false, // Centering the slide
          dots: false,
        },
      },
    ],
  };

  const handleMoveRoute = (cate) => {
    router.push(`/products-list/${cate.slug}`);
  };

  const infiniteData = Array.from(
    { length: 4 },
    () => category?.products
  ).flat();

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
          // autoplay
          dots={false}
          slidesToShow={
            screens.xl || screens.xxl ? 4 : screens.md || screens.lg ? 2 : 1
          }
        >
          {category &&
            category?.products.map(
              (product, index) =>
                product.is_published && (
                  <div
                    key={index + category?.name}
                    className={`h-full pl-[20px] `}
                  >
                    <Product
                      key={index}
                      item={product}
                      productCategory={
                        category.hasSubCategory && false
                          ? category.subCategory
                          : category.slug
                      }
                    />
                  </div>
                )
            )}
        </Carousel>
      </div>
      {/* <style jsx global>{`
        .custom-slick-slider1 .slick-slide {
          margin: 0 10px;
        }
      `}</style> */}
    </>
  );
};

export default ProductsScroller;

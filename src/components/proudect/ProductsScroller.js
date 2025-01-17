"use client";
import React from "react";
import Slider from "react-slick";
import Product from "@/components/proudect/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RightArrow} from "@/icon/icons";
import { useRouter } from "nextjs-toploader/app";

const ProductsScroller = ({ category }) => {
  const router = useRouter();

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
        },
      },
    ],
  };


  return (
    <>
      <div className="my-24">
        <div className={"flex flex-row justify-between items-center px-4"}>
        <h2 className="!text-left highlight-heading">
          {category.title}
        </h2>
        <span className={"section-content flex flex-row gap-2 cursor-pointer"}
        onClick={() => router.push(`/products/${category.route}/"sub-category"/`)}
        > VIEW ALL <RightArrow fill={"#64748b"} w={18} /> </span>
        </div>

        <Slider {...settings}>
          {category &&
            category?.products.map((product, index) => (
              <div key={index + category.category} className="px-4">
                <Product
                  key={index}
                  item={product}
                  productCategory={`${category.route}/sub-category`}
                />
              </div>
            ))}
        </Slider>
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


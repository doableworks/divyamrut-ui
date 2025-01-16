"use client";
import React from "react";
import Slider from "react-slick";
import Product from "@/components/proudect/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsScroller = ({ category }) => {
  // var settings = {
  //   arrows: true,
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  var settings = {
    infinite: true,
    lazyLoad: true,
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
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
      <div className="mb-24">
        <h2 className="!text-left highlight-heading">
          {category.title}
        </h2>
        <Slider {...settings}>
          {category &&
            category?.products.map((product, index) => (
              <div key={index + category.category} className="slick-slide px-4">
                <Product
                  key={index}
                  item={product}
                  productCategory={category.route}
                />
              </div>
            ))}
        </Slider>
      </div>
      <style jsx global>{`
        .custom-slick-slider1 .slick-slide {
          margin: 0 10px;
        }
      `}</style>
    </>
  );
};

export default ProductsScroller;


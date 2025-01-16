"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "nextjs-toploader/app";

const ProductSlider1 = ({categories}) => {
    const router = useRouter();

    var settings = {
        infinite: true,
        lazyLoad: true,
        // className: "center",
        // centerMode: true,
        // centerPadding: "0px",
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              dots: false,
            },
          },
        ],
      };

  return (
    <>
    <Slider {...settings} className="custom-slick-slider">
          {categories &&
            categories?.map((cate, index) => (
              <div key={index + cate.title} className="slick-slide cursor-pointer"
                onClick={() => router.push(`/products/${cate.route}`)}
              >
                <div className="ml-2 rounded-xl bg-text h-52 flex justify-center items-center px-4">
                  <p>{cate.title}</p>
                </div>
              </div>
            ))}
        </Slider>
        <style jsx global>{`
        .custom-slick-slider .slick-slide {
          margin: 0 10px;
        }
      `}</style>
    </>
  )
}

export default ProductSlider1
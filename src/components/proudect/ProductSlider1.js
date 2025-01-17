"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "nextjs-toploader/app";

const ProductSlider1 = ({categories}) => {
    const router = useRouter();

    var settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: true,
      // speed: 500,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 1,
        lazyLoad: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };

  return (
    <>
    <Slider key={"all_category"} {...settings}>
          {categories &&
            categories?.map((cate, index) => (
              <div key={index + cate.title} className="px-4 cursor-pointer"
                onClick={() => router.push(`/products/${cate.route}`)}
              >
                <div className="ml-2 rounded-xl bg-text h-52 flex justify-center items-center px-4">
                  <p>{cate.title}</p>
                </div>
              </div>
            ))}
        </Slider>
        {/* <style jsx global>{`
        .custom-slick-slider .slick-slide {
          margin: 0 10px;
        }
      `}</style> */}
    </>
  )
}

export default ProductSlider1
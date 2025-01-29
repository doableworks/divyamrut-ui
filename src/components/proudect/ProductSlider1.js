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
      // autoplay: true,
      // autoplaySpeed: 3000,
      arrows: false,
      infinite: true,
      // speed: 500,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 1,
        lazyLoad: true,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false,
            },
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };

      const handleMoveRoute = (cate)=>{

        if(cate.hasSubCategory){
          router.push(`/products/${cate.slug}`)
        }
        else{
          router.push(`/products-list/${cate.slug}`)
        }
      }

  return (
    <>
    <Slider key={"all_category"} {...settings}>
          {categories &&
            categories?.map((cate, index) => (
              <div key={index + cate.name} className="cursor-pointer overflow-hidden"
                onClick={() => handleMoveRoute(cate)}
              >
                <div className="ml-2 rounded-xl bg-text h-36 md:h-52 xl:h-36  flex justify-center items-center px-4"
                style={{
                  backgroundImage:`url(${cate.image})`
                }}
                >
                  <p className='break-all'>{cate.name}</p>
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
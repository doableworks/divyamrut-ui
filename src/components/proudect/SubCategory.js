"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./subcategory.css";

const SubCategory = ({ categorySlug, categories, OurIconicProduct }) => {
  const router = useRouter();
  const isSticky = useSelector((state) => state.product.isSticky);

  var settings1 = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15px",
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
          dots: false,
        },
      },
      //   {
      //     breakpoint: 1100,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       centerMode: false,
      //       dots: false,
      //     },
      //   },
    ],
  };

  return (
    <div className="">
      {/* <h2 className="!text-center highlight-heading">
        Discover Our Category Range
      </h2> */}

      {/* {isSticky &&
        <div
          // id="myElementId"
          className={`sticky bg-FFEEE2 top-0 z-20 flex justify-center gap-10 md:gap-8 overflow-x-scroll`}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() =>
                router.push(`/products/${categorySlug}/${category.route}`)
              }
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-text overflow-hidden shadow-md`}
              >
                <img
                  src={category.imgSrc}
                  // alt={category.label}
                  className="h-full object-cover"
                />
              </div>
              <p className="section-title mt-2 !text-center">
                {category.label}
              </p>
            </div>
          ))}
        </div>
      } */}

      {/* <div
        id="myElementId"
        className={`relative top-0 flex flex-wrap justify-center gap-4 md:gap-8`}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              router.push(`/products/${categorySlug}/${category.route}`)
            }
          >
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-text overflow-hidden shadow-md`}
            >
              <img
                src={category.imgSrc}
                // alt={category.label}
                className="h-full object-cover"
              />
            </div>
            <p className="section-title mt-2 !text-center">{category.label}</p>
          </div>
        ))}
      </div> */}

      {/* <div className="pt-12 md:px-6">
        <h2 className="sub_heading !text-left mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.slice(0, 2).map((category, index) => (
            <div key={index} className="relative group">
              <div
                className="sub_top_second relative  group overflow-hidden shadow-md bg-white cursor-pointer"
                onClick={() =>
                  router.push(`/products/${categorySlug}/${category.route}`)
                }
              >
                <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            />
                <div className="absolute w-full md:w-auto  bottom-0 right-0 text-right">
                  <button
                    className="site-button-primary w-full !px-5 !rounded-none"
                    onClick={() =>
                      router.push(`/products/${categorySlug}/${category.route}`)
                    }
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="section-title text-center">{category.title}</h3>
                <p className="section-content text-center mt-2">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="py-4 md:px-6">
      <h2 className="sub_heading !text-left mb-8">Featured Categories</h2>
        <Slider key={"sub-category-slider"} {...settings1}>
          {categories &&
            categories.map((category, index) => (
              <div key={index} className="relative group px-[5px]">
                <div
                  className="sub_top_thrid relative group overflow-hidden shadow-md bg-white cursor-pointer"
                  onClick={() =>
                    router.push(`/products-list/${category.route}`)
                  }
                >
                  <div className="absolute bottom-0 right-0 text-right">
                    <button
                      className="site-button-primary !px-5 !rounded-none"
                      onClick={() =>
                        router.push(
                          router.push(`/products-list/${category.route}`)
                        )
                      }
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="section-title text-center">
                    {category.title}
                  </h3>
                  <p className="section-content text-center mt-2">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div className="md:px-6">
        <h2 className="sub_heading !text-left mb-8">similar Products</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {OurIconicProduct.slice(0, 2).map((category, index) => (
            <div key={index} className="relative group">
              <div
                className="sub_top_second relative  group overflow-hidden shadow-md bg-white cursor-pointer"
                onClick={() =>
                  router.push(`/products-list/${category.route}`)
                }
              >
                {/* <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            /> */}
                <div className="absolute w-full md:w-auto  bottom-0 right-0 text-right">
                  <button
                    className="site-button-primary w-full !px-5 !rounded-none"
                    onClick={() =>
                      router.push(`/products-list/${category.route}`)
                    }
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="section-title text-center">{category.title}</h3>
                <p className="section-content text-center mt-2">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h1 className="highlight-heading">What is Lorem Ipsum?</h1>
        <p className="section-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default SubCategory;

"use client";
import ProductBanner from "@/components/common/ProductBanner";
import React from "react";
import ProductsScroller from "@/components/common/ProductsScroller";
import Slider from "react-slick";
import Product from "@/components/proudect/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "nextjs-toploader/app";


const categories = [
  {
    route: "kansa-vati-foot-massage-kit",
    title: "Kansa Vati Foot Massage Kit",
    products: [  {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    }]
  },
  {
    route: "meditation-puja-asans",
    title: "Meditation/Puja Asans",
    products: [  {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    }]
  },
  {
    route: "meditation-puja-shawls",
    title: "Meditation/Puja Shawls",
    products: [  {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    }]
  },
  {
    route: "chandan-kumkum-bindi-kit",
    title: "Chandan-Kumkum Bindi Kit",
    products: [  {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    }]
  },
  {
    route: "bath-aura-cleansing-salt",
    title: "Bath/Aura Cleansing Salt",
    products: [  {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    }]
  },
  {
    route: "diya",
    title: "Diya",
    products: [  {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    }]
  },
];

const page = () => {
  const router = useRouter();
  const heading = "Bath/Aura Cleansing Salt";
  const subHeading = "Trusted by millions, validated by you.";

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
    <div className="mt-[11rem] h-screen">
      <div className="relative h-1/2">
        <ProductBanner heading={heading} subHeading={subHeading} />
      </div>
      <div className="mx-auto w-[90%] py-10 md:py-20">
        <Slider {...settings} className="custom-slick-slider">
          {categories &&
            categories?.map((cate, index) => (
              <div className="slick-slide cursor-pointer"
              onClick={() => router.push(`/products/${cate.route}`)}
              >
                <div key={index + cate.title} className="ml-2 rounded-xl bg-text h-52 flex justify-center items-center">
                  <p>{cate.title}</p>
                </div>
              </div>
            ))}
        </Slider>
        <div className="relative h-1/2">
        {categories.map((category, index) => (
          <ProductsScroller key={index + category.title} category={category} />
        ))}
        </div>
      </div>
      <style jsx global>{`
        .custom-slick-slider .slick-slide {
          margin: 0 10px;
        }
      `}</style>
    </div>
  );
};

export default page;

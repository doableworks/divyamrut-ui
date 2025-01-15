"use client";
import ProductBanner from "@/components/common/ProductBanner";
import React from "react";
import ProductsScroller from "@/components/common/ProductsScroller";
import Slider from "react-slick";
import Product from "@/components/proudect/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    route: "kansa-vati-foot-massage-kit",
    title: "Kansa Vati Foot Massage Kit",
    products: [
      {
        title: "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
        category: "Life Balance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
        category: "Natural Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
        category: "Ayurveda Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
    ],
  },
  {
    route: "meditation-puja-asans",
    title: "Meditation/Puja Asans",
    products: [
      {
        title: "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
        category: "Life Balance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
        category: "Natural Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
        category: "Ayurveda Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
    ],
  },

  {
    route: "meditation-puja-shawls",
    title: "Meditation/Puja Shawls",
    products: [
      {
        title: "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
        category: "Life Balance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
        category: "Natural Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
        category: "Ayurveda Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
    ],
  },
  {
    route: "chandan-kumkum-bindi-kit",
    title: "Chandan-Kumkum Bindi Kit",
    products: [
      {
        title: "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
        category: "Life Balance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
        category: "Natural Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
        category: "Ayurveda Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
    ],
  },
  {
    route: "bath-aura-cleansing-salt",
    title: "Bath/Aura Cleansing Salt",
    products: [
      {
        title: "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
        category: "Life Balance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
        category: "Natural Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
        category: "Ayurveda Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
    ],
  },
  {
    route: "diya",
    title: "Diya",
    products: [
      {
        title: "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
        category: "Life Balance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
        category: "Natural Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
      {
        title:
          "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
        category: "Ayurveda Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/ayurvedic-supplement.jpg",
      },
    ],
  },
];

const page = () => {
  const heading = "Bath/Aura Cleansing Salt";
  const subHeading = "Trusted by millions, validated by you.";

  var settings = {
    infinite: true,
    lazyLoad: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 6,
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
          centerMode: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mt-[10rem] h-screen">
      <div className="relative h-1/2">
        <ProductBanner heading={heading} subHeading={subHeading} />
      </div>
      <div className=" mx-auto w-[90%] py-10 md:py-20">
        <Slider {...settings} className="custom-slick-slider">

          {categories &&
            categories?.map((cate, index) => (
              <div className="slick-slide">
                <div key={index + cate.title} className="ml-2 rounded-xl bg-text h-32 flex justify-center items-center">
                  <p>{cate.title}</p>
                </div>
              </div>
            ))}
        </Slider>

        {/* {categories.map((category, index) => (
          <ProductsScroller key={index + category.title} category={category} />
        ))} */}
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

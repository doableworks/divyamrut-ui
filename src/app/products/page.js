import MainBanner from "@/components/common/MainBanner";
import React from "react";
import ProductsScroller from "@/components/common/ProductsScroller";

const categories = [
  {
    category: "kansa-vati-foot-massage-kit",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
    ],
  },
  {
    category: "meditation-puja-asans",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
    ],
  },

  {
    category: "meditation-puja-shawls",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
    ],
  },
  {
    category: "chandan-kumkum-bindi-kit",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
    ],
  },
  {
    category: "bath-aura-cleansing-salt",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
    ],
  },
  {
    category: "diya",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
        category: "Ayurvedic Herbs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
        category: "Holistic Health",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
      {
        title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
        category: "Daily Wellness",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        date: "August 6, 2024",
        comments: "No Comments",
        image:
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
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
          "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
      },
    ],
  },
];

const page = () => {
  const heading = "Bath/Aura Cleansing Salt";
  const subHeading = "Trusted by millions, validated by you.";

  return (
    <>
      <MainBanner heading={heading} subHeading={subHeading} />
      <div className=" mx-auto w-[90%] py-10 md:py-20">
        {categories.map((category, index) => (
          <ProductsScroller key={index + category.title} category={category} />
        ))}
      </div>
    </>
  );
};

export default page;

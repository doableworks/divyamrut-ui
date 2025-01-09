// import MainBanner from "@/components/common/MainBanner";
// import React from "react";
// import ProductsScroller from "@/components/common/ProductsScroller";
// // import Product from "@/components/product/Product";
// import Product from "../../../components/proudect/Product";

// const categories = [
//   {
//     route: "kansa-vati-foot-massage-kit",
//     title: "Kansa Vati Foot Massage Kit",
//     products: [
//       {
//         title:
//           "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
//         category: "Life Balance",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
//         category: "Ayurvedic Herbs",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
//         category: "Natural Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
//         category: "Holistic Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
//         category: "Daily Wellness",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
//         category: "Ayurveda Basics",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//     ],
//   },
//   {
//     route: "meditation-puja-asans",
//     title: "Meditation/Puja Asans",
//     products: [
//       {
//         title:
//           "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
//         category: "Life Balance",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
//         category: "Ayurvedic Herbs",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
//         category: "Natural Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
//         category: "Holistic Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
//         category: "Daily Wellness",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
//         category: "Ayurveda Basics",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//     ],
//   },

//   {
//     route: "meditation-puja-shawls",
//     title: "Meditation/Puja Shawls",
//     products: [
//       {
//         title:
//           "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
//         category: "Life Balance",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
//         category: "Ayurvedic Herbs",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
//         category: "Natural Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
//         category: "Holistic Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
//         category: "Daily Wellness",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
//         category: "Ayurveda Basics",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//     ],
//   },
//   {
//     route: "chandan-kumkum-bindi-kit",
//     title: "Chandan-Kumkum Bindi Kit",
//     products: [
//       {
//         title:
//           "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
//         category: "Life Balance",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
//         category: "Ayurvedic Herbs",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
//         category: "Natural Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
//         category: "Holistic Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
//         category: "Daily Wellness",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
//         category: "Ayurveda Basics",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//     ],
//   },
//   {
//     route: "bath-aura-cleansing-salt",
//     title: "Bath/Aura Cleansing Salt",
//     products: [
//       {
//         title:
//           "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
//         category: "Life Balance",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
//         category: "Ayurvedic Herbs",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
//         category: "Natural Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
//         category: "Holistic Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
//         category: "Daily Wellness",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
//         category: "Ayurveda Basics",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//     ],
//   },
//   {
//     route: "diya",
//     title: "Diya",
//     products: [
//       {
//         title:
//           "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
//         category: "Life Balance",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
//         category: "Ayurvedic Herbs",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
//         category: "Natural Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
//         category: "Holistic Health",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
//         category: "Daily Wellness",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//       {
//         title:
//           "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
//         category: "Ayurveda Basics",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//         date: "August 6, 2024",
//         comments: "No Comments",
//         image:
//           "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//       },
//     ],
//   },
// ];

// const products = [
//   {
//     title:
//       "Balancing Your Life: Ayurveda Tips from PranaVeda PranaVeda Experts",
//     category: "Life Balance",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//     date: "August 6, 2024",
//     comments: "No Comments",
//     image:
//       "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//   },
//   {
//     title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
//     category: "Ayurvedic Herbs",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//     date: "August 6, 2024",
//     comments: "No Comments",
//     image:
//       "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//   },
//   {
//     title:
//       "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
//     category: "Natural Health",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//     date: "August 6, 2024",
//     comments: "No Comments",
//     image:
//       "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//   },
//   {
//     title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
//     category: "Holistic Health",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//     date: "August 6, 2024",
//     comments: "No Comments",
//     image:
//       "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//   },
//   {
//     title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
//     category: "Daily Wellness",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//     date: "August 6, 2024",
//     comments: "No Comments",
//     image:
//       "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//   },
//   {
//     title: "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
//     category: "Ayurveda Basics",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
//     date: "August 6, 2024",
//     comments: "No Comments",
//     image:
//       "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//   },
// ];

// const page = () => {
//   const heading = "Bath/Aura Cleansing Salt";
//   const subHeading = "Trusted by millions, validated by you.";

//   return (
//     <>
//       <MainBanner heading={heading} subHeading={subHeading} />
//       <div className=" mx-auto w-[90%] py-10 md:py-20">
//         {/* {categories.map((category, index) => (
//           <ProductsScroller key={index + category.title} category={category} />
//         ))} */}

//         <div className="flex  flex-wrap gap-2">
//           {products.map((category, index) => (
//             <Product {...category} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;


import MainBanner from '@/components/common/MainBanner'
import React from 'react'
import Product from "@/components/proudect/Product"

const products = [
    {
      "title": "Balancing Your Life: Ayurveda Tips from PranaVeda Experts",
      "category": "Life Balance",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
      "category": "Ayurvedic Herbs",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
      "category": "Natural Health",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "How PranaVeda Helps You Achieve Holistic Health and Vitality",
      "category": "Holistic Health",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
      "category": "Daily Wellness",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
      "category": "Ayurveda Basics",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    }
  ]
  

const page = ({params}) => {

  const heading = params["product-name"] 
  const subHeading = "Products"

  return (
    <>
      <MainBanner heading={heading} subHeading={subHeading} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-12 py-20 md:px-20 md:py-28">
          {products.map((product, index) => (
          <Product key={index} {...product} route={params["product-name"]} />
          ))}
      </div>
    </>
  )
}

export default page

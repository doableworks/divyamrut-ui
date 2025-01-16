"use client";
import MainBanner from "@/components/common/MainBanner";
import React from "react";
import Product from "@/components/proudect/Product";
import SubCategory from "@/components/proudect/SubCategory";
import ProductBanner from "@/components/common/ProductBanner";
import { useRouter } from "nextjs-toploader/app";


// const getCategoryProducts = async (params) => {
//   try {
//     const res = await fetch(
//       process.env.API_URL + `product/products/?category=${params}`
//     );
//     if (res.status == 200) {
//       const data = await res.json();
//       return data?.results;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log("getTypes error", error);
//     return null;
//   }
// };

const page = ({ params }) => {
   const router = useRouter();
  // const heading = params["product-categ"];
  // const subHeading = "Products";
  // const products = await getCategoryProducts(params["products-category"]);

  const categories = [
    {
      label: "item1",
        title: "Sub Category1",
        route: "/sub-category1",
        description:
            "Award-winning skincare face creams made using time-tested recipes and superior Ayurvedic herbs.",
        image: "/images/facial-moisturisers.jpg",
    },
    {
      label: "item2",
        title: "Sub Category2",
        route: "/sub-category2",
        description:
            "A gently purifying cleanse to start off your regime! Carefully crafted with specific ingredients to address your skin's unique needs.",
        image: "/images/facial-cleansers.jpg",
    },
    {
      label: "item3",
        title: "Sub Category3",
        route: "/sub-category3",
        description:
            "Experience smooth & conditioned lips daily! Discover formulas bursting with luscious flavours and moisture-boosting formulas.",
        image: "/images/lip-care.jpg",
    },
    {
      label: "item4",
        title: "Sub Category4",
        route: "/sub-category4",
        description:
            "Multi-tasking Ubtans that are hand-pounded with sun-dried herbs, flowers and nuts, with each variant having targeted benefits for the skin.",
        image: "/images/ubtans-exfoliators.jpg",
    },
    {
      label: "item5",
        title: "Sub Category5",
        route: "/sub-category5",
        description:
            "Traditional treatment masques to revitalize, renew and refine the skin. Set aside 10 minutes for a quick pick-me-up!",
        image: "/images/facial-masques.jpg",
    },
    {
      label: "item6",
        title: "Sub Category6",
        route: "/sub-category6",
        description:
            "Intensely hydrating skin products made with pure steam distilled floral waters that leave the skin fresh and supple throughout the day!",
        image: "/images/facial-mists.jpg",
    },
];


  return (
    <div className="h-screen">
      <div className="relative h-1/2">
        <ProductBanner />
      </div>

      <div className="mx-auto w-[90%] py-10 md:py-20">
        <h2 className="!text-center highlight-heading">
          Discover Our Category Range
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer"
            onClick={() => router.push(`/products/${params["products-category"]}/${category.route}`)}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-text overflow-hidden shadow-md">
                <img
                  src={category.imgSrc}
                  // alt={category.label}
                  className="h-full object-cover"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-medium mt-2 text-center">
                {category.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[5rem]">
        <SubCategory categorySlug={params["products-category"]} categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default page;

"use client"
import MainBanner from "@/components/common/MainBanner";
import React from "react";
import Product from "@/components/proudect/Product";
import SubCategory from "@/components/proudect/SubCategory";

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
    // const heading = params["product-categ"];
    // const subHeading = "Products";
    // const products = await getCategoryProducts(params["products-category"]);

    const products = [
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "USD",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "USD",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "USD",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "USD",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "USD",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "USD",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "USD",
            image:
                "/asset/home/natural-health-support.jpg",
        },
    ]

    return (
        <div className="mx-auto w-[90%] py-10 md:py-20">
            {products && products.length > 0 ? (
                <div className="mt-[11rem] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            item={product}
                            productCategory={`${params["products-category"]}/${params["sub-category"]}`}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-full py-32">
                    <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
                        No Products Found. Try again latter
                    </p>
                </div>
            )}
        </div>
    );
};

export default page;

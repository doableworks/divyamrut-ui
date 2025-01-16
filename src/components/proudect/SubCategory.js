"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";

const SubCategory = ({categorySlug}) => {
    const router = useRouter();

    const categories = [
        {
            title: "Sub Category1",
            route: "/sub-category1",
            description:
                "Award-winning skincare face creams made using time-tested recipes and superior Ayurvedic herbs.",
            image: "/images/facial-moisturisers.jpg",
        },
        {
            title: "Sub Category2",
            route: "/sub-category2",
            description:
                "A gently purifying cleanse to start off your regime! Carefully crafted with specific ingredients to address your skin's unique needs.",
            image: "/images/facial-cleansers.jpg",
        },
        {
            title: "Sub Category3",
            route: "/sub-category3",
            description:
                "Experience smooth & conditioned lips daily! Discover formulas bursting with luscious flavours and moisture-boosting formulas.",
            image: "/images/lip-care.jpg",
        },
        {
            title: "Sub Category4",
            route: "/sub-category4",
            description:
                "Multi-tasking Ubtans that are hand-pounded with sun-dried herbs, flowers and nuts, with each variant having targeted benefits for the skin.",
            image: "/images/ubtans-exfoliators.jpg",
        },
        {
            title: "Sub Category5",
            route: "/sub-category5",
            description:
                "Traditional treatment masques to revitalize, renew and refine the skin. Set aside 10 minutes for a quick pick-me-up!",
            image: "/images/facial-masques.jpg",
        },
        {
            title: "Sub Category6",
            route: "/sub-category6",
            description:
                "Intensely hydrating skin products made with pure steam distilled floral waters that leave the skin fresh and supple throughout the day!",
            image: "/images/facial-mists.jpg",
        },
    ];

    return (
        <div className="py-12 px-6 ">
            <h2 className="text-3xl font-semibold text-center mb-8">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative group"
                    >
                        <div className="relative group overflow-hidden rounded-lg shadow-md bg-white min-h-[350px] cursor-pointer"
                             onClick={() => router.push(`/products/${categorySlug}/${category.route}`)}
                        >
                            {/* <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            /> */}
                            <div className="absolute bottom-0 right-0 text-right">
                                <button className="site-button-primary h-[60px]"
                                    onClick={() => router.push(`/products/${categorySlug}/${category.route}`)}
                                >Show Now</button>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium text-center">{category.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubCategory

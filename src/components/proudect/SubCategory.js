"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";

const SubCategory = ({categorySlug, categories}) => {
    const router = useRouter();

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
                                <button className="site-button-primary !px-5 !rounded-none"
                                    onClick={() => router.push(`/products/${categorySlug}/${category.route}`)}
                                >Shop Now</button>
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

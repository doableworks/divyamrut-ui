"use client";
import React from 'react'
import Product from "@/components/proudect/Product";
import FilterSection from "@/components/proudect/FilterSection";

const ProductList = ({products, params}) => {
    return (
        <div className="flex flex-row">
            <div className="hidden md:block w-[15%]" >
                <FilterSection />
            </div>
            <div className="w-full md:w-[85%] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-2 md:gap-4 md:pl-8 md:border-l border-gray-200">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        item={product}
                        productCategory={`${params["products-category"]}/${params["sub-category"]}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList
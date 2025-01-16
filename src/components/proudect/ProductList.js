"use client";
import React from 'react'
import Product from "@/components/proudect/Product";
import FilterSection from "@/components/proudect/FilterSection";

const ProductList = ({products, params}) => {
    return (
        <div className="flex flex-row">
            <div className="w-[15%]" >
                <FilterSection />
            </div>

            <div className="w-[85%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 pl-8 border-l border-gray-200">
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
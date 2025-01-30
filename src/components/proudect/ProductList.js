"use client";
import React from "react";
import Product from "@/components/proudect/Product";
import FilterSection from "@/components/proudect/FilterSection";

const ProductList = ({ products, params }) => {

  return (
    <div className="">
      {/* <div className="hidden md:block w-[15%]" >
                <FilterSection />
            </div> */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-2 md:gap-4">
        {products?.length > 0 ? (
          <>
            {products?.map(
              (product, index) =>
                product.is_published && (
                  <Product
                    key={index}
                    item={product}
                    productCategory={`${params["sub-category"]}`}
                  />
                )
            )}
          </>
        ) : (
          <p className="section-content mb-4">No products Found now.</p>
        )}
      </div>

      <div className="mt-20">
        <h1 className="highlight-heading">What is Lorem Ipsum?</h1>
        <p className="section-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default ProductList;

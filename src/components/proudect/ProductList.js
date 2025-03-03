"use client";
import React from "react";
import Product from "@/components/proudect/Product";
import FilterSection from "@/components/proudect/FilterSection";
import { useSession } from "next-auth/react";
import Divider from "../common/Divider";

const ProductList = ({ products, params }) => {
  const { data: session } = useSession();

  return (
    <div>
      <div className="md:hidden">
        <h1 className="highlight-heading !capitalize !text-left">
          {params["sub-category"]}
        </h1>
        <Divider className="mb-10 mt-4" />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {products?.length > 0 ? (
          <>
            {products?.map(
              (product, index) =>
                product.is_published && (
                  <Product
                    key={index}
                    item={product}
                    productCategory={`${params["sub-category"]}`}
                    session={session}
                  />
                )
            )}
          </>
        ) : (
          <p className="section-content mb-4">No products Found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

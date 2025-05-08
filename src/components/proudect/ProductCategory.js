import React from "react";
import ProductList from "./ProductList";
import Link from "next/link";

const ProductCategory = ({ data, params }) => {
  return (
    <div className="common_page_width">
      {data && data.products.length > 0 ? (
        <>
          <ProductList products={data.products} params={params} />
          <h1 className="highlight-heading !mt-10">{data?.name}</h1>
          <p
            className="detail-text"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </>
      ) : (
        <div className="w-full py-32 flex flex-col items-center justify-center gap-5">
          <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
            No Products Found. Coming soon
          </p>
          <Link
            href="/products"
            className="site-button-primary !m-0 w-[-webkit-fill-available] capitalize"
          >
            <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-white text-center">
              Browse products
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;

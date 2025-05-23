"use client";
import React from "react";
import Link from "next/link";
import ProductOverviewRedesign from "./ProductOverviewRedesign";
import DataNotFound from "../errors/DataNotFound";
import { NoImageAvailabe } from "@/contants/contants";
import "@/styles/rich-tag-styles.css";

const ProductCategoryRedesign = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={data?.image || NoImageAvailabe}
          alt="Shawl"
          className="w-full h-auto aspect-[168/209] 700:hidden object-cover"
          loading="lazy"
        />

        <img
          src={data?.image || NoImageAvailabe}
          alt="Shawl"
          className="w-full h-auto hidden 700:block lg:aspect-[430/120] object-cover"
          loading="lazy"
        />

        <div className="bg-black bg-opacity-10 w-full absolute top-0 left-0 h-full flex flex-col items-center justify-center p-8">
          <div className=" text-white max-w-4xl text-center">
            <h1 className="highlight-heading !text-voilet !mb-0">
              {data?.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="common_page_width">
        <p
          className="rich-content text-center "
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></p>

        {data?.collections && data.collections.length > 0 ? (
          data.collections.map((products, index) => (
            <div key={index}>
              <h2 className="highlight-heading">{products?.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: products?.description1,
                }}
                className="rich-content text-center"
              />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
                {products?.products?.map((item, index) => (
                  <ProductOverviewRedesign key={index} item={item} />
                ))}
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: products?.description2,
                }}
                className="rich-content text-center"
              />

              <hr className="my-6" />
            </div>
          ))
        ) : (
          <DataNotFound
            title="No Collections Found"
            description="There are no collections available right now. Please check back later or explore other products."
            className="min-h-[300px]"
          >
            <Link
              href="/products"
              className="site-button-secondary-outlined !mt-0"
            >
              Explore Products
            </Link>
          </DataNotFound>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryRedesign;

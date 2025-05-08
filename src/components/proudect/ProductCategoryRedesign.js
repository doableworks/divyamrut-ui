"use client";
import useImageSrcSet from "@/hooks/useImageSrcSet";
import React from "react";
import Link from "next/link";
import ProductOverviewRedesign from "./ProductOverviewRedesign";
import DataNotFound from "../errors/DataNotFound";

const ProductCategoryRedesign = ({ data, params }) => {
  const imageUrl = data?.image || NoImageAvailabe;
  const largeImage =
    "https://www.espritdelhimalaya.com/cdn/shop/files/lakshmi_light_yellow_6a.jpg";

  const smallImageSet = useImageSrcSet(imageUrl);
  const largeImageSet = useImageSrcSet(largeImage);

  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={imageUrl}
          // srcSet={smallImageSet}
          // sizes="(max-width: 768px) 100vw, 600px"
          alt="Shawl"
          className="w-full h-auto aspect-[168/209] 700:hidden object-cover"
          loading="lazy"
        />

        <img
          src={largeImage}
          // srcSet={largeImageSet}
          // sizes="(max-width: 600px) 100vw, 600px"
          alt="Shawl"
          className="w-full h-auto hidden 700:block lg:aspect-[430/120] object-cover"
          loading="lazy"
        />

        <div className="w-full absolute top-0 left-0 h-full flex flex-col items-center justify-center p-8">
          <div className=" text-white max-w-4xl text-center">
            <h1 className="highlight-heading !text-voilet !mb-0">
              {data?.name}
            </h1>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>
          </div>
        </div>
      </div>

      <div className="common_page_width">
        {data?.products && data.products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {data?.products.map((item, index) => (
              <ProductOverviewRedesign key={index} item={item} />
            ))}
          </div>
        ) : (
          <DataNotFound
            title="No Products Found"
            description="There are no products available in this category right now. Please check back later or explore other categories."
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

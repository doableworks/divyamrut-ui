import MainBanner from "@/components/common/MainBanner";
import React from "react";
import Product from "@/components/proudect/Product";

const getCategoryProducts = async (params) => {
  try {
    const res = await fetch(
      process.env.API_URL +
        `product/products/?category=${params}/`
    );

    if (res.status == 200) {
      const data = await res.json();
      return data.results;
    } else {
      return null;
    }
  } catch (error) {
    console.log("getTypes error", error);
  }
};

const page = async ({ params }) => {
  const heading = params["product-name"];
  const subHeading = "Products";
  const products = await getCategoryProducts(params);

  return (
    <>
      <MainBanner heading={heading} subHeading={subHeading} />
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-12 py-20 md:px-20 md:py-28">
          {products.map((product, index) => (
            <Product
              key={index}
              {...product}
              category={params["product-name"]}
              products={products}
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-32">
          <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
            No Products Found. Try latter
          </p>
        </div>
      )}
    </>
  );
};

export default page;

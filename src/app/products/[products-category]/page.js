import MainBanner from "@/components/common/MainBanner";
import React from "react";
import Product from "@/components/proudect/Product";
import SubCategory from "@/components/proudect/SubCategory";
import ProductBanner from "@/components/common/ProductBanner";


// const getCategoryProducts = async (params) => {
//   try {
//     const res = await fetch(
//       process.env.API_URL + `product/products/?category=${params}`
//     );
//     if (res.status == 200) {
//       const data = await res.json();
//       return data?.results;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log("getTypes error", error);
//     return null;
//   }
// };

const page = async ({ params }) => {
  // const heading = params["product-categ"];
  // const subHeading = "Products";
  // const products = await getCategoryProducts(params["products-category"]);


  return (
    <div className="mt-[11rem] h-screen">
      <div className="relative h-1/2">
        <ProductBanner />
      </div>
      <div className="mx-auto w-[90%] py-10 md:py-20">
        <SubCategory categorySlug={params["products-category"]} />
      </div>
    </div>
  );
};

export default page;

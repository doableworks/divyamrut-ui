import MainBanner from "@/components/common/MainBanner";
import React from "react";
import Product from "@/components/proudect/Product";
import SubCategory from "@/components/proudect/SubCategory";

const getCategoryProducts = async (params) => {
  try {
    const res = await fetch(
      process.env.API_URL + `product/products/?category=${params}`
    );
    if (res.status == 200) {
      const data = await res.json();
      return data?.results;
    } else {
      return null;
    }
  } catch (error) {
    console.log("getTypes error", error);
    return null;
  }
};

const page = async ({ params }) => {
  // const heading = params["product-categ"];
  // const subHeading = "Products";
  // const products = await getCategoryProducts(params["products-category"]);

  const products = [
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
    {
      title:
        "Natural Health Supplements",
      slug: "product-massage-kit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      date: "August 6, 2024",
      price:"10.00",
      currency:"USD",
      image:
        "/asset/home/natural-health-support.jpg",
    },
  ]

  console.log("ddddd", params["products-category"])

  const hasSubcategory = params["products-category"] == "meditation-pooja-shawls"

  return (
    <>
      {/* <MainBanner heading={heading} subHeading={subHeading} /> */}

      {hasSubcategory ?
      <div className="mt-[11rem]">
        <SubCategory />
        </div>
      : products && products.length > 0 ? (
        <div className="mt-[11rem] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-12 py-20 md:px-20 md:py-28">
          {products.map((product, index) => (
            <Product
              key={index}
              item={product}
              productCategory={params["products-category"]}
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-32">
          <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
            No Products Found. Try again latter
          </p>
        </div>
      )}
    </>
  );
};

export default page;

import ProductList from "@/components/proudect/ProductList";

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

const page = ({ params }) => {
    // const heading = params["product-categ"];
    // const subHeading = "Products";
    // const products = await getCategoryProducts(params["products-category"]);

    const products = [
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "Rupees",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "Rupees",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "Rupees",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "Rupees",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "Rupees",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "Rupees",
            image:
                "/asset/home/natural-health-support.jpg",
        },
        {
            title:
                "Natural Health Supplements",
            slug: "product-details",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "August 6, 2024",
            price: "10.00",
            currency: "Rupees",
            image:
                "/asset/home/natural-health-support.jpg",
        },
    ]

    return (
        <div className="common_page_width">
            {products && products.length > 0 ? (
                <ProductList products={products} params={params} />
            ) : (
                <div className="w-full py-32">
                    <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
                        No Products Found. Try again latter
                    </p>
                </div>
            )}
        </div>
    );
};

export default page;

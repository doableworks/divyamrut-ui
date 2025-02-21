import ProductList from "@/components/proudect/ProductList";
import Link from "next/link";

const getCategoryProducts = async (link) => {
  try {
    const temp = link.split("-%40-");

    if (temp.length > 1) {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/product/${temp[0]}/${temp[1]}/`,
        {
          next: { revalidate: 60 },
        }
      );
      if (res.status == 200) {
        const data = await res.json();
        return data?.products;
      }
    } else {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/product/category/${link}/`,
        {
          next: { revalidate: 60 },
        }
      );
      if (res.status == 200) {
        const data = await res.json();
        return data?.products;
      }
    }
  } catch (error) {
    console.log("getTypes error", error);
    return null;
  }
};

const page = async ({ params }) => {
  const products = await getCategoryProducts(params["sub-category"]);

  return (
    <div className="common_page_width">
      {products && products.length > 0 ? (
        <ProductList products={products} params={params} />
      ) : (
        <div className="w-full py-32 flex flex-col items-center justify-center gap-5">
          <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
            No Products Found. Coming soon 
          </p>
          <Link href="/products" className="site-button-primary w-fit !m-0 w-[-webkit-fill-available] capitalize">
            <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-white text-center">
              Browse products
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;

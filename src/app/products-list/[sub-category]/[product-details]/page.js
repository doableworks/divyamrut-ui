import ProductDetail from "@/components/proudect/ProductDetail";
import Link from "next/link";
import RelatedProducts from "@/components/proudect/RelatedProducts";

const getProdectDetails = async (params) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/product/detail/${params}/`,
      {
        next: { revalidate: 60 },
      }
    );
    if (res.status == 200) {
      const data = await res.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("getTypes error", error);
    return null;
  }
};

const page = async ({ params }) => {
  const item = await getProdectDetails(params["product-details"]);

  return (
    <div>
      {item ? (
        <div className="common_page_width relative z-20 ">
          <ProductDetail item={item} />
          {item?.related_products?.length > 0 && (
            <RelatedProducts slidesData={item?.related_products} />
          )}
        </div>
      ) : (
        <div className="w-full py-32 flex flex-col items-center justify-center gap-5">
          <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
            No Product Found.
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

export default page;

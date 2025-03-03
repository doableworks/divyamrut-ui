import ProductDetail from "@/components/proudect/ProductDetail";
import RelatedProducts from "@/components/proudect/RelatedProducts";
import { notFound } from "next/navigation"; 

const getProductDetails = async (params) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/product/detail/${params}/`,
      {
        next: { revalidate: 60 },
      }
    );

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log("getProductDetails error", error);
    return null;
  }
};

const Page = async ({ params }) => {
  const item = await getProductDetails(params["product-details"]);

  if (!item) {
    notFound();
    return null;
  }

  return (
    <div className="common_page_width relative z-20">
      <ProductDetail item={item} />
      {item?.related_products?.length > 0 && (
        <RelatedProducts slidesData={item?.related_products} />
      )}
    </div>
  );
};

export default Page;

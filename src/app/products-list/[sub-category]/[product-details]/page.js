import ProductDetail from "@/components/proudect/ProductDetail";
import RelatedProducts from "@/components/proudect/RelatedProducts";
import { notFound } from "next/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

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

export async function generateMetadata({ params }) {
  const pageDetails = await getProductDetails(`${params["sub-category"]}/${params["product-details"]}`)

  if (!pageDetails) return { title: "Therapy Not Found" };

  return {
    title: pageDetails.seo_title ,
    description: pageDetails.seo_description,
    datePublished: pageDetails.created,
    dateModified: pageDetails.updated,
    robots: "index, nofollow",
    author: "Nityanava",
    seo_keywords: pageDetails.seo_keywords,
    openGraph: {
      type: "article",
      title: pageDetails.seo_title,
      description: pageDetails.seo_description,
      images: [
        {
          url: pageDetails.image,
          width: 1200,
          height: 630,
          alt: pageDetails.name,
        },
      ],
      url: `${siteUrl}/products-list//${params["sub-category"]}/${params["product-details"]}`,
      site_name: "Nityanava",
    },
    twitter: {
      card: "summary_large_image",
      site: "",
      title: pageDetails.seo_title,
      description: pageDetails.seo_description,
      image: {
        url: pageDetails.image,
        alt: pageDetails.name,
      },
    },
    alternates: {
      canonical: `${siteUrl}/products-list//${params["sub-category"]}/${params["product-details"]}`,
    },
  };
}

const Page = async ({ params }) => {
  const item = await getProductDetails(`${params["sub-category"]}/${params["product-details"]}`);

  if (!item) {
    notFound();
    return null;
  }

  return (
    <div className="common_page_width relative z-20">
      <ProductDetail item={item} />
      {item?.related_products?.length > 0 && (
        <RelatedProducts subCategory={params["sub-category"]} slidesData={item?.related_products} />
      )}
    </div>
  );
};

export default Page;

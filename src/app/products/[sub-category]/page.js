import ProductCategory from "@/components/proudect/ProductCategory";
import ProductCategoryRedesign from "@/components/proudect/ProductCategoryRedesign";
import { notFound } from "next/navigation";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const getCategoryProducts = async (link) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/product/category/${link}/`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function generateMetadata({ params }) {
  const pageDetails = await getCategoryProducts(params["sub-category"]);

  if (!pageDetails) return { title: "Therapy Not Found" };

  return {
    title: pageDetails.seo_title,
    description: pageDetails.seo_description,
    datePublished: pageDetails.created,
    dateModified: pageDetails.updated,
    robots: "index, follow",
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
      url: `${siteUrl}/products/${pageDetails.slug}`,
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
      canonical: `${siteUrl}/products/${pageDetails.slug}`,
    },
  };
}

const page = async ({ params }) => {
  const data = await getCategoryProducts(params["sub-category"]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data?.name || "Nityanava Products",
    url: `${siteUrl}/products/${data?.slug || ""}`,
    description:
      data?.seo_description ||
      "Explore the best wellness products at Nityanava.",
    numberOfItems: data?.products?.length || 0,

    itemListElement: data?.products?.map((product, index) => ({
      "@type": "Product",
      name: product.name,
      url: `${siteUrl}/product/${product.slug}`,
      image: product.image || `${siteUrl}/default-product.jpg`, // Fallback image
      description: product.description,
      sku: product.sku || `SKU-${index + 1}`, // Default SKU if missing
      brand: {
        "@type": "Brand",
        name: "Nityanava",
      },
      category: data.name, // Category from Meta
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.price || "0",
        availability:
          product.stock > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        seller: {
          "@type": "Organization",
          name: "Nityanava",
          url: siteUrl,
        },
      },
      aggregateRating: product.rating
        ? {
            "@type": "AggregateRating",
            ratingValue: product.rating.toFixed(1),
            reviewCount: product.reviews.length,
          }
        : undefined,

      review: product.reviews?.slice(0, 3).map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author || "Anonymous",
        },
        reviewBody: review.text,
        datePublished: review.date,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: "5",
          worstRating: "1",
        },
      })),
    })),
  };

  if (!data) {
    notFound();
  }

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData, null, 2),
        }}
      />

      <ProductCategory data={data} params={params} />
    </>
  );
};

export default page;

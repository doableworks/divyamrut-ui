import ProductBanner from "@/components/proudect/ProductBanner";
import ProductsScroller from "@/components/proudect/ProductsScroller";
import ProductSlider1 from "@/components/proudect/ProductSlider1";
import { notFound } from "next/navigation";
import Script from "next/script";
import DisplayBlocks from "@/components/home1/DisplayBlocks";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const getAllCategoriesData = async () => {
  try {
    const res = await fetch(`${apiUrl}/product/categories-list/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log("Fetched Categories Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export async function generateMetadata() {
  return {
    title: "Nityanava Products",
    description:
      "Browse our wide range of wellness products across multiple categories. Find the best deals on Nityanava by Divyamrut Naturals",
    robots: "index, follow",
    author: "Nityanava",
    keywords: "products, shopping, best deals, online store, buy online",
    openGraph: {
      type: "website",
      title: "Nityanava Products",
      description:
        "Browse our wide range of products across multiple categories. Find the best deals on Nityanava.",
      images: [
        {
          url: `${siteUrl}/asset/logo/logo.svg`,
          width: 1200,
          height: 630,
          alt: "All Products - Nityanava",
        },
      ],
      url: `${siteUrl}/products`,
      site_name: "Nityanava",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nityanava Products",
      description:
        "Browse our wide range of products across multiple categories. Find the best deals on Nityanava.",
      image: {
        url: `${siteUrl}/asset/logo/logo.svg`,
        alt: "All Products - Nityanava",
      },
    },
    alternates: {
      canonical: `${siteUrl}/asset/logo/logo.svg`,
    },
  };
}

const page = async () => {
  const categoryData = await getAllCategoriesData();
  
  // Reorder categories to show meditation shawls first
  const reorderedCategories = categoryData ? [...categoryData] : [];
  const meditationShawls = reorderedCategories.filter(category => 
    category.name.toLowerCase().includes('meditation shawl')
  );
  const otherCategories = reorderedCategories.filter(category => 
    !category.name.toLowerCase().includes('meditation shawl')
  );
  const orderedCategories = [...meditationShawls, ...otherCategories];
  
  const bannerImgArr = orderedCategories.map((item) => item.image);

  if (!categoryData) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nityanava Products",
    url: "https://nityanava.com/products",
    description:
      "Browse our wide range of wellness products across multiple categories. Find the best deals on Nityanava by Divyamrut Naturals.",
    numberOfItems: orderedCategories?.length || 4,

    itemListElement: [
      {
        "@type": "Product",
        name: "Herbal Pain Relief Oil",
        url: "https://nityanava.com/product/herbal-pain-relief-oil",
        image: "https://nityanava.com/assets/products/pain-relief-oil.jpg",
        description: "A natural herbal oil to relieve joint and muscle pain.",
        sku: "NITYA-001",
        brand: {
          "@type": "Brand",
          name: "Nityanava",
        },
        category: "Wellness",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "499",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Nityanava",
            url: "https://nityanava.com",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "102",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Amit Sharma" },
            reviewBody: "Excellent product! Helped me with my joint pain.",
            datePublished: "2025-02-20",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
          },
        ],
      },
      {
        "@type": "Product",
        name: "Organic Aloe Vera Gel",
        url: "https://nityanava.com/product/organic-aloe-vera-gel",
        image: "https://nityanava.com/assets/products/aloe-vera-gel.jpg",
        description: "Pure organic aloe vera gel for skincare and haircare.",
        sku: "NITYA-002",
        brand: {
          "@type": "Brand",
          name: "Nityanava",
        },
        category: "Skincare",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "349",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Nityanava",
            url: "https://nityanava.com",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.6",
          reviewCount: "89",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Neha Verma" },
            reviewBody: "Really good quality aloe vera gel. Very soothing!",
            datePublished: "2025-03-01",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4.5",
              bestRating: "5",
              worstRating: "1",
            },
          },
        ],
      },
      {
        "@type": "Product",
        name: "Organic Turmeric Capsules",
        url: "https://nityanava.com/product/organic-turmeric-capsules",
        image: "https://nityanava.com/assets/products/turmeric-capsules.jpg",
        description: "Immunity-boosting organic turmeric capsules.",
        sku: "NITYA-003",
        brand: {
          "@type": "Brand",
          name: "Nityanava",
        },
        category: "Supplements",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "599",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Nityanava",
            url: "https://nityanava.com",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "76",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Rahul Singh" },
            reviewBody: "Great quality and very effective for immunity.",
            datePublished: "2025-03-10",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
          },
        ],
      },
    ],
  };

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

      <div className="hidden">
        <h1>Nityanava Products</h1>
        <p>
          Browse our wide range of wellness products across multiple categories.
          Find the best deals on Nityanava by Divyamrut Naturals
        </p>
      </div>
      
      <div>
        <DisplayBlocks />
      </div>
      <div className="common_page_width !pt-0">
        {orderedCategories.map(
          (category, index) =>
            category?.products?.length > 0 && (
              <ProductsScroller
                key={index + category.name}
                category={category}
              />
            )
        )}
      </div>
    </>
  );
};

export default page;

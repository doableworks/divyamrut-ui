import DetailPage from "@/components/blogs/DetailPage";
import MainBanner from "@/components/common/MainBanner";
import { notFound } from "next/navigation";
import Script from "next/script";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const fetchBlogPosts = async (slug) => {
  try {
    const url = `${apiUrl}/blogs/blogs/${slug}`;
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Unable to fetch Blogs", err);
    return null;
  }
};

export async function generateMetadata({ params }) {
  const slug = params["blog-details"];
  const blogDetails = await fetchBlogPosts(slug);

  if (!blogDetails) return { title: "Blog Not Found" };

  return {
    title: blogDetails.seo_title || blogDetails.title,
    description: blogDetails.seo_description,
    keywords: blogDetails.seo_keywords,
    openGraph: {
      type: "article",
      title: blogDetails.seo_title,
      description: blogDetails.seo_description,
      url: `${siteUrl}/blogs/${blogDetails.slug}`,
      images: [
        {
          url: blogDetails.cover_image,
          width: 1200,
          height: 630,
          alt: blogDetails.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogDetails.seo_title,
      description: blogDetails.seo_description,
      images: [
        {
          url: blogDetails.cover_image,
          alt: blogDetails.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/blogs/${blogDetails.slug}`,
    },
    robots: "index, follow",
    authors: [{ name: "Nityanava" }],
    metadataBase: new URL(siteUrl),
  };
}

const BlogDetails = async ({ params }) => {
  const slug = params["blog-details"];
  const fetchedDetails = await fetchBlogPosts(slug);

  if (!fetchedDetails) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${fetchedDetails.slug}`
    },
    "headline": fetchedDetails.seo_title || fetchedDetails.title,
    "description": fetchedDetails.seo_description,
    "image": [fetchedDetails.cover_image],
    "author": {
      "@type": "Organization",
      "name": "Nityanava",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nityanava",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`, 
        "width": 600,
        "height": 60
      }
    },
    "datePublished": fetchedDetails.created,
    "dateModified": fetchedDetails.updated,
    "keywords": fetchedDetails.seo_keywords,
  };
  

  return (
    <div>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData, null, 2),
        }}
      />

      <MainBanner
        heading={fetchedDetails.title}
        subHeading="Blogs - Your Daily Dose of Knowledge"
        image={fetchedDetails.cover_image}
      />
      <section className="common_page_width">
        <div>
          <DetailPage data={fetchedDetails} />
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;

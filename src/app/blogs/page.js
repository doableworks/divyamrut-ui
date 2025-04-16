import AllPosts from "@/components/blogs/AllPosts";
import MainBanner from "@/components/common/MainBanner";
import { blogsStaticCover } from "@/contants/contants";
import { notFound } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const fetchBlogPosts = async () => {
  try {
    const url = `${apiUrl}/blogs/blogs?page=1&page_size=10`;
    const response = await fetch(url, {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return {
      loading: false,
      error: false,
      page: 1,
      pageSize: 10,
      results: data.results,
    };
  } catch (err) {
    console.log("Unable to fetch Blogs", err);
    return null;
  }
};

export const metadata = {
  title: "Blogs & News - Nityanava",
  description:
    "Explore blogs and articles that offer daily insights and updates on various topics by Nityanava.",
  keywords: "Nityanava blogs, tech news, latest articles, web development, AI",
  openGraph: {
    type: "website",
    title: "Blogs & News - Nityanava",
    description:
      "Explore blogs and articles that offer daily insights and updates on various topics by Nityanava.",
    url: `${siteUrl}/blogs`,
    images: [
      {
        url: blogsStaticCover,
        width: 1200,
        height: 630,
        alt: "Blogs & News - Nityanava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & News - Nityanava",
    description:
      "Explore blogs and articles that offer daily insights and updates on various topics by Nityanava.",
    images: [
      {
        url: blogsStaticCover,
        alt: "Blogs & News - Nityanava",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
  robots: "index, follow",
  authors: [{ name: "Nityanava" }],
  metadataBase: new URL(siteUrl),
};

const Blogs = async () => {
  const fetchedBlogs = await fetchBlogPosts();

  if (!fetchedBlogs) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${siteUrl}/blogs`,
    name: "Nityanava Blog",
    description:
      "Read informative and insightful blog posts from Nityanava covering technology, development, and innovation.",
    publisher: {
      "@type": "Organization",
      name: "Nityanava",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/asset/logo/logo.svg`,
        width: 600,
        height: 60,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <MainBanner
        heading="Blogs & News"
        subHeading="Your Daily Dose of Knowledge"
      />
      <section className="common_page_width">
        <div className="flex-grow bg-white shadow p-5">
          <AllPosts data={fetchedBlogs} />
        </div>
      </section>
    </>
  );
};

export default Blogs;

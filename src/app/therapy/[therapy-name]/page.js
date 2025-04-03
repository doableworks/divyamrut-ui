import TherapyDetail from "@/components/therapy/TherapyDetail";
import { notFound } from "next/navigation";
import Script from "next/script";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const fetchTherapyDetails = async (therapyName) => {
  try {
    const res = await fetch(
      `${apiUrl}/therapy/therapy-details/${therapyName}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching therapy data:", error);
    return null;
  }
};

export async function generateMetadata({ params }) {
  const therapyName = params["therapy-name"];
  const pageDetails = await fetchTherapyDetails(therapyName);

  if (!pageDetails) return { title: "Therapy Not Found" };

  return {
    title: pageDetails.seo_title || pageDetails.name,
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
      url: `${siteUrl}/therapy/${pageDetails.slug}`,
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
      canonical: `${siteUrl}/therapy/${pageDetails.slug}`,
    },
  };
}

const TherapyName = async ({ params }) => {
  const therapyName = params["therapy-name"];
  const pageDetails = await fetchTherapyDetails(therapyName);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: pageDetails.name,
    url: `${siteUrl}/therapy/${pageDetails.slug}`,
    image: pageDetails.image,
    description: pageDetails.description.replace(/<[^>]+>/g, ""),
    alternateName: pageDetails.seo_keywords
      ? pageDetails.seo_keywords.split(", ").map((keyword) => keyword.trim())
      : [],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: pageDetails.price,
      seller: {
        "@type": "MedicalOrganization",
        name: "Nityanava",
        url: siteUrl,
      },
    },
    review: pageDetails.testimonials?.length
      ? pageDetails.testimonials.map((testimonial) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: testimonial.name,
          },
          reviewBody: testimonial.description.replace(/<[^>]+>/g, ""),
          datePublished: testimonial.created,
        }))
      : undefined,
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: pageDetails.faqs?.length
        ? pageDetails.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.description.replace(/<[^>]+>/g, ""),
            },
          }))
        : undefined,
    },
    dateCreated: pageDetails.created,
    dateModified: pageDetails.updated,
  };

  if (!pageDetails) {
    notFound();
    return null;
  }

  const cleanedSchemaData = JSON.parse(JSON.stringify(schemaData));

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cleanedSchemaData, null, 2),
        }}
      />
      
      <TherapyDetail data={pageDetails} />
    </>
  );
};

export default TherapyName;

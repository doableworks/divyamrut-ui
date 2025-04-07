import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import WhyChooseUs from "@/components/home1/WhyChooseUs";
import HeroBanner from "@/components/common/reference/HeroBanner";
import HomeAboutUs from "@/components/home1/HomeAboutUs";
import HomeEnquiry from "@/components/home1/HomeEnquiry";
import PathPurposeGoal from "@/components/home1/PathPurposeGoal";
import HomeIllustration from "@/components/home1/HomeIllustration";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const generateMetadata = async () => ({
  title: "Nityanava | Holistic Healing & Wellness Therapies",
  description:
    "Experience holistic healing with Osteopathy, Acupuncture, Sound Therapy, Marma & more at Nityanava. Restore balance & enhance well-being naturally",
  datePublished: "2025-03-11",
  dateModified: "2025-03-11",
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "Nityanava | Holistic Healing & Wellness Therapies",
    description:
      "Experience holistic healing with Osteopathy, Acupuncture, Sound Therapy, Marma & more at Nityanava. Restore balance & enhance well-being naturally",
    images: [
      {
        url: `${siteUrl}/asset/logo/logo.svg`,
        width: 1200,
        height: 630,
        alt: "Nityanava Logo",
      },
    ],
    url: siteUrl,
    site_name: "Nityanava",
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Nityanava | Holistic Healing & Wellness Therapies",
    description:
      "Experience holistic healing with Osteopathy, Acupuncture, Sound Therapy, Marma & more at Nityanava. Restore balance & enhance well-being naturally",
    image: {
      url: `${siteUrl}/asset/logo/logo.svg`,
      alt: "Nityanava Logo",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
});

export default function Home() {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: "Nityanava",
          url: siteUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        },
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Nityanava",
          url: siteUrl,
          logo: `${siteUrl}/asset/logo/logo.svg`,
          sameAs: [
            "https://www.facebook.com/nityanava",
            "https://twitter.com/nityanava",
            "https://www.linkedin.com/company/nityanava",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8169123024",
            email:"contact@divyamrutnaturals.com",
            contactType: "customer service",
            areaServed: "Worldwide",
            availableLanguage: "English",
          },
        },
        {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          name: "Nityanava",
          image: `${siteUrl}/asset/logo/logo.svg`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "413, Sai Arcade, N.S. Road, Mulund West",
            addressLocality: "Mulund West",
            addressRegion: "Mumbai",
            postalCode: "400080",
            addressCountry: "India",
          },
          telephone: "+91-8169123024",
          email:"contact@divyamrutnaturals.com",
          priceRange: "10Rs.",
          openingHours: "Mo-Su 09:00-18:00",
        },
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/#webpage`,
          url: siteUrl,
          name: "Homepage",
          isPartOf: {
            "@id": `${siteUrl}/#website`,
          },
        },
      ],
    };

  return (
    <main>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
      />

      <HeroBanner />
      <HomeAboutUs />
      <PathPurposeGoal />
      <WhatWeOffer />
      {/* <HomeIllustration /> */}
      <Testimonial />
      <HomeEnquiry />
      {/* <WhyChooseUs /> */}
    </main>
  );
}

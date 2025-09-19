import AllTherapyList from "@/components/therapy/AllTherapyList";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const generateMetadata = async () => ({
  title: "Holistic Healing Therapies | Nityanava",
  description:
    "Discover holistic healing with Osteopathy, Acupuncture, Marma, Sound Therapy & more at Nityanava. Restore balance & well-being naturally. Contact us today.",
  datePublished: "2025-03-11",
  dateModified: "2025-03-11",
  robots: "index, follow",
  author: "Nityanva",
  openGraph: {
    type: "article",
    title: "Holistic Healing Therapies | Nityanava",
    description:
      "Discover holistic healing with Osteopathy, Acupuncture, Marma, Sound Therapy & more at Nityanava. Restore balance & well-being naturally. Contact us today.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/asset/logo/logo.svg`,
        width: 1200,
        height: 630,
        alt: "Nityanava Logo",
      },
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL,
    site_name: "Nityanava",
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Holistic Healing Therapies | Nityanava",
    description:
      "Discover holistic healing with Osteopathy, Acupuncture, Marma, Sound Therapy & more at Nityanava. Restore balance & well-being naturally. Contact us today.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/asset/logo/logo.svg`,
        alt: "Nityanava Logo",
      },
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/therapy`,
  },
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Holistic Healing Therapies | Nityanava",
  url: "https://your-site.com/therapy",
  image: "https://your-site.com/asset/logo/logo.svg",
  description:
    "Discover holistic healing with Osteopathy, Acupuncture, Marma, Sound Therapy & more at Nityanava. Restore balance & well-being naturally. Contact us today.",
  alternateName: [
    "Osteopathy",
    "Acupuncture",
    "Marma Therapy",
    "Sound Therapy",
    "Holistic Healing",
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "3000",
    seller: {
      "@type": "MedicalOrganization",
      name: "Nityanava",
      url: "https://your-site.com",
    },
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "John Doe",
      },
      reviewBody: "Amazing holistic therapy experience. Highly recommended!",
      datePublished: "2025-03-11",
    },
  ],
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Holistic Healing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Holistic healing focuses on balancing the mind, body, and spirit using natural therapies such as Osteopathy, Acupuncture, and Sound Therapy.",
        },
      },
      {
        "@type": "Question",
        name: "How does Marma Therapy work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Marma Therapy is an ancient Indian healing technique that stimulates energy points in the body to restore health and well-being.",
        },
      },
    ],
  },
  author: {
    "@type": "Organization",
    name: "Nityanava",
    url: "https://your-site.com",
  },
  dateCreated: "2025-03-11",
  dateModified: "2025-03-11",
};

export default function TherapyPage() {
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
      <div className="pb-[6rem] pt-[2rem] lg:pb-[6rem] lg:pt-16">
        <h1 className="highlight-heading !mb-0">Holistic Therapies</h1>
        <h2 className="section-title lg:mb-4">
          Empowering Wellness, Healing,
          <br className="hidden md:inline-block" /> and Growth
        </h2>
        <AllTherapyList />
      </div>
    </>
  );
}

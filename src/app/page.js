import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import WhyChooseUs from "@/components/home1/WhyChooseUs";
import HeroBanner from "@/components/common/reference/HeroBanner";
import HomeAboutUs from "@/components/home1/HomeAboutUs";
import HomeEnquiry from "@/components/home1/HomeEnquiry";
import PathPurposeGoal from "@/components/home1/PathPurposeGoal";
import HomeIllustration from "@/components/home1/HomeIllustration";
import Divider from "@/components/common/Divider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Nityanava | Holistic Healing & Wellness Therapies",
  description:
    "Experience holistic healing with Osteopathy, Acupuncture, Sound Therapy, Marma & more at Nityanava. Restore balance & enhance well-being naturally",
  datePublished: "2025-03-11",
  dateModified: "2025-03-11",
  robots: "index, nofollow",
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
};

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <HomeAboutUs />
      <Divider />
      <WhatWeOffer />
      <PathPurposeGoal />
      <HomeIllustration />
      <HomeEnquiry />
      {/* <WhyChooseUs /> */}
      {/* <Testimonial /> */}
    </main>
  );
}

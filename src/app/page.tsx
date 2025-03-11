import Testimonial from "@/components/home1/Testimonial";
import WhatWeOffer from "@/components/home1/WhatWeOffer";
import WhyChooseUs from "@/components/home1/WhyChooseUs";
import HeroBanner from "@/components/common/reference/HeroBanner";
import HomeAboutUs from "@/components/home1/HomeAboutUs";
import HomeEnquiry from "@/components/home1/HomeEnquiry";

export const metadata = {
  title: 'Nityanava | Holistic Healing & Wellness Therapies',
  description: 'Experience holistic healing with Osteopathy, Acupuncture, Sound Therapy, Marma & more at Nityanava. Restore balance & enhance well-being naturally',
  datePublished: "2025-03-11",
  dateModified: "2025-03-11",
  robots: 'index, nofollow',
  openGraph: {
    type: "article",
    title: "Nityanava | Holistic Healing & Wellness Therapies",
    description: "Experience holistic healing with Osteopathy, Acupuncture, Sound Therapy, Marma & more at Nityanava. Restore balance & enhance well-being naturally",
    images: [
      {
        url: "https://desklib.com/desklib-logo.png",  
        width: 1200,
        height: 630,
        alt: "Desklib Logo",
      },
    ],
    url: "https://desklib.com/about-us/",
    site_name: "Desklib",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DesklibAI",
    title: "Nityanava | Holistic Healing & Wellness Therapies",
    description: "Experience holistic healing with Osteopathy, Acupuncture, Sound Therapy, Marma & more at Nityanava. Restore balance & enhance well-being naturally",
    image: {
      url: "https://desklib.com/desklib-logo.png", 
      alt: "Desklib Logo",
    },
  },
  alternates: {
    canonical: 'https://desklib.com/',
  },
  
};

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <HomeAboutUs />
      <WhatWeOffer />
      <WhyChooseUs />
      <Testimonial />
      <HomeEnquiry />
    </main>
  );
}

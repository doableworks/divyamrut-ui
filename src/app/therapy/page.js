import AllTherapyList from "@/components/therapy/AllTherapyList";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: 'Holistic Healing Therapies | Nityanava',
  description: 'Discover holistic healing with Osteopathy, Acupuncture, Marma, Sound Therapy & more at Nityanava. Restore balance & well-being naturally. Contact us today.',
  datePublished: "2025-03-11",
  dateModified: "2025-03-11",
  robots: 'index, nofollow',
  author:'Nityanva',
  openGraph: {
    type: "article",
    title: "Holistic Healing Therapies | Nityanava",
    description: "Discover holistic healing with Osteopathy, Acupuncture, Marma, Sound Therapy & more at Nityanava. Restore balance & well-being naturally. Contact us today.",
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
    title: "Holistic Healing Therapies | Nityanava",
    description: "Discover holistic healing with Osteopathy, Acupuncture, Marma, Sound Therapy & more at Nityanava. Restore balance & well-being naturally. Contact us today.",
    image: {
      url: `${siteUrl}/asset/logo/logo.svg`, 
      alt: "Nityanava Logo",
    },
  },
  alternates: {
    canonical: `${siteUrl}/therapy`,
  },
};

export default function TherapyPage() {
  return (
    <div className="pb-[6rem] pt-[2rem] lg:pb-[6rem] lg:pt-16">
      <h1 className="section-title !mb-0">Our Therapies</h1>
      <h2 className="highlight-heading">
        Empowering Wellness, Healing,
        <br className="hidden md:inline-block" /> and Growth
      </h2>
      <AllTherapyList />
    </div>
  );
}

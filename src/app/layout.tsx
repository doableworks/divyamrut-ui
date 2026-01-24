// @ts-nocheck
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import { ReduxProvider } from "../redux/provider";
import {
  Suranna,
  Jost,
  Inter,
  Poppins,
  Playfair_Display,
  Prata,
  Open_Sans,
} from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import MainLayout from "@/components/common/Mainlayout";
import "@/app/globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const prata = Prata({
  subsets: [],
  weight: ["400"],
  variable: "--font-prata",
});

const playfairDisplay = Playfair_Display({
  subsets: [],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const opensans = Open_Sans({
  subsets: [],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-opensans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getNavbarItems = async () => {
  try {
    const res = await fetch(`${apiUrl}/therapy/combined-categories/`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch navbar data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching navbar items:", error);
    return [];
  }
};

const getDisplayBlocks = async () => {
  try {
    const res = await fetch(`${apiUrl}/blogs/display-blocks/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch navbar data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching navbar items:", error);
    return [];
  }
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions as AuthOptions);
  const navbarAPIItems = await getNavbarItems();
  const displayBlockItems = await getDisplayBlocks();

  return (
    <html lang="en">
      <head>
        {/* Favicon and App Icons */}
        {/* <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Nityanava" />
        <link rel="manifest" href="/site.webmanifest" /> */}
        {/* Primary Meta Tags */}
        <title>Nityanava | Holistic Health, Healing & Conscious Living with Dr. Disha Bhanushali</title>
        <meta name="title" content="Nityanava | Holistic Health, Healing & Conscious Living with Dr. Disha Bhanushali" />
        <meta name="description" content="Experience holistic healing that integrates modern medicine, ancient wisdom, and consciousness-based practices. Guided by Dr. Disha Bhanushali to restore physical, mental, emotional & spiritual well-being." />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nityanava – Heal at the Root. Live Ever New." />
        <meta property="og:description" content="A holistic wellness space founded by Dr. Disha Bhanushali, integrating science, spirituality, and ancient healing to awaken your body's innate power to heal and live joyfully." />
        <meta property="og:site_name" content="Nityanava" />
        <meta property="og:url" content="https://nityanava.com" />
        <meta property="og:image" content="https://nityanava.com/asset/og-image.jpg.jpeg" />
        <meta property="og:image:alt" content="Holistic healing and conscious well-being at Nityanava with Dr. Disha Bhanushali" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nityanava – Heal at the Root. Live Ever New." />
        <meta name="twitter:description" content="Discover conscious healing that restores balance at the level of body, mind, and soul—so health becomes natural and happiness a way of life." />
        <meta name="twitter:image" content="https://nityanava.com/asset/og-image.jpg.jpeg" />
      </head>
      <body
        className={`${poppins.variable} ${prata.variable} ${playfairDisplay.variable} ${opensans.variable}`}
      >
        <NextTopLoader />
        <ReduxProvider>
          <AntdRegistry>
            <MainLayout
              navbarAPIItems={navbarAPIItems}
              displayBlockItems={displayBlockItems}
            >
              {children}
            </MainLayout>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

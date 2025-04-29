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

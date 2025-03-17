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
} from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";
import MainLayout from "@/components/common/Mainlayout";
import "@/app/globals.css";
import { AuthOptions } from "next-auth";

const poppins = Poppins({
  subsets: [],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const prata = Prata({
  subsets: [],
  weight: ["400"],
  variable: "--font-prata",
});

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getNavbarItems = async () => {
  try {
    const res = await fetch(`${apiUrl}/therapy/combined-categories/`, {
      cache: "no-store", 
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions as AuthOptions);
  const navbarAPIItems = await getNavbarItems(); // Fetch only once

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${prata.variable}`}>
        <NextTopLoader />
        <ReduxProvider>
          <AntdRegistry>
            <MainLayout session={session} navbarAPIItems={navbarAPIItems}>
              {children}
            </MainLayout>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

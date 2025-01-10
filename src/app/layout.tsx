import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import { ReduxProvider } from "../redux/provider";
import { Suranna, Jost, Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";
import MainLayout from "@/components/common/Mainlayout";
import "@/app/globals.css";
import { AuthOptions } from "next-auth";

const suranna = Suranna({
  subsets: [],
  weight: ["400"],
  variable: "--font-suranna",
});

const inter = Inter({
  subsets: [],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jost = Jost({
  subsets: [],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

interface RootLayoutProps {
  children: React.ReactNode;
  navProducts?: any;
}

export default async function RootLayout({ children, navProducts }: RootLayoutProps) {
  const session = await getServerSession(authOptions as AuthOptions);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${jost.variable} ${suranna.variable}`}>
        <NextTopLoader />
        <ReduxProvider>
          <AntdRegistry>
            <MainLayout session={session}>
              {children}
            </MainLayout>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
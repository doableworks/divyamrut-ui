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

interface RootLayoutProps {
  children: React.ReactNode;
  navProducts?: any;
}

export default async function RootLayout({
  children,
  navProducts,
}: RootLayoutProps) {
  const session = await getServerSession(authOptions as AuthOptions);
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${prata.variable}`}
      >
        <NextTopLoader />
        <ReduxProvider>
          <AntdRegistry>
            <MainLayout session={session}>{children}</MainLayout>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

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

export default async function RootLayout({ children }: RootLayoutProps) {
  

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${prata.variable} ${playfairDisplay.variable} ${opensans.variable}`}
      >
        <NextTopLoader />
        <ReduxProvider>
          <AntdRegistry>
            <MainLayout>{children}</MainLayout>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

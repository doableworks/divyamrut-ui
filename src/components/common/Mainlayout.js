import { ConfigProvider } from "antd";
import { LayoutSection } from "@/components/common/LayoutSection";

const apiUrl = process.env.API_URL;

const getTherapyMenu = async () => {
  try {
    const res = await fetch(`${apiUrl}/product/therapys/`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const navtherapy = await res.json();
    return navtherapy.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const getProductsMenu = async () => {
  try {
    const res = await fetch(`${apiUrl}/product/categories/`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const navProducts = await res.json();
    return navProducts.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function MainLayout({ children, session }) {
  const therapySubmenu = await getTherapyMenu();
  const productSubMenu = await getProductsMenu();

  const customTheme = {
    components: {
      Input: {
        colorBgContainer: "#F9F3EB",
        hoverBorderColor: "black",
        activeBorderColor: "black",
        activeBg: "#FFFFFF",
        paddingBlock: 10,
        borderRadius: 2,
        lineWidth: 1,
        inputFontSize: 16,
        colorTextPlaceholder: "#999",
      },
      Spin: {
        contentHeight: "100%",
      },
    },
    token: {
      colorPrimary: "#3F4FE4",
      fontFamily: '"Inter", sans-serif',
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <LayoutSection sessionData={session} therapySubmenu={therapySubmenu} productSubMenu={productSubMenu}>
        {children}
      </LayoutSection>
    </ConfigProvider>
  );
}

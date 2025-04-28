import { ConfigProvider } from "antd";
import { LayoutSection } from "@/components/common/LayoutSection";

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

const getDisplayBlocks = async () => {
  try {
    const res = await fetch(`${apiUrl}/blogs/display-blocks/`, {
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

export default async function MainLayout({ children }) {
  const navbarAPIItems = await getNavbarItems();
  const displayBlockItems = await getDisplayBlocks();

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
      fontFamily: '"Poppins", sans-serif',
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <LayoutSection
        navbarAPIitems={navbarAPIItems}
        displayBlockItems={displayBlockItems}
      >
        {children}
      </LayoutSection>
    </ConfigProvider>
  );
}

import { ConfigProvider } from "antd";
import { LayoutSection } from "@/components/common/LayoutSection";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getNavbarItems = async () => {
  try {
    const res = await fetch(`${apiUrl}/therapy/combined-categories/`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const navbar = await res.json();
    return navbar;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function MainLayout({ children, session }) {
  const navbarAPIItems = await getNavbarItems();

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
      <LayoutSection sessionData={session} navbarAPIitems={navbarAPIItems}>
        {children}
      </LayoutSection>
    </ConfigProvider>
  );
}

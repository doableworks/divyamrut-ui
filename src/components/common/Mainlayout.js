import { ConfigProvider } from "antd";
import { LayoutSection } from "@/components/common/LayoutSection";

export default async function MainLayout({ children, navbarAPIItems, displayBlockItems,  session, }) {
  

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
      sessionData={session}
        navbarAPIitems={navbarAPIItems}
        displayBlockItems={displayBlockItems}
      >
        {children}
      </LayoutSection>
    </ConfigProvider>
  );
}

"use client";
import { SessionProvider } from "next-auth/react";
import { ConfigProvider } from "antd";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { LayoutSection } from "@/components/common/LayoutSection";
import {Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
// import {setUserSession} from "@/redux/feature/authSlice";

export default function MainLayout({ children, session }) {
  const dispatch = useDispatch()
  
  const customTheme = {
    components: {
      Input: {
        colorBgContainer: '#F9F3EB',
        hoverBorderColor:"black",
        activeBorderColor:"black",
        activeBg:"#FFFFFF",
        paddingBlock: 10,
        borderRadius:2,
        lineWidth:1,
        inputFontSize: 16,
        colorTextPlaceholder:'#999',
      },
      Spin: {
        contentHeight: "100%",
      },
    },
    token: {
      colorPrimary: '#3F4FE4',
      fontFamily: '"Inter", sans-serif',
    },
  };

//  dispatch(setUserSession(session))

  return (
    <Suspense>
      <ConfigProvider theme={customTheme}>
        <SessionProvider session={session}
        refetchInterval={10 * 60}
        refetchOnWindowFocus={false}
        >
          <LayoutWrapper>
            <LayoutSection sessionData={session}>
              {children}
            </LayoutSection>
          </LayoutWrapper>
        </SessionProvider>
      </ConfigProvider> 
    </Suspense>
  );
}
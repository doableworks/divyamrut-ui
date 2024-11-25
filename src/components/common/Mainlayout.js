"use client";
import { SessionProvider } from "next-auth/react";
// import { ConfigProvider } from "antd";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { LayoutSection } from "@/components/common/LayoutSection";
import {Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUserSession} from "@/redux/feature/authSlice";

export default function MainLayout({ children, session }) {
  const dispatch = useDispatch()
  // const customTheme = {
  //   components: {
  //     Button: {
  //       algorithm: true,
  //       fontFamily: '"Inter", sans-serif',
  //       colorSecondaryBg: '#3F4FE41A',
  //       colorSecondaryBorder: '#3F4FE4',
  //       colorSecondaryText: '#3F4FE4',
  //       colorSecondaryHover: '#3F4FE433',
  //       color: "white",
  //     },
  //     Spin: {
  //       contentHeight: "100%",
  //     },
  //   },
  //   token: {
  //     colorPrimary: '#3F4FE4',
  //     fontFamily: '"Inter", sans-serif',
  //   },
  // };

 dispatch(setUserSession(session))

  return (
    <Suspense>
      {/* <ConfigProvider theme={customTheme}> */}
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
      {/* </ConfigProvider> */}
    </Suspense>
  );
}
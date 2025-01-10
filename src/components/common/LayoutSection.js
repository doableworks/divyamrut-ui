"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Footer, Navbar } from "@/components/common";

import LoginModal from "../login/loginModal";
import RegisterModal from "../login/RegisterModal";

export const LayoutSection = ({
  children,
  sessionData,
  therapySubmenu,
  productSubMenu,
}) => {
  return (
    <SessionProvider
      session={sessionData}
      refetchInterval={10 * 60}
      refetchOnWindowFocus={false}
    >
      <main className="relative bg-[--base] h-[100vh] overflow-y-auto overflow-x-hidden">
        <Navbar
          therapySubmenu={therapySubmenu}
          productSubMenu={productSubMenu}
        />

        {children}
        <Footer />
      </main>

      <LoginModal />
      <RegisterModal />
    </SessionProvider>
  );
};

// Server-side data fetching function

export default LayoutSection;

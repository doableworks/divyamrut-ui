"use client";
import React, { useEffect, useRef, useState } from "react";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/common/reference/Footer.js";
import PremiumNavbar from "@/components/common/navbar/PremiumNavbar";
import LoginModal from "../login/loginModal";
import RegisterModal from "../login/RegisterModal";

export const LayoutSection = ({
  children,
  sessionData,
  therapySubmenu,
  productSubMenu,
}) => {
  const scrollContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const currentScrollTop = scrollContainerRef.current.scrollTop;

        setScrolled(currentScrollTop);
      }
    };

    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <SessionProvider
      session={sessionData}
      refetchInterval={10 * 60}
      refetchOnWindowFocus={false}
    >
      <main
        ref={scrollContainerRef}
        className="flex flex-col relative bg-[--base] text-[--neutral] h-[100vh] overflow-y-auto overflow-x-hidden"
      >
        <PremiumNavbar scrollNum={scrolled} therapySubmenu={therapySubmenu} productSubMenu={productSubMenu} />

        <div className="flex-grow">{children}</div>
      </main>

      <LoginModal />
      <RegisterModal />
    </SessionProvider>
  );
};

export default LayoutSection;

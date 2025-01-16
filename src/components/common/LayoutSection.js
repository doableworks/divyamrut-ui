"use client";
import React, { useEffect, useRef, useState } from "react";
import { SessionProvider } from "next-auth/react";
import PremiumNavbar from "@/components/common/navbar/PremiumNavbar";
import LoginModal from "../login/loginModal";
import RegisterModal from "../login/RegisterModal";
import NewFooter from "@/components/common/reference/NewFooter";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export const LayoutSection = ({
  children,
  sessionData,
  therapySubmenu,
  productSubMenu,
}) => {
  const scrollContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(0);
  const pathname = usePathname();

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
        className="flex flex-col relative bg-[--base] text-[--neutral] overflow-y-auto overflow-x-hidden h-[100vh]"
      >
        <PremiumNavbar
          scrollNum={scrolled}
          therapySubmenu={therapySubmenu}
          productSubMenu={productSubMenu}
        />

        <div className="flex-grow">
          <div
            className={twMerge(
              "h-[95px] [@media(min-width:1340.98px)]:h-[172px]",
              pathname === "/" && "hidden"
            )}
          />
          {children}
        </div>

        {/* <div>
          <NewFooter />
        </div> */}
      </main>

      <LoginModal />
      <RegisterModal />
    </SessionProvider>
  );
};

export default LayoutSection;

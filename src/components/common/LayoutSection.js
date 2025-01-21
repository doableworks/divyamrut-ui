"use client";
import React, { useEffect, useRef, useState } from "react";
import { SessionProvider } from "next-auth/react";
import PremiumNavbar from "@/components/common/navbar/PremiumNavbar";
import LoginModal from "../login/loginModal";
import RegisterModal from "../login/RegisterModal";
import NewFooter from "@/components/common/reference/NewFooter";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setMenuItems } from "@/redux/feature/menuSlice";
import { SetIsSticky } from "@/redux/feature/productSlice";
import CardSlider from '@/components/cartCom/CardSlider'

export const LayoutSection = ({ children, sessionData, navbarAPIitems }) => {
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const initialMenuItems = [
 
    { label: "About Us", path: "/about-us" },
    { label: "Consultations", path: "/consultations" },
    {
      label: "Therapies",
      path: "/therapy",
      parentSlug: "/therapy/",
      subMenu: navbarAPIitems?.therapy_categories,
    },
    { label: "Health Packages", path: "/health-packages" },
    {
      label: "Products",
      path: "/products",
      parentSlug: "/products/",
      subMenu: navbarAPIitems?.product_categories,
    },
  ];

  dispatch(setMenuItems(initialMenuItems));

  useEffect(() => {
    const handleScroll = () => {

      const stickyElement = document.querySelector("#myElementId");
          if (stickyElement) {
            const isAtTop = stickyElement.getBoundingClientRect().top <= 50;
            dispatch(SetIsSticky(isAtTop))
          }

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
        <PremiumNavbar scrollNum={scrolled} />

        <div className="flex-grow">
          <div
            className={twMerge(
              "h-[65px] [@media(min-width:1340.98px)]:h-[172px]",
              pathname === "/" && "hidden"
            )}
          />
          {children}

          {/* {React.cloneElement(children, { isAtTop: isSticky })} */}
        </div>

        <div>
          <NewFooter />
        </div>
      </main>
      <CardSlider />
      <CardSlider />
      <LoginModal />
      <RegisterModal />
    </SessionProvider>
  );
};

export default LayoutSection;

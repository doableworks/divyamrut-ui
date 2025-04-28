"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SessionProvider } from "next-auth/react";
import PremiumNavbar from "@/components/common/navbar/PremiumNavbar";
import LoginModal from "../login/loginModal";
import RegisterModal from "../login/RegisterModal";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { setMenuItems } from "@/redux/feature/menuSlice";
import { SetIsSticky } from "@/redux/feature/productSlice";
import CardSlider from "@/components/cartCom/CardSlider";
import BookingModal from "../therapy/BookingModal";
import { usePathname } from "next/navigation";
import Footer from "./reference/Footer";
import ConsultationBooking from "../consultations/ConsultationBooking";
import { setDisplayBlocks } from "@/redux/feature/displayBlockSlice";

export const LayoutSection = ({
  children,
  navbarAPIitems,
  displayBlockItems,
  sessionData,
}) => {
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(0);
  const pathname = usePathname();

  const initialMenuItems = [
    { label: "About Us", path: "/about-us" },
    {
      label: "Consultations",
      path: "/consultations",
      parentSlug: "/consultations",
      subMenu: [
        {
          name: "Emotional Health Coaching",
          slug: "emotional-health-coaching",
        },
        {
          name: "Nutrition & Diet Coaching",
          slug: "nutrition-diet-coaching",
          isSoon: true,
        },
        { name: "Life Coaching", slug: "life-coaching" },
        {
          name: "Medical Astrology Consultation",
          slug: "medical-astrology-consultation",
          isSoon: true,
        },
        { name: "Financial Coaching", slug: "financial-coaching" },
      ],
    },
    {
      label: "Holistic Therapies",
      path: "/therapy",
      parentSlug: "/therapy",
      subMenu: navbarAPIitems?.therapy_categories,
    },
    { label: "Well-being Packages", path: "/health-packages" },
    {
      label: "Wellness Products",
      path: "/products",
      parentSlug: "/products",
      subMenu: navbarAPIitems?.product_data,
    },
    { label: "Contact Us", path: "/contact-us" },
  ];

  useLayoutEffect(() => {
    dispatch(setMenuItems(initialMenuItems));
    dispatch(setDisplayBlocks(displayBlockItems));
  }, [dispatch, navbarAPIitems]);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = document.querySelector("#myElementId");
      if (stickyElement) {
        const isAtTop = stickyElement.getBoundingClientRect().top <= 50;
        dispatch(SetIsSticky(isAtTop));
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
  }, [dispatch]);

  return (
    <SessionProvider
      session={sessionData}
      refetchInterval={10 * 60}
      refetchOnWindowFocus={false}
    >
      <main
        ref={scrollContainerRef}
        className="flex flex-col relative bg-[--base] text-[--neutral] overflow-y-auto overflow-x-hidden h-[100vh] font-poppins"
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
        </div>

        <div>
          <Footer />
        </div>
      </main>
      <CardSlider />
      <LoginModal />
      <RegisterModal />
      <BookingModal />
      <ConsultationBooking />
    </SessionProvider>
  );
};

export default LayoutSection;

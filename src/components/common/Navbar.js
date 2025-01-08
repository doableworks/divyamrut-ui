"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { Arrow, Call, Message, CartIcon } from "@/icon/icons";
import { useState } from "react";
import MobileNav from "./MobileNav";
import InitialAvatar from "@/components/common/InitialAvatar";
import { signOut } from "next-auth/react";
import { Button, Form, message, Input, Row, Col, Modal } from "antd";
import {
  setMobileAuthDrawer,
  setOpenLoginModal,
  setResetModalSlice,
} from "@/redux/feature/authModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { Therapies, NavProducts } from "@/contants/contants";
import MobileNavbar from "./MobileNavbar";
import { MenuOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import { closeNav, openNav, toggleNav } from "@/redux/feature/mobileNavSlice";
import { useEffect } from "react";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Consultations", path: "/consultations" },
  {
    label: "Therapies",
    subMenu: [
      { label: "Basic Flower Therapy", path: "/therapy/basic-flower-therapy" },
      {
        label: "Cranio Sacral Therapy",
        path: "/therapy/cranio-sacral-therapy",
      },
      { label: "Meru Chikitsa", path: "/therapy/meru-chikitsa" },
      { label: "Marma", path: "/therapy/marma" },
      { label: "Sound Therapy", path: "/therapy/sound-therapy" },
      { label: "Meru Chikitsa", path: "/therapy/meru-chikitsa" },
      { label: "Sujok & Acupuncture", path: "/therapy/sujok-and-acupuncture" },
      { label: "Osteopathy", path: "/therapy/osteopathy" },
      { label: "Art Therapy", path: "/therapy/art-therapy" },
    ],
  },
  { label: "Health Packages", path: "/health-packages" },
  {
    label: "Products",
    subMenu: [
      {
        label: "Kansa Vati Foot Massage Kit",
        path: "/products/kansa-vati-foot-massage-kit",
      },
      {
        label: "Meditation/Pooja Asans",
        path: "/products/meditation-puja-asans",
      },
      {
        label: "Meditation/Pooja Shawls",
        path: "/products/meditation-puja-shawls",
      },
      {
        label: "Chandan-Kumkum Bindi Kit",
        path: "/products/chandan-kumkum-bindi-kit",
      },
      {
        label: "Bath/Aura Cleansing Salt",
        path: "/products/bath-aura-cleansing-salt",
      },
      { label: "Diya", path: "/products/diya" },
    ],
  },
  { label: "Mission and Vision", path: "/mission-and-vision" },
  { label: "Contact Us", path: "/contact-us" },
];

const Navbar = ({ session }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [hasHover, setHasHover] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const [messageApi, contextHolder] = message.useMessage();

  const isMobileNavOpen = useSelector((state) => state.mobileNav.isOpen);

  const handleMoveRoute = (route) => {
    router.push(route);
  };

  const handleLogin = () => {
    dispatch(closeNav());
    dispatch(setOpenLoginModal(true));
  };

  const onLogOut = async () => {
    try {
      await signOut();
      await dispatch(closeNav());
      await dispatch(setOpenLoginModal(true));

      // .then(({ ok, error }) => {
      //   console.log("ok", ok, "error",error)
      //   if (ok) {
      //     // router.push("/home");
      //     dispatch(setOpenLoginModal(true));
      //     showResponseMessage("success", "Logout successfully!");
      //   } else {
      //     showResponseMessage("error", 'Something went wrong. Please try again.');
      //   }
      // })
      // .catch(() => {
      //   showResponseMessage("error", 'Something went wrong. Please try again.');
      // });

      // signOut({ callbackUrl: `/?loginpopup=true&next=${pathname}` });
      // dispatch(setResetAuthSlice());
      // dispatch(setResetAIAnsSlice());
      // dispatch(setResetModalSlice());
      // dispatch(clearUserData())
    } catch (error) {
      console.log("onLogOut error", error);
    }
  };

  const showResponseMessage = (type, content) => {
    messageApi.open({ type, content });
  };

  const handleMobileClose = () => {
    dispatch(closeNav(false));
  };

  const handleMobileOpen = () => {
    dispatch(openNav(true));
  };

  return (
    <>
      {contextHolder}
      <header
        className={`absolute z-30 w-full shadow ${
          false ? "bg-black" : "bg-transparent"
        }`}
      >
        {/* Top Banner */}
        {/* <div className="bg-q638d055  py-2">
        <div className="w-[85%] container mx-auto flex items-center text-white justify-between">
          <p className="text-sm font-medium hidden md:block">
            Get a Free Ayurveda Consultation from PranaVeda!
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Message fill={"#6E9039"} />
              <span>support@domain.tld</span>
            </div>
            <div className="flex items-center gap-1">
              <Call fill={"#6E9039"} />
              <span>(888) 4000-2424</span>
            </div>
          </div>
        </div>
      </div> */}
        {/* Main Navigation */}
        <div className="bg-transparent w-[98%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex w-48 h-20 gap-2">
              <Image
                src="/asset/divyamrut_transparent_logo.webp"
                alt="Divyamrut Logo"
                width={120}
                height={250}
              />
              {/* <h2
              className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF]"
            >
              Divyamrut
            </h2> */}
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden [@media(min-width:1340.98px)]:flex gap-8 font-jost text-[18px] font-[500] text-left text-[#FFFFFF] items-center">
            <h5
              className={`cursor-pointer hover:text-E0A43B ${
                pathname == "/about-us" ? "text-E0A43B" : "text-[#FFFFFF]"
              }`}
              onClick={() => handleMoveRoute("/about-us")}
            >
              About Us
            </h5>
            <h5
              className={`cursor-pointer hover:text-E0A43B ${
                pathname == "/consultations" ? "text-E0A43B" : "text-[#FFFFFF]"
              }`}
              onClick={() => handleMoveRoute("/consultations")}
            >
              Consultations
            </h5>
            <div
              className="relative group"
              onMouseEnter={() => setHasHover("therapies")}
              onMouseLeave={() => setHasHover(null)}
            >
              <div className="flex items-center leading-[3.5em] cursor-pointer">
                <h5
                  className={`${
                    hasHover == "therapies" ? "text-E0A43B" : "#FFFFFF"
                  } leading-[3.5em] cursor-pointer`}
                >
                  Therapies
                </h5>
                <Arrow fill={hasHover == "therapies" ? "#E0A43B" : "#FFFFFF"} />
              </div>
              {/* Dropdown */}
              <div
                className={`absolute left-0 hidden group-hover:block shadow-lg text-nowrap cursor-pointer
            bg-white 
            text-E0A43B 
            `}
              >
                {Therapies.map((item, index) => (
                  <h5
                    key={index + "Therapy"}
                    className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                      pathname == `/therapy/${item.route}`
                        ? "text-text bg-d49ac81"
                        : ""
                    }`}
                    onClick={() => handleMoveRoute(`/therapy/${item.route}`)}
                  >
                    {item.title}
                  </h5>
                ))}
              </div>
            </div>
            <h5
              className={`cursor-pointer hover:text-E0A43B ${
                pathname == "/health-packages"
                  ? "text-E0A43B"
                  : "text-[#FFFFFF]"
              }`}
              onClick={() => handleMoveRoute("/health-packages")}
            >
              Health Packages
            </h5>
            {/* <h5
                className={`${
                  pathname == "/products" ? "text-E0A43B" : "#FFFFFF"
                } leading-[3.5em] cursor-pointer`}
                onClick={() => handleMoveRoute("/products")}
              >
                Products
              </h5> */}
            <div
              className="relative group"
              onMouseEnter={() => setHasHover("products")}
              onMouseLeave={() => setHasHover(null)}
            >
              <div className="flex items-center leading-[3.5em] cursor-pointer">
                <h5
                  className={`${
                    hasHover == "products" ? "text-E0A43B" : "#FFFFFF"
                  } leading-[3.5em] cursor-pointer`}
                  // onClick={() => handleMoveRoute("/")}
                >
                  Products
                </h5>
                <Arrow fill={hasHover == "products" ? "#E0A43B" : "#FFFFFF"} />
              </div>

              <div
                className={`absolute left-0 hidden group-hover:block shadow-lg text-nowrap cursor-pointer
            bg-white 
            text-E0A43B 
            `}
              >
                {NavProducts.map((item, index) => (
                  <h5
                    key={index + "product"}
                    className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                      pathname == `/products/${item.route}`
                        ? "text-text bg-d49ac81"
                        : ""
                    }`}
                    onClick={() => handleMoveRoute(`/products/${item.route}`)}
                  >
                    {item.title}
                  </h5>
                ))}
              </div>
            </div>
            <h5
              className={`cursor-pointer hover:text-E0A43B ${
                pathname == "/mission-and-vision"
                  ? "text-E0A43B"
                  : "text-[#FFFFFF]"
              }`}
              onClick={() => handleMoveRoute("/mission-and-vision")}
            >
              Mission and Vision
            </h5>

            <h5
              className={`cursor-pointer hover:text-E0A43B ${
                pathname == "/contact-us" ? "text-E0A43B" : "text-[#FFFFFF]"
              }`}
              onClick={() => handleMoveRoute("/contact-us")}
            >
              Contact Us
            </h5>
            <h5
              className={`flex items-center gap-2 cursor-pointer hover:text-E0A43B ${
                pathname == "/cart" ? "text-E0A43B" : "text-[#FFFFFF]"
              }`}
              onClick={() => handleMoveRoute("/cart")}
              onMouseEnter={() => setHasHover("cart")}
              onMouseLeave={() => setHasHover(null)}
            >
              <CartIcon
                cartItemCount={cartItems?.length || 0}
                h={38}
                w={30}
                color={
                  pathname == "/cart" || hasHover == "cart"
                    ? "#E0A43B"
                    : "#FFFFFF"
                }
              />
              Cart
            </h5>
            <div
              className="relative group"
              onMouseEnter={() => setHasHover("user")}
              onMouseLeave={() => setHasHover(null)}
            >
              <div className="flex items-center leading-[3.5em] cursor-pointer">
                <div
                  className={`
               leading-[3.5em] cursor-pointer`}
                >
                  <InitialAvatar shape={"ractangle"} user={null} />
                </div>
              </div>
              {/* Dropdown */}
              <div
                className={`absolute right-[-1rem] hidden group-hover:block shadow-lg text-nowrap cursor-pointer
            bg-white 
            text-E0A43B 
            `}
              >
                {session ? (
                  <>
                    <h5
                      className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-5 ${
                        pathname == `/profile` ? "text-text bg-d49ac81" : ""
                      }`}
                      onClick={() => handleMoveRoute("/profile")}
                    >
                      Profile
                    </h5>

                    <h5
                      className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-5 ${
                        pathname == `/order-list` ? "text-text bg-d49ac81" : ""
                      }`}
                      onClick={() => handleMoveRoute("/order-list")}
                    >
                      Order List
                    </h5>

                    <h5
                      className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-5`}
                      onClick={() => onLogOut()}
                    >
                      Logout
                    </h5>
                  </>
                ) : (
                  <h5
                    className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-5`}
                    onClick={() => handleLogin()}
                  >
                    Log in/Sign up
                  </h5>
                )}
              </div>
            </div>
          </nav>

          <div className="[@media(max-width:1340.98px)]:flex hidden items-center gap-3">
            <button
              type="button"
              onClick={() => handleMoveRoute("/cart")}
              className="flex justify-center p-3 backdrop-blur-lg rounded-md"
            >
              <CartIcon
                cartItemCount={cartItems?.length || 0}
                h={30}
                w={30}
                color="#3d3d3d"
              />
            </button>

            {isMobileNavOpen ? (
              <button
                type="button"
                onClick={handleMobileClose}
                className="flex justify-center p-3 backdrop-blur-lg rounded-md"
              >
                <CloseOutlined className="text-[28px]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleMobileOpen}
                className="flex justify-center p-3 backdrop-blur-lg rounded-md"
              >
                <MenuOutlined className="text-[28px]" />
              </button>
            )}

            <div className="[@media(max-width:1340.98px)]:flex hidden">
              {
                <MobileNavbar
                  menuItems={menuItems}
                  session={session}
                  pathname={pathname}
                  handleMoveRoute={handleMoveRoute}
                  handleLogin={handleLogin}
                  onLogOut={onLogOut}
                />
              }
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

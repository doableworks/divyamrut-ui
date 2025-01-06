"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { Arrow, Call, Message, CartIcon } from "@/icon/icons";
import { useState } from "react";
import MobileNav from "./MobileNav";
import InitialAvatar from "@/components/common/InitialAvatar";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { Therapies } from "@/contants/contants";



const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [hasHover, setHasHover] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);


  const handleMoveRoute = (route) => {
    router.push(route);
  };

  const handleLogin = () => {
    dispatch(setOpenLoginModal(true));
  };

  const handleLogout = () => {
    // dispatch(setOpenLoginModal(true));
  };

  return (
    <header className="absolute z-30 w-full shadow">
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
      <div className="bg-transparent w-[95%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex w-8 h-8">
            {/* <Image
              src="/asset/Logo_Pranaveda.png"
              alt="Divyamrut Logo"
              className="w-full h-full"
              width={150}
              height={150}
            /> */}
            <h2
              className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF]"
            >
              Divyamrut
            </h2>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden xl:flex gap-8 font-jost text-[18px] font-[500] text-left text-[#FFFFFF] items-center">
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/about-us" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/about-us")}
          >
            About Us
          </h5>
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/consultations" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/consultations")}
          >
            Consultations
          </h5>
          <div
            className="relative group"
            onMouseEnter={() => setHasHover("Pages")}
            onMouseLeave={() => setHasHover(null)}
          >
            <div className="flex items-center leading-[3.5em] cursor-pointer">
              <h5
                className={`${
                  hasHover == "Pages" ? "text-a2c0d56" : "#FFFFFF"
                } leading-[3.5em] cursor-pointer`}
              >
                Therapies
              </h5>
              <Arrow fill={hasHover == "Pages" ? "#99C24A" : "#FFFFFF"} />
            </div>
            {/* Dropdown */}
            <div
              className={`absolute left-0 hidden group-hover:block shadow-lg text-nowrap cursor-pointer
            bg-white 
            text-a2c0d56 
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
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/health-packages" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/health-packages")}
          >
            Health Packages
          </h5>
          <h5
                className={`${
                  pathname == "/products" ? "text-a2c0d56" : "#FFFFFF"
                } leading-[3.5em] cursor-pointer`}
                onClick={() => handleMoveRoute("/products")}
              >
                Products
              </h5>
          {/* <div
            className="relative group"
            onMouseEnter={() => setHasHover("Pages")}
            onMouseLeave={() => setHasHover(null)}
          >
            <div className="flex items-center leading-[3.5em] cursor-pointer">
              <h5
                className={`${
                  hasHover == "Pages" ? "text-a2c0d56" : "#FFFFFF"
                } leading-[3.5em] cursor-pointer`}
                onClick={() => handleMoveRoute("/")}
              >
                Products
              </h5>
              <Arrow fill={hasHover == "Pages" ? "#99C24A" : "#FFFFFF"} />
            </div>
           
            <div
              className={`absolute left-0 hidden group-hover:block shadow-lg text-nowrap cursor-pointer
            bg-white 
            text-a2c0d56 
            `}
            >
              {navProducts.map((item, index) => (
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
          </div> */}
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/mission-and-vision"
                ? "text-a2c0d56"
                : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/mission-and-vision")}
          >
            Purpose and Vision
          </h5>
         
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/contact-us" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/contact-us")}
          >
            Contact Us
          </h5>
          <h5
            className={`flex items-center gap-2 cursor-pointer hover:text-a2c0d56 ${
              pathname == "/cart" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/cart")}
            onMouseEnter={() => setHasHover("cart")}
            onMouseLeave={() => setHasHover(null)}
          >
            <CartIcon cartItemCount={cartItems?.length || 0} h = {38} w = {30} color={pathname == "/cart" || hasHover == "cart" ? "#99C24A" : "#FFFFFF"} />
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
              className={`absolute right-[-3rem] hidden group-hover:block shadow-lg text-nowrap cursor-pointer
            bg-white 
            text-a2c0d56 
            `}
            >
              {true ? (
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
                    // onClick={() => handleLogout()}
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

        {/* Mobile Menu Toggle */}
        <MobileNav pathname={pathname} handleMoveRoute={handleMoveRoute} />
      </div>
    </header>
  );
};

export default Navbar;

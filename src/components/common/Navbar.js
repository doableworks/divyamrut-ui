"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { Arrow, Call, Message } from "@/icon/icons";
import { useState } from "react";
import MobileNav from './MobileNav';
import { useDispatch } from "react-redux";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";


const navProducts = [
  { route: "kansa-vati-foot-massage-kit", title: "Kansa Vati Foot Massage Kit" },
  { route: "meditation-puja-asans", title: "Meditation/Puja Asans" },
  { route: "meditation-puja-shawls", title: "Meditation/Puja Shawls" },
  { route: "chandan-kumkum-bindi-kit", title: "Chandan-Kumkum Bindi Kit" },
  { route: "bath-aura-cleansing-salt", title: "Bath/Aura Cleansing Salt" },
  { route: "diya", title: "Diya" }
]

const Therapies = [
  { route: "basic-flower-therapy", title: "Basic Flower Therapy" },
  { route: "cranio-sacral-therapy", title: "Cranio Sacral Therapy" },
  { route: "meru-chikitsa", title: "Meru Chikitsa" },
  { route: "marma", title: "Marma" },
  { route: "sound-therapy", title: "Sound Therapy" },
  { route: "sujok-and-acupuncture", title: "Sujok & Acupuncture" },
  { route: "osteopathy", title: "Osteopathy" },
  { route: "art-therapy", title: "Art Therapy" }
]

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [hasHover, setHasHover] = useState(null);

  const handleMoveRoute = (route) => {
    router.push(route);
  };

  const handleLogin = ()=>{
    dispatch(setOpenLoginModal(true))
  }


  return (
    <header className="absolute z-30 w-full shadow">
      {/* Top Banner */}
      <div className="bg-q638d055  py-2">
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
      </div>
      {/* Main Navigation */}
      <div className="bg-transparent w-[90%] md:w-[85%] container mx-auto flex items-center justify-between">
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
              onClick={() => console.log("on nnnnnnnn")}
              className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF]"
            >
              Divyamrut
            </h2>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex gap-8 font-jost text-[18px] font-[500] text-left text-[#FFFFFF] items-center">
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/about-us" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/about-us")}
          >
            About Us
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
                onClick={() => handleMoveRoute("/")}
              >
                Products
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
              {navProducts.map((item, index)=>(
                <h5
                key={index + 'product'}
                className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                  pathname == `/products/${item.route}`? "text-text bg-d49ac81" : ""
                }`}
                onClick={() => handleMoveRoute(`/products/${item.route}`)}
              >
                {item.title}
              </h5>
              ))}
            </div>
          </div>
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/purpose" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/purpose")}
          >
            Purpose
          </h5>
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/mission-and-vision"
                ? "text-a2c0d56"
                : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/mission-and-vision")}
          >
            Mission and Vision
          </h5>
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/holistic-health" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/holistic-health")}
          >
            Holistic Health
          </h5>
          <h5
            className={`cursor-pointer hover:text-a2c0d56 ${
              pathname == "/contact-us" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleMoveRoute("/contact-us")}
          >
            Contact Us
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
                Advance Therapies
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
              {Therapies.map((item, index)=>(
                <h5
                key={index + 'Therapy'}
                className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                  pathname == `/therapy/${item.route}`? "text-text bg-d49ac81" : ""
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
              pathname == "/contact-us" ? "text-a2c0d56" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleLogin()}
          >
            Login
          </h5>



          {/* <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center px-4 py-2 bg-q4ca25af  hover:bg-q638d055 transition">
            <i className="mr-2 icons icon-calendar"></i> Get Started
          </div> */}
        </nav>

        {/* Mobile Menu Toggle */}
        <MobileNav pathname={pathname} handleMoveRoute={handleMoveRoute} />
       
      </div>
    </header>
  );
};

export default Navbar;

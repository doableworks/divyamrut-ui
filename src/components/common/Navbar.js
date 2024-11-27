// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import NavRightSection from "./Nav-right-section";
// // import NavProdects from "./Nav-Product";
// // import NavDrawer from "../nav_component/NavDraw";
// import {usePathname} from 'next/navigation'

// export default function Navbar() {
//   const pathname = usePathname()

//   return (
//     // <div className={`header ${isVisible ? 'visible' : 'hidden'}`} >
//     //     {/* Logo on the right */}
//     //       <div className={"logoStyle"}>
//     //         <Link href="/">
//     //           <Image
//     //             // src={'/asset/nav_logo.svg'}
//     //             src={'/asset/home/images/logo.png'}
//     //             height={25}
//     //             color={"#3F4FE4"}
//     //             width={116}
//     //             style={{ backgroudColor: "#3F4FE4" }}
//     //             className="nav_logo"
//     //             alt="logo"
//     //           />
//     //         </Link>
//     //       </div>
//     //       {/* Menu items in the middle */}
//     //       <div
//     //         // theme="dark"
//     //         mode="horizontal"
//     //         className="middle"
//     //       >
//     //         <div className="middle-items">
//     //           <NavProdects />
//     //           <span key="Home">
//     //             <Link href="/pricing" className="nav-link">
//     //               Pricing
//     //             </Link>
//     //           </span>
//     //           <span key="Blogs">
//     //             <Link href="/blog" className="nav-link">
//     //               Blog
//     //             </Link>
//     //           </span>
//     //           <span key="About-Us">
//     //             <Link href="/about-us" className="nav-link">
//     //               About Us
//     //             </Link>
//     //           </span>
//     //         </div>
//     //       </div>

//     //       {/* Two items on the left */}
//     //       <NavRightSection />
//     //       {/* Mobile view item */}
//     //       <NavDrawer />
//     // </div>

//     <header>
//       <nav>
//         <ul className="flex space-x-4">
//           <li>
//             <a href="/" className={pathname === "/" ? "active" : ""}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="/about"
//               className={pathname === "/about" ? "active" : ""}
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="/contact"
//               className={pathname === "/contact" ? "active" : ""}
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { Arrow, Call, Message, ThreeLine } from "@/icon/icons";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [hasHover, setHasHover] = useState(null);

  const handleMoveRoute = (route) => {
    router.push(route);
  };

  return (
    <header className="absolute z-20 w-full shadow">
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
        <Link href="https://shine.creativemox.com/pranaveda">
          <div className="flex w-8 h-8">
            <Image
              src="/asset/Logo_Pranaveda.png"
              alt="Divyamrut Logo"
              className="w-full h-full"
              width={150}
              height={150}
            />
            <h2 className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF]">
              Divyamrut
            </h2>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex gap-8 font-jost text-[18px] font-[500] text-left text-[#FFFFFF] items-center">
          <div
            className="relative group"
            onMouseEnter={() => setHasHover("HomePage")}
            onMouseLeave={() => setHasHover(null)}
          >
            <div className="flex items-center">
              <h5 className={`${hasHover == "HomePage" ? "text-a2c0d56" : "#FFFFFF"} leading-[3.5em] cursor-pointer`}>HomePage</h5>
              <Arrow fill={hasHover == "HomePage" ? "#99C24A" : "#FFFFFF"} />
            </div>
            {/* Dropdown */}
            <div className={`absolute left-0 hidden group-hover:block shadow-lg  py-2 px-4 text-nowrap cursor-pointer
            bg-white hover:bg-d49ac81
            text-a2c0d56 hover:text-text ${
                  pathname == "/home-page-2"
                    ? "text-text bg-d49ac81" : ""
                }
            `}>
              <h5
                onClick={() => handleMoveRoute("/home-page-2")}
              >
                HomePage 2
              </h5>
            </div>
          </div>
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
            onMouseEnter={() => setHasHover("Services")}
            onMouseLeave={() => setHasHover(null)}
          >
            <div className="flex items-center">
              <h5 className={`${hasHover == "Services" ? "text-a2c0d56" : "#FFFFFF"} leading-[3.5em] cursor-pointer`}>Services</h5>
              <Arrow fill={hasHover == "Services" ? "#99C24A" : "#FFFFFF"} />
            </div>
            {/* Dropdown */}
            <div className={`absolute left-0 hidden group-hover:block shadow-lg  py-2 px-4 text-nowrap cursor-pointer
            bg-white hover:bg-d49ac81
            text-a2c0d56 hover:text-text ${
                  pathname == "/pricing-plan"
                    ? "text-text bg-d49ac81" : ""
                }
            `}>
              <h5
                onClick={() => handleMoveRoute("/pricing-plan")}
              >
                Pricing Plan
              </h5>
            </div>
          </div>
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
              <h5 className={`${hasHover == "Pages" ? "text-a2c0d56" : "#FFFFFF"} leading-[3.5em] cursor-pointer`}>Pages</h5>
              <Arrow fill={hasHover == "Pages" ? "#99C24A" : "#FFFFFF"} />
            </div>
            {/* Dropdown */}
            <div className={`absolute left-0 hidden group-hover:block shadow-lg text-nowrap cursor-pointer
            bg-white 
            text-a2c0d56 
            `}>
              <h5
                className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                  pathname == "/team" ? "text-text bg-d49ac81" : ""
                }`}
                onClick={() => handleMoveRoute("/team")}
              >
                Team
              </h5>
              <h5
                className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                  pathname == "/Gallery" ? "text-text bg-d49ac81" : ""
                }`}
                onClick={() => handleMoveRoute("/Gallery")}
              >
                Gallery
              </h5>
              <h5
                className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                  pathname == "/FAQ" ? "text-text bg-d49ac81" : ""
                }`}
                onClick={() => handleMoveRoute("/FAQ")}
              >
                FAQ
              </h5>
              <h5
                className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                  pathname == "/log-archiev" ? "text-text bg-d49ac81" : ""
                }`}
                onClick={() => handleMoveRoute("/blog-archiev")}
              >
                Blog Archive
              </h5>
              <h5
                className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-4 ${
                  pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                }`}
                onClick={() => handleMoveRoute("/single-post")}
              >
                Single post
              </h5>
            </div>
          </div>
          <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center px-4 py-2 bg-q4ca25af  hover:bg-q638d055 transition">
            <i className="mr-2 icons icon-calendar"></i> Get Started
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden my-4">
          <ThreeLine fill={"#FFFFFF"} w={50} h={35} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

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

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import {Arrow}  from '@/icon/icons';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMoveRoute = (route) => {
    router.push(route);
  };

  return (
    <header className="absolute z-20 w-full shadow">
      {/* Top Banner */}
      <div className="bg-q638d055  py-2">
        <div className="w-[85%] container mx-auto flex items-center text-white justify-between">
          <p className="text-sm font-medium">
            Get a Free Ayurveda Consultation from PranaVeda!
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <i className="icons icon-envelope"></i>
              <span>support@domain.tld</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="icons icon-phone"></i>
              <span>(888) 4000-2424</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="bg-transparent w-[85%] container mx-auto flex items-center justify-between py-4">
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
        <nav className="hidden lg:flex gap-8 font-jost text-[18px] font-[500]  text-left text-[#FFFFFF]">
            <h5 className={`cursor-pointer hover:text-a2c0d56 ${ pathname == "/homepage" ? "text-a2c0d56" : "text-[#FFFFFF]"}`}
             onClick={() => handleMoveRoute("/homepage")}
            >Homepage</h5>
            <h5 className={`cursor-pointer hover:text-a2c0d56 ${ pathname == "/about-us" ? "text-a2c0d56" : "text-[#FFFFFF]"}`}
             onClick={() => handleMoveRoute("/about-us")}
            >About Us</h5>
          <div className="relative group">
            <div className="flex items-center" >
              <h5 className="hover:text-a2c0d56 mr-2">Services</h5>
              <Arrow  fill={true ? "#99C24A" : "#FFFFFF"} />
              </div>
            {/* Dropdown */}
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <h5 className={`cursor-pointer hover:text-a2c0d56 ${ pathname == "/pricing-plan" ?"text-[#FFFFFF]" : "text-a2c0d56"}`}
             onClick={() => handleMoveRoute("/pricing-plan")}
            >Pricing Plan</h5>
            </div>
          </div>
          <h5 className={`cursor-pointer hover:text-a2c0d56 ${ pathname == "/contact-us" ? "text-a2c0d56" : "text-[#FFFFFF]"}`}
             onClick={() => handleMoveRoute("/contact-us")}
            >Contact Us</h5>
          <div className="relative group">
            <h5 className="hover:text-a2c0d56 cursor-pointer">Pages</h5>
            {/* Dropdown */}
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <Link href="/team">
                <h5 className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                  Team
                </h5>
              </Link>
              <Link href="/gallery">
                <h5 className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                  Gallery
                </h5>
              </Link>
              <Link href="/faq">
                <h5 className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                  FAQ
                </h5>
              </Link>
              <Link href="/blog-archive">
                <h5 className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                  Blog Archive
                </h5>
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-gray-600 focus:outline-none">
          <i className="icons icon-menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

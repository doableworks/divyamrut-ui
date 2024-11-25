"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import NavRightSection from "./Nav-right-section";
// import NavProdects from "./Nav-Product";
// import NavDrawer from "../nav_component/NavDraw";
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()


  return (
    // <div className={`header ${isVisible ? 'visible' : 'hidden'}`} >
    //     {/* Logo on the right */}
    //       <div className={"logoStyle"}>
    //         <Link href="/">
    //           <Image
    //             // src={'/asset/nav_logo.svg'}
    //             src={'/asset/home/images/logo.png'}
    //             height={25}
    //             color={"#3F4FE4"}
    //             width={116}
    //             style={{ backgroudColor: "#3F4FE4" }}
    //             className="nav_logo"
    //             alt="logo"
    //           />
    //         </Link>
    //       </div>
    //       {/* Menu items in the middle */}
    //       <div
    //         // theme="dark"
    //         mode="horizontal"
    //         className="middle"
    //       >
    //         <div className="middle-items">
    //           <NavProdects />
    //           <span key="Home">
    //             <Link href="/pricing" className="nav-link">
    //               Pricing
    //             </Link>
    //           </span>
    //           <span key="Blogs">
    //             <Link href="/blog" className="nav-link">
    //               Blog
    //             </Link>
    //           </span>
    //           <span key="About-Us">
    //             <Link href="/about-us" className="nav-link">
    //               About Us
    //             </Link>
    //           </span>
    //         </div>
    //       </div>

    //       {/* Two items on the left */}
    //       <NavRightSection />
    //       {/* Mobile view item */}
    //       <NavDrawer />
    // </div>

    <header>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

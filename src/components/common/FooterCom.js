"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, Youtube } from "../../icon/social-media";

export default function FooterCom() {
  const path = usePathname();
  const router = useRouter();
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  const PagesLink = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about-us" },
    { label: "Contact", route: "/contact-us" },
    { label: "Cart", route: "/cart" },
    { label: "Blogs", route: "/blogs" },
  ];

  const exploreLinks = [
    { label: "Shipping Policy", route: "/shipping-policy" },
    { label: "Payment Policy", route: "/payment-policy" },
    { label: "Privacy Policy", route: "/privacy-policy" },
    { label: "Refund Policy", route: "/refund-policy" },
    { label: "Cancellation Policy", route: "/cancellation-policy" },
    { label: "Terms & Conditions", route: "/terms-conditions" },
  ];

  const handleMoveRoute =(path)=>{
    router.push(path)
  }

  return (
    <>
      <footer className="bg-[--yellow]">
        <div className="container mx-auto w-[85%] pt-10">
          <div className="grid grid-cols-1 [@media(min-width:420px)]:grid-cols-2 [@media(min-width:900px)]:grid-cols-3 gap-5 pb-10">
            <div className="">
            <h4 className="section-title [@media(min-width:420px)]:!text-left mb-4">
                Pages
              </h4>
              {PagesLink.map((item, index) => (
                <p
                  key={index}
                  onClick={()=>handleMoveRoute(item.route)}
                  className="section_title14!capitalize !text-center [@media(min-width:420px)]:!text-left !text-white mb-4 cursor-pointer hover:!text-[--voilet]"
                >
                  {item.label}
                </p>
              ))}
            </div>
            <div className="">
              <h4 className="section-title [@media(min-width:420px)]:!text-left mb-4">
                Terms and Conditions
              </h4>
              {exploreLinks.map((item, index) => (
                <p
                  key={index}
                  onClick={()=>handleMoveRoute(item.route)}
                  className="section_title14 w-full [@media(min-width:420px)]:w-fit !capitalize [@media(min-width:420px)]:!text-left !text-white  mb-2 cursor-pointer hover:!text-[--voilet]"
                >
                  {item.label}
                </p>
              ))}
            </div>
            <div className="">
              <h4 className="section-title [@media(min-width:420px)]:!text-left  mb-4">
                Contact US
              </h4>
              <p className="text-text !text-[#000000] !leading-[28px] [@media(min-width:420px)]:!text-left">
                413, Sai Arcade, N.S. Road, Mulund West,
                <br />
                Mumbai – 400 080
                <br />
                +91 8169123024
                <br />
                contact@divyamrutnaturals.com
              </p>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#FFFFFF2B] py-2  text-center text-green-100 ">
            <p className="text_text14 !text-[#000000]">
              Copyright © {new Date().getFullYear()} Divyamrut Naturals
            </p>
          {/*
            <div className="flex space-x-2 mt-4">
              {[
                {
                  label: "Facebook",
                  url: "https://www.facebook.com/people/Parmartham/100087884869484/",
                },
                {
                  label: "Instagram",
                  url: "https://www.instagram.com/divyamrut_ayurcare/",
                },
                {
                  label: "Twitter",
                  url: "https://x.com/i/flow/login?redirect_after_login=%2FParmarthamzucol",
                },
                {
                  label: "Youtube",
                  url: "https://www.linkedin.com/showcase/parmartham",
                },
              ].map((items) => (
                <Link key={items.label} href={items.url} target="_blank">
                  <div
                    onMouseEnter={() => setHoveredPlatform(items.label)}
                    onMouseLeave={() => setHoveredPlatform(null)}
                    className="hover:bg-[#FFFFFF] rounded-full p-2"
                  >
                    {items.label == "Facebook" ? (
                      <Facebook
                        fill={
                          hoveredPlatform === items.label
                             ? "#AA218C"
                            : "#FFFFFF"
                        }
                        h={25}
                        w={25}
                      />
                    ) : items.label == "Instagram" ? (
                      <Instagram
                        fill={
                          hoveredPlatform === items.label
                            ? "#AA218C"
                            : "#FFFFFF"
                        }
                        h={25}
                        w={25}
                      />
                    ) : items.label == "Twitter" ? (
                      <Twitter
                        fill={
                          hoveredPlatform === items.label
                             ? "#AA218C"
                            : "#FFFFFF"
                        }
                        h={25}
                        w={25}
                      />
                    ) : (
                      <Youtube
                        fill={
                          hoveredPlatform === items.label
                            ? "#AA218C"
                            : "#FFFFFF"
                        }
                        h={25}
                        w={25}
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>
            */}
          </div>
        </div>
      </footer>
    </>
  );
}

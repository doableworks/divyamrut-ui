import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, Youtube } from "../../icon/social-media";

export default function FooterCom() {
  const path = usePathname();
  const router = useRouter();
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  const sport_links = [
    // { label: "About", route: "/about-us" },
    { label: "Chief Guest", route: "/chief-guest" },
    { label: "Blog", route: "/blog" },
    { label: "Sanskar Kendra", route: "/sanskar-kendra" },
    { label: "Saksham Bharat", route: "/saksham-bharat" },
    { label: "Utsah", route: "/utsah" },
    // { label: "Contact", route: "/contact-us" },
  ];

  const explore_links = [
    { label: "About", route: "/about-us" },
    { label: "Privacy Policy", route: "/privacy-policy" },
    { label: "Disclaimer", route: "/disclaimer" },
    { label: "Copyright", route: "/copyright" },
    { label: "Contact", route: "/contact-us" },
  ];

  const handleMoveRoute = (route) => {
    router.push(route);
  };

  return (
    <>
      <footer className="bg-[#4A5C24] text-white">
        <div className="container mx-auto w-[85%] pt-20">
          {/* <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-8"> */}
          {/* Logo and Description */}
          <div className="flex flex-col md:flex-row gap-20 md:gap-40 pb-16">
            <div className="w-full md:w-[30%]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <img
                    src="/asset/Logo_Pranaveda.png"
                    alt="Divyamrut Logo"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF]">
                  Divyamrut
                </h2>
              </div>
              <p className="mt-4 font-jost text-[18px] font-[400] leading-[1.4em] text-left text-[#FFFFFF]">
                Discover holistic wellness with Divyamrut's expert Ayurveda
                services and transform your health naturally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Get in Touch */}
              <div>
                <h4 className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF] mb-2">
                  Get in Touch
                </h4>
                <hr className="border-t-[5px] border-dotted border-[#6E9039] my-6" />
                <p className="font-jost text-[14px] font-[500]  text-left text-[#99C24A] uppercase">
                  Customer Support
                </p>
                <p className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF] mt-2">
                  (888) 4000-2424
                </p>
              </div>

              {/* Email Support */}
              <div>
                <h4 className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF] mb-2">
                  Email Support
                </h4>
                <hr className="border-t-[5px] border-dotted border-[#6E9039] my-6" />
                <p className="font-jost text-[14px] font-[500]  text-left text-[#99C24A] uppercase">
                  Send Us a Ticket
                </p>
                <p className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF] mt-2">
                  hello@domain.tld
                </p>
              </div>

              {/* Head Office */}
              <div>
                <h4 className="font-suranna text-[28px] font-[400] leading-[1.3em] text-left text-[#FFFFFF] mb-2">
                  Head Office
                </h4>
                <hr className="border-t-[5px] border-dotted border-[#6E9039] my-6" />
                <p className="font-jost text-[14px] font-[500]  text-left text-[#99C24A] uppercase">
                  Visit Us
                </p>
                <p className="font-jost text-[18px] font-[400] leading-[1.4em] text-left text-[#FFFFFF] mt-2">
                  Jln Cempaka Wangi No. 22
                  <br />
                  Jakarta - Indonesia
                </p>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#FFFFFF2B] py-2  text-center text-green-100 ">
            <p className="font-inter text-[13px] font-[400] leading-[1.5em] text-center text-[#FFFFFF]">
              Copyright © {new Date().getFullYear()} Divyamrut, All rights
              reserved. Powered by MoxCreative.
            </p>
            <div className="flex space-x-2 mt-4">
              {[
                {
                  label: "Facebook",
                  url: "https://www.facebook.com/people/Parmartham/100087884869484/",
                },
                {
                  label: "Instagram",
                  url: "https://www.instagram.com/parmartham.zucol/",
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
                            ? "#4A5C24"
                            : "#FFFFFF"
                        }
                      />
                    ) : items.label == "Instagram" ? (
                      <Instagram
                        fill={
                          hoveredPlatform === items.label
                            ? "#4A5C24"
                            : "#FFFFFF"
                        }
                      />
                    ) : items.label == "Twitter" ? (
                      <Twitter
                        fill={
                          hoveredPlatform === items.label
                            ? "#4A5C24"
                            : "#FFFFFF"
                        }
                      />
                    ) : (
                      <Youtube
                        fill={
                          hoveredPlatform === items.label
                            ? "#4A5C24"
                            : "#FFFFFF"
                        }
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

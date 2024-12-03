"use client";
import React, { useState } from "react";
import { Arrow, ThreeLine, Cross } from "@/icon/icons";

const MobileNav = ({ pathname, handleMoveRoute }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [itemOpen, setItemOpen] = useState({
    products: false,
    advanceTherapies: false,
  });

  return (
    <>
      <button
        className="lg:hidden my-4"
        onClick={() => setOpenMobileNav(!openMobileNav)}
      >
        {openMobileNav ? (
          <Cross fill={"#FFFFFF"} w={50} h={35} />
        ) : (
          <ThreeLine fill={"#FFFFFF"} w={50} h={35} />
        )}
      </button>

      {openMobileNav ? (
        <nav className="absolute top-24 left-0 w-screen bg-text flex flex-col gap-2 font-jost text-[16px] md:text-[18px] font-[500] text-left text-a2c0d56 shadow-lg">
          <h5
            className={`cursor-pointer py-2 pt-4 px-5  ${
              pathname == "/about-us" ? "text-text bg-q4ca25af" : "text-a2c0d56"
            }`}
            onClick={() => handleMoveRoute("/about-us")}
          >
            About Us
          </h5>
          <div
            className="relative group"
            //   onMouseEnter={() => setHasHover("Pages")}
            //   onMouseLeave={() => setHasHover(null)}
            onClick={() =>
              setItemOpen({ ...itemOpen, products: !itemOpen.products })
            }
          >
            <div
              className={`cursor-pointer ${
                itemOpen.products ? "text-text bg-q4ca25af" : "text-a2c0d56"
              }`}
            >
              <h5
                className={`flex items-center py-2 px-5 cursor-pointer`}
                onClick={() => handleMoveRoute("/")}
              >
                Products
                <Arrow fill={itemOpen.products ? "#FFFFFF" : "#99C24A"} />
              </h5>
            </div>
            {/* Dropdown */}
            {itemOpen.products && (
              <div
                className={`group-hover:block text-nowrap cursor-pointer 
            text-a2c0d56 
            `}
              >
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/Gallery" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/Gallery")}
                >
                  Kansa Vati Foot Massage Kit
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/FAQ" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/FAQ")}
                >
                  Meditation/Puja Asans
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/log-archiev" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/blog-archiev")}
                >
                  Meditation/Puja Shawls
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/single-post")}
                >
                  Chandan-Kumkum Bindi Kit
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/single-post")}
                >
                  Bath/Aura Cleansing Salt
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/single-post")}
                >
                  Diya
                </h5>
              </div>
            )}
          </div>
          <h5
            className={`cursor-pointer  py-2 px-5  ${
              pathname == "/purpose" ? "text-text bg-q4ca25af" : "text-a2c0d56"
            }`}
            onClick={() => handleMoveRoute("/purpose")}
          >
            Purpose
          </h5>
          <h5
            className={`cursor-pointer py-2 px-5  ${
              pathname == "/mission-and-vision"
                ? "text-text bg-q4ca25af"
                : "text-a2c0d56"
            }`}
            onClick={() => handleMoveRoute("/mission-and-vision")}
          >
            Mission and Vision
          </h5>
          <h5
            className={`cursor-pointer py-2 px-5  ${
              pathname == "/holistic-health"
                ? "text-text bg-q4ca25af"
                : "text-a2c0d56"
            }`}
            onClick={() => handleMoveRoute("/holistic-health")}
          >
            Holistic Health
          </h5>
          <h5
            className={`cursor-pointer py-2 px-5  ${
              pathname == "/contact-us"
                ? "text-text bg-q4ca25af"
                : "text-a2c0d56"
            }`}
            onClick={() => handleMoveRoute("/contact-us")}
          >
            Contact Us
          </h5>
          <div
            className="relative group"
            //   onMouseEnter={() => setHasHover("Pages")}
            //   onMouseLeave={() => setHasHover(null)}
            onClick={() =>
              setItemOpen({
                ...itemOpen,
                advanceTherapies: !itemOpen.advanceTherapies,
              })
            }
          >
            <div
              className={`cursor-pointer ${
                itemOpen.advanceTherapies
                  ? "text-text bg-q4ca25af"
                  : "text-a2c0d56"
              }`}
            >
              <h5 className={`flex items-center py-2 pb-4 px-5 cursor-pointer`}>
                Advance Therapies
                <Arrow
                  fill={itemOpen.advanceTherapies ? "#FFFFFF" : "#99C24A"}
                />
              </h5>
            </div>
            {/* Dropdown */}
            {itemOpen.advanceTherapies && (
              <div
                className={`text-nowrap cursor-pointer
            text-a2c0d56 
            `}
              >
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/team" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/team")}
                >
                  Basic Flower Therapy
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/Gallery" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/Gallery")}
                >
                  Cranio Sacral Therapy
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/FAQ" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/FAQ")}
                >
                  Meru Chikitsa
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/log-archiev" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/blog-archiev")}
                >
                  Marma
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/single-post")}
                >
                  Sound Therapy
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/single-post")}
                >
                  Sujok & Acupuncture
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/single-post")}
                >
                  Osteopathy
                </h5>
                <h5
                  className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                    pathname == "/single-post" ? "text-text bg-d49ac81" : ""
                  }`}
                  onClick={() => handleMoveRoute("/single-post")}
                >
                  Art Therapy
                </h5>
              </div>
            )}
          </div>
          {/* <div className="text-center text-[#FFFFFF] inline-flex items-center justify-center px-4 py-2 bg-q4ca25af  hover:bg-q638d055 transition">
                <i className="mr-2 icons icon-calendar"></i> Get Started
              </div> */}
        </nav>
      ) : null}
    </>
  );
};

export default MobileNav;

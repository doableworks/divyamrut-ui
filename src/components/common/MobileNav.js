"use client";
import React, { useState } from "react";
import { Arrow, ThreeLine, Cross, CartIcon } from "@/icon/icons";
import { Therapies, NavProducts } from "@/contants/contants";
import { useSelector, useDispatch } from "react-redux";
import InitialAvatar from "@/components/common/InitialAvatar";

const MobileNav = ({ pathname, handleMoveRoute }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [hasHover, setHasHover] = useState(null);
  const [itemOpen, setItemOpen] = useState({
    products: false,
    advanceTherapies: false,
    user: false,
    products: false
  });

  return (
    <>
      <button
        className="xl:hidden my-2"
        onClick={() => setOpenMobileNav(!openMobileNav)}
      >
        {openMobileNav ? (
          <Cross fill={"#FFFFFF"} w={50} h={35} />
        ) : (
          <ThreeLine fill={"#FFFFFF"} w={50} h={35} />
        )}
      </button>

      {openMobileNav ? (
        <nav className="absolute top-20 left-0 w-screen bg-text flex flex-col gap-2 font-jost text-[16px] md:text-[18px] font-[500] text-left text-E0A43B shadow-lg">
          <h5
            className={`cursor-pointer py-2 pt-4 px-5  ${
              pathname == "/about-us" ? "text-text bg-q4ca25af" : "text-E0A43B"
            }`}
            onClick={() => handleMoveRoute("/about-us")}
          >
            About Us
          </h5>
          <h5
            className={`cursor-pointer py-2 pt-4 px-5  ${
              pathname == "/consultations"
                ? "text-text bg-q4ca25af"
                : "text-E0A43B"
            }`}
            onClick={() => handleMoveRoute("/consultations")}
          >
            Consultations
          </h5>
          <div
            className="relative group"
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
                  : "text-E0A43B"
              }`}
            >
              <h5 className={`flex items-center py-2 pb-4 px-5 cursor-pointer`}>
                Therapies
                <Arrow
                  fill={itemOpen.advanceTherapies ? "#FFFFFF" : "#E0A43B"}
                />
              </h5>
            </div>
            {/* Dropdown */}
            {itemOpen.advanceTherapies && (
              <div
                className={`text-nowrap cursor-pointer
            text-E0A43B 
            `}
              >
                {Therapies.map((item, index) => (
                  <h5
                    key={index + "nav_therapy"}
                    className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
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
            )}
          </div>
          <h5
            className={`cursor-pointer  py-2 px-5  ${
              pathname == "/health-packages"
                ? "text-text bg-q4ca25af"
                : "text-E0A43B"
            }`}
            onClick={() => handleMoveRoute("/health-packages")}
          >
            Health Packages
          </h5>
          {/* <h5
            className={`cursor-pointer  py-2 px-5  ${
              pathname == "/products" ? "text-text bg-q4ca25af" : "text-E0A43B"
            }`}
            onClick={() => handleMoveRoute("/products")}
          >
            Products
          </h5> */}

          <div
            className="relative group"
            onClick={() =>
              setItemOpen({
                ...itemOpen,
                products: !itemOpen.products,
              })
            }
          >
            <div
              className={`cursor-pointer ${
                itemOpen.products
                  ? "text-text bg-q4ca25af"
                  : "text-E0A43B"
              }`}
            >
              <h5 className={`flex items-center py-2 pb-4 px-5 cursor-pointer`}>
                Products
                <Arrow
                  fill={itemOpen.products ? "#FFFFFF" : "#E0A43B"}
                />
              </h5>
            </div>
            {/* Dropdown */}
            {itemOpen.products && (
              <div
                className={`text-nowrap cursor-pointer
            text-E0A43B 
            `}
              >
                {NavProducts.map((item, index) => (
                  <h5
                    key={index + item.title}
                    className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                      pathname == `/therapy/${item.route}`
                        ? "text-text bg-d49ac81"
                        : ""
                    }`}
                    onClick={() =>handleMoveRoute(`/products/${item.route}`)}
                  >
                    {item.title}
                  </h5>
                ))}
              </div>
            )}
          </div>

          <h5
            className={`cursor-pointer py-2 px-5  ${
              pathname == "/mission-and-vision"
                ? "text-text bg-q4ca25af"
                : "text-E0A43B"
            }`}
            onClick={() => handleMoveRoute("/mission-and-vision")}
          >
            Mission and Vision
          </h5>
          <h5
            className={`cursor-pointer py-2 px-5  ${
              pathname == "/contact-us"
                ? "text-text bg-q4ca25af"
                : "text-E0A43B"
            }`}
            onClick={() => handleMoveRoute("/contact-us")}
          >
            Contact Us
          </h5>
          <h5
            className={`flex items-center gap-2 py-2 px-5  ${
              pathname == "/cart" ? "text-text bg-q4ca25af" : "text-E0A43B"
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
                pathname == "/cart"
                  ? "#FFFFFF"
                  : "#E0A43B"
              }
            />
            Cart
          </h5>

          <div
            className="relative group"
            onClick={() =>
              setItemOpen({
                ...itemOpen,
                user: !itemOpen.user,
              })
            }
          >
            <div
              className={`cursor-pointer ${
                itemOpen.user ? "text-text bg-q4ca25af" : "text-E0A43B"
              }`}
            >
              <h5 className={`flex items-center py-2 pb-4 px-5 cursor-pointer`}>
                <InitialAvatar shape={"ractangle"} user={null} />
                <Arrow fill={itemOpen.user ? "#FFFFFF" : "#99C24A"} />
              </h5>
            </div>
            {/* Dropdown */}
            {itemOpen.user && (
              <div
                className={`text-nowrap cursor-pointer
            text-E0A43B 
            `}
              >
                {true ? (
                  <>
                    <h5
                      className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                        pathname == `/profile` ? "text-text bg-d49ac81" : ""
                      }`}
                      onClick={() => handleMoveRoute("/profile")}
                    >
                      Profile
                    </h5>
                    <h5
                      className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8 ${
                        pathname == `/order-list` ? "text-text bg-d49ac81" : ""
                      }`}
                      onClick={() => handleMoveRoute("/order-list")}
                    >
                      Order List
                    </h5>
                    <h5
                      className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8`}
                      // onClick={() => handleMoveRoute("/order-list")}
                    >
                      Logout
                    </h5>
                  </>
                ) : (
                  <h5
                    className={`leading-[2em] hover:text-text hover:bg-d49ac81 py-2 px-8`}
                    onClick={() => handleLogin()}
                  >
                    Log in/Sign up
                  </h5>
                )}
              </div>
            )}
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default MobileNav;

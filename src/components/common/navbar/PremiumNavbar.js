import { SearchOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import NavCart from "./NavCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import MobileNavbar from "../MobileNavbar";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";
import { closeNav, openNav } from "@/redux/feature/mobileNavSlice";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
import useCartActions from "@/components/cartCom/useCartActions";
import { addCartItemsAfterLogin, clearCart } from "@/redux/feature/cartSlice";
import axiosInstance from "@/lib/axios";

export default function PremiumNavbar({ scrollNum }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { GetApiCartItem } = useCartActions();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = Array.isArray(cartItems) ? cartItems.length : cartItems;
  const { isCartSliderOpen, cartLoader } = useSelector((state) => state.cart);
  const [scrollingNum, setScrollingNum] = useState(scrollNum);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrollAndUp, setIsScrollAndUp] = useState(false);
  const [isShowSearch, setShowSearch] = useState(false);
  const [isSubMenu, setSubMenu] = useState(null);
  const { data: session } = useSession();
  const isMobileNavOpen = useSelector((state) => state.mobileNav.isOpen);
  const [loading, setLoading] = useState(false);
  const menuItems = useSelector((state) => state.menuItems.all);
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const loginPopup = searchParams.get("loginpopup");
      const nextUrl = searchParams.get("next");

      if (loginPopup === "true" && !session) {
        dispatch(setOpenLoginModal(true));
      }
      if (nextUrl && session) {
        router.push(`${nextUrl}`);
      }
    } catch (error) {
      console.log("redirect error", error);
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      GetApiCartItem();
    }
  }, [session]);

  useEffect(() => {
    if (scrollNum < scrollingNum && scrollNum > 300) {
      setIsScrollAndUp(true);
    } else {
      setIsScrollAndUp(false);
    }

    setScrollingNum(scrollNum);

    setIsScrolling(scrollNum > 300);
  }, [scrollNum]);

  const handleShowSearch = () => {
    setShowSearch(!isShowSearch);
  };

  const handleMouseEnter = (item) => {
    setSubMenu(item);
  };

  const handleMouseLeave = () => {
    setSubMenu(null);
  };

  const handleMobileClose = () => {
    dispatch(closeNav(false));
  };

  const handleMobileOpen = () => {
    dispatch(openNav(true));
  };

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
      dispatch(closeNav());
      dispatch(setOpenLoginModal(true));
      dispatch(clearCart());
    } catch (error) {
      console.log("onLogOut error", error);
    }
  };

  return (
    <nav
      className={twMerge(
        "relative shadow flex justify-center bg-[--base] z-30 transition-all duration-3000 ease-in-out top-0 w-full",
        isScrollAndUp
          ? "fixed translate-y-0"
          : isScrolling
          ? "absolute translate-y-[-100%]"
          : "absolute translate-y-0"
      )}
    >
      <div className="max-w-7xl flex-grow px-5 [@media(min-width:1340.98px)]:pt-3">
        <section className="flex justify-between items-center">
          <figure>
            <div className="hidden [@media(min-width:1340.98px)]:flex gap-5">
              {/* <button onClick={handleShowSearch} type="button">
                <SearchOutlined
                  style={{ fontSize: "18px" }}
                  className="cursor-pointer"
                />
              </button> */}
            </div>

            {isMobileNavOpen ? (
              <button
                type="button"
                onClick={handleMobileClose}
                className="[@media(min-width:1340.98px)]:hidden flex justify-center rounded-md"
              >
                <CloseOutlined
                  className="text-[25px]"
                  style={{ color: "#3c3c3d" }}
                />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleMobileOpen}
                className="[@media(min-width:1340.98px)]:hidden flex justify-center rounded-md"
              >
                <MenuOutlined
                  className="text-[25px]"
                  style={{ color: "#3d3d3d" }}
                />
              </button>
            )}
          </figure>
          <figure>
            <Link href="/">
              <Image
                src="/asset/logo/logo.svg"
                alt="Divyamrut Logo"
                width={400}
                height={400}
                quality={100}
                className={twMerge(
                  "transition-all duration-600 ease-in-out block lg:hidden",
                  isScrolling
                    ? "h-16 w-20"
                    : "h-16 w-20 [@media(min-width:1340.98px)]:h-[95px] [@media(min-width:1340.98px)]:w-[115px]"
                )}
              />
              <Image
                src="/asset/logo/logo.svg"
                alt="Divyamrut Logo"
                width={400}
                height={400}
                quality={100}
                className={twMerge(
                  "transition-all duration-600 ease-in-out hidden lg:block",
                  isScrolling
                    ? "h-16 w-20"
                    : "h-16 w-20 [@media(min-width:1340.98px)]:h-[95px] [@media(min-width:1340.98px)]:w-[115px]"
                )}
              />
            </Link>
          </figure>
          <figure className="flex gap-5 items-center">
            {!session ? (
              <li
                onClick={handleLogin}
                className="navbar-li [@media(max-width:1340.98px)]:hidden"
              >
                Account
              </li>
            ) : (
              <>
                <li
                  onClick={onLogOut}
                  className="navbar-li [@media(max-width:1340.98px)]:hidden"
                >
                  Logout
                </li>

                <Link href="/profile">
                  <li className="navbar-li [@media(max-width:1340.98px)]:hidden">
                    Profile
                  </li>
                </Link>
              </>
            )}
            <NavCart count={cartCount} cartLoader={cartLoader} />
          </figure>
        </section>

        <hr className="my-4 hidden [@media(min-width:1340.98px)]:block" />

        <section className="hidden [@media(min-width:1340.98px)]:block">
          {!isShowSearch ? (
            <ul className="flex gap-8 justify-center h-8">
              {menuItems.map((item, index) => (
                <Link href={item.path ? item.path : ""} key={index}>
                  <li
                    onMouseEnter={() => handleMouseEnter(item)}
                    className={twMerge(
                      "relative navbar-li h-full",
                      item.path &&
                        "hover:border-b-2 border-b-[--yellow] box-border"
                    )}
                  >
                    {item.isNew && (
                      <span className="bg-[--yellow] absolute text-white font-sans text-[10px] rounded rounded-br-none px-1 font-medium top-[-20px]">
                        New
                      </span>
                    )}
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <div className="flex gap-4 justify-center mb-4">
              <label
                htmlFor="siteSearchInput"
                className="w-full border-2 border-[#3131312f] rounded h-12 flex items-center p-2"
              >
                <input
                  placeholder="SEARCH THE WEB STORE..."
                  id="siteSearchInput"
                  type="search"
                  className="border-none outline-none p-2 w-full bg-transparent flex-grow text-[14px] font-sans"
                />
                <SearchOutlined
                  style={{ fontSize: "20px", color: "#31313165" }}
                />
              </label>
              <button type="button" onClick={handleShowSearch}>
                <CloseOutlined style={{ fontSize: "20px" }} />
              </button>
            </div>
          )}
        </section>
      </div>

      {isSubMenu?.parentSlug && isSubMenu?.subMenu?.length > 0 && (
        <section
          onMouseLeave={handleMouseLeave}
          className={twMerge(
            "shadow flex justify-center duration-3000 ease-in-out absolute z-40 w-full bg-[--base]",
            isScrollAndUp ? "top-[140px]" : "top-[172px]"
          )}
        >
          <div className="max-w-7xl flex-grow px-3 pb-3">
            <hr />
            <figure className="p-5">
              <section>
                <ul className="grid grid-cols-4 py-4 gap-4">
                  {isSubMenu.subMenu.map((sub, index) => (
                    <Link
                      href={
                        isSubMenu?.parentSlug == "/products/" &&
                        sub.sub_categories?.length == 0
                          ? `/products/${sub.slug}/`
                          : `${isSubMenu.parentSlug}/${sub.slug}/`
                      }
                      key={index}
                    >
                      <li className="navbar-li hover:text-[--voilet]">
                        {sub.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </section>
            </figure>
          </div>
        </section>
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
    </nav>
  );
}

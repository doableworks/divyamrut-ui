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
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { closeNav, openNav } from "@/redux/feature/mobileNavSlice";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";

const initialMenuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Consultations", path: "/consultations" },
  {
    label: "Therapies",
    subMenu: [],
  },
  { label: "Health Packages", path: "/health-packages" },
  {
    label: "Products",
    path: "/products",
    subMenu: [],
  },
  { label: "Contact Us", path: "/contact-us" },
];

export default function PremiumNavbar({
  scrollNum,
  therapySubmenu,
  productSubMenu,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = Array.isArray(cartItems) ? cartItems.length : cartItems;

  const [scrollingNum, setScrollingNum] = useState(scrollNum);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrollAndUp, setIsScrollAndUp] = useState(false);

  const [isShowSearch, setShowSearch] = useState(false);
  const [isSubMenu, setSubMenu] = useState(null);

  const { data: session } = useSession();

  const isMobileNavOpen = useSelector((state) => state.mobileNav.isOpen);

  const menuItems = initialMenuItems.map((each) => {
    switch (each.label) {
      case "Therapies":
        return {
          label: "Therapies",
          parentSlug: "/therapy/",
          subMenu: therapySubmenu,
        };
      case "Products":
        return {
          label: "Products",
          path: "/products",
          parentSlug: "/products/",
          subMenu: productSubMenu,
        };
      default:
        return each;
    }
  });

  useEffect(() => {
    if (scrollNum < scrollingNum && scrollNum > 50) {
      setIsScrollAndUp(true);
    } else {
      setIsScrollAndUp(false);
    }

    setScrollingNum(scrollNum);

    setIsScrolling(scrollNum > 30);
  }, [scrollNum]);

  const handleShowSearch = () => {
    setShowSearch(!isShowSearch);
  };

  const handleMouseEnter = (subMenu, parentSlug) => {
    setSubMenu({
      subMenu,
      parentSlug,
    });
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
          ? "fixed translate-y-[-100%]"
          : "absolute translate-y-0"
      )}
    >
      <div className="max-w-7xl flex-grow px-5 [@media(min-width:1340.98px)]:pt-3">
        <section className="flex justify-between items-center">
          <figure>
            <div className="hidden [@media(min-width:1340.98px)]:flex gap-5">
              <button onClick={handleShowSearch} type="button">
                <SearchOutlined
                  style={{ fontSize: "18px" }}
                  className="cursor-pointer"
                />
              </button>
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
                src="/asset/divyamrut_transparent_logo.webp"
                alt="Divyamrut Logo"
                width={100}
                height={100}
                className={twMerge(
                  "transition-all duration-600 ease-in-out",
                  isScrolling ? "h-16 w-20" : "h-16 w-20 [@media(min-width:1340.98px)]:h-[95px] [@media(min-width:1340.98px)]:w-[115px]"
                )}
              />
            </Link>
          </figure>
          <figure className="flex gap-5 items-center">
            <li
              onClick={handleLogin}
              className="navbar-li [@media(max-width:1340.98px)]:hidden"
            >
              Account
            </li>
            <NavCart count={cartCount} />
          </figure>
        </section>

        <hr className="my-4 hidden [@media(min-width:1340.98px)]:block" />

        <section className="hidden [@media(min-width:1340.98px)]:block">
          {!isShowSearch ? (
            <ul className="flex gap-8 justify-center h-8">
              {menuItems.map((item, index) => (
                <Link href={item.path ? item.path : ""} key={index}>
                  <li
                    onMouseEnter={() =>
                      handleMouseEnter(item.subMenu, item.parentSlug)
                    }
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

      {isSubMenu?.parentSlug && isSubMenu?.subMenu.length > 0 &&  (
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
                {/* <p className="navbar-by-category">Shop by Category</p> */}
                {/* <hr /> */}
                <ul className="grid grid-cols-4 py-4 gap-4">
                  {isSubMenu.subMenu.map(
                    (sub, index) =>
                      sub.is_published && (
                        <Link
                          href={`${isSubMenu.parentSlug}/${sub.slug}/`}
                          key={index}
                        >
                          <li className="navbar-li hover:text-[--voilet]">
                            {sub.name}
                          </li>
                        </Link>
                      )
                  )}
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

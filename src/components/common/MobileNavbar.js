import React, { useState } from "react";
import { Drawer } from "antd";
import { useRouter } from "nextjs-toploader/app";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { closeNav } from "@/redux/feature/mobileNavSlice";
import {
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CustomButton from "@/components/common/CustomButton";
import InitialAvatar from "./InitialAvatar";
import UserProfileModalComp from "./UserProfileModalComp";
import { CartIcon } from "@/icon/icons";

const MobileNavbar = ({
  menuItems,
  session,
  pathname,
  handleMoveRoute,
  handleLogin,
  onLogOut,
}) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const isMobileNavOpen = useSelector((state) => state.mobileNav.isOpen);

  const handleAction = (path) => {
    router.push(path);
    handleMobileClose();
  };

  const handleMobileClose = () => {
    dispatch(closeNav(false));
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <Drawer
    placement="left"
      open={isMobileNavOpen}
      closable={false}
      title={
        <>
          <div className="flex justify-between items-center">
            <Image
              src={"/asset/divyamrut_transparent_logo.webp"}
              height={100}
              width={100}
              onClick={() => handleAction("/")}
              className="cursor-pointer h-16 w-20"
              alt="connect_image"
            />
            <button
              type="button"
              onClick={handleMobileClose}
              className="flex justify-center p-3 backdrop-blur-lg rounded-md"
            >
              <CloseOutlined className="text-[28px]" />
            </button>
          </div>
        </>
      }
    >
      <div className="h-full flex flex-col justify-between">
        <div className="overflow-y-auto p-1">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <div
                className={`${
                  pathname === item.path
                    ? "text-[--e-global-color-E0A43B] font-bold"
                    : "text-[#3E3E3E]"
                } flex justify-between items-center hover:bg-[--e-global-color-E0A43B] hover:text-white cursor-pointer
                font-suse text-[16px] font-[500] leading-[22px] text-left
                px-5 py-2 rounded`}
                onClick={() =>
                  item.subMenu ? toggleSubMenu(index) : handleAction(item.path)
                }
              >
                {item.label}
                {item.subMenu && (
                  <>
                    {activeSubMenu === index ? (
                      <UpOutlined />
                    ) : (
                      <DownOutlined />
                    )}
                  </>
                )}
              </div>
              {item.subMenu && activeSubMenu === index && (
                <div className="pl-5">
                  {item.subMenu.map(
                    (subItem, subIndex) =>
                      subItem.is_published && (
                        <p
                          key={subIndex}
                          className={`${
                            pathname === subItem?.slug
                              ? "text-[--e-global-color-E0A43B] font-bold"
                              : "text-[#3E3E3E]"
                          } hover:text-[#FF5400] cursor-pointer px-5 py-2`}
                          onClick={() =>
                            handleAction(
                              `${item.parentSlug}/${subItem.slug}/`
                            )
                          }
                        >
                          {subItem?.name}
                        </p>
                      )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border-t-2 pt-3">
          {!session && (
            <CustomButton
              className="site-button-primary !m-0 w-[-webkit-fill-available]"
              title="Login / Sign up"
              onClick={handleLogin}
              icon={<UserOutlined className="text-[12px]" />}
            />
          )}
          {session && (
            <div className="relative flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <InitialAvatar user={session?.user?.user} />
                <p>{session?.user?.user.first_name}</p>
              </div>
              <div className="flex gap-2 items-center">
                <UserProfileModalComp
                  session={session}
                  handleLogout={onLogOut}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileNavbar;

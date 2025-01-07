import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { closeNav } from "@/redux/feature/mobileNavSlice";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const MobileNavbar = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const isMobileNavOpen = useSelector((state) => state.mobileNav.isOpen);

  const handleAction = (path) => {
    router.push(path);
    handleMobileClose();
  };

  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const handleMobileClose = () => {
    dispatch(closeNav(false)); // Dispatch an action to close the navigation
  };

  return (
    <Drawer
      open={isMobileNavOpen}
      closable={false} // Disable default close button
      headerStyle={{ border: "none" }} // Optional: Remove border if needed
      title={
        <>
          <div className="flex justify-between items-center">
            <Image
              src={"/asset/divyamrut_transparent_logo.webp"}
              height={70}
              width={70}
              onClick={() => handleAction("/")}
              className="cursor-pointer"
              alt="connect_image"
            />
            {isMobileNavOpen ? (
              <button
                type="button"
                onClick={handleMobileClose}
                className="flex justify-center p-3 backdrop-blur-lg rounded-md"
              >
                <CloseOutlined className="text-[28px]" />
              </button>
            ) : (
              <button
                type="button"
                className="flex justify-center p-3 backdrop-blur-lg rounded-md"
              >
                <MenuOutlined className="text-[28px]" />
              </button>
            )}
          </div>
          <hr className='mt-3'/>
        </>
      }
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          {/* Navigation Items */}
          <p
            className={`${
              pathname == "/" ? "text-[#FF5400]" : "text-[#3E3E3E]"
            } mb-2 hover:bg-[#2366FF] hover:text-white cursor-pointer
            font-suse text-[16px] font-[500] leading-[22px] text-left
            px-5 py-2 rounded-xl`}
            onClick={() => handleAction("/")}
          >
            Home
          </p>
          <p
            className={`${
              pathname == "/about-us" ? "text-[#FF5400]" : "text-[#3E3E3E]"
            } mb-2 hover:bg-[#2366FF] hover:text-white cursor-pointer
            font-suse text-[16px] font-[500] leading-[22px] text-left
            px-5 py-2 rounded-xl`}
            onClick={() => handleAction("/about-us")}
          >
            About Us
          </p>
          {/* Add other links here */}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileNavbar;

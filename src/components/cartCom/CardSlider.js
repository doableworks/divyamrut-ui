"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { useSelector, useDispatch } from "react-redux";
import { Cross, Delete, EmptyCart } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import { useSession } from "next-auth/react";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
import { closeNav, openNav, toggleNav } from "@/redux/feature/mobileNavSlice";

import {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
  handleCartSlider,
  removeItemComplete,
} from "@/redux/feature/cartSlice";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";

const CardSlider = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const isCartSliderOpen = useSelector((state) => state.cart.openCartSlider);
  const cartItems = useSelector((state) => state.cart.items);
  const [loader, setLoader] = useState();

  const handleCartSliderClose = () => {
    dispatch(handleCartSlider(false));
  };

  // const handleLogin = async() => {
  //    setLoader(true)
  //  await dispatch(closeNav());
  //  await dispatch(setOpenLoginModal(true));
  //   await setLoader(false)
  // };

  const handleLogin = async () => {
    setLoader(true); // Set the loader to true before starting
    try {
      await dispatch(closeNav()); // Close the navigation menu
      await dispatch(setOpenLoginModal(true)); // Open the login modal
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoader(false); // Ensure the loader is stopped regardless of success or failure
    }
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleRemoveItemComplete = (item) => {
    dispatch(removeItemComplete({ id: item.id }));
  };

  const calculateTotal = () => {
    return cartItems
      ?.reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const MoveRoute = (path) => {
    router.push(path);
  };

  const handlecartMove = (path) => {
    handleCartSliderClose();
    MoveRoute(path);
  };

  return (
    <>
      <Drawer
        placement="right"
        open={isCartSliderOpen}
        closable={false}
        destroyOnClose={true}
        onClose={handleCartSliderClose}
        // width={500}
        title={
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-[18px] leading-[24px] font-semibold mb-4">
                Cart Items
              </h2>
              <button
                type="button"
                onClick={handleCartSliderClose}
                className="flex justify-center p-3 backdrop-blur-lg rounded-md"
              >
                <CloseOutlined className="text-[28px]" />
              </button>
            </div>
          </>
        }
        footer={
          <>
            {cartItems?.length > 0 && (
              <div className="w-full mx-auto bg-white p-2">
                {/* Total Section */}

                {/* <h3 className="text-xl font-medium text-center">
                  Total: ₹{calculateTotal()}
                </h3> */}

                {/* Checkout Button */}
                <div className="mt-2 text-right">
                  <CustomButton
                    htmlType="submit"
                    className="site-button-secondary !m-0 !mb-2 w-[-webkit-fill-available] capitalize"
                    title="View Cart"
                    loading={loader}
                    type="submit"
                    onClick={() => handlecartMove("/cart")}
                  />
                  {session ? (
                    <CustomButton
                      htmlType="submit"
                      className="site-button-primary !m-0 w-[-webkit-fill-available] capitalize"
                      title="Proceed to Checkout"
                      loading={loader}
                      type="submit"
                    />
                  ) : (
                    <CustomButton
                      htmlType="submit"
                      className="site-button-primary !m-0 w-[-webkit-fill-available] capitalize"
                      title="Login to Proceed"
                      loading={loader}
                      type="submit"
                      onClick={handleLogin}
                    />
                  )}
                </div>
              </div>
            )}
          </>
        }
      >
        <div className=" w-full flex flex-col justify-between">
          {/* Cart Items */}
          <div className="h-full w-full p-2 flex flex-col justify-between">
            {cartItems?.length > 0 ? (
              <>
                {cartItems?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center p-4 mb-4 border-b "
                  >
                    {/* <input
                  type="checkbox"
                  htmlFor={`cart_product ${item.id}`}
                  className="mr-4"
                  checked={item.selected || false}
                  onChange={() => handleSelectItem(item)}
                /> */}
                    <div className="flex flex-1 flex-row items-start">
                      <Image
                        src={item.image}
                        // src={"/asset/home/ayurvedic-supplement.jpg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md mt-2"
                      />
                      <div className="ml-4 flex-1">
                        {/* <h2 className="font-medium">{item.name}</h2> */}
                        <h2 className="text-heading !text-[14px] !text-left w-[98%]">
                          Lorem Ipsum is simply dummy text of the typesetting
                          industry.
                        </h2>
                        <div className="my-2 flex flex-row items-center gap-2">
                          <label
                            htmlFor={`quantity-${item.id}`}
                            className="mr-2 text-text !text-left"
                          >
                            Quantity:
                          </label>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleRemoveItem(item)}
                              className="px-2 py-1 bg-gray-200 rounded"
                            >
                              -
                            </button>
                            <span span className="text-heading !text-left">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleAddItem(item)}
                              className="px-2 py-1 bg-gray-200 rounded"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <p className="text-text !text-left">
                          Price:{" "}
                          <span className="text-heading !text-left">
                            ₹&nbsp;{item.price}
                          </span>
                        </p>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => handleRemoveItemComplete(item)}
                      >
                        <Cross h={30} w={30} />
                      </div>
                      {/* <Delete h={30} w={30} fill={"red"} /> */}
                    </div>
                  </div>
                ))}
                <div className="bg-FFEEE2 p-4 shadow-md">
                  <h2 className="font-bold text-lg mb-4">Bill details</h2>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span>Sub total</span>
                    </div>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="gap-2">
                      <div className="text-sm text-gray-600">
                        Shipping Charges (Free for orders above ₹500)
                      </div>
                    </div>
                    <span className="">{calculateTotal() <= 500 ? "₹500" :"Free Shipping"}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Grand total</span>

                    <h3 className="text-xl font-medium text-center">
                      ₹{calculateTotal()}
                    </h3>
                  </div>
                </div>
              </>
            ) : (
              <div className="pt-[10rem] flex flex-col jusitify-center items-center px-4">
                <EmptyCart h={150} w={150} fill={"#E0A43B"} />
                <p className="sub_heading mb-4">Oops! Your cart is empty!</p>
                <p className="section-content mb-4">
                  Start adding products now.
                </p>
                <CustomButton
                  htmlType="submit"
                  className="site-button-primary !m-0 w-[-webkit-fill-available] capitalize"
                  title="Browse Products"
                  loading={false}
                  type="submit"
                  onClick={() => MoveRoute("/products")}
                />
              </div>
            )}
          </div>
        </div>
      </Drawer>
      <style jsx global>{`
        .ant-drawer .ant-drawer-body {
          padding: 0px !important;
        }
      `}</style>
    </>
  );
};

export default CardSlider;

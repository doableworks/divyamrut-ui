"use client"
import React from 'react';
import { Drawer } from "antd";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { useSelector, useDispatch } from "react-redux";
import {Cross, Delete} from "@/icon/icons"
import CustomButton from "@/components/common/CustomButton";
import {
    addItem,
    removeItem,
    clearCart,
    selectAllItems,
    unSelectAllItems,
    selectItem,
    unSelectItem,
    handleCartSlider
  } from "@/redux/feature/cartSlice";
import {
    CloseOutlined,
    DownOutlined,
  
  } from "@ant-design/icons";


const CardSlider = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const isCartSliderOpen = useSelector((state) => state.cart.openCartSlider);
    const cartItems = useSelector((state) => state.cart.items);

    console.log("ggggggggggg", isCartSliderOpen)

    const handleCartSliderClose = () => {
        dispatch(handleCartSlider(false));
      };

      const handleAddItem = (item) => {
        dispatch(addItem(item));
      };
    
      const handleRemoveItem = (item) => {
        dispatch(removeItem({ id: item.id }));
      };

      const calculateTotal = () => {
        return cartItems
          ?.reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2);
      };


  return (
    <>
    <Drawer
      placement="right"
      open={isCartSliderOpen}
      closable={false}
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

      footer={<div className="w-full mx-auto bg-white p-2">
        {/* Total Section */}
        
        <h3 className="text-xl font-medium text-center">Total: ₹{calculateTotal()}</h3>
      
        {/* Checkout Button */}
        <div className="mt-6 text-right">

        <CustomButton
                  htmlType="submit"
                  className="site-button-primary !m-0 w-[-webkit-fill-available] capitalize"
                  title="Proceed to Checkout"
                  loading={false}
                  type="submit"
                />
        </div>
    </div>}
    >
      <div className=" w-full flex flex-col justify-between">
        {/* Cart Items */}
        <div  className="h-full w-full p-2 flex flex-col justify-between">
        {cartItems?.length > 0 ? (
            cartItems?.map((item) => (
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
                    <h2 className="font-medium w-[98%]">{"Lorem Ipsum is simply dummy text of the typesetting industry."}</h2>
                    <div className="my-2 flex flex-row items-center gap-2">
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="mr-2 text-gray-700"
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
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleAddItem(item)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600">Price: ₹&nbsp;{item.price}</p>
                  </div>
                  <Cross h={30} w={30} />
                  {/* <Delete h={30} w={30} fill={"red"} /> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center my-20">Your cart is empty.</p>
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
  )
}

export default CardSlider

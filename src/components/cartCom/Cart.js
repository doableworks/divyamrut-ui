"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "@/components/common/CustomButton";
import {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
} from "@/redux/feature/cartSlice";
import useCartAction from "@/components/CartAction";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const {
    GetCartItem,
    AddCartItem,
    RemoveCartItem,
    IncreAndDecreCartItemQuantity,
  } = useCartAction();

  const handleAddItem = async (item) => {
    try {
      const response = await AddCartItem(item);
      if (response.statu == 201) {
        dispatch(addItem(response.data.data));
      }
    } catch (error) {
      console.log("error 555", error);
    }
  };

  const handleRemoveItem = async (item) => {
    try {
      const response = await RemoveCartItem(item.uid);
      if (response.statu == 201) {
        // dispatch(addItem(response.data.data));
        dispatch(removeItem({ id: item.id }));
      }
    } catch (error) {
      console.log("error 555", error);
    }
  };

  const handleSelectAll = (item) => {
    dispatch(selectAllItems(item));
  };

  const handleUnselectAll = (item) => {
    dispatch(unSelectAllItems(item));
  };

  const calculateTotal = () => {
    return cartItems
      ?.reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleSelectItem = (item) => {
    try {
      item.selected
        ? dispatch(unSelectItem({ id: item.id }))
        : dispatch(selectItem({ id: item.id }));
    } catch (error) {}
  };
  const allSelected =
    cartItems.length > 0 && cartItems.every((item) => item.selected === true);
  return (
    <div className="relative flex flex-col lg:flex-row gap-10 z-20 py-10 min-h-screen">
      {/* item render section */}
      <div className="w-full lg:w-[75%] mx-auto bg-white shadow-md rounded-lg">
        <div className="p-6 h-full">
          <div className="flex justify-between">
            <h2 className="text-[18px] leading-[24px] font-semibold mb-4">
              Cart Items
            </h2>
            {cartItems.length > 0 && (
              <span
                onClick={() => dispatch(clearCart())}
                className="section-content underline cursor-pointer"
              >
                Clear Cart
              </span>
            )}{" "}
          </div>
          {cartItems.length > 0 && (
            <div className="flex justify-between items-center mb-2">
              <label
                className="section-content flex items-center  underline cursor-pointer"
                onClick={() =>
                  allSelected ? handleUnselectAll() : handleSelectAll()
                }
              >
                {/* <input
                  type="checkbox"
                  onChange={(e) =>
                    allSelected ? handleUnselectAll() : handleSelectAll()
                  }
                  checked={allSelected}
                /> */}
                {allSelected ? (
                  <span>UnSelect all items</span>
                ) : (
                  <span>Select all items</span>
                )}
              </label>
            </div>
          )}

          {/* Cart Items */}
          {cartItems?.length > 0 ? (
            cartItems?.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-4 mb-4 last:border-none"
              >
                <input
                  type="checkbox"
                  htmlFor={`cart_product ${item.id}`}
                  className="mr-4"
                  checked={item.selected || false}
                  onChange={() => handleSelectItem(item)}
                />
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
                    <h2 className="text-heading !text-left w-[98%]">
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry.
                    </h2>
                    <p className="text-text !text-left">
                      Price:{" "}
                      <span className="text-heading !text-left">
                        ₹&nbsp;{item.price}
                      </span>
                    </p>
                    <div className="mt-2 flex flex ">
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
                        <span className="text-heading !text-left">
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
                  </div>
                  <p className="hidden md:block section-title">
                    ₹&nbsp;{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center my-20">Your cart is empty.</p>
          )}
        </div>
      </div>
      {/* Checkout section */}
      <div className="w-full lg:w-[40%] xl:w-[30%] h-fit mx-auto bg-white shadow-md rounded-lg flex flex-col p-6 lg:sticky self-start lg:top-40">
        <div className="mt-4">
          <h2 className="text-heading !text-left mb-4">Bill details</h2>
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="section-content !text-left">Sub total</span>
            </div>
            <span className="text-heading !text-right">
              {" "}
              ₹{calculateTotal()}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="gap-2">
              <div className="section-content !text-left">
                Shipping Charges <br /> (Free for orders above ₹500)
              </div>
            </div>
            <span className="text-heading !text-right">
              {calculateTotal() <= 500 ? "₹500" : "Free Shipping"}
            </span>
          </div>
          <div className="flex justify-between items-center font-bold">
            <span className="section-title !text-left">Grand total</span>
            <h3 className="sub_heading !text-right ">₹{calculateTotal()}</h3>
          </div>
        </div>
        <div className="mt-6 text-right">
          <CustomButton
            htmlType="submit"
            className="site-button-primary !m-0 w-[-webkit-fill-available] capitalize"
            title="Proceed to Checkout"
            loading={false}
            type="submit"
            // onClick={() => MoveRoute("/products")}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

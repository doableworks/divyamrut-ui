"use client";
import React, { useState } from "react";
import Image from "next/image";

// const items = [
//   {
//     id: 1,
//     image: "/asset/home/ayurvedic-supplement.jpg",
//     name: "Pahadi Zipper Hoodie in Comfy Style - Black - X-Large",
//     quantity: 1,
//     price: 1150.0,
//   },
//   {
//     id: 2,
//     image: "/asset/home/ayurvedic-supplement.jpg",
//     name: "Artisan-Crafted Kullu Women's Shawl - Sheep Wool Beauty",
//     quantity: 3,
//     price: 5250.0,
//   },
//   {
//     id: 3,
//     image: "/asset/home/ayurvedic-supplement.jpg",
//     name: "Hand woven Wool Meditation Prayer Scarf Wrap Blanket",
//     quantity: 1,
//     price: 1848.0,
//   },
// ];

const OrderSummary = ({orderList, increaseQuantity, decreaseQuantity}) => {


  const calculateSubtotal = () =>
    orderList.reduce((total, item) => total + item.price * item.quantity, 0);


  const OrderItem = ({ item }) => (
    <tr className="border-b">
      <td className="py-2 flex space-x-4">
        <Image
          src={item.image}
          alt={item.name}
          width={60}
          height={40}
          className="rounded-md"
        />
        <div>
          <p className="font-semibold text-gray-800">{item.name}</p>
          <div className="my-2 flex flex-row items-center gap-2">
            <label
              htmlFor={`quantity-${item.id}`}
              className="mr-2 text-text !text-left"
            >
              Quantity:
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseQuantity(item.id, item.quantity)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span span className="text-heading !text-left">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="text-right text-gray-800 font-medium">
        ₹{(item.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  );

  return (
    <div className="w-full max-w-4xl mx-auto pr-[-2rem] ">
       <h2 className="text-xl font-bold mb-4">Order Summary</h2>


      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr >
              <th className="text-left text-gray-600 font-semibold py-2">
                PRODUCT
              </th>
              <th className="text-right text-gray-600 font-semibold py-2">
                SUBTOTAL
              </th>
            </tr>
          </thead>
        </table>
        <div
          style={{
            height: "35vh",
            overflowY: "scroll",
            paddingLeft:"5px",
            paddingRight:"10px"
            // width:""
          }}
        >
          <table className="w-full">
            <tbody>
              {orderList?.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800">Subtotal</span>
          <span className="text-gray-800 font-medium">
            ₹{calculateSubtotal().toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800">Shipping</span>
            <span className="text-green-600 font-medium">{calculateSubtotal().toFixed(2) <= 500 ? "500" :"Free Shipping"}</span>
          </div>
          <div className="text-sm text-gray-600">
            Shipping Charges (Free for orders above ₹500)
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <span className="font-bold text-lg">TOTAL</span>
          <span className="text-lg font-bold text-gray-800">
            ₹{calculateSubtotal().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

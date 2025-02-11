"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card } from "antd";

const OrderSummary = ({
  orderList,
  deliveryAddress,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const calculateSubtotal = () =>
    orderList.reduce(
      (total, item) =>
        total + item.product_detail.price * item.quantity,
      0
    );

  const OrderItem = ({ item }) => (
    <tr className="border-b">
      <td className="py-2 flex space-x-4">
        <Image
          src={item.product_detail.image}
          alt={item.product_detail.title}
          width={60}
          height={40}
          className="rounded-md"
        />
        <div>
          <p className="font-semibold text-gray-800">
            {item.product_detail.title}
          </p>
          <div className="my-2 flex flex-row items-center gap-2">
            <label
              htmlFor={`quantity-${item.uid}`}
              className="mr-2 text-text !text-left"
            >
              Quantity:
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseQuantity(item.uid)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="text-heading !text-left">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(item.uid)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="text-right text-gray-800 font-medium">
        ₹{(item.product_detail.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  );

  // const tempDaTa =  Array.from({ length: 10, }, ()=>orderList[0])

  return (
    <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Order Summary Section */}
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr>
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
              // height: "35vh",
              // overflowY: "scroll",
              paddingLeft: "5px",
              paddingRight: "10px",
            }}
          >
            <table className="w-full">
              <tbody>
                {orderList?.map((item) => (
                  <OrderItem key={item.uid} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sticky Section for Delivery Address and Payment Amount */}
      <div className="lg:sticky lg:top-4 space-y-6">
        {/* Delivery Address Section */}
        <Card className="p-8 border rounded-lg shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div>
              <span className="font-bold text-lg">Delivery Address</span>
                <p className="section-title !text-left">
                  {deliveryAddress.address_type}
                </p>
                <div className="mt-3 text-gray-700 space-y-1">
                  <span className="section-content !text-left">{`${deliveryAddress?.first_name} ${deliveryAddress?.last_name}`}</span>
                  <span className="section-content !text-left">{`${deliveryAddress?.apartment}, ${deliveryAddress?.street}`}</span>
                  <span className="section-content !text-left">{`${deliveryAddress?.address}, ${deliveryAddress?.sector}`}</span>
                  <span className="section-content !text-left">
                    {deliveryAddress?.landmark}
                  </span>
                  <span className="section-content !text-left">{`${deliveryAddress?.city} ${deliveryAddress?.state},  ${deliveryAddress?.pin_code}`}</span>
                  <p className="section-content !text-left">{`email : ${deliveryAddress?.email}`}</p>
                  <p className="section-content !text-left">{`Phone number :  ${deliveryAddress?.phone}`}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Amount Section */}
        <div className="p-6 border rounded-lg shadow-md space-y-4 bg-white">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Subtotal</span>
            <span className="text-heading">
              ₹{calculateSubtotal().toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-800">Shipping</span>
              <span className="text-heading">
                {calculateSubtotal().toFixed(2) <= 500
                  ? "₹500"
                  : "Free Shipping"}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Shipping Charges (Free for orders above ₹500)
            </div>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="font-bold text-lg">TOTAL</span>
            <span className="text-lg font-bold text-gray-800">
              ₹
              {Number(calculateSubtotal().toFixed(2)) +
                Number(
                  calculateSubtotal().toFixed(2) <= 500 ? 500 : 0
                )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;


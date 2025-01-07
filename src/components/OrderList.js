"use client"
import React from "react";
import Image from "next/image";

const OrderList = () => {
  const orderListArr = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "/asset/home/ayurvedic-supplement.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 199.99,
      image: "/asset/home/ayurvedic-supplement.jpg",
      quantity: 2,
    },
  ];

  return (
    <div className="flex gap-10 relative z-20 mx-auto w-[90%] md:w-[85%] py-10">
      <div className="w-full mx-auto bg-white shadow-md rounded-lg">
        <div className="p-6 h-full">
          <div className="flex justify-between">
            <h2 className="text-[18px] leading-[24px] font-semibold mb-4">
              Order list
            </h2>
          </div>

          {/* Cart Items */}
          {orderListArr?.length > 0 ? (
            orderListArr?.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-4 mb-4 last:border-none"
              >
                <div className="flex flex-1 flex-row items-start">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md mt-2"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="font-medium">{item.name}</h2>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">quantity : {item.quantity}</p>
                  </div>
                  <p className="text-gray-900 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center my-20">Your order list is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;

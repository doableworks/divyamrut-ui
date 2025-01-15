"use client";
import React from "react";
import ProductImages from "./ProductImages";

const ProductDetail = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 min-h-screen p-6">
      {/* Product Images Section */}
      <div className="lg:w-1/2 flex flex-col items-center">
        <div className="w-72 h-72 border border-gray-300 rounded-lg overflow-hidden">
          <img
            src="/asset/home/ayurvedic-supplement.jpg"
            alt="Amul Taaza Milk"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex space-x-2 mt-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-16 h-16 border border-gray-300 rounded-md overflow-hidden"
            >
              <img
                src="/asset/home/ayurvedic-supplement.jpg"
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="lg:w-1/2 flex flex-col">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            Ayurvedic Supplement
          </h1>
          <p className="text-sm text-gray-600">
            <p className="text-sm text-gray-600">
              GLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </p>
          <p className="text-sm text-gray-600">
            Get your order delivered to your doorstep at the earliest.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-900">₹28</p>
          <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
        </div>
        <button className="w-32 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700">
          ADD
        </button>

        {/* Why Shop Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Why shop from us?</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span className="text-yellow-500 text-lg">🚀</span>
              <div>
                <p className="text-sm font-bold">Superfast Delivery</p>
                <p className="text-sm text-gray-600">
                  Get your order delivered to your doorstep at the earliest.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-yellow-500 text-lg">💰</span>
              <div>
                <p className="text-sm font-bold">Best Prices & Offers</p>
                <p className="text-sm text-gray-600">
                  Best price destination with offers directly from
                  manufacturers.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-yellow-500 text-lg">🛒</span>
              <div>
                <p className="text-sm font-bold">Wide Assortment</p>
                <p className="text-sm text-gray-600">
                  Choose from a wide range of products across categories.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

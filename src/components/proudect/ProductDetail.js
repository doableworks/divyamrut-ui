"use client";
import Image from "next/image";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-10 min-h-screen">
      {/* Product Images Section */}
      <div className="md:sticky self-start md:top-20 lg:w-1/2 flex flex-col items-center">
        <div className="w-[100%] md:w-[100%] min-w-[300px] max-w-[700px] h-auto border border-gray-300 rounded-lg overflow-hidden">
          <Image
            height={200}
            width={200}
            src="/asset/home/ayurvedic-supplement.jpg"
            alt="Amul Taaza Milk"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex space-x-2 mt-8">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden"
            >
              <Image
                height={200}
                width={200}
                src="/asset/home/ayurvedic-supplement.jpg"
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-900">₹28</p>
          <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
        </div>
        <div className="flex flex-row gap-8">
          <button className="site-button-primary w-1/2 h-[60px]">Add to Cart</button>
          <button className="site-button-primary w-1/2 h-[60px]">Buy Now</button>
        </div>

        {/* Long Content to Scroll */}
        <div className="mt-8 space-y-8">
          {[...Array(5)].map((_, index) => (
            <div key={index}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


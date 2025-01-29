"use client"
import React from "react";

const ProductBanner = ({srcUrl}) => {

  return (
    <div
      className="bg-cover bg-center h-full bg-text w-[100%] overflow-hidden"
      style={{
        backgroundImage:`url(${srcUrl})`
      }}
    >
    </div>
  );
};

export default ProductBanner;

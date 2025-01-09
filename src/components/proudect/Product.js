"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";

const Product = ({ title, image, description, route }) => {
  const router = useRouter();

  return (
    <div
      className="relative flex flex-col justify-between bg-[white] shadow-lg w-full cursor-pointer rounded overflow-hidden"
      onClick={() => router.push(`/products/${route}/detail`)}
    >
      <Image
        src={image}
        width={180}
        height={200}
        className="w-full h-auto"
        alt="img"
      />
      <div className="flex-grow flex flex-col px-6 py-4">
        <h6 className="section-title !normal-case !text-[1.5rem] !text-left mb-4 hover:!text-[--yellow]">
          {title}
        </h6>
        <p className="section-title !normal-case !text-[1rem] !text-left !text-gray-400">
          {description}
        </p>
      </div>
      {/* <div>
        <div className="border-t-[0.5px] border-q4d462f5 " />
        <div className="text-sm text-gray-500 px-6 py-4">
          {date} • {comments}
        </div>
      </div> */}
    </div>
  );
};

export default Product;

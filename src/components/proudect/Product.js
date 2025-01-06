"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";


const Product = ({ title, image, description, route }) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col justify-between bg-[white] shadow-lg  max-w-sm w-full cursor-pointer"
    onClick={() => router.push(`/products/${route}/detail`)}>
      <div>
        <Image
          src={image}
          width={180}
          height={200}
          className="w-full h-auto"
          alt="img"
        />
        <div className="px-6 py-5">
          <h6 className="text-left mb-5">
            <strong className="font-suranna text-[18px] font-[400] leading-[22px] text-secondary">
              {title}
            </strong>
          </h6>
          <p className="font-jost text-primary text-[14px] font-[400] leading-[18px] text-a2c0d56 text-left">
            {description}
          </p>
        </div>
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

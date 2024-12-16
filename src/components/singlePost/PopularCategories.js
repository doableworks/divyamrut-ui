import React from 'react'
import { Folder, Search } from "@/icon/icons";


const list2 = [
    "Ayurveda Basics",
    "Natural Health",
    "Life Balance",
    "Holistic Health",
    "Ayurvedic Herbs",
    "Daily Wellness",
  ];

const PopularCategories = () => {
  return (
    <section>
    <div className="relative p-4 bg-[#F9F3EB] mb-5 flex justify-center items-center">
          <div className="absolute top-6 left-5 z-20">
          <Search h={30} w={30} fill={"#4A5C24"}  />
          </div>
          <input
          type="text"
          id="type to start searching..."
          placeholder="Type to start searching..."
          className="relative w-full p-3 pl-[40px] font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#FFFFFF] border-[#FFFFFF]"
        />
    </div>
    <div className="p-4 bg-[#F9F3EB]">
      <h2 className="font-suranna text-[22px] md:text-[28px] font-[400] leading-[1.4em] text-secondary mb-4">Popular Categories</h2>
      <ul className="space-y-2">
        {list2.map((category, index) => (
          <>
            <li
              key={index}
              className="flex items-center space-x-2 font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-secondary "
            >
              <Folder h={30} w={30} fill={"#99C24A"} />
              <span>{category}</span>
            </li>
            {list2.length > index + 1 && (
              <div className="border-t-[0.5px] border-q4d462f5 my-5" />
            )}
          </>
        ))}
      </ul>
      </div>
    </section>
  )
}

export default PopularCategories
import React from 'react'
import { Message } from "@/icon/icons";


const NewLatterForm = () => {
  return (
    <section className="p-4 bg-custom-radial2 ">
    <p className="mt-2 font-suranna text-[18px] md:text-[21px] font-[400] leading-[1.4em] text-text">
      Sign up for updates, news, insights, or promotions.
    </p>
    <form className="mt-4 space-y-2">
      <input
        type="text"
        id="name"
        placeholder="Name"
        className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#FFFFFF] border-[#FFFFFF]"
      />

      <input
        type="email"
        id="email"
        placeholder="Email"
        className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#FFFFFF] border-[#FFFFFF]"
      />
      <button
        type="submit"
        className="w-full bg-q4ca25af text-white p-4 flex items-center justify-center gap-2"
      >
        <Message fill={"#FFFFFF"} w={25} h={25} /> Sign Up
      </button>
    </form>
  </section>
  )
}

export default NewLatterForm
import React from 'react'
import { Message } from "@/icon/icons";


const NewLatterForm = () => {
  return (
    <section className="p-4 bg-gray-200">
    <p className="section-title !text-[1.2rem] !text-[--neutral]">
      Sign up for updates, news, insights, or promotions.
    </p>
    <form className="mt-4 space-y-2">
      <input
        type="text"
        id="name"
        placeholder="Name"
        className="rounded w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#FFFFFF] border-[#FFFFFF]"
      />

      <input
        type="email"
        id="email"
        placeholder="Email"
        className="rounded w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#FFFFFF] border-[#FFFFFF]"
      />
      <button
        type="submit"
        className="site-button-primary w-full flex gap-2 !mt-4"
      >
        <Message fill={"#FFFFFF"} w={25} h={25} /> Sign Up
      </button>
    </form>
  </section>
  )
}

export default NewLatterForm
import React from 'react'
import Image from "next/image";


const blogPosts = [
    {
      title: "Balancing Your Life: Ayurveda Tips from PranaVeda Experts",
      date: "August 6, 2024",
      image: "/asset/gril_img.jpg",
    },
    {
      title: "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
      date: "August 6, 2024",
      image: "/asset/gril_img.jpg",
    },
    {
      title:
        "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
      date: "August 6, 2024",
      image: "/asset/gril_img.jpg",
    },
    {
      title: "How PranaVeda Helps You Achieve Holistic Health and Vitality",
      date: "August 6, 2024",
      image: "/asset/gril_img.jpg",
    },
    {
      title: "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
      date: "August 6, 2024",
      image: "/asset/gril_img.jpg",
    },
    {
      title: "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
      date: "August 6, 2024",
      image: "/asset/gril_img.jpg",
    },
  ];
  

const PoppularPosts = () => {
  return (
    <section className="p-4 bg-white shadow-md">
    <h2 className="highlight-heading !text-left !text-[2rem]">Poppular Posts</h2>
    <div className="grid grid-cols-1 gap-4">
      {blogPosts.map((post, index) => (
        <div key={index + 11} className="flex gap-4">
          <Image
            src={post.image}
            alt={"img"}
            width={60}
            height={60}
            className="h-[60px] w-[60px]"
          />
          <div>
            <h3 className="section-title !text-left mb-2 !normal-case !text-[16px] !text-[--neutral]">{post.title}</h3>
            <p className="font-inter text-[11px] md:text-[13px] font-[400] leading-[1.4em] text-[#adadad]">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default PoppularPosts
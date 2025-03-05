import React from 'react'
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from "@/icon/social-media";

const socialLinks = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/people/Parmartham/100087884869484/",
    icon:<Facebook fill={"#FFFFFF"} />
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/parmartham.zucol/",
    icon: <Instagram fill={"#FFFFFF"} />
  },
  {
    label: "Twitter",
    url: "https://x.com/i/flow/login?redirect_after_login=%2FParmarthamzucol",
    icon: <Twitter fill={"#FFFFFF"} />
  },
  {
    label: "Youtube",
    url: "https://www.linkedin.com/showcase/parmartham",
    icon: <Youtube fill={"#FFFFFF"} />
  },
]

const ShareReview = () => {
  return (
    <section>
    <div className="border-t-[0.5px] border-q4d462f5 mt-10" />
    <div className="flex  items-center gap-4 py-5">
      <span className="font-suranna text-[16px] md:text-[21px] font-[400] leading-[1.4em] text-secondary">Share this:</span>
      <div className="flex space-x-2">
        {socialLinks.map((items) => (
          <Link key={items.label} href={items.url} target="_blank">
            <div className="bg-[--yellow] hover:bg-[--voilet] rounded-full p-2">
              {items.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div className="border-t-[0.5px] border-q4d462f5 " />
    <div className="flex items-center my-5 p-4 bg-[--green] text-white">
      <div className="w-24 h-18  overflow-hidden mr-4">
        <img
          src="/asset/gril_img.jpg" 
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="font-suranna text-[16px] md:text-[21px] font-[400] leading-[1.4em] text-text">Natalie Stanley</h2>
        <p className="font-jost text-[14px] md:text-[16px] font-[400] leading-[1.4em] text-text">
          Hi, this is dummy biographical info for the design template
          kit moxcreative. If any questions do hesitate to send us a
          message on the profile page ThemeForest.
        </p>
      </div>
    </div>
  </section>
  )
}

export default ShareReview
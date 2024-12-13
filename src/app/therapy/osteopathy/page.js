"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainBanner from "@/components/common/MainBanner";
import { Facebook, Instagram, Twitter, Youtube } from "@/icon/social-media";
import { Message, Folder } from "@/icon/icons";

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

const list2 = [
  "Ayurveda Basics",
  "Natural Health",
  "Life Balance",
  "Holistic Health",
  "Ayurvedic Herbs",
  "Daily Wellness",
];

const page = () => {
  const heading = "Meditation/Puja Shawls";
  const subHeading = "Trusted by millions, validated by you.";

  return (
    <div>
      <MainBanner heading={heading} subHeading={subHeading} />
      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-20 md:py-32">
      <div className="lg:flex gap-8">
        {/* Main Content */}
        <main className="lg:w-2/3">
          <article className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <p>
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.
            </p>
            <div className="flex justify-center gap-10">
              <img
                src="/asset/gril_img.jpg"
                alt="Article Image"
                className="rounded-lg"
              />
              <div>
              <p>
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet.
              </p>
              <p>
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
              </div>
            </div>
            <p>
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
              eget eros faucibus tincidunt. Duis leo.
            </p>
            <p>
              Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
              metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
              hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; In ac dui quis mi
            </p>
          </article>
          {/* Article and Comments Section */}
          <section>
            <div className="border-t-[0.5px] border-q4d462f5 " />
            <div className="flex  items-center gap-4 py-5">
              <span className="font-bold">Share this:</span>
              <div className="flex space-x-2">
                {[
                  {
                    label: "Facebook",
                    url: "https://www.facebook.com/people/Parmartham/100087884869484/",
                  },
                  {
                    label: "Instagram",
                    url: "https://www.instagram.com/parmartham.zucol/",
                  },
                  {
                    label: "Twitter",
                    url: "https://x.com/i/flow/login?redirect_after_login=%2FParmarthamzucol",
                  },
                  {
                    label: "Youtube",
                    url: "https://www.linkedin.com/showcase/parmartham",
                  },
                ].map((items) => (
                  <Link key={items.label} href={items.url} target="_blank">
                    <div className="bg-d49ac81 hover:bg-[#4A5C24] rounded-full p-2">
                      {items.label == "Facebook" ? (
                        <Facebook fill={"#FFFFFF"} />
                      ) : items.label == "Instagram" ? (
                        <Instagram fill={"#FFFFFF"} />
                      ) : items.label == "Twitter" ? (
                        <Twitter fill={"#FFFFFF"} />
                      ) : (
                        <Youtube fill={"#FFFFFF"} />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t-[0.5px] border-q4d462f5 " />
            <div className="flex items-center my-5 p-4 bg-[#4A5C24] text-white">
              {/* Profile Image */}
              <div className="w-16 h-16  overflow-hidden mr-4">
                <img
                  src="/asset/gril_img.jpg" // Replace with the path to your image
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Content */}
              <div>
                <h2 className="text-lg font-bold">Natalie Stanley</h2>
                <p className="text-sm">
                  Hi, this is dummy biographical info for the design template
                  kit moxcreative. If any questions do hesitate to send us a
                  message on the profile page ThemeForest.
                </p>
              </div>
            </div>
          </section>

          {/* Form section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold">Leave a Reply</h2>
            <form className="space-y-4 mt-4">
              <div>
                <label
                  required
                  htmlFor="Comment"
                  className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                >
                  Comment*
                </label>
                <textarea
                  id="Comment"
                  // placeholder="Comment"
                  className="w-full p-3  h-32 resize-none font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                ></textarea>
                <div>
                  <label
                    required
                    htmlFor="name"
                    className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                  >
                    Name*
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                  />
                </div>
                <div>
                  <label
                    required
                    htmlFor="email"
                    className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                  >
                    Email*
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    id="name"
                    // placeholder="Name"
                    className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="save-info" />
                <label htmlFor="save-info" className="text-sm">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button
                type="submit"
                className="bg-q4ca25af text-white p-2 flex items-center justify-center gap-2"
              >
                Post Comment
              </button>
            </form>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8">
          {/* Popular Categories */}
          <section className="p-4 bg-[#F9F3EB]">
            <h2 className="text-lg font-bold mb-4">Popular Categories</h2>
            <ul className="space-y-2">
              {list2.map((category, index) => (
                <>
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <Folder h={30} w={30} />
                    <span>{category}</span>
                  </li>
                  {list2.length > index + 1 && (
                    <div className="border-t-[0.5px] border-q4d462f5 my-5" />
                  )}
                </>
              ))}
            </ul>
            <div></div>
          </section>

          {/* Newsletter */}
          <section className="p-4 bg-custom-radial2 ">
            <p className="mt-2">
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
                <Message fill={"#FFFFFF"} w={25} h={25} /> Send Message
              </button>
            </form>
          </section>

          {/* Latest Post */}
          <section className="p-4 bg-white shadow-md ">
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="grid grid-cols-1 gap-4">
              {blogPosts.map((post, index) => (
                <div className="flex gap-4 p-4">
                  <Image
                    src={post.image}
                    alt={"img"}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px]"
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
      </div>
    </div>
  );
};

export default page;

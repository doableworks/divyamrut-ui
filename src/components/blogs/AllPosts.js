"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NoImageAvailabe } from "@/contants/contants";
import { formatDateToDDMMYYYY } from "@/utils/dates";
import Link from "next/link";
import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const AllPosts = ({ data }) => {
  const [blogPosts, setBlogPosts] = useState(data);

  const fetchBlogPosts = async () => {
    try {
      setBlogPosts((prev) => ({ ...prev, loading: true }));

      const url = `${apiUrl}/blogs/blogs?page=${blogPosts.page}&page_size=${blogPosts.pageSize}`;

      const response = await axios.get(url);

      setBlogPosts((prev) => ({
        ...prev,
        results: [...prev.results, ...response.data.results],
        loading: false,
      }));
    } catch (err) {
      console.log("Unable to fetch Blogs", err);
      setBlogPosts((prev) => ({ ...prev, error: true, loading: false }));
    }
  };


  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts?.results.map((post, index) => (
        <Link href={`/blogs/${post.slug}`} key={index}>
          <li className="flex flex-col gap-4 group cursor-pointer">
            <img
              src={post?.overview_image || NoImageAvailabe}
              alt="img"
              className="h-56 w-full bg-cover bg-center rounded"
            />
            <div className="space-y-2">
              <h3 className="section-title !font-semibold !capitalize !text-left  group-hover:!text-[--yellow] line-clamp-2">
                {post?.title}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: post?.short_description }}
                className="text-xs text-primary line-clamp-4"
              ></p>
              {post?.created && (
                <p className="text-xs text-[--voilet]">
                 Created: {formatDateToDDMMYYYY(post?.created)}
                </p>
              )}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default AllPosts;

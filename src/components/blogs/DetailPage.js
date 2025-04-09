"use client";
import React from "react";
import "@/styles/rich-tag-styles.css";

const DetailPage = ({ data }) => {
  
  return (
    <article className="space-y-4">
      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="rich-content"
      ></div>
    </article>
  );
};

export default DetailPage;

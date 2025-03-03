"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from "nextjs-toploader/app";
import "@/styles/not-found.css";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="not-found-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">
        The Page you are looking for doesn&apos;t exist.
      </h2>
      <p className="error-description">
        This page may have been moved or you typed wrong url
      </p>
      <button className="site-button-primary" type="primary" onClick={() => router.push("/")}>
        Back to home
      </button>
    </div>
  );
};

export default NotFound;

"use client";
import React, { useEffect } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "./loader.css";

const BlockPageLoader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="block-page-loader-overlay">
      <div className="block-page-loader-content">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48, color:'#fff' }} spin />} />
      </div>
    </div>
  );
};

export default BlockPageLoader;

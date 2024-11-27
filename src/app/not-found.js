"use client"
import React from 'react';
// import {Button} from "antd";
import {useRouter} from "nextjs-toploader/app";

const NotFound = () => {
    const router = useRouter()
  return (
    <div className="not-found-container">
      <h1 className="error-code">
        404
      </h1>

    </div>
  );
};

export default NotFound;

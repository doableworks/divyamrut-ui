"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { NoImageAvailabe } from "@/contants/contants";

const ImageMedium = ({ imgSrc }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoom}>
      <img
        alt="img"
        src={imgSrc ? imgSrc : NoImageAvailabe}
        fill={true}
        className="object-contain h-full w-full aspect-square"
      />
    </ControlledZoom>
  );
};

export default ImageMedium;

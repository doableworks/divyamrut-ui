"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { NoImageAvailabe } from "@/contants/contants";

const ImageMedium = ({ imgSrc, id }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoom}>
      <img
        id={id}
        key={imgSrc}
        alt="img"
        src={imgSrc || NoImageAvailabe}
        className="object-contain w-full h-full aspect-[3/4]"
      />
    </ControlledZoom>
  );
};

export default ImageMedium;

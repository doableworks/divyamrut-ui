"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import useImageSrcSet from "@/hooks/useImageSrcSet";

const ImageMedium = ({ imgSrc, id, aspect=3/4 }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const imageSrcSet = useImageSrcSet(imgSrc);

  const handleZoom = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoom}>
      {/* <div className="aspect-[3/4] bg-white"> */}
      <div className={`aspect-[${aspect}] bg-white`}>
        <img
          id={id}
          key={imgSrc}
          alt="img"
          className="object-cover h-full w-full "
          loading="lazy"
          src={imgSrc}
        />
      </div>
    </ControlledZoom>
  );
};

export default ImageMedium;

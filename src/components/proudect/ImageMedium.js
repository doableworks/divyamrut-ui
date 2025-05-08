"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import useImageSrcSet from "@/hooks/useImageSrcSet";

const ImageMedium = ({ imgSrc, id }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const imageSrcSet = useImageSrcSet(imgSrc);

  const handleZoom = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoom}>
      <div className="bg-white aspect-[4/3]">
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

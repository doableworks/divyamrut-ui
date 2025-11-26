"use client";
import { NoImageAvailabe } from "@/contants/contants";
import React, { useState, useRef, useEffect } from "react";
import ImageMedium from "./ImageMedium";

const ProductImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);
  const thumbnailsRef = useRef(null);

  // Initialize image refs
  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, images.length);
  }, [images]);

  // Check if viewport is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Handle scrolling on mobile view
  useEffect(() => {
    if (isMobile && sliderRef.current) {
      const handleScroll = () => {
        if (sliderRef.current) {
          const scrollPosition = sliderRef.current.scrollLeft;
          const slideWidth = sliderRef.current.offsetWidth;
          const newIndex = Math.round(scrollPosition / slideWidth);
          if (
            newIndex !== activeIndex &&
            newIndex >= 0 &&
            newIndex < images.length
          ) {
            setActiveIndex(newIndex);
          }
        }
      };

      sliderRef.current.addEventListener("scroll", handleScroll);
      return () => {
        if (sliderRef.current) {
          sliderRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [activeIndex, isMobile, images.length]);

  // Handle desktop scrolling to update active thumbnail
  useEffect(() => {
    if (!isMobile && galleryRef.current) {
      const handleScroll = () => {
        const galleryTop = galleryRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Find which image is most visible in the viewport
        let maxVisibleIndex = 0;
        let maxVisibleArea = 0;

        imageRefs.current.forEach((imgRef, index) => {
          if (imgRef) {
            const rect = imgRef.getBoundingClientRect();
            const visibleTop = Math.max(rect.top, 0);
            const visibleBottom = Math.min(rect.bottom, viewportHeight);
            const visibleArea = Math.max(0, visibleBottom - visibleTop);

            if (visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              maxVisibleIndex = index;
            }
          }
        });

        if (maxVisibleIndex !== activeIndex) {
          setActiveIndex(maxVisibleIndex);

          // Scroll the thumbnail into view in the thumbnails container
          if (
            thumbnailsRef.current &&
            thumbnailsRef.current.children[maxVisibleIndex]
          ) {
            thumbnailsRef.current.children[maxVisibleIndex].scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeIndex, isMobile]);

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);

    // If on mobile, scroll to the selected image
    if (isMobile && sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else if (!isMobile && imageRefs.current[index]) {
      // On desktop, scroll to the selected full-size image
      imageRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Function to handle dot navigation click on mobile
  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Ensure we have images to display
  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-100 w-full h-64 flex items-center justify-center">
        No images available
      </div>
    );
  }

  return (
    <div className="w-full flex flex-1">
      {/* Desktop View */}
      {!isMobile && (
        <div className="hidden md:flex gap-4 w-full">
          <div
            ref={thumbnailsRef}
            className="w-16 flex flex-col gap-2 sticky top-32 self-start max-h-[80vh] overflow-y-auto flex-shrink-0"
            style={{ scrollbarWidth: "thin" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`border-2 w-16 aspect-[3/4] cursor-pointer transition-all flex-shrink-0 ${
                  activeIndex === index
                    ? "border-yellow opacity-100"
                    : "border-gray-200 opacity-70 hover:opacity-100 hover:border-[--voilet]"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image || NoImageAvailabe}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main images stacked vertically */}
          <div ref={galleryRef} className="flex flex-col gap-6 flex-1">
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="w-full"
                id={`image-${index}`}
              >
                <div className="relative w-full h-fit">
                  <ImageMedium imgSrc={image || NoImageAvailabe} aspect={1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile View - Horizontal Slider */}
      {isMobile && (
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full w-full flex-shrink-0 snap-center"
              >
                <div className="relative w-full">
                  <ImageMedium imgSrc={image || NoImageAvailabe} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? "bg-[--voilet] w-4" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;

import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductImage = ({imgSrc}) => (
  <>
    {/* <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Product Image",
          isFluidWidth: true,
          src: "/asset/home/ayurvedic-supplement.jpg",
          sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
        },
        largeImage: {
          src: "/asset/home/ayurvedic-supplement.jpg",
     
          width: 1200,
          height: 1800,
        },
        enlargedImageContainerStyle: {
          zIndex: 30,
          backgroundColor: "#fff",

          position: "absolute",
          top: "0px",
          right: "400px",
        },
      }}
    /> */}

    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Product Image",
          isFluidWidth: true,
          src: imgSrc,
          sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
        },
        largeImage: {
          src: imgSrc,
          width: 1200,
          height: 1200,
        },
        enlargedImageContainerStyle: {
          zIndex: 30,
          backgroundColor: "#fff",
        },

        enlargedImageContainerDimensions :
        {width: '110%', height: '110%'}
      }}
    />
  </>
);

export default ProductImage;

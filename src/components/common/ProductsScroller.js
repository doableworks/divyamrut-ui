// "use client";
// import React from "react";
// import Slider from "react-slick";
// import Product from "@/components/proudect/Product";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProductsScroller = ({ category }) => {
//   var settings = {
//     arrows: true,
//     dots: true,
//     infinite: false,
//     speed: 500,
//     horizontal: true,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <style jsx>{`
//       .slick-slider .slick-prev:before {
//       color: "green" !important;
//       }

//       .slick-next:before {
//       color: red !important;
//       }

//       `}</style>
//       <div className="w-full bg-[#F9F3EB] slider-container mt-10 py-10 px-20 shadow-lg">
//         <h2 className="font-suranna text-[22px] md:text-[28px] font-[400] leading-[1.4em] text-secondary mb-4">
//           {category.title}
//         </h2>
//         <Slider {...settings}>
//           {category &&
//             category?.products.map((product, index) => (
//               <div key={index + category.category} className="px-1">
//               <Product {...product} />
//               </div>
//             ))}
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default ProductsScroller;



"use client";
import React from "react";
import Slider from "react-slick";
import Product from "@/components/proudect/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsScroller = ({ category }) => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full bg-[#F9F3EB] slider-container mt-10 py-10 px-10 shadow-lg">
        <h2 className="font-suranna text-[22px] md:text-[28px] font-[400] leading-[1.4em] text-secondary mb-4">
          {category.title}
        </h2>
        <Slider {...settings} className="custom-slick-slider">
          {category &&
            category?.products.map((product, index) => (
              <div key={index + category.category} className="px-1">
                <Product {...product} />
              </div>
            ))}
        </Slider>
      </div>
      <style jsx global>{`
        .custom-slick-slider .slick-prev:before {
          color: #4A5C24 !important; /* Change to your desired color */
           font-size: 32px !important;
           margin: -10px !important;
        }
        .custom-slick-slider .slick-next:before {
          color: #4A5C24 !important; /* Change to your desired color */
          font-size: 32px !important;

        }
      `}</style>
    </>
  );
};

export default ProductsScroller;


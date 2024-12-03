// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const images = [
//   "/asset/home/ayurvedic-facial-massage.jpg", // Replace with your image URLs
//   "/asset/home/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg",
//   "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
//   "/asset/home/turmeric-with-ginger-and-lemon-tea.jpg",
// ];

// export default function BackgroundImagesSlider() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     // GSAP animation: Scale up the image when it changes
//     if (imageRef.current) {
//       gsap.fromTo(
//         imageRef.current,
//         { scale: 1 },
//         { scale: 1.2, duration: 2, delay: 0.5, ease: "power2.out" }
//       );
//     }

//     // Timer to loop through images
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [currentImageIndex]);

//   return (
//     <div className="h-full overflow-hidden">
//       <div
//         ref={imageRef}
//         className="h-full bg-cover bg-center transition-all duration-1000"
//         style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//         // style={{ backgroundImage: `url('/asset/home/ayurvedic-facial-massage.jpg')`}}
//       />
//       <div class="play-button-container">
//         <div class="ripple"></div>
//         <button class="play-button"> ▶ </button>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play } from "@/icon/icons";
import PlayIcon from "./PlayIcon";


const images = [
  "/asset/home/ayurvedic-facial-massage.jpg",
  "/asset/home/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg",
  "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
  "/asset/home/turmeric-with-ginger-and-lemon-tea.jpg",
];

export default function BackgroundImagesSlider() {
  const [hasHover, setHasHover] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        { scale: 1.2, duration: 2, delay: 0.5, ease: "power2.out" }
      );
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="h-full overflow-hidden relative">
      <div
        ref={imageRef}
        className="h-full bg-cover bg-center transition-all duration-1000 flex justify-center items-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <PlayIcon />
      </div>
    </div>
  );
}

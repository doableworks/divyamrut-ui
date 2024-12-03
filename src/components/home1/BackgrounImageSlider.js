import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import PlayIcon from "./PlayIcon";


const images = [
  // "/asset/home/ayurvedic-facial-massage.jpg",
  "/asset/home/caucasian-woman-having-ayurveda-shirodhara-treatment-in-india.jpg",
  "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg",
  "/asset/home/turmeric-with-ginger-and-lemon-tea.jpg",
];

export default function BackgroundImagesSlider() {
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

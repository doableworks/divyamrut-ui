"use client"
import { useState} from "react";
import { Play } from "@/icon/icons";

const PlayIcon = () => {
    const [hasHover, setHasHover] = useState(false);
  return (
    <div className="relative">
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "80px",
            height: "80px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              // width: "80px",
              // height: "80px",
              width: "4rem",
              height: "4rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              transform: "translate(-50%, -50%) scale(1)",
              animation: "rippleEffect 1.5s infinite",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              // width: "40px",
              // height: "40px",
              width: "3rem",
              height: "3rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              transform: "translate(-50%, -50%) scale(1)",
              animation: "rippleEffect 1.5s infinite",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              // width: "40px",
              // height: "40px",
              width: "3rem",
              height: "3rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              transform: "translate(-50%, -50%) scale(1)",
              animation: "rippleEffect 1.5s infinite",
              zIndex: 0,
            }}
          />
          <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            width: "5rem",
              height: "5rem",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            transform: "translate(-50%, -50%) scale(1)",
            animation: "rippleEffect 1.5s infinite",
            zIndex: 0,
          }}
        />
          <button
            style={{
              position: "absolute",
              top: "15%",
              right: "-5%",
              zIndex: 1,
              width: "5.5rem",
              height: "5.5rem",
              border: "none",
              borderRadius: "50%",
            }}
               onMouseEnter={() => setHasHover(true)}
              onMouseLeave={() => setHasHover(false)}
            className="bg-text hover:bg-q638d055 flex justify-center items-center"
          >
            <Play fill={hasHover ? "#FFFFFF":"#A48125"} h={30}  w={30} alt='img' />
          </button>
        </div>
      <style jsx>{`
        @keyframes rippleEffect {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default PlayIcon
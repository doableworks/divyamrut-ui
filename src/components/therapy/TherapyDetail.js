"use client";
import Image from "next/image";
import BlockPageLoader from "@/components/loader/BlockPageLoader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingModal from "./BookingModal";
import { toggleBookingModal } from "@/redux/feature/therapySlice";

export default function TherapyDetail() {
  const dispatch = useDispatch();
  const [showBlockLoader, setShowBlockLoader] = useState(false);

  const handleBookTherapy = async () => {
    setShowBlockLoader(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setShowBlockLoader(false);
    dispatch(toggleBookingModal(true));
  };

  return (
    <div className="common_page_width !pt-0">
      {showBlockLoader && <BlockPageLoader />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40 items-center">
        <figure className="p-3 flex flex-col justify-center md:items-start">
          <h1 className="highlight-heading md:!m-0 md:!text-left !mb-2">
            Meru Chikitsa
          </h1>
          <p className="section-content md:!text-left">
            Meru Chikitsa, also known as Spinal Manipulation, is a therapeutic
            technique that involves the manual adjustment of the spine and
            musculoskeletal system.
          </p>
          <button
            onClick={handleBookTherapy}
            className="site-button-primary !mt-6 !hidden md:!inline !capitalize"
          >
            Book a Session
          </button>
        </figure>
        <section className="relative h-[550px]">
          <figure className="relative z-10 flex rounded-tr-full rounded-tl-full overflow-hidden min-h-[400px] md:min-h-[500px] border">
            <Image
              src="/asset/home/ayurvedic-supplement.jpg"
              alt="therapy"
              layout="responsive"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </figure>
          <button
            onClick={handleBookTherapy}
            className="site-button-primary w-full md:!hidden h-[60px] !capitalize"
          >
            Book A Session
          </button>
        </section>
      </div>

      <BookingModal />
    </div>
  );
}

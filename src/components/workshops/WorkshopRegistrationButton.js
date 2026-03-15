"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleWorkshopRegistrationModal } from "@/redux/feature/workshopSlice";

export default function WorkshopRegistrationButton({ workshop, showPrice = false, disabled = false }) {
  const dispatch = useDispatch();

  const handleRegisterClick = () => {
    dispatch(toggleWorkshopRegistrationModal({ 
      isOpen: true, 
      workshop: workshop 
    }));
  };

  if (workshop?.is_full) {
    return (
      <button disabled className="site-button-secondary-outlined !w-fit cursor-not-allowed">
        Workshop Full
      </button>
    );
  }

    if (disabled) {
    return (
      <button disabled className="site-button-secondary-outlined !w-fit cursor-not-allowed">
        Workshop completed
      </button>
    );
  }

  return (
    <button
      onClick={handleRegisterClick}
      className={`site-button-primary !m-0 ${showPrice ? '' : 'md:!w-fit !px-16'}`}
    >
      {showPrice ? `Register Now - ₹${workshop.price}` : 'Register Now'}
    </button>
  );
}

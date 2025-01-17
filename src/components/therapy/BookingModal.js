import React, { useState } from "react";
import { Button, Flex, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import "./therapy.css";

export default function BookingModal({}) {
  const dispatch = useDispatch();
  const isBookingModal = useSelector((state) => state.therapy.isBookingModal);

  const handleBookingModal = (payload) => {
    dispatch(toggleBookingModal(payload));
  };

  return (
    <Modal
      centered
      open={isBookingModal}
      onCancel={() => handleBookingModal(false)}
      footer={null}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      <div className="max-h-[80vh] h-72 flex w-full">
        <section className="bg-[--yellow] h-full w-[40%]"></section>
        <section className="bg-[--base]"></section>
      </div>
    </Modal>
  );
}

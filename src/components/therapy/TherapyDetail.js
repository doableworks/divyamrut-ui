"use client";
import { useDispatch } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import { NoImageAvailabe } from "@/contants/contants";
import Testimonial from "@/components/home1/Testimonial";
import FaqUnorder from "@/components/therapy/FaqUnorder";
import { useEffect, useState } from "react";
import TherapyHighlight from "./TherapyHighlight";
import BenefitsOfTherapy from "./BenefitsOfTherapy";

const benefitsInitial = [
  {
    uid: "abc",
    title: "Correction of Misalignments",
    description:
      "Meru Chikitsa aims to correct misalignments, known as subluxations, in the spine. These misalignments can cause pain, restrict movement, and affect nerve function. By applying controlled force to specific areas of the spine, practitioners seek to restore proper alignment, improve joint function, and alleviate pain.",
  },
  {
    uid: "abcdfe",
    title: "Treat Musculoskeletal Conditions",
    description:
      "Meru Chikitsa is typically used to treat musculoskeletal conditions such as back pain, neck pain, and headaches. Chiropractors and osteopaths perform spinal manipulation in clinical settings, while physical therapists may incorporate it into rehabilitation programs.",
  },
  {
    uid: "abcdfedff",
    title: "Boosting Immunity",
    description:
      "Cleansing the body through detoxification and restoring balance in doshas contribute to strengthening the immune system. A balanced body is better equipped to ward off illnesses and infections. It also improves digestion and helps in nutrient absorption leading to good health.",
  },{
    uid: "abcdfedffdsds",
    title: "Managing Chronic Conditions",
    description:
      "Meru Chikitsa is also known to be effective in managing chronic conditions like arthritis, hypertension, and skin disorders by addressing the root cause, reducing inflammation, and solving major issues by strengthening the nervous system.",
  },
];

export default function TherapyDetail({ data }) {
  const dispatch = useDispatch();

  const handleBookTherapy = async () => {
    dispatch(toggleBookingModal(true));
  };

  const { description, faqs, image, name, testimonials } = data;

  const noTitle = "Details are unavailable, or the therapy is unpublished";
  const noDescription =
    "Currently, there is no data available to display. Please check back soon as we continue to update our offerings. If you have specific therapy needs or questions, feel free to contact us—we’re here to assist you on your wellness journey.";

  return (
    <div>
      <div className="!mt-0 common_page_width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40 items-center">
          <figure className="p-3 flex flex-col justify-center md:items-start">
            <h1 className="highlight-heading md:!m-0 md:!text-left !mb-2">
              {name}
            </h1>
            <p
              className="section-content md:!text-left"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <button
              onClick={handleBookTherapy}
              className="site-button-primary !mt-6 !hidden md:!inline !capitalize"
            >
              Book A Session
            </button>
          </figure>
          <section className="relative lg:h-[550px]">
            <figure className="relative z-10 flex rounded-tr-full rounded-tl-full overflow-hidden h-[550px] border-2">
              <img
                src={image || NoImageAvailabe}
                alt="therapy"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
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
      </div>

      <TherapyHighlight />

      <BenefitsOfTherapy details={benefitsInitial} />

      {testimonials.length > 0 && (
        <div>
          <Testimonial className="bg-white" data={testimonials} />
        </div>
      )}

      {faqs?.length > 0 && <FaqUnorder details={faqs} />}
    </div>
  );
}

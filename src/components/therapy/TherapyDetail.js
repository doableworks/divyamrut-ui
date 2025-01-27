"use client";
import { useDispatch } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import { NoImageAvailabe } from "@/contants/contants";
import Testimonial from "@/components/home1/Testimonial";
import FaqUnorder from "@/components/therapy/FaqUnorder";
import { useEffect, useState } from "react";

export default function TherapyDetail({ details }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    description: "",
    faqs: [],
    image: "",
    is_published: true,
    name: "",
    testimonials: [],
  });

  useEffect(() => {
    if (details) {
      setData(details);
    }
  }, [details]);

  const handleBookTherapy = async () => {
    dispatch(toggleBookingModal(true));
  };

  const { description, faqs, image, is_published, name, testimonials } = data;

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
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:simagecale-110"
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

      <div>
        <Testimonial
          className="bg-white hidden lg:block"
          data={testimonials}
          slidesToShow={3}
        />
        <Testimonial className="bg-white block lg:hidden" data={testimonials} />
      </div>

      {faqs?.length > 0 && <FaqUnorder details={faqs} />}
    </div>
  );
}

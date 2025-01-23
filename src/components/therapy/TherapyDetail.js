"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import { NoImageAvailabe } from "@/contants/contants";
import TestimonialSlider from "@/components/home1/Testimonial";
import FaqUnorder from "@/components/therapy/FaqUnorder";
import CommonNoTherapy from "@/components/therapy/CommonNoTherapy";

export default function TherapyDetail({ data }) {
  const dispatch = useDispatch();

  const {
    created,
    description,
    id,
    faqs,
    image,
    is_published,
    name,
    price,
    sku,
    slug,
    testimonial,
    therapy_category,
    title,
    uid,
    updated,
    video,
  } = data;

  const handleBookTherapy = async () => {
    dispatch(toggleBookingModal(true));
  };

  const noTitle = "Details are unavailable, or the therapy is unpublished";
  const noDescription =
    "Currently, there is no data available to display. Please check back soon as we continue to update our offerings. If you have specific therapy needs or questions, feel free to contact us—we’re here to assist you on your wellness journey.";

  return (
    <div>
      {data.is_published ? (
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
              <section className="relative h-[550px]">
                <figure className="relative z-10 flex rounded-tr-full rounded-tl-full overflow-hidden min-h-[400px] md:min-h-[500px] border">
                  <Image
                    src={!!image ? image : NoImageAvailabe}
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
          </div>

          {testimonial?.length > 0 && (
            <TestimonialSlider className="bg-white" details={testimonial} />
          )}

          {faqs.length > 0 && <FaqUnorder details={faqs} />}
        </div>
      ) : (
        <div className="flex justify-center items-center p-5">
          <CommonNoTherapy
            title={noTitle}
            description={noDescription}
            containerClass="min-h-[40vh] lg:min-h-[60vh]"
          />
        </div>
      )}
    </div>
  );
}

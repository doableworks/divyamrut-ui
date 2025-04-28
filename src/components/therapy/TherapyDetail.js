"use client";
import { useDispatch } from "react-redux";
import { toggleBookingModal } from "@/redux/feature/therapySlice";
import { NoImageAvailabe } from "@/contants/contants";
import Testimonial from "@/components/home1/Testimonial";
import FaqUnorder from "@/components/therapy/FaqUnorder";
import TherapyHighlight from "./TherapyHighlight";
import BenefitsOfTherapy from "./BenefitsOfTherapy";

export default function TherapyDetail({ data }) {
  const dispatch = useDispatch();

  const handleBookTherapy = async () => {
    dispatch(toggleBookingModal(true));
  };

  const { description, faqs, image, name, testimonials, is_soon } = data;

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
            {!is_soon ? (
              <button
                onClick={handleBookTherapy}
                className="site-button-primary !mt-6 !hidden md:!inline !capitalize"
              >
                Book A Session
              </button>
            ) : (
              <button
                disabled={true}
                className="site-button-primary !mt-6 !hidden md:!inline !capitalize !cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
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

      {data?.therapy_highlights?.length > 0 && (
        <TherapyHighlight highlights={data.therapy_highlights} />
      )}

      {data?.therapy_benifits?.length > 0 && (
        <BenefitsOfTherapy details={data.therapy_benifits} />
      )}
{/* 
      {testimonials.length > 0 && (
        <div>
          <Testimonial className="bg-white" data={testimonials} />
        </div>
      )} */}

      {faqs?.length > 0 && <FaqUnorder details={faqs} />}
    </div>
  );
}

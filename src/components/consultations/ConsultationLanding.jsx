"use client";
import { NoImageAvailabe } from "@/contants/contants";
import { toggleConsultationModal } from "@/redux/feature/consultationSlice";
import { useDispatch } from "react-redux";
import TherapyHighlight from "../therapy/TherapyHighlight";
import BenefitsOfTherapy from "../therapy/BenefitsOfTherapy";
import ConsaltationTech from "./ConsaltationTech";
import ConsultHighlight from "./ConsultHighlight";

export default function ConsultationLanding({ data }) {
  const dispatch = useDispatch();

  console.log(data);

  const handleChangeConsultationModal = () => {
    dispatch(toggleConsultationModal(true));
  };

  const highlights = [
    data?.key_highlight_1,
    data?.key_highlight_2,
    data?.key_highlight_3,
    data?.key_highlight_4,
    data?.key_highlight_5,
  ];

  return (
    <div>
      <div className="!mt-0 common_page_width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40 items-center">
          <figure className="p-3 flex flex-col justify-center md:items-start">
            <h1 className="highlight-heading md:!m-0 md:!text-left !mb-2">
              {data?.title}
            </h1>
            <p
              className="section-content md:!text-left"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>
            <button
              onClick={handleChangeConsultationModal}
              className="site-button-primary !mt-6 !hidden md:!inline !capitalize"
            >
              Book a Consultation
            </button>
          </figure>
          <section className="relative lg:h-[550px]">
            <figure className="relative z-10 flex rounded-tr-full rounded-tl-full overflow-hidden h-[550px] border-2">
              <img
                src={data?.image || NoImageAvailabe}
                alt="therapy"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </figure>

            <button
              onClick={handleChangeConsultationModal}
              className="site-button-primary w-full md:!hidden h-[60px] !capitalize"
            >
              Book a Consultation
            </button>
          </section>
        </div>
      </div>

      {data?.consultation_benifit?.length > 0 && (
        <ConsultHighlight
          highlights={data.consultation_benifit}
          title={data?.title}
        />
      )}

      {data?.consultation_technique?.length > 0 && (
        <ConsaltationTech details={data.consultation_technique} />
      )}

      <div className="common_page_width">
        <p className="section-title">Best for</p>
        <p className="highlight-heading md:!mt-0">
          Who is this treatment
          <br /> best suited for?
        </p>
        <ul>
          {highlights?.map((each, index) => (
            <li className="section-content !text-left" key={index}>
              <span className="mr-2">{index + 1}</span> <span>{each}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

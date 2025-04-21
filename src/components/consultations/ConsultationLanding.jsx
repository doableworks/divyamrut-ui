"use client";
import { NoImageAvailabe } from "@/contants/contants";

export default function ConsultationLanding({ data }) {
  const description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.";

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
            <button className="site-button-primary !mt-6 !hidden md:!inline !capitalize">
              Book A Session
            </button>
          </figure>
          <section className="relative lg:h-[550px]">
            <figure className="relative z-10 flex rounded-tr-full rounded-tl-full overflow-hidden h-[550px] border-2">
              <img
                src={ NoImageAvailabe}
                alt="therapy"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </figure>

            <button
              className="site-button-primary w-full md:!hidden h-[60px] !capitalize"
            >
              Book A Session
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

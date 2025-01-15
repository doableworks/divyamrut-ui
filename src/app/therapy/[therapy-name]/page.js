import TestimonialSlider from "@/components/home1/Testimonial";
import Image from "next/image";
import FaqUnorder from "@/components/therapy/FaqUnorder";

const TherapyName = () => {
  return (
    <div className="relative flex flex-col items-center md:mt-[5rem]">
      <Image
        src="https://thewhiteelephant.in/wp-content/uploads/2023/11/Rectangle-3859.png"
        alt="cover"
        height={100}
        width={100}
        className="hidden md:inline absolute left-[60%] top-[-20px] z-0 h-[550px] w-[700px] object-cover bg-center"
        layout="fit"
      />

      <div className="mb-28 lg:max-w-6xl p-5 xl:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <figure className="p-3 flex flex-col justify-center md:items-start">
            <h1 className="highlight-heading md:!m-0 md:!text-left">Meru Chikitsa</h1>
            <p className="section-content md:!text-left">
              Meru Chikitsa, also known as Spinal Manipulation, is a therapeutic
              technique that involves the manual adjustment of the spine and
              musculoskeletal system.
            </p>
            <button className="site-button-primary !hidden md:!inline">Book a Session</button>
          </figure>
          <section className="relative h-[550px]">
            <figure className="relative z-10 flex rounded-tr-full rounded-tl-full overflow-hidden min-h-[500px] border">
              <Image
                src="/asset/home/ayurvedic-supplement.jpg"
                alt="therapy"
                layout="responsive"
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </figure>
            <button className="site-button-primary w-full md:!hidden h-[60px] ">Book a Session</button>
          </section>
          
        </div>
      </div>

      <TestimonialSlider className="bg-white" />

      <FaqUnorder />
    </div>
  );
};

export default TherapyName;

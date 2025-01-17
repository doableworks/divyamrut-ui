import TestimonialSlider from "@/components/home1/Testimonial";
import TherapyDetail from "@/components/therapy/TherapyDetail";
import FaqUnorder from "@/components/therapy/FaqUnorder";

const TherapyName = () => {
  return (
    <div className="relative flex flex-col items-center">
      <TherapyDetail />

      <TestimonialSlider className="bg-white" />

      <FaqUnorder />
    </div>
  );
};

export default TherapyName;

import MainBanner from "@/components/common/MainBanner";
import PricingPlans from "@/components/pricing/Pricing";
import Image from "next/image";
import HolisticHealth from "@/components/home1/HolisticHealth"

const page = () => {
  const heading =
    " The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda";
  const subHeading = "Trusted by millions, validated by you.";

  return (
    <div>
      <MainBanner heading={heading} subHeading={subHeading} />

      <div id="pricing" className="w-full relative overflow-hidden">
        <div className="relative z-20 mx-auto w-[90%] md:w-[85%] 2xl:w-full py-32">
          <div className="fade-up">
            <h6 className="font-jost text-d49ac81 text-[14px] font-[500] leading-[1.4em] uppercase text-center">
              Choose Package
            </h6>
            <h2 className="font-suranna text-[50px] font-[400] leading-[1.3em] text-secondary text-center mb-6">
              Transform Your Health with Our 
              <br />Flexible PranaVeda Plans.
            </h2>
          </div>
          <PricingPlans />
        </div>
      </div>
      <HolisticHealth />
    </div>
  );
};

export default page;

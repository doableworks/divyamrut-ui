"use client";
import { NoImageAvailabe } from "@/contants/contants";
import Image from "next/image";
import Divider from "../common/Divider";
import { useRouter } from "next/navigation";
import CustomButton from "../common/CustomButton";

export default function HomeAboutUs({ scrollToRef }) {
  const router = useRouter();

  const handleGoToEnquiry = () => {
    scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <div className="flex justify-center w-full mb-12 mt-6">
      <section className="max-w-2xl flex flex-col justify-center p-6">
        <div className="w-full mb-6 flex justify-center">
          <div className="h-[2px] max-w-sm bg-gray-200 w-full" />
        </div>

        <p className="text-sm text-center mb-6 leading-relaxed">
          Unveil the healthy, fresh and happy you by healing yourself at
          physical, mental, emotional, social and spiritual levels with the help
          of our personalised transformative coaching methods, holistic
          therapies, uplifting products and programs; all focused on uprooting
          the cause of the dis-ease in the mind-body complex from its core with
          meticulous care and comfort.
        </p>
        <p className="text-2xl text-[--voilet] font-prata text-center italic leading-relaxed">
          Be Happy. Be Healthy. Be Ever New.
        </p>
        <div className="flex justify-center">
          <CustomButton
            title="Book a Discovery Call"
            className="site-button-primary !mt-6"
            onClick={handleGoToEnquiry}
          />
        </div>
      </section>
    </div>
  );
}

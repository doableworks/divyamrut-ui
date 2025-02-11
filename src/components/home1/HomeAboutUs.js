"use client";
import { NoImageAvailabe } from "@/contants/contants";
import Image from "next/image";
import Divider from "../common/Divider";
import { useRouter } from "next/navigation";

export default function HomeAboutUs() {
  const router = useRouter();

  const handleGoToAbout = () => {
    router.push("/about-us");
  };

  return (
    <div className="flex justify-center w-full mt-6 lg:mt-0">
      <section className="common_page_width !m-0">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 mt-7 gap-6">
          <div className="w-full h-full overflow-hidden rounded-2xl">
            <Image
              src={NoImageAvailabe}
              alt="about"
              height={100}
              width={100}
              className="h-full w-full bg-cover bg-no-repeat bg-center transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="h-full flex flex-col justify-between items-start gap-5">
            <div>
              <p className="highlight-heading !text-left !text-3xl !mb-3 !mt-0">
                About who we are
              </p>
              <Divider className="mb-4" />
              <p className="section-content !text-left">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>

            <button onClick={handleGoToAbout} className="site-button-primary !mt-0">
              Know More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

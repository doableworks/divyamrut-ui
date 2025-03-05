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
          <div className="w-full h-full overflow-hidden rounded-2xl items-center ">
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
              <p className="!text-3xl highlight-heading !text-left !mb-3 !mt-0">
                About who we are
              </p>
              <Divider className="mb-4" />
              <p className="section-content !text-left">
                We humans co-exist amidst the most wonderful Divine Nature that
                is encompassed with all that’s necessary for a healthy and
                benevolent life.  <br />
                When ancient traditional modalities get harmoniously interwoven
                with modern lifestyle a synergistic outcome of holistic
                well-being dawns.
                <br className="mb-2"/>
                At Nityanava by Divyamrut Naturals we honour our ancient roots
                to bring the nectar of the Divine… Divya Amrut; in forms of
                various health care therapies, life enhancing daily use products
                and transformative programs all together to achieve physical,
                mental, emotional and spiritual well-being.
              </p>
            </div>

            <button
              onClick={handleGoToAbout}
              className="site-button-primary !mt-0"
            >
              Know More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

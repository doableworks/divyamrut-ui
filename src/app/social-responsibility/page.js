import Image from "next/image";
import React from "react";

const page = (props) => {
  return (
    <>
      <section className="common_page_width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="section-title !text-sm !text-left">
              Social Responsibility & Sustainability
            </p>
            <div className="border-b-2 w-12 border-[--neutral] mt-2 mb-4" />
            <p className="!text-2xl  !leading-relaxed font-playfair text-[--yellow] !text-left">
              Our social responsibility is something we take very seriously.
            </p>
          </div>
          <p className="section-content !text-left">
            Since the beginning, Giving back to nature what we gain from it is
            ingrained in the company's DNA and is the fundamental tenet of
            Ayurveda, unlike a passing trend. To lessen our influence on the
            environment and contribute to society, we have carefully considered
            our ingredients and packaging throughout the whole product cycle. To
            create a product that customers would like using and feel good about
            using, we have considered every facet of the product life cycle.
          </p>
        </div>
      </section>
      <div
        className="w-full h-[500px] bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://register.nityanava.com/media/uploads/public/images/986aa785-f7ae-44f4-9e2d-3886efae8635_B9rEsPV.jpg")',
        }}
      />
      <section className="common_page_width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="section-title !text-sm !text-left">
              Social Responsibility
            </p>
            <div className="border-b-2 w-12 border-[--neutral] mt-2 mb-4" />
            <p className="!text-2xl  !leading-relaxed font-playfair text-[--yellow] !text-left">
              Three main strategies for CSR
            </p>
          </div>
          <p className="section-content !text-left">
            We work to give back to society in any way we can, from providing
            jobs for local women to obtaining clean drinking water for
            neighboring villages to manufacturing that guarantees we offer a
            high-end product that is environmentally conscious.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-14 gap-9">
          <section className="space-y-4">
            <div
              style={{
                backgroundImage:
                  'url("https://register.nityanava.com/media/uploads/public/images/5d173f9c-fe47-4c67-bb17-5a4347df56dc.jpg")',
              }}
              className="h-60 w-full bg-cover bg-top rounded-md"
            />
            <p className="section-title !text-left !capitalize !text-sm">
              An Environment Aware of Ecology
            </p>
            <p className="section-content !text-justify">
              We get as much of our ingredients as we can from nearby farmers
              who use ecologically friendly agricultural methods. We also have
              an organic farm at our Lodsi factory where we cultivate premium
              plants and herbs. By emphasizing the use of renewable plant
              sources in our goods, we are continuously searching for methods to
              lessen our carbon footprint. Our production facilities are of the
              highest caliber, featuring green factories by design and
              pharmaceutical-grade production requirements.
            </p>
          </section>

          <section className="space-y-4">
            <div
              style={{
                backgroundImage:
                  'url("https://register.nityanava.com/media/uploads/public/images/5d173f9c-fe47-4c67-bb17-5a4347df56dc.jpg")',
              }}
              className="h-60 w-full bg-cover bg-top rounded-md"
            />
            <p className="section-title !text-left !capitalize !text-sm">
              Economic Empowerment of Women
            </p>
            <p className="section-content !text-justify">
              Our first facility, located in the isolated town of Lodsi,
              Uttarakhand, produces cold-pressed oils, Ubtans, and soaps—all
              labor-intensive operations. Being the only factory in the area, it
              has given the locals long-term self-sufficiency and job prospects.
              Since women have historically been prohibited from working in
              certain situations, we are pleased to have helped local women
              become more economically and socially empowered by giving them
              jobs.
            </p>
          </section>

          <section className="space-y-4">
            <div
              style={{
                backgroundImage:
                  'url("https://register.nityanava.com/media/uploads/public/images/5d173f9c-fe47-4c67-bb17-5a4347df56dc.jpg")',
              }}
              className="h-60 w-full bg-cover bg-top rounded-md"
            />
            <p className="section-title !text-left !capitalize !text-sm">
              An Environment Aware of Ecology
            </p>
            <p className="section-content !text-justify">
              We get as much of our ingredients as we can from nearby farmers
              who use ecologically friendly agricultural methods. We also have
              an organic farm at our Lodsi factory where we cultivate premium
              plants and herbs. By emphasizing the use of renewable plant
              sources in our goods, we are continuously searching for methods to
              lessen our carbon footprint. Our production facilities are of the
              highest caliber, featuring green factories by design and
              pharmaceutical-grade production requirements.
            </p>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="section-title !text-sm !text-left">Our Values</p>
            <div className="border-b-2 w-12 border-[--neutral] mt-2 mb-4" />
            <p className="!text-2xl  !leading-relaxed font-playfair text-[--yellow] !text-left">
              Paathshala
            </p>
            <p className="section-content !text-left">
              Being an Indian business, we firmly think that our vast youth and
              rural populations have the capacity to be empowered at the
              grassroots level. In light of this, we support the Paathshala
              program because we believe that a child's education is crucial.
              <br /> We launched Paathshala, our "One School-One Village"
              initiative in rural Uttarakhand, in July 2016 in collaboration
              with the Simple Education Foundation (SEF), a non-governmental
              organization based in New Delhi. We currently work in a
              Hindi-medium government high school in the little hamlet of Gular,
              which is situated in the highlands of Tehri Garhwal.
            </p>
          </div>
          <div className="w-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="https://cdn.pixabay.com/video/2021/05/16/74233-550033536_large.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

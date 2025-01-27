"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const TestCom = ({params}) => {
  const [therapyData, setTherapyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`http://139.59.13.134:8000/therapy/therapy-details/meru-chikitsa`,"params", params);
        const res = await fetch(`http://139.59.13.134:8000/therapy/therapy-details/${params.therapy}`)
        const therapyData = await res.json();
        console.log("therapyData 5555 ", therapyData)
        setTherapyData(therapyData);
      } catch (error) {
        console.error("Error fetching therapy data:", error);
      }
    };
  
    fetchData();
  }, []);


  return (
    <div>
      {therapyData ? (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40 items-center">
                          <figure className="p-3 flex flex-col justify-center md:items-start">
                            <h1 className="highlight-heading md:!m-0 md:!text-left !mb-2">
                              {therapyData.name}
                            </h1>
                            <p
                              className="section-content md:!text-left"
                              dangerouslySetInnerHTML={{ __html: therapyData.description }}
                            ></p>
                            {/* <button
                              onClick={handleBookTherapy}
                              className="site-button-primary !mt-6 !hidden md:!inline !capitalize"
                            >
                              Book A Session
                            </button> */}
                          </figure>
                          <section className="relative lg:h-[550px]">
                            <figure className="relative z-10 flex rounded-tr-full rounded-tl-full overflow-hidden h-[550px] border-2">
                              <Image
                                src={!!therapyData?.image ? therapyData?.image : NoImageAvailabe}
                                alt="therapy"
                                layout="responsive"
                                width={100}
                                height={100}
                                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                              />
                            </figure>
            
                            {/* <button
                              onClick={handleBookTherapy}
                              className="site-button-primary w-full md:!hidden h-[60px] !capitalize"
                            >
                              Book A Session
                            </button> */}
                          </section>
                        </div>
        </div>
      ) : (
        <h1 className="mt-20"> therapy data fetching</h1>
      )}
    </div>
  );
};

export default TestCom;

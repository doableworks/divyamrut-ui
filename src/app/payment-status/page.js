import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="common_page_width">
      <div className="py-8 h-screen">
        <div className="mb-8 flex flex-col justify-center items-center">
          <iframe
            src="https://lottie.host/embed/34db972f-7afa-42de-a78f-a65f2c1bec27/y1OW9bi51L.lottie"
            style={{ border: "none", width: "100%", height: "200px" }}
            title="Lottie Animation"
          ></iframe>
          <h2 className="highlight-heading !mt-0 !mb-2">
            Your Session is Scheduled
          </h2>
          <p className="section-content !max-w-2xl">
            You have successfully booked a slot with our therapist. Please be
            available on time to avoid any inconvenience. A confirmation email
            has also been sent to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

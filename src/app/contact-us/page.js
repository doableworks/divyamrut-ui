import React from "react";
import GoogleMapCom from "../../components/common/GoogleMapCom";
import AboutForm from "../../components/about/AboutForm";

const page = () => {
  const heading = "Contact us";
  const subHeading = "Trusted by millions, validated by you.";

  return (
    <div className="p-4">
      <AboutForm />
      <GoogleMapCom />
    </div>
  );
};

export default page;

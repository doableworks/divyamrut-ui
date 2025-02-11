"use client";
import { useState } from "react";
import FaqsItem from "./FAQsItem";

export default function FaqsUnorder({ details }) {
  const [openFaq, setOpenFaq] = useState(details[0]);

  return (
    <div className="common_page_width">
      <p className="section-title">Best for</p>
      <p className="highlight-heading md:!mt-0">
        Who is this treatment
        <br /> best suited for?
      </p>
      <ul className="flex flex-col items-center list-none gap-9 mt-10">
        {details.map((each) => (
          <FaqsItem
            key={each.uid}
            detail={each}
            openFaq={openFaq}
            setOpenFaq={setOpenFaq}
          />
        ))}
      </ul>
    </div>
  );
}

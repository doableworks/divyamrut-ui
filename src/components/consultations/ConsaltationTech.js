"use client";
import { useState } from "react";
import FaqsItem from "../therapy/FAQsItem";

export default function ConsaltationTech({ details }) {
  const [openFaq, setOpenFaq] = useState(details[0]);

  return (
    <div className="common_page_width">
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

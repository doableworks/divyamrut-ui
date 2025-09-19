"use client";
import { useState } from "react";
import FaqsItem from "./FAQsItem";

export default function FaqsUnorder({ details }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="p-10 py-24 w-full xl:px-20">
      <p className="highlight-heading">FAQs</p>
      <p className="section-title md:!mt-0">
        Essential information at a glance.
      </p>
      <ul className="flex flex-col items-center list-none gap-9 mt-10">
        {details.map(
          (each) =>
            each?.is_published && (
              <FaqsItem
                key={each.uid}
                detail={each}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              />
            )
        )}
      </ul>
    </div>
  );
}

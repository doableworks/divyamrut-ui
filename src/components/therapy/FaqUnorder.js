"use client";
import { useState } from "react";
import FaqsItem from "./FAQsItem";

export default function FaqsUnorder({ details }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="p-10 py-24 w-full">
      <p className="section-title">FAQs</p>
      <p className="highlight-heading md:!mt-0">
        Essential information <br className="md:hidden" /> at a glance.
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

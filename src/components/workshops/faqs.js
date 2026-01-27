"use client";
import { useState } from "react";
import { UpOutlined } from "@ant-design/icons";
import { twMerge } from "tailwind-merge";

// Custom FAQ Item component for workshop FAQs
function WorkshopFaqItem({ detail, openFaq, setOpenFaq }) {
  const handleChangeOpen = () => {
    if (openFaq === detail.uid) {
      setOpenFaq(null);
    } else {
      setOpenFaq(detail.uid);
    }
  };

  return (
    <li
      onClick={handleChangeOpen}
      className="bg-white p-4 rounded-xl w-full group cursor-pointer"
    >
      <div className="flex gap-4 justify-between items-start">
        <p className="section-title !text-left !text-[--neutral] !text-[16px] md:!text-[20px] !normal-case group-hover:!text-[--voilet]">
          {detail?.question}
        </p>

        <UpOutlined
          style={{ color: "#3c3c3d" }}
          className={twMerge(
            "transform transition-transform duration-300 mt-1",
            openFaq === detail.uid ? "rotate-0" : "rotate-180"
          )}
        />
      </div>
      {openFaq === detail.uid && (
        <p className="section-content !text-left mt-4">
          {detail?.answer}
        </p>
      )}
    </li>
  );
}

export default function FaqsOrder({ details }) {
  const [openFaq, setOpenFaq] = useState(null);

  // Sort FAQs by order property
  const sortedDetails = details.sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="!mb-16 w-full">
      <p className="highlight-heading">FAQs</p>
      {/* <p className="section-title md:!mt-0">
        Essential information at a glance.
      </p> */}
      <ul className="flex flex-col items-center list-none gap-9 mt-10">
        {sortedDetails.map(
          (each) => (
              <WorkshopFaqItem
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

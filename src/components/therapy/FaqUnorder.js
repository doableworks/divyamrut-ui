"use client";
import { useState } from "react";
import FaqsItem from "./FAQsItem";

const faqList = [
  {
    id: 0,
    question: "What is Meru Chikitsa?",
    answer:
      "It’s an ancient healing practice originating from India that focuses on aligning the body’s energy centers and channels to promote physical, mental, and emotional well-being.",
  },
  {
    id: 1,
    question: "How does Meru Chikitsa differ from other healing methods?",
    answer:
      "It’s uniquely combines various elements to restore balance and harmony within the body, aiming to address the root causes of ailments.",
  },
  {
    id: 2,
    question: "What conditions or ailments can Meru Chikitsa help treat?",
    answer:
      "It is believed to be beneficial for various physical, emotional, and energetic imbalances, including stress, anxiety, chronic pain, digestive issues, and overall wellness enhancement.",
  },
  {
    id: 3,
    question:
      "Is Meru Chikitsa safe for everyone, including children and elderly individuals?",
    answer:
      "It is generally safe and adaptable for people of different ages and health conditions. However, individual assessment by a qualified practitioner is recommended.",
  },
];

export default function FaqsUnorder() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="p-10 w-full">
      <p className="section-title">FAQs</p>
      <p className="highlight-heading md:!mt-0">
        Essential information <br className="md:hidden"/> at a glance.
      </p>
      <ul className="flex flex-col items-center list-none gap-9 mt-10">
        {faqList.map((each) => (
          <FaqsItem
            key={each.id}
            detail={each}
            openFaq={openFaq}
            setOpenFaq={setOpenFaq}
          />
        ))}
      </ul>
    </div>
  );
}

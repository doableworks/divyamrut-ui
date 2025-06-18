import React from "react";

const publications = [
  {
    title:
      "Physical and Mental health at high altitude of individuals doing yogic practices",
    journal: "Journal of Neurosciences in Rural Practice",
    date: "Dec 16, 2022",
  },
  {
    title:
      "Positive Psychological Changes at High Altitude shown by the low landers after Yoga Intervention - Sudarshan Kriya Yoga (SKY)",
    journal: "Annals of Neurosciences",
    date: "Sep 13, 2022",
  },
  {
    title:
      "COVID-19 and High altitude- induced hypoxic conditions and its management: A perspective for managing through Yoga.",
    journal: "Turkish Online Journal of Qualitative Inquiry",
    date: "Oct 10, 2021",
  },
  {
    title:
      "Effect of mindfulness meditation protocol in subjects with various psychometric characteristics at high altitude.",
    journal: "Brain and Behaviour",
    date: "Mar 23, 2020",
  },
  {
    title:
      "Primer for mainstreaming mind-body techniques for extreme climates-insights and future directions.",
    journal: "MDPI - Medicines",
    date: "Mar 6, 2020",
  },
];

const HerPublications = () => {
  return (
    <div className="common_page_width !space-y-6 !p-5">
      <ul className="list-disc list-inside !ml-3 !text-left section-content flex flex-col !gap-2 !mt-2">
        {publications.map((pub, index) => (
          <li key={index}>
            {pub.title}
            {" — "}
            <span className="!font-semibold">
              {pub.journal},{" "}
            </span>
            <span className="!text-[--yellow] !italic !font-semibold">
              {pub.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HerPublications;

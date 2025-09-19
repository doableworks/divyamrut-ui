"use client";
import { UpOutlined } from "@ant-design/icons";
import { twMerge } from "tailwind-merge";

export default function FaqsItem({ detail, openFaq, setOpenFaq }) {
  
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
      className="bg-white p-4 rounded-xl w-full  group cursor-pointer"
    >
      <div className="flex gap-4 justify-between items-start">
        <p className="section-title !text-left !text-[--neutral] !text-[16px] md:!text-[20px] !normal-case group-hover:!text-[--voilet]">{detail?.title}</p>

        <UpOutlined
          style={{ color: "#3c3c3d" }}
          className={twMerge(
            "transform transition-transform duration-300 mt-1",
            openFaq === detail.uid ? "rotate-0" : "rotate-180"
          )}
        />
      </div>
      {openFaq === detail.uid && (
        <p  className="section-content !text-left mt-4" dangerouslySetInnerHTML={{ __html: detail?.description }}></p>
      )}
    </li>
  );
}

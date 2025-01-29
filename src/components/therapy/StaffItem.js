import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { NoProfileImage } from "@/contants/contants";

export default function StaffItem({
  detail,
  selectedStaff,
  handleSetSelectedStaff,
}) {
  const setStaff = () => {
    handleSetSelectedStaff(detail);
  };

  console.log(detail);

  return (
    <li
      onClick={setStaff}
      className={twMerge(
        "bg-white p-6 rounded-lg flex flex-col items-center cursor-pointer",
        selectedStaff?.uid === detail?.uid &&
          "outline outline-2 outline-green-400"
      )}
    >
      <Image
        src={NoProfileImage}
        alt={detail?.id}
        height={100}
        width={100}
        className="rounded-full h-28 w-28"
      />
      <p className="font-jost mt-2 text-[14px] text-center mb-1 capitalize">
        {detail?.user_firstname} {detail?.user_lastname}
      </p>
      <p
        className="section-content !text-[12px]"
        dangerouslySetInnerHTML={{ __html: detail?.description }}
      ></p>
    </li>
  );
}

export function NoStaffAvailabe() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5">
      <p className="section-title text-2xl">No Staff Availabe</p>
      <p className="section-content">
        We didn&apos;t find staff at this time, please try again later.
      </p>
    </div>
  );
}

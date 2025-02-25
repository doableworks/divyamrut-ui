import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { NoProfileImage } from "@/contants/contants";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function StaffItem({
  detail,
  selectedStaff,
  handleSetSelectedStaff,
}) {
  const setStaff = () => {
    handleSetSelectedStaff(detail);
  };

  return (
    <li
      onClick={setStaff}
      className={twMerge(
        "bg-white rounded-lg flex flex-col items-center cursor-pointer py-4",
        selectedStaff?.uid === detail?.uid &&
          "outline outline-2 outline-green-400"
      )}
    >
      <Image
        src={NoProfileImage}
        alt={detail.id}
        height={100}
        width={100}
        className="rounded-full h-28 w-28"
      />
      <div className="px-6 py-2 space-y-1">
        <p className="font-semibold text-sm font-poppins text-[--neutral] text-center mt-1 capitalize">
          {detail?.user_firstname} {detail?.user_lastname}
        </p>
        <p className="text-[10px] font-normal uppercase font-poppins text-center text-gray-500">
          EXECUTIVE CHAIRMAN FORTIS C DOC | Fortis C-Doc
        </p>
        <div className="text-gray-600 flex gap-2 items-center justify-center">
          <CalendarIcon className="h-4 w-4" />
          <p>
            <span className="font-semibold">5+ Years</span>
            {" "}Experience
          </p>
        </div>
      </div>
      <p
        className="text-gray-500 font-poppins font-medium text-[10px] bg-[#fff6f0] p-2 mx-2 rounded-md my-2 text-center"
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

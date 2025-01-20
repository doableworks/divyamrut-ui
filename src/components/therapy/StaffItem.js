import Image from "next/image";
import { twMerge } from "tailwind-merge";

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
        "bg-white p-6 rounded-lg flex flex-col items-center cursor-pointer",
        selectedStaff?.id === detail?.id &&
          "outline outline-2 outline-green-400"
      )}
    >
      <Image
        src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
        alt={detail?.id}
        height={100}
        width={100}
        className="rounded-full h-20 w-20"
      />
      <p className="font-jost mt-2 text-[14px]">{detail?.name}</p>
      <p className="section-content !text-[12px]">{detail?.about}</p>
    </li>
  );
}

export function NoStaffAvailabe() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5">
      <p className="section-title text-2xl">No Staff Availabe</p>
      <p className="section-content">
        We didn't find staff at this time, please try again later.
      </p>
    </div>
  );
}

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
        src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
        alt={detail?.id}
        height={100}
        width={100}
        
      />
      <p className="font-jost mt-2 text-[14px] text-center mb-1">{detail?.name}</p>
      <p className="section-content !text-[12px]">{detail?.about}</p>
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

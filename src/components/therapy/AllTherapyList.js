"use client";
import { useSelector } from "react-redux";
import CommonNoTherapy from "./CommonNoTherapy";
import Link from "next/link";
import { NoImageAvailabe } from "@/contants/contants";

export default function AllTherapyList({ isConsultant }) {
  const navbar = useSelector((state) => state.menuItems.all);
  let therapyNav = [];

  if (isConsultant) {
    therapyNav = navbar.find((each) => each.path === "/consultations");
  } else {
    therapyNav = navbar.find((each) => each.path === "/therapy");
  }

  return (
    <div className="common_page_width !pt-3">
      {therapyNav?.subMenu?.length > 0 ? (
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 md:gap-14 lg:gap-20">
          {therapyNav.subMenu.map((subItem, index) => {
            const shouldRender = isConsultant
              ? !subItem.is_soon
              : subItem.is_published;

            return shouldRender ? (
              <Link
                key={index}
                href={`${therapyNav.parentSlug}/${subItem.slug}/`}
              >
                <li className="list-none flex flex-col gap-5 rounded-lg overflow-hidden">
                  <div className="aspect-[1/1] w-full rounded-lg overflow-hidden bg-[--base]">
                    <img
                      src={subItem?.thumbnail_image || NoImageAvailabe}
                      alt={subItem.uid}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div>
                    <p className="section-title">{subItem.name}</p>
                    
                  </div>
                </li>
              </Link>
            ) : null;
          })}
        </ul>
      ) : (
        <div className="flex justify-center items-center flex-1">
          <CommonNoTherapy />
        </div>
      )}
    </div>
  );
}

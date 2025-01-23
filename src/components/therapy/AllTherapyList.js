"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import CommonNoTherapy from "./CommonNoTherapy";
import Link from "next/link";

export default function AllTherapyList() {
  const navbar = useSelector((state) => state.menuItems.all);

  const therapyNav = navbar.find((each) => each.path === "/therapy");

  return (
    <div className="common_page_width !pt-3">
      {therapyNav?.subMenu?.length > 0 ? (
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 md:gap-14 lg:gap-20">
          {therapyNav.subMenu.map(
            (subItem, index) =>
              subItem.is_published && (
                <Link
                  key={index}
                  href={`${therapyNav.parentSlug + subItem.slug}/`}
                >
                  <li className="list-none flex flex-col gap-5 rounded-lg overflow-hidden">
                    <div className="flex rounded-lg overflow-hidden h-64 w-full bg-white">
                      {subItem.image && (
                        <Image
                          src={subItem.image}
                          alt={subItem.id}
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                    <p className="section-title">{subItem.name}</p>
                  </li>
                </Link>
              )
          )}
        </ul>
      ) : (
        <div className="flex justify-center items-center flex-1">
          <CommonNoTherapy />
        </div>
      )}
    </div>
  );
}

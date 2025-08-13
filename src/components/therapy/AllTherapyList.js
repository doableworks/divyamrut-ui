"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CommonNoTherapy from "./CommonNoTherapy";
import Link from "next/link";
import { NoImageAvailabe } from "@/contants/contants";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function AllTherapyList({ isConsultant }) {
  const navbar = useSelector((state) => state.menuItems.all);
  const [therapyData, setTherapyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState('redux'); // 'redux' or 'api'

  // Check Redux data first
  let therapyNav = [];
  if (isConsultant) {
    therapyNav = navbar.find((each) => each.path === "/consultations");
  } else {
    therapyNav = navbar.find((each) => each.path === "/therapy");
  }

  // Fallback API fetch if Redux is empty
  useEffect(() => {
    const fetchTherapyData = async () => {
      // If Redux has data, use it
      if (therapyNav?.subMenu?.length > 0) {
        setTherapyData(therapyNav.subMenu);
        setDataSource('redux');
        setLoading(false);
        return;
      }

      // Otherwise, fetch from API
      if (!apiUrl) {
        console.error("API URL not configured");
        setLoading(false);
        return;
      }

      try {
        // Use correct backend endpoints
        const endpoint = isConsultant 
          ? "/consultation/consultations/" 
          : "/therapy/therapy-details/";
          
        console.log(`Fetching from: ${apiUrl}${endpoint}`);
        
        const response = await fetch(`${apiUrl}${endpoint}`, {
          cache: 'no-store',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTherapyData(Array.isArray(data) ? data : []);
        setDataSource('api');
      } catch (error) {
        console.error("Error fetching therapy data:", error);
        setTherapyData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapyData();
  }, [navbar, isConsultant, therapyNav]);

  if (loading) {
    return (
      <div className="common_page_width !pt-3">
        <div className="flex justify-center items-center min-h-72">
          <div>Loading therapies...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="common_page_width !pt-3">
    
      {therapyData?.length > 0 ? (
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 md:gap-14 lg:gap-20">
          {therapyData.map((subItem, index) => {
            const shouldRender = isConsultant
              ? !subItem.is_soon
              : subItem.is_published;

            return shouldRender ? (
              <Link
                key={subItem.uid || index}
                href={`${isConsultant ? '/consultations' : '/therapy'}/${subItem.slug}/`}
              >
                <li className="list-none flex flex-col gap-5 rounded-lg overflow-hidden">
                  <div className="aspect-[1/1] w-full rounded-lg overflow-hidden bg-[--base]">
                    <img
                      src={subItem?.thumbnail_image || subItem?.image || NoImageAvailabe}
                      alt={subItem.name || "Therapy"}
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
          <CommonNoTherapy 
            title="No Therapies Available"
            description="We're currently updating our therapy offerings. Please check back soon or contact us for more information."
            btnTitle="Retry"
            onClick={() => window.location.reload()}
          />
        </div>
      )}
    </div>
  );
}

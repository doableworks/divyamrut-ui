import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import useCartActions from "../cartCom/useCartActions";
import { message } from "antd";
import { NoImageAvailabe } from "@/contants/contants";

const ProductOverviewRedesign = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const { onAddItem } = useCartActions();

  const handleAddItem = async (event) => {
    event.stopPropagation();
    try {
      setLoading(true);
      await onAddItem(item);
    } catch (error) {
      console.log("handleAddItem error", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col justify-between cursor-pointer rounded overflow-hidden">
      <button type="button" className="text-left">
        <div className="relative flex items-center justify-center overflow-hidden">
          <Link href={`/products/${item?.category_slug}/${item?.slug}`}>
            <div className="aspect-[3/4] overflow-hidden bg-base relative group">
              <img
                alt="Default Product"
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                src={item?.image || NoImageAvailabe}
                loading="lazy"
              />
              <img
                src={
                  (item?.uploaded_images && item?.uploaded_images[0]?.image) ||
                  NoImageAvailabe
                }
                alt="Hover Product"
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          </Link>

          {item?.quantity && parseInt(item.quantity) > 0 && (
            <CustomButton
              className="absolute bottom-2 h-10 w-10 right-2 bg-white rounded shadow"
              icon={<PlusIcon className="w-5 font-bold" />}
              loading={loading}
              type="submit"
              onClick={(event) => handleAddItem(event)}
              spinnerColor="#000"
              spinnerSize="small"
            />
          )}
        </div>

        <Link href={`/products/${item?.category_slug}/${item?.slug}`}>
          <div className="flex flex-col gap-1 py-4 overflow-hidden">
            <h6 className="line-clamp-2 font-semibold text-sm text-center capitalize h-10">
              {item?.name}
            </h6>

            <p className="line-clamp-1 uppercase text-gray-500 text-sm font-medium text-center">
              ₹&nbsp;{item?.price}
            </p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default ProductOverviewRedesign;

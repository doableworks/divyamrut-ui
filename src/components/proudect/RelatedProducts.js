"use client";
import RelatedProductSlider from "./RelatedProductSlider";
import Divider from "../common/Divider";
import { usePathname } from "next/navigation";
const RelatedProduct = ({ slidesData, subCategory }) => {
  const pathname = usePathname();
  const productCategory = pathname.split("/");

  return (
    <div className="my-12">
      <p className="highlight-heading !text-left">Related Products</p>
      <Divider className="mb-10" />

      <RelatedProductSlider
        productCategory={subCategory}
        slideData={slidesData}
      />
    </div>
  );
};
export default RelatedProduct;

// "use client";
// import Image from "next/image";
// import React, { use, useState } from "react";
// import CustomButton from "@/components/common/CustomButton";
// import ProductImage from "./ImageMagnify";
// import ImageMedium from "./ImageMedium";
// import { SetIsBuyModalOpen } from "@/redux/feature/productSlice";
// import { setBuyProduct } from "@/redux/feature/buyProductSlice";
// import { NoImageAvailabe } from "@/contants/contants";
// import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "nextjs-toploader/app";
// import { twMerge } from "tailwind-merge";
// import Divider from "@/components/common/Divider";
// import useCartActions from "@/components/cartCom/useCartActions";
// import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
// import { useSession } from "next-auth/react";




// const ProductDetail = ({ item }) => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { data: session } = useSession();
//   const [selectedImage, SetSelectedImage] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const { onAddItem } = useCartActions();

//   const handleAddItem = async () => {
//     try {
//       setLoading(true)
//      await onAddItem(item)
//     } catch (error) {
//       console.log("handleAddItem error", error);
//     }finally{
//       setLoading(false)
//     }
//   };

//   const handleBuyBtn = async () => {
//     if (session) {
//       await dispatch(setBuyProduct({ items: item, source: "direct-buy" }))
//       await router.push("/payment-delivery");
//     }
//     else {
//       dispatch(setOpenLoginModal(true))
//     }

//   };

//   return (
//     <>
//       <div className="relative flex flex-col lg:flex-row gap-10 min-h-[80vh]">
//         <div className="lg:sticky w-full self-start md:top-10 lg:w-1/2 flex flex-col items-center">
//           <div className="bg-white relative w-full h-[50vh] md:h-[60vh] lg:w-[40vw]">
//             <ImageMedium
//               imgSrc={
//                 item?.uploaded_images[selectedImage]?.image
//                   ? item?.uploaded_images[selectedImage]?.image
//                   : NoImageAvailabe
//               }
//             />
//           </div>
//           <div className="flex flex-row gap-2 w-full mt-8 overflow-x-auto narrow-scrollbar pb-2">
//             {item.uploaded_images.map((path, index) => (
//               <div
//                 key={index}
//                 onClick={() => SetSelectedImage(index)}
//                 className={`border border-gray-300 rounded-md overflow-hidden cursor-pointer flex-shrink-0 w-20 h-20 ${selectedImage == index && "border-2 border-slate-700"
//                   }`}
//               >
//                 <Image
//                   height={100}
//                   width={100}
//                   src={path?.image ? path?.image : NoImageAvailabe}
//                   alt={`Thumbnail ${index}`}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col w-full lg:w-1/2">
//           <h1 className={twMerge("product_title", "mb-4")}>{item.name}</h1>
//           <Divider className="mb-4" />
//           <div className="mb-4">
//             <p className="text-2xl font-bold text-gray-900">
//               {item?.currency == "USD" ? "$" : "₹"}&nbsp;{item?.price}
//             </p>
//             <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
//           </div>
//           <Divider className="mb-4" />
//           {item?.feature_1 && (
//             <div>
//               <p className="text-xl font-jost normal-case font-bold ">
//                 About the Item
//               </p>
//               <ul className="list-disc list-outside my-6 flex flex-col gap-3 md:ml-6 text-base">
//                 {item?.feature_1 && (
//                   <li dangerouslySetInnerHTML={{ __html: item?.feature_1 }} />
//                 )}
//                 {item?.feature_2 && (
//                   <li dangerouslySetInnerHTML={{ __html: item?.feature_2 }} />
//                 )}
//                 {item?.feature_3 && (
//                   <li dangerouslySetInnerHTML={{ __html: item?.feature_3 }} />
//                 )}
//                 {item?.feature_4 && (
//                   <li dangerouslySetInnerHTML={{ __html: item?.feature_4 }} />
//                 )}
//                 {item?.feature_5 && (
//                   <li dangerouslySetInnerHTML={{ __html: item?.feature_5 }} />
//                 )}
//               </ul>
//             </div>
//           )}
//           <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
//             <CustomButton
//               htmlType="submit"
//               className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
//               title="ADD TO CART"
//               loading={loading}
//               onClick={handleAddItem}
//             />

//             <CustomButton
//               htmlType="submit"
//               className="site-button-secondary !mt-4 w-[-webkit-fill-available] capitalize"
//               title="Buy Now"
//               loading={false}
//               onClick={handleBuyBtn}
//             />
//           </div>
//         </div>
//       </div>

//       {item?.product_benefits && (
//         <div className="mb-10">
//           <p className="text-xl font-jost normal-case font-bold mt-6">
//             Benefits of {item?.title}
//           </p>
//           <Divider className="mb-4 mt-4" />
//           <p
//             className="list-disc list-outside my-6 flex flex-col gap-3 text-base leading-relaxed"
//             dangerouslySetInnerHTML={{ __html: item?.product_benefits }}
//           />
//         </div>
//       )}

//       {item?.method_of_preparation && (
//         <div className="mb-10">
//           <p className="text-xl font-jost normal-case font-bold mt-6">
//             Methods of Preperation
//           </p>
//           <Divider className="mb-4 mt-4" />
//           <p
//             className="list-disc list-outside my-6 flex flex-col gap-3 text-base leading-relaxed"
//             dangerouslySetInnerHTML={{ __html: item?.method_of_preparation }}
//           />
//         </div>
//       )}

//       {item?.description && (
//         <div className="mb-10">
//           <p className="text-xl font-jost normal-case font-bold mt-6">
//             Additional Information
//           </p>
//           <Divider className="mb-4 mt-4" />
//           <p
//             className="text-base font-jost leading-relaxed"
//             dangerouslySetInnerHTML={{ __html: item?.description }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetail;


"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import { Star } from "@/icon/icons";
import CustomButton from "@/components/common/CustomButton";
import ProductImage from "./ImageMagnify";
import ImageMedium from "./ImageMedium";
import { SetIsBuyModalOpen } from "@/redux/feature/productSlice";
import { setBuyProduct } from "@/redux/feature/buyProductSlice";
import { NoImageAvailabe } from "@/contants/contants";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "nextjs-toploader/app";
import { twMerge } from "tailwind-merge";
import Divider from "@/components/common/Divider";
import useCartActions from "@/components/cartCom/useCartActions";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
import { useSession } from "next-auth/react";




const ProductDetail = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [selectedImage, SetSelectedImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { onAddItem, onIncreaseOrDecreaseItem } = useCartActions();

  const handleAddItem = async () => {
    try {
      setLoading(true)
      await onAddItem(item, quantity)
    } catch (error) {
      console.log("handleAddItem error", error);
    } finally {
      setLoading(false)
    }
  };

  const handleBuyBtn = async () => {
    if (session) {
      await dispatch(setBuyProduct({ items: item, source: "direct-buy" }))
      await router.push("/payment-delivery");
    }
    else {
      dispatch(setOpenLoginModal(true))
    }

  };

  const handleIncreaseCartItem = async (action) => {
    setQuantity(action == 'increase' ? quantity + 1 : quantity - 1)
  };

  return (
    <>
      <div className="relative flex flex-col lg:flex-row gap-10 min-h-[80vh]">
        <div className="lg:sticky w-full self-start md:top-10 lg:w-1/2 flex flex-col items-center">
          <div className="bg-white relative w-full h-[50vh] md:h-[60vh] lg:w-[40vw]">
            <ImageMedium
              imgSrc={
                item?.uploaded_images[selectedImage]?.image
                  ? item?.uploaded_images[selectedImage]?.image
                  : NoImageAvailabe
              }
            />
          </div>
          <div className="flex flex-row gap-2 w-full mt-8 overflow-x-auto narrow-scrollbar pb-2">
            {item.uploaded_images.map((path, index) => (
              <div
                key={index}
                onClick={() => SetSelectedImage(index)}
                className={`border border-gray-300 rounded-md overflow-hidden cursor-pointer flex-shrink-0 w-20 h-20 ${selectedImage == index && "border-2 border-slate-700"
                  }`}
              >
                <Image
                  height={100}
                  width={100}
                  src={path?.image ? path?.image : NoImageAvailabe}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className={twMerge("product_title", "mb-4")}>{item.name}</h1>
          <Divider className="mb-4" />
          <div className="mb-4">
            <p className="text-2xl font-bold text-gray-900">
              {item?.currency == "USD" ? "$" : "₹"}&nbsp;{item?.price}
            </p>
            <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>

            <div className="flex gap-2 items-center mt-4">
              <Star h={25} w={25} fill={"#f0ad4e"} />
              <Star h={25} w={25} fill={"#f0ad4e"} />
              <Star h={25} w={25} fill={"#f0ad4e"} />
              <Star h={25} w={25} fill={"#f0ad4e"} />
              <Star h={25} w={25} fill={"#ccd6df"} />
              <span className="ml-5"><strong>Review</strong></span>
            </div>

          </div>
          <Divider className="mb-4" />
          {item?.feature_1 && (
            <div>
              <p className="text-xl font-jost normal-case font-bold ">
                About the Item
              </p>
              <ul className="list-disc list-outside my-6 flex flex-col gap-3 md:ml-6 text-base">
                {item?.feature_1 && (
                  <li dangerouslySetInnerHTML={{ __html: item?.feature_1 }} />
                )}
                {item?.feature_2 && (
                  <li dangerouslySetInnerHTML={{ __html: item?.feature_2 }} />
                )}
                {item?.feature_3 && (
                  <li dangerouslySetInnerHTML={{ __html: item?.feature_3 }} />
                )}
                {item?.feature_4 && (
                  <li dangerouslySetInnerHTML={{ __html: item?.feature_4 }} />
                )}
                {item?.feature_5 && (
                  <li dangerouslySetInnerHTML={{ __html: item?.feature_5 }} />
                )}
              </ul>
            </div>
          )}
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
            <div className="flex items-end space-x-2">
              <button
                // onClick={() => handleRemoveItem(item)}
                onClick={() => handleIncreaseCartItem("decrease")}
                className="px-5 py-1 bg-gray-200 h-12 rounded"
                disabled={quantity == 1}
              >
                {loading == item.uid ? <LoadingOutlined spin /> : '-'}
              </button>
              <div className="px-5 text-heading h-8 !text-left">
                {quantity}
              </div>
              <button
                onClick={() => handleIncreaseCartItem("increase")}
                className="px-5 py-1 bg-gray-200 h-12 rounded"
              >
                {loading == item.uid ? <LoadingOutlined spin /> : '+'}
              </button>
            </div>

            <CustomButton
              htmlType="submit"
              className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
              title="ADD TO CART"
              loading={loading}
              onClick={handleAddItem}
            />

            {/* <CustomButton
              htmlType="submit"
              className="site-button-secondary !mt-4 w-[-webkit-fill-available] capitalize"
              title="Buy Now"
              loading={false}
              onClick={handleBuyBtn}
            /> */}
          </div>
          {item?.description && (
        <div className="mt-10">
          <p className="text-xl font-jost normal-case font-bold mt-6">
            Additional Information
          </p>
          <Divider className="mb-4 mt-4" />
          <p
            className="text-base font-jost leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
        </div>
      )}
        </div>
      </div>

      {item?.product_benefits && (
        <div className="mb-10">
          <p className="text-xl font-jost normal-case font-bold mt-6">
            Benefits of {item?.title}
          </p>
          <Divider className="mb-4 mt-4" />
          <p
            className="list-disc list-outside my-6 flex flex-col gap-3 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item?.product_benefits }}
          />
        </div>
      )}

      {item?.method_of_preparation && (
        <div className="mb-10">
          <p className="text-xl font-jost normal-case font-bold mt-6">
            Methods of Preperation
          </p>
          <Divider className="mb-4 mt-4" />
          <p
            className="list-disc list-outside my-6 flex flex-col gap-3 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item?.method_of_preparation }}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetail;


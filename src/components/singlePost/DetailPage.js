'use client';
import React from "react";
import BtnSection from "@/components/BtnCom/BtnSection";
import {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
} from "@/redux/feature/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "nextjs-toploader/app";



const DetailPage = ({item}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddItem = async () => {
    try{
      await dispatch(addItem(item));
      await router.push('/cart')
    }
    catch(error){
      console.log("error 555", error)
    }
  };

  
  return (
    <>
      <article className="space-y-4">
        <p className="font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-primary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <p className="font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-primary">
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Integer tincidunt. Cras dapibus.
        </p>
        <div className="flex justify-center flex-col md:flex-row gap-10">
          <img
            src="/asset/gril_img.jpg"
            alt="Article Image"
            className="rounded-lg"
          />
          <div>
            <p className="font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-primary">
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tellus. Phasellus viverra nulla ut metus varius laoreet.
            </p>
            <p className="font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-primary">
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
          </div>
        </div>
        <p className="font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-primary">
          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
          Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
          libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
          eros faucibus tincidunt. Duis leo.
        </p>
        <p className="font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-primary">
          Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
          consequat, leo eget bibendum sodales, augue velit cursus nunc, quis
          gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum
          purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam
          accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit
          fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; In ac dui quis mi
        </p>
      </article>
      <BtnSection showAddToCartBtn={true} showBuyBtn={item.type == 'product'} showBookBtn={item.type == 'therapy'} cartFun={handleAddItem} />
    </>
  );
};

export default DetailPage;

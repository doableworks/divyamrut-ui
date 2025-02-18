import axiosInstance from "@/lib/axios";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "nextjs-toploader/app";
import {
  addCartItem,
  removeCartItem,
  increaseOrDecreaseCartItemQuantity,
  openCartSliderFun,
  setCartLoader,
  addCartItemsAfterLogin
} from "@/redux/feature/cartSlice";

const useCartActions = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const GetApiCartItem = async () => {
    try {

      if(!session){
        message.error("Something went wrong, please try again later!!!");
        return 
      }

      dispatch(setCartLoader(true));
      const response = await axiosInstance.get("/product/cart/",{
        session,
      });
      if (response.status === 200) {
        dispatch(addCartItemsAfterLogin({ cart_items: response.data.data }));
      } else {
        message.error("Something went wrong, please try again later!!!");
      }
      return response;
    } catch (error) {
      console.log("getCartDetails error", error);
      message.error("Something went wrong, please try again later!");
      return null
    } finally {
      dispatch(setCartLoader(false));
    }
  };

  const AddApiCartItem = async (items, quantity) => {
    try {
      dispatch(setCartLoader(true));
      let data = {
        product_uids: items.map((i) => i.uid),
        quantity: quantity
      };
      const response = await axiosInstance.post("/product/cart/", data, {
        session,
      });
      if (response.status == 201) {
        return response.data;
      }
      message.error("Something went wrong, please try again later!");
      return null;
    } catch (error) {
      console.log("getCartDetails error", error);
      message.error("Something went wrong, please try again later!");
      return null;
    } finally {
      dispatch(setCartLoader(false));
    }
  };

  const RemoveApiCartItem = async (product_uids) => {
    try {
      const data = {product_uids}
      dispatch(setCartLoader(true));
      const response = await axiosInstance.post(
        `/product/delete-cart/`, data,
        {
          session,
        }
      );
      if (response.status == 200 || response.statusText == 'OK') {
        return response.data;
      }
      message.error("Something went wrong, please try again later!");
      return null;
    } catch (error) {
      console.log("RemoveApiCartItem error", error);
      message.error("Something went wrong, please try again later!");
      return null;
    } finally {
      dispatch(setCartLoader(false));
    }
  };

  const IncreAndDecreApiCartItemQuantity = async (action, product_uid) => {
    try {
      dispatch(setCartLoader(true));
      const response = await axiosInstance.put(
        `/product/update/cart/${product_uid}/`,
        { action: action },
        {
          session,
        }
      );
      if (response.status == 200 || response.status == 201) {
        return response.data;
      }
      message.error("Something went wrong, please try again later!");
      return null;
    } catch (error) {
      console.log("IncreAndDecreApiCartItemQuantity error", error);
      message.error("Something went wrong, please try again later!");
      return null;
    } finally {
      dispatch(setCartLoader(false));
    }
  };

  const onAddItem = async (item, quantity=1) => {
    console.log("")
    try {
      let response;
      if (session) {
        response = await AddApiCartItem([item], quantity);
      }
      if (session == null || (session && response)) {
        let itemData
        if (session) {
          itemData = response?.data
        }
        else {
          itemData = {
            created: "",
            id: 7,
            is_select: true,
            product: 117,
            product_detail: item,
            quantity: quantity,
            uid: `product_ + ${item.uid}`,
            updated: "",
            user: 3,
          }
        }
        dispatch(addCartItem(itemData));
        dispatch(openCartSliderFun(true));
      }
    } catch (error) {
      console.log("error 555", error);
    }
  };

  const onRemoveItem = async (uids) => {
    try {
      let response;
      if (session) {
        response = await RemoveApiCartItem(uids);
      }
      if (session == null || (session && response)) {
        dispatch(removeCartItem({ uids }));
      }
    } catch (error) {
      console.log("onRemoveItem error", error);
    }
  };

  const onIncreaseOrDecreaseItem = async (action, product_uid) => {
    try {
      let response;
      if (session) {
        response = await IncreAndDecreApiCartItemQuantity(action, product_uid);
      }
      if (session == null || (session && response)) {
        // const itemData = session ? response?.data : item
        const itemData = session ? response?.data : { uid: product_uid, action: action }
        dispatch(increaseOrDecreaseCartItemQuantity({ uid: product_uid, action: action }));
      }
    } catch (error) {
      console.log("error 555", error);
    }
  };


  return {
    GetApiCartItem,
    RemoveApiCartItem,
    AddApiCartItem,
    IncreAndDecreApiCartItemQuantity,


    onAddItem,
    onRemoveItem,
    onIncreaseOrDecreaseItem,

  };
};

export default useCartActions;


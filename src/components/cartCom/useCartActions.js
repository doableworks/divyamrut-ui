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
} from "@/redux/feature/cartSlice";

const useCartActions = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const GetApiCartItem = async () => {
    try {
      dispatch(setCartLoader(true));
      const response = await axiosInstance.post("/product/cart/", {
        session,
      });
      console.log(" cart response api", response);
      if (response.status === 200) {
      } else {
        message.error("Something went wrong, please try again later!");
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

  const AddApiCartItem = async (items) => {
    try {
      dispatch(setCartLoader(true));
      let data = {
        product_uids: items.map((i) => i.uid),
      };
      console.log("cart api data", data);
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

  const RemoveApiCartItem = async (product_uid) => {
    try {
      dispatch(setCartLoader(true));
      const response = await axiosInstance.delete(
        `/product/update/cart/${product_uid}/`,
        {
          session,
        }
      );
      console.log("response RemoveApiCartItem", response)
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
      console.log("uid", product_uid, "actiopn", action)
      dispatch(setCartLoader(true));
      const response = await axiosInstance.put(
        `/product/update/cart/${product_uid}/`,
        { action: action },
        {
          session,
        }
      );
      console.log("IncreAndDecreCartItemQuantity response", response);
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

  const onAddItem = async (item) => {
    try {
      let response;
      if (session) {
        response = await AddApiCartItem([item]);
      }
      console.log("handleAddItem response", response);
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
            quantity: 4,
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

  const onRemoveItem = async (uid) => {
    try {
      let response;
      if (session) {
        response = await RemoveApiCartItem(uid);
      }
      console.log(uid,"onRemoveItem response", response)
      if (session == null || (session && response)) {
        dispatch(removeCartItem({ uid }));
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
      console.log("handleIncreaseCartItem response111", response);
      if (session == null || (session && response)) {
        const itemData = session ? response?.data : item
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


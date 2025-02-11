import axiosInstance from "@/lib/axios";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
  handleCartSlider,
  setCartLoader,
} from "@/redux/feature/cartSlice";
import { useRouter } from "nextjs-toploader/app";

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
        `/update/cart/${product_uid}/`,
        {
          session,
        }
      );
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

  const IncreAndDecreApiCartItemQuantity = async (action, product_uid) => {
    try {
        console.log("uid", product_uid,"actiopn", action)
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
      console.log("getCartDetails error", error);
      message.error("Something went wrong, please try again later!");
      return null;
    } finally {
      dispatch(setCartLoader(false));
    }
  };

  return {
    GetApiCartItem,
    RemoveApiCartItem,
    AddApiCartItem,
    IncreAndDecreApiCartItemQuantity
  };
};

export default useCartActions;

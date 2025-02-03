import axiosInstance from "@/lib/axios";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
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

const useCartAction = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const GetCartItem = async () => {
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

  const AddCartItem = async (items) => {
    try {
      dispatch(setCartLoader(true));
      let data = {
        // product_id: items.map((i) => i.uid),
        product_uid: items.uid,
      };
      const response = await axiosInstance.post("/product/cart/", data, {
        session,
      });
      console.log(" cart response api", response);
      return response.data;
      // let responseData = response.data.data;
      // if (response.data.status) {
      // handleAddItem()
      // }
    } catch (error) {
      console.log("getCartDetails error", error);
      message.error("Something went wrong, please try again later!");
      // showResponseMessage(
      //   "error",
      //   "Something went wrong, please try again later!"
      // );
    } finally {
      dispatch(setCartLoader(fale));
    }
  };

  const RemoveCartItem = async (product_uid) => {
    try {
      dispatch(setCartLoader(true));
      const response = await axiosInstance.delete(
        `/update/cart/${product_uid}/`,
        {
          session,
        }
      );
      console.log(" cart response api", response);
      // let responseData = response.data.data;
      // if (response.data.status) {
      // handleAddItem()
      // }
    } catch (error) {
      console.log("getCartDetails error", error);
      // showResponseMessage(
      //   "error",
      //   "Something went wrong, please try again later!"
      // );
    } finally {
      dispatch(setCartLoader(false));
    }
  };

  const IncreAndDecreCartItemQuantity = async (action, product_uid) => {
    try {
      dispatch(setCartLoader(true));
      const response = await axiosInstance.update(
        `/update/cart/${product_uid}/`,
        { action: action },
        {
          session,
        }
      );
      console.log(" cart response api", response);
      // let responseData = response.data.data;
      // if (response.data.status) {
      // handleAddItem()
      // }
    } catch (error) {
      console.log("getCartDetails error", error);
      // showResponseMessage(
      //   "error",
      //   "Something went wrong, please try again later!"
      // );
    } finally {
      dispatch(setCartLoader(false));
    }
  };

  return {
    GetCartItem,
    AddCartItem,
    RemoveCartItem,
    IncreAndDecreCartItemQuantity,
  };
};

export default useCartAction;

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, setCartLoader } from "@/redux/feature/cartSlice";
import { message } from "antd";
import axiosInstance from "@/lib/axios";
import { useSession } from "next-auth/react";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

const useRemoveCartItem = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const removeCartItemAPI = useCallback(
    async (product_uids) => {
      if (!session) {
        dispatch(removeCartItem({ uids: product_uids }));
        return true;
      }

      try {
        const data = { product_uids: product_uids };
        dispatch(setCartLoader(true));

        const response = await axiosInstance.post(
          "/product/delete-cart/",
          data,
          {
            session,
          }
        );

        if (response.status >= 200 && response.status < 300) {
          dispatch(removeCartItem({ uids: product_uids }));
          return response.data;
        } else {
          console.log("Delete Cart API Error", response);
          throw new Error("Response status not valid");
        }
      } catch (error) {
        console.error("RemoveApiCartItem error", error);
        message.error("Something went wrong, please try again later!");
        return null;
      } finally {
        dispatch(setCartLoader(false));
      }
    },
    [dispatch, session]
  );

  const updateInventoryOnPurchaseAPI = useCallback(
    async (product_with_quantity) => {
      try {
        dispatch(setCartLoader(true));

        const response = await axios.post(
          `${apiUrl}/product/update-quantity/`,
          product_with_quantity
        );

        if (response.status >= 200 && response.status < 300) {
          return response.data;
        } else {
          console.log("Update Inventory Error", response);
          throw new Error("Response status not valid");
        }
      } catch (error) {
        console.error("RemoveApiCartItem error", error);
        message.error("Getting Error while updating inventory");
        return null;
      } finally {
        dispatch(setCartLoader(false));
      }
    },
    [dispatch]
  );

  return { removeCartItemAPI, updateInventoryOnPurchaseAPI };
};

export default useRemoveCartItem;

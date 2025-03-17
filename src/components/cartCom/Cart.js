"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "@/components/common/CustomButton";
import { useRouter } from "nextjs-toploader/app";
import {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectCartItem,
  unSelectCartItem,
  increaseOrDecreaseItemQuantity,
} from "@/redux/feature/cartSlice";
import { setBuyProduct } from "@/redux/feature/buyProductSlice";
import useCartActions from "@/components/cartCom/useCartActions";
import { useSession } from "next-auth/react";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
import { LoadingOutlined } from "@ant-design/icons";
import { EmptyCart } from "@/icon/icons";
import { message } from "antd";

const CartPage = () => {
  const { items, cartLoader } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(null);
  const { data: session } = useSession();
  const { onRemoveItem, onIncreaseOrDecreaseItem } = useCartActions();
  const [messageApi, contextHolder] = message.useMessage();

  const handleIncreaseCartItem = async (item, action) => {
    if (
      action === "increase" &&
      item.quantity >= item.product_detail.quantity
    ) {
      messageApi.info(
        `The item was not added as you've exceeded the cart limit. You can add up to ${item.product_detail.quantity} nos`
      );
      return;
    }
    try {
      setLoading(item.uid);
      await onIncreaseOrDecreaseItem(action, item?.product_detail.uid);
    } catch (error) {
      console.log("handleIncreaseCartItem cart error", error);
    } finally {
      setLoading(null);
    }
  };

  const handleRemoveItem = async (item) => {
    try {
      onRemoveItem([item.uid]);
    } catch (error) {
      console.log("handleRemoveItem cart error", error);
    }
  };

  const handleSelectItem = (item) => {
    try {
      item.is_select
        ? dispatch(unSelectCartItem({ uid: item.uid }))
        : dispatch(selectCartItem({ uid: item.uid }));
    } catch (error) {}
  };

  const calculateTotal = () => {
    return items
      ?.reduce((total, item) => {
        if (item.is_select) {
          return (
            total +
            parseFloat(item?.product_detail?.price.replace(/,/g, "")) *
              Number(item.quantity)
          );
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  const onCheckout = async () => {
    const selectedItems = items.filter((item) => item.is_select);
    dispatch(setBuyProduct({ items: selectedItems, source: "cart" }));
    router.push("/payment-delivery");
  };

  const selectedItems = items.filter((each) => each.is_select === true);

  return (
    <div className="relative flex flex-col lg:flex-row gap-10 z-20 py-10">
      <div className="w-full lg:w-[75%] mx-auto bg-white shadow-md rounded-lg h-auto">
        <div className="p-6">
          <div className="flex justify-between">
            <h2 className="text-[18px] leading-[24px] font-semibold mb-4">
              Cart Items
            </h2>
          </div>

          {items?.length > 0 ? (
            items?.map((item) => (
              <div
                key={item.uid}
                className="flex items-center border-b pb-4 mb-4 last:border-none"
              >
                <input
                  type="checkbox"
                  htmlFor={`cart_product ${item.uid}`}
                  className="mr-4 hidden md:flex"
                  checked={item?.is_select || false}
                  onChange={() => handleSelectItem(item)}
                />
                <div className="flex flex-1 flex-col gap-4 md:flex-row items-start">
                  <div className="flex justify-between w-full md:w-auto">
                    <Image
                      src={item?.product_detail?.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md mt-2"
                    />
                    <input
                      type="checkbox"
                      htmlFor={`cart_product ${item.uid}`}
                      className="mr-4 md:hidden"
                      checked={item?.is_select || false}
                      onChange={() => handleSelectItem(item)}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-heading !text-left w-[98%]">
                      {item?.product_detail?.title}
                    </h2>
                    <p className="text-text !text-left">
                      Price:{" "}
                      <span className="text-heading !text-left">
                        ₹&nbsp;{item?.product_detail?.price}
                      </span>
                    </p>
                    <div className="mt-2 flex flex ">
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="mr-2 text-text !text-left"
                      >
                        Quantity:
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          disabled={loading}
                          onClick={() =>
                            handleIncreaseCartItem(item, "decrease")
                          }
                          className="px-2 py-1 bg-gray-200 rounded w-7 h-7 overflow-hidden"
                        >
                          {loading == item.uid ? <LoadingOutlined spin /> : "-"}
                        </button>
                        <span className="flex justify-center items-center text-center w-10 h-7 overflow-hidden">
                          {item.quantity}
                        </span>
                        <button
                          disabled={loading}
                          onClick={() =>
                            handleIncreaseCartItem(item, "increase")
                          }
                          className="px-2 py-1 bg-gray-200 rounded w-7 h-7 overflow-hidden"
                        >
                          {loading == item.uid ? <LoadingOutlined spin /> : "+"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="hidden md:block section-title">
                    ₹&nbsp;
                    {(
                      parseFloat(
                        item?.product_detail?.price.replace(/,/g, "")
                      ) * Number(item.quantity)
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col jusitify-center items-center m-auto">
              <EmptyCart h={150} w={150} fill={"#E0A43B"} />
              <p className="sub_heading mb-4">Oops! Your cart is empty!</p>
              <p className="section-content mb-4">Start adding products now.</p>
              <CustomButton
                htmlType="submit"
                className="site-button-primary !m-0 capitalize"
                title="Browse Products"
                loading={false}
                type="submit"
                onClick={() => router.push("/products")}
              />
            </div>
          )}
        </div>
      </div>
      
      {selectedItems?.length > 0 && (
        <div className="w-full lg:w-[40%] xl:w-[30%] h-fit mx-auto bg-white shadow-md rounded-lg flex flex-col p-6 lg:sticky self-start lg:top-40">
          <div className="mt-4">
            <h2 className="text-heading !text-left mb-4">Bill details</h2>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="section-content !text-left">Sub total</span>
              </div>
              <span className="text-heading !text-right">
                {" "}
                ₹{calculateTotal()}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="gap-2">
                <div className="section-content !text-left">
                  Shipping Charges <br /> (Free for orders above ₹500)
                </div>
              </div>
              <span className="text-heading !text-right">
                {calculateTotal() <= 500 ? "₹500" : "Free Shipping"}
              </span>
            </div>
            <div className="flex justify-between items-center font-bold">
              <span className="section-title !text-left">Grand total</span>
              <h3 className="sub_heading !text-right ">₹{calculateTotal()}</h3>
            </div>
          </div>
          <div className="mt-6 text-right">
            <CustomButton
              htmlType="submit"
              className="site-button-primary !m-0 w-[-webkit-fill-available] capitalize"
              title="Proceed to Checkout"
              loading={false}
              type="submit"
              onClick={onCheckout}
            />
          </div>
        </div>
      )}
      {contextHolder}
    </div>
  );
};

export default CartPage;

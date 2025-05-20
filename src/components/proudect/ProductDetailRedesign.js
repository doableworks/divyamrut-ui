"use client";
import React, { use, useEffect, useState } from "react";
import CustomButton from "@/components/common/CustomButton";
import ImageMedium from "./ImageMedium";
import { setBuyProduct } from "@/redux/feature/buyProductSlice";
import { NoImageAvailabe } from "@/contants/contants";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "nextjs-toploader/app";
import { twMerge } from "tailwind-merge";
import Divider from "@/components/common/Divider";
import useCartActions from "@/components/cartCom/useCartActions";
import { useSession } from "next-auth/react";
import axiosInstance from "@/lib/axios";
import { Form, Input, message, Modal } from "antd";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfoTabs from "./ProductInfoTabs";

const specifications = [
  { title: "COMPOSITION", description: "92% FINE merino wool 8% silk" },
  { title: "SIZE", description: "125 x 250 cm / 50 x 100 in approx." },
  { title: "THICKNESS", description: "Fine" },
  { title: "DETAILS", description: "Without fringes" },
  { title: "WEIGHT", description: "276 g / 0.61 lb approx." },
];

const ProductDetailRedesign = ({ item }) => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [selectedImage, SetSelectedImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { onAddItem, onIncreaseOrDecreaseItem } = useCartActions();
  const [isNotified, setIsNotified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [hoverImage, setHoverImage] = useState(null);
  const [form] = Form.useForm();

  const handleAddItem = async () => {
    try {
      setLoading(true);
      await onAddItem(item, quantity);
    } catch (error) {
      console.log("handleAddItem error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleIncreaseCartItem = (action) => {
    setQuantity((prev) => {
      if (action === "increase" && prev < item.quantity) {
        return prev + 1;
      }
      if (action === "decrease" && prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const handleModalOk = async (values) => {
    const emailToUse = values.email;

    try {
      setModalLoading(true);
      const url = "/product/notifications-create/";
      const body = { product_uid: item.uid, email: emailToUse };

      const response = await axiosInstance.post(url, body);

      if (response.status >= 200 && response.status < 300) {
        setIsNotified(true);
        setIsModalOpen(false);
        messageApi.open({
          type: "success",
          content:
            "Thank you! You'll be notified as soon as the product is back in stock.",
        });
      } else {
        throw new Error("Failed to set notification.");
      }
    } catch (err) {
      console.log("handleModalOk Error", err);
      messageApi.open({
        type: "error",
        content: "Failed to set notification. Please try again later.",
      });
    } finally {
      setModalLoading(false);
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleNotifyMe = async () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen && session?.user?.user?.email) {
      form.setFieldsValue({ email: session.user.user.email });
      handleModalOk();
    }
  }, [session, isModalOpen]);

  const allImages = [
    item?.image,
    ...(item?.uploaded_images || []).map((img) => img.image),
  ];
  

  const features = [
    item?.feature_1,
    item?.feature_2,
    item?.feature_3,
    item?.feature_4,
    item?.feature_5,
  ];

  return (
    <>
      <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-10 min-h-[80vh]">
        <div className="lg:sticky w-full lg:col-span-7">
          <ProductImageGallery images={allImages} />
        </div>

        <div className="flex flex-col w-full lg:col-span-5">
          <div className="lg:sticky lg:bottom-0 space-y-2">
            <h1 className="text-3xl text-yellow font-prata leading-relaxed">
              {item.name}
            </h1>
            <p className="text-xl font-medium text-neutral pb-3">
              ₹&nbsp;{item?.price}
              <span className="text-sm ml-2 font-normal">
                (Inclusive of all taxes)
              </span>
            </p>
            <Divider className="mb-4" />

            <div className="text-sm">
              {specifications?.length > 0 && (
                <div>
                  <ul className="capitalize space-y-1">
                    {specifications.map((each, index) => (
                      <li key={index}>
                        <span className="font-bold">{each?.title}:</span>{" "}
                        {each?.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {features?.length > 0 && (
                <div className="my-5 md:ml-4">
                  <ul className="list-disc list-outside flex flex-col gap-2">
                    {features.map((feature, index) =>
                      feature ? <li key={index}>{feature}</li> : null
                    )}
                  </ul>
                </div>
              )}
            </div>

            {item.similar_products?.length > 0 && (
              <div className="mb-4">
                <p className="normal-case font-medium text-sm mb-4">
                  Color: {item?.colour}
                </p>
                <div className="flex flex-row items-center gap-4 flex-wrap narrow-scrollbar pb-2">
                  {[...item.similar_products, item].map((product, index) => {
                    const isCurrentProduct = product.uid === item.uid;
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-2 items-center justify-center text-center w-20"
                      >
                        <div
                          className={twMerge(
                            "border rounded-md overflow-hidden cursor-pointer flex-shrink-0 hover:border-slate-700",
                            isCurrentProduct
                              ? "border-2 border-[--yellow] p-1 cursor-not-allowed w-16 h-16"
                              : "border-gray-300 w-14 h-14"
                          )}
                          onClick={() => {
                            if (!isCurrentProduct) {
                              router.push(
                                `/products/${product.category_slug}/${product.slug}`
                              );
                            }
                          }}
                        >
                          <img
                            src={product.image || NoImageAvailabe}
                            alt={`Color ${index}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
              {parseInt(item.quantity) > 0 ? (
                <div className="w-full flex flex-col gap-4 items-start mt-5">
                  <div className="flex gap-2 items-center justify-between border-2 p-2 px-4 rounded-md text-lg">
                    <button
                      onClick={() => handleIncreaseCartItem("decrease")}
                      disabled={quantity == 1}
                    >
                      {loading == item.uid ? <LoadingOutlined spin /> : "-"}
                    </button>
                    <p className="w-14 text-center">
                      {quantity}
                    </p>
                    <button onClick={() => handleIncreaseCartItem("increase")}>
                      {loading == item.uid ? <LoadingOutlined spin /> : "+"}
                    </button>
                  </div>
                  <CustomButton
                    htmlType="submit"
                    className="site-button-primary !mt-0 !w-[-webkit-fill-available] capitalize"
                    title="ADD TO CART"
                    loading={loading}
                    onClick={handleAddItem}
                  />
                </div>
              ) : (
                <div className="flex w-full gap-4">
                  <CustomButton
                    className="site-button-primary !flex-grow !bg-gray-400 !mt-4 !cursor-not-allowed"
                    title="Out of Stock"
                    disabled={true}
                  />
                  {!isNotified && (
                    <CustomButton
                      onClick={handleNotifyMe}
                      className="site-button-secondary-outlined !mt-4"
                      title="Notify Me"
                      loading={loading}
                      disabled={loading || isNotified}
                      spinnerColor={"#AA218C"}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Divider className="my-20" />

      <ProductInfoTabs />

      {contextHolder}

      <Modal
        title=""
        open={isModalOpen}
        footer={null}
        onCancel={!modalLoading && handleModalCancel}
      >
        <div className="p-5">
          <p className="section-content !text-left !mb-4">
            Enter your email address to get notified when the product is back in
            stock:
          </p>
          <Form form={form} layout="vertical" onFinish={handleModalOk}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
              initialValue={session?.user?.email || ""}
            >
              <Input
                placeholder="Enter your email"
                disabled={modalLoading}
                className="!mt-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item className="w-full">
              <CustomButton
                htmlType="submit"
                title="Create Alert"
                className="site-button-secondary !mt-4 !w-full"
                loading={modalLoading}
                type="submit"
                disabled={modalLoading}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ProductDetailRedesign;

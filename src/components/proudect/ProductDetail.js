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

const ProductDetail = ({ item }) => {
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

  const uploadedImages = [
    {
      id: "01001",
      image: item.image,
      is_published: true,
      uid: "default_image",
    },
    ...item.uploaded_images.filter((each) => each?.image !== null),
  ];

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

  return (
    <>
      <div className="relative flex flex-col lg:flex-row gap-10 min-h-[80vh]">
        {/* removed lg:sticky */}
        <div className="w-full  md:top-10 lg:w-1/2 flex flex-col lg:flex-row-reverse items-center self-start lg:items-start gap-2"> 
          <div className="relative w-full aspect-[1] bg-white overflow-hidden rounded-xl lg:w-full">
            <ImageMedium
              id="main-preview-img"
              imgSrc={
                hoverImage ||
                uploadedImages[selectedImage]?.image ||
                NoImageAvailabe
              }
              aspect={1}
            />
          </div>
          <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-auto mt-8 lg:mt-0 overflow-x-auto lg:overflow-y-auto narrow-scrollbar pb-2 lg:pb-0 flex-shrink-0 lg:h-full">
            {uploadedImages.map((path, index) => (
              <div
                key={index}
                onClick={() => SetSelectedImage(index)}
                className={`border border-gray-300 rounded-md overflow-hidden cursor-pointer flex-shrink-0 w-20 aspect-[3/4] ${
                  selectedImage == index && "border-2 border-slate-700"
                }`}
              >
                <img
                  src={path?.image ? path?.image : NoImageAvailabe}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className={twMerge("product_title", "mb-4")}>{item.name}</h1>
          <div className="mb-4">
            <p className="text-2xl font-semibold">
              ₹&nbsp;{item?.price}
              <span className="text-sm ml-2 font-normal">
                (Inclusive of all taxes)
              </span>
            </p>
          </div>

          {item.similar_products?.length > 0 && (
            <div className="mb-4">
              <p className="section-title !text-left !my-3 !normal-case">
                Available Colors:
              </p>
              <div className="flex flex-row items-center gap-4 overflow-x-auto narrow-scrollbar pb-2">
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
                            ? "border-2 border-[--yellow] p-1 cursor-not-allowed shadow-md w-16 h-16"
                            : "border-gray-300 w-14 h-14"
                        )}
                        onClick={() => {
                          if (!isCurrentProduct) {
                            router.push(
                              `/products/${product.category_slug}/${product.slug}`
                            );
                          }
                        }}
                        // onMouseEnter={() => {
                        //   if (!isCurrentProduct && product.image) {
                        //     setHoverImage(product.image);
                        //     SetSelectedImage(-1);
                        //     const previewImg =
                        //       document.getElementById("main-preview-img");
                        //     if (previewImg) {
                        //       previewImg.setAttribute("src", product.image);
                        //     }
                        //   }
                        // }}
                        // onMouseLeave={() => {
                        //   if (!isCurrentProduct) {
                        //     SetSelectedImage(0);
                        //     setHoverImage(null);
                        //     const previewImg =
                        //       document.getElementById("main-preview-img");
                        //     if (previewImg && item.uploaded_images?.[0]?.image) {
                        //       previewImg.setAttribute(
                        //         "src",
                        //         item.uploaded_images[0].image
                        //       );
                        //     }
                        //   }
                        // }}
                      >
                        <img
                          src={product.image || NoImageAvailabe}
                          alt={`Color ${index}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium whitespace-nowrap text-[--neutral]">
                        {product?.colour}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
            {parseInt(item.quantity) > 0 ? (
              <>
                <div className="flex items-end space-x-2">
                  <button
                    onClick={() => handleIncreaseCartItem("decrease")}
                    className="px-5 py-1 border border-gray-300 h-12 rounded font-semibold text-lg"
                    disabled={quantity == 1}
                  >
                    {loading == item.uid ? <LoadingOutlined spin /> : "-"}
                  </button>
                  <p className="font-bold border border-gray-300 h-12 w-14 rounded flex justify-center items-center">
                    {quantity}
                  </p>
                  <button
                    onClick={() => handleIncreaseCartItem("increase")}
                    className="px-5 py-1 border border-gray-300 h-12 rounded font-semibold text-lg"
                  >
                    {loading == item.uid ? <LoadingOutlined spin /> : "+"}
                  </button>
                </div>
                <CustomButton
                  htmlType="submit"
                  className="site-button-primary !mt-4 w-[-webkit-fill-available] capitalize"
                  title="ADD TO CART"
                  loading={loading}
                  onClick={handleAddItem}
                />
              </>
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

          {item?.feature_1 && (
            <div className="my-5">
              <p className="text-xl font-jost normal-case font-bold mb-3">
                About the Item
              </p>
              <ul className="list-disc list-outside flex flex-col gap-3 md:ml-6">
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
        </div>
      </div>

      {item?.product_benefits && (
        <div className="mb-10">
          <p className="text-xl font-jost normal-case font-bold mt-6">
            Benefits of {item?.title}
          </p>
          <Divider className="mb-4 mt-4" />
          <p
            className="list-disc list-outside my-6 flex flex-col gap-3 leading-relaxed"
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
            className="list-disc list-outside my-6 flex flex-col gap-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item?.method_of_preparation }}
          />
        </div>
      )}

      {item?.description && (
        <div className="mt-10">
          <p className="text-xl font-jost normal-case font-bold mt-6">
            Additional Information
          </p>
          <Divider className="mb-4 mt-4" />
          <p
            className="  font-jost leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
        </div>
      )}
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

export default ProductDetail;

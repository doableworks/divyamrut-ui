"use client";
import { useEffect, useState } from "react";
import { Button, Form, message, Input, Row, Col, Modal } from "antd";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";
import {
  setCartLoader,
} from "@/redux/feature/cartSlice";
import { useRouter } from "nextjs-toploader/app";
import CustomButton from "@/components/common/CustomButton";
import { NoImageAvailabe } from "@/contants/contants";

const LoginModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openLoginModal } = useSelector((state) => state.authModal);
  const [messageApi, contextHolder] = message.useMessage();
  const [text, setText] = useState("");
  const fullText = "Hello Again!";
  const [index, setIndex] = useState(0);

  const showRegisterModal = () => {
    dispatch(setOpenLoginModal(false));
    dispatch(setOpenRegisterModal(true));
  };

  const handleCancel = () => {
    dispatch(setOpenLoginModal(false));
  };

  useEffect(() => {
    if (!openLoginModal) {
      setText("");
      setIndex(0);
      return;
    }
    if (index < fullText.length && openLoginModal) {
      const timer = setTimeout(() => {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index, openLoginModal]);

  const onFinish = (values) => {
    setLoading(true);
    setErrorMessage("");
    dispatch(setCartLoader(true))
    signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    })
      .then(({ ok, error }) => {
        setLoading(false);
        if (ok) {
          // router.push("/home");
          dispatch(setOpenLoginModal(false));
          showResponseMessage("success", "Login successfully!");
        } else {
          showResponseMessage("error", "Bad Credentials!");
        }
      })
      .catch(() => {
        setLoading(false);
        showResponseMessage("error", "Bad Credentials!");
      })
      .finally(() => {
        dispatch(setCartLoader(true))
      });
  };

  const handleForgetPass = () => {
    dispatch(setOpenLoginModal(false));
    router.push("/accounts/password/reset/");
  };

  const onGoogle = () => {
    dispatch(setOpenLoginModal(false));
    signIn("google");
  };

  const showResponseMessage = (type, content) => {
    messageApi.open({ type, content });
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={openLoginModal}
        onCancel={handleCancel}
        footer={null}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "70%",
          xl: "70%",
          xxl: "70%",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded overflow-hidden h-auto lg:min-h-[70vh]">
          <Image
            src={NoImageAvailabe}
            alt="Login"
            height={100}
            width={100}
            className="w-full h-full hidden lg:flex object-cover"
          />
          <div className="flex flex-col p-11 justify-center items">
            <div>
              <div className="w-full">
                <h3 className="highlight-heading !text-left !mb-2 !mt-0">
                  {text || "Hello Again!"}
                </h3>
                <p className="section-title !normal-case !text-gray-500 !text-left mb-10">
                  Welcome back you&apos;ve been missed!
                </p>
              </div>
              <Form
                name="basic"
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                autoComplete="off"
                className="w-full"
              >
                <div className="mb-6">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Invalid email!",
                      },
                      { required: true, message: "Please input your email!" },
                    ]}
                    className="w-full"
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </div>

                <div className="mb-6">
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    className="w-full"
                  >
                    <Input.Password placeholder="Enter Password" />
                  </Form.Item>
                </div>

                <div className="text-right mb-5">
                  <span
                    className="text-sm font-semibold text-right text-blue-600 cursor-pointer mb-5"
                    onClick={handleForgetPass}
                  >
                    Forgot Password
                  </span>
                </div>

                <Form.Item className="w-full">
                  {/* <Button
                  htmlType="submit"
                  loading={loading}
                  size={"large"}
                  // className="w-full h-12 rounded-md bg-blue-600 text-white font-semibold"
                  className="w-full"
                >
                  Login
                </Button> */}

                  <CustomButton
                    htmlType="submit"
                    className="site-button-primary !m-0 w-[-webkit-fill-available]"
                    title="Login"
                    loading={loading}
                    type="submit"
                  />
                </Form.Item>
              </Form>
            </div>

            {/* <div className="w-full flex items-center justify-center mt-4">
              <div className="h-px bg-gray-200 w-1/3"></div>
              <p className="mx-4 text-sm">Or</p>
              <div className="h-px bg-gray-200 w-1/3"></div>
            </div>

            <div
              className="flex items-center justify-center w-full bg-white border border-gray-200 rounded-md p-3 mt-4 cursor-pointer"
              onClick={onGoogle}
            >
              <Image
                src="/asset/home/loginModalGoogle.png"
                alt="Google icon"
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <p className="ml-3 font-medium text-sm">Continue with Google</p>
            </div> */}

            <p className="mt-5 text-sm text-center">
              Not a member? &nbsp;
              <span
                onClick={showRegisterModal}
                className="text-blue-600 cursor-pointer"
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;

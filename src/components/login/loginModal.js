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
import { setCartLoader } from "@/redux/feature/cartSlice";
import { useRouter } from "nextjs-toploader/app";
import CustomButton from "@/components/common/CustomButton";
import { NoImageAvailabe } from "@/contants/contants";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
  const [loginWithOTP, setLoginWithOTP] = useState(true);
  const [loginWithOTStepOne, setLoginWithOTPStepOne] = useState({
    data: null,
    isCompleted: false,
  });

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
    dispatch(setCartLoader(true));
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
        dispatch(setCartLoader(true));
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

  const headers = {
    "Content-Type": "application/json",
  };

  const handleLoginWithOTPStepOne = async (values) => {
    if (!values.emal) {
      showResponseMessage("error", "Please enter a valid email");
      return;
    }

    try {
      setLoading(true);
      const url = `${apiUrl}/api/auth/signup-otp/`;
      const body = { email: values.email };

      const response = await axios.post(url, body, { headers });

      if (response.status === 200) {
        setLoginWithOTPStepOne({ data: values.email, isCompleted: true });
        showResponseMessage("success", "OTP sent successfully");
      } else {
        showResponseMessage("error", "Unable to send OTP, Please try again");
      }
    } catch (err) {
      console.log("Error sending OTP", err);
      const errorMessage =
        err?.response?.data?.message || "Unable to send OTP, Please try again";
      showResponseMessage("error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithOTPStepTwo = () => {};

  const toggleLoginWithOTP = () => {
    setLoginWithOTP(!loginWithOTP);
  };

  const handleChangeOTPStepOne = () => {
    setLoginWithOTPStepOne({
      data: null,
      isCompleted: false,
    });
    setText("Confirm OTP");
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
              {loginWithOTP ? (
                !loginWithOTStepOne.isCompleted ? (
                  <Form
                    name="loginwithOTPOne"
                    wrapperCol={{ span: 24 }}
                    onFinish={handleLoginWithOTPStepOne}
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
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                        className="w-full"
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                    </div>

                    <div className="flex justify-between items-center w-full mb-8">
                      <div></div>

                      <button
                        className="text-sm text-[--yellow] cursor-pointer font-medium "
                        onClick={toggleLoginWithOTP}
                        type="button"
                      >
                        Login with Password
                      </button>
                    </div>

                    <Form.Item className="w-full">
                      <CustomButton
                        htmlType="submit"
                        className="site-button-primary !m-0 w-[-webkit-fill-available]"
                        title="Next"
                        loading={loading}
                        type="submit"
                      />
                    </Form.Item>
                  </Form>
                ) : (
                  <Form
                    name="loginwithOTPOne"
                    wrapperCol={{ span: 24 }}
                    onFinish={handleLoginWithOTPStepTwo}
                    autoComplete="off"
                    className="w-full"
                  >
                    <div className="mb-6 flex justify-center items-center">
                      <Form.Item
                        name="otp"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the 6-digit OTP",
                          },
                          {
                            len: 6,
                            message: "OTP must be exactly 6 digits",
                          },
                        ]}
                      >
                        <Input.OTP
                          type="text"
                          maxLength={6}
                          placeholder="Enter 6-digit OTP"
                        />
                      </Form.Item>
                    </div>

                    <div className="flex justify-between items-center w-full mb-8">
                      <div></div>

                      <button
                        className="text-sm text-[--yellow] cursor-pointer font-medium "
                        onClick={handleChangeOTPStepOne}
                        type="button"
                      >
                        Change Email
                      </button>
                    </div>

                    <Form.Item className="w-full">
                      <CustomButton
                        htmlType="submit"
                        className="site-button-primary !m-0 w-[-webkit-fill-available]"
                        title="Next"
                        loading={loading}
                        type="submit"
                      />
                    </Form.Item>
                  </Form>
                )
              ) : (
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

                  <div className="flex justify-between items-center w-full mb-8">
                    <button
                      className="text-sm text-[--yellow] cursor-pointer font-medium "
                      onClick={toggleLoginWithOTP}
                      type="button"
                    >
                      Login with OTP
                    </button>

                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 cursor-pointer"
                      onClick={handleForgetPass}
                    >
                      Forgot Password
                    </button>
                  </div>

                  <Form.Item className="w-full">
                    <CustomButton
                      htmlType="submit"
                      className="site-button-primary !m-0 w-[-webkit-fill-available]"
                      title="Login"
                      loading={loading}
                      type="submit"
                    />
                  </Form.Item>
                </Form>
              )}
            </div>

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

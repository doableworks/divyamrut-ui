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
import { useRouter } from "nextjs-toploader/app";

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
    console.log("values 555", values);
    setLoading(true);
    setErrorMessage("");
    signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    })
      .then(({ ok, error }) => {
        console.log("ok", ok, "error", error);
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
        className="login_modal"
      >
        <Row justify="center" className="h-full mt-6">
          <Col xs={0} sm={0} md={0} lg={12} xl={12} xxl={12}>
            <Image
              src="/asset/home/img1.png"
              alt="Login"
              className="h-auto w-full rounded-2xl"
              fill
            />
          </Col>
          <Col
            xs={{
              span: 24,
              offset: 1,
            }}
            sm={{
              span: 24,
              offset: 1,
            }}
            md={{
              span: 24,
              offset: 1,
            }}
            lg={{
              span: 11,
              offset: 1,
            }}
            xl={{
              span: 11,
              offset: 1,
            }}
            xxl={{
              span: 11,
              offset: 1,
            }}
            // span={11}
            className="flex flex-col items-center pl-2 pb-5 w-full"
          >
            <div className="w-full">
              <h3 className="font-semibold text-lg text-left">
                {text || "Hello Again!"}
              </h3>
              <p className="text-sm font-medium text-left mb-5">
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
                {/* <Input
                  placeholder="Email id"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                /> */}

                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                className="w-full"
              >
                {/* <Input.Password
                  placeholder="Enter Password"
                  className="w-full bg-gray-100 rounded-md border-none focus:ring-0"
                /> */}

                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </Form.Item>

              <h4
                className="text-sm font-semibold text-right text-blue-600 cursor-pointer mb-5"
                onClick={handleForgetPass}
              >
                Forgot Password
              </h4>

              <Form.Item className="w-full">
                <Button
                  htmlType="submit"
                  loading={loading}
                  className="w-full h-12 rounded-md bg-blue-600 text-white font-semibold"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>

            <div className="w-full flex items-center justify-center mt-4">
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
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LoginModal;

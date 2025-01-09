"use client";

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CONSTANTS from "@/contants/contants";
import { signIn } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Form, message, Input, Row, Col, Modal } from "antd";
import CustomButton from "@/components/common/CustomButton";


const RegisterModal = () => {
  const [form] = Form.useForm();
  const [capcha, setCapcha] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openRegisterModal } = useSelector((state) => state.authModal);
  const dispatch = useDispatch();
  const router = useRouter();
  const recaptcha = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();

  const showResponseMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const handleCancel = () => {
    dispatch(setOpenRegisterModal(false));
  };

  const showLoginModal = () => {
    dispatch(setOpenLoginModal(true));
    dispatch(setOpenRegisterModal(false));
  };

  const onSubmit = async (values) => {
    // if (capcha) {
    setLoading(true);
    try {
      const data = {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        password1: values.password,
        password2: values.confirm,
        // recaptcha: capcha,
      };

      console.log(
        CONSTANTS.NGROK_URL + `api/auth/register/`,
        "vlaues register",
        data
      );

      const response = await fetch(CONSTANTS.NGROK_URL + `api/auth/register/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en-US",
        },
      });

      console.log("vlaues register response", response);

      const responseData = await response.json();
      setLoading(false);
      if (response.ok && responseData) {
        showResponseMessage(
          "success",
          "You are successfully signed up. Please check your email address for verification."
        );
        dispatch(setOpenRegisterModal(false));
        dispatch(setOpenLoginModal(true));
      } else {
        const errs = Object.entries(responseData).map(
          ([key, value]) => `${key}: ${value}`
        );
        showResponseMessage("error", errs);
      }
      return true;
    } catch (error) {
      console.log("error register error", error);
      showResponseMessage(
        "error",
        "Something went wrong, please try again later!"
      );
      setLoading(false);
      return false;
    }
    // }
  };

  const onCaptchaChange = (token) => {
    if (token) {
      setCapcha(token);
    }
  };

  const onGoogle = () => {
    dispatch(setOpenLoginModal(false));
    signIn("google");
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={openRegisterModal}
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
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            xxl={12}
            className="flex flex-col justify-center"
          >
            <Form
              name="register"
              onFinish={onSubmit}
              form={form}
              className="w-full"
              autoComplete="off"
            >
              <h2 className="text-xl font-semibold text-left">
                Create an Account
              </h2>
              <Row gutter={[16, 16]} className="mt-4">
                <Col span={12}>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />

                    {/* <input
                      // type="email"
                      id="fist_name"
                      placeholder="First Name"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    /> */}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                    {/* <input
                      // type="email"
                      id="last_name"
                      placeholder="Last Name"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    /> */}
                  </Form.Item>
                </Col>
              </Row>
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
              >
                <Input placeholder="Email Address" />

                {/* <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                /> */}
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password" />
                {/* <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                /> */}
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  className="pass_input"
                />

                {/* <input
                  type="password"
                  id="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                /> */}
              </Form.Item>
              {/* <Form.Item className="captcha">
                <ReCAPTCHA
                  sitekey={CONSTANTS.SITE_KEY}
                  onChange={onCaptchaChange}
                  ref={recaptcha}
                />
              </Form.Item> */}
              {/* <Button
                loading={loading}
                size="large"
                htmlType="submit"
                className="w-full bg-blue-600 text-white font-semibold rounded-lg py-2"
              >
                Sign Up
              </Button> */}
              <CustomButton
                htmlType="submit"
                className="site-button-primary !m-0 w-[-webkit-fill-available]"
                title="Sign Up"
                loading={loading}
                type="submit"
              />

              {/* <button
                type="submit"
                className="w-full bg-q4ca25af text-white p-4 rounded flex items-center justify-center gap-2"
              >
                Sign Up
              </button> */}
            </Form>
            <div className="text-center mt-4">
              <p>
                Already a member?{" "}
                <span
                  onClick={showLoginModal}
                  className="text-blue-600 cursor-pointer"
                >
                  Log in
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default RegisterModal;

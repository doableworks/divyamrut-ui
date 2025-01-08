"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Button, Modal, Input, Form, message, Skeleton, Row, Col } from "antd";
import OTPModal from "../../../../components/modals/OtpModal";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";
import CONSTANTS from "../../../../contants/contants";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  // const [otp, setOtp] = useState({ value: "969100", verified: true });
  const [otp, setOtp] = useState({ value: null, verified: false });
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [isOptSendSuccessful, setIsOptSendSuccessful] = useState(null);
  const [isOptExpired, setIsOptExpired] = useState(false);
  const [isPasswordResetSuccessModel, setIsPasswordResetSuccessModel] =
    useState(null);
  const [showhide, setShowHide] = useState(false);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  let timer = null;


  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleExpireOtpTime = ()=>{
    timer = setTimeout(() => {
      setIsOptExpired(true);
    }, 1000 * 10);
  }

  const sendOtp = async (data) => {
    console.log("onfinish 333", data);
    try {
      setLoading2(true);
      const res = await axios.post(
        CONSTANTS.NGROK_URL + `api/auth/forgot-password/`,
        data
      );
      console.log("res 222", res);
      if (res.status === 200) {
        setEmail(data.email);
        setIsOptSendSuccessful(true);
        showResponseMessage("success", "OTP has been sent to your email");
        // setShowHide(true);
        // setIsPasswordResetSuccessModel(true);

      } else {
        showResponseMessage("error", "Something went wrong!");
        setIsOptSendSuccessful(false);
      }
    } catch (err) {
      console.log("res 222", err.response.data.error);
      showResponseMessage(
        "error",
        err.response.data.error || "Something went wrong!"
      );
      message.error(err.response.data);
    } finally {
      setLoading2(false);
    }
  };

  const VerifyOtp = async (values) => {
    const data = {
      email: "vijayformal2@gmail.com",
      ...values,
    };
    console.log("data VerifyOtp", data);

    try {
      setLoading(true);
      const res = await axios.post(
        CONSTANTS.NGROK_URL + `api/auth/verify-otp/`,
        data
      );
      console.log("changePassword res", res);
      if (res.status === 200) {
        setOtp({ value: data.otp, verified: true });
        setIsOptSendSuccessful(true);
        showResponseMessage("success", "OTP verified");
        // setShowHide(true);
        // setIsPasswordResetSuccessModel(true);
        // setTimeout(() => {
        //   setIsPasswordResetSuccessModel(false);
        //   dispatch(setOpenLoginModal(true));
        // }, 5000);
      } else {
        setOtp({ value: null, verified: false }); 
        showResponseMessage("error", "Invalid OTP!");
        setIsOptSendSuccessful(false);
      }
    } catch (err) {
      showResponseMessage(
        "error",
        err.response.data.error || "Something went wrong!"
      );
      message.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (value) => {
    console.log("data changePassword", value);
    try {
      const data = {
        email: email,
        ...value,
      };

      setLoading(true);
      const res = await axios.post(
        CONSTANTS.NGROK_URL + `api/auth/reset-password/`,
        data
      );
      if (res.status === 200) {
        setEmail(data.email);
        setIsOptSendSuccessful(true);
        showResponseMessage("success", "Password has been reset successfully");
        // setShowHide(true);
        // setIsPasswordResetSuccessModel(true);
        // setTimeout(() => {
        //   router.push("/");
        //   setIsPasswordResetSuccessModel(false);
        //   dispatch(setOpenLoginModal(true));
        // }, 5000);
      } else {
        showResponseMessage("error", "Something went wrong!");
        setIsOptSendSuccessful(false);
      }
    } catch (err) {
      showResponseMessage("error", "Something went wrong!");
      message.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    dispatch(setOpenRegisterModal(true));
  };

  const showResponseMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  return (
    <>
      {contextHolder}
      <div className="reset_pass_container">
        <Row justify={"center"} align={"middle"} className="w-full py-32">
          <Col xs={22} sm={16} md={12} lg={10} xl={8} xxl={6}>
            {!otp.verified ? (
              <div
                title="Password Reset"
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <h1 className="reset_heading">Reset Password </h1>
                <p className="reset_sub_text mb-10">
                  Forgotten your password? <br />
                  Enter your e-mail address below, and we&apos;ll send you an
                  opt on e-mail allowing you to reset it.
                </p>
                <Form
                  name="basic"
                  wrapperCol={{
                    span: 24,
                  }}
                  onFinish={sendOtp}
                  autoComplete="off"
                  
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Invalid email!",
                      },
                      {
                        required: true,
                        message: "Please input your email",
                      },
                    ]}
                    className="text-start"
                  >
                    <Input
                      className="reset_input"
                      placeholder="email"
                      // onChange={setEmail}
                    />
                    {/* <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    /> */}
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      span: 24,
                    }}
                  >
                    <Button
                      htmlType="submit"
                      className="reset_email_btn1"
                      loading={loading2}
                    >
                      {" "}
                      Send OTP{" "}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ) : otp.verified ? (
              <Form
                name="basic"
                wrapperCol={{
                  span: 24,
                }}
                onFinish={changePassword}
                autoComplete="off"
                // style={{width:"100%"}}
                className="text-center"
              >
                <h1 className="reset_heading" style={{ marginBottom: "10px" }}>
                  Reset Password{" "}
                </h1>
                <Form.Item
                  // label="Password1"
                  name="new_password1"
                  rules={[
                    {
                      required: true,
                      message: "Please enter new password ",
                    },
                    {
                      min: 8,
                      message: "Password must contain at least 8 characters!",
                    },
                  ]}
                >
                  <Input.Password
                    className="reset_input"
                    placeholder="Enter Password"
                    // onChange={setFirstPassword}
                  />
                </Form.Item>

                <Form.Item
                  // label="Password2"
                  name="new_password2"
                  dependencies={["new_password1"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please enter confirm password ",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (
                          !value ||
                          getFieldValue("new_password1") === value
                        ) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    className="reset_input"
                    placeholder="Re-enter Password"
                    // onChange={setSecondPassword}
                  />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    span: 24,
                  }}
                >
                  <Button
                    htmlType="submit"
                    className="reset_email_btn1"
                    loading={loading}
                  >
                    {" "}
                    Submit{" "}
                  </Button>
                </Form.Item>
              </Form>
            ) : (
              <Skeleton active />
            )}
            {isOptSendSuccessful  && (
              <OTPModal
                email={email}
                sendOtpAgain={sendOtp}
                loading={loading}
                VerifyOtp={VerifyOtp}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Page;

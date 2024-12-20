"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Button, Modal, Input, Form, message, Skeleton, Row, Col } from "antd";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";
import CONSTANTS from "../../../../contants/contants";

export const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmailSentSuccessful, setIsEmailSentSuccessful] = useState(null);
  const [isPasswordResetSuccessModel, setIsPasswordResetSuccessModel] =
    useState(null);
  const [showhide, setShowHide] = useState(false);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();


  const onFinish = async (data) => {
    try {
      setLoading(true)
      const res = await axios.post(
        CONSTANTS.NGROK_URL + `api/account/auth/password/reset/`,
        data
      );
      if (res.status === 200) {
        setIsEmailSentSuccessful(true);
        setShowHide(true);
        setIsPasswordResetSuccessModel(true);
        setTimeout(() => {
          router.push("/");
          setIsPasswordResetSuccessModel(false);
          dispatch(setOpenLoginModal(true));
        }, 5000);
      } else {
        showResponseMessage("error", "Something went wrong!");
        setIsEmailSentSuccessful(false);
      }
    } catch (err) {
      showResponseMessage("error", "Something went wrong!");
      message.error(err.response.data);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    dispatch(setOpenLoginModal(false));
    dispatch(setOpenRegisterModal(false));
  }, []);

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
        <Row
          justify={"center"}
          align={"middle"}
          style={{ marginTop: "10rem", width: "100%" }}
        >
          <Col xs={22} sm={16} md={12} lg={10} xl={8} xxl={6}>
            {showhide == false ? (
              <div
                title="Password Reset"
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <h1 className="reset_heading">Reset Password </h1>
                {/* <p className="reset_sub_text">
                We have sent you an e-mail. Please contact us if you do not
                receive it with in few minutes You will be redirected to Sign In
                page in 5 seconds.
              </p> */}

                <p className="reset_sub_text">
                  Forgotten your password? <br />
                  Enter your e-mail address below, and we&apos;ll send you an
                  e-mail allowing you to reset it.
                </p>
                <Form
                  name="basic"
                  wrapperCol={{
                    span: 24,
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email",
                      },
                    ]}
                  >
                    <Input
                      className="reset_input"
                      placeholder="email"
                      onChange={setEmail}
                    />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      span: 24,
                    }}
                  >
                    <Button htmlType="submit" className="reset_email_btn1"
                    loading={loading}>
                      {" "}
                      Submit{" "}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ) : isEmailSentSuccessful ? (
              <Modal
                open={isPasswordResetSuccessModel}
                footer={null}
                className="reset_heading"
                title="Password Reset Email Sent."
              >
                <p className="reset_text1">
                  We have sent you an e-mail. Please contact us if you do not
                  receive it within a few minutes.
                </p>
                <p className="reset_text1">
                  You will be redirected to
                  <span
                    style={{ color: "#3F4FE4", cursor: "pointer" }}
                    onClick={handleLogin}
                  >
                    Sign In
                  </span>
                  page in 5 seconds.
                </p>
              </Modal>
            ) : (
              <Skeleton active />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Page;

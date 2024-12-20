"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Result, Modal, Input, Form, Skeleton, message } from "antd";
import { useParams } from "next/navigation";
import CONSTANTS from "@/contants/contants";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";
import { useSelector, useDispatch } from "react-redux";
import {useSession} from "next-auth/react";

export const EmailConfirmation = () => {
  const params = useParams();
  const router = useRouter()
  const dispatch = useDispatch();
  const {data:session} = useSession()
  const { token } = params;
  const [messageApi, contextHolder] = message.useMessage();

  // const router = useRouter();
  // const {key} = router.query;
  const [isVerificationSuccessful, setIsVerificationSuccessful] =
    useState(null);
  const [isResendEmailModalOpen, setIsResendEmailModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isResendEmailSuccessful, setIsResendEmailSuccessful] = useState(null);
  const [loading, setLoading] = useState(false);

  const showResponseMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const getKey = async (key) => {
    try {
      const res = await axios.post(
        CONSTANTS.NGROK_URL + `api/account/auth/register/verify-email/`,
        {
          key: key,
        }
      );
      if (res.status == 200) {
        setIsVerificationSuccessful(true);
      } else {
        setIsVerificationSuccessful(true);
      }
    } catch (err) {
      // console.log(err);
      setIsVerificationSuccessful(false);
    }
  };

  useEffect(() => {
    if(session && session?.error != "RefreshAccessTokenError"){
      router.push('/home')
    }
  }, [session]);

  useEffect(() => {
    if (token) {
      const decodedToken = decodeURIComponent(token);
      getKey(decodedToken);
    }
  }, [token]);

  const handleLoginModel = () => {
    dispatch(setOpenLoginModal(true));
  };

  const showResendEmailModal = () => {
    setIsResendEmailModalOpen(true);
  };
  const handleResendEmailCancel = () => {
    setIsResendEmailModalOpen(false);
    setIsResendEmailSuccessful(null);
  };

  const onFinish = async () => {
    try {
        setLoading(true)
      const formData = new FormData();
      formData.append("email", email);
      // console.log(email,'ye hai email')
      const res = await axios.post(
        CONSTANTS.NGROK_URL + `api/account/auth/register/resend-email/`,
        formData
      );
      // setLoading(false);
      if (res.status == 200) {
        // setIsResendEmailModalOpen(false)
        setIsResendEmailSuccessful(true);
        showResponseMessage("success", "Email sent successfully!");
      } else {
        // console.log('no no')
        setIsResendEmailSuccessful(false);
        showResponseMessage("error", "Bad Credentials!");
      }
    } catch (err) {
      setIsResendEmailSuccessful(false);
      showResponseMessage("error", "Bad Credentials!");
    }
    finally{
        setLoading(false)
    }
  };

  return (
    <>
      {contextHolder}
      <br />
      {isVerificationSuccessful == null ? (
        <div style={{display:"flex", justifyContent:"center", alignContent:"center", marginTop:"5rem", width:"80%"}}>
        <Skeleton active />
        </div>
      ) : !isVerificationSuccessful ? (
        <Result
          status="error"
          title="Email confirmation failed"
          subTitle="Your link may be expired or invalid, please request a new verification link!"
          extra={[
            <Button
              type="primary"
              key="console"
              onClick={() => setIsResendEmailModalOpen(true)}
            >
              Request Verification Link
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="success"
          title="Congratulations! your email is confirmed. You can now login to your account."
          extra={
            <Button
              type="primary"
            //   shape="round"
              size="large"
              onClick={handleLoginModel}
            >
              Login
            </Button>
          }
        />
      )}

      <Modal
        title="Resend verification email"
        open={isResendEmailModalOpen}
        onCancel={handleResendEmailCancel}
        footer={null}
      >
        {isResendEmailSuccessful == null && (
          <Form
            name="basic"
            //   labelCol={{
            //     span: 8,
            //   }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={() => {
              onFinish();
            }}
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                //   offset: 8,
                span: 24,
              }}
            >
                <div style={{textAlign:"center"}}>
              <Button 
               type="primary"
            //    shape="round"
               size="large"
               htmlType="submit"
                loading={loading}>
                Submit
              </Button>
              </div>
            </Form.Item>
          </Form>
        )}

        {isResendEmailSuccessful === true && (
          <Result
            status="success"
            title={"Confirmation link sent successfully on your email."}
            extra={
              <Button
                type="primary"
                // shape="round"
                size="large"
                onClick={handleLoginModel}
              >
                Login
              </Button>
            }
          />
        )}
        {isResendEmailSuccessful === false && (
          <Result
            status="error"
            title="Something went wrong. Please try again after sometime."
            extra={
              <Button
                type="primary"
                // shape="round"
                size="large"
                onClick={handleLoginModel}
              >
                Login
              </Button>
            }
          />
        )}

        {/* <p>Are you sure you wish to unlock this document?</p> */}
      </Modal>
    </>
  );
};

export default EmailConfirmation;

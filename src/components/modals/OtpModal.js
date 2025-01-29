"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Form, message, Input, Row, Col, Modal } from "antd";
import CustomButton from "@/components/common/CustomButton";

export default function OTPModal({ email, sendOtpAgain, loading, VerifyOtp }) {
  const [open, setOpen] = useState(true);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      // Cleanup timeout to avoid memory leaks
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onCancel={handleCancel} footer={null}>
      <div className="bg-white w-full p-6">
        <p className="section-title !normal-case !mb-6 !text-gray-500">
          An OTP has been sent to{" "}
          <span className="!font-medium !text-gray-700">{email}</span>.
        </p>
        <Form
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          onFinish={VerifyOtp}
          autoComplete="off"
        >
          <div className="w-full mb-4 text-center">
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
          {seconds > 0 ? (
            <h2 className="text-[14px] leading-[20px] font-[400] mb-4">
              {" "}
              <span className="text-cyan-400 cursor-pointer">
                Resend OTP &nbsp;
              </span>
              in {seconds} seconds
            </h2>
          ) : (
            <h2 className="text-[14px] leading-[20px] font-[400] mb-4">
              Didn&apos;t get OTP ?&nbsp;
              <span
                onClick={() => sendOtpAgain({ email: email })}
                className="text-cyan-400 underline cursor-pointer"
              >
                Resend OTP.
              </span>
            </h2>
          )}
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
            className="text-center"
          >
            {/* <Button
              htmlType="submit"
              className="reset_email_btn1"
              loading={loading}
              size="large"
            >
              Verify
            </Button> */}

            <CustomButton
              htmlType="submit"
              className="site-button-primary !m-0 w-[-webkit-fill-available]"
              title="Verify"
              loading={loading}
              type="submit"
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

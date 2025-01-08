"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, message, Input, Row, Col, Modal } from "antd";

export default function OTPModal({ email, sendOtpAgain, loading, VerifyOtp }) {
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(true);
  // const router = useRouter();

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) return alert("Enter a valid 6-digit OTP.");
    // Trigger backend OTP validation (API call here)
    // router.push("/forgot-password/reset-password"); // Redirect to reset password page
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={null}
      // className="login_modal"
    >
      {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"> */}
      <div className="bg-white w-full">
        <p className="text-sm text-gray-600 text-center my-2">
          An OTP has been sent to <span className="font-medium">{email}</span>.
        </p>
        <Form
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          onFinish={VerifyOtp}
          autoComplete="off"
          // style={{width:"100%"}}
        >
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
            <Input
              type="text"
              maxLength={6}
              className="reset_input"
              placeholder="Enter 6-digit OTP"
            />
          </Form.Item>
          <h2 className="text-[14px] leading-[20px] font-[400] mb-4">
            Didn&apos;t get OTP ? &apos;
            <span
              onClick={() => sendOtpAgain({ email: email })}
              className="text-cyan-400 underline cursor-pointer"
            >
              Send again otp.
            </span>
          </h2>
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
            className="text-center"
          >
            <Button
              htmlType="submit"
              className="reset_email_btn1"
              loading={loading}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* </div> */}
    </Modal>
  );
}

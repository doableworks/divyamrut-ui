import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, message, Input, Row, Col, Modal } from "antd";

export default function OTPModal({ email, closeModal }) {
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
          <h3 className="text-lg font-medium text-gray-900 text-center">
            Enter OTP
          </h3>
          <p className="text-sm text-gray-600 text-center my-2">
            An OTP has been sent to <span className="font-medium">{email}</span>
            .
          </p>
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-4 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-center"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              required
            />
            <div className="flex justify-center mt-4">
              {/* <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-md shadow hover:bg-gray-400"
              >
                Cancel
              </button> */}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      {/* </div> */}
    </Modal>
  );
}

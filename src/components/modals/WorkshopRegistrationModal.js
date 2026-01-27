"use client";
import React, { useState, useEffect } from "react";
import { Modal, Form, Input, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import axiosInstance from "@/lib/axios";
import { toggleWorkshopRegistrationModal } from "@/redux/feature/workshopSlice";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function WorkshopRegistrationModal() {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  
  const { isRegistrationModal, selectedWorkshop } = useSelector(
    (state) => state.workshop
  );

  const handleCancel = () => {
    dispatch(toggleWorkshopRegistrationModal({ isOpen: false, workshop: null }));
    form.resetFields();
  };

  // Auto-fill form with user data if logged in
  useEffect(() => {
    if (isRegistrationModal && session?.user?.user) {
      form.setFieldsValue({
        email: session.user.user.email || "",
        first_name: session.user.user.first_name || "",
        last_name: session.user.user.last_name || "",
        mobile: session.user.user.phone_no || "",
      });
    } else if (isRegistrationModal) {
      // Clear form if not logged in
      form.resetFields();
    }
  }, [isRegistrationModal, session, form]);

  const handleRegistration = async (values) => {
    setLoading(true);
    
    // Simulate a brief loading delay
    setTimeout(() => {
      // Show success message
      messageApi.success("Registration successful! You will receive confirmation details shortly.");
      
      // Close the registration modal after a brief delay
      setTimeout(() => {
        handleCancel();
      }, 2000);
      
      setLoading(false);
    }, 1000);
    
    // TODO: Implement actual backend integration later
    /*
    try {
      const registrationData = {
        workshop_id: selectedWorkshop.id,
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        mobile: values.mobile || "",
      };
      console.log("Registration Data:", registrationData);

      // Use fresh axios instance without interceptors for public registration endpoint
      const response = await axios.post(`${apiUrl}/workshop/register/`, registrationData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      console.log("Registration Response:", response);

      if (response.status >= 200 && response.status < 300) {
        const registrationResult = response.data;
        
        messageApi.success("Registration created successfully! You will receive payment instructions shortly.");
        
        // Close the registration modal after a brief delay
        setTimeout(() => {
          handleCancel();
        }, 2000);
        
        // TODO: Implement payment flow later
        // await handlePayment(registrationResult);
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.response?.data) {
        const errorData = error.response.data;
        
        // Handle specific validation errors
        if (errorData.email) {
          messageApi.error(errorData.email[0]);
        } else if (errorData.detail || errorData.message) {
          messageApi.error(errorData.detail || errorData.message);
        } else {
          messageApi.error("Registration failed. Please try again.");
        }
      } else {
        messageApi.error("Network error. Please check your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
    */
  };

  const handlePayment = async (registrationData) => {
    try {
      setLoading(true);
      
      const orderData = {
        amount: selectedWorkshop.price,
        currency: "INR",
        receipt: "Workshop",
        notes: {
          email: registrationData.registrant.email,
          workshop_registration_uid: registrationData.registration_uid,
          workshop_title: selectedWorkshop.title,
          workshop_date: selectedWorkshop.date,
          workshop_time: `${selectedWorkshop.start_time} - ${selectedWorkshop.end_time}`,
          workshop_venue: selectedWorkshop.venue || "Online",
          workshop_mode: selectedWorkshop.mode,
        },
      };

      const response = await axiosInstance.post(`${apiUrl}/payment/create-order/`, orderData, {
        session: session, // Pass session to the interceptor
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        const orderDetails = response.data;
        
        // Load Razorpay and proceed with payment
        await proceedToRazorpayPayment(orderDetails, registrationData);
      } else {
        throw new Error("Failed to create payment order");
      }
    } catch (error) {
      console.error("Payment order creation error:", error);
      messageApi.error("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadRazorpayScript = async () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const proceedToRazorpayPayment = async (orderDetails, registrationData) => {
    try {
      const isRazorpayLoaded = await loadRazorpayScript();
      if (!isRazorpayLoaded) {
        messageApi.error("Failed to load Razorpay. Please refresh and try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderDetails.amount_due,
        currency: orderDetails.currency,
        name: registrationData.registrant.name,
        description: `Workshop Registration: ${selectedWorkshop.title}`,
        order_id: orderDetails.id,
        notes: orderDetails.notes,
        prefill: {
          name: registrationData.registrant.name,
          email: registrationData.registrant.email,
          contact: registrationData.registrant.mobile || "",
        },
        modal: {
          escape: true,
          backdropclose: true,
        },
        handler: async (response) => {
          if (response && response.razorpay_payment_id) {
            messageApi.success("Payment successful! Redirecting...");
            
            // Redirect to payment status page
            window.location.href = `/payment-status?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&signature=${response.razorpay_signature}&order_type=Workshop`;
          } else {
            console.log("Payment Failed or Cancelled:", response);
            messageApi.error("Payment was cancelled or failed.");
          }
        },
        theme: orderDetails.theme,
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on("payment.cancelled", function (response) {
        console.log("Payment Cancelled:", response);
        messageApi.info("Payment cancelled by user.");
      });
    } catch (error) {
      console.error("Error during payment:", error);
      messageApi.error("Payment process error.");
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={isRegistrationModal}
        onCancel={handleCancel}
        footer={null}
        width={600}
        centered
        closeIcon={<CloseOutlined className="text-gray-500" />}
        className="workshop-registration-modal"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Register for Workshop
          </h2>
          {selectedWorkshop && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[--yellow] mb-2">
                {selectedWorkshop.title}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Date:</strong> {new Date(selectedWorkshop.date).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}</p>
                <p><strong>Time:</strong> {selectedWorkshop.start_time} - {selectedWorkshop.end_time}</p>
                <p><strong>Mode:</strong> {selectedWorkshop.mode}</p>
                {selectedWorkshop.venue && (
                  <p><strong>Venue:</strong> {selectedWorkshop.venue}</p>
                )}
                <p><strong>Price:</strong> <span className="text-[--yellow] font-bold">₹{selectedWorkshop.price}</span></p>
              </div>
            </div>
          )}

          <Form
            form={form}
            layout="vertical"
            onFinish={handleRegistration}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="first_name"
                label="First Name"
                rules={[
                  { required: true, message: "First name is required" },
                  { min: 2, message: "First name must be at least 2 characters" },
                ]}
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>

              <Form.Item
                name="last_name"
                label="Last Name"
                rules={[
                  { required: true, message: "Last name is required" },
                  { min: 2, message: "Last name must be at least 2 characters" },
                ]}
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input 
                placeholder="Enter your email address" 
                disabled={session?.user?.user?.email}
              />
            </Form.Item>

            <Form.Item
              name="mobile"
              label="Mobile Number (Optional)"
              rules={[
                {
                  pattern: /^[+]?[\d\s-()]{10,15}$/,
                  message: "Please enter a valid mobile number",
                },
              ]}
            >
              <Input placeholder="Enter your mobile number" />
            </Form.Item>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="site-button-primary !m-0"
                disabled={loading}
              >
                {loading ? "Processing..." : "Register Now"}
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}

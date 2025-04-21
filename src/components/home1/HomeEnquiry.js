"use client";

import { Input, Form, message } from "antd";
import { useState, forwardRef } from "react";
import axios from "axios";
import CustomButton from "../common/CustomButton";
import { twMerge } from "tailwind-merge";

const apIUrl = process.env.NEXT_PUBLIC_API_URL;

const HomeEnquiry = forwardRef(function HomeEnquiry(props, ref) {
  const { formOnly = false } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const url = `${apIUrl}/api/enquiries/`;
      const body = {
        name: values.yourname,
        email: values.email,
        message: values.message,
      };

      const response = await axios.post(url, body);
      if (response.status >= 200 && response.status < 300) {
        messageApi.success(
          "Thank you for reaching out! Our team will get back to you shortly."
        );
        form.resetFields();
      } else {
        throw new Error("Response status error");
      }
    } catch (err) {
      console.log(err);
      messageApi.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={ref} className={twMerge("", !formOnly && "bg-[#ffffff82]")}>
      <div className={twMerge("", !formOnly && "common_page_width")}>
        <div className={twMerge("", !formOnly && "grid grid-cols-1 lg:grid-cols-2 gap-8")}>
          {!formOnly && (
            <div>
              <p className="highlight-heading !text-left !mb-3">
                Let’s work together
              </p>
              <div className="border-b-2 w-12 border-[--yellow] mt-2 mb-4" />
            </div>
          )}
          {formOnly && <h2 className="highlight-heading !text-left">Send us a message</h2>}
          <Form
            layout="vertical"
            form={form}
            initialValues={{ layout: "vertical" }}
            onFinish={handleFormSubmit}
          >
            <div className="flex flex-col gap-6">
              <Form.Item
                label="Your Name"
                name="yourname"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="Enter your name here" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required." },
                  { type: "email", message: "Enter a valid email." },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Your Message"
                name="message"
                rules={[{ required: true, message: "Message is required" }]}
              >
                <Input.TextArea placeholder="Enter your message here" rows={4} />
              </Form.Item>
              <Form.Item>
                <CustomButton
                  type="submit"
                  title="Submit"
                  loading={loading}
                  disabled={loading}
                  className="site-button-primary !mt-0"
                />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
      {contextHolder}
    </section>
  );
});

export default HomeEnquiry;

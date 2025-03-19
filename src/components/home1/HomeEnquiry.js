"use client";

import { Input, Form, message, Skeleton, Row, Col } from "antd";
import SocialConnect from "./SocialConnect";
import { useState } from "react";
import axios from "axios";
import CustomButton from "../common/CustomButton";

const apIUrl = process.env.NEXT_PUBLIC_API_URL;

export default function HomeEnquiry() {
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
    <section className="bg-[#ffffff82]">
      <div className="common_page_width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="highlight-heading !text-left !mb-3">
              Let’s work together
            </p>
            <p className="section-content !text-left !text-lg">
              The combination of ancient knowledge with scientific therapies for
              holistic well-being.
            </p>
          </div>
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
                rules={[{ required: true, message: "name is required" }]}
              >
                <Input placeholder="Enter your name here" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email address is required." },
                  {
                    type: "email",
                    message: "Please enter a valid email address.",
                  },
                ]}
              >
                <Input placeholder="Enter yout email" />
              </Form.Item>
              <Form.Item
                label="Your Message"
                name="message"
                rules={[{ required: true, message: "Message is required" }]}
              >
                <Input.TextArea
                  placeholder="Enter your message here"
                  rows={4}
                />
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
      {/* <SocialConnect /> */}
      {contextHolder}
    </section>
  );
}

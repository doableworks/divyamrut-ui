"use client";

import { Input, Form, message, Skeleton, Row, Col } from "antd";

export default function HomeEnquiry() {
  const [form] = Form.useForm();

  const handleFormSubmit = () => {};

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
                <button
                  className="site-button-primary !mt-0 !min-w-24 !min-h-max"
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

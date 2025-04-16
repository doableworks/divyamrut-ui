"use client";
import React, { useState } from "react";
import { Form, Input, Button, Rate, message } from "antd";
import CustomButton from "@/components/common/CustomButton";

const FeedbackForm = () => {
  const [rating, setRating] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    if (!rating) {
      message.warning("Oops! Don’t forget to leave a star rating 🌟");
      return;
    }

    message.success("Thank you! Your feedback means a lot to us 🙌");
  };

  return (
    <div className="p-6">
      <section className="bg-white my-12 p-8 rounded-md max-w-xl mx-auto font-poppins text-[--neutral] shadow">
        <h2 className="text-2xl font-semibold text-center text-[--yellow] font-playfair mb-2">
          Share Your Experience
        </h2>
        <p className="section-content !mb-6">
          Your feedback helps us improve and serve you better.
        </p>
        <Form
          name="feedback-form"
          onFinish={handleSubmit}
          initialValues={{ experience: "", rating: 0 }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <div className="mb-6">
            <Form.Item
              name="rating"
              label="How would you rate your experience?"
              rules={[
                { required: true, message: "Please rate your experience!" },
              ]}
            >
              <Rate
                onChange={setRating}
                value={rating}
                size="large"
                className="big-star"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="experience"
            label="How was your experience?"
            rules={[
              { required: true, message: "Please provide your feedback!" },
            ]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Share your thoughts..."
              maxLength={500}
            />
          </Form.Item>

          <Form.Item>
            <CustomButton
              type="primary"
              htmlType="submit"
              className="site-button-primary !w-full"
              title="Submit Feedback"
            />
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default FeedbackForm;

"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, Rate, message } from "antd";
import CustomButton from "@/components/common/CustomButton";
import { notFound, useRouter, useSearchParams } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const FeedbackForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get("id");

  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!appointmentId) {
      notFound();
    }
  }, [appointmentId]);

  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (isSuccess && countdown === 0) {
      router.push("/therapy");
    }
  }, [isSuccess, countdown, router]);

  const handleSubmit = async (values) => {
    if (!rating) {
      message.warning("Oops! Don’t forget to leave a star rating 🌟");
      return;
    }

    const payload = {
      appointment: appointmentId,
      rating: rating,
      remark: values.experience,
    };

    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/therapy/feedback/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Failed to submit feedback.");
      }

      message.success("Thank you! Your feedback means a lot to us 🙌");

      form.resetFields();
      setRating(null);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      message.error(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-6 min-h-screen">
        <section className="bg-white my-12 p-8 rounded-md max-w-xl mx-auto font-poppins text-center text-[--neutral] shadow">
          <h2 className="text-2xl font-semibold text-[--yellow] font-playfair mb-4">
            Grateful for Your Insight 💛
          </h2>
          <p className="section-content mb-2">
            Your feedback helps us grow and serve you better. We truly
            appreciate your time and thoughts.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Redirecting in <strong>{countdown}</strong> seconds... time to go
            explore all therapies!
          </p>

          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <CustomButton
              title="Explore Other Therapies"
              className="site-button-primary !w-full !mt-3"
              onClick={() => router.push("/therapy")}
            />
            <CustomButton
              title="Exit"
              className="site-button-secondary-outlined !w-full !mt-0"
              onClick={() => router.push("/")}
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen">
      <section className="bg-white my-12 p-8 rounded-md max-w-xl mx-auto font-poppins text-[--neutral] shadow">
        <h2 className="text-2xl font-semibold text-center text-[--yellow] font-playfair mb-2">
          Share Your Experience
        </h2>
        <p className="section-content !mb-6">
          Your feedback helps us improve and serve you better.
        </p>
        <Form
          form={form}
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
              {
                validator: (_, value) =>
                  !value || value.length >= 20
                    ? Promise.resolve()
                    : Promise.reject("Feedback should be at least 20 characters."),
              },
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
              loading={loading}
              disabled={loading}
            />
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default FeedbackForm;

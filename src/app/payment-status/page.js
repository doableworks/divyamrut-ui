"use client";
import BlockPageLoader from "@/components/loader/BlockPageLoader";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LottieShowcase from "../../components/payment/LottieShowcase";
import { useSession } from "next-auth/react";
import { setOpenLoginModal } from "@/redux/feature/authModalSlice";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDetail, setPaymentDetail] = useState(null);
  const [countdown, setCountdown] = useState(10);

  const [isAfterLoginModal, setIsAfterLoginModal] = useState(false);
  const [isHideRedirection, setHideRedirection] = useState(false);

  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");
  const signature = searchParams.get("signature");
  const order_type = searchParams.get("order_type");

  useEffect(() => {
    if (!paymentId || !orderId || !signature) {
      router.push("/");
      return;
    }

    const fetchPaymentStatus = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/payment/verify-payment/`;

        const body = {
          razorpay_payment_id: paymentId,
          razorpay_order_id: orderId,
          razorpay_signature: signature,
        };

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(url, body, { headers });

        setPaymentDetail(response.data);
      } catch (err) {
        console.error("Payment verification error:", err);
        setPaymentDetail({ status: false });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentStatus();
  }, []);

  useEffect(() => {
    if (paymentDetail?.status) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            if (session) {
              router.push(
                `/profile?tab=${
                  order_type === "Therapy" ? "Therapy" : "Orders"
                }`
              );
            } else {
              setHideRedirection(true);
              setIsAfterLoginModal(true);
              dispatch(setOpenLoginModal(true));
            }
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [paymentDetail, router]);

  useEffect(() => {
    if (session && paymentDetail?.status && isAfterLoginModal) {
      router.push(
        `/profile?tab=${order_type === "Therapy" ? "Therapy" : "Orders"}`
      );
    }
  }, [session, paymentDetail, order_type, router]);

  if (isLoading) return <BlockPageLoader />;

  return paymentDetail?.status ? (
    <div className="common_page_width">
      <div className="py-12 flex justify-center items-center min-h-[70vh]">
        <div className="bg-gradient-to-br from-white to-white shadow-lg rounded-2xl p-10 max-w-2xl w-full text-center ">
          <div className="w-full flex justify-center">
            <LottieShowcase
              source="https://lottie.host/embed/34db972f-7afa-42de-a78f-a65f2c1bec27/y1OW9bi51L.lottie"
              height="150px"
              width="150px"
            />
          </div>

          {order_type === "Therapy" ? (
            <>
              <h2 className="text-2xl font-bold text-[#45b29d] mt-4">
                🌿 Your Session is Scheduled!
              </h2>
              <p className="mt-2 text-gray-700 text-base">
                You've successfully booked a session with our therapist. Please
                be available on time to avoid any inconvenience. Booking details
                will appear in your profile shortly.
              </p>
            </>
          ) : order_type === "Product" ? (
            <>
              <h2 className="text-2xl font-bold text-[#45b29d] mt-4">
                🛒 Thanks for Your Purchase!
              </h2>
              <p className="mt-2 text-gray-700 text-base">
                Your payment was processed successfully and your product has
                been verified. It will be delivered soon. Make sure someone is
                available to receive it. For help, reach out to our support team
                anytime.
              </p>
            </>
          ) : null}

          <div className="mt-6 mx-auto w-full max-w-md  border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="min-w-full text-sm text-left text-gray-700">
              <tbody>
                <tr className="border-b">
                  <th className="px-4 py-3 font-medium w-1/3">Payment ID</th>
                  <td className="px-4 py-3">{paymentId}</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3  font-medium">Order ID</th>
                  <td className="px-4 py-3">{orderId}</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3  font-medium">Amount Paid</th>
                  <td className="px-4 py-3">
                    Rs. {paymentDetail.amount.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {!session && isHideRedirection && (
            <div>
              <p className="mt-6 text-red-500 text-sm">
                Please log in to view your profile.
              </p>
              <div className="flex gap-4 justify-center items-center">
                <button
                  type="button"
                  className="site-button-secondary-outlined !mt-3"
                  onClick={() => router.push("/")}
                >
                  Back to Home
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(setOpenLoginModal(true))}
                  className="site-button-primary !mt-3"
                >
                  Login
                </button>
              </div>
            </div>
          )}

          {!isHideRedirection && (
            <div className="mt-4 text-gray-600 text-sm">
              Redirecting in{" "}
              <span className="font-semibold text-green-800 text-base">
                {countdown}
              </span>{" "}
              seconds...
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="common_page_width">
      <div className="py-8">
        <div className="mb-8 flex flex-col justify-center items-center">
          <LottieShowcase
            source="https://lottie.host/embed/aecf4c7f-4b5f-43ba-b414-baa199d45078/rUEKgJhvaI.lottie"
            height="150px"
            width="150px"
          />

          <h2 className="highlight-heading !text-[24px] !mt-0 !mb-2">
            Oops!! Something Went Wrong
          </h2>
          <p className="section-content !max-w-lg !text-[16px]">
            We encountered an issue while verifying your payment. This could be
            due to an invalid key or other technical reasons. Please check your
            payment details and try again. If the problem persists, contact our
            support team for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

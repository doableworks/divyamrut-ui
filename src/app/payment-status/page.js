"use client";
import BlockPageLoader from "@/components/loader/BlockPageLoader";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LottieShowcase from "../../components/payment/LottieShowcase";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDetail, setPaymentDetail] = useState(null);

  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");
  const signature = searchParams.get("signature");

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


  if (isLoading) return <BlockPageLoader />;

  return paymentDetail?.status ? (
    <div className="common_page_width">
      <div className="py-8">
        <div className="mb-8 flex flex-col justify-center items-center">
          <LottieShowcase
            source="https://lottie.host/embed/34db972f-7afa-42de-a78f-a65f2c1bec27/y1OW9bi51L.lottie"
            height="150px"
            width="150px"
          />

          <h2 className="highlight-heading !text-[24px] !mt-0 !mb-2">
            Your Session is Scheduled
          </h2>
          <p className="section-content !max-w-lg !text-[16px]">
            You have successfully booked a slot with our therapist. Please
            ensure you are available on time to avoid any inconvenience. You can
            check your booking details in the profile section within the next
            hour.
          </p>
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
            Oops!! something went wrong
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

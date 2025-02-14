import React from 'react'

const page = () => {
  return (
    <div className="common_page_width">
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Refund and Cancellation Policy
        </h2>
        <div className="space-y-6 text-gray-700">
          <p>
            <strong>Nityanava Naturals</strong> believes in helping its
            customers as far as possible and has therefore a liberal
            cancellation policy.
          </p>
          <p>
            <strong>Under this policy:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Cancellations will be considered only if the request is made
              within 4 hours of placing an order. However, the cancellation
              request will not be entertained if the orders have been processed
              for shipping.
            </li>
            <li>
              In case you feel that the product received is not as shown on the
              site or as per your expectations, you must bring it to the notice
              of our customer service within 24 hours of receiving the product.
              The Customer Service Team, after looking into your complaint, will
              take an appropriate decision.
            </li>
            <li>
              If there are any damages to the product while you receive it, we
              request you to mail{" "}
              <a
                href="mailto:contact@divyamrutnaturals.com"
                className="text-blue-600 underline"
              >
                contact@divyamrutnaturals.com
              </a>{" "}
              with the attachments of the damaged product. Your order will be
              reissued or refunded based on your request within 48 hours.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page
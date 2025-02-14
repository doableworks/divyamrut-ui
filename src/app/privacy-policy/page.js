import React from "react";

const page = () => {
  return (
    <div className="common_page_width">
      <div className="py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h2>
          <div className="text-gray-700 space-y-6">
            <p>
              <strong>Nityanava Naturals</strong> believes in helping its
              customers as far as possible and has therefore a liberal
              cancellation policy.
            </p>
            <p>
              <strong>Under this policy:</strong>
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>
                Cancellations will be considered only if the request is made
                within 4 hours of placing an order. However, the cancellation
                request will not be entertained if the orders have been
                processed for shipping.
              </li>
              <li>
                In case you feel that the product received is not as shown on
                the site or as per your expectations, you must bring it to the
                notice of our customer service within 24 hours of receiving the
                product. The Customer Service Team, after reviewing your
                complaint, will take an appropriate decision.
              </li>
              <li>
                If there are any damages to the product while you receive it, we
                request you to email us at{" "}
                <a
                  href="mailto:contact@divyamrutnaturals.com"
                  className="text-blue-600 underline"
                >
                  contact@divyamrutnaturals.com
                </a>{" "}
                with attachments of the damaged product. Your order will be
                reissued or refunded based on your request within 48 hours.
              </li>
            </ul>

            <p>
              We are committed to ensuring your data is safe with us. The data,
              which includes your name, email, phone number, address, products
              purchased, and your web browser cookies, will not be shared with
              any third party. By visiting{" "}
              <a
                href="https://divyamrutnaturals.com"
                className="text-blue-600 underline"
              >
                divyamrutnaturals.com
              </a>
              , you are accepting the practices defined in our policy.
            </p>

            <p>
              The information collected from customers helps us build personal
              relationships and improve your shopping experience. Any
              information you give us is stored with utmost care. This
              information helps us in serving you better. We are bound to
              cooperate fully if the situation requires us to do so, such as by
              law or legal process. We may also share non-personal information
              with our marketing team, advertising agencies, or similar parties
              for research and advertising purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Use of Cookies
            </h3>
            <p>
              Cookies are small data files, mostly alphanumerical identifiers,
              stored by your browser. This helps our system recognize your
              browser the next time you visit our site. Our cookies do not
              contain any personally identifying information. Most web browsers
              automatically accept cookies. To take advantage of{" "}
              <a
                href="https://divyamrutnaturals.com"
                className="text-blue-600 underline"
              >
                divyamrutnaturals.com
              </a>
              ’s unique features, we recommend allowing cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Governing Law and Jurisdiction
            </h3>
            <p>
              This policy is governed by the laws of India. Any disputes related
              to or arising out of this policy shall be subject to the exclusive
              jurisdiction of the appropriate courts at Mumbai.
            </p>

            <p>
              <strong>Divyamrut Naturals</strong>
              <br />
              413, Sai Arcade, N.S. Road, Mulund West, Mumbai – 400 080
            </p>
            <p>
              <strong>Phone:</strong> +91 8169123024
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@divyamrutnaturals.com"
                className="text-blue-600 underline"
              >
                contact@divyamrutnaturals.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

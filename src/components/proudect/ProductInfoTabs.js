import { useState } from "react";
import "@/styles/rich-tag-styles.css";

const ProductInfoTabs = ({ item }) => {
  const [activeTab, setActiveTab] = useState("NAME MEANING");

  const tabs = [
    "NAME MEANING",
    "SHIPPING",
    "CARE INSTRUCTIONS",
    "RETURN & EXCHANGES",
  ];

  const tabContent = {
    "NAME MEANING": item?.name_meaning,
    SHIPPING: `<div className="py-8 px-4">
        <ul className="list-disc space-y-6 pl-6">
          <li>
            <h5>PROCESSING TIME:</h5>
            <p className="text-gray-700">
              2 days, if the order is straightforward, i.e., the shawl is in
              stock and you have provided us with your accurate phone number,
              email, and address.
            </p>
          </li>
          <li>
            <h5>SHIPPING DATE:</h5>
            <p className="text-gray-700">
              Orders ready to be dispatched on Friday and Saturday will be
              shipped on Tuesday morning, or exceptionally on Monday morning.
            </p>
            <p className="text-gray-700 mt-2">
              Orders ready to be shipped on Tuesday, Wednesday, and Thursday
              will leave the following morning.
            </p>
          </li>
          <li>
            <h5>DATE OF DELIVERY:</h5>
            <p className="text-gray-700">
              Your parcel will be delivered between
              <span className="font-semibold">7 to 9 days</span>, very
              exceptionally, within 10 days.
            </p>
            <p className="text-gray-700 mt-2">
              Delivery to Australia takes a few additional days.
            </p>
          </li>
        </ul>
      </div>`,
    "CARE INSTRUCTIONS": item?.care_instructions,
    "RETURN & EXCHANGES": `<div>
        <p>
          Please note that many of our shawls and blankets are handspun and
          handmade of natural fibers, so occasional irregularities may occur in
          the weave or embroidery. These should not be considered as
          imperfections; rather they enhance the individuality of each piece.
        </p>
        <p>
          You may return any purchase if you are not satisfied. We will fully
          refund you or give you the opportunity of re-fulfilling your order.
          However, return shipping cost will be refunded only in the event that
          there was an oversight, i.e., you have received a shawl or blanket
          that does not match the one in the order confirmation or the item has
          a genuine quality or production defect.
        </p>
        <p>
          Otherwise, the customer is responsible for the shipping charges
          connected to the return of any item, as well as the responsibility of
          returning the item securely.
        </p>
        <p >
          Please call us at +91-9833172105 or email us at
          <a
            href="mailto:contact@nityanava.com"
            
          >
            contact@nityanava.com
          </a>
          to receive a return number.
        </p>
        <p >
          This number should appear on the return package. Only packages with
          this return number will be accepted.
        </p>
        <p >
          If you wish to receive a credit or make an exchange for the returned
          item, please include a note informing us what you would like. Always
          include a phone number where you may be contacted.
        </p>
      </div>`,
  };

  // Desktop tab navigation
  const DesktopTabs = () => (
    <div className="hidden md:flex justify-center border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === tab
              ? "text-[--voilet] border-b-2 border-[--voilet]"
              : "text-gray-500 hover:text-amber-600"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  // Mobile accordion navigation
  const MobileAccordion = () => (
    <div className="md:hidden">
      {tabs.map((tab) => (
        <div key={tab} className="border-b border-gray-200">
          <button
            className={`flex justify-between items-center w-full px-4 py-3 text-left ${
              activeTab === tab ? "text-[--voilet] font-medium" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(activeTab === tab ? null : tab)}
          >
            <span>{tab}</span>
            <span className="text-xl">{activeTab === tab ? "-" : "+"}</span>
          </button>
          {activeTab === tab && (
            <div
              dangerouslySetInnerHTML={{
                __html: tabContent[tab],
              }}
              className="rich-content my-6 px-4 pb-4"
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <DesktopTabs />
      <div className="hidden md:block text-center">
        {activeTab && (
          <div
            dangerouslySetInnerHTML={{
              __html: tabContent[activeTab],
            }}
            className="rich-content my-6 px-4 pb-4 leading-relaxed"
          />
        )}
      </div>

      <MobileAccordion />
    </div>
  );
};

export default ProductInfoTabs;

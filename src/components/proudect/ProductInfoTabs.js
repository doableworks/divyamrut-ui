import { useState } from 'react';

const ProductInfoTabs = () => {
  const [activeTab, setActiveTab] = useState('NAME MEANING');
  
  const tabs = [
    'NAME MEANING',
    'SHIPPING',
    'REVIEWS',
    'CARE INSTRUCTIONS',
    'RETURN & EXCHANGES'
  ];
  
  const tabContent = {
    'NAME MEANING': (
      <div className="py-8 px-4">
        <h2 className="text-xl font-semibold mb-4 text-voilet">SHUNYATA:</h2>
        <p className="mb-4 text-gray-700">
          Literally meaning the Void or emptiness. To the human mind, it will appear as though nothing. But 
          for the one who has contemplated and has been graced by direct experience, <span className="italic">Shunya</span> is revealed as 
          the primordial space of Awareness. The terms "nothing" or "absence", and "everything" or 
          "Presence" no longer applies.
        </p>
        <p className="mb-4 text-gray-700">
          <span className="italic">Shunya</span> is the pure potential for creation, sustenance and dissolution, while itself remaining free 
          from modification. <span className="italic">Shunyata</span> is like the backdrop or canvas upon which the entire universe appears 
          and dissolves, while itself remains unchanging.
        </p>
      </div>
    ),
    'SHIPPING': (
      <div className="py-8 px-4">
        <ul className="list-disc space-y-6 pl-6">
          <li>
            <p className="font-semibold text-voilet">PROCESSING TIME:</p>
            <p className="text-gray-700">
              2 days, if the order is straightforward, i.e., the shawl is in stock and you have provided us with 
              your accurate phone number, email, and address.
            </p>
          </li>
          <li>
            <p className="font-semibold text-voilet">SHIPPING DATE:</p>
            <p className="text-gray-700">
              Orders ready to be dispatched on Friday and Saturday will be shipped on Tuesday morning, or 
              exceptionally on Monday morning.
            </p>
            <p className="text-gray-700 mt-2">
              Orders ready to be shipped on Tuesday, Wednesday, and Thursday will leave the following 
              morning.
            </p>
          </li>
          <li>
            <p className="font-semibold text-voilet">DATE OF DELIVERY:</p>
            <p className="text-gray-700">
              Your parcel will be delivered between <span className="font-semibold">7 to 9 days</span>, very exceptionally, within 10 days.
            </p>
            <p className="text-gray-700 mt-2">
              Delivery to Australia takes a few additional days.
            </p>
          </li>
        </ul>
      </div>
    ),
    'REVIEWS': (
      <div className="py-8 px-4 text-gray-700">
        <p className="italic">No reviews available for this product yet.</p>
      </div>
    ),
    'CARE INSTRUCTIONS': (
      <div className="py-8 px-4">
        <p className="mb-4 text-gray-700">
          If the process described below does not suit you, dry cleaning will be perfect to take care of your 
          shawl.
        </p>
        <h2 className="text-xl font-semibold mb-4 text-voilet">HOW TO WASH YOUR SHAWL SAFELY:</h2>
        <ol className="space-y-4 text-gray-700">
          <li>
            Dissolve a little quantity of mild detergent - like gentle shampoo or woolen soap - with cold or 
            lukewarm water (at 30 °C /86 °F maximum)
          </li>
          <li>
            Submerge the shawl in the water and move it gently for a few minutes. Do not use fabric softener 
            and rinse the shawl very well by running cool water through it to remove the soap.
          </li>
          <li>
            You can then take out extra water by applying gentle pressure. <span className="font-bold">NEVER RING, NEVER TWIST.</span>
          </li>
          <li>
            Remove the excess water by rolling the shawl in a clean towel.
          </li>
          <li>
            Preferably lay it flat. If not possible, fold it once or twice to prevent the fibres to be stretched too 
            much and hang it on the clothes line in avoiding direct sun or any proximity to heat sources.
          </li>
          <li>
            Once dry, if available, the shawl can be steamed which will fluff the fibres. Otherwise, it can be 
            ironed with a warm iron.
          </li>
        </ol>
      </div>
    ),
    'RETURN & EXCHANGES': (
      <div className="py-8 px-4">
        <p className="mb-4 text-gray-700">
          Please note that many of our shawls and blankets are handspun and handmade of natural fibers, 
          so occasional irregularities may occur in the weave or embroidery. These should not be considered 
          as imperfections; rather they enhance the individuality of each piece.
        </p>
        <p className="mb-4 text-gray-700">
          You may return any purchase if you are not satisfied. We will fully refund you or give you the 
          opportunity of re-fulfilling your order. However, return shipping cost will be refunded only in the 
          event that there was an oversight, i.e., you have received a shawl or blanket that does not match 
          the one in the order confirmation or the item has a genuine quality or production defect.
        </p>
        <p className="mb-4 text-gray-700">
          Otherwise, the customer is responsible for the shipping charges connected to the return of any 
          item, as well as the responsibility of returning the item securely.
        </p>
        <p className="mb-4 text-gray-700">
          Please call us at +1(778) 722-9844 or email us at <a href="mailto:info@espritdelhimalaya.com" className="text-voilet underline">info@espritdelhimalaya.com</a> to receive a return 
          number.
        </p>
        <p className="mb-4 text-gray-700">
          This number should appear on the return package. Only packages with this return number will be 
          accepted.
        </p>
        <p className="mb-4 text-gray-700">
          If you wish to receive a credit or make an exchange for the returned item, please include a note 
          informing us what you would like. Always include a phone number where you may be contacted.
        </p>
      </div>
    )
  };

  // Desktop tab navigation
  const DesktopTabs = () => (
    <div className="hidden md:flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === tab
              ? 'text-voilet border-b-2 border-voilet'
              : 'text-gray-500 hover:text-amber-600'
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
              activeTab === tab ? 'text-voilet font-medium' : 'text-gray-700'
            }`}
            onClick={() => setActiveTab(activeTab === tab ? null : tab)}
          >
            <span>{tab}</span>
            <span className="text-xl">{activeTab === tab ? '-' : '+'}</span>
          </button>
          {activeTab === tab && (
            <div className="px-4 pb-4">
              {tabContent[tab]}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <DesktopTabs />
      <div className="hidden md:block text-center">
        {activeTab && tabContent[activeTab]}
      </div>
      
      {/* Mobile View */}
      <MobileAccordion />
    </div>
  );
};

export default ProductInfoTabs;
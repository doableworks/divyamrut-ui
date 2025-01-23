import MainBanner from "@/components/common/MainBanner";
import CartPage from "@/components/cartCom/Cart";

const page = () => {
  const heading =
    " The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda";
  const subHeading = "Trusted by millions, validated by you.";

  return (
    <div>
      {/* <MainBanner heading={heading} subHeading={subHeading} /> */}

      <div id="pricing" className="common_page_width">
          <div className="fade-up">
            <h6 className="section-title">
              Choose Package
            </h6>
            <h2 className="highlight-heading">
            Shopping Cart
            </h2>
          </div>
          <CartPage />
      </div>
      {/* <HolisticHealth /> */}
    </div>
  );
};

export default page;

import ProductDetail from "@/components/proudect/ProductDetail";
import Testimonial from "@/components/home1/Testimonial";

const page = () => {
  const mainType = "Natural Health"
  const heading = " The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda";
  const subHeading = "Trusted by millions, validated by you.";

  const item = {
    id: 3,
    name: "product",
    price: 99.99,
    image: "/asset/home/ayurvedic-supplement.jpg",
    quantity: 1,
    type:"product"
  }

  return (
    <div>
      {/* <MainBanner2 heading={heading} subHeading={subHeading} date={date} comment={comment} mainType={mainType} /> */}
      <div className="common_page_width relative z-20 ">
        <div>
          {/* Main Content */}
          <ProductDetail />
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default page;

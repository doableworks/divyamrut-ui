import ProductDetail from "@/components/proudect/ProductDetail";

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
      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-20">
        <div>
          {/* Main Content */}
          <ProductDetail />
        </div>
      </div>
    </div>
  );
};

export default page;

import MainBanner2 from "@/components/common/MainBanner2";
import DetailPage from "@/components/singlePost/DetailPage";
import ShareReview from "@/components/singlePost/ShareReview";
import NewLatterForm from "@/components/singlePost/NewLatterForm";
import LeaveAReply from "@/components/singlePost/LeaveAReply";
import PopularCategories from "@/components/singlePost/PopularCategories";
import LatestPost from "@/components/singlePost/LatestPost";
import ProductDetail from "@/components/proudect/ProductDetail";

const page = () => {
  const mainType = "Natural Health"
  const heading = " The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda";
  const subHeading = "Trusted by millions, validated by you.";
  const date = "August 6, 2024"
  const comment = "No Comments"

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
      <div className="mt-[10rem] relative z-20 mx-auto w-[90%] md:w-[85%] py-20 md:py-32">
        <div>
          {/* Main Content */}
          <ProductDetail />
        </div>
      </div>
    </div>
  );
};

export default page;

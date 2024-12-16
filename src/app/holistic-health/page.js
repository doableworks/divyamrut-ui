import MainBanner2 from "@/components/common/MainBanner2";
import DetailPage from "@/components/singlePost/DetailPage";
import ShareReview from "@/components/singlePost/ShareReview";
import NewLatterForm from "@/components/singlePost/NewLatterForm";
import LeaveAReply from "@/components/singlePost/LeaveAReply";
import PopularCategories from "@/components/singlePost/PopularCategories";
import LatestPost from "@/components/singlePost/LatestPost";

const page = () => {
  const mainType = "Natural Health"
  const heading = " The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda";
  const subHeading = "Trusted by millions, validated by you.";
  const date = "August 6, 2024"
  const comment = "No Comments"

  return (
    <div>
      <MainBanner2 heading={heading} subHeading={subHeading} date={date} comment={comment} mainType={mainType} />
      <div className="relative z-20 mx-auto w-[90%] md:w-[85%] py-20 md:py-32">
        <div className="lg:flex gap-8">
          {/* Main Content */}
          <main className="lg:w-2/3">
            <DetailPage />
            <ShareReview />
            <LeaveAReply />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Popular Categories */}
            <PopularCategories />

            {/* Newsletter */}
            <NewLatterForm />

            {/* Latest Post */}
            <LatestPost />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default page;

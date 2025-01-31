import ProductDetail from "@/components/proudect/ProductDetail";
import Testimonial from "@/components/home1/Testimonial";
import Link from "next/link";

const getProdectDetails = async (params) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/product/detail/${params}/`,
      {
        next: { revalidate: 60 },
      }
    );
    if (res.status == 200) {
      const data = await res.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("getTypes error", error);
    return null;
  }
};

const page = async ({ params }) => {
  const item = await getProdectDetails(params["product-details"]);

  return (
    <div>
      {/* <MainBanner2 heading={heading} subHeading={subHeading} date={date} comment={comment} mainType={mainType} /> */}
      {item ? (
        <div className="common_page_width relative z-20 ">
          <div>
            {/* Main Content */}
            <ProductDetail item={item} />
          </div>
          <Testimonial slidesToShow={3} className="hidden lg:block" />
          <Testimonial slidesToShow={1} className=" lg:hidden" />
        </div>
      ) : (
        <div className="w-full py-32 flex flex-col items-center justify-center gap-5">
          <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
            No Product Found.
          </p>
          <Link
            href="/products"
            className="site-button-primary w-fit !m-0 w-[-webkit-fill-available] capitalize"
          >
            <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-white text-center">
              Browse products
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;

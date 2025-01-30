import ProductDetail from "@/components/proudect/ProductDetail";
import Testimonial from "@/components/home1/Testimonial";


const getProdectDetails = async (params) => {
try {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/product/${params}/`
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
      <div className="common_page_width relative z-20 ">
        <div>
          {/* Main Content */}
          <ProductDetail item={item} />
        </div>
        <Testimonial slidesToShow={3} className="hidden lg:block" />
      <Testimonial slidesToShow={1} className=" lg:hidden" />
      </div>
    </div>
  );
};

export default page;

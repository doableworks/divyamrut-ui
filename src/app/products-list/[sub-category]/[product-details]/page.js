import ProductDetail from "@/components/proudect/ProductDetail";
import Testimonial from "@/components/home1/Testimonial";


const getProdectDetails = async (params) => {
try {
  // console.log("444444 444 process.env.API_URL + `/product/${params}/`", process.env.API_URL + `/product/${params}/`)
  // console.log("params params params", params)
  const res = await fetch(
    process.env.API_URL + `/product/${params}/`
  );
  if (res.status == 200) {
    const data = await res.json();
    // console.log("33333333333333333333333 9999999999999999 data", data)
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

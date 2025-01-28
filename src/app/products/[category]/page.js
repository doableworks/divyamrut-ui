import SubCategory from "@/components/proudect/SubCategory";
import ProductBanner from "@/components/proudect/ProductBanner";


const getSubCategoryProducts = async (category) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/product/sub-categories-list/${category}/`
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

const page = async({params}) => {
  const data = await getSubCategoryProducts(params["category"]);


  return (
    <div className="relative">
      <div className="relative h-[50vh]">
        <ProductBanner  srcUrl={data?.image}/>
      </div>
      <div className="common_page_width"> 
        <SubCategory data={data} />
      </div>
    </div>
  );
};

export default page;

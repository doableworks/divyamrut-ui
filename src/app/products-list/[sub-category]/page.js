import ProductList from "@/components/proudect/ProductList";

const getCategoryProducts = async (link) => {
  try {
    // console.log("params 555555 77777 link", link)
    const temp = link.split("-%40-")
    // console.log("params 555555 77777", temp)

    if(temp.length > 0 && false){
      const res = await fetch(
        process.env.API_URL + `/product/${temp[0]}/${temp[1]}/`
      );
      if (res.status == 200) {
        const data = await res.json();
        // console.log("sub data 555555555555555555555555555", data)
        return data?.products;
      }   
    }
    else{
      let res;
      if(temp.length > 0){
         res = await fetch(
          process.env.API_URL + `/product/category/${temp[0]}/`
        );
      }
      else{
         res = await fetch(
          process.env.API_URL + `/product/category/${link}/`
        );
      }
      if (res.status == 200) {
        const data = await res.json();
        // console.log("cate data 777777777777777777", data)
        return data?.products;
      }
    } 
  } catch (error) {
    console.log("getTypes error", error);
    return null;
  }
};

const page = async ({ params }) => {
    const products = await getCategoryProducts(params["sub-category"]);

    return (
        <div className="common_page_width !px-2">
            {products && products.length > 0 ? (
                <ProductList products={products} params={params} />
            ) : (
                <div className="w-full py-32">
                    <p className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary text-center">
                        No Products Found. Try again latter
                    </p>
                </div>
            )}
        </div>
    );
};

export default page;

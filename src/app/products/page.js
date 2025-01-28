import ProductBanner from "@/components/proudect/ProductBanner";
import ProductsScroller from "@/components/proudect/ProductsScroller";
import ProductSlider1 from "@/components/proudect/ProductSlider1";

const getAllCategoriesData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/categories-list/`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const page = async() => {
  const categoryData = await getAllCategoriesData();
  const bannerImgArr = categoryData.map(item=>item.image)

  // return (
  //   <div>
  //     <div className="relative h-[50vh]">
  //       <ProductBanner categoryData={categoryData} />
  //     </div>
  //     <div className="common_page_width">
  //       <ProductSlider1 categories={categories} />
  //         {categories.map((category, index) => (
  //           <ProductsScroller key={index + category.title} category={category} />
  //         ))}
  //     </div>
  //   </div>
  // );
  // ?


  return (
    <div>
      <div className="relative h-[50vh]">
        <ProductBanner srcUrl={bannerImgArr[0]} />
      </div>
      <div className="common_page_width">
        <ProductSlider1 categories={categoryData} />
          {categoryData.map((category, index) => (
            <ProductsScroller key={index + category.name} category={category} />
          ))}
      </div>
    </div>
  );
};

export default page;

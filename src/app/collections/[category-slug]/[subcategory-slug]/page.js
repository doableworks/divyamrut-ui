import ProductCategory from "@/components/proudect/ProductCategory";
import ProductCategoryRedesign from "@/components/proudect/ProductCategoryRedesign";
import { notFound } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getCollectionsProducts = async (category, subcategory) => {
  try {
    const res = await fetch(
      `${apiUrl}/product/collection-list/${category}/${subcategory}`,
      {
        next: {
          revalidate: 0,
        },
      }
    );
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const page = async ({ params }) => {
  const data = await getCollectionsProducts(
    params["category-slug"],
    params["subcategory-slug"]
  );


  if (!data) {
    notFound();
  }

  return <ProductCategoryRedesign data={data} />;
};

export default page;

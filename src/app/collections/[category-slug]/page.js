import ProductCollections from "@/components/proudect/ProductCollections";
import { notFound } from "next/navigation";
import React from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getCollections = async (link) => {
  try {
    const res = await fetch(`${apiUrl}/product/${link}/`, {
      next: {
        revalidate: 0,
      },
    });

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
  const categorySlug = params["category-slug"];
  const data = await getCollections(categorySlug);

  if (!data) {
    notFound();
  }

  return <ProductCollections data={data} categorySlug={categorySlug} />;
};

export default page;

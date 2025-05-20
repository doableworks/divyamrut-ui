"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCollections = ({ data, categorySlug }) => {
  const router = useRouter();

  if (!data || data.length === 0) {
    return <div className="text-center py-10">No collections found</div>;
  }
  console.log(data);

  const handleCollectionClick = (slug) => {
    router.push(`/collections/${categorySlug}/${slug}`);
  };

  return (
    <div className="w-full p-16">
      <h1 className="text-3xl text-yellow font-prata text-center mb-16 tracking-wider">
        ALL COLLECTIONS
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((collection, index) => (
          <li
            onClick={() => handleCollectionClick(collection.slug)}
            key={index}
            className="relative w-full group overflow-hidden aspect-[3/2] cursor-pointer"
          >
            <img
              className="h-full w-full transition-transform duration-[3000ms] group-hover:scale-110 object-cover"
              src={collection.image}
              loading="lazy"
            />

            <div className="absolute bottom-5 left-6 right-6">
              <h2 className="text-white text-2xl leading-relaxed">
                {collection.name.toUpperCase()}
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCollections;

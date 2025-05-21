import ProductCategoryRedesign from "@/components/proudect/ProductCategoryRedesign";
import { notFound } from "next/navigation";
import React from "react";

const data = {
  image:
    "https://register.nityanava.com/media/uploads/public/images/cc802e63-d45c-4fc1-80eb-d82b29abe719.jpg",
  large_device_image: "",
  name: "Meditation Shawls",
  description:
    "<p>Our pristine meditation shawls energised with positive vibes are beautifully designes sacred wraps that are handmade with pure, eco-friendly and sustainable handloom fabrics by using ancient traditional weaving, dying and block printing processes</p><p>Explore our range of kutch kala cotton and pure merino wool shawls with a wide range of kutch weaves, ajrakh block prints and traditional hand embroideries for a cozy, uplifting and comforting experience during your meditation, pujas and other serene sojourns.</p>",
  products: [
    {
      title: "Kala Cotton",
      description_one:
        "<p>Kala Cotton is a unique type of cotton indigenous to kutch region of Gujarat, India.</p><p>It is also called Zinda cotton or Alive cotton as it can survive on its own in the scorching heat of summer when temperatures range from 40 to 50 degrees Celsius in the desert of kutch, and in the chilly winters as well, without the need for any fertilizers for survival and growth. In addition to being fully organic and eco-friendly, it provides a source of income for farmers due to its durability and low investment requirements.</p><p>This sustainable, 100% bio-degradable eco-friendly product supports livelihood of artisans from traditional weaver community and encourages women empowerment.</p>",
      description_two:
        "<p>There is indeed purity right from the core of its existence, hence Pavitra is what we call this pristine and sacred collection</p><p>Handcrafted with love to nurture your purity, this special cotton fibre will keep you cool in the summer and warm in the winter; making it a perfect choice to use for your indoor as well as outdoor meditative explorations all year long.</p><p>Its softness and gentle feel will be loved by your skin, and the large size ensures that you are completely engulfed in comfort and warmth for an enchanting experience during your serene moments.</p>",
      products: [
        {
          category_slug: "meditation-pooja-shawls",
          slug: "pavitra-large-organic-kala-cotton-shawls-magenta",
          image:
            "https://register.nityanava.com/media/uploads/product/images/cf2d940b-b72a-4763-b02b-d2b4f71659b7_KOHhm8O.jpg",
          name: "Pavitra - Large Organic kala Cotton Shawl",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image:
                "https://register.nityanava.com/media/uploads/product/upload/images/226005ae-34c7-49ec-8ca7-443634d324c2_hAPhpOf.jpg",
            },
          ],
        },
        {
          category_slug: "meditation-pooja-shawls",
          slug: "meditation-shawl-kala-cotton-magenta",
          image: "",
          name: "Padma - Large Organic Kala Cotton lotus embroidered Shawls",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image: "",
            },
          ],
        },
        {
          category_slug: "meditation-pooja-shawls",
          slug: "meditation-shawl-kala-cotton-magenta",
          image: "",
          name: "Lavanya- Large Organic Kala Cotton kutch weave shawls",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image: "",
            },
          ],
        },
        {
          category_slug: "meditation-pooja-shawls",
          slug: "meditation-shawl-kala-cotton-magenta",
          image: "",
          name: "Shobha- Large Organic Kala Cotton Ajrakh Shawls",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image: "",
            },
          ],
        },
      ],
    },
    {
      title: "Merino Wool",
      description_one: "",
      description_two: "",
      products: [
        {
          category_slug: "meditation-pooja-shawls",
          slug: "meditation-shawl-kala-cotton-magenta",
          image: "",
          name: "Nishtha- 100% pure merino wool Kutch weave shawls",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image: "",
            },
          ],
        },
        {
          category_slug: "meditation-pooja-shawls",
          slug: "meditation-shawl-kala-cotton-magenta",
          image: "",
          name: "Shringar- 100% pure merino wool Kutch hand embroidery shawls",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image: "",
            },
          ],
        },
        {
          category_slug: "meditation-pooja-shawls",
          slug: "meditation-shawl-kala-cotton-magenta",
          image: "",
          name: "Shaded with mirror work",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image: "",
            },
          ],
        },
        {
          category_slug: "meditation-pooja-shawls",
          slug: "meditation-shawl-kala-cotton-magenta",
          image: "",
          name: "Sanskriti- 100% pure merino wool Ajrakh Shawls",
          price: "3000",
          uploaded_images: [
            {
              uid: "anything",
              image: "",
            },
          ],
        },
      ],
    },
  ],
};

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
  // const data = await getCollections(categorySlug);

  if (!data) {
    notFound();
  }

  return <ProductCategoryRedesign data={data} />;
};

export default page;

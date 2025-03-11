import TherapyDetail from "@/components/therapy/TherapyDetail";
import { notFound } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchTherapyDetails = async (therapyName) => {
  try {
    const res = await fetch(
      `${apiUrl}/therapy/therapy-details/${therapyName}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching therapy data:", error);
    return null;
  }
};

export async function generateMetadata({ params }) {
  const therapyName = params["therapy-name"];
  const pageDetails = await fetchTherapyDetails(therapyName);

  if (!pageDetails) return { title: "Therapy Not Found" };

  return {
    title: pageDetails?.seo_title || "Therapy Details",
    description: pageDetails?.seo_description || "Learn more about this therapy.",
    openGraph: {
      title: pageDetails?.seo_title || "Therapy Details",
      description: pageDetails?.seo_description || "Learn more about this therapy.",
      images: [
        {
          url: pageDetails?.banner || "https://www.ozassignments.com/assets/OZLogo.png",
        },
      ],
      url: `https://oz-assignments.com/${pageDetails?.slug || ""}`,
      type: "website",
    },
    alternates: {
      canonical: `https://oz-assignments.com/${pageDetails?.slug || ""}`,
    },
  };
}

const TherapyName = async ({ params }) => {
  const therapyName = params["therapy-name"];
  const pageDetails = await fetchTherapyDetails(therapyName);

  if (!pageDetails) {
    notFound();
    return null;
  }

  return <TherapyDetail data={pageDetails} />;
};

export default TherapyName;

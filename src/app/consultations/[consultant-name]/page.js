import ConsultationLanding from "@/components/consultations/ConsultationLanding";
import { notFound } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const fetchTherapyDetails = async (therapyName) => {
  try {
    const res = await fetch(
      `${apiUrl}/consultation/consultations/${therapyName}`,
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

const page = async ({ params }) => {
  const therapyName = params["consultant-name"];
  const pageDetails = await fetchTherapyDetails(therapyName);

  if (!pageDetails) {
    notFound();
  }

  return (
    <div className="">
      <ConsultationLanding data={pageDetails} />
    </div>
  );
};

export default page;

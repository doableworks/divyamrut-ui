import TherapyDetail from "@/components/therapy/TherapyDetail";

const apiUrl = process.env.API_URL;

const fetchTherapyDetails = async (params) => {
  try {
    const res = await fetch(
      `${apiUrl}/therapy/therapy-details/${params["therapy-name"]}`
    );
    const therapyData = await res.json();

    return therapyData;
  } catch (error) {
    console.error("Error fetching therapy data:", error);
    return {};
  }
};

const TherapyName = async ({ params }) => {
  const pageDetails = await fetchTherapyDetails(params);

  console.log("pageDetails 4444 555", pageDetails)

  return (
    <div>
      <TherapyDetail data={pageDetails} />
    </div>
  );
};

export default TherapyName;

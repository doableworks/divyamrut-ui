// import TherapyDetail from "@/components/therapy/TherapyDetail";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// const fetchTherapyDetails = async (therapyName) => {
//   try {
//     const res = await fetch(`${apiUrl}/therapy/therapy-details/${therapyName}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const therapyData = await res.json();
//     return therapyData;
//   } catch (error) {
//     console.error("Error fetching therapy data:", error);
//     return null;
//   }
// };

// const TherapyName = async ({ params }) => {
//   const therapyName = params["therapy-name"];
//   const pageDetails = await fetchTherapyDetails(therapyName);


//   return (
//     <div>
//       <TherapyDetail details={pageDetails} />
//     </div>
//   );
// };

// export default TherapyName;


const page = ({children}) =>{
  return(
    <>
    {children}
    </>
  )
}

export default page

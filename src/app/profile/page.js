// import React from "react";
// import ProfilePage from "@/components/profile/profilePage";
// import { headers } from "next/headers"; 

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// const fetchUser = async (accessToken) => {
//   try {
//     const res = await fetch(`${apiUrl}/api/auth/user/`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${accessToken}`, 
//       },
//       next: { revalidate: 60 },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const profileData = await res.json();
//     return profileData;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return null;
//   }
// };

// const page = async () => {
//   const requestHeaders = headers(); 
//   const accessToken = requestHeaders.get("authorization")?.split("Bearer ")[1] || "";
//   const session = getServerSideSession()

//   const userProfileData = await fetchUser(accessToken);
//   console.log("userProfile", userProfileData)

//   return !!userProfileData ? (
//     <div>
//       <ProfilePage userProfileData={userProfileData} />
//     </div>
//   ) : null;
// };

// export default page;



import React from "react";
import ProfilePage from "@/components/profile/profilePage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// const fetchUser = async (accessToken) => {
//   try {
//     const res = await fetch(`${apiUrl}/api/auth/user/`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${accessToken}`, 
//       },
//       next: { revalidate: 60 },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const profileData = await res.json();
//     return profileData;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return null;
//   }
// };


const fetchUser = async (accessToken) => {
  try {
    const res = await fetch(`${apiUrl}/api/user-details/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const profileData = await res.json();
    return profileData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};




const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    console.error("No session or access token found");
    return null;
  }

  const userProfileData = await fetchUser(session.accessToken);

  return !!userProfileData ? (
    <div>
      <ProfilePage userProfileData={userProfileData} />
    </div>
  ) : null;
};

export default page;


// import React from "react";
// // import { User } from 'lucide-react';

// const UserProfile = () => {
//   const user = {
//     username: "john_doe123",
//     firstName: "John",
//     lastName: "Doe",
//     email: "johndoe@example.com",
//     mobile: "+1234567890",
//     image: "https://randomuser.me/api/portraits/men/10.jpg",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="p-6 space-y-6">
//           {/* Profile Header */}
//           <div className="text-xl font-semibold text-gray-700">My Profile</div>

//           {/* Profile Image */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
//                 {/* <User className="w-16 h-16 text-gray-400" /> */}
//               </div>
//               <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 text-white">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Profile Fields */}
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <label className="text-sm text-gray-500">Username</label>
//               <input
//                 type="text"
//                 disabled
//                 className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter username"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label className="text-sm text-gray-500">First Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="First name"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm text-gray-500">Last Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Last name"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm text-gray-500">Email</label>
//               <input
//                 type="email"
//                 disabled
//                 className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm text-gray-500">Mobile Number</label>
//               <input
//                 type="tel"
//                 className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter mobile number"
//               />
//             </div>
//           </div>

//           {/* Save Button */}
//           <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;



"use client"
import React from "react";

const user = {
  username: "@jennywilson",
  firstName: "Jenny",
  lastName: "Wilson",
  email: "jenny@gmail.com ",
  mobile: "+1234567890",
  image: "/asset/home/ayurvedic-supplement.jpg",
  address: "New York, USA",
};

const UserProfileList = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 py-20">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm">
        <div className="relative p-6 space-y-6">
          {/* Profile Header with Image */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={user.image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />{" "}
                </svg>
              </button>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {`${user.firstName} ${user.lastName}`}
              </h2>
              <p className="text-gray-500 flex items-center justify-center space-x-2">
                <span>{user.username}</span>
                {/* <button className="text-blue-500 hover:text-blue-600">
                  <Pencil className="w-4 h-4" />
                </button> */}
              </p>
            </div>
          </div>

          {/* Profile Information List */}
          <div className="space-y-4">
            <div className="text-right text-cyan-400 underline cursor-pointer">
              Edit Details
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Username</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">{user.username}</span>
                {/* <button className="text-blue-500 hover:text-blue-600">
                  <Pencil className="w-4 h-4" />
                </button> */}
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Email</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">{user.email}</span>
                {/* <button className="text-blue-500 hover:text-blue-600">
                  <Pencil className="w-4 h-4" />
                </button> */}
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Address</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">{user.address}</span>
                {/* <button className="text-blue-500 hover:text-blue-600">
                  <Pencil className="w-4 h-4" />
                </button> */}
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Mobile no.</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">{user.mobile}</span>
                {/* <button className="text-blue-500 hover:text-blue-600">
                  <Pencil className="w-4 h-4" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileList;

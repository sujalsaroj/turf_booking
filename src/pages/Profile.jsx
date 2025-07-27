import React from "react";

const Profile = () => {
  const dummyUser = {
    name: "Sujal Saroj",
    email: "sujal@example.com",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra",
    role: "Shopkeeper", // or "Wholesaler"
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="bg-white shadow-md rounded-md p-6 space-y-4">
        <div className="flex flex-col gap-2">
          <strong className="text-gray-700">Name:</strong>
          <p>{dummyUser.name}</p>
        </div>

        <div className="flex flex-col gap-2">
          <strong className="text-gray-700">Email:</strong>
          <p>{dummyUser.email}</p>
        </div>

        <div className="flex flex-col gap-2">
          <strong className="text-gray-700">Phone:</strong>
          <p>{dummyUser.phone}</p>
        </div>

        <div className="flex flex-col gap-2">
          <strong className="text-gray-700">Address:</strong>
          <p>{dummyUser.address}</p>
        </div>

        <div className="flex flex-col gap-2">
          <strong className="text-gray-700">Role:</strong>
          <p>{dummyUser.role}</p>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;

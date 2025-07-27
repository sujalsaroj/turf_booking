import React, { useState } from "react";

const ManageTurf = () => {
  const [expandedTurfId, setExpandedTurfId] = useState(null);

  const turfList = [
    {
      id: 1,
      name: "Greenfield",
      bookings: 5,
      location: "Andheri West, Mumbai",
      price: "₹1200/hour",
    },
    {
      id: 2,
      name: "Sunrise Turf",
      bookings: 2,
      location: "Bandra East, Mumbai",
      price: "₹1000/hour",
    },
  ];

  const toggleDetails = (id) => {
    setExpandedTurfId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">⚙️ Manage Your Turfs</h2>

      {turfList.map((turf) => (
        <div
          key={turf.id}
          className="bg-white p-4 mb-4 border rounded shadow-md"
        >
          <h3 className="text-lg font-semibold">{turf.name}</h3>
          <p>📅 Bookings: {turf.bookings}</p>

          <div className="mt-2 space-x-2">
            <button
              className="bg-green-600 text-white px-3 py-1 rounded"
              onClick={() => toggleDetails(turf.id)}
            >
              {expandedTurfId === turf.id
                ? "🔼 Hide Details"
                : "👁️ View Details"}
            </button>
          </div>

          {expandedTurfId === turf.id && (
            <div className="mt-4 bg-gray-50 p-4 rounded border">
              <p>
                <strong>📍 Location:</strong> {turf.location}
              </p>
              <p>
                <strong>💰 Price:</strong> {turf.price}
              </p>
              <p>
                <strong>📅 Total Bookings:</strong> {turf.bookings}
              </p>

              <div className="mt-3 space-x-2">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                  ✏️ Edit
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  💸 Offer Discount
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageTurf;

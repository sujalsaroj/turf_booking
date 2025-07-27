import React from "react";

const ViewBookings = () => {
  const bookings = [
    {
      id: 1,
      turf: "Greenfield Turf",
      date: "2025-07-30",
      time: "5:00 PM - 6:00 PM",
      status: "Paid",
    },
    {
      id: 2,
      turf: "Sunrise Turf",
      date: "2025-08-01",
      time: "7:00 AM - 8:00 AM",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📖 My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white border rounded p-4 shadow-md"
            >
              <h3 className="text-lg font-semibold">{booking.turf}</h3>
              <p>📅 Date: {booking.date}</p>
              <p>⏰ Time: {booking.time}</p>
              <p>💰 Payment Status: {booking.status}</p>
              <div className="mt-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  ❌ Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewBookings;

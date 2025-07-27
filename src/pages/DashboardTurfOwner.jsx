import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardTurfOwner = () => {
  const navigate = useNavigate();

  const bookings = [
    { id: 1, turf: "Greenfield", date: "2025-07-26", time: "6:00 PM" },
    { id: 2, turf: "Sunrise Turf", date: "2025-07-27", time: "5:00 PM" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Turf Owner</h2>
        <nav className="flex flex-col gap-4">
          <button
            className="text-left hover:bg-green-600 px-4 py-2 rounded"
            onClick={() => navigate("/dashboard")}
          >
            🏠 Dashboard
          </button>
          <button
            className="text-left hover:bg-green-600 px-4 py-2 rounded"
            onClick={() => navigate("/addturf")}
          >
            ➕ Add Turf
          </button>
          <button
            className="text-left hover:bg-green-600 px-4 py-2 rounded"
            onClick={() => navigate("/manageturf")}
          >
            ⚙️ Manage Turf
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">🏟️ Turf Owner Dashboard</h1>

        {/* Booking List */}
        <section>
          <h2 className="text-xl font-semibold mb-4">📅 Booking List</h2>
          <ul className="bg-white p-4 rounded shadow">
            {bookings.length > 0 ? (
              bookings.map((b) => (
                <li
                  key={b.id}
                  className="border-b last:border-b-0 py-2 flex justify-between"
                >
                  <span>
                    <strong>{b.turf}</strong> - {b.date} at {b.time}
                  </span>
                </li>
              ))
            ) : (
              <li>No bookings yet.</li>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DashboardTurfOwner;

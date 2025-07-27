import React from "react";
import { Link } from "react-router-dom";

const DashboardPlayer = () => {
  const playerName = "Sujal"; // Later replace with context/localStorage

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, {playerName} 👋</h1>

        {/* 🏟️ Turf Booking Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🏟️ Book Turf</h2>
            <p className="text-gray-600">
              Search turfs, pick a time slot, and pay instantly.
            </p>
            <Link to="/bookTurf">
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Book Now
              </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🧾 My Bookings</h2>
            <p className="text-gray-600">View and manage your turf bookings.</p>
            <Link to="/mybooking">
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Bookings
              </button>
            </Link>
          </div>
        </div>

        {/* 🔗 Player Connections Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📢 Raise Connection</h2>
            <p className="text-gray-600">
              Looking for players? Create a connection request.
            </p>
            <Link to="/raise-connection">
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                Create Request
              </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🌍 Join Connections</h2>
            <p className="text-gray-600">
              Discover open player requests near you.
            </p>
            <Link to="/join-match">
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Explore Now
              </button>
            </Link>
          </div>
        </div>

        {/* ⚙️ Profile & Settings */}
      </div>
    </div>
  );
};

export default DashboardPlayer;

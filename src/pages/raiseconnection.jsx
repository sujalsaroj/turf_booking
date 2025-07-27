import React, { useState } from "react";

const RaiseConnection = () => {
  const [formData, setFormData] = useState({
    sport: "",
    date: "",
    time: "",
    playersNeeded: "",
    turfLocation: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Raised Connection:", formData); // Later: send to backend
    alert("✅ Connection Raised Successfully!");
    // Optionally reset form
    setFormData({
      sport: "",
      date: "",
      time: "",
      playersNeeded: "",
      turfLocation: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          🔊 Raise a Connection
        </h2>

        {/* Sport */}
        <label className="block mb-2 font-medium">Select Sport</label>
        <select
          name="sport"
          value={formData.sport}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        >
          <option value="">--Choose Sport--</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Badminton">Badminton</option>
          <option value="Basketball">Basketball</option>
        </select>

        {/* Date */}
        <label className="block mb-2 font-medium">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        {/* Time */}
        <label className="block mb-2 font-medium">Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        {/* Players Needed */}
        <label className="block mb-2 font-medium">Players Needed</label>
        <input
          type="number"
          name="playersNeeded"
          value={formData.playersNeeded}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          min="1"
          required
        />

        {/* Turf Location */}
        <label className="block mb-2 font-medium">Turf Location</label>
        <input
          type="text"
          name="turfLocation"
          value={formData.turfLocation}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          placeholder="e.g., Sky Turf, Pune"
          required
        />

        {/* Message */}
        <label className="block mb-2 font-medium">Message (optional)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          placeholder="e.g., Looking for players for a friendly match"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
        >
          Raise Connection
        </button>
      </form>
    </div>
  );
};

export default RaiseConnection;

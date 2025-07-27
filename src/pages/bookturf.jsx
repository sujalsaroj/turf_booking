import React, { useState } from "react";

const turfList = [
  {
    id: 1,
    name: "Greenfield",
    location: "Mumbai",
    slots: ["6AM", "7AM", "8AM"],
  },
  {
    id: 2,
    name: "Sunrise Turf",
    location: "Delhi",
    slots: ["5PM", "6PM", "7PM"],
  },
];

const BookTurf = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTurf, setSelectedTurf] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredTurfs = turfList.filter((turf) =>
    turf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBook = () => {
    if (selectedTurf && selectedSlot) {
      alert(
        `🎉 Booking confirmed at ${selectedTurf.name} for ${selectedSlot} slot.`
      );
    } else {
      alert("❗Please select both turf and time slot.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📅 Book a Turf</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search turfs..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full rounded"
      />

      {/* Turf Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTurfs.map((turf) => (
          <div
            key={turf.id}
            className={`border p-4 rounded shadow ${
              selectedTurf?.id === turf.id ? "bg-green-100" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-bold">{turf.name}</h3>
            <p className="text-gray-600">📍 {turf.location}</p>

            <div className="mt-2">
              <label className="font-semibold">🕓 Select Slot:</label>
              <div className="flex gap-2 flex-wrap mt-1">
                {turf.slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => {
                      setSelectedTurf(turf);
                      setSelectedSlot(slot);
                    }}
                    className={`px-3 py-1 border rounded ${
                      selectedTurf?.id === turf.id && selectedSlot === slot
                        ? "bg-green-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleBook}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          ✅ Book Now
        </button>
      </div>
    </div>
  );
};

export default BookTurf;

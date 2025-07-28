import React, { useState } from "react";

const AddTurf = () => {
  const [formData, setFormData] = useState({
    name: "",
    sports: "",
    price: "",
    slots: [""],
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photos") {
      setFormData((prev) => ({
        ...prev,
        photos: [...files],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSlotChange = (index, value) => {
    const updatedSlots = [...formData.slots];
    updatedSlots[index] = value;
    setFormData({ ...formData, slots: updatedSlots });
  };

  const addSlotField = () => {
    setFormData((prev) => ({
      ...prev,
      slots: [...prev.slots, ""],
    }));
  };

  const removeSlotField = (index) => {
    const updatedSlots = formData.slots.filter((_, i) => i !== index);
    setFormData({ ...formData, slots: updatedSlots });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Turf Data Submitted:", formData);
    setFormData({
      slots: [""],
    });
    e.target.reset();

    // Send data to backend later
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-green-700">
        ➕ Add New Turf
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Photos Upload */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Upload Photos
          </label>
          <input
            type="file"
            name="photos"
            multiple
            onChange={handleChange}
            className="block w-full text-sm text-gray-600"
          />
        </div>

        {/* Turf Name */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Turf Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Greenfield Arena"
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Sports Type */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Supported Sports
          </label>
          <input
            type="text"
            name="sports"
            placeholder="Football, Cricket"
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Price per Hour (₹)
          </label>
          <input
            type="number"
            name="price"
            placeholder="500"
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Slots */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Available Time Slots
          </label>
          {formData.slots.map((slot, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={slot}
                onChange={(e) => handleSlotChange(index, e.target.value)}
                placeholder="e.g. 5PM - 6PM"
                className="border p-2 rounded w-full"
              />
              {formData.slots.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSlotField(index)}
                  className="text-red-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSlotField}
            className="text-blue-600 font-medium text-sm mt-1"
          >
            + Add another slot
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Save Turf
        </button>
      </form>
    </div>
  );
};

export default AddTurf;

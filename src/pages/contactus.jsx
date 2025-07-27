import React from "react";

const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="mb-6 text-center text-gray-600">
        Have any questions or suggestions? We'd love to hear from you!
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

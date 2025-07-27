import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-green-600">
        About PlayConnect
      </h1>

      <p className="mb-6 text-lg">
        <strong>PlayConnect</strong> is a smart and seamless turf booking
        platform that bridges the gap between turf owners and sports
        enthusiasts. Whether you're a player looking to book a turf or a turf
        owner wanting to manage your bookings – we make it easy, quick, and
        hassle-free.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-500">
        🎯 Our Mission
      </h2>
      <p className="mb-6">
        To connect sports lovers with quality turfs around them and help turf
        owners digitize their booking and management process.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-500">
        👤 For Players
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Find and book nearby turfs easily</li>
        <li>Select time slots, pay securely, and get instant confirmation</li>
        <li>Raise connections (e.g., “Looking for players at 6 PM”)</li>
        <li>Join open games and make new friends</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-500">
        🏢 For Turf Owners
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Manage turf listings and time slots effortlessly</li>
        <li>View and edit turf details anytime</li>
        <li>Track bookings and manage players’ requests</li>
        <li>Boost visibility by showcasing your turf</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-500">
        💡 Why Choose PlayConnect?
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Easy-to-use dashboards for both owners and players</li>
        <li>Real-time booking system</li>
        <li>Built with modern tech (React + Node + MongoDB)</li>
        <li>Focused on community and connections</li>
      </ul>

      <p className="text-lg font-medium">
        Whether you're playing or managing — with PlayConnect, you're always
        just one tap away from the game!
      </p>
    </div>
  );
};

export default About;

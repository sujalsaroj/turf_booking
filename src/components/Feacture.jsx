// components/Features.jsx

import { FaFutbol, FaUsers } from "react-icons/fa";
import { MdOutlineJoinInner, MdOutlineAddPhotoAlternate } from "react-icons/md";

import { AiOutlineClockCircle } from "react-icons/ai";

import { RiMoneyDollarCircleLine } from "react-icons/ri";
const features = [
  {
    icon: <FaFutbol className="text-green-600 text-4xl mb-2" />,
    title: "Seamless Turf Booking",
    desc: "Book verified turfs instantly near your location with real-time availability.",
  },
  {
    icon: <FaUsers className="text-blue-600 text-4xl mb-2" />,
    title: "Player Community",
    desc: "Connect with fellow sports enthusiasts and build your own team.",
  },
  {
    icon: <MdOutlineJoinInner className="text-purple-600 text-4xl mb-2" />,
    title: "Organize & Join Matches",
    desc: "Create public or private matches and invite players effortlessly.",
  },
  {
    icon: (
      <MdOutlineAddPhotoAlternate className="text-pink-600 text-4xl mb-2" />
    ),
    title: "Turf Owner Access",
    desc: "Turf owners can easily list and manage turf details through our dashboard.",
  },
  {
    icon: <AiOutlineClockCircle className="text-orange-600 text-4xl mb-2" />,
    title: "Real-time Scheduling",
    desc: "Stay updated with live match schedules and booking slots.",
  },

  {
    icon: <RiMoneyDollarCircleLine className="text-yellow-600 text-4xl mb-2" />,
    title: "Split Payment",
    desc: "Divide turf cost among players during booking.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-300 text-center border-none ">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-800 tracking-tight">
        Why Choose <span className="text-indigo-600">PlayConnect?</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-indigo-800/100 transition duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

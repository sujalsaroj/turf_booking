function Guide() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-300 to-gray-300 text-center border-none"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          How PlayConnect Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-indigo-800/100 transition duration-300">
            <div className="text-blue-600 text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Find Nearby Turfs</h3>
            <p className="text-gray-600">
              Explore top-rated turfs near your location instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-indigo-800/100 transition duration-300">
            <div className="text-green-500 text-5xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Book Time Slot</h3>
            <p className="text-gray-600">
              Select your preferred time and turf with a few taps.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-indigo-800/100 transition duration-300">
            <div className="text-yellow-500 text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">
              Invite Friends or Join Match
            </h3>
            <p className="text-gray-600">
              Form a team or join public matches hosted by others.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-indigo-800/100 transition duration-300">
            <div className="text-red-500 text-5xl mb-4">⚽</div>
            <h3 className="text-xl font-semibold mb-2">Play & Enjoy</h3>
            <p className="text-gray-600">
              Show up, play, and have a blast. Leave feedback too!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;

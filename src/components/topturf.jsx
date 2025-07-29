function TopTurf() {
  return (
    <>
      <section
        className="py-16 bg-gradient-to-b from-gray-300 to-gray-300 text-center border-none"
        id="top-turfs"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Top Turfs Near You
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Turf Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <img
                src="/images/img1.jpeg"
                alt="Turf Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Elite Sports Arena</h3>
              <p className="text-gray-600 mb-2">Andheri West, Mumbai</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Rating: ★ 4.8
              </span>
            </div>

            {/* Turf Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <img
                src="D:/tuef_booking_system/turf_booking/src/images/img2.jpg300x200"
                alt="Turf Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">KickOff Ground</h3>
              <p className="text-gray-600 mb-2">Bandra East, Mumbai</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Rating: ★ 4.6
              </span>
            </div>

            {/* Turf Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <img
                src="D:/tuef_booking_system/turf_booking/src/images/img3.jpg300x200"
                alt="Turf Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">PowerPlay Arena</h3>
              <p className="text-gray-600 mb-2">Goregaon, Mumbai</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Rating: ★ 4.9
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopTurf;

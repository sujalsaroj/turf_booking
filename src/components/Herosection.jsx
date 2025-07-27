import heroBg from "../images/hero-bg.jpg";
import Features from "./Feacture";
function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-900 via-green-700 to-green-600 py-16 px-6 md:px-12 text-white overflow-hidden ">
      {/* Background pattern image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={heroBg}
          alt="Field Lines"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content goes here */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center h-full">
        {/* Optional small badge */}
        <div className="bg-green-500/90 text-sm px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-md mb-4">
          PlayConnect Platform
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Welcome to <span className="text-green-300">Turf Booking</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
          Book your favorite turf anytime, anywhere. Easy, fast, and
          hassle-free.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="#find-turfs"
            className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-100 transition duration-300"
          >
            Explore Turfs
          </a>
        </div>

        {/* Features quick tags */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center text-sm md:text-base text-gray-300">
          <span className="px-3 py-1 border border-white rounded-full">
            ⚽ Football
          </span>
          <span className="px-3 py-1 border border-white rounded-full">
            🏏 Cricket
          </span>
          <span className="px-3 py-1 border border-white rounded-full">
            🏸 Badminton
          </span>
          <span className="px-3 py-1 border border-white rounded-full">
            📍 Location Based
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

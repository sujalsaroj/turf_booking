import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    // Optional: Listen for changes in localStorage
    const handleStorageChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // Optional: Redirect to home after logout
    window.location.href = "/";
  };

  return (
    <nav className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          PlayConnect
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-7 text-xl">
          <Link
            to="/home"
            className="relative group px-3 py-2 text-white text-lg"
          >
            Home
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-11px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/dashboard-player"
            className="relative group px-3 py-2 text-white text-lg"
          >
            Book Turf
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-11px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/dashboard-turf-owner"
            className="relative group px-3 py-2 text-white text-lg"
          >
            My Turf
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-11px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative group px-3 py-2 text-white text-lg"
          >
            About
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-11px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact-us"
            className="relative group px-3 py-2 text-white text-lg"
          >
            Contact
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-11px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right Side: Avatar or Login/Register */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Notification */}
              <button className="hover:text-gray-300 relative">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0018 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Avatar with dropdown menu */}
              <div className="relative group">
                <Link to="/profile" className="flex items-center gap-2">
                  <img
                    src={
                      user.photoURL ||
                      "D:/tuef_booking_systemturf_bookingsrcimagesavatar.jpg"
                    }
                    alt="Profile"
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white hover:scale-105 transition"
                  />
                  <span className="hidden md:inline font-medium">
                    {user.displayName || user.email.split("@")[0]}
                  </span>
                </Link>

                {/* Dropdown menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white text-green-900 rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/my-booking"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    My Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-green-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 bg-white text-green-800 rounded font-semibold hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 py-1 bg-white text-green-800 rounded font-semibold hover:bg-gray-100 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

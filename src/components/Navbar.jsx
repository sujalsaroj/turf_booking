import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

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
    window.location.href = "/";
  };

  return (
    <nav className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold">
          PlayConnect
        </Link>

        {/* Center: Hamburger for Mobile */}
        <div className="flex md:hidden items-center gap-2"></div>

        {/* Right: Auth Buttons (Always visible) */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6 text-xl">
            <NavLinks />
          </div>
          {user ? (
            <UserDropdown user={user} onLogout={handleLogout} />
          ) : (
            <AuthLinks />
          )}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile = false }) {
  const baseClasses = "block py-2 px-3";
  const hover = "hover:bg-green-800 rounded";
  const className = `${baseClasses} ${hover} ${mobile ? "text-lg" : ""}`;

  return (
    <>
      <Link to="/home" className={className}>
        Home
      </Link>
      <Link to="/dashboard-player" className={className}>
        Book Turf
      </Link>
      <Link to="/dashboard-turf-owner" className={className}>
        My Turf
      </Link>
      <Link to="/about" className={className}>
        About
      </Link>
      <Link to="/contact-us" className={className}>
        Contact
      </Link>
    </>
  );
}

function AuthLinks() {
  return (
    <div className="flex items-center space-x-3">
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
    </div>
  );
}

function UserDropdown({ user, onLogout }) {
  return (
    <div className="relative group">
      <Link to="/profile" className="flex items-center gap-2">
        <img
          src={user.photoURL || "/default-avatar.jpg"}
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full border-2 border-white hover:scale-105 transition"
        />
        <span className="hidden md:inline font-medium">
          {user.displayName || user.email.split("@")[0]}
        </span>
      </Link>

      <div className="absolute right-0 mt-2 w-48 bg-white text-green-900 rounded-md shadow-lg py-1 hidden group-hover:block z-50">
        <Link to="/profile" className="block px-4 py-2 hover:bg-green-100">
          My Profile
        </Link>
        <Link to="/my-booking" className="block px-4 py-2 hover:bg-green-100">
          My Bookings
        </Link>
        <button
          onClick={onLogout}
          className="w-full text-left px-4 py-2 hover:bg-green-100 text-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

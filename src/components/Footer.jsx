import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              PlayConnect is your go-to platform for booking turfs and
              connecting with football lovers. Join us and kick off the fun!
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-turf" className="hover:underline">
                  Book Turf
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f hover:text-gray-300"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram hover:text-gray-300"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter hover:text-gray-300"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube hover:text-gray-300"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © 2025 PlayConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

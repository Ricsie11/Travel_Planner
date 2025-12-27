import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 flex items-center"
        >
          <img src={logo} alt="logo" className="h-15 w-15 mr-2" />
          Travel Tour
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/destinations" label="Destination" />
          <NavLink to="/itinerary" label="Itinerary" />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
        >
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col mt-4 space-y-4 px-4 pb-4">
          <MobileNavLink to="/" label="Home" setIsOpen={setIsOpen} />
          <MobileNavLink
            to="/Destination"
            label="Destination"
            setIsOpen={setIsOpen}
          />
          <MobileNavLink
            to="/Itinerary"
            label="Itinerary"
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </nav>
  );

  /* ---------- Reusable Components ---------- */

  function NavLink({ to, label }) {
    return (
      <Link
        to={to}
        className="text-black font-medium text-xl hover:text-blue-600 transition"
      >
        {label}
      </Link>
    );
  }

  function MobileNavLink({ to, label, setIsOpen }) {
    return (
      <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className="text-black font-medium text-lg hover:text-blue-600 transition"
      >
        {label}
      </Link>
    );
  }
}

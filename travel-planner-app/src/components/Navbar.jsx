import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // load theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // apply theme when toggled
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 w-full z-50 transition-all duration-300",
        "border-b border-gray-200 dark:border-gray-700",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow"
          : "bg-white dark:bg-gray-900",
      ].join(" ")}
    >
      <div className="px-6 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={darkMode ? logo : logo2}
            alt="Travel Planner logo"
            className="h-10 w-10 object-contain transition-opacity duration-300"
          />
          <span
            className="text-xl  font-semibold text-blue-500 tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Atlas
          </span>

          <span className="text-xs text-gray-500 dark:text-gray-400">
            Your world, planned
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="text-xl"
            aria-label="Toggle dark mode"
            type="button"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-8 h-6"
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={`absolute h-0.5 w-full bg-black dark:bg-white transition-all ${
                open ? "rotate-45 top-3" : "top-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black dark:bg-white transition-all top-3 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black dark:bg-white transition-all ${
                open ? "-rotate-45 top-3" : "top-6"
              }`}
            />
          </button>

          <div className="hidden md:flex space-x-6 font-medium text-gray-900 dark:text-white">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/destinations" className="hover:text-blue-500">
              Destinations
            </Link>
            <Link to="/itinerary" className="hover:text-blue-500">
              Itinerary
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 px-6 pb-4" : "max-h-0"
        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <div className="space-y-3 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link
            to="/destinations"
            onClick={() => setOpen(false)}
            className="block"
          >
            Destinations
          </Link>
          <Link
            to="/itinerary"
            onClick={() => setOpen(false)}
            className="block"
          >
            Itinerary
          </Link>
        </div>
      </div>
    </nav>
  );
}

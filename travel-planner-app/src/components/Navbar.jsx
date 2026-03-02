import logo_dark from "../assets/logo_premium_dark.png";
import logo_light from "../assets/logo_premium_light.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, MapPin, Calendar, Compass } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // load theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // apply dark theme when toggled
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Navbar sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", path: "/", icon: <Compass size={18} /> },
    { name: "Destinations", path: "/destinations", icon: <MapPin size={18} /> },
    { name: "My Journeys", path: "/itinerary", icon: <Calendar size={18} /> },
  ];

  return (
    <nav
      className={[
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500",
        scrolled
          ? "glass rounded-2xl py-3 px-6 shadow-2xl"
          : "bg-transparent py-5 px-6",
      ].join(" ")}
    >
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={darkMode ? logo_dark : logo_light}
              alt="Atlas Logo"
              className="h-14 w-14 rounded-xl object-contain"
            />
          </motion.div>
          <span className="text-2xl font-bold tracking-tight text-primary">
            Atlas
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={[
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2",
                location.pathname === link.path
                  ? "bg-primary text-black dark:text-white shadow-lg shadow-blue-500/20"
                  : "text-black hover:text-primary hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
              ].join(" ")}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="p-2.5 rounded-xl glass hover:scale-110 active:scale-95 transition-all text-text-primary"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-blue-500" />
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2.5 rounded-xl glass text-text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="md:hidden glass rounded-xl mt-4 overflow-hidden border border-white/10"
          >
            <div className="p-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={[
                    "px-4 py-3 rounded-xl flex items-center gap-3 transition-colors",
                    location.pathname === link.path
                      ? "bg-primary text-white"
                      : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10",
                  ].join(" ")}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

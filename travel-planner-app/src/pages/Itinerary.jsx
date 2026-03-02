import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DestinationCard from "../components/DestinationCard";
import { Calendar, Trash2, Map, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Itinerary() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("itineraries") || "[]");
    setItems(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    localStorage.setItem("itineraries", JSON.stringify(updated));
    setItems(updated);
  };

  const clearAll = () => {
    localStorage.removeItem("itineraries");
    setItems([]);
  };

  return (
    <div className="bg-bg-primary min-h-screen pb-32 pt-16">
      <div className="max-w-7xl mx-auto px-8">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-primary font-bold mb-4 uppercase tracking-[0.2em] text-sm"
            >
              <Calendar size={20} />
              Personal Collection
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold px-0 text-left"
            >
              My <span className="gradient-text">Journeys</span>
            </motion.h1>
          </div>

          {items.length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={clearAll}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl glass border border-text-primary/10 text-red-500 hover:bg-red-500 hover:text-white transition-all font-semibold"
            >
              <Trash2 size={18} />
              Clear Selection
            </motion.button>
          )}
        </header>

        <AnimatePresence mode="popLayout">
          {items.length > 0 ? (
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {items.map((destination) => (
                <motion.div
                  key={destination.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  className="relative group"
                >
                  <DestinationCard destination={destination} />
                  <button
                    onClick={() => handleRemove(destination.id)}
                    className="absolute top-4 left-4 p-3 rounded-2xl glass border border-text-primary/10 text-white hover:bg-red-500 transition-all opacity-0 group-hover:opacity-100 z-30"
                    title="Remove from journeys"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-40 glass rounded-[3rem] border border-dashed border-text-primary/20"
            >
              <div className="inline-flex p-8 rounded-full bg-primary/10 mb-8 text-primary">
                <Map size={48} />
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-4">
                Your compass is waiting
              </h3>
              <p className="text-text-secondary text-lg font-light max-w-md mx-auto mb-10">
                You haven't saved any masterpieces yet. Start exploring the
                world and build your dream collection.
              </p>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl hover:scale-105 transition-transform"
              >
                Find My First Secret
                <Sparkles size={20} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

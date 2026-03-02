import { useState } from "react";
import { motion } from "framer-motion";
import DestinationCard from "../components/DestinationCard";
import data from "../data/destinations.json";
import SearchBar from "../components/SearchBar";
import { Compass, Filter, Sparkles } from "lucide-react";

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Beach", "City", "Mountain", "Historic"];

  const filtered = data.filter((d) => {
    const matchesSearch =
      d.city.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" ||
      d.description.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-bg-primary min-h-screen pb-32 pt-16">
      <div className="max-w-7xl mx-auto px-8">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-primary font-bold mb-4 uppercase tracking-[0.2em] text-sm"
          >
            <Compass size={20} />
            World Collection
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold max-w-2xl px-0 text-left"
            >
              Discover Your New{" "}
              <span className="gradient-text">Favorite Place</span>
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-6 mt-12">
              <div className="flex-1 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={[
                      "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border",
                      activeCategory === cat
                        ? "bg-primary text-black border-primary shadow-lg shadow-blue-500/20"
                        : "glass border-text-primary/10 text-text-primary hover:border-primary",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="w-full md:w-80 glass p-2 rounded-2xl border border-white/10 shadow-xl">
                  <SearchBar onSearch={setSearch} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {filtered.length > 0 ? (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {filtered.map((d) => (
              <motion.div
                key={d.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <DestinationCard destination={d} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-40 glass rounded-[3rem] border border-dashed border-white/20">
            <div className="inline-flex p-6 rounded-full bg-secondary mb-6 text-text-secondary">
              <Compass size={48} className="animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-3">
              No horizons found for "{search}"
            </h3>
            <p className="text-text-secondary text-lg font-light">
              Try expanding your search or explore our popular collections.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

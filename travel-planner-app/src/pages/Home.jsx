import { motion } from "framer-motion";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import data from "../data/destinations.json";
import { Link } from "react-router-dom";
import { Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  function getRandomDestinations(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const featuredDestinations = getRandomDestinations(data, 6);

  return (
    <div className="bg-bg-primary min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-6 mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-4 rounded-3xl shadow-2xl border border-text-primary/10 dark:border-white/20"
        >
          <SearchBar />
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary font-semibold mb-2">
              <TrendingUp size={20} />
              <span className="text-sm uppercase tracking-widest">
                Handpicked for you
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Destinations</span>
            </h2>
          </div>
          <Link
            to="/destinations"
            className="hidden sm:flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            View all
            <Sparkles size={18} />
          </Link>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {featuredDestinations.map((d) => (
            <motion.div
              key={d.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <DestinationCard destination={d} />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <section className="relative w-full py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=100&w=2400"
            alt="Adventure CTA"
            className="w-full h-full object-cover -skew-y-3 origin-right scale-110"
          />
          <div className="absolute inset-0 bg-black/60 -skew-y-3 origin-right scale-110 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Your world,{" "}
            <span className="gradient-text">thoughtfully planned.</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
            From dream destinations to detailed itineraries, Atlas turns ideas
            into unforgettable journeys. No sign-up required, just the pure joy
            of discovery.
          </p>
          <Link
            to="/destinations"
            className="px-10 py-5 bg-text-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl border"
          >
            Start Exploring Now
          </Link>
          <div className="mt-8 flex gap-6 text-sm text-white/60 font-medium">
            <span>Free</span>
            <span>•</span>
            <span>Curated with Splendor</span>
            <span>•</span>
            <span>Travel anywhere</span>
          </div>
        </div>
      </section>
    </div>
  );
}

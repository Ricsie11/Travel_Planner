import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Header() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-text-primary/10 text-primary text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          <span>The future of travel planning is here</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Plan Your Next <br />
          <span className="gradient-text">Masterpiece Adventure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed p-6 glass rounded-3xl border border-text-primary/5"
        >
          Atlas re-imagines travel. Curated destinations, handcrafted
          itineraries, and seamless coordination for the modern explorer.😉
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/destinations"
            className="px-8 py-4 bg-primary text-black glass dark:text-white rounded-2xl hover:bg-primary-hover shadow-xl shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Start Planning
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
            <button className="px-8 py-4 glass rounded-2xl text-text-primary hover:bg-white/10 transition-all duration-300 border border-text-primary/10">
              View Popular Trips
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;

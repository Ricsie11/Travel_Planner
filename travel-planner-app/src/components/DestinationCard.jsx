import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

export default function DestinationCard({ destination }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-3xl glass card-shadow border border-text-primary/10 dark:border-white/10"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.city}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

        <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass border border-white/20 text-white text-xs font-semibold">
          {destination.temperature}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
        <div className="flex items-center gap-1.5 text-blue-300 text-sm font-medium mb-1">
          <MapPin size={14} />
          <span>{destination.country}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {destination.city}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-2 mb-4 font-light">
          {destination.description}
        </p>

        <Link
          to={`/destinations/${destination.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
        >
          View Secrets
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}

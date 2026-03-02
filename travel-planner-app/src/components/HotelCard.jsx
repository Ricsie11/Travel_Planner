import { motion } from "framer-motion";
import { Star, DollarSign } from "lucide-react";

export default function HotelCard({ hotel }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex gap-4 p-4 rounded-2xl glass border border-white/10 group overflow-hidden"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
            {hotel.name}
          </h4>
          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
            <Star size={14} fill="currentColor" />
            <span className="font-semibold">{hotel.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-green-500 font-bold">
            <span>{hotel.price}</span>
            <span className="text-xs text-text-secondary font-normal ml-1">
              / night
            </span>
          </div>
          <button className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

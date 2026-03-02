import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ItineraryTimeline({ itinerary }) {
  return (
    <div className="space-y-8">
      {itinerary.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-10 group"
        >
          {/* Vertical Line */}
          {index !== itinerary.length - 1 && (
            <div className="absolute left-[19px] top-10 bottom-[-32px] w-0.5 bg-gray-200 dark:bg-gray-800" />
          )}

          {/* Node */}
          <div className="absolute left-0 top-0 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-primary shadow-lg z-10 group-hover:scale-110 transition-transform">
            <span className="text-xs font-bold">{item.day}</span>
          </div>

          <div className="glass p-6 rounded-3xl border border-white/10 group-hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 text-primary text-sm font-bold mb-2 uppercase tracking-widest">
              <MapPin size={16} />
              Day {item.day}
            </div>
            <p className="text-text-primary text-lg font-light leading-relaxed">
              {item.activity}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import data from "../data/destinations.json";
import HotelCard from "../components/HotelCard";
import ItineraryTimeline from "../components/ItineraryTimeline";
import confetti from "canvas-confetti";
import {
  ChevronLeft,
  Heart,
  Share2,
  MapPin,
  Thermometer,
  Sparkles,
} from "lucide-react";

function DestinationDetails() {
  const { id } = useParams();
  const destination = data.find((d) => d.id === id);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (destination) {
      const saved = JSON.parse(localStorage.getItem("itineraries") || "[]");
      setIsSaved(saved.some((item) => item.id === destination.id));
    }
  }, [id, destination]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Destination not found</h2>
      </div>
    );
  }

  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("itineraries") || "[]");
    if (!isSaved) {
      const newSaved = [...saved, destination];
      localStorage.setItem("itineraries", JSON.stringify(newSaved));
      setIsSaved(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#8b5cf6", "#ffffff"],
      });
    } else {
      const newSaved = saved.filter((item) => item.id !== destination.id);
      localStorage.setItem("itineraries", JSON.stringify(newSaved));
      setIsSaved(false);
    }
  };

  return (
    <div className="bg-bg-primary min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          src={destination.image}
          alt={destination.city}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/20 to-black/40" />

        <div className="absolute top-8 left-8 z-30">
          <Link
            to="/destinations"
            className="p-3 rounded-2xl glass text-white hover:text-primary transition-all flex items-center gap-2 group"
          >
            <ChevronLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium pr-2">Exploration</span>
          </Link>
        </div>

        <div className="absolute bottom-12 left-8 right-8 max-w-7xl mx-auto z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-primary font-bold mb-3 uppercase tracking-[0.2em] text-sm">
              <MapPin size={16} />
              {destination.country}
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-text-primary mb-6">
              {destination.city}
            </h1>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-text-primary/10 text-text-primary">
                <Thermometer size={18} className="text-orange-500" />
                <span className="font-medium">{destination.temperature}</span>
              </div>
              <button
                onClick={handleSave}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold shadow-2xl transition-all duration-500 group ${
                  isSaved
                    ? "bg-red-500 text-white shadow-red-500/20"
                    : "glass border-white/10 text-text-primary hover:bg-white/10"
                }`}
              >
                <Heart
                  size={20}
                  fill={isSaved ? "currentColor" : "none"}
                  className={
                    isSaved
                      ? "animate-pulse"
                      : "group-hover:scale-110 transition-transform"
                  }
                />
                <span>
                  {isSaved ? "Saved to Journeys" : "Save to My Trips"}
                </span>
              </button>
              <button className="p-4 rounded-full glass border border-text-primary/10 text-text-primary hover:text-primary transition-all hover:scale-110">
                <Share2 size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-8 mt-20 grid lg:grid-cols-3 gap-16">
        {/* Left Column: Info & Itinerary */}
        <div className="lg:col-span-2 space-y-20 text-left">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={28} />
              </div>
              <h2 className="text-4xl font-bold">
                The Essence of {destination.city}
              </h2>
            </div>
            <p className="text-2xl text-text-secondary leading-relaxed font-light">
              {destination.description} Discover the rhythm of local life and
              the grandeur of legendary landmarks. Our curated experience takes
              you through the very best of {destination.country}, starting with
              the iconic {destination.attractions[0]}.
            </p>
          </section>

          <section>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Journey <span className="gradient-text">Timeline</span>
              </h2>
              <p className="text-text-secondary">
                A handcrafted 3-day experience for the sophisticated traveler.
              </p>
            </div>
            <ItineraryTimeline itinerary={destination.itinerary} />
          </section>
        </div>

        {/* Right Column: Hotels & Sidebar */}
        <div className="space-y-12">
          <section className="glass p-8 rounded-[2.5rem] border border-text-primary/10 dark:border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">
              Iconic <span className="gradient-text">Stays</span>
            </h3>
            <div className="space-y-5">
              {destination.hotels.map((hotel, index) => (
                <HotelCard key={index} hotel={hotel} />
              ))}
            </div>
            <button className="w-full mt-10 py-5 px-6 rounded-2xl bg-bg-secondary text-text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-lg">
              Explore All Luxury Stays
            </button>
          </section>

          <section className="bg-linear-to-br from-primary to-indigo-600 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Exclusive Concierge
            </h3>
            <p className="opacity-80 mb-10 font-light text-lg relative z-10">
              Unlock private tours and secret access points in{" "}
              {destination.city} with our elite local partners.
            </p>
            <button className="w-full py-5 px-6 rounded-2xl bg-white text-primary font-bold hover:scale-[1.02] transition-all shadow-xl active:scale-95">
              Contact Concierge
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;

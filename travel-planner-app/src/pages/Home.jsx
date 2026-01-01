import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import data from "../data/destinations.json";
import { Link } from "react-router-dom"

export default function Home() {
  //Function to randomly pick destinations
  function getRandomDestinations(array, count) {
    const shuffled = [...array].sort(() => 0.6 - Math.random());
    return shuffled.slice(0, count);
  }

  const featuredDestination = getRandomDestinations(data, 6);
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-3 mt-12">
        <section className="text-center mb-10">
          <SearchBar />
        </section>

        <h3 className="text-2xl font-semibold mb-4">Featured Destinations</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredDestination.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </div>

      <section
        className=" relative w-full min-h-screen
        flex items-center justify-center
        bg-cover bg-center text-center mb-20 mt-10 py-20 px-4 bg-[#EEF4ED] dark:bg-gray-900"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      >
        {/* <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80"></div> */}

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
            Your world, thoughtfully planned.
          </h1>

          <p className="max-w-xl mx-auto text-gray-300 mb-8">
            From dream destinations to detailed itineraries, Atlas turns ideas
            into unforgettable journeys.
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/destinations">
              <button className="px-6 py-3 border hover:text-black border-gray-300 dark:border-gray-600 rounded-lg text-gray-200 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-400 transition">
                Explore destinations
              </button>
            </Link>
          </div>

          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            No sign-up required • Free to explore
          </p>
        </div>
      </section>
    </>
  );
}

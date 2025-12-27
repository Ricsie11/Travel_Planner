import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import data from "../data/destinations.json";

export default function Home() {
  return (
    <div className="mt-12">
      <section className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Plan Your Next Adventure
        </h2>
        <p className="text-gray-600 mb-6">
          Discover destinations and build your perfect trip.
        </p>
        <SearchBar />
      </section>

      <h3 className="text-2xl font-semibold mb-4">
        Featured Destinations
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </div>
  );
}

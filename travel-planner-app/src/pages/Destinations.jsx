import { useState } from "react";
import data from "../data/destinations.json";
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";

export default function Destinations() {
  const [search, setSearch] = useState("");

  const filtered = data.filter((d) =>
    d.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-10 px-6 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">
        Explore amazing Places
      </h1>

      <div className="max-w-md mx-auto mb-6">
        <SearchBar onSearch={setSearch} />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filtered.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </div>
  );
}

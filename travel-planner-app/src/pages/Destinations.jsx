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
    <div className="mt-10 mb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Explore amazing Places
      </h1>

      <div className="max-w-md mx-auto mb-6">
        <SearchBar onSearch={setSearch} />
      </div>

      {search && filtered.length > 0 && (
        <p className="text-green-600 font-medium mt-4">
          {filtered.length}{" "}
          {filtered.length === 1 ? "destination" : "destinations"} found!
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filtered.map((d) => (
          <DestinationCard key={d.id} {...d} destination={d} />
        ))}
      </div>
    </div>
  );
}

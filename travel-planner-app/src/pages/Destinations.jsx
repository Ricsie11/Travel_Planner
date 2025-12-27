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
    <div className="mt-10">
      <SearchBar onSearch={setSearch} />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filtered.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </div>
  );
}


// import { getCityDetails, getAttractions } from "../services/opentripmap";
// import DestinationCard from "../components/DestinationCard";
// import Itinerary from "../pages/Itinerary";

// export default function Destination() {
//   const { id } = useParams();
//   const [city, setCity] = useState(null);
//   const [attractions, setAttractions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const cityData = await getCityDetails(id);
//         setCity(cityData);

//         const attractionData = await getAttractions(
//           cityData.lat,
//           cityData.lon
//         );

//         setAttractions(attractionData.features);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [id]);

//   function addToItinerary(name) {
//     const saved = JSON.parse(localStorage.getItem("itinerary")) || [];
//     const updated = [...saved, name];
//     localStorage.setItem("itinerary", JSON.stringify(updated));
//   }

//   if (loading) return <p>Loading destination...</p>;

//   return (
//     <div className="mt-10">
//       {/* Destination Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-2">{city.name}</h1>
//         <p className="text-gray-600">
//           Country: {city.country} • Coordinates: {city.lat}, {city.lon}
//         </p>
//       </div>

//       {/* Attractions */}
//       <h2 className="text-2xl font-semibold mb-4">Popular Attractions</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {attractions.map((attr) => (
//           <DestinationCard
//             key={attr.id}
//             attraction={attr}
//             onAdd={addToItinerary}
//           />
//         ))}
//       </div>

//       {/* Itinerary */}
//       <Itinerary />
//     </div>
//   );
// }

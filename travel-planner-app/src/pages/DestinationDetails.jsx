import { useParams } from "react-router-dom";
import data from "../data/destinations.json";

function DestinationDetails() {
  const { id } = useParams();
  const destination = data.find((d) => d.id === id);

  if (!destination) return <p>Destination not found</p>;

  return (
    <div className="mt-10">
      <img
        src={destination.image}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {destination.city}
      </h1>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          Attractions
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {destination.attractions.map((item) => (
            <div
              key={item}
              className="p-4 border rounded shadow-sm"
            >
              <h3 className="font-medium">{item}</h3>
              <button className="mt-2 text-blue-500">
                Add to Itinerary
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
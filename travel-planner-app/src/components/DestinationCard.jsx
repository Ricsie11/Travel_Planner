import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
  return (
    <div className="rounded shadow hover:shadow-lg bg-white">
      <img
        src={destination.image}
        className="h-48 w-full object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-bold">{destination.city}</h3>
        <p className="text-gray-600 text-sm">
          {destination.country} · {destination.temperature}
        </p>
        <p className="text-sm mt-2">
          {destination.description}
        </p>

        <Link
          to={`/destinations/${destination.id}`}
          className="text-blue-500 mt-3 inline-block"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

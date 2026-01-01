import { useEffect, useState } from "react";
import { getItinerary, removeFromItinerary } from "../utils/itinerary";

export default function Itinerary() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItinerary());
  }, []);

  function handleRemove(item) {
    removeFromItinerary(item);
    setItems(getItinerary());
  }

  return (
    <div className="mt-10 mb-20 grid md:grid-cols-2 gap-6 m-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>

        {items.length === 0 && (
          <p className="text-gray-600">No items added yet.</p>
        )}

        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex justify-between items-center border p-3 rounded"
            >
              <span>{item}</span>
              <button
                onClick={() => handleRemove(item)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border rounded p-4 m-4 shadow">
        <h3 className="font-semibold mb-2">Trip Summary</h3>
        <p>{items.length} Activities planned </p>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-600">
          Save Itinerary
        </button>
      </div>
    </div>
  );
}

export default function Itinerary() {
  return (
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Your Itinerary
        </h2>
        <p className="text-gray-600">
          Selected attractions will appear here.
        </p>
      </div>

      <div className="border rounded p-4 shadow">
        <h3 className="font-semibold mb-2">
          Trip Summary
        </h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Save
        </button>
        <button className="border px-4 py-2 rounded">
          Export
        </button>
      </div>
    </div>
  );
}

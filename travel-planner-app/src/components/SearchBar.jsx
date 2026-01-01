export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search destinations..."
      className="border p-3 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search destinations..."
      onChange={(e) => onSearch?.(e.target.value)}
      className="border p-3 rounded w-full max-w-md"
    />
  );
}


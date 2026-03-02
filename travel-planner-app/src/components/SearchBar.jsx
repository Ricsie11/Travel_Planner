import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  return (
    <div className="relative group w-full">
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-text-secondary group-focus-within:text-primary transition-colors">
        <Search size={22} strokeWidth={2.5} />
      </div>
      <input
        type="text"
        placeholder="Search for your next secret destination..."
        className="w-full pl-14 pr-6 py-5 bg-transparent border-none focus:ring-0 text-lg font-light placeholder:text-text-secondary/50 outline-none"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
    </div>
  );
}

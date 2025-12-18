import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.PreventDefault();
    setSearchTerm(e.target.value);

    //Prevent Empty Searches
    if (!searchTerm.trim()) {
      setError("Please enter a destination");
      return;
    }

    setError("");
    setLoading(true);

    //Navigate to Destination page
    setTimeout(() => {
      navigate(`/destination/${searchTerm}`);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <form onSubmit={handleSearch} className="flex justify-center">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a city..."
          className="w-full p-2 pl-10 text-sm mr-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* {searchResults.length > 0 && (
          <ul className="mt-2 p-2 border border-gray-300 rounded-lg">
            {searchResults.map((result, index) => (
              <li key={index} className="p-2 hover:bg-gray-100">
                {result}
              </li>
            ))}
          </ul>
        )} */}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 p-4 rounded"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}
      </form>
    </div>
  );
}

export default SearchBar;

"use client";

import { useSearch } from "@/context/SearchContext"; 

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch(); 

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="w-full sm:w-72 md:w-84 px-4 py-1 mx-6 border border-gray-500 rounded-full bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  const router = useRouter();
  const isActive = (path: string) => (router.pathname === path ? "text-blue-500 font-bold" : "text-white");

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" className={`hover:underline ${isActive("/")}`}>
          <span className="text-xl pl-2">Home</span>
        </Link>
        <Link href="/about" className={`hover:underline ${isActive("/about")}`}>
          <span className="text-xl pl-2">About</span>
        </Link>
      </div>

      <div className="flex-grow flex justify-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      
      <div className="flex- space-x-4 pr-4">
        <DarkModeToggle />
      </div>
    </nav>
  );
}

"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { SearchBar } from "./SearchBar";
import { DarkModeToggle } from "./DarkModeToggle";


export function Navbar() {
  const router = useRouter();
  
  const isActive = (path: string) =>
    router.pathname === path ? "text-blue-500" : "text-white";
    
  const isUserInHomePage = router.pathname === "/";

  return (
    <nav className="sticky top-0 left-0 w-full py-3 px-5 bg-gray-800 text-white flex items-center z-50">
      <div className="flex space-x-4">
        <Link href="/" className={`transform hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out ${isActive("/")}`}>
          <span className="text-xl p-2">Home</span>
        </Link>
        <Link href="/about" className={`transform hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out ${isActive("/about")}`}>
          <span className="text-xl p-2">About</span>
        </Link>
      </div>

      <div className="ml-auto flex items-center space-x-4">
        {isUserInHomePage && (
          <SearchBar /> 
        )}
        
        <DarkModeToggle />
      </div>
    </nav>
  );
}

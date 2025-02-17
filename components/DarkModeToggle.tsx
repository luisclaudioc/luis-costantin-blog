"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if theme is already stored in localStorage
    return typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Apply the theme on initial load
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); // Runs whenever darkMode changes

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all"
    >
      {/* Moon icon */}
      <motion.span
        className="absolute right-1 text-gray-400"
        animate={{ opacity: darkMode ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        🌙
      </motion.span>

      {/* Toggle ball */}
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
        animate={{ x: darkMode ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Sun icon */}
      <motion.span
        className="absolute left-1"
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        ☀️
      </motion.span>
    </button>
  );
}

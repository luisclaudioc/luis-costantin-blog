"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all"
    >
      <motion.span
        className="absolute right-1 text-gray-400"
        initial={{ opacity: darkMode ? 0 : 1 }}
        animate={{ opacity: darkMode ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        🌙
      </motion.span>

      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
        initial={{ x: darkMode ? 24 : 0 }}
        animate={{ x: darkMode ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      <motion.span
        className="absolute left-1"
        initial={{ opacity: darkMode ? 1 : 0 }}
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        ☀️
      </motion.span>
    </button>
  );
}

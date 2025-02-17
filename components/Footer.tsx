export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center fixed bottom-0 w-full">
      <div className="flex justify-between items-center space-x-4 mx-2">
        <span className="text-blue-500 pr-8">Luis Costantin</span>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/luisclaudioc" target="_blank" className="transform active:scale-95 transition-all duration-300 ease-in-out hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/luisclaudioc/" target="_blank" className="transform active:scale-95 transition-all duration-300 ease-in-out hover:underline">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/luisclaudioc/" target="_blank" className="transform active:scale-95 transition-all duration-300 ease-in-out  hidden md:block">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

  
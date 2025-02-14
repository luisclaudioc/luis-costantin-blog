export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center fixed bottom-0 w-full">
      <div className="flex justify-center items-center space-x-4">
        <span className="text-blue-500 pr-8">Made by: Luis Costantin</span>
        <a href="https://github.com/luisclaudioc" target="_blank" className="hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luisclaudioc/" target="_blank" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/luisclaudioc/" target="_blank" className="hover:underline">
          Instagram
        </a>
      </div>
    </footer>
  );
}

  
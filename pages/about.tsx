export default function About() {
  return (
    <div className="pb-16">
      <div className="container mx-auto p-4 max-w-3xl text-center">
        <div className="mb-6">
          <img
            src="/banner.jpg"
            alt="Cool banner"
            className="w-full h-60 object-cover object-top shadow-md"
          />
        </div>

        <h1 className="text-4xl font-bold mb-2">Hey, I'm Luis!</h1>
        <h3 className="text-lg text-gray-600 dark:text-gray-600">
          A web developer who loves crafting clean, functional, and creative digital experiences.
        </h3>

        <div className="mt-6 text-left space-y-4">
          <h2 className="text-2xl font-semibold">About this Blog</h2>
          <p>
            This blog was built with Next.js, TypeScript, and Tailwind CSS to showcase my skills in modern web development.
            It features dynamic routing, static generation, API integration, search through search bar and hashtags, and a cool dark mode toggle.
          </p>

          <h2 className="text-2xl font-semibold">Shall we talk more about it?</h2>
          <p>
            With a strong eye for design and solid coding skills, I bring creativity and technical expertise to every project.
            I love making user-friendly, responsive, and aesthetically pleasing websites.
            I would be happy to detail the technologies used in this project and my capabilities as a developer.
          </p>

          {/* Contact Links */}
          <p className="mt-4 flex flex-wrap gap-2 justify-center">
            <a 
              href="mailto:luisclaudioc@hotmail.com"
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              📧
            </a>
            <a 
              href="tel:+351938349977"
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              📞
            </a>
            <a 
              href="https://wa.me/351938349977"
              className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
            >
              💬
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
          <title>About - CostantinBlog</title>
      </Head>
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
          <h3 className="text-lg text-slate-800 dark:text-slate-400">
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

            <p className="mt-4 flex flex-wrap gap-2 justify-center">
              <a 
                href="mailto:luisclaudioc@hotmail.com"
                className="transform active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-gray-800 text-slate-900 hover:bg-gray-700 rounded-full shadow-md transition"
              >
                📧
              </a>
              <a 
                href="tel:+351938349977"
                className="transform active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-gray-800 text-slate-900 hover:bg-gray-700 rounded-full shadow-md transition"
              >
                📞
              </a>
              <a 
                href="https://wa.me/351938349977"
                className="transform active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-green-500 rounded-full shadow-md hover:bg-green-600 transition"
              >
                💬
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

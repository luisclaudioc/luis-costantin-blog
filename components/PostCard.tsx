import Link from "next/link";
import { hashtagGenerator } from "@/utils/hashtagGenerator";
import { capitalizeTitle } from "@/utils/capitalizeTitle";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ post, onTagClick }: { post: Post; onTagClick: (tag: string) => void; }) {
  
  const hashtags = hashtagGenerator(post.title);
  
  return (
    <div className="p-4 border dark:border-0 rounded shadow-lg hover:-translate-y-1 hover:transition-all hover:duration-300 flex flex-col bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-300/10">
      <h2 className="text-xl font-bold mb-2">
        <Link 
          href={`/post/${post.id}`} 
          className="text-blue-500 hover:text-blue-400"
          onClick={() => sessionStorage.setItem("homeScroll", window.scrollY.toString())}
        >
          {capitalizeTitle(post.title)}
        </Link>
      </h2>
      <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1, 99)}...</p>

      <Link
        href={`/post/${post.id}`}
        className="group inline-flex items-center mt-2 text-blue-500 hover:text-blue-600 font-medium"
        onClick={() => sessionStorage.setItem("homeScroll", window.scrollY.toString())}
      >
        Read More
        <svg
          className="w-4 h-4 ml-1 group-hover:animate-bounce-horizontal transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>

      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        {hashtags.map((tag, index) => (
          <button
            key={tag + index}
            onClick={() => onTagClick(tag)}
            className="text-sm px-3 py-1 rounded-full bg-blue-200 text-slate-900 dark:text-slate-200 dark:bg-blue-900/40 hover:bg-blue-300 dark:hover:bg-blue-900/20"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}


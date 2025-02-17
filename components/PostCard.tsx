import Link from "next/link";
import { hashtagGenerator } from "@/utils/hashtagGenerator";
import { capitalizeTitle } from "@/utils/capitalizeTitle";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({
  post,
  onTagClick,
}: {
  post: Post;
  onTagClick: (tag: string) => void;
}) {
  const hashtags = hashtagGenerator(post.title);
  
  return (
    <div className="p-4 border rounded-[12px] shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/post/${post.id}`} className="text-blue-500 hover:text-blue-400">
          {capitalizeTitle(post.title)}
        </Link>
      </h2>
      <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1, 99)}...</p>

      <Link
        href={`/post/${post.id}`}
        className="inline-flex items-center mt-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
      >
        Read More
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>

      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        {hashtags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="text-sm px-3 py-1 rounded-full bg-blue-900 text-blue-700 dark:text-white dark:bg-blue-900/30 hover:bg-blue-300 dark:hover:bg-blue-900/50 transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}


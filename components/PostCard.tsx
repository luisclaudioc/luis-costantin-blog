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
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
          {capitalizeTitle(post.title)}
        </Link>
      </h2>
      <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1, 99)}...</p>
      <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
        Read More
      </Link>
      <div className="mt-2">
        {hashtags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="text-blue-500 hover:underline mr-2"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
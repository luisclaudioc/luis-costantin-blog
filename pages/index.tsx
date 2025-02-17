import Head from "next/head";
import { useState } from "react";
import { GetStaticProps } from "next";
import PostCard from "@/components/PostCard";
import { hashtagGenerator } from "@/utils/hashtagGenerator";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Home({ posts, searchQuery, setSearchQuery }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filtering logic: Apply both search and hashtag filters
  const filteredPosts = posts.filter((post) => {
    const matchesTag = selectedTag ? hashtagGenerator(post.title).includes(selectedTag) : true;
    const matchesSearch = searchQuery ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesTag && matchesSearch;
  });

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSearchQuery("");
  };  

  return (
    <>
      <Head>
        <title>Home - CostantinBlog</title>
      </Head>
      <div className="pb-16">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Latest Blog Posts</h1>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Explore our collection of articles covering technology, design, and development
          </p>

          {(selectedTag || searchQuery) && (
            <div className="mb-4 text-center">
              <p>
                Filtering by: <span className="font-bold">{selectedTag || `"${searchQuery}"`}</span>
              </p>
              <button
                onClick={() => {
                  setSelectedTag(null);
                  setSearchQuery("");
                }}
                className="text-red-500 underline mt-2"
              >
                Clear Filter
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <PostCard key={post.id} post={post} onTagClick={handleTagClick} />)
            ) : (
              <p className="text-center text-gray-500 col-span-full">No posts found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Fetch posts at build time
export const getStaticProps = (async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}) satisfies GetStaticProps<{ posts: Post[] }>;

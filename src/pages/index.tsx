import Head from "next/head";
import { GetStaticProps } from "next";
import { PostsList } from "@/components/posts/PostsList";
import { Post, PostsProps } from "@/types/Post.types";


// Get static props
export const getStaticProps = (async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  
  return { props: { posts } };
}) satisfies  GetStaticProps<PostsProps>;


export default function Home({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Home - CostantinBlog</title>
      </Head>
      <div className="pb-16">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mt-2 mb-4 text-center">Latest Blog Posts</h1>
          <p className="text-center text-slate-800 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Explore our collection of articles covering technology, design, and development.
          </p>
          <PostsList posts={posts} />
        </div>
      </div>
    </>
  );
}

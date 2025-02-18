import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { capitalizeTitle } from "@/utils/capitalizeTitle";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  const handleBack = () => {
    const homeScroll = sessionStorage.getItem("homeScroll");
    router.push("/").then(() => {
      if (homeScroll) {
        window.scrollTo(0, parseInt(homeScroll, 10));
      }
    });
  };

  if (!post) {
    return <p className="text-center text-red-500">Post not found</p>;
  }

  return (
    <>
      <Head>
        <title>{`Post ${post.id} - CostantinBlog`}</title>
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-blue-500 font-bold mb-4">
          {capitalizeTitle(post.title)}
        </h1>
        <p className="text-slate-800 dark:text-slate-400 ml-4 mb-2">
          Post ID: {post.id}
        </p>
        <p className="text-slate-800 dark:text-slate-400 ml-4 mb-4">
          Author: {post.userId}
        </p>
        <p className="text-lg">
          {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
        </p>
        <button
          onClick={handleBack}
          className="transform active:scale-95 transition-all duration-300 ease-in-out mt-6 px-4 py-2 bg-blue-200 text-slate-900 dark:text-slate-200 dark:bg-blue-900/40 rounded hover:bg-blue-300 dark:hover:bg-blue-900/20"
        >
          ← Back
        </button>
      </div>
    </>
  );
}

export const getStaticPaths = (async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}) satisfies GetStaticPaths<{ id: string }>;

export const getStaticProps = (async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await res.json();

  if (!post || !post.id || !post.title || !post.body || !post.userId) {
    return { notFound: true };
  }

  return { props: { post } };
}) satisfies GetStaticProps<{ post: Post }>;

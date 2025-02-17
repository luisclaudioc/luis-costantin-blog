import Head from "next/head";
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

export default function Post({ post }: PostProps ) {

    if (!post) {
        return <p className="text-center text-red-500">Post not found</p>;
    }

    return (
        <>
            <Head>
                <title>{`Post ${post.id} - CostantinBlog`}</title>
            </Head>
            <div className="container mx-auto p-6">
            <h1 className="text-3xl text-blue-500 font-bold mb-4">{capitalizeTitle(post.title)}</h1>
            <p className="text-gray-600 mb-2">Post ID: {post.id}</p>
            <p className="text-gray-600 mb-4">Author: {post.userId}</p>
            <p className="text-lg">{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
            </div>
        </>
    );
}

export const getStaticPaths = (async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    // Generate paths for each post ID
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: "blocking" }; 
}) satisfies GetStaticPaths<{
    id: string
}>

// Fetch data for each post
export const getStaticProps = (async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)
    const post = await res.json()

    if (!post || !post.id || !post.title || !post.body || !post.userId) {
        return { notFound: true }; 
    }

    return { props: { post } }
}) satisfies GetStaticProps<{
    post: Post
}>
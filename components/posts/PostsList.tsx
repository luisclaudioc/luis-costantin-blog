import { useState, useEffect } from "react";
import { hashtagGenerator } from "@/utils/hashtagGenerator";
import { PostCard } from "./PostCard";
import { useSearch } from "@/context/SearchContext"; 
import { PostsProps } from "@/types/Post.types";
import { useRouter } from "next/router";

export function PostsList({ posts }: PostsProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const { searchQuery, setSearchQuery } = useSearch();
    const router = useRouter(); 
    const userIsFiltering = selectedTag || searchQuery;

    // Clear tag search if search bar is used
    useEffect(() => {
        if (searchQuery) {
          setSelectedTag(null);
        }
    }, [searchQuery]); 

    // Clear search query when navigating to "Home" or "About"
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (url === "/" || url === "/about") {
                setSearchQuery(""); 
                setSelectedTag(null); 
            }
        };

        router.events.on("beforeHistoryChange", handleRouteChange);

        return () => {
            router.events.off("beforeHistoryChange", handleRouteChange);
        };
    }, [router, setSearchQuery]);
    

    // Search and hashtag filters
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
            { userIsFiltering && (
                <div className="mb-4 text-center">
                <p>
                    Filtering by: <span className="font-bold">{selectedTag || `"${searchQuery}"`}</span>
                </p>
                <button
                    onClick={() => {
                        setSelectedTag(null);
                        setSearchQuery("");
                    }}
                    className="text-red-400 underline mt-2"
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
        </>
    );
    }

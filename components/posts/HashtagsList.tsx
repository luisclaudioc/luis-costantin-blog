import { hashtagGenerator } from "@/utils/hashtagGenerator"; 
import { HashtagsListProps } from "@/types/Search.types";

export function HashtagsList({ postTitle, onTagClick }: HashtagsListProps) {

    const hashtags = hashtagGenerator(postTitle);

    return (
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
    );
}

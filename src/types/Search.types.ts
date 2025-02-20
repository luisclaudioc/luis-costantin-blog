export interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export interface SearchContextProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export interface HashtagsListProps {
    postTitle: string;
    onTagClick: (tag: string) => void;
}
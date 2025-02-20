export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
  
export interface PostProps {
    post: Post;
}

export interface PostsProps {
    posts: Post[];
}
export type Sections = {
    section: string;
    posts: Post[];
};

export type Post = {
    author: string;
    heading: string;
    excerpt: string;
    tags: string[];
    image: string;
};

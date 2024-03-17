import { Comment } from "./Comments";

export type Posts = {
    id: string;
    userId: string;
    title: string;
    content: string;
    imageLink: string | null;
    videoLink: string | null;
    createdAt: string;
    updatedAt: string;
    likes: string[];
    comments: Comment[] | null;
    shares: string[];
    privacySettings: string;
    tags: string[] | null; 
    location: string;
    pinned: boolean;
    taggedUsers: string[] | null;
};
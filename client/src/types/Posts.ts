import firebase from "firebase/compat/app";
import { Comment } from "./Comments";

export type Post = {
    id: string;
    userId: string;
    title: string;
    content: string;
    imageLink: string | null;
    videoLink: string | null;
    createdAt: firebase.firestore.Timestamp;
    updatedAt: firebase.firestore.Timestamp;
    likes: string[];
    comments: Comment[] | null;
    shares: string[];
    privacySettings: string;
    tags: string[] | null; 
    location: string;
    pinned: boolean;
    taggedUsers: string[] | null;
};
import firebase from "firebase/compat/app";
import { Activity } from "./Activities";

export type User = {
  id: string;
  username: string | null;
  displayName: string | null;
  bio : string | null;
  email: string | null;
  profileImage: string | null;
  coverImage: string | null;
  posts: string[] | null;
  likedPosts: string[] | null;
  savedPosts: string[] | null;
  blockedUsers: string[] | null;
  privacySettings: string;
  onlineStatus: string;
  emailVerified: boolean;
  gender: string | null;
  profileViews: number;
  postImpressions: number;
  bookmarks: firebase.firestore.DocumentReference | null;
  followers: string[];
  following: string[];
  recentActivities: Activity[];
};

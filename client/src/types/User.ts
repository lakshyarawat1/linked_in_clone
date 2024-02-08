import firebase from "firebase/compat/app";
import { Activity } from "./Activities";
import { Experience } from "./Experience";

type Profile = {
  id: string;
  username: string | null;
  displayName: string | null;
  bio: string | null;
  role: string;
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

export type User = Profile & {
  experience: Experience[];
  educatiom: Experience[];
  skills: string[];
  certifications : string[],
}

export type Company = Profile & {
  employees: string[];
  companyType: string;
  companySize: string;
  location: string;
  website: string;
  founded: string;
}
import { browserPopupRedirectResolver, browserSessionPersistence, initializeAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBqIutAbQ-u7zRJLegMA3ipkECx9X1FsOE",
  authDomain: "linked-in-clone-36ea5.firebaseapp.com",
  projectId: "linked-in-clone-36ea5",
  storageBucket: "linked-in-clone-36ea5.appspot.com",
  messagingSenderId: "146077554654",
  appId: "1:146077554654:web:1a60dd1d1784a7694f2f4f",
  measurementId: "G-9PF7ZVFX3S",
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = initializeAuth(app,{
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
})
export const firestore = getFirestore(app);
export const storage = getStorage(app);
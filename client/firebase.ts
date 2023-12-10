import firebase from 'firebase/compat/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBqIutAbQ-u7zRJLegMA3ipkECx9X1FsOE",
  authDomain: "linked-in-clone-36ea5.firebaseapp.com",
  projectId: "linked-in-clone-36ea5",
  storageBucket: "linked-in-clone-36ea5.appspot.com",
  messagingSenderId: "146077554654",
  appId: "1:146077554654:web:1a60dd1d1784a7694f2f4f",
  measurementId: "G-9PF7ZVFX3S",
};

export const app = firebase.initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth()
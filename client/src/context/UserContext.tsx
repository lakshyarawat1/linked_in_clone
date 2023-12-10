import { createContext, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import { provider } from '../../firebase.ts'
import 'firebase/compat/auth'

export const UserContext = createContext({});

interface childrenProps {
  children: React.ReactNode;
}


export const UserContextProvider = ({ children }: childrenProps) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

    useEffect(() => {
        const unsubscribe = firebase
            .auth()
            .onAuthStateChanged((user) => setCurrentUser(user));
        return () => unsubscribe();
    }, [])

    const signInWithGoogle = async () => {
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            setCurrentUser(result.user);
        } catch (err) {
            console.log(err);
        }
    }

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        }
        catch (err) {
            console.log(err);
        }
    }

    const value = {
        currentUser,
        signInWithGoogle,
        signOut,
    }
    return (
    <UserContext.Provider value={value}>{ children }</UserContext.Provider>
)
}
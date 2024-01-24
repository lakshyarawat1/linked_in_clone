import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { firestore } from "../../firebase";
import { User } from "../types/User";

const userRef = collection(firestore, "users");

export const postUserData = (object : User) => {
    addDoc(userRef, object)
        .then(() => { })
        .catch((err) => {
            console.log(err.message)
        })
}

export const getSingleUser = async (email: unknown) => {
    const singleUserQuery = query(userRef, where("email", "==", email));
    onSnapshot(singleUserQuery, (response) => {
        const userData = response.docs.map((doc) => {
            return doc.data();
        });
        console.log(userData.length)
        return userData;
    });
};
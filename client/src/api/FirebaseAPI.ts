import { addDoc, collection } from "firebase/firestore";
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
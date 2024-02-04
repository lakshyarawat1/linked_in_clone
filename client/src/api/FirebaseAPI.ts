import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { firestore } from "../../firebase";
import { User } from "../types/User";
import Swal from "sweetalert2";
import { getCurrentTimeStamp } from "../utils/useMoment";

const dbRef = collection(firestore, 'posts');
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

export const postStatus = async (status: string): Promise<void> => {
    
    const object = {
        status: status,
        timestamp: getCurrentTimeStamp('lll')
    }

    const res = await addDoc(dbRef, object);
    if (res) {
        Swal.fire({
            icon: 'success',
            title: 'Status Posted',
            text: 'Your status has been posted successfully',
        })
    }
}

export const getPosts = (setAllStatus) => {
    onSnapshot(dbRef, (res) => {
        setAllStatus(res.docs.map((doc) => {
            return { ...doc.data(), id:doc.id };
        }))
    })
}

export const getCurrentUser = () => {
    onSnapshot(userRef, (res) => {
        console.log( 
            res.docs.map((doc) => {
                return { ...doc.data(), id : doc.id }
            })
        )
    })
}
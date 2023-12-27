import { User } from "../types/User";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
interface loginProps {
  email: string | null;
  password: string;
}

export const signUpWithEmail = async (values: User) => {
  const result = await createUserWithEmailAndPassword(
    auth,
    values.email!,
    values.password
  );
  console.log(result);
  return result;
};

export const googleLogin = async () => {
  const result = signInWithPopup(auth, provider);
  return result;
};

export const loginWithCredentials = async (values: loginProps) => {
  const result = signInWithEmailAndPassword(
    auth,
    values.email!,
    values.password
  );
  return result;
};

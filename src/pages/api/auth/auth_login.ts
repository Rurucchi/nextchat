import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import firebaseApp from "../../../firebaseconfig";
const auth = getAuth(firebaseApp);


export default function login(email: string, password: string) {
  let success = false;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      success = true;
    })
    .catch((error) => {
      console.error(error);
    });
  return success;
}